// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  POST_API_URL: 'http://localhost:5050',
  USERS_API_URL: 'http://api.usuarios.com',
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAKv43LhiZWK0FChzQFEPkeKHTEfCDbAN0",
    authDomain: "inicio-firebase-bc2b7.firebaseapp.com",
    projectId: "inicio-firebase-bc2b7",
    storageBucket: "inicio-firebase-bc2b7.appspot.com",
    messagingSenderId: "177671171854",
    appId: "1:177671171854:web:f54a94386a74fadc58b15f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
