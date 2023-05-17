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

import revenue_share_percentage from "../financing-options/utils/revenue_share_percentage";

// import revenue_share_percentage from "./utils/revenue_share_percentage";
import { Stack } from "@mui/material";

export default function Results(props) {
  const { currentLoanAmount, jsonValues, monthlyOrWeekly } = props.jsonValues;

  const company_info_array = jsonValues.jsonValues;

  console.log(currentLoanAmount, company_info_array, props, "JSON VALUES");

  let business_revenue = Math.trunc(
    Math.floor(
      Number(
        searhJsonValues(company_info_array, "revenue_amount")
          .placeholder.slice(1)
          .replace(/,/g, "")
      )
    )
  );

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid item xs={12} md={12} p={3}>
          <Typography variant="h6" component="div">
            Results
          </Typography>
        </Grid>

        <Grid container p={4}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Stack direction="row">Annual Business Revenue:</Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  <AttachMoneyIcon />

                  {
                    searhJsonValues(company_info_array, "revenue_amount")
                      .placeholder
                  }
                </Stack>
              </Grid>

              <Grid item xs={6}>
                Funding Amount:
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  <AttachMoneyIcon /> {currentLoanAmount}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                Fees:
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  (
                  {
                    searhJsonValues(
                      company_info_array,
                      "desired_fee_percentage"
                    ).value
                  }
                  %){" "}
                  {getFeePercentageAmount(
                    searhJsonValues(
                      company_info_array,
                      "desired_fee_percentage"
                    ).value,
                    currentLoanAmount
                  )}
                </Stack>
              </Grid>
            </Grid>
            {/* this is the middle seperating the two cards */}
            <hr style={{ border: "1px px solid #e4dede", width: "85%" }} />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="flex-start">
                  Total Revenue Share:
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  <AttachMoneyIcon />{" "}
                  {currentLoanAmount +
                    getFeePercentageAmount(
                      searhJsonValues(
                        company_info_array,
                        "desired_fee_percentage"
                      ).value,
                      currentLoanAmount
                    )}
                </Stack>
              </Grid>

              <Grid item xs={6}>
                Expected transfers:

              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" justifyContent="end">
                  {/* {monthlyOrWeekly === "Weekly"
                    ? Math.ceil(
                        ((currentLoanAmount +
                          getFeePercentageAmount(
                            searhJsonValues(
                              company_info_array,
                              "desired_fee_percentage"
                            ).value,
                            currentLoanAmount
                          ) *
                            52) /
                          searhJsonValues(company_info_array, "revenue_amount")
                            .placeholder) *
                          revenue_share_percentage(
                            Number(
                              searhJsonValues(
                                company_info_array,
                                "revenue_amount"
                              )
                                .placeholder.slice(1)
                                .replace(/,/g, "")
                            ),
                            currentLoanAmount
                          ).slice(-1)
                      )
                    : Math.ceil(
                        ((currentLoanAmount +
                          getFeePercentageAmount(
                            searhJsonValues(
                              company_info_array,
                              "desired_fee_percentage"
                            ).value,
                            currentLoanAmount
                          ) *
                            12) /
                          searhJsonValues(company_info_array, "revenue_amount")
                            .placeholder) *
                          revenue_share_percentage(
                            Number(
                              searhJsonValues(
                                company_info_array,
                                "revenue_amount"
                              )
                                .placeholder.slice(1)
                                .replace(/,/g, "")
                            ),
                            currentLoanAmount
                          ).slice(-1)
                      )} */}

                  {/* {monthlyOrWeekly === "Weekly"
                    ? Math.ceil(
                        (currentLoanAmount *
                          getFeePercentageAmount(
                            searhJsonValues(
                              company_info_array,
                              "desired_fee_percentage"
                            ).value,
                            currentLoanAmount
                          ) *
                          52) /
                          (business_revenue *
                            revenue_share_percentage(
                              Number(
                                searhJsonValues(
                                  company_info_array,
                                  "revenue_amount"
                                )
                                  .placeholder.slice(1)
                                  .replace(/,/g, "")
                              ),
                              currentLoanAmount
                            ).slice(0, -1))
                      )
                    : Math.ceil(
                        (getFeePercentageAmount(
                          searhJsonValues(
                            company_info_array,
                            "desired_fee_percentage"
                          ).value,
                          currentLoanAmount
                        ) *
                          12) /
                          ( searhJsonValues(company_info_array, "revenue_amount")
                            .placeholder *
                          revenue_share_percentage(
                            Number(
                              searhJsonValues(
                                company_info_array,
                                "revenue_amount"
                              )
                                .placeholder.slice(1)
                                .replace(/,/g, "")
                            ),
                            currentLoanAmount
                          ).slice(-1))
                      )} */}
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

function getFeePercentageAmount(feePercentage, num) {
  return feePercentage * num;
}

function searhJsonValues(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i];
    }
  }
}
