import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    con: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    service: 'gmail',
    auth: {
      user: "hredge.scaleedge@gmail.com",
      pass: "dymvzahdcfwvkgus",
    },
    tls: {
      rejectUnauthorized: false
    }
  })
//   const transporter = nodemailer.createTransport({
//     con: true,
//     host: 'az1-ts112.a2hosting.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'sumit@scaleedge.in',
//         pass: 'Sumit@4567',
//     },
// });
export default transporter