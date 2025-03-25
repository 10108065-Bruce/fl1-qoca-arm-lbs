'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8361ef79cf33310b1f1a9219c7195875",
"version.json": "a849449dfae7be5c3df86415deebb837",
"index.html": "0eb31b6db44bb8bbb36b030e389b7017",
"/": "0eb31b6db44bb8bbb36b030e389b7017",
"main.dart.js": "15c2561af09b5ed3d2f824abb43e5efe",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88c684762aaddb48d677db1972410ffb",
"assets/AssetManifest.json": "861b6973b897d5701013f29926c248c8",
"assets/NOTICES": "c769dfdbb8140c4f024332bbc51b63a1",
"assets/FontManifest.json": "198bc9772b325990c53c32a18dcf3ddf",
"assets/AssetManifest.bin.json": "92a1c6897423f5379136c07e9ea4ae26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5b123de5d7591c5e8aeb9792b83b0271",
"assets/fonts/MaterialIcons-Regular.otf": "37b57686d8af76dc2c094ac9c6ebe567",
"assets/assets/images/ic_stastic.svg": "b528dfda536156322af70f9b205ab2a7",
"assets/assets/images/icn_full%2520screen.svg": "5e8c371103c092c934dc12048a5d7541",
"assets/assets/images/icn_wounded.svg": "fa558fcd652031f90cb5adfdadbbb970",
"assets/assets/images/icn-back.svg": "cf964f4a51385cfe6c7b88ee9c82ceaf",
"assets/assets/images/Group%25202792.svg": "7fbe74005049953a5d9376e594d4a976",
"assets/assets/images/icn_zoon%2520out.svg": "f8b8d50b280b5b75e28d0d5cb09f6d7f",
"assets/assets/images/ic_avatar.svg": "e31c5824ccf2262332ada2b91bd26145",
"assets/assets/images/icn_location.svg": "ed79870b06e0823d5a9284800b636843",
"assets/assets/images/icn_satellite%2520map.svg": "9629e279ba69f06d7325860b09afa257",
"assets/assets/images/Group%25202790.svg": "37ddf82e1e9376976147ed152d2fd2f1",
"assets/assets/images/injure/icn-ccp-l.svg": "3c5f1070f56943486b48c080c592a3da",
"assets/assets/images/injure/icn-ecs-s.svg": "53d37c5927486df6cc6afd3bf16e3c4d",
"assets/assets/images/injure/icn-bas-l.svg": "08eb196c3e699f4ee1c53a84fb26706b",
"assets/assets/images/injure/icn-hospital-l.svg": "7fcb163fea4d2fdd6005c2630671a640",
"assets/assets/images/injure/icn-poi-s.svg": "0798e7cd7efbd26dd0212054e4b24558",
"assets/assets/images/injure/icn-hospital-s.svg": "9dd429b7a2c02adf045b3eee6495d75d",
"assets/assets/images/injure/icn-bas-s.svg": "f31502d0d4aa72d5d5137d5ce203fbb3",
"assets/assets/images/injure/icn-poi-l.svg": "f2d21b811453a9da40264c58d0fadb48",
"assets/assets/images/injure/icn-wounded-selected.svg": "53593a8ed7e8347dd48b548f8f030525",
"assets/assets/images/injure/icn-ccp-s.svg": "dad96060c634a6121b14e20ef1a782b6",
"assets/assets/images/injure/icn-ecs-l.svg": "f35d7862a502851877a488afbbc6a98a",
"assets/assets/images/injure/icn-wounded.svg": "9dbe8fad862deddf8677fcf1e988be41",
"assets/assets/images/mifi%2520status_normal.svg": "e5b1a17fbb4b7b00a4bd6880d8ba3fa7",
"assets/assets/images/mifi.svg": "2db16bd4849fd91fe574d267c34b98f4",
"assets/assets/images/icn_arrow_down.svg": "87bbec95a9002bdc54cd4f1ee2d2a882",
"assets/assets/images/network/icn-rounter-good-l.svg": "e72c1ef4b2c914001ff8ba575bd9670a",
"assets/assets/images/network/icn-rounter-disconnected-l.svg": "c6349f8868a30cfa0194aaf5b7d56e6f",
"assets/assets/images/network/icn-mesh-good.svg": "d8a84d921654770c0c22d9b6ec10e863",
"assets/assets/images/network/icn-mesh-normal.svg": "096a1f66831220157d595f6a24c4a184",
"assets/assets/images/network/icn-rounter-normal-s.svg": "693e248b0cda1b6ab420c3d99efb1416",
"assets/assets/images/network/icn-rounter-normal-l.svg": "fe376b3cb4c0bdef006eddd16244b631",
"assets/assets/images/network/icn-rounter-good-s.svg": "27f1878599734c8efa0f8b8dda21253a",
"assets/assets/images/network/icn-mifi.svg": "7b359a8df32f789e9997136a242d38e7",
"assets/assets/images/network/icn-mifi-selected.svg": "7407f695fe471014e7865194dc495686",
"assets/assets/images/network/icn-rounter-disconnected-s.svg": "078c8878073b62b4920980aaaf4147e5",
"assets/assets/images/network/icn-mesh-disconnected.svg": "20353c8ec18aa79929494303cd77ccfb",
"assets/assets/images/mount%2520on.svg": "e6a0ddfc4fc6fbd0c4560335601de74e",
"assets/assets/images/icn_zoon%2520in.svg": "cf4e2e80374f33d75a3b539556d0cf7a",
"assets/assets/images/gps.svg": "f19515f170a7b198f19d12eada3a32fa",
"assets/assets/images/Rectangle%25201851.svg": "dc4259329db1f4f3df97e6fa81d20cb9",
"assets/assets/images/ic_zoom_out.svg": "c1dab5790250172ef528d5cbd64f2312",
"assets/assets/images/icn_retract_L.svg": "09604c58cccfdf210dbdf17712f78a44",
"assets/assets/images/icn_extend_D.svg": "6b1add431c0a0d97891eb3302ad3b6b4",
"assets/assets/images/mifi%2520status_good.svg": "67acd198eb6bf9d50dafdcc47c84cc14",
"assets/assets/images/img_logo.svg": "6680bb385cc4089983828724d1412d23",
"assets/assets/images/icn_mifi_on%2520map.svg": "9c07fe23469c36e7023950a1a56b6b85",
"assets/assets/images/mifi%2520status_good-1.svg": "67acd198eb6bf9d50dafdcc47c84cc14",
"assets/assets/images/icn_retract_U.svg": "37a81f102e92e5b19d2f847ae7910afa",
"assets/assets/images/update%2520time.svg": "6459bc27f9d28e2ecc24088f1337f684",
"assets/assets/images/icn_default%2520map.svg": "6c59fc763be911361485a95e1b42480f",
"assets/assets/images/Rectangle%25201976.svg": "d25d2e4c3aff1bfc684c6afdeb552e7b",
"assets/assets/images/icn_arrow_right.svg": "4d4f5df3c61ec37a9e750986c8d61ba5",
"assets/assets/images/icn_extend_D-2.svg": "6b1add431c0a0d97891eb3302ad3b6b4",
"assets/assets/images/mifi%2520status_disconnected.svg": "3a38a03c4d89f6908346b0ff5462a767",
"assets/assets/images/icn_extend_D-1.svg": "6b1add431c0a0d97891eb3302ad3b6b4",
"assets/assets/images/icn-map.svg": "8910080a6b45565d859a1c085142a12c",
"assets/assets/images/ic-ambulance.svg": "f846474faebd196cb0411d8c9394bcce",
"assets/assets/images/mifi%2520status_bad.svg": "0f672c7a09d470bced8e34dc5232f2ad",
"assets/assets/images/ic_ambulance.svg": "815d9e1c896169c4c3c6362b85534e40",
"assets/assets/images/ic-stastic.svg": "6b8ce6cba164f07a898a4207c1c3ece9",
"assets/assets/images/icn-dashboard.svg": "2396ac449917da7adf4eac5f58f04ad9",
"assets/assets/images/icn_mifi_selected.svg": "81e9f0f31ae8f28a39c30bb898b5a2fd",
"assets/assets/map_style.json": "64cfb0e6d2b92657abdde950649ca120",
"assets/assets/fonts/Roboto.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/assets/fonts/Roboto_Condensed-Regular.ttf": "6f1c323492d1266a46461cbc57101ad4",
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
