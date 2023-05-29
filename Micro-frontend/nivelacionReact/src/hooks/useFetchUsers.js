//Un custom es una función de JS que usa React
import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsuarios = async () => {
    //async await espero a que se ejecute
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => getUsuarios, []);

  return { users };
};
