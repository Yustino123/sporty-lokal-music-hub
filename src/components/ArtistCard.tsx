
import React from 'react';
import { User } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  region: string;
  bio: string;
  songCount: number;
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="w-full h-40 bg-gradient-to-br from-yellow-400 via-green-500 to-green-600 flex items-center justify-center">
        <User className="h-16 w-16 text-white opacity-80" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{artist.name}</h3>
        <p className="text-sm text-green-600 mb-2">{artist.region}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{artist.bio}</p>
        <div className="text-xs text-gray-500">
          {artist.songCount} lagu
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
