import { envMODE } from '../config/envMode'

let config

if (envMODE === 'DEV') {
  config = {
    apiKey: "AIzaSyDFVpwmyYzQMG_I7NHwQ2ngpIIxht5BHlo",
    authDomain: "blog-2233c.firebaseapp.com",
    projectId: "blog-2233c",
    storageBucket: "blog-2233c.appspot.com",
    messagingSenderId: "821759848133",
    appId: "1:821759848133:web:148b53ede53f5dd672caac",
    measurementId: "G-SDX21SMEW2"
  }
}

export default config
