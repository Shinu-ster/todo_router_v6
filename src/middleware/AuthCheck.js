import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  const Navigate = useNavigate();

  //   if (localStorage.getItem("loggedIn")) {
  //     // Do nothing...
  //   } else {
  //     history.replace("/login");
  //   }

  !localStorage.getItem("loggedIn") && Navigate("/login", { replace: true });

  //   localStorage.getItem("loggedIn") ? (() => {})() : history.replace("/login");
};

export default AuthCheck;
