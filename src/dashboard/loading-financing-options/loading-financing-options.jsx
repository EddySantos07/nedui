import * as React from "react";
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

import LinearProgress from '@mui/material/LinearProgress';

import TextField from "@mui/material/TextField";

import Slider from "@mui/material/Slider";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function LoadingBasicCard(jsonValues) {
    console.log("called loading")
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Financing Options
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What is your annual business revenue?
        </Typography>

        <div
          style={{
            background: "#F5F5F5",
            position: "relative",
            margin: "auto",
            "padding-top": "10px",
            "padding-bottom": "13px",
          }}
        >
          {" "}
          <AttachMoneyIcon /> < LinearProgress/> {" "}
        </div>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What is your desired loan amount?
        </Typography>

        <Slider
          size="small"
          // defaultValue={70}
          aria-label="Small"
          // valueLabelDisplay="auto"
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Revenue share percentage:
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Revenue Shared Frequency
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Desired Repayment Delay
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What will you use the funds for?
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}