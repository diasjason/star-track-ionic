importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/fonts/ionicons.eot",
    "revision": "bdf1d30681cf87986c385eea78e8de9a"
  },
  {
    "url": "assets/fonts/ionicons.scss",
    "revision": "c1fdfabf9cbd412b444f064d27641f10"
  },
  {
    "url": "assets/fonts/ionicons.svg",
    "revision": "d9496a234c81179afbca6bf5959cc30a"
  },
  {
    "url": "assets/fonts/ionicons.ttf",
    "revision": "74c652671225d6ded874a648502e5f0a"
  },
  {
    "url": "assets/fonts/ionicons.woff",
    "revision": "81414686e99c00d2921e03dd53c0ab04"
  },
  {
    "url": "assets/fonts/ionicons.woff2",
    "revision": "311d81961c5880647fec7eaca1221b2a"
  },
  {
    "url": "assets/fonts/noto-sans-bold.ttf",
    "revision": "a165a42685795361b25593effb32fdb1"
  },
  {
    "url": "assets/fonts/noto-sans-bold.woff",
    "revision": "ce3d777f2c41cca1494021cfa3fcd72c"
  },
  {
    "url": "assets/fonts/noto-sans-regular.ttf",
    "revision": "2fd9c16b805724d590c0cff96da070a4"
  },
  {
    "url": "assets/fonts/noto-sans-regular.woff",
    "revision": "ce8ba1a4ff970db896192c41fc3c96b1"
  },
  {
    "url": "assets/fonts/noto-sans.scss",
    "revision": "47d5f7264952ccee8cead7b6dcb6d1bd"
  },
  {
    "url": "assets/fonts/roboto-bold.ttf",
    "revision": "1f4fd7e4df65487f07ba9148f7ca095d"
  },
  {
    "url": "assets/fonts/roboto-bold.woff",
    "revision": "43183beef21370d8a4b0d64152287eba"
  },
  {
    "url": "assets/fonts/roboto-bold.woff2",
    "revision": "28d80f43ae4cc35f19e1f1a6ab670f25"
  },
  {
    "url": "assets/fonts/roboto-light.ttf",
    "revision": "9ff15bd34ea83e4dd3f23c20c7f5090e"
  },
  {
    "url": "assets/fonts/roboto-light.woff",
    "revision": "7e2d32e7141050d758a38b4ec96390c0"
  },
  {
    "url": "assets/fonts/roboto-light.woff2",
    "revision": "a826ff848e9f52b1732fed7d154afa97"
  },
  {
    "url": "assets/fonts/roboto-medium.ttf",
    "revision": "a937e2cae14e68262a45aa91204c2fdf"
  },
  {
    "url": "assets/fonts/roboto-medium.woff",
    "revision": "0f3b7101a8adc1afe1fbe89775553c32"
  },
  {
    "url": "assets/fonts/roboto-medium.woff2",
    "revision": "b2c9c262e089411e20689ed393c00796"
  },
  {
    "url": "assets/fonts/roboto-regular.ttf",
    "revision": "07f8fb6acbabeb10d3fad9ab02d65e0b"
  },
  {
    "url": "assets/fonts/roboto-regular.woff",
    "revision": "f94d5e5102359961c44a1da1b58d37c9"
  },
  {
    "url": "assets/fonts/roboto-regular.woff2",
    "revision": "e6b9d54811307f98da62eae992ae05ba"
  },
  {
    "url": "assets/fonts/roboto.scss",
    "revision": "e7c30075bc0f0b11422bfbdb2236f9e7"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "37096b1d5ca5b77ba1f4d5b8fd4016e7"
  },
  {
    "url": "assets/imgs/logo.png",
    "revision": "aa054eb23bcba11636d7be097640897a"
  },
  {
    "url": "build/0.js",
    "revision": "b78871298e05c1001faa6a1e6f758a24"
  },
  {
    "url": "build/1.js",
    "revision": "31f6739480a2d92d77834ddf3a52248f"
  },
  {
    "url": "build/2.js",
    "revision": "93e7b4f59756c570a7f12aabc5b6846d"
  },
  {
    "url": "build/3.js",
    "revision": "df801ec18231dfb669784331ec5ddbb4"
  },
  {
    "url": "build/main.css",
    "revision": "eefe790a84062c2a847fd605c05cad85"
  },
  {
    "url": "build/main.js",
    "revision": "5757932dbcf6ae29db2e016fbe95c3f1"
  },
  {
    "url": "build/polyfills.js",
    "revision": "cdb289d3a60d7aa4b10424dbe2cd76c4"
  },
  {
    "url": "build/sw-toolbox.js",
    "revision": "2770efb889cc10c4de88d0b746c2a13c"
  },
  {
    "url": "build/vendor.js",
    "revision": "b586debf4aeddca89484b1dfe5a002b6"
  },
  {
    "url": "index.html",
    "revision": "b48dbeb7b42f48b3d06cfde7208ceab1"
  },
  {
    "url": "manifest.json",
    "revision": "dd36c727b4a31c2805677452207cfb95"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
