import { useEffect, useState } from 'react';

const COMMAND = '$ tfl status';

const STATUS_LINES = [
  { color: '#B36305', name: 'Bakerloo', status: 'Good Service', statusColor: '#00782A' },
  { color: '#E32017', name: 'Central', status: 'Good Service', statusColor: '#00782A' },
  { color: '#FFD300', name: 'Circle', status: 'Good Service', statusColor: '#00782A' },
  { color: '#00782A', name: 'District', status: 'Minor Delays', statusColor: '#FFD300' },
  { color: '#F3A9BB', name: 'Hammersmith & City', status: 'Good Service', statusColor: '#00782A' },
  { color: '#A0A5A9', name: 'Jubilee', status: 'Good Service', statusColor: '#00782A' },
  { color: '#9B0056', name: 'Metropolitan', status: 'Good Service', statusColor: '#00782A' },
  { color: '#e8e8ec', name: 'Northern', status: 'Good Service', statusColor: '#00782A' },
  { color: '#003688', name: 'Piccadilly', status: 'Part Closure', statusColor: '#E32017' },
  { color: '#0098D4', name: 'Victoria', status: 'Good Service', statusColor: '#00782A' },
  { color: '#95CDBA', name: 'Waterloo & City', status: 'Good Service', statusColor: '#00782A' },
  { color: '#6950A1', name: 'Elizabeth', status: 'Good Service', statusColor: '#00782A' },
];

export const TerminalDemo = () => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl rounded-lg overflow-hidden border border-border bg-[#08080d]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-muted text-xs ml-2">Terminal</span>
      </div>

      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex">
          <span
            className={`terminal-typing ${typingDone ? 'done' : ''}`}
            style={{ '--char-count': COMMAND.length } as React.CSSProperties}
          >
            {COMMAND}
          </span>
        </div>

        {typingDone && (
          <div className="mt-2">
            {STATUS_LINES.map((line, index) => (
              <div
                key={line.name}
                className="terminal-line"
                style={{ '--line-index': index } as React.CSSProperties}
              >
                <span style={{ color: line.color }}>{line.name}</span>
                <span className="text-muted">: </span>
                <span style={{ color: line.statusColor }}>{line.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
