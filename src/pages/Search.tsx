
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import Header from '../components/Header';
import SongCard from '../components/SongCard';
import MusicPlayer from '../components/MusicPlayer';
import { mockSongs } from '../data/mockData';

interface Song {
  id: string;
  title: string;
  artist: string;
  region: string;
  duration: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSong, setCurrentSong] = useState<Song | undefined>();
  const [currentPlaylist, setCurrentPlaylist] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredSongs = mockSongs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlay = (song: Song) => {
    const playlist = filteredSongs;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Cari Musik Daerah
          </h1>
          
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari lagu, artis, atau daerah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={handlePlay} />
          ))}
        </div>

        {filteredSongs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada hasil untuk "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      <MusicPlayer 
        currentSong={currentSong} 
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Search;
