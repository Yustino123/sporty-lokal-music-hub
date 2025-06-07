
import React from 'react';
import Header from '../components/Header';
import ArtistCard from '../components/ArtistCard';
import { mockArtists } from '../data/mockData';

const Artists = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Musisi Lokal Indonesia
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kenali para seniman dan musisi yang berkarya melestarikan kekayaan musik tradisional nusantara
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
