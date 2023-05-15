import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function X() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          {/* Title Section*/}
          <Grid
            p={4}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              Financing options
            </Grid>
          </Grid>

          {/* Business Revenue section */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={12}>
              What is your anual business revenue?
            </Grid>

            <Grid item xs={12} md={12}>
              X{/* money goes here  */}
            </Grid>

            {/* LOAN AMOUNT SECTION */}
            <Grid item xs={12} md={12}>
              What is your desired loan amount?
            </Grid>

            <Grid item xs={6} md={6}>
              Num1
            </Grid>

            <Grid item>Num2</Grid>

            <Grid item xs={6} md={6}>
              Slider here
            </Grid>

            <Grid item>Slider Num here</Grid>
            {/*  */}
            <Grid item xs={5} md={5}>
              Revenue Share Percentage:
            </Grid>

            <Grid item>Percentage here</Grid>
            {/*  */}
            <Grid item xs={5} md={5}>
              Revenue Share Frequency:
            </Grid>

            <Grid item>Rev share here</Grid>
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
