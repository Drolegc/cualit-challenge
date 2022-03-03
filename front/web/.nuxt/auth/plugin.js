import Auth from './auth'

import './middleware'

// Active schemes
import scheme_3e2123be from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/","logout":"/","home":"/","callback":"/login","user":"/"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":false,"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local","autoLogout":true}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_3e2123be($auth, {"endpoints":{"login":{"url":"/auth/login/","method":"post","propertyName":"jwt"},"logout":false,"user":{"url":"/api/auth/user","method":"get","propertyName":"user"}},"tokenRequired":true,"_name":"local"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
