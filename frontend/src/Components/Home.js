import { Redirect } from "react-router-dom";
import AddTweet from "./AddTweet";
import GetTweets from "./GetTweets";
import Logout from "./Logout";

export default function Home() {
  return (
    <div className="bg-gray-800 flex flex-col">
      {localStorage.getItem("loginState") === "yes" ? null : (
        <Redirect to="/login" />
      )}
      <Logout />
      <div className="m-10 flex flex-col">
        <img
          alt="twitter logo"
          className="h-10"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAzQTlGNDsiIGQ9Ik01MTIsOTcuMjQ4Yy0xOS4wNCw4LjM1Mi0zOS4zMjgsMTMuODg4LTYwLjQ4LDE2LjU3NmMyMS43Ni0xMi45OTIsMzguMzY4LTMzLjQwOCw0Ni4xNzYtNTguMDE2DQoJYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTINCgljMCw4LjMyLDAuNzA0LDE2LjMyLDIuNDMyLDIzLjkzNmMtODcuMjY0LTQuMjU2LTE2NC40OC00Ni4wOC0yMTYuMzUyLTEwOS43OTJjLTkuMDU2LDE1LjcxMi0xNC4zNjgsMzMuNjk2LTE0LjM2OCw1My4wNTYNCgljMCwzNi4zNTIsMTguNzIsNjguNTc2LDQ2LjYyNCw4Ny4yMzJjLTE2Ljg2NC0wLjMyLTMzLjQwOC01LjIxNi00Ny40MjQtMTIuOTI4YzAsMC4zMiwwLDAuNzM2LDAsMS4xNTINCgljMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5Mg0KCWMxMy42LDQxLjU2OCw1Mi4xOTIsNzIuMTI4LDk4LjA4LDczLjEyYy0zNS43MTIsMjcuOTM2LTgxLjA1Niw0NC43NjgtMTMwLjE0NCw0NC43NjhjLTguNjA4LDAtMTYuODY0LTAuMzg0LTI1LjEyLTEuNDQNCglDNDYuNDk2LDQ0Ni44OCwxMDEuNiw0NjQsMTYxLjAyNCw0NjRjMTkzLjE1MiwwLDI5OC43NTItMTYwLDI5OC43NTItMjk4LjY4OGMwLTQuNjQtMC4xNi05LjEyLTAuMzg0LTEzLjU2OA0KCUM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
        />
        <p className="m-5 text-2xl font-semibold text-center text-white">
          Welcome to Twitter
        </p>
        <AddTweet />
        <GetTweets />
      </div>
    </div>
  );
}
