var staticCacheName = "The Crime";
 

self.addEventListener("install", function (e) {

  e.waitUntil(

    caches.open(staticCacheName).then(function (cache) { 

      return cache.addAll(["/" "asset-v1/app.js"]);

    })

  );
});
 

self.addEventListener("fetch", function (event) {

  console.log(event.request.url);
 

  event.respondWith(

    caches.match(event.request).then(function (response) {

      return response || fetch(event.request);

    })

  );
});
