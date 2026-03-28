import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>ID Card</h1>

      <button onClick={()=>navigate("/create")}>Create Card</button>

      <button onClick={async ()=>{
        await signOut(auth);
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}