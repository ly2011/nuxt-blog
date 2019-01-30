import createPersistedState from 'vuex-persistedstate';

// import * as Cookies from 'js-cookie';
// import cookie from 'cookie';

export default ({ store, isHMR, isServer, isClient, isDev }) => {
  // In case of HMR, mutation occurs before nuxReady, so previously saved state
  // gets replaced with original state received from server. So, we've to skip HMR.
  // Also nuxtReady event fires for HMR as well, which results multiple registration of
  // vuex-persistedstate plugin
  if (isHMR) return;

  // if (isClient) {
  if (!process.server) {
    window.onNuxtReady(nuxt => {
      createPersistedState({
        key: 'vuex'
        // paths: [],
        // storage: {
        //   getItem: key =>
        //     process.client
        //       ? Cookies.getJSON(key)
        //       : cookie.parse(req.headers.cookie || '')[key],
        //   setItem: (key, value) =>
        //     Cookies.set(key, value, { expires: 365, secure: !isDev }),
        //   removeItem: key => Cookies.remove(key)
        // }
      })(store); // vuex plugins can be connected to store, even after creation
    });
  }
};
