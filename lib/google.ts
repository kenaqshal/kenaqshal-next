import { google } from 'googleapis';
import {app} from '../config/app';

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: app.GOOGLE_CLIENT_EMAIL,
    private_key: app.GOOGLE_PRIVATE_KEY
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly']
});

export default googleAuth;
