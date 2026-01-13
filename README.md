# Smart Issue Board

## 1. Frontend Stack Choice
I chose **React with Vite** because:
- Fast development.
- reusable UI.
- Lightweight improves production build speed.

## 2. Firestore Data Structure
All issues are stored in a flat collection called `issues`.  
Each document contains:

| Field       | Type     | Description |
|------------|---------|------------|
| title       | string  | Issue title |
| description | string  | Issue description |
| priority    | string  | Low / Medium / High |
| status      | string  | Open / In Progress / Done |
| assignedTo  | string  | Email or name of assignee |
| createdAt   | timestamp | Auto-generated timestamp |
| createdBy   | string  | Creator's email |

This structure allows **fast queries, filtering, and sorting**.

## 3. Similar Issue Handling
- When creating a new issue, the app fetches existing issues from Firestore.  
- It checks if the title contains common words with existing issues.  
- If similar issues are found, the user is warned via `window.confirm` and can choose to continue or cancel.  
- This approach avoids duplicate issues.

## 4. Challenges / Confusing Parts
- Understanding Firestore queries for filtering and sorting.  
- Handling and implementing the "Open → Done" status rule correctly.    
- Properly redirecting after login/signup using `useNavigate` instead of `Navigate`.

## 5. Possible Improvements
- Use **NLP / fuzzy search** for better similar issue detection.  
- Add **comments on issues** and **notifications**.  
- Assign users from a dropdown instead of free text.  
- Improve UI/UX with Material-UI or Tailwind for a more professional look.
# issue