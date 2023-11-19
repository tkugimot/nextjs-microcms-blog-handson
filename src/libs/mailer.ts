import nodemailer from 'nodemailer'

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
) {
  console.log(process.env.NODEMAILER_EMAIL)
  console.log(process.env.NODEMAILER_PASSWORD)
  const transporter = nodemailer.createTransport({
    port: 500,
    debug: true,
    secure: false,
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
