import { useState } from "react";
import { addIssue, fetchIssues } from "../services/IssueService";

export default function IssueForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Similar Issue Check (basic)
    const existing = await fetchIssues();
    const similar = existing.filter(i =>
      i.title.toLowerCase().includes(title.toLowerCase().split(" ")[0])
    );

    if (similar.length > 0) {
      const confirmCreate = window.confirm(
        "Similar issues exist. Do you still want to create this issue?"
      );
      if (!confirmCreate) return;
    }

    // 2️⃣ Add issue
    await addIssue({ title, description, priority, assignedTo });

    // Clear form
    setTitle("");
    setDescription("");
    setPriority("Low");
    setAssignedTo("");

    // Callback to refresh list
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Create Issue</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input placeholder="Assigned To" value={assignedTo} onChange={e => setAssignedTo(e.target.value)} />
      <button>Create Issue</button>
    </form>
  );
}
