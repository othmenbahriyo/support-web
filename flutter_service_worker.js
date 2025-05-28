'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "44a35e70e3ed72d3bda766e5a425ee08",
"version.json": "a2c8306329f01dd748e28ac4ea627845",
"index.html": "593d01e9d4e6df3624522db3cf98f767",
"/": "593d01e9d4e6df3624522db3cf98f767",
"main.dart.js": "f90273fbc84065494fdf85acbf8b8c26",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "94b6da4053cb8db0329f2a08ff4092a4",
"assets/AssetManifest.json": "63f6526e1c14011612a7ababbb7f2f5d",
"assets/NOTICES": "2ab59693e47b7f30a553bbae8895346a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a897c6c29548f45f99149625ff1abed3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07b33d3e81bf8a4a68ca5c2b8ed34420",
"assets/fonts/MaterialIcons-Regular.otf": "e1c194302351b53bc628f4fb10da9c6e",
"assets/assets/home-svg.svg": "153ea009d8f49710ab86b0dbb83d182a",
"assets/assets/markerClient.png": "32656b15bb19a649df5fc054106eeae7",
"assets/assets/taxi-marker.png": "a76ff8b5ba9db16c266d3d56f4be63e8",
"assets/assets/logout.svg": "9cbd7880bd59114fbc3822c6f3629646",
"assets/assets/wave_footer_svg.svg": "2d2bbea38360cda5cdc8723fe2cfd9b5",
"assets/assets/logo-taxi.png": "a76ff8b5ba9db16c266d3d56f4be63e8",
"assets/assets/images/logo-taxi.png": "177ea4773d31b87e0786a3ea5826d534",
"assets/assets/images/logo-app.jpg": "7db3f7370f026615da4d8e1ae6f02012",
"assets/assets/images/background-black.png": "3fa7eb3145fb163b351eff1b47b15746",
"assets/assets/images/voiture.png": "a9ed3846e9fd9e76fd78489e1583b6df",
"assets/assets/pattern_light_svg.svg": "888b80fbaf4a4a1159ab684cad04eadb",
"assets/assets/img.png": "f77a45ae27184651043bc29686bc4ab6",
"assets/assets/markerClient.svg": "e33469eac898dd6aa947ecc312a7c06a",
"assets/assets/keystore.jks": "ca44bfbd9173346893c4d9113dab9e84",
"assets/assets/planning.svg": "6db7e29ae02ad423e3a75fe6b81dbab0",
"assets/assets/tabBoard.svg": "99e0b3c5fd00573c37af5f87f1965cab",
"assets/assets/icons/home-svg.svg": "153ea009d8f49710ab86b0dbb83d182a",
"assets/assets/icons/info.png": "95533d2bf26fc835bc3b305b30af303e",
"assets/assets/icons/warning.png": "7286fcef6e443a30e85c54c57c586485",
"assets/assets/icons/check.png": "b765589fd11d7327a7c375ed58f2f60f",
"assets/assets/icons/dashboard-svg.svg": "2b93521932063f5e686e0dc496a7d417",
"assets/assets/icons/planning-svg.svg": "6db7e29ae02ad423e3a75fe6b81dbab0",
"assets/assets/icons/nb-places.png": "f43f06a651a15a04a6c48680af73c113",
"assets/assets/icons/wave_footer_svg.svg": "2d2bbea38360cda5cdc8723fe2cfd9b5",
"assets/assets/icons/date-depart.png": "ffe55625c52db9d82c2fd40de205591d",
"assets/assets/icons/bubble.svg": "b8775227d0bbc7c75a310293dcaba403",
"assets/assets/icons/bubble.png": "19c0a5c3e4d2f468986f65954648537f",
"assets/assets/icons/nb-valises.png": "0b6966de12c1a0ff91bf45ecb947e5a6",
"assets/assets/icons/map.png": "ff05dc4dad240614d98afb8fe10733dc",
"assets/assets/icons/pattern_light_svg.svg": "888b80fbaf4a4a1159ab684cad04eadb",
"assets/assets/icons/logOut.png": "381e689b16c616852d5f9d64b040d32c",
"assets/assets/icons/accueil.png": "9bae180aed28b6008574e71ae1d64299",
"assets/assets/icons/mapChoise.png": "90acb515645205e3c6e7d7d94d776a25",
"assets/assets/icons/distance.png": "a1d83fdebb0a2be9450771ffb01ca207",
"assets/assets/icons/history.png": "f8518d9445838d9fa2169c1ad138a3f5",
"assets/assets/icons/price.png": "73d0077e59982aaef5aa11ba45f31030",
"assets/assets/icons/mapChoice.svg": "d5d84fcb8802588dd69ca1a730212e59",
"assets/assets/icons/arriveLocation.png": "b653cae6d43c62d3a18adc73db323f7c",
"assets/assets/icons/tabBoard.png": "cf263c5502eecfebb5c737c7e4fb5ddf",
"assets/assets/icons/phone-call.png": "1caf8134814eb836d8988d5a23137da1",
"assets/assets/icons/wave_header_svg.svg": "0a1e86869d6589fa20c7b30861080781",
"assets/assets/icons/logout-svg.svg": "9cbd7880bd59114fbc3822c6f3629646",
"assets/assets/icons/planning.png": "419f11d8daa292cada04e7df44a2d38a",
"assets/assets/icons/client.png": "5e6debe8c9db76866aacd6cbdde8a79e",
"assets/assets/icons/history-svg.svg": "b491b86f3803b5ee65166cdb33daed47",
"assets/assets/icons/departLocation.png": "e0b60cc7a7318509ce37e6484ad1b9cb",
"assets/assets/wave_header_svg.svg": "0a1e86869d6589fa20c7b30861080781",
"assets/assets/destination-marker.png": "558e410923521091843874622d604d23",
"assets/assets/history.svg": "b491b86f3803b5ee65166cdb33daed47",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
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
