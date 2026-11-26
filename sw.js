const V='smks-kolase-v1',PRE=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!='GET')return;
  const u=new URL(r.url),same=u.origin==location.origin;
  if(!same&&u.hostname!='fonts.googleapis.com'&&u.hostname!='fonts.gstatic.com')return;
  e.respondWith(caches.open(V).then(async c=>{
    if(same){
      /* file aplikasi: ambil versi terbaru saat online, pakai cache saat offline */
      try{const res=await fetch(r.url,{cache:'no-cache'});if(res.ok)c.put(r,res.clone());return res}
      catch(_){return (await c.match(r,{ignoreSearch:true}))||Response.error()}
    }
    const hit=await c.match(r);
    const net=fetch(r).then(res=>{if(res.ok||res.type=='opaque')c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }))
});
