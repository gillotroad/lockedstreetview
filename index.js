/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initPano() {
  const searchParams = new URLSearchParams(window.location.search);
  const latparam = +searchParams.get('lat');
  const longparam = +searchParams.get('long');
  const position = { lat: latparam, lng: longparam };
  // Note: constructed panorama objects have visible: true
  // set by default.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
    {
      position: position,
      addressControl: false,
      linksControl: true,
      panControl: true,
      enableCloseButton: false,
      disableDefaultUI: false,
    },
  );

  
  console.log("TESTNEU");
  console.log("long = ");
  console.log(searchParams.get('long'));
}


window.initPano = initPano;
