// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiKey: 'd88b0d481a7a4c08bbb083b87c06a46c', //GMAIL
  apiKey: '7a0ac428ffaf44f29933fab8ec121e23', //HOTMAIL
  apiUrl: 'https://newsapi.org/v2',
  firebaseConfig: {
    apiKey: "AIzaSyCNM8MezVsjddDKQ0sZpR6eCzjNoNQcAmY",
    authDomain: "noticias-oarrs.firebaseapp.com",
    projectId: "noticias-oarrs",
    storageBucket: "noticias-oarrs.appspot.com",
    messagingSenderId: "119846485990",
    appId: "1:119846485990:web:d296fa9496820dc7f92027",
    measurementId: "G-71WB1JCN8K"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
