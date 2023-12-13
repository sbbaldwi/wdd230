let map;

function initMap() {
    const position = { lat: 20.6274, lng: -87.07987 }; // Coordinates for Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Adjust the zoom level as needed
        center: position,
        mapId: "DEMO_MAP_ID", // Replace with your map ID if needed
    });

    const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel",
    });
}

initMap();

(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyCt30bYvDvWn17B5hW5y8OuDkfrCIs3iTA",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });