export type Feature = {
  borderColor: string;
  command: string;
  description: string;
  title: string;
};

export const FEATURES: Feature[] = [
  {
    borderColor: '#E32017',
    command: 'tfl status',
    description: 'Live line status across tube, overground, DLR, and Elizabeth line. Filter by line name or mode.',
    title: 'Tube Status',
  },
  {
    borderColor: '#0098D4',
    command: 'tfl route "waterloo" "kings cross"',
    description: 'Journey planning between stations, postcodes, or coordinates. Supports accessibility and mode preferences.',
    title: 'Journey Planning',
  },
  {
    borderColor: '#B36305',
    command: 'tfl disruptions',
    description: 'Current disruptions with detail. See what\'s broken right now across the network.',
    title: 'Disruptions',
  },
  {
    borderColor: '#6950A1',
    command: 'tfl arrivals "oxford circus"',
    description: 'Next arrivals at any stop or station. Filter by line, direction, and limit results.',
    title: 'Arrivals',
  },
  {
    borderColor: '#00782A',
    command: 'tfl bikes "SE1 9SG"',
    description: 'Santander bike availability near any postcode, station, or coordinates.',
    title: 'Bike Docks',
  },
  {
    borderColor: '#FFD300',
    command: 'tfl search stops "angel"',
    description: 'Find stops and stations by name. Returns IDs, modes, and coordinates.',
    title: 'Stop Search',
  },
];
