
addEventListener('fetch', event => {
 const res = new Response('hiiii', {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(res)
});
