
import React from 'react';
import { Play, Music } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  region: string;
  duration: string;
}

interface SongCardProps {
  song: Song;
  onPlay: (song: Song) => void;
}

const SongCard = ({ song, onPlay }: SongCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <div className="w-full h-32 bg-gradient-to-br from-green-400 via-green-500 to-yellow-400 flex items-center justify-center">
          <Music className="h-12 w-12 text-white opacity-80" />
        </div>
        <button
          onClick={() => onPlay(song)}
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Play className="h-6 w-6 text-green-600 ml-1" />
          </div>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 truncate">{song.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{song.artist}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{song.region}</span>
          <span>{song.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
