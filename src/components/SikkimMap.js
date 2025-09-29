'use client'

import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

// Fix marker icons - use default Leaflet marker
if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

const SIKKIM_CENTER = [27.36, 88.39]
const INITIAL_ZOOM = 10

function ChangeView({ center, zoom, markers }) {
  const map = useMap()
  useEffect(() => {
    if (markers && markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    } else if (center && zoom) {
      map.setView(center, zoom)
    }
  }, [center, zoom, markers, map])
  return null
}

// Component to draw road route
function Routing({ route }) {
  const map = useMap()

  useEffect(() => {
    // Return if the routing control has already been initialized
    if (map.routingControl) {
        map.removeControl(map.routingControl);
    }
    
    if (!route || route.length < 2) return

    const waypoints = route.map(r => L.latLng(r.lat, r.lng))

    // Initialize routing control and attach it to the map instance
    const routingControl = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      addWaypoints: false,
      show: false,
      lineOptions: {
        styles: [{ color: '#059669', opacity: 0.7, weight: 4 }],
      },
      // Do NOT create markers here, as you are creating them separately below
      createMarker: () => null, 
    }).addTo(map)
    
    // Save control to map instance to allow removal on unmount/re-run
    map.routingControl = routingControl;

    return () => {
        if(map.routingControl) {
            map.removeControl(map.routingControl);
            map.routingControl = null;
        }
    }
  }, [route, map])

  return null
}

export default function SikkimMap({ monasteries = [], route = [] }) {
  const markerPositions = monasteries.filter(m => m.lat && m.lng)

  return (
    <MapContainer
      center={SIKKIM_CENTER}
      zoom={INITIAL_ZOOM}
      scrollWheelZoom={true}
      className="w-full h-full rounded-xl"
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView center={SIKKIM_CENTER} zoom={INITIAL_ZOOM} markers={markerPositions} />

      {/* Render Monasteries Markers and Popups */}
      {markerPositions.map(m => (
        <Marker key={m.id} position={[m.lat, m.lng]}>
          <Popup>
            <div className="font-bold">{m.name}</div>
            <div>{m.short}</div>
            {m.popup && <div className="text-sm text-slate-700 mt-1">{m.popup}</div>}
            <a href={`/explore/${m.id}`} className="text-emerald-600 hover:underline text-sm mt-1 block">
              View Details →
            </a>
          </Popup>
        </Marker>
      ))}

      <Routing route={route} />
    </MapContainer>
  )
}