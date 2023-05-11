import { useEffect, useState } from "react";

const useFetchData = async function () {
  //   const [githubData, setGithubData] = useState([]);

  const response = await fetch(
    `https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json`
  );
  const data = await response.json();
  return data;
};

export default useFetchData;
