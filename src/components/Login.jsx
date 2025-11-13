import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function Login() {
  const { setUsername } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        placeholder="הכנס שם משתמש"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
