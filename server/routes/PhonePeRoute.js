const crypto = require("crypto");
const axios = require("axios");
const express = require("express");
const router = express.Router();

const salt_key = "e87ef9e6-a7c8-476e-9b99-85e7a54ae48d";
const merchant_id = "M22V4CJL21AHY";

const generateTransactionId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 100000);
  const merchantPrefix = "MT";
  const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionID;
};



router.post("/payment", async (req, res) => {
  console.log("aaa gya");
  const { name, amount } = req.body.data;
  console.log("amount", name, amount)
  const merchantTransactionId = generateTransactionId(); // Generate unique transaction ID
  console.log("Generated Transaction ID:", merchantTransactionId);
  const data = {
    merchantId: merchant_id,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: "anuragiritu",
    amount: amount * 100,
    callbackUrl: "https://webhook.site/callback-url",
    redirectUrl: "https://f2fintech.com/",
    redirectMode: "POST",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const payload = JSON.stringify(data);
  const payloadMain = Buffer.from(payload).toString("base64");
  const keyIndex = 1;
  const string = payloadMain + "/pg/v1/pay" + salt_key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  console.log("Payload: ", payloadMain);
  console.log("Checksum: ", checksum);

  const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

  const options = {
    method: "POST",
    url: prod_URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
    },
    data: {
      request: payloadMain,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      //   console.log("Response data: ", response.data);
      console.log(
        "Redirect URL: ",
        response.data.data.instrumentResponse.redirectInfo.url
      );
      return res
        .status(200)
        .send(response.data.data.instrumentResponse.redirectInfo.url);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
