import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
  if (!email || !password) {
    alert("Enter email and password");
    return;
  }

  // Domain check
  if (!email.endsWith("@kccemsr.edu.in")) {
  alert("Only kccemsr.edu.in emails allowed");
  return;
}
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registered Successfully");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div className="center">
      <h1>ID Card</h1>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}