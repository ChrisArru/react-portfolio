import Email from "../../utils/email";
const sendGridAPIKey =
  "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";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    try {
      await new Email(data).sendEmail(sendGridAPIKey);
      res.status(200).json({ message: "Email inviata" });
    } catch (error) {
      console.log(error);
      const code = error.toString().split(":")[1];
      console.log(code);
      res.status(code).json({
        message:
          "Email non inviata. Problemi con il server. Inviare un'email a mella.emilio@gmail.com",
      });
    }
  }
}
