import { useState, useEffect } from "react";

import useFetchData from "./dashboard/API/api_call";

import BasicCard from "./dashboard/financing-options/financing-options";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Results from "./dashboard/results/results";
import X from "./dashboard/consturction/financing-options";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [jsonValues, setState] = useState([{ defaultProp: "" }]);

  useEffect(() => {
    async function Wait() {
      let result = await useFetchData();

      setState(result);
    }
    Wait();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <BasicCard jsonValues={jsonValues} /> */}
        <X jsonValues={jsonValues} />
      </Grid>
    </Box>
  );
}

export default App;
