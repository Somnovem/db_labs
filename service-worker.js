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
    "revision": "3b6a526681426b726f0fa4d481b8027c"
  },
  {
    "url": "assets/css/0.styles.7199c42d.css",
    "revision": "65096e2a703ad22d7e398438944707cd"
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
    "url": "assets/js/1.d11680f7.js",
    "revision": "53f174ca64cd31b819066d4bf31f391b"
  },
  {
    "url": "assets/js/10.9ef6971e.js",
    "revision": "ebfc65079aefb78e5a3ac24ae7f3c8b6"
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
    "url": "assets/js/17.be5448eb.js",
    "revision": "d963ddd9e5c7b78905d650782eadb42e"
  },
  {
    "url": "assets/js/18.c0f72ca8.js",
    "revision": "35abd56a1d3fb3efdb35ecfdc9d32132"
  },
  {
    "url": "assets/js/19.71e658da.js",
    "revision": "a0751191ed15245344bf9da87bf246a4"
  },
  {
    "url": "assets/js/2.b330c811.js",
    "revision": "c3975f259a8db4e709771b198f0081c5"
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
    "url": "assets/js/23.48643c34.js",
    "revision": "e49533ef4ac59f6336674ca319b509ed"
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
    "url": "assets/js/26.1534a0d0.js",
    "revision": "18790bff2d5e538fc12a8de66bf1480f"
  },
  {
    "url": "assets/js/27.5522c21f.js",
    "revision": "785b0ee085e8dc3e76f30019e6710a02"
  },
  {
    "url": "assets/js/28.baa025c7.js",
    "revision": "6a726457a885980d74e2580764b86b12"
  },
  {
    "url": "assets/js/29.6f898f60.js",
    "revision": "7c8120fcb0df2e9c1aae5af9a1c51ba4"
  },
  {
    "url": "assets/js/3.0d5ea2cc.js",
    "revision": "49f064aae3f18e5e2f2010b7e4d6ef03"
  },
  {
    "url": "assets/js/30.152adb7b.js",
    "revision": "e8e23e95cf65b32adb72c657ead03954"
  },
  {
    "url": "assets/js/31.87bc32c4.js",
    "revision": "2620636a92dd54351ec4712f924d03df"
  },
  {
    "url": "assets/js/32.44f17f34.js",
    "revision": "0643e362f03219d9f34aff73c2f6a291"
  },
  {
    "url": "assets/js/33.2b057031.js",
    "revision": "4c89d67717dff8456dae5995fff76534"
  },
  {
    "url": "assets/js/34.6e86eebe.js",
    "revision": "beb3e75f611bc9cc2b893f6b4188c0dc"
  },
  {
    "url": "assets/js/35.cd2b094d.js",
    "revision": "4b465b262882bfe5f64de196dd053b44"
  },
  {
    "url": "assets/js/36.18e0bdf3.js",
    "revision": "e081d8e708b1e8f821b4c4db8068279e"
  },
  {
    "url": "assets/js/37.10b481cf.js",
    "revision": "f2b7aab2b5a6b58dae59ba8509fae4b9"
  },
  {
    "url": "assets/js/38.a8c6cfc8.js",
    "revision": "213b018c90990ce312464debb514d9d6"
  },
  {
    "url": "assets/js/39.30e4932f.js",
    "revision": "a41e01762b220e7378c265fa1a0d3e20"
  },
  {
    "url": "assets/js/4.eb24d4ee.js",
    "revision": "6530477cc46691fe736666230920fa65"
  },
  {
    "url": "assets/js/41.4850ff38.js",
    "revision": "9503ceb80463473abb4ca785905bc65c"
  },
  {
    "url": "assets/js/5.afce0660.js",
    "revision": "afc53c45a61140f12c1c662bacafa05f"
  },
  {
    "url": "assets/js/6.2e3a61fe.js",
    "revision": "d882f779b11fd4ffa1d19a29b44416c8"
  },
  {
    "url": "assets/js/7.6591c728.js",
    "revision": "733b3b13f627a2dcdbf79b4d1c758480"
  },
  {
    "url": "assets/js/8.03fd4ec2.js",
    "revision": "1b7c284c8ea0b9905764fb37e32ea443"
  },
  {
    "url": "assets/js/9.ccf93564.js",
    "revision": "e3300ef07687f3d405be0d22ba83c616"
  },
  {
    "url": "assets/js/app.8da89e8b.js",
    "revision": "6ebd5f54cc1e0c21e9333fdedfb761f1"
  },
  {
    "url": "assets/js/vendors~docsearch.849089d1.js",
    "revision": "b5bbf4940a03b6ec0e6c9ad5c55f7c1f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "774094afc089f836413a7268dd25fa35"
  },
  {
    "url": "design/index.html",
    "revision": "cb65636f9447110258b9b823a4b0848f"
  },
  {
    "url": "index.html",
    "revision": "560c463acea8a7a673c897fd10514fb8"
  },
  {
    "url": "intro/index.html",
    "revision": "6f99c2355d3958f3c6236c7495f0432d"
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
    "revision": "de66fcb8c2086b413925e5609c1df856"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "17eed928334cd2e0e3dc816993f22500"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c7efd0faac00f582b6f7bc68fe42043c"
  },
  {
    "url": "software/index.html",
    "revision": "e4a1177f361ac03c628cc57607920cbb"
  },
  {
    "url": "test/index.html",
    "revision": "07407998cd22f27207611bec00f3524f"
  },
  {
    "url": "use cases/index.html",
    "revision": "407e3b5dba0e98636ab3f6ee8af70244"
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
