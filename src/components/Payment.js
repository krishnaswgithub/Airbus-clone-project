import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const price = useSelector((state) => state.search.price);
  const navigate = useNavigate();

  // State to track form field values
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  // State to track whether the form is complete
  const [isFormComplete, setIsFormComplete] = useState(false);

  // State to track payment success
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Effect to check form completeness
  useEffect(() => {
    const formFields = [nameOnCard, cardNumber, expiryDate, cvv];
    const formComplete = formFields.every((field) => field.trim() !== "");
    setIsFormComplete(formComplete);
  }, [nameOnCard, cardNumber, expiryDate, cvv]);

  // Function to handle payment
  const handlePayment = () => {
    // Simulate payment processing (you can replace this with actual payment logic)
    // Assuming payment is successful after a delay of 3 seconds
    setTimeout(() => {
      setPaymentSuccess(true);

      // Navigate to the home page after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 3000);
  };

  return (
    <Stack
      spacing={2}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      height={"90vh"}
      variant="outlined"
      width={"90%"}
      columnGap={"2rem"}
      margin={"20px auto"}
      id="paymentFormContainer"
      rowGap={"1rem"}
    >
      <Card
        sx={{ minWidth: 275, borderRadius:"10px", boxShadow:"0 10px 10px 0" }}
        style={{ width: "100%", padding: "19px", border: "1px solid gray"}}
      >
         <CardContent>
           <Typography
            variant="h4"
            style={{ textAlign: "left" }}
            marginBottom={"20px"}
          >
            Fare Summary
          </Typography>
          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Base Fare
            </Typography>
            <Typography variant="h5" component="div">
              ${price}
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Fee & Surcharges
            </Typography>
            <Typography variant="h5" component="div">
              $740
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
            padding="30px 20px"
            borderBottom="1px solid gray"
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Total Amount
            </Typography>
            <Typography variant="h5" component="div">
              ${Number(price) + 740}
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Box
        style={{
          width: "100%",
          display: "flex",
          padding: "30px",
          flexDirection: "column",
          border: "1px solid gray",
          rowGap: "1rem",
          borderRadius:"10px",
          boxShadow:"0 10px 10px 0",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "left" }}>
          Payment Method
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Expiry Date"
          variant="outlined"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="CVV"
          variant="outlined"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ alignSelf: "flex-start" }}
          onClick={handlePayment}
          disabled={!isFormComplete}
        >
          Pay
        </Button>

        {/* Display payment success message */}
        {paymentSuccess && (
          <Typography variant="body1" color="green" marginTop="1rem">
            Payment successful! Redirecting to the homepage...
          </Typography>
        )}
      </Box>
      <h1 id="hidden">ABC</h1>
    </Stack>
  );
}
