export type ExampleLine = {
  color?: string;
  text: string;
};

export type Example = {
  command: string;
  lines: ExampleLine[];
  title: string;
};

export const EXAMPLES: Example[] = [
  {
    command: 'tfl status',
    lines: [
      { color: '#B36305', text: 'Bakerloo: Good Service' },
      { color: '#E32017', text: 'Central: Good Service' },
      { color: '#FFD300', text: 'Circle: Good Service' },
      { color: '#00782A', text: 'District: Minor Delays' },
      { color: '#F3A9BB', text: 'Hammersmith & City: Good Service' },
      { color: '#A0A5A9', text: 'Jubilee: Good Service' },
      { color: '#9B0056', text: 'Metropolitan: Good Service' },
      { color: '#e8e8ec', text: 'Northern: Good Service' },
      { color: '#003688', text: 'Piccadilly: Good Service' },
      { color: '#0098D4', text: 'Victoria: Good Service' },
      { color: '#95CDBA', text: 'Waterloo & City: Good Service' },
      { color: '#6950A1', text: 'Elizabeth: Good Service' },
    ],
    title: 'Line Status',
  },
  {
    command: 'tfl route "waterloo" "kings cross"',
    lines: [
      { text: 'Option 1 | 12 min | 09:15 to 09:27 | £2.80' },
      { text: '- Northern line to King\'s Cross St. Pancras | Waterloo to King\'s Cross St. Pancras | 12 min' },
      { text: '' },
      { text: 'Option 2 | 15 min | 09:18 to 09:33 | £2.80' },
      { text: '- Jubilee line to Green Park | Waterloo to Green Park | 4 min' },
      { text: '- Victoria line to King\'s Cross St. Pancras | Green Park to King\'s Cross St. Pancras | 6 min' },
    ],
    title: 'Journey Planning',
  },
  {
    command: 'tfl arrivals "oxford circus"',
    lines: [
      { text: 'Oxford Circus Underground Station' },
      { color: '#0098D4', text: '1 min  | Victoria to Brixton | Platform 6 | 21:42' },
      { color: '#E32017', text: '2 min  | Central to Epping | Platform 2 | 21:43' },
      { color: '#B36305', text: '3 min  | Bakerloo to Elephant & Castle | Platform 4 | 21:44' },
      { color: '#0098D4', text: '4 min  | Victoria to Walthamstow Central | Platform 5 | 21:45' },
      { color: '#E32017', text: '5 min  | Central to West Ruislip | Platform 1 | 21:46' },
    ],
    title: 'Live Arrivals',
  },
];
