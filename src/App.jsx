import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-orange-50 to-amber-50 text-stone-900">
      
      <section className="relative min-h-[70vh] flex items-end">
        <img src="/images/tankwa.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative p-10 text-white">
          <h1 className="text-4xl font-bold">Kagga Kamma Roadtrip</h1>
          <p className="mt-2">Dad’s 70th Birthday • 12–15 November</p>
        </div>
      </section>

      <div className="p-8 space-y-10 max-w-4xl mx-auto">

        <div>
          <h2 className="text-2xl font-semibold mb-2">Journey</h2>
          <p>Somerset West → Ceres → Tankwa → Kagga Kamma</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Spotify Playlist</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/0K93afeWZDNAKaFpOeS1Pa"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Bonfire Nights</h2>
          <img src="/images/bonfire.jpg" className="w-full rounded-xl mb-3"/>
          <p>Fire lit → drinks poured → stories shared → stars overhead.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Memory Gallery</h2>
          <p>Add photos after the trip</p>
        </div>

      </div>
    </div>
  );
}
