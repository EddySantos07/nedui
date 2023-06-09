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

import revenue_share_percentage from "./utils/revenue_share_percentage";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(jsonValues) {
  // console.log(
  //   jsonValues.jsonValues,
  //   "json"
  //   // searhJsonValues(jsonValues.jsonValues, "revenue_amount"),
  //   // "???"
  // );
  let [currentLoanAmount, setLoanAmount] = useState(0);
  let [useOfFunds, setUseOfFunds] = useState([]);
  let [useOfFundsDropdown, setUseOfFundsDropdown] = useState("");

  const company_info_array = jsonValues.jsonValues;

  if (jsonValues.jsonValues[0].defaultProp === "") {
    return <LoadingBasicCard />;
  }

  const handleUseOfFundsChange = function (e) {
    setUseOfFundsDropdown(e.target.value);
  };

  const insertNewUseOfFunds = function (e) {
    e.preventDefault();

    let use_of_funds = useOfFundsDropdown;
    let description = e.target.Description.value;
    let amount = e.target.Amount.value;

    let newUseOfFunds = { use_of_funds, description, amount };

    setUseOfFunds((useOfFunds) => [...useOfFunds, newUseOfFunds]);
  };

  let revenue_amount_display_max = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "revenue_amount")
          .placeholder.slice(1)
          .replace(/,/g, "")
      )
    ) / 3
  ).toLocaleString("en-US");

  let revenue_amount_number_max = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "revenue_amount")
          .placeholder.slice(1)
          .replace(/,/g, "")
      )
    ) / 3
  );

  let funding_amount_min = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "funding_amount_min").value.replace(
          /,/g,
          ""
        )
      )
    )
  ).toLocaleString("en-US");

  console.log(revenue_amount_display_max, "slicee");

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
          <AttachMoneyIcon />{" "}
          {
            searhJsonValues(company_info_array, "revenue_amount").placeholder
          }{" "}
        </div>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What is your desired loan amount?
        </Typography>

        <div>
          <div>
            {" "}
            <AttachMoneyIcon />
            {funding_amount_min}{" "}
          </div>
          <div>
            {" "}
            <AttachMoneyIcon />
            {revenue_amount_display_max}{" "}
          </div>
        </div>

        <Slider
          size="small"
          defaultValue={0}
          step={1}
          // aria-label="Small"
          // valueLabelDisplay="auto"
          onChange={(e, value) => setLoanAmount(value)}
          max={revenue_amount_number_max}
          min={Number(
            searhJsonValues(company_info_array, "funding_amount_min").value
          )}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Revenue share percentage:{" "}
          {revenue_share_percentage(
            Number(
              searhJsonValues(company_info_array, "revenue_amount")
                .placeholder.slice(1)
                .replace(/,/g, "")
            ),
            currentLoanAmount
          )}
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={6}>
              Revenue Shared Frequency
            </Grid>
            <Grid item xs={6}>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="start"
                  control={<Radio />}
                  label="Monthly"
                  labelPlacement="start"
                />

                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="Weekly"
                  labelPlacement="start"
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={6}>
              Revenue Shared Frequency
            </Grid>
          </Grid>
        </Box>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={6}>
              Desired Repayment Delay
            </Grid>

            <Grid item xs={6} component={"span"}>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                value={""}
                label="Age"
                // onChange={handleChange}
              >
                {getValuesFromStarDelimiter(
                  searhJsonValues(company_info_array, "desired_repayment_delay")
                    .value
                ).map((element) => {
                  return <MenuItem value={element}> {element} </MenuItem>;
                })}
              </Select>
            </Grid>
          </Grid>
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          What will you use the funds for?
        </Typography>

        <Grid container spacing={2} columns={0}>
          <Grid item>
            <Box sx={{ flexGrow: 1 }}>
              <form
                onSubmit={(e) => {
                  insertNewUseOfFunds(e);
                }}
              >
                <Grid container spacing={1}>
                  <Grid xs>
                    <Select
                      // labelId="use_of_funds"
                      id="Use_of_funds"
                      value={useOfFundsDropdown}
                      label="use_of_funds"
                      onChange={handleUseOfFundsChange}
                    >
                      {getValuesFromStarDelimiter(
                        searhJsonValues(company_info_array, "use_of_funds")
                          .value
                      ).map((element) => {
                        return <MenuItem value={element}> {element} </MenuItem>;
                      })}
                    </Select>
                  </Grid>

                  <Grid xs>
                    <TextField
                      id="Description"
                      label="Description"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid xs>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <TextField
                          type="number"
                          id="Amount"
                          label="Amount"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <button
                          style={{
                            background: "none",
                            color: "inherit",
                            border: "none",
                          }}
                        >
                          <AddCircleOutlineIcon
                            role="button"
                            type="submit"
                            onClick={() => {
                              console.log("pressed!!!");
                            }}
                          />
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          {useOfFunds.map(function (element) {
            console.log(element, "in the funds!");
            return (<>
              <Grid item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid xs>
                      <Box component="div">{element.use_of_funds}</Box>
                    </Grid>

                    <Grid xs>
                      <Box component="div">{element.description}</Box>
                    </Grid>

                    <Grid xs>
                      <Box component="div">{element.amount}</Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              </>
            );
          })}
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function getValuesFromStarDelimiter(value) {
  return value.split("*");
}

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

function searhJsonValues(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i];
    }
  }
}

const NumberFormatter = (value, decimal) => {
  return parseFloat(parseFloat(value).toFixed(decimal)).toLocaleString(
    "en-IN",
    {
      useGrouping: true,
    }
  );
};
