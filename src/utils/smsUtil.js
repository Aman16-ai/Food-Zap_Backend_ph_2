const twilio = require("twilio");

// const client = twilio(
//   process.env.twilio_account_sid,
//   process.env.twilio_auth_token
// );

const client = twilio(
  "AC9c5572b1664f0442c08d307cbb3ab8be",
  "3bd8cef308455c6f76f8d21c25448383"
);

const sendMessage = async(number,message) => {
  console.log("number : "+number," message : "+message)
  const senderNumber = "+13612648897";
  // const result = client.messages
  //   .create({
  //     body: message,
  //     from: senderNumber,
  //     to: number,
  //   })
  //   .then((message) => console.log("Message Sent"))
  //   .catch((err) => console.log(err));
  try {
    const result = await client.messages.create({
      body:message,
      from:senderNumber,
      to:number
    })
    console.log(result)
    return result
  }
  catch(err) {
    console.log("error agai",err)
    return err
  }

    
};

// sendMessage("+918285866269","hi foodzap")
module.exports = sendMessage
