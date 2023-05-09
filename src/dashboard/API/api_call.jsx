import { useEffect, useState } from "react";

const fetchData = () => {
  //   const [githubData, setGithubData] = useState([]);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return fetch(
    `https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json`
  )
    .then((response) => response.json())
    .then((data) => setGithubData(data));
};

export default fetchData;