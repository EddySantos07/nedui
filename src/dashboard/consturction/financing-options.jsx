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

export default function X(jsonValues) {
  let [currentLoanAmount, setLoanAmount] = useState(0);
  let [useOfFunds, setUseOfFunds] = useState([]);
  let [useOfFundsDropdown, setUseOfFundsDropdown] = useState("");

  const company_info_array = jsonValues.jsonValues;

  if (jsonValues.jsonValues[0].defaultProp === "") {
    return <LoadingBasicCard />;
  }

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
                        searhJsonValues(company_info_array, "revenue_amount")
                          .placeholder
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
                    <div style={{ paddingTop: 4 }}>{funding_amount_min}</div>
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
                defaultValue={0}
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
            <Grid item xs={5} md={5}>
              Revenue Share Frequency:
            </Grid>

            <Grid item>
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

          
            {/*  */}
            <Grid item xs={5} md={5}>
              Desired Repayment Delay:
            </Grid>

            <Grid item>Repayment Delay here</Grid>
            {/*  */}
            <Grid item xs={12} md={12}>
              What will you use the funds for?
            </Grid>

            <Grid item xs={3.3} md={3.3}>
              sec1
            </Grid>
            <Grid item xs={3.3} md={3.3}>
              sec2
            </Grid>
            <Grid item xs={3.3} md={3.3}>
              sec3
            </Grid>
            <Grid item xs={1} md={1}>
              sec4
            </Grid>
          </Grid>

          {/*  */}
        </Box>
      </CardContent>
    </Card>
  );
}

function searhJsonValues(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i];
    }
  }
}
