
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

const getRegionBackground = (region: string) => {
  const regionBackgrounds: { [key: string]: string } = {
    'Aceh': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', // Traditional mosque/architecture
    'Sumatra Utara': 'https://images.unsplash.com/photo-1586500036706-41963de00b4e?w=400&h=300&fit=crop', // Lake Toba landscape
    'Sumatra Barat': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Traditional Minang architecture
    'Riau': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop', // Traditional wooden house
    'Jambi': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', // Mountain landscape
    'Sumatra Selatan': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', // River landscape
    'Bengkulu': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', // Coastal mountain
    'Lampung': 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop', // Traditional landscape
    'Bangka Belitung': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Island landscape
    'Kepulauan Riau': 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop', // Island bridge
    'DKI Jakarta': 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', // Modern architecture
    'Jawa Barat': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop', // Pine trees/highland
    'Jawa Tengah': 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop', // Traditional architecture
    'DI Yogyakarta': 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop', // Traditional palace
    'Jawa Timur': 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop', // Mountain alps
    'Banten': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop', // Coastal rock formation
    'Bali': 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop', // Bali temple
    'Nusa Tenggara Barat': 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', // Tropical landscape
    'Nusa Tenggara Timur': 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop', // Mountain grassland
    'Kalimantan Barat': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop', // Forest sunbeam
    'Kalimantan Tengah': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', // River forest
    'Kalimantan Selatan': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', // Traditional river
    'Kalimantan Timur': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop', // Dense forest
    'Kalimantan Utara': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', // Northern forest
    'Sulawesi Utara': 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop', // Mountain view
    'Sulawesi Tengah': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', // Central highlands
    'Sulawesi Selatan': 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop', // Traditional landscape
    'Sulawesi Tenggara': 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop', // Coastal mountain
    'Gorontalo': 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop', // Green hills
    'Sulawesi Barat': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop', // Western coast
    'Maluku': 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop', // Island bridge
    'Maluku Utara': 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', // Northern islands
    'Papua': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop', // Dense rainforest
    'Papua Barat': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', // Western Papua
    'Papua Tengah': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', // Central highlands
    'Papua Pegunungan': 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop', // Mountain range
    'Papua Selatan': 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop', // Southern landscape
    'Papua Barat Daya': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop' // Southwest coast
  };

  return regionBackgrounds[region] || 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop';
};

const SongCard = ({ song, onPlay }: SongCardProps) => {
  const backgroundImage = getRegionBackground(song.region);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <div 
          className="w-full h-32 bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <Music className="h-12 w-12 text-white opacity-80 z-10" />
        </div>
        <button
          onClick={() => onPlay(song)}
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
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
