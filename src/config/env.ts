import dotenv from 'dotenv';

export const Environment = {
  Local: 'local',
  Development: 'development',
  Production: 'production',
};

dotenv.config({
  path: '.env',
});

export default {
  portLocal: process.env.PORT_LOCAL,
  environment: process.env.NODE_ENV,
  port: process.env.PORT,

  database: {
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || 'password', // if blank then set null
    database: process.env.DB_NAME || 'database',
    resource: process.env.DB_RESOURCE || 'resource',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: process.env.NODE_ENV === Environment.Local,
    port: parseInt(String(process.env.DB_PORT)) || 1433,
  },

  //jwt
  jwtSecret: process.env.ENV_SECRET,
  jwtExpiredAccessTokenTime: process.env.EXPIRED_ACCESS_TOKEN,
  jwtExpiredRefreshTokenTime: process.env.EXPIRED_REFRESH_TOKEN,

  //send grid mail
  sendGridEmail: process.env.SENDGRID_EMAIL,
  sendGridPassword: process.env.SENDGRID_PASSWORD,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  sendGridSignUpTemplateId: process.env.SENDGRID_SIGNUP_TEMPLATE_ID,
  sendGridFromEmail: process.env.SENDGRID_FROM_EMAIL,
  sendGridFromEmailName: process.env.SENDGRID_FROM_EMAIL_NAME,
  sendGridApiUrl: process.env.SENDGRID_API_URL,

  //gRecaptcha
  googleRecaptchaSecret: process.env.GOOGLE_CAPTCHA_BACKEND,
  googleRecaptchaDecodeURL: process.env.GOOGLE_CAPTCHA_DECODE_URL,
  googleRecaptchaSample: process.env.GOOGLE_CAPTCHA_SAMPLE,

  //STRIPE
  stripeTestKey: process.env.STRIPE_API_TEST_KEY,
  stripeProductionKey: process.env.STRIPE_API_PRODUCTION_KEY,
};
