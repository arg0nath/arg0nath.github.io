'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "44593aac7d858b11897e10a90132582f",
"version.json": "110c60a9fa8a1087e9b938a4b734dcb4",
"index.html": "2a62ee2a9273db9db4d02310843461a8",
"/": "2a62ee2a9273db9db4d02310843461a8",
"main.dart.js": "615fa3ebb2bb574c91e7c37425a2cfb4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "d7ba45dc410ce588b3e61628c161e606",
"icons/Icon-192.png": "ed4a9cd6cd8301e083331d9a36cfc2f4",
"icons/Icon-maskable-192.png": "e65449ab76cfad24788a8c650e4349af",
"icons/Icon-maskable-512.png": "da175273529f7002a12e09b2bc41e70d",
"icons/Icon-512.png": "da175273529f7002a12e09b2bc41e70d",
"manifest.json": "78e72a002f6799052116382dba7ab993",
"assets/AssetManifest.json": "07ceab94930eaa8b42040c501bfd3b5e",
"assets/NOTICES": "6b5c8e5f1d8feea1465afe4c9c0e79f0",
"assets/FontManifest.json": "83ae8fd7034e5d34980cd1711a1daee4",
"assets/AssetManifest.bin.json": "edafbd1b31b6747c6ae8bf7764c7e5d8",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "16d7b0b41bbd17dc8e33f393aa9c2c5a",
"assets/fonts/MaterialIcons-Regular.otf": "1c961bd770ca6a271cf9cc5343219ae4",
"assets/assets/images/profileImage.jpg": "bb2bfb03173d00a13a7ddbba2d4f29cf",
"assets/assets/logos/vscode.svg": "30220069b20799247b205cf2a69c7fd6",
"assets/assets/logos/anaconda.svg": "55aca690ad4b6f2b47501d545eb8d635",
"assets/assets/logos/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/logos/photography.svg": "680d4765d150db9d9e70e1a45a34000a",
"assets/assets/logos/linux.svg": "93182d736b3b01e825155c908605dbe6",
"assets/assets/logos/android.svg": "0dcd0fa993872e9dbdcd58e8af1c6ad5",
"assets/assets/logos/firebase.svg": "2b4b93940c581d66ef636fbef4ce0440",
"assets/assets/logos/github.svg": "a39372e319e039ae689840d298e32b14",
"assets/assets/logos/gr.svg": "398239dd784ae5d4687d84ccbd54160e",
"assets/assets/logos/ci_cd.svg": "b94710080f8a10e7a65efaa6c32ffaca",
"assets/assets/logos/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/logos/user_interface.svg": "6709b67568d6a21e8735e902b2f68332",
"assets/assets/logos/us.svg": "7dbba93c48658227ab3cee51c82933b9",
"assets/assets/logos/Adobe_Photoshop_CC_icon.svg": "9fd6f51dd25538e379ae70154ddf1810",
"assets/assets/logos/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/logos/xcode.svg": "7333bec1d029d4a1f504aa9725d18ca1",
"assets/assets/logos/jira.svg": "22e9d996ac3069972a5e146169e1445a",
"assets/assets/logos/nodejs.svg": "bf75f8511058ebb1b513d0141fd744de",
"assets/assets/logos/drizzle.svg": "f917f3e3d36b49fb29bd4a295f369f78",
"assets/assets/logos/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/logos/angularjs.svg": "d7ac80b669c13df8338b4bf5e551a763",
"assets/assets/logos/sqlite.svg": "9cd0afda09d84d1dff47a2e1a86522bd",
"assets/assets/logos/json_logo.svg": "adb3897e12d43cd2a87b3da2dc080a1b",
"assets/assets/logos/photoshop.svg": "4c7cd5a20770c6c5e1263e7de79686cf",
"assets/assets/logos/3d_prinitng.svg": "a385672e8df45bbf73268fee9c7db12e",
"assets/assets/logos/api.svg": "c7663107dd42f82ca4217d6d46ecf87d",
"assets/assets/logos/postgre_sql.svg": "95ea0ccc7a6fceff8fee5331e2d51c96",
"assets/assets/logos/windows.svg": "b1b972b622c295b4801a06c1fd950c12",
"assets/assets/logos/nodemon.svg": "c3b37eebbc108ed11b4e3d70896a6749",
"assets/assets/logos/ios.svg": "602ef9ab5b3e93e4143b68949ae06257",
"assets/assets/logos/postman.svg": "39894ce0d6c55afd644a854bff6b03b3",
"assets/assets/logos/adobe_lightroom.svg": "8db9151cc818fa044e070fe4f57a791e",
"assets/assets/logos/linkedin.svg": "95853ce47f6ae1113b757cb0517f5d63",
"assets/assets/logos/macos.svg": "3317eb2e24c58b3605d3586a25b3cb36",
"assets/assets/logos/bloc.svg": "305c0bb9897a4b13c0f30e6fe0e748ac",
"assets/assets/logos/android_studio.svg": "f45824a5ae74092cba63532b26c45518",
"assets/assets/fonts/Cera-Bold.ttf": "8b824dd4e3dabd2e5e0ec61d78131983",
"assets/assets/fonts/Cera-Regular.ttf": "7f67f7ac2113a9fd5f230e1bdc53cdc7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
