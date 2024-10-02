export const quotationTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quotation Email</title>
    <style type="text/css">
    .wrapper,body{background-color:#f5f7fa}.footer,.main{margin:0 auto;width:100%;border-spacing:0;font-family:sans-serif}.footer p,.paragraph p{line-height:24px;font-weight:400}body{margin:0}table{border-spacing:0}td{padding:0}img{border:0}.wrapper{width:100%;table-layout:fixed;padding-top:60px;padding-bottom:60px}.main{background-color:#fff;max-width:600px;color:#46586b}.title{color:#222d38;font-size:28px;font-weight:600}.paragraph{padding:0 24px 12px}.paragraph p{font-size:15px}.btn{background-color:#ff9100;color:#fff;padding:12px 40px;border-radius:9999px;text-decoration:none}.footer{max-width:400px;color:#46586b}.footer p{font-size:12px}
    </style>
  </head>
  <body>
    <center class="wrapper">
      <table class="main">
        <tr>
          <td style="padding: 24px 0 12px 24px">
            <img
              src="https://tafrica-drab.vercel.app/images/email-logo.svg"
              alt="logo"
              width="136"
              height="44"
            />
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 12px 24px">
            <h1 class="title">Quote Request</h1>
          </td>
        </tr>
        <tr>
          <td class="paragraph">
            <p>Hi Sir/Ma,</p>
            <p>
              {{ names }} just requested for a quote with the below information:
            </p>
            <p>
              Request Product: <strong>{{ data.product }}</strong><br />
              Sender Email: <strong>{{ email }}</strong><br />
              Sender Country: <strong>{{ data.countries }} {{ data.last_name }}</strong><br />
              Sender State: <strong>{{ data.states }}</strong><br />
            </p>

            <p>
              Thank You,<br />
              {{ names }}.
            </p>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;
