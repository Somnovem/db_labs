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
    "revision": "7a12b1fba785f35c803ee7e6c81ddd21"
  },
  {
    "url": "assets/css/0.styles.7199c42d.css",
    "revision": "65096e2a703ad22d7e398438944707cd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bc86c445.js",
    "revision": "ac5737205314b2b21388c651feccf881"
  },
  {
    "url": "assets/js/10.df011727.js",
    "revision": "89b71ce84018538cb51977b1cd3f907b"
  },
  {
    "url": "assets/js/13.dd3f4dcd.js",
    "revision": "b98ef916b4a4c8155f21e20a4d288f89"
  },
  {
    "url": "assets/js/14.2f5a4b34.js",
    "revision": "97748a69924bd86cd407e2519da34ea9"
  },
  {
    "url": "assets/js/15.523d7e44.js",
    "revision": "9e869a8f63aac81cb3aab08cb4c9a300"
  },
  {
    "url": "assets/js/16.d7fa1dd3.js",
    "revision": "5415af8df335c1e2dd6ba7b0f21719fd"
  },
  {
    "url": "assets/js/17.3028d09f.js",
    "revision": "89fed22d14e1e20c39748e74b5c81797"
  },
  {
    "url": "assets/js/18.c0f72ca8.js",
    "revision": "35abd56a1d3fb3efdb35ecfdc9d32132"
  },
  {
    "url": "assets/js/19.97904351.js",
    "revision": "3dc33ef4d079200b388fa01f7a5e4f14"
  },
  {
    "url": "assets/js/2.290afb6a.js",
    "revision": "a44bc81295ae199ebd05188549ec46cd"
  },
  {
    "url": "assets/js/20.9c8fad86.js",
    "revision": "f51a2ce59a30d4554ceb631ad12d971b"
  },
  {
    "url": "assets/js/21.3e6ed8c1.js",
    "revision": "806a781cd1dee9f82dcf79293cd470d3"
  },
  {
    "url": "assets/js/22.cc5d6776.js",
    "revision": "f8cafa011cdf8167e4b9d9d271bfda9c"
  },
  {
    "url": "assets/js/23.9bb658d8.js",
    "revision": "fd718b309bd5904f9e06d4eb7d3bc00b"
  },
  {
    "url": "assets/js/24.4d2604e9.js",
    "revision": "3ae8ceaf46a01b790738a544e15bcb4f"
  },
  {
    "url": "assets/js/25.7b154457.js",
    "revision": "1737fcd0a552941ddda25dc027d3f43e"
  },
  {
    "url": "assets/js/26.145fc257.js",
    "revision": "c34cc020c23ac01903541ca8dff7876c"
  },
  {
    "url": "assets/js/27.dff433e5.js",
    "revision": "545c48895d9982656a0a2199d85327fd"
  },
  {
    "url": "assets/js/28.baa025c7.js",
    "revision": "6a726457a885980d74e2580764b86b12"
  },
  {
    "url": "assets/js/29.f8bcc71b.js",
    "revision": "8c264471110b44afc5c9dd3c24fddce6"
  },
  {
    "url": "assets/js/3.0d5ea2cc.js",
    "revision": "49f064aae3f18e5e2f2010b7e4d6ef03"
  },
  {
    "url": "assets/js/30.29875898.js",
    "revision": "79aa3ad2613b5c6582a7edfa57f0f807"
  },
  {
    "url": "assets/js/31.39475e16.js",
    "revision": "6ef1378d37e5695e13c3b0e819ce03cf"
  },
  {
    "url": "assets/js/32.e114beff.js",
    "revision": "26f931e68760cc127defecd9172099b5"
  },
  {
    "url": "assets/js/33.a43eaf42.js",
    "revision": "3271c62c94396648e409cc735e7ba950"
  },
  {
    "url": "assets/js/34.ad5d033d.js",
    "revision": "d504ab486156c3a53c5ca844d0212436"
  },
  {
    "url": "assets/js/35.47e73ab4.js",
    "revision": "51d0c38620b804e8dcd4f81f3a9fcfeb"
  },
  {
    "url": "assets/js/36.d694f597.js",
    "revision": "0124ae9350d0ef6a3cd3e8e5d1cfa544"
  },
  {
    "url": "assets/js/37.f90e96ff.js",
    "revision": "8b19e44ee0a6d6c832a306e2a7a87c5e"
  },
  {
    "url": "assets/js/38.9554b862.js",
    "revision": "037e4f464117714b32a4b15db46eac14"
  },
  {
    "url": "assets/js/39.c2c75e31.js",
    "revision": "ba283d7e600abc775d2255b2b9a9e9ec"
  },
  {
    "url": "assets/js/4.9e34ee90.js",
    "revision": "77f3e2aaa80a2d172dc2cac178dfa98d"
  },
  {
    "url": "assets/js/41.fbbb4e3f.js",
    "revision": "544be7ece3f69cb2794d539b45e6bf4f"
  },
  {
    "url": "assets/js/5.38247904.js",
    "revision": "436b24a11aafd1bd4a2891b887ca3a3d"
  },
  {
    "url": "assets/js/6.c2a0ab37.js",
    "revision": "197823c0ada9cfcf5c29e5b7abf3e48a"
  },
  {
    "url": "assets/js/7.4513ddb2.js",
    "revision": "7b37278a35d8194a183cb4353061d4f2"
  },
  {
    "url": "assets/js/8.0ca91c7c.js",
    "revision": "6c410b803c9f3189735368f0b242b085"
  },
  {
    "url": "assets/js/9.1901a338.js",
    "revision": "97a5ad12d39bbf309b99dd06c95e7b58"
  },
  {
    "url": "assets/js/app.be5dd421.js",
    "revision": "aca3e9672d8967b1dd76fec0cf6816a4"
  },
  {
    "url": "assets/js/vendors~docsearch.3f2f5fa8.js",
    "revision": "e42dae9145b4a833a11a324e86467ff6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3830561b637ba219cff32b346fae9a7b"
  },
  {
    "url": "design/index.html",
    "revision": "748db4cbeb4e13db7cc6ed11a80e3d7e"
  },
  {
    "url": "index.html",
    "revision": "c9a60e6aa43b583ea4bb075d8a8a1b6d"
  },
  {
    "url": "intro/index.html",
    "revision": "6811176ee8fc439a75c4ab8c0c22b2b5"
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
    "revision": "7725706f132fb193cfb48f609ce74310"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2a685e3ab3c29e77d05a1ba8bd1d935d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2c92bb828bca99c1323982efcc0f3b59"
  },
  {
    "url": "software/index.html",
    "revision": "ec3bec0f5a5f8aed022e769001d843d6"
  },
  {
    "url": "test/index.html",
    "revision": "e41c7567b5f12571d281056e8c6b2875"
  },
  {
    "url": "use cases/index.html",
    "revision": "4592e435e614a24cc0ec8d8df29f8831"
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
