/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initPano() {
  // Note: constructed panorama objects have visible: true
  // set by default.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
    {
      position: { lat: 38.7211228, lng: -106.7826051 },
      addressControl: false,
      linksControl: true,
      panControl: true,
      enableCloseButton: false,
    },
  );
}

window.initPano = initPano;
