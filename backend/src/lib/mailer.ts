import * as path from 'path'
import * as Email from 'email-templates'

import Config from '../config'

const templatesPath = path.join(__dirname, '../emails')

export default new Email({
  message: {
    from: Config.MAIL.from
  },
  send: true,
  preview: false,
  transport: {
    // GMAIL setup
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, // use SSL
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
    // MAILTRAP
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_POST,
    // ssl: false,
    // tls: true,
    // auth: {
    //   user: process.env.MAIL_USERNAME,
    //   pass: process.env.MAIL_PASSWORD
    // }
  },
  views: {
    root: templatesPath
  }
})

export const sendEmail = async (mailer, options: any) => {
  if (mailer) {
    try {
      await mailer.send(options)
    } catch (err) {
      throw new Error(err)
    }
  }
}
