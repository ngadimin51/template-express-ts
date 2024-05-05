import express from "express";
import helmet from 'helmet';
import routes from "@/routes";

const app = express()
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: [
          "'self'",
          'https://www.google.com',
          'https://pagead2.googlesyndication.com',
          'https://googleads.g.doubleclick.net',
          'https://pagead2.googlesyndication.com',
          'https://tpc.googlesyndication.com',
          'https://securepubads.g.doubleclick.net'
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://telegram.org",
          'https://www.google.com',
          "https://www.gstatic.com",
          'https://pagead2.googlesyndication.com',
          'https://googleads.g.doubleclick.net',
          'https://pagead2.googlesyndication.com',
          'https://tpc.googlesyndication.com'
        ],
        imgSrc: [
          "'self'",
          "data:",
          'https://pagead2.googlesyndication.com',
          'https://pps.whatsapp.net/'
        ]
      },
    },
    frameguard : {
      action: "deny",
    },
    referrerPolicy: { policy: 'same-origin' }
  })
);
app.disable('x-powered-by')
app.use(routes)

export default app;