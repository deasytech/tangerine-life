import nodemailer from "nodemailer"
import * as handlebars from "handlebars"
import { quotationTemplate } from "@/lib/templates/quotation";

interface EmailData {
  to: string[];
  from: string;
  subject: string;
  html: string;
}

handlebars.registerHelper('currencyFormat', function (value) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value);
});

const { SMTP_PASSWORD, SMTP_EMAIL, NEXT_PUBLIC_URL } = process.env;

const transporterConfig = nodemailer.createTransport({
  // service: "gmail",
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD
  }
})

export const sendQuotationEmail = async (
  email: string,
  names: string,
  subject: string,
  data: any,
  transporter: any = transporterConfig
) => {
  const emailData: EmailData = {
    from: email,
    to: [ "generalcustomercare@tangerine.africa" ],
    subject: subject,
    html: compileQuotationTemplate(names, data, email, NEXT_PUBLIC_URL!),
  };

  await transporter.sendMail(emailData);
};

export const compileQuotationTemplate = (
  names: string,
  data: any,
  email: string,
  url: string
) => {
  const template = handlebars.compile(quotationTemplate);
  const htmlBody = template({
    names: names,
    data,
    email,
    url: url
  });

  return htmlBody;
}

export const sendPolicyRejectionEmail = async (
  email: string[],
  info: {
    quoteNumber: string,
    product: string,
    customerName: string,
    comment: string,
  },
  transporter: any = transporterConfig
) => {
  console.log(email, info)
  const emailData: EmailData = {
    from: `Tangerine Africa <${SMTP_EMAIL}>`,
    to: email,
    subject: "Policy Rejection",
    html: `<div>
      <h3 style="font-family: Arial, sans-serif; color: #333;">Dear Agent</h3>
      <p style="font-family: Arial, sans-serif; color: #333;">The policy below has been rejected by customer care</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; color: #333;">
        <tr>
          <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Quote Number</th>
          <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">${info.quoteNumber}</td>
        </tr>
        <tr>
          <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Product</th>
          <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">${info.product}</td>
        </tr>
        <tr>
          <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Customer Name</th>
          <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">${info.customerName}</td>
        </tr>
        <tr>
          <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Rejection comment</th>
          <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">${info.comment}</td>
        </tr>
      </table>
    </div>`,
  };

  await transporter.sendMail(emailData);
};
