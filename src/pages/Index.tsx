
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SongCard from '../components/SongCard';
import MusicPlayer from '../components/MusicPlayer';
import { mockSongs, indonesianProvinces } from '../data/mockData';

interface Song {
  id: string;
  title: string;
  artist: string;
  region: string;
  duration: string;
}

const Index = () => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>();
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [currentPlaylist, setCurrentPlaylist] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlay = (song: Song) => {
    const playlist = selectedRegion 
      ? mockSongs.filter(s => s.region === selectedRegion)
      : mockSongs;
    
    const index = playlist.findIndex(s => s.id === song.id);
    
    setCurrentSong(song);
    setCurrentPlaylist(playlist);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < currentPlaylist.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentSong(currentPlaylist[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentSong(currentPlaylist[prevIndex]);
    }
  };

  const filteredSongs = selectedRegion 
    ? mockSongs.filter(song => song.region === selectedRegion)
    : mockSongs;

  const featuredRegions = ['Jawa Tengah', 'Kalimantan Selatan', 'DKI Jakarta', 'Papua', 'Jawa Timur', 'Aceh'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-16 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jelajahi Musik Daerah Indonesia
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Temukan kekayaan musik tradisional nusantara dari Sabang sampai Merauke
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-lg">🎵 38 Provinsi Indonesia</span>
            </div>
            <Link 
              to="/provinces"
              className="inline-flex items-center bg-white text-green-600 rounded-full px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Jelajahi Per Provinsi
            </Link>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jelajahi berdasarkan Daerah</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setSelectedRegion('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedRegion === '' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Daerah
            </button>
            {featuredRegions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRegion === region 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/provinces" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Lihat semua 38 provinsi →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedRegion ? `Musik dari ${selectedRegion}` : 'Koleksi Musik Populer'}
            </h2>
            <span className="text-gray-600">{filteredSongs.length} lagu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={handlePlay} />
            ))}
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Belum ada musik dari daerah {selectedRegion}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section 
        className="py-16 relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(234, 179, 8, 0.8)), url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1200&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            Tentang Sporty Lokal
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Sporty Lokal adalah platform digital untuk melestarikan dan mempromosikan 
            kekayaan musik tradisional Indonesia. Kami berkomitmen menjadi jembatan 
            antara warisan budaya dan generasi muda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🎼</div>
              <h3 className="font-semibold mb-2">Musik Otentik</h3>
              <p className="opacity-80">Koleksi musik tradisional dari seluruh nusantara</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-semibold mb-2">Komunitas</h3>
              <p className="opacity-80">Mendukung musisi lokal dan seniman tradisional</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="font-semibold mb-2">Pelestarian</h3>
              <p className="opacity-80">Menjaga warisan budaya untuk generasi mendatang</p>
            </div>
          </div>
        </div>
      </section>

      <MusicPlayer 
        currentSong={currentSong} 
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Index;
