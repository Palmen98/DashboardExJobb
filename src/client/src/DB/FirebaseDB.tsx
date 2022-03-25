import React from 'react'
import * as functions from 'firebase-functions'; 
import * as admin from 'firebase-admin';

function FirebaseDB() {
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      };
      admin.initializeApp(config);
      admin.database();
}

export default FirebaseDB