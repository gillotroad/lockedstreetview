/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initPano() {
  const searchParams = new URLSearchParams(window.location.search);
  const longparam = searchParams.get('long');
  const latparam = searchParams.get('lat');
  const position = { lat: longparam, lng: latparam };
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

  
  console.log("TEST");
  console.log("long = ");
  console.log(searchParams.get('long'));
}


window.initPano = initPano;
