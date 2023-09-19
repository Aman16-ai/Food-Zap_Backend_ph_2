const twilio = require("twilio");

// const client = twilio(
//   process.env.twilio_account_sid,
//   process.env.twilio_auth_token
// );

const client = twilio(
  "AC9c5572b1664f0442c08d307cbb3ab8be",
  "070fbe2c8ec87d7feb9c1095d56e62db"
);

const sendMessage = (number,message) => {
  console.log("number : "+number," message : "+message)
  const senderNumber = "+13612648897";
  client.messages
    .create({
      body: message,
      from: senderNumber,
      to: number,
    })
    .then((message) => console.log("Message Sent"))
    .catch((err) => console.log(err));
};

// sendMessage("+918285866269","hi foodzap")
module.exports = sendMessage
