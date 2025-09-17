'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet’s default icon paths (if needed)
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default function SikkimMap() {
  const sikkimCenter = [27.5330, 88.5122]  // approx center of Sikkim
  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer center={sikkimCenter} zoom={8} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={sikkimCenter}>
          <Popup>Sikkim</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
