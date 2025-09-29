"use client";
// EncheyMap.jsx (fixed)

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

// --- CSS requirements ---
// in index.css or global.css:
// import 'leaflet/dist/leaflet.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';

// --- Default icon fix ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// --- Custom emoji icon factory ---
const createIcon = (emoji) =>
  L.divIcon({
    html: `<div class="marker-emoji text-lg">${emoji}</div>`,
    className: "custom-div-icon",
    iconSize: [30, 30],
    popupAnchor: [0, -12],
  });

// --- Fly to new location ---
function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 15, { duration: 0.8 });
  }, [position, map]);
  return null;
}

export default function EncheyMap({
  center = [27.331, 88.616],
  zoom = 15,
  amenities = [],
  sites = [],
  height = "h-[600px]",
}) {
  const [filter, setFilter] = useState({});
  const [query, setQuery] = useState("");
  const [loc, setLoc] = useState(null);
  const [flyTo, setFlyTo] = useState(null);
  const mapRef = useRef();

  // combine all points
  const allPoints = useMemo(() => [...amenities, ...sites], [amenities, sites]);

  // build default filter keys from dataset
  useEffect(() => {
    const types = {};
    allPoints.forEach((p) => (types[p.type] = true));
    setFilter(types);
  }, [allPoints]);

  // search + filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPoints.filter(
      (p) =>
        filter[p.type] !== false &&
        (q === "" ||
          p.name.toLowerCase().includes(q) ||
          (p.desc || "").toLowerCase().includes(q))
    );
  }, [allPoints, filter, query]);

  // restore user location if cached
  useEffect(() => {
    const cached = sessionStorage.getItem("enchey_user_loc");
    if (cached) setLoc(JSON.parse(cached));
  }, []);

  // handle geolocation
  const handleLocate = () => {
    if (!navigator.geolocation)
      return alert("Geolocation is not supported by your browser.");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latlng = [position.coords.latitude, position.coords.longitude];
        setLoc(latlng);
        sessionStorage.setItem("enchey_user_loc", JSON.stringify(latlng));
        setFlyTo(latlng);
      },
      (err) => alert("Unable to fetch your location: " + err.message),
      { enableHighAccuracy: true }
    );
  };

  // icon mapping
  const iconByType = (type) => {
    switch (type) {
      case "cafe":
      case "food":
      case "restaurant":
        return createIcon("☕");
      case "hotel":
        return createIcon("🏨");
      case "atm":
        return createIcon("🏧");
      case "temple":
        return createIcon("🛕");
      case "viewpoint":
        return createIcon("🌄");
      default:
        return createIcon("📍");
    }
  };

  // 🔹 FIX: auto-invalidate size after mount and on resize
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // after mount with a delay
    const timeout = setTimeout(() => map.invalidateSize(), 500);

    // on window resize
    const handleResize = () => map.invalidateSize();
    window.addEventListener("resize", handleResize);

    // also observe container changes
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(map.getContainer());

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []); // run once

  return (
    <div
      className={`relative rounded-xl shadow-md bg-white overflow-hidden ${height}`}
    >
      {/* Control panel */}
      <div className="absolute z-20 top-3 left-3 w-[260px] p-3 bg-white/90 backdrop-blur-sm rounded-lg border">
        <h3 className="text-lg font-semibold">Enchey — Local map</h3>
        <p className="text-sm text-slate-600 mb-2">Amenities & tourist sites</p>

        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 px-2 py-1 rounded border text-sm"
            placeholder="Search name or description"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => {
              setQuery("");
            }}
            className="px-3 py-1 rounded border text-sm"
          >
            Clear
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1 text-xs mb-2">
          {Object.keys(filter).map((k) => (
            <label key={k} className="flex items-center gap-1 capitalize">
              <input
                type="checkbox"
                checked={filter[k]}
                onChange={(e) =>
                  setFilter((s) => ({ ...s, [k]: e.target.checked }))
                }
              />
              {k}
            </label>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleLocate}
            className="px-3 py-1 rounded bg-sky-600 text-white text-sm"
          >
            Locate me
          </button>
          <button
            onClick={() => {
              if (filtered.length)
                setFlyTo([filtered[0].lat, filtered[0].lng]);
            }}
            className="px-3 py-1 rounded border text-sm"
          >
            Fly to first
          </button>
        </div>

        <div className="mt-2 text-xs text-slate-600">
          Showing <strong>{filtered.length}</strong> items. <br />
          Click a marker for details.
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(map) => (mapRef.current = map)}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flyTo && <FlyToLocation position={flyTo} />}

        <MarkerClusterGroup>
          {filtered.map((p) => (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              icon={iconByType(p.type)}
            >
              <Popup>
                <div className="max-w-xs">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                  {p.img ? (
                    <img
                      src={p.img}
                      alt=""
                      className="mt-2 rounded w-full h-28 object-cover"
                    />
                  ) : null}
                  <div className="mt-2 text-xs text-slate-500">
                    Type: {p.type}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      className="text-xs px-2 py-1 border rounded"
                      onClick={() => setFlyTo([p.lat, p.lng])}
                    >
                      Zoom
                    </button>
                    <a
                      className="text-xs px-2 py-1 border rounded"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        p.lat + "," + p.lng
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        {/* user location marker */}
        {loc ? (
          <Marker position={loc} icon={createIcon("📍")}>
            <Popup>You are here</Popup>
          </Marker>
        ) : null}
      </MapContainer>

      {/* legend */}
      <div className="absolute z-20 bottom-3 right-3 p-2 bg-white/90 rounded border text-sm">
        <div className="flex gap-2 items-center">
          <div className="w-6 text-center">☕</div> Cafe / Food
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 text-center">🏨</div> Hotel
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 text-center">🛕</div> Temple
        </div>
        <div className="mt-2 text-xs text-slate-500">
          Tip: use the search box to filter names/descriptions.
        </div>
      </div>
    </div>
  );
}
