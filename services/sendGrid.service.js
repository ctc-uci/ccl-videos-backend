const sendGridAPI = require('@sendgrid/mail');

module.exports = {
  sendEmail: async (email, subject, html) => {
    sendGridAPI.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: subject,
      html: html,
    };
    await sendGridAPI.send(msg);
  },
  generateEmailMsg: (
    code,
    lesson
  ) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 600px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: inherit;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #1188E6;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
  <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Viga&display=swap" rel="stylesheet"><style>
body {font-family: 'Viga', sans-serif;}
</style><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#f0f0f0;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
        <tbody><tr>
          <td valign="top" bgcolor="#f0f0f0" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tbody><tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tbody><tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                  <tbody><tr>
                                    <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
  <img style="padding: 10px" src="https://ccl-videos.s3-us-west-1.amazonaws.com/ccl-white.jpeg" width="60" alt="">

</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 40px 30px;" bgcolor="#0055FF">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top">
      <table class="column" width="550" style="width:550px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b422590c-5d79-4675-8370-a10c2c76af02">
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1995753e-0c64-4075-b4ad-321980b82dfe">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:36px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff; font-size: 40px; font-family: inherit">Thank you for activating your lesson!</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2ffbd984-f644-4c25-9a1e-ef76ac62a549">
<tbody>
  <tr>
    <td style="padding:18px 20px 20px 0px; line-height:24px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit; color: white"><span style="font-size: 24px">We hope you enjoy ${
      lesson.title
    }!</span></div>
<div style="font-family: inherit; text-align: inherit"></div><div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="69fc33ea-7c02-45ed-917a-b3b8a6866e89">
  <tbody>
    <tr>
      <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
          <tbody>
            <tr>
            <td align="center" bgcolor="#000000" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
              <a href="https://cclvideos.netlify.app" style="background-color:#000000; border:1px solid #000000; border-color:#000000; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-size:18px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Return to website</a>
            </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table></td>
          </tr>
        </tbody>
      </table>
      
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8b5181ed-0827-471c-972b-74c77e326e3d">
<tbody>
  <tr>
    <td style="padding:30px 20px 18px 30px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #0055ff; font-size: 24px">Order Summary</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f7373f10-9ba4-4ca7-9a2e-1a2ba700deb9">
<tbody>
  <tr>
    <td style="padding:0px 30px 0px 30px;" role="module-content" height="100%" valign="top" bgcolor="">
      <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
        <tbody>
          <tr>
            <td style="padding:0px 0px 3px 0px;" bgcolor="#e7e7e7"></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="264ee24b-c2b0-457c-a9c1-d465879f9935">
<tbody>
  <tr>
    <td style="padding:18px 20px 18px 30px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Lesson Code: ${
      code.code
    }</div>
<div style="font-family: inherit; text-align: inherit">Redeemed on: ${Date()}</div>
<div style="font-family: inherit; text-align: inherit"><span style="color: #C70039"><strong>Expiration Date: ${
    code.expirationDate
  }</strong></span></div>
<div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:20px 20px 0px 30px;" bgcolor="#FFFFFF">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top">
      <table class="column" width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="239f10b7-5807-4e0b-8f01-f2b8d25ec9d7">
</table></td>
          </tr>
        </tbody>
      </table>
      <table class="column" width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f404b7dc-487b-443c-bd6f-131ccde745e2">
</table></td>
          </tr>
        </tbody>
      </table>
    <table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"></td>
    </tr>
  </tbody>
</table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:20px 20px 0px 30px;" bgcolor="#FFFFFF">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top">
      <table class="column" width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="239f10b7-5807-4e0b-8f01-f2b8d25ec9d7.1">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
      <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="104" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://ccl-videos.s3-us-west-1.amazonaws.com/ccl-logo.png" height="104">
    </td>
  </tr>
</tbody>
</table></td>
          </tr>
        </tbody>
      </table>
      <table class="column" width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f404b7dc-487b-443c-bd6f-131ccde745e2.1">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">${
      lesson.title
    }</div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div></div></div></td>
  </tr>
</tbody>
</table></td>
          </tr>
        </tbody>
      </table>
    <table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"></td>
    </tr>
  </tbody>
</table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f7373f10-9ba4-4ca7-9a2e-1a2ba700deb9.1">
<tbody>
  <tr>
    <td style="padding:20px 30px 0px 30px;" role="module-content" height="100%" valign="top" bgcolor="">
      <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
        <tbody>
          <tr>
            <td style="padding:0px 0px 3px 0px;" bgcolor="E7E7E7"></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="264ee24b-c2b0-457c-a9c1-d465879f9935.1">
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 20px 0px 20px;" bgcolor="#0055ff">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top">
      <table class="column" width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Support</span></a></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
          </tr>
        </tbody>
      </table>
      <table class="column" width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Contact Us</span></a></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
          </tr>
        </tbody>
      </table>
    <table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1.1">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Learn More</span></a></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
    </tr>
  </tbody>
</table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1.1.1">
<tbody>
  <tr>
    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Legal</span></a></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#0055ff; color:#ffffff; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                        <div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">Child Creativity Lab</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">1901 Carnegie Ave. Suite 1A
</span>, <span class="Unsubscribe--senderCity">Santa Ana</span>, <span class="Unsubscribe--senderState">CA</span> <span class="Unsubscribe--senderZip"> 92705</span></p></div>
                                       
                                      </div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="e5cea269-a730-4c6b-8691-73d2709adc62">
  <tbody>
    <tr>
      <td align="center" bgcolor="0055FF" class="outer-td" style="padding:0px 0px 20px 0px;">
        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
        </table>
      </td>
    </tr>
  </tbody>
</table></td>
                                  </tr>
                                </tbody></table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </div>
  </center>


</body></html>
`,
};
