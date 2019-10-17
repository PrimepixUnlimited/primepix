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
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true, // use SSL
    // auth: {
    //     user: 'yourusername@gmail.com',
    //     pass: 'yourpassword'
    // }
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_POST,
    ssl: false,
    tls: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  },
  views: {
    root: templatesPath
  }
})
