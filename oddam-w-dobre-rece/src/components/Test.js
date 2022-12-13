// import React, { useState } from "react";
// import FakeAPI from "./data/fakeAPI";

// export default function Form() {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [usernameError, setUsernameError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [user, setUser] = useState(null);
//   const [credentailsError, setCredentailsError] = useState(false);

//   const handleChange = (e) =>
//     setCredentials((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));

//   const logIn = (e) => {
//     e.preventDefault();

//     setUsernameError(credentials.username.length < 2);
//     setPasswordError(credentials.password.length < 4);

//     if (credentials.username.length < 2 || credentials.password.length < 4) {
//       return;
//     }

//     console.log("zaloguj...");
//     FakeAPI.login(credentials)
//       .then((user) => {
//         console.log(user);
//         setUser(user);
//       })
//       .catch((err) => {
//         console.log(err);
//         setCredentailsError(err);
//       });
//   };

//   if (user) {
//     return (
//       <h1>
//         Witaj {user.name}ie {user.surname}
//       </h1>
//     );
//   }

//   return (
//     <form onSubmit={logIn}>
//       <input
//         id="username"
//         type="text"
//         placeholder="login"
//         value={credentials.username}
//         onChange={handleChange}
//       />

//       {usernameError && (
//         <p className="alert alert-danger">Login musi być dłuższy niż 2 znaki</p>
//       )}
//       <input
//         id="password"
//         type="text"
//         placeholder="password"
//         value={credentials.password}
//         onChange={handleChange}
//       />
//       {passwordError && (
//         <p className="alert alert-danger">
//           Password musi być dłuższy niż 2 znaki
//         </p>
//       )}
//       {credentailsError && (
//         <p className="alert alert-danger">{credentailsError}</p>
//       )}
//       <button type="submit">Zaloguj</button>
//     </form>
//   );
// }