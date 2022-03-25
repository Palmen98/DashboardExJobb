import React from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      };
      
      const app = initializeApp(config);
      export const db = getDatabase(app)
