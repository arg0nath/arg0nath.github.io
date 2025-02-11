'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "78e72a002f6799052116382dba7ab993",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "20c6227faeaaeb9b0861e6c7ac14b065",
"assets/assets/fonts/Cera-Regular.ttf": "7f67f7ac2113a9fd5f230e1bdc53cdc7",
"assets/assets/fonts/Cera-Bold.ttf": "8b824dd4e3dabd2e5e0ec61d78131983",
"assets/assets/logos/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/logos/us.svg": "7dbba93c48658227ab3cee51c82933b9",
"assets/assets/logos/windows.svg": "b1b972b622c295b4801a06c1fd950c12",
"assets/assets/logos/gr.svg": "398239dd784ae5d4687d84ccbd54160e",
"assets/assets/logos/vscode.svg": "30220069b20799247b205cf2a69c7fd6",
"assets/assets/logos/adobe_lightroom.svg": "8db9151cc818fa044e070fe4f57a791e",
"assets/assets/logos/3d_prinitng.svg": "a385672e8df45bbf73268fee9c7db12e",
"assets/assets/logos/supabase.svg": "834a3bfcb8226402e3b68ef78e2c2c9a",
"assets/assets/logos/anaconda.svg": "55aca690ad4b6f2b47501d545eb8d635",
"assets/assets/logos/jira.svg": "22e9d996ac3069972a5e146169e1445a",
"assets/assets/logos/nodemon.svg": "c3b37eebbc108ed11b4e3d70896a6749",
"assets/assets/logos/api.svg": "c7663107dd42f82ca4217d6d46ecf87d",
"assets/assets/logos/ios.svg": "602ef9ab5b3e93e4143b68949ae06257",
"assets/assets/logos/json_logo.svg": "adb3897e12d43cd2a87b3da2dc080a1b",
"assets/assets/logos/photoshop.svg": "4c7cd5a20770c6c5e1263e7de79686cf",
"assets/assets/logos/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/logos/postman.svg": "39894ce0d6c55afd644a854bff6b03b3",
"assets/assets/logos/user_interface.svg": "6709b67568d6a21e8735e902b2f68332",
"assets/assets/logos/bloc.svg": "305c0bb9897a4b13c0f30e6fe0e748ac",
"assets/assets/logos/nodejs.svg": "bf75f8511058ebb1b513d0141fd744de",
"assets/assets/logos/firebase.svg": "2b4b93940c581d66ef636fbef4ce0440",
"assets/assets/logos/sqlite.svg": "9cd0afda09d84d1dff47a2e1a86522bd",
"assets/assets/logos/linkedin.svg": "95853ce47f6ae1113b757cb0517f5d63",
"assets/assets/logos/android_studio.svg": "f45824a5ae74092cba63532b26c45518",
"assets/assets/logos/xcode.svg": "7333bec1d029d4a1f504aa9725d18ca1",
"assets/assets/logos/linux.svg": "93182d736b3b01e825155c908605dbe6",
"assets/assets/logos/Adobe_Photoshop_CC_icon.svg": "9fd6f51dd25538e379ae70154ddf1810",
"assets/assets/logos/photography.svg": "680d4765d150db9d9e70e1a45a34000a",
"assets/assets/logos/android.svg": "0dcd0fa993872e9dbdcd58e8af1c6ad5",
"assets/assets/logos/ci_cd.svg": "b94710080f8a10e7a65efaa6c32ffaca",
"assets/assets/logos/postgre_sql.svg": "95ea0ccc7a6fceff8fee5331e2d51c96",
"assets/assets/logos/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/logos/drizzle.svg": "f917f3e3d36b49fb29bd4a295f369f78",
"assets/assets/logos/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/logos/macos.svg": "3317eb2e24c58b3605d3586a25b3cb36",
"assets/assets/logos/github.svg": "a39372e319e039ae689840d298e32b14",
"assets/assets/images/profileImage.jpg": "bb2bfb03173d00a13a7ddbba2d4f29cf",
"assets/NOTICES": "d040dead597a24c4b1490804275befaa",
"assets/AssetManifest.bin": "0cbe390694da22ba71f76fca8cee6fc9",
"assets/fonts/MaterialIcons-Regular.otf": "c1ec12412329f1acb899c7885d41f266",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/FontManifest.json": "83ae8fd7034e5d34980cd1711a1daee4",
"assets/AssetManifest.bin.json": "a522ee8189c2355f2defd0d657f8471f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"flutter_bootstrap.js": "2ab5459824505cf9a90c47e75f042d09",
"index.html": "2a62ee2a9273db9db4d02310843461a8",
"/": "2a62ee2a9273db9db4d02310843461a8",
"favicon.png": "d7ba45dc410ce588b3e61628c161e606",
"version.json": "f76052b35be1232c512862831a2f1eb1",
"main.dart.js": "7d865f2f3d2893327786282a6b009535",
"icons/Icon-512.png": "da175273529f7002a12e09b2bc41e70d",
"icons/Icon-maskable-512.png": "da175273529f7002a12e09b2bc41e70d",
"icons/Icon-maskable-192.png": "e65449ab76cfad24788a8c650e4349af",
"icons/Icon-192.png": "ed4a9cd6cd8301e083331d9a36cfc2f4"};
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
