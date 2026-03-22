import { CopyButton } from './copyButton.tsx';

export const SkillSection = () => (
  <section className="px-6 py-20 max-w-5xl mx-auto section-reveal">
    <div className="text-center mb-10">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 tracking-tight text-text">
        🦞 Agent Skill
      </h2>
      <p className="text-muted max-w-2xl mx-auto">
        Install the skill so your agent knows every command. Works with OpenClaw, or grab it from the skills collection for any agent framework.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-text font-mono font-semibold text-sm">ClawHub</h3>
          <CopyButton text="clawhub install tfl-cli" />
        </div>
        <code className="text-status-minor text-sm font-mono">clawhub install tfl-cli</code>
        <p className="text-muted text-xs mt-3">
          For{' '}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text underline"
          >
            OpenClaw
          </a>{' '}
          users
        </p>
        <a
          href="https://clawhub.ai/shan8851/tfl-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-muted hover:text-text transition-colors"
        >
          View on ClawHub →
        </a>
      </div>

      <div className="rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-text font-mono font-semibold text-sm">Skills Collection</h3>
          <CopyButton text='npx skills add shan8851/agent-skills --skill tfl-cli -g -y' />
        </div>
        <code className="text-status-minor text-sm font-mono">npx skills add shan8851/agent-skills --skill tfl-cli</code>
        <p className="text-muted text-xs mt-3">
          For any agent framework
        </p>
        <a
          href="https://skills.shan8851.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-muted hover:text-text transition-colors"
        >
          Browse all skills →
        </a>
      </div>
    </div>
  </section>
);
