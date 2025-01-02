import { useEffect, useState } from "react";

  const [data, setData] = useState([]);

useEffect(() => {
  async function fetchData() {
    const result = await fetch(
      "https://opensheet.elk.sh/1P8hRYbzVLuwudduB7tMsXYncfZ8YPKcnXoZTlWK9iuE/response"
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