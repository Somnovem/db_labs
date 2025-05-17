/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b2a00598dc98953a3dc15c3a8817e67"
  },
  {
    "url": "assets/css/0.styles.7199c42d.css",
    "revision": "65096e2a703ad22d7e398438944707cd"
  },
  {
    "url": "assets/img/content-MediaContentNotFoundException.379cfca9.png",
    "revision": "379cfca969d94200aecce810e5aff609"
  },
  {
    "url": "assets/img/content-RequiredFieldsMissingException.5bd2a051.png",
    "revision": "5bd2a051175ecb9f43cf8b9f31b34e96"
  },
  {
    "url": "assets/img/delete-content.a9411dd3.png",
    "revision": "a9411dd34d5e6cd24831abbb5f1896d5"
  },
  {
    "url": "assets/img/delete-user.e2391d72.png",
    "revision": "e2391d72425bfc058b0dd8bbd0babb81"
  },
  {
    "url": "assets/img/get-content.94edcbc4.png",
    "revision": "94edcbc4fc16262b172dedba81a12b27"
  },
  {
    "url": "assets/img/get-contents.bd81f845.png",
    "revision": "bd81f845ae283655bf8b78c405d58c8c"
  },
  {
    "url": "assets/img/get-user.4e27985e.png",
    "revision": "4e27985e0ff089e015eb421eb994f186"
  },
  {
    "url": "assets/img/get-users.c6c71203.png",
    "revision": "c6c712032d742a03c23795d608d475a9"
  },
  {
    "url": "assets/img/patch-content.326c6bfe.png",
    "revision": "326c6bfef7d3ae4876c2299988a71116"
  },
  {
    "url": "assets/img/patch-user.b7607d88.png",
    "revision": "b7607d8807cd3f102f6ce649ebebacbb"
  },
  {
    "url": "assets/img/post-content.4cedca6a.png",
    "revision": "4cedca6adcb35e76899ad6011507ff15"
  },
  {
    "url": "assets/img/post-user.6df2e23b.png",
    "revision": "6df2e23b4221f9cd7bda86050c40e751"
  },
  {
    "url": "assets/img/relational_schema.8b4855d6.png",
    "revision": "8b4855d6df93b39fc4bc6348e9e3d2c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user-AlreadyRegisteredException.6d0298c5.png",
    "revision": "6d0298c58122b10f6ffc72515ba6a2fe"
  },
  {
    "url": "assets/img/user-DataMissingException.19e35130.png",
    "revision": "19e35130d7bf49dfc711ce869d24a02f"
  },
  {
    "url": "assets/img/user-UserNotFoundException.845acc44.png",
    "revision": "845acc44b5ba0ca214b9e5fcc10e2db9"
  },
  {
    "url": "assets/js/1.1138aaef.js",
    "revision": "568e6dfe10d1510e717903347e38e5d5"
  },
  {
    "url": "assets/js/10.fb0e9be5.js",
    "revision": "b57711e3ba8603dcd6cf79aeac81cbc3"
  },
  {
    "url": "assets/js/13.cba481dd.js",
    "revision": "cd6896e2459b52102d95bfd20687f86a"
  },
  {
    "url": "assets/js/14.1de87a18.js",
    "revision": "f16e3ac1c938f059fc5a65d47de68b0d"
  },
  {
    "url": "assets/js/15.c748064f.js",
    "revision": "124067e9d801515e9db4e0a5cbb6e8e7"
  },
  {
    "url": "assets/js/16.1f6cdeb1.js",
    "revision": "42f2d36201ee0ede1d74e5d49e96ef97"
  },
  {
    "url": "assets/js/17.915cb2b1.js",
    "revision": "23dccfd1a0c65d64b8697088814d0ceb"
  },
  {
    "url": "assets/js/18.650bf4e3.js",
    "revision": "72bcac4166bbdd17f9684012903a033c"
  },
  {
    "url": "assets/js/19.2720d40e.js",
    "revision": "a4ee836f4392c3bcc75128cbb34d6a5b"
  },
  {
    "url": "assets/js/2.daa553ba.js",
    "revision": "05515c200d43545fcd0925bd67638465"
  },
  {
    "url": "assets/js/20.4a790100.js",
    "revision": "1c1df3a0847bf88dc7d49a8c206a0d86"
  },
  {
    "url": "assets/js/21.800aaaf0.js",
    "revision": "70c8025a45e739bfc419faf690af6707"
  },
  {
    "url": "assets/js/22.ba18d813.js",
    "revision": "7c60ff34c617c02f0c2736911514d951"
  },
  {
    "url": "assets/js/23.a79069c8.js",
    "revision": "bb3c73804cca0510e95025a8de001225"
  },
  {
    "url": "assets/js/24.fd5d31fa.js",
    "revision": "9798b2f7e6c5aba5cbc23921c695ebb1"
  },
  {
    "url": "assets/js/25.fa9d2155.js",
    "revision": "d95195a7101eb5bd606b70dafe60c713"
  },
  {
    "url": "assets/js/26.86ec7267.js",
    "revision": "93a93b718b8a0635302f46e4126ae9be"
  },
  {
    "url": "assets/js/27.be99da86.js",
    "revision": "f8e7053a99d3eea514653baac41b5495"
  },
  {
    "url": "assets/js/28.66d80a03.js",
    "revision": "e073b03f4fbbc622a2f81a4d31006ba7"
  },
  {
    "url": "assets/js/29.e42a70f8.js",
    "revision": "695bbca498afcec357be945371607025"
  },
  {
    "url": "assets/js/3.a89161d0.js",
    "revision": "fd3218d88795348854b15b73fee454d0"
  },
  {
    "url": "assets/js/30.e06beb1d.js",
    "revision": "60de7ac843a7ff2ecc218ac1017d6681"
  },
  {
    "url": "assets/js/31.29b2d0b6.js",
    "revision": "9f525d8c5db08e8150695cff95f9547a"
  },
  {
    "url": "assets/js/32.df833653.js",
    "revision": "a9b619322bc7fb25d38b1f7a2d04a663"
  },
  {
    "url": "assets/js/33.a9864559.js",
    "revision": "e286814993d8a5d8929d1c89ee9a1bdd"
  },
  {
    "url": "assets/js/34.bd46de12.js",
    "revision": "651f491d672c51fe7acb796241359826"
  },
  {
    "url": "assets/js/35.6f5413c2.js",
    "revision": "4dbaf447afa598aa6df885b7b28968ca"
  },
  {
    "url": "assets/js/36.8a10719a.js",
    "revision": "1f969c0e5890be214beb5bb2d0a27578"
  },
  {
    "url": "assets/js/37.702feb24.js",
    "revision": "2ac3baa4985215013d66660b59c3ecf1"
  },
  {
    "url": "assets/js/38.370d8e31.js",
    "revision": "622375cad15a4051992ca9835670cc27"
  },
  {
    "url": "assets/js/39.a617a724.js",
    "revision": "b4d8d6b708510b5cf6ebb65fc0c34403"
  },
  {
    "url": "assets/js/4.96ffdd44.js",
    "revision": "ff4a42bab001f3b5b3ed3882282668fb"
  },
  {
    "url": "assets/js/41.3859e4ff.js",
    "revision": "1d0d46e9eb2b3e33e5cac66e481f9416"
  },
  {
    "url": "assets/js/5.9cf36810.js",
    "revision": "ac67ee5a274f8289b1db47dce0bef42d"
  },
  {
    "url": "assets/js/6.2ad70162.js",
    "revision": "7293c8ad700bd732d070aa4b160bf6fb"
  },
  {
    "url": "assets/js/7.1247a5a8.js",
    "revision": "a6d530de2bb00a515018e6361d092ef7"
  },
  {
    "url": "assets/js/8.43d8b770.js",
    "revision": "c60198ddee8550527e380e115f120a7a"
  },
  {
    "url": "assets/js/9.5d1995b9.js",
    "revision": "646fcf03d9bab4fbea7e126b070c4182"
  },
  {
    "url": "assets/js/app.54c5ed06.js",
    "revision": "a157a76e4ddf53f23a6d0013c61b10f5"
  },
  {
    "url": "assets/js/vendors~docsearch.7b6b0262.js",
    "revision": "4f1ac95f0d6b5756d20998eaa517296c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8a14e5fd8ecb6d59d76a5cef9a1fc0f0"
  },
  {
    "url": "design/index.html",
    "revision": "44910b9525cb9b2cb6f15fd8961941e8"
  },
  {
    "url": "index.html",
    "revision": "1e7f3f2428e6ec3eab1ab81bc91d6f7d"
  },
  {
    "url": "intro/index.html",
    "revision": "6ca59b343f3c96760ca918440c9c872b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "dd89823311faa7a507c6e99a7b06440f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e234b7bcc1109e4120a2fc9e1ba286d7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7bf4f559051864e3defdd70f4d26ba61"
  },
  {
    "url": "software/index.html",
    "revision": "be54c7501a3387e3a46088f625254077"
  },
  {
    "url": "test/index.html",
    "revision": "21cc6cfd90496b1a2496b76454f8333f"
  },
  {
    "url": "use cases/index.html",
    "revision": "fa38449f41d7b9e3981c534bb3c804fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
