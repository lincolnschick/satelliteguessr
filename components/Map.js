import { useEffect, useState, useRef } from "react";

function Map({center, zoom}) {
  const ref = useRef();
  const style = {height: "99vh", width: "99vw"};
  let mapOptions = {
    center: center,
    zoom: zoom,
    mapTypeId: "satellite",
    disableDefaultUI: true,
    restriction: {
      latLngBounds: {
        north: 50, 
        south: 0, 
        west: 0, 
        east: 50
      },
      strictBounds: true
    }
  }
  
  useEffect(() => new window.google.maps.Map(ref.current, mapOptions));
  return <div ref={ref} style={style} id="map" />;
}
export default Map;