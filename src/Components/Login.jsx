import axios from "axios";
import { useContext, useState } from "react";
/*import { AuthContext } from "../context/Auth";*/
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("/auth/login", { email, password });
    setUser(res.data);
    navigate("/");
  };

  return (
    <div>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
