import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";

import Slider from "@mui/material/Slider";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoadingBasicCard from "../loading-financing-options/loading-financing-options";

import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// import revenue_share_percentage from "./utils/revenue_share_percentage";
import { Stack } from "@mui/material";

export default function Results(jsonValues) {
  const company_info_array = jsonValues.jsonValues;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container p={4}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Stack direction="row">1</Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  2
                </Stack>
              </Grid>

              <Grid item xs={6}>
                1
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  2
                </Stack>
              </Grid>
              <Grid item xs={6}>
                1
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  2
                </Stack>
              </Grid>
            </Grid>
          </Box>
          {/* this is the middle grey line seperating the two cards */}
          grey line here
          <Box sx={{ width: "100%" }}>
            <Grid
              
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="flex-start">
                  2
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  3
                </Stack>
              </Grid>

              <Grid item xs={6}>
                2
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  3
                </Stack>
              </Grid>

              <Grid item xs={6}>
                2
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  3
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}
