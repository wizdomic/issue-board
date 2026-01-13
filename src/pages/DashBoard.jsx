import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";
import { useState } from "react";

export default function Dashboard() {
  const [reload, setReload] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <IssueForm onAdd={() => setReload(!reload)} />
      <IssueList refresh={reload} />
    </div>
  );
}
