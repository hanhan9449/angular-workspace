import * as firebaseui from "firebaseui";
import { firebase } from "firebaseui-angular";

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: 'CN'
      }
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
}
