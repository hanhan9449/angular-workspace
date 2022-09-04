import * as firebaseui from 'firebaseui'
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import { app } from './app'
const auth = getAuth(app)
const ui = new firebaseui.auth.AuthUI(auth)

export function signIn() {

const container = document.createElement('div')
container.id = 'firebaseui-auth-container'
document.body.appendChild(container)
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: (res, url) => {
            console.info('登录成功', res, url)
            return false
        },
        uiShown: () => {
        }
    }
})
}