import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

export class Firebase {
  private static instance: FirebaseApp;

  static init() {
    // Your web app's Firebase configuration
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'AIzaSyAOKq1UUgtShdIxsyy6-7rTh2NDwe_xies',
      authDomain: 'sankana-4c6dc.firebaseapp.com',
      projectId: 'sankana-4c6dc',
      storageBucket: 'sankana-4c6dc.appspot.com',
      messagingSenderId: '554048979666',
      appId: '1:554048979666:web:8a01df8841ddfd4e0c230b',
    };

    // Initialize Firebase
    this.instance = initializeApp(firebaseConfig);
  }

  static getFirebaseAuth(): Auth {
    return getAuth(this.instance);
  }
}
