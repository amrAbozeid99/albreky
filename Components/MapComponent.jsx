import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  const position = [30.0273, 31.2394]; // إحداثيات مثالية للموقع (تعرف على الإحداثيات الحقيقية واستبدلها هنا)

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          211 هالا مول التسعين الجنوبي بجوار سيراميك كليوباترا الدور الثاني 2FG7+5QR New Cairo 1, القاهرة الجديدة, Cairo Governorate
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
