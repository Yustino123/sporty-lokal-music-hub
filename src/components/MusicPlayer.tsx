
import React, { useState } from 'react';
import { Play, Music } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  region: string;
  duration: string;
}

interface MusicPlayerProps {
  currentSong?: Song;
}

const MusicPlayer = ({ currentSong }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!currentSong) {
    return null;
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg flex items-center justify-center">
            <Music className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{currentSong.title}</h4>
            <p className="text-sm text-gray-600">{currentSong.artist} • {currentSong.region}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
          >
            <Play className="h-6 w-6 ml-1" />
          </button>
          <span className="text-sm text-gray-600">{currentSong.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
