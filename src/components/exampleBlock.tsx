import type { Example } from '../content/examples.ts';

import { CopyButton } from './copyButton.tsx';

type ExampleBlockProps = {
  example: Example;
};

export const ExampleBlock = ({ example }: ExampleBlockProps) => (
  <div className="w-full rounded-lg overflow-hidden border border-border bg-[#08080d]">
    <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-muted text-xs ml-2">{example.title}</span>
      </div>
      <CopyButton text={example.command} />
    </div>

    <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
      <div className="mb-2">
        <span className="text-muted">$ </span>
        <span className="text-text whitespace-pre">{example.command}</span>
      </div>

      {example.lines.map((line, index) => (
        <div key={index} className={line.text === '' ? 'h-4' : undefined}>
          {line.text && (
            <span className="whitespace-pre" style={line.color ? { color: line.color } : undefined}>
              {line.text}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);
