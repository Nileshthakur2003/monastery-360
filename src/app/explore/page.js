'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import the actual map component
const SikkimMap = dynamic(() => import('@/components/SikkimMap'), { ssr: false });


export default function ExplorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 const monasteries = [
  {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    lat: 27.331,
    lng: 88.565,
    short: 'Historic seat of the Karmapa lineage with vibrant murals.',
    popup: 'Rumtek Monastery is one of the most important centers of Tibetan Buddhism in Sikkim.'
  },
  {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    lat: 27.296,
    lng: 88.280,
    short: '17th-century monastery overlooking Pelling valley.',
    popup: 'Pemayangtse Monastery was built in 1705 and is famous for its architecture and festivals.'
  },
  {
    id: 'tashiding',
    name: 'Tashiding Monastery',
    lat: 27.330,
    lng: 88.490,
    short: 'Sacred island-like monastery on the Rathong river.',
    popup: 'Tashiding Monastery is revered for its spiritual significance and serene location.'
  },
  {
    id: 'enchey',
    name: 'Enchey Monastery',
    lat: 27.331,
    lng: 88.613,
    short: 'Sacred monastery with a rich history.',
    popup: 'Established in 1840, this monastery is a significant seat of the Nyingma school of Vajrayana Buddhism.'
  },
  {
    id: 'phensang',
    name: 'Phensang Monastery',
    lat: 27.291,
    lng: 88.612,
    short: 'One of the largest monasteries in Sikkim.',
    popup: 'Founded in 1721, this monastery houses a significant number of monks and has faced challenges like fires and heavy rainfall.'
  },
  {
    id: 'phodong',
    name: 'Phodong Monastery',
    lat: 27.292,
    lng: 88.597,
    short: 'Monastery under the Kagyupa Sect.',
    popup: 'Established in 1740, this monastery houses around 260 monks and is accessible via transport from Magan.'
  },
  {
    id: 'rinchenpong',
    name: 'Rinchenpong Monastery',
    lat: 27.147,
    lng: 88.526,
    short: 'Known for its rare Ati Buddha statue.',
    popup: 'Established in 1730, this monastery is situated at an elevation of over 5500 ft and is a popular tourist attraction.'
  },
  {
    id: 'lachen',
    name: 'Lachen Monastery',
    lat: 27.716,
    lng: 88.557,
    short: 'Nyingma Buddhist monastery.',
    popup: 'Built in 1858, this monastery serves as a spiritual center for the local community.'
  },
  {
    id: 'lachung',
    name: 'Lachung Monastery',
    lat: 27.774,
    lng: 88.728,
    short: 'Significant religious site for the Lachungpa community.',
    popup: 'Established in the 19th century, this monastery is a significant religious site for the Lachungpa community.'
  },
  {
    id: 'lingdum',
    name: 'Lingdum Monastery',
    lat: 27.304,
    lng: 88.604,
    short: 'Known for its peaceful environment.',
    popup: 'Located about 20 km from Gangtok, this monastery is known for its peaceful environment and beautiful surroundings.'
  },
  {
    id: 'ralang',
    name: 'Ralang Monastery',
    lat: 27.156,
    lng: 88.630,
    short: 'Known for its annual Bumchu festival.',
    popup: 'Established in the 18th century, Ralang Monastery is one of the most important monasteries in Sikkim.'
  },
  {
    id: 'sang',
    name: 'Sang Monastery',
    lat: 27.311,
    lng: 88.614,
    short: 'Significant religious site for the local community.',
    popup: 'Founded in 1912, this monastery is a significant religious site for the local community.'
  },
  {
    id: 'tashitenka',
    name: 'Tashi Tenka Monastery',
    lat: 27.283,
    lng: 88.623,
    short: 'Historical coronation site.',
    popup: 'Also known as the "Old Palace," this site holds historical significance as the coronation place of the first Chogyal of Sikkim.'
  },
  {
  id: 'ringyim',
  name: 'Ringyim Monastery',
  lat: 27.525,
  lng: 88.593,
  short: 'Historic Lepcha monastery above Mangan.',
  popup: 'Built in 1852, Ringyim Monastery (Rigdzin Tharlig Gonpa) is a sacred Lepcha site featuring Guru Padmasambhava’s footprints, a Hayagriva cave, and a Dakini spring. It plays a vital role in preserving indigenous Buddhist traditions in North Sikkim.'
},
  {
  id: 'labrang',
  name: 'Labrang Monastery',
  lat: 27.509,
  lng: 88.594,
  short: 'Historic Nyingma Buddhist monastery.',
  popup: 'Labrang Monastery near Mangan is a prominent Nyingma Buddhist site featuring gilded stupas, prayer halls, and a vast collection of sacred texts. It hosts the annual Chaam dance and serves as a center for spiritual learning and cultural preservation.'
},
  {
    id: 'samdruptse',
    name: 'Samdruptse Monastery',
    lat: 27.144,
    lng: 88.363,
    short: 'Monastery with towering Padmasambhava statue.',
    popup: 'Located on Samdruptse Hill near Namchi, this monastery features a 45-meter-high statue of Guru Padmasambhava, symbolizing peace and protection. It offers panoramic views of the Himalayas and is a major spiritual landmark in South Sikkim.'
  },
  {
    id: 'ngadak',
    name: 'Ngadak Monastery',
    lat: 27.144,
    lng: 88.363,
    short: 'Ancient monastery with royal origins.',
    popup: 'Built in the 17th century during the reign of Chogyal Gyurmed Namgyal, Ngadak Monastery was originally a palace. It blends historical architecture with spiritual significance and offers serene views of Namchi’s hills.'
  },
  {
    id: 'doling',
    name: 'Doling Monastery',
    lat: 27.165,
    lng: 88.349,
    short: 'Peaceful monastery with artistic heritage.',
    popup: 'Doling Monastery is nestled in a quiet forested area near Namchi. Known for its tranquil setting and beautiful murals, it is a center for Buddhist learning and meditation.'
  },
  {
    id: 'tendong',
    name: 'Tendong Hill Monastery',
    lat: 27.215,
    lng: 88.435,
    short: 'Monastery atop sacred Tendong Hill.',
    popup: 'Located above Damthang near Namchi, this monastery sits on Tendong Hill, a sacred site for both Lepchas and Buddhists. It offers spiritual retreats and stunning views of the surrounding valleys.'
  },
  {
    id: 'ralong',
    name: 'Ralong Monastery',
    lat: 27.237,
    lng: 88.391,
    short: 'Major Kagyu monastery near Ravangla.',
    popup: 'Ralong Monastery, near Namchi and Ravangla, is a key center of the Kagyu sect. It hosts the vibrant Pang Lhabsol festival and houses rare scriptures and thangkas.'
  },
  {
  id: 'sangacholing',
  name: 'Sang Ngag Choling Monastery',
  lat: 27.299,
  lng: 88.232,
  short: 'Second oldest monastery in Sikkim.',
  popup: 'Founded in 1697, Sangacholing Monastery near Soreng is perched on a ridge above Pelling. It belongs to the Nyingma sect and offers panoramic views of the Himalayas. Accessible via a short forest hike, it’s a serene spiritual retreat.'
},
{
  id: 'rabdentse',
  name: 'Rabdentse Ruins',
  lat: 27.296,
  lng: 88.260,
  short: 'Historic capital with spiritual remnants.',
  popup: 'Rabdentse was the second capital of Sikkim and lies near Pemayangtse Monastery. Though not a monastery, its ruins include chortens and meditation sites, making it a spiritually significant stop on the Buddhist heritage trail.'
}

]



  const routePath = [
    monasteries.find(m => m.id === 'rumtek'),
    monasteries.find(m => m.id === 'pemayangtse'),
    monasteries.find(m => m.id === 'tashiding'),
    monasteries.find(m => m.id === 'enchey'),
    monasteries.find(m => m.id === 'phensang'),
    monasteries.find(m => m.id === 'phodong'),
    monasteries.find(m => m.id === 'rinchenpong'),
    monasteries.find(m => m.id === 'ralang'),
    monasteries.find(m => m.id === 'lingdum'),
    monasteries.find(m => m.id === 'sang'),
    monasteries.find(m => m.id === 'tashitenka'),
    monasteries.find(m => m.id === 'ringyim'),
    monasteries.find(m => m.id === 'labrang'),
    monasteries.find(m => m.id === 'samdruptse'),
    monasteries.find(m => m.id === 'ngadak'),
    monasteries.find(m => m.id === 'doling'),
    monasteries.find(m => m.id === 'tendong'),
    monasteries.find(m => m.id === 'ralong'),
    monasteries.find(m => m.id === 'sangacholing'),
    monasteries.find(m => m.id === 'rabdentse'),
      
  ].filter(Boolean);

  const allMonasteries = monasteries;


  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight" >Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
            <a className="hover:text-emerald-600" href='/explore'>Explore</a>
            <a className="hover:text-emerald-600" href='/events'>Events</a>
            <button className="border rounded-full px-4 py-1 hover:bg-emerald-50">Visit</button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col gap-3 px-4 py-4 text-sm">
              <a className="hover:text-emerald-600" href='/archives'>Archives</a>
              <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
              <a className="hover:text-emerald-600" href='/explore'>Explore</a>
              <a className="hover:text-emerald-600" href='/events'>Events</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Sikkim Pilgrimage Route
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Explore the sacred route connecting the most important monasteries in East and West Sikkim, precisely mapped with 360° virtual tour access.
        </p>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Interactive Map (Marked Monasteries & Pilgrimage Route)</h3>
          <div className="mt-4 h-[500px] rounded-xl bg-slate-50 overflow-hidden">
            <SikkimMap monasteries={allMonasteries} route={routePath} />
          </div>
        </div>
      </section>

      {/* MONASTERIES GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl md:text-2xl font-semibold">Key Monasteries ({allMonasteries.length} listed)</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allMonasteries.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{m.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{m.short}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <div className="text-xs text-slate-500 mr-2 border rounded-full px-2 py-1 bg-slate-100">
                    {m.region} | {m.century} Century
                </div>
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                  360° Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360</div>
        </div>
      </footer>
    </main>
  )
}