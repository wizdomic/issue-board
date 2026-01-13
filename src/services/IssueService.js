import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

// ADD ISSUE
export const addIssue = async (issue) => {
  return await addDoc(collection(db, "issues"), {
    ...issue,
    status: "Open",
    createdAt: serverTimestamp(),
    createdBy: auth.currentUser.email
  });
};

// FETCH ISSUES
export const fetchIssues = async () => {
  const q = query(collection(db, "issues"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

// UPDATE STATUS
export const updateIssueStatus = async (id, status) => {
  return await updateDoc(doc(db,"issues",id), { status });
};

// DELETE ISSUE
export const deleteIssue = async (id) => {
  return await deleteDoc(doc(db,"issues",id));
};
