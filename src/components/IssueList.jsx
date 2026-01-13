import { useEffect, useState } from "react";
import { fetchIssues, updateIssueStatus, deleteIssue } from "../services/IssueService";

export default function IssueList({ refresh }) {
  const [issues, setIssues] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const loadIssues = async () => {
    let data = await fetchIssues();
    if (statusFilter) data = data.filter(i => i.status === statusFilter);
    if (priorityFilter) data = data.filter(i => i.priority === priorityFilter);
    setIssues(data);
  };

  useEffect(() => {
    loadIssues();
  }, [refresh, statusFilter, priorityFilter]);

  const handleStatusChange = async (id, oldStatus) => {
    let newStatus;
    if (oldStatus === "Open") newStatus = "In Progress";
    else if (oldStatus === "In Progress") newStatus = "Done";
    else return alert("Issue already Done");

    // Status Rule: cannot go directly Open → Done
    if (oldStatus === "Open" && newStatus === "Done") {
      return alert("Move to In Progress before marking Done");
    }

    await updateIssueStatus(id, newStatus);
    loadIssues();
  };

  return (
    <div>
      <h3>Issues</h3>

      <div style={{ marginBottom: "10px" }}>
        <label>Status: </label>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <label style={{ marginLeft: "20px" }}>Priority: </label>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option value="">All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {issues.map(i => (
        <div key={i.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <b>{i.title}</b> | {i.priority} | {i.status} | Assigned: {i.assignedTo} | Created by: {i.createdBy}
          <div style={{ marginTop: "5px" }}>
            <button onClick={() => handleStatusChange(i.id, i.status)}>Next Status</button>
            <button onClick={() => deleteIssue(i.id).then(loadIssues)} style={{ marginLeft: "10px" }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
