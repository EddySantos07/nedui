import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import revenue_share_percentage from "../financing-options/utils/revenue_share_percentage";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoadingBasicCard from "../loading-financing-options/loading-financing-options";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Results from "../results/results";


export default function X(jsonValues) {
  let [currentLoanAmount, setLoanAmount] = useState(0);
  let [useOfFunds, setUseOfFunds] = useState([]);
  let [useOfFundsDropdown, setUseOfFundsDropdown] = useState("");
  let [monthlyOrWeekly, setMonthlyOrWeeklyRevenueShare] = useState("");
  const [keepCount, setCount] = useState(0);

  const company_info_array = jsonValues.jsonValues;

  if (jsonValues.jsonValues[0].defaultProp === "") {
    return <LoadingBasicCard />;
  }

  const handleUseOfFundsChange = function (e) {
    setUseOfFundsDropdown(e.target.value);
  };

  const insertNewUseOfFunds = function (e) {
    e.preventDefault();

    setUseOfFunds((useOfFunds) => {
      let use_of_funds = useOfFundsDropdown;
      let description = e.target.Description.value;
      let amount = e.target.Amount.value;

      let newUseOfFunds = {
        use_of_funds,
        description,
        amount,
        indx: useOfFunds.length,
      };

      return [...useOfFunds, newUseOfFunds];
    });
  };

  const deleteEntry = function (e, v, i) {
    setUseOfFunds((useOfFunds) => {
      // useOfFunds[e.target.indx]

      for (let i = 0; i < useOfFunds.length; i++) {
        if (useOfFunds[i].indx === v.indx) {
          console.log(v, i);
          useOfFunds.splice(i, 1);
          break;
        }
      }

      return [...useOfFunds];
    });
  };

  let sliderMin = Number(
    searhJsonValues(company_info_array, "funding_amount_min").value
  );

  let revenue_amount_number_max = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "revenue_amount")
          .placeholder.slice(1)
          .replace(/,/g, "")
      )
    ) / 3
  );

  let revenue_amount_display_max = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "revenue_amount")
          .placeholder.slice(1)
          .replace(/,/g, "")
      )
    ) / 3
  ).toLocaleString("en-US");

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

  return (
    <>
      <Grid item xs={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box sx={{ width: "100%" }}>
              {/* Title Section*/}

              {/* Business Revenue section */}
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} md={12} p={3}>
                  <Typography variant="h6" component="div">
                    Financing Options
                  </Typography>
                </Grid>

                <Grid item xs={12} md={12} p={1}>
                  What is your annual business revenue?
                </Grid>

                <Grid item xs={12} md={12}>
                  {/* Xmoney goes here  */}
                  <div style={{ backgroundColor: "#F5F5F5" }}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={1} md={1}>
                        <AttachMoneyIcon />
                      </Grid>
                      <Grid item>
                        {" "}
                        <div style={{ paddingTop: 4 }}>
                          {
                            searhJsonValues(
                              company_info_array,
                              "revenue_amount"
                            ).placeholder
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item xs={12} md={12} p={1}></Grid>

                {/* LOAN AMOUNT SECTION */}
                <Grid item xs={12} md={12}>
                  What is your desired loan amount?
                </Grid>

                <Grid item xs={6} md={6}>
                  <div>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={1} md={1}>
                        <AttachMoneyIcon />
                      </Grid>
                      <Grid item>
                        {" "}
                        <div style={{ paddingTop: 4 }}>
                          {funding_amount_min}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item>
                  <div>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={1} md={1}>
                        <AttachMoneyIcon />
                      </Grid>
                      <Grid item>
                        {" "}
                        <div style={{ paddingTop: 4 }}>
                          {revenue_amount_display_max}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item xs={8} md={8}>
                  <Slider
                    size="small"
                    defaultValue={sliderMin}
                    step={1}
                    // aria-label="Small"
                    // valueLabelDisplay="auto"
                    onChange={(e, value) => setLoanAmount(value)}
                    max={revenue_amount_number_max}
                    min={Number(
                      searhJsonValues(company_info_array, "funding_amount_min")
                        .value
                    )}
                  />
                </Grid>

                <Grid item>Slider Num here</Grid>
                {/*  */}
                <Grid item xs={5} md={5}>
                  Revenue Share Percentage:
                </Grid>

                <Grid item>
                  {revenue_share_percentage(
                    Number(
                      searhJsonValues(company_info_array, "revenue_amount")
                        .placeholder.slice(1)
                        .replace(/,/g, "")
                    ),
                    currentLoanAmount
                  )}
                </Grid>

                <Grid item xs={12} md={12}>
                  {" "}
                </Grid>
                {/*  */}
                <Grid
                  item
                  xs={5}
                  md={5}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Revenue Share Frequency:
                </Grid>

                <Grid item style={{ display: "flex", alignItems: "center" }}>
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
                      onClick={() => setMonthlyOrWeeklyRevenueShare("Monthly")}
                    />

                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="Weekly"
                      labelPlacement="start"
                      onClick={() => setMonthlyOrWeeklyRevenueShare("Weekly")}
                    />
                  </RadioGroup>
                </Grid>

                <Grid item xs={12} md={12}>
                  {" "}
                </Grid>
                {/*  */}
                <Grid item xs={5} md={5}>
                  Desired Repayment Delay:
                </Grid>

                <Grid item>
                  <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    value={""}
                    label="Age"
                    // onChange={handleChange}
                  >
                    {getValuesFromStarDelimiter(
                      searhJsonValues(
                        company_info_array,
                        "desired_repayment_delay"
                      ).value
                    ).map((element) => {
                      return <MenuItem value={element}> {element} </MenuItem>;
                    })}
                  </Select>
                </Grid>
                {/*  */}
                <Grid item xs={12} md={12}>
                  What will you use the funds for?
                </Grid>

                <Grid item xs={12} md={12}>
                  {" "}
                </Grid>

                <Grid item container spacing={2} columns={0}>
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
                                searhJsonValues(
                                  company_info_array,
                                  "use_of_funds"
                                ).value
                              ).map((element) => {
                                return (
                                  <MenuItem value={element}>
                                    {" "}
                                    {element}{" "}
                                  </MenuItem>
                                );
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

                  <Grid item xs={12} md={12}>
                    {" "}
                  </Grid>

                  {/* {useOfFunds.map(function (element) {
                console.log(element, "in the funds!");
                return (
                  <>
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
              })} */}
                </Grid>

                {useOfFunds.map(function (element, index) {
                  return (
                    <>
                      <Grid item xs={3} md={3}>
                        {element.use_of_funds}
                      </Grid>
                      <Grid item xs={3.8} md={3.8}>
                        {element.description}
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <AttachMoneyIcon /> {element.amount}
                      </Grid>
                      <Grid
                        item
                        xs={0.5}
                        md={0.5}
                        style={{ display: "flex", alignItems: "center" }}
                        // container
                        // direction="column"
                      >
                        <button
                          style={{
                            background: "none",
                            color: "inherit",
                            border: "none",
                          }}
                        >
                          <DeleteIcon
                            role="button"
                            type="submit"
                            onClick={(e, v) => {
                              console.log("pressed!!!");
                              deleteEntry(e, element, index);
                            }}
                          />
                        </button>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              {/*  */}
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        {/* <BasicCard /> */}
        <Results jsonValues={{ jsonValues, currentLoanAmount, monthlyOrWeekly} } />
      </Grid>
    </>
  );
}


function getValuesFromStarDelimiter(value) {
  return value.split("*");
}

function searhJsonValues(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i];
    }
  }
}
