import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function Profile() {
  const { username } = useContext(UserContext);

  
  return (
    <p>
      שם משתמש: <strong>{username || "לא הוזן עדיין"}</strong>
    </p>
  );
}
