import { Roundel } from './roundel.tsx';

export const SiteFooter = () => (
  <footer className="px-6 py-16 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
      <Roundel size={32} color="#6b6b7b" />

      <div className="flex items-center gap-6 text-sm text-muted">
        <a
          href="https://github.com/shan8851/tfl-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors"
        >
          GitHub
        </a>
        <span className="text-border">|</span>
        <a
          href="https://www.npmjs.com/package/@shan8851/tfl-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors"
        >
          npm
        </a>
        <span className="text-border">|</span>
        <span>MIT License</span>
      </div>

      <p className="text-xs text-muted/60">
        Powered by TfL Open Data. Not affiliated with Transport for London.
      </p>

      <p className="text-xs text-muted/60">
        Built by{' '}
        <a
          href="https://x.com/shan8851"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-text transition-colors"
        >
          @shan8851
        </a>
      </p>
    </div>
  </footer>
);
