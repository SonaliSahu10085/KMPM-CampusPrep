// MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Marker icon fix for React-Leaflet (important)
delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "",

//   shadowUrl: "https://cdn-icons-png.flaticon.com/128/11272/11272962.png",
// });

// Custom Marker Icon
const graduationIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/11272/11272962.png", // OR local import
  iconSize: [40, 40],
  iconAnchor: [20, 40], // Bottom Center
  popupAnchor: [0, -40], // popup exact at top of the icon
});

const position = [22.8, 86.18]; // 👉 yaha apni latitude & longitude daal do

export default function MapComponent() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-sm">
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={position} icon={graduationIcon}>
          <Popup>🎓 Mrs. KMPM Vocational College</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
