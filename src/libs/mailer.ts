import nodemailer from 'nodemailer'

export async function sendMail(name: string, email: string, message: string) {
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
    to: process.env.NODEMAILER_EMAIL,
    subject: 'Inquiry from zubora-code.net',
    text: `Inquery from ${name}. message: ${message}. email: ${email}`,
    html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
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
