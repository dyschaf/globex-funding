/* eslint no-console: 0 */
import submitted from "../controllers/submit_form"
// 'use strict';

const nodemailer = require('../lib/nodemailer');

// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account');
        console.error(err);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(
        {
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            },
            logger: true,
            transactionLog: true, // include SMTP traffic in the logs
            allowInternalNetworkInterfaces: false
        },
        {
            // default message fields

            // sender info
            from: 'Nodemailer <noreply@globexfunding.com>',
            // headers: {
            //     'X-Laziness-level': 1000 // just an example header, no need to use this
            // }
        }
    );

    // Message object
    let message = {
        // Comma separated list of recipients
        to: 'Nodemailer <example@nodemailer.com>',

        // Subject of the message
        subject: 'Do not reply ' + Date.now(),

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html: 
        `<p><b>Business Name</b><b>${submitted.businessName}</b></p>
        <p><b>DBA </b><b>${submitted.DBA}</b></p>
        <p><b>Entity: </b><b>${submitted.entity}</b></p>
        <p><b>Business Email: </b><b>${submitted.businessEmail}</b></p>
        <p><b>Bussiness Phone: </b><b>${submitted.bussinessPhone}</b></p>
        <p><b>Bussiness: Fax </b><b>${submitted.bussinessFax}</b></p>
        <p><b>Website: </b><b>${submitted.website}</b></p>
        <p><b>Federal Tax ID EIN: </b><b>${submitted.federalTaxID_EIN}</b></p>
        <p><b>Date Of Incorporation: </b><b>${submitted.dateOfIncorporation}</b></p>
        <p><b>Industry: </b><b>${submitted.Industry}</b></p>
        <p><b>Business Address: </b><b>${submitted.businessAddress}</b></p>
        <p><b>Business City: </b><b>${submitted.cityBusiness}</b></p>
        <p><b>Business State: </b><b>${submitted.stateBusiness}</b></p>
        <p><b>Business ZipCode: </b><b>${submitted.zipCodeBusiness}</b></p>
        <p><b>Funding Amount: </b><b>${submitted.fundingAmount}</b></p>
        <p><b>Any Other Loans: </b><b>${submitted.anyOtherLoans}</b></p>
        <p><b>Seasonal Business: </b><b>${submitted.seasonalBusiness}</b></p>
        <p><b>Annual Gross Sales: </b><b>${submitted.annualGrossSales}</b></p>
        <p><b>Average Deposit: </b><b>${submitted.averageDeposit}</b></p>
        <p><b>Owner Name: </b><b>${submitted.ownerName}</b></p>
        <p><b>Owner Middle Name: </b><b>${submitted.ownerNameMiddle}</b></p>
        <p><b>Owner Last Name: </b><b>${submitted.ownerNameLast}</b></p>
        <p><b>Owner Address: </b><b>${submitted.ownerAddress}</b></p>
        <p><b>Owner City: </b><b>${submitted.ownerCity}</b></p>
        <p><b>Owner State: </b><b>${submitted.ownerState}</b></p>
        <p><b>Owner ZipCode: </b><b>${submitted.ownerZipCode}</b></p>
        <p><b>Owner Date of Birth: </b><b>${submitted.ownerBOD}</b></p>
        <p><b>SSN: </b><b>${submitted.SSN}</b></p>
        <p><b>creditScore: </b><b>${submitted.creditScore}</b></p>
        <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,

        // test

        // AMP4EMAIL
        amp: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>body{visibility:hidden}</style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
          </head>
          <body>
            <p><b>Hello</b> to myself <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
            <p>No embedded image attachments in AMP, so here's a linked nyan cat instead:<br/>
              <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
          </body>
        </html>`,

        // An array of attachments
        attachments: [
            // String attachment
            {
                filename: 'notes.txt',
                content: 'Some notes about this e-mail',
                contentType: 'text/plain' // optional, would be detected from the filename
            },

            // Binary Buffer attachment
            {
                filename: 'image.png',
                content: Buffer.from(
                    'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                        '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                        'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                    'base64'
                ),

                cid: 'note@example.com' // should be as unique as possible
            },

            // File Stream attachment
            {
                filename: 'nyan cat ✔.gif',
                path: __dirname + '/assets/nyan.gif',
                cid: 'nyan@example.com' // should be as unique as possible
            }
        ],

        list: {
            // List-Help: <mailto:admin@example.com?subject=help>
            help: 'admin@example.com?subject=help',

            // List-Unsubscribe: <http://example.com> (Comment)
            unsubscribe: [
                {
                    url: 'http://example.com/unsubscribe',
                    comment: 'A short note about this url'
                },
                'unsubscribe@example.com'
            ],

            // List-ID: "comment" <example.com>
            id: {
                url: 'mylist.example.com',
                comment: 'This is my awesome list'
            }
        }
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        transporter.close();
    });
});