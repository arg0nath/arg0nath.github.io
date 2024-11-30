'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a105770050777fb571873631e030c07f",
"assets/AssetManifest.bin.json": "aaa576835cd4bbedd01cf09c532e5e2d",
"assets/AssetManifest.json": "d6de880e1ef811fea2007e7b11db0dcf",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/images/livelikelocal_screens/0a.jpeg": "3aec1c2636db8677bbca37df393231bb",
"assets/assets/images/livelikelocal_screens/1.png": "ab794895716cd8dd209d24a4274f4731",
"assets/assets/images/livelikelocal_screens/11.png": "089be7329af652869de3745db38c43d6",
"assets/assets/images/livelikelocal_screens/12.png": "af92ce58766de23fb508390bfc3010cf",
"assets/assets/images/livelikelocal_screens/13.png": "c1b92f4f6e18b70cd45911ca5c9e3810",
"assets/assets/images/livelikelocal_screens/14.png": "0560feb00e0cdd20cb4eea534999425f",
"assets/assets/images/livelikelocal_screens/15.png": "2b9407302538898c5cb20dccf0a87786",
"assets/assets/images/livelikelocal_screens/16.png": "43b39046ae356d9907ad325548b83537",
"assets/assets/images/livelikelocal_screens/17.png": "e3a8d2e26d09c062f0ed436e543ebd78",
"assets/assets/images/livelikelocal_screens/2.png": "621bc9d11cabfe1eb6c8300c47e7e157",
"assets/assets/images/livelikelocal_screens/20.png": "1cf252579e232040859977a6a541572b",
"assets/assets/images/livelikelocal_screens/21.png": "fa7b82d666b952be09af6040cd66e8e5",
"assets/assets/images/livelikelocal_screens/22.png": "91792c8eb3f0262b174aae9e98c5f467",
"assets/assets/images/livelikelocal_screens/23.png": "e2e5e9aee1fb0bb451a76b7cfdf5fdf6",
"assets/assets/images/livelikelocal_screens/24.png": "f9ef9e357669058c6478787cfc5be45c",
"assets/assets/images/livelikelocal_screens/25.png": "87e6f1d41e1a59651138c481336720ca",
"assets/assets/images/livelikelocal_screens/26.png": "b9147e351907dc7ce80dedafa008f000",
"assets/assets/images/livelikelocal_screens/27.png": "2e77f0b8cb0b76acbceb3f6896d3210b",
"assets/assets/images/livelikelocal_screens/3.png": "0f7a6b0a3a7c1e92cfeb0b9293e26fa0",
"assets/assets/images/livelikelocal_screens/4.png": "416daaa37ea7358071404bcc51cd9031",
"assets/assets/images/livelikelocal_screens/5.png": "2763241e9639dc9bff6b47b47f10c4da",
"assets/assets/images/livelikelocal_screens/6.png": "e95f5f15f8082de23c8addb6870693fe",
"assets/assets/images/livelikelocal_screens/7.png": "c44cf72c46e12b90752a47a698310b6a",
"assets/assets/images/livelikelocal_screens/8.png": "c84216523b39bd74fa988550435617e2",
"assets/assets/images/livelikelocal_screens/9.png": "775ddf85026573be4e159dcada5b240d",
"assets/assets/images/pokedetails.jpg": "73de65fbd36733094084d34c1a786d04",
"assets/assets/images/pokelist.jpg": "effd4ca3dee1cd731236088fed78316d",
"assets/assets/images/poketypes.jpg": "a0c02bf48c146234969f8c1031b933e5",
"assets/assets/images/profileImage.jpg": "bb2bfb03173d00a13a7ddbba2d4f29cf",
"assets/FontManifest.json": "7013e977a315104fdc81cc7f48fcc4fd",
"assets/fonts/MaterialIcons-Regular.otf": "c608d870adfd02ad879ab2e43ac4ba02",
"assets/NOTICES": "d2939ea921cd8c5856b75accb5d98d15",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d7ba45dc410ce588b3e61628c161e606",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1d1dd893d8dbc091dfb08c49f7889b7a",
"icons/Icon-192.png": "ed4a9cd6cd8301e083331d9a36cfc2f4",
"icons/Icon-512.png": "da175273529f7002a12e09b2bc41e70d",
"icons/Icon-maskable-192.png": "e65449ab76cfad24788a8c650e4349af",
"icons/Icon-maskable-512.png": "da175273529f7002a12e09b2bc41e70d",
"index.html": "707825dc5cc4d9656ab1d0d57c89a2cf",
"/": "707825dc5cc4d9656ab1d0d57c89a2cf",
"main.dart.js": "b49c528d53704a3baa4b5df05e91c12b",
"manifest.json": "20f76911bc2a267197a2766a9272fce5",
"version.json": "ceeb9f494535afe120798f8bc66e2e68"};
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
