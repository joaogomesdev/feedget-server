import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4f1800cd67de7c",
    pass: "9ba6ae4749ed45",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Team Feedget <hello@feedget.com>",
      to: "João Gomes joaopfg.2002@gmail.com",
      subject,
      html: body,
    });
  }
}
