import React from 'react'
import { } from 'semantic-ui-react'
// import { Html } from "@react-email/components";
// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "Julian.R108687637@gmail.com",
//     pass: "tjnc fbqg joaq ohlq",
//   },
// });

function Subscribe(props) {
//     const sendEmail = (email) => {
//         console.log("Sending email to " + email)
      
//         async function send_mail() {
//           // send mail with defined transport object
//           const info = await transporter.sendMail({
//             from: 'Julian.R108687637@gmail.com', // sender address
//             to: email, // list of receivers
//             subject: "Welcome to the DEV@Deakin daily newsletter", // Subject line
//             text: "Newsletter", // plain text body
//             html: "<h1>"
//                   + "DAILY INSIDER:"
//               + "</h1>"
//               + "<h2>"
//                   + "IT WAS RAINY TODAY"
//               + "</h2>"
//               + "<p>Yeah, that's about it</p>"
//               + "<br>"
//               + "<hr>"
//               + "<br>"
//               + "<div class='credits' style='text-align: center;'>"
//                   + "<p>Directed by: Julian Ryan</p>"
//                   + "<p>Executive Producer: Julian Ryan</p>"
//                   + "<p>Co-Producer: Julian Ryan</p>"
//                   + "<p>Consulting Producer: Julian Ryan</p>"
//                   + "<p>Produced by: Julian Ryan</p>"
//                   + "<p>Grocery Producer: Julian Ryan</p>"
//                   + "<p>Music by: Julian Ryan (Just kidding, there's no music)</p>"
//                   + "<p>Edited By: Julian Ryan</p>"
//                   + "<p>Special Thanks to: Julian Ryan</p>"
//                   + "<p>Special Grievances to: Julian Ryan</p>"
//                   + "<p>Please Stop: Julian Ryan</p>"
//               + "</div>"
//           });
        
//           console.log("Message sent: %s", info.messageId);
//           // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//         }
//     }

    return (
        <form action="/" method="post">
            <div class="subscribe-section">
                <div class="subscribe-components" width="100%">
                    SIGN UP FOR OUR DAILY INSIDER
                    <input type="email" placeholder="Enter your email" id="email" value=""/>
                    <button type="submit" id="subscribe">Subscribe</button>
                </div>
            </div>
        </form>
    );
}

export default Subscribe;