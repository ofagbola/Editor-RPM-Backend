import { MailtrapClient } from "mailtrap";

const TOKEN = "90ec5ac63620b3c4f0d24df92ca17641";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ token: TOKEN });

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Editor RPM",
};

const recipients = [{ email: "web.dlilibrary@gmail.com" }];

export const sendNotification = async ({
  message,
  subject,
  category,
}: {
  message: string;
  subject: string;
  category: string;
}) => {
  client
    .send({
      from: sender,
      to: recipients,
      subject: subject,
      text: message,
      category: category,
    })
    .then(console.log, console.error);
};
