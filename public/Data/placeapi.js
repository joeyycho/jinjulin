import { useEffect, useState } from "react";

  const [data, setData] = useState([]);

useEffect(() => {
  async function fetchData() {
    const result = await fetch(
      process.env.REACT_APP_LIST_API  // API URL
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    setData(result);
    // console.log(result)
  }
  fetchData();
}, []);