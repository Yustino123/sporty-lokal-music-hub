
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SongCard from '../components/SongCard';
import MusicPlayer from '../components/MusicPlayer';
import { mockSongs, indonesianProvinces } from '../data/mockData';
import { MapPin } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  region: string;
  province: string;
  duration: string;
}

const Provinces = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [currentSong, setCurrentSong] = useState<Song | undefined>();

  const handlePlay = (song: Song) => {
    setCurrentSong(song);
  };

  const filteredSongs = selectedProvince 
    ? mockSongs.filter(song => song.province === selectedProvince)
    : mockSongs;

  // Group provinces by region for better organization
  const regionGroups = {
    'Sumatera': ['Aceh', 'Sumatra Utara', 'Sumatra Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatra Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung'],
    'Jawa & Sekitarnya': ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Banten'],
    'Bali & Nusa Tenggara': ['Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur'],
    'Kalimantan': ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara'],
    'Sulawesi': ['Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat'],
    'Maluku & Papua': ['Maluku', 'Maluku Utara', 'Papua', 'Papua Barat', 'Papua Tengah', 'Papua Pegunungan', 'Papua Selatan', 'Papua Barat Daya']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Musik Daerah 38 Provinsi Indonesia
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi kekayaan musik tradisional dari setiap provinsi di Indonesia, dari Sabang sampai Merauke
          </p>
        </div>

        {/* Province Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <button
              onClick={() => setSelectedProvince('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedProvince === '' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Provinsi
            </button>
          </div>

          {/* Grouped Province Buttons */}
          <div className="space-y-6">
            {Object.entries(regionGroups).map(([regionName, provinces]) => (
              <div key={regionName} className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {regionName}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {provinces.map((province) => {
                    const songCount = mockSongs.filter(song => song.province === province).length;
                    return (
                      <button
                        key={province}
                        onClick={() => setSelectedProvince(province)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedProvince === province 
                            ? 'bg-green-600 text-white' 
                            : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                        }`}
                      >
                        {province} ({songCount})
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Music Collection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedProvince ? `Musik dari ${selectedProvince}` : 'Semua Musik Daerah'}
            </h2>
            <span className="text-gray-600">{filteredSongs.length} lagu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={handlePlay} />
            ))}
          </div>

          {filteredSongs.length === 0 && selectedProvince && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Belum ada musik dari provinsi {selectedProvince}
              </p>
              <Link 
                to="/artists" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Lihat musisi dari daerah ini
              </Link>
            </div>
          )}
        </div>
      </div>

      <MusicPlayer currentSong={currentSong} />
    </div>
  );
};

export default Provinces;
