// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function HocJson(Component, entity) {
//   return function HocJsonComponent() {
//     const [isLoad, setIsload] = useState(false);
//     const [user, setUsers] = useState({});
//     useEffect(() => {
//       axios
//         .get("http://localhost:3001/")
//         .then((res) => setUsers(res.user))
//         .catch((err) => alert(err))
//         .finally(() => setIsload(true));
//     }, []);
//     return <Component data={user} />;
//   };
// }
