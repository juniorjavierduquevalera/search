import { useState, useEffect } from "react";

const useSearch = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //función para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  //metodo de filtrado 1
  let results = [];
  if (!search) {
    results = users;
  } else {
    results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  //metodo de filtrado 2
  //    const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    showData();
  }, []);
  return { searcher, users, search, results };
};

export default useSearch;
