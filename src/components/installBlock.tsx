import { CopyButton } from './copyButton.tsx';

const INSTALL_COMMAND = 'npm install -g @shan8851/tfl-cli';

export const InstallBlock = () => (
  <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3 w-fit max-w-full border-l-3 border-l-accent-red">
    <code className="font-mono text-sm text-text whitespace-nowrap overflow-x-auto">
      <span className="text-muted">$ </span>
      {INSTALL_COMMAND}
    </code>
    <CopyButton text={INSTALL_COMMAND} />
  </div>
);
