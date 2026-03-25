import { CopyButton } from './copyButton.tsx';

const JSON_EXAMPLE = `{
  "ok": true,
  "schemaVersion": "1",
  "command": "arrivals",
  "requestedAt": "2026-03-25T09:00:00.000Z",
  "data": "Northern"
}`;

export const AgentSection = () => (
  <section className="px-6 py-24 max-w-5xl mx-auto section-reveal">
    <div className="rounded-xl border border-[#003688]/30 bg-[#003688]/5 p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 tracking-tight text-text">
            Built for agents
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Every command returns a stable JSON envelope when piped or invoked with <code className="text-accent-blue font-mono text-sm">--json</code>, and <code className="text-accent-blue font-mono text-sm">route</code>, <code className="text-accent-blue font-mono text-sm">arrivals</code>, and <code className="text-accent-blue font-mono text-sm">bikes</code> support <code className="text-accent-blue font-mono text-sm">--output &lt;path&gt;</code> when you only need one field or subtree.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-accent-blue mt-0.5 shrink-0">&#9654;</span>
              <span className="text-muted">Stable envelope with <code className="text-text font-mono">ok</code>, <code className="text-text font-mono">schemaVersion</code>, <code className="text-text font-mono">command</code>, and <code className="text-text font-mono">data</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-blue mt-0.5 shrink-0">&#9654;</span>
              <span className="text-muted">Project a scalar like <code className="text-text font-mono">journeys.0.durationMinutes</code> or a subtree like <code className="text-text font-mono">bikePoints.0</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-blue mt-0.5 shrink-0">&#9654;</span>
              <span className="text-muted">Structured errors with <code className="text-text font-mono">code</code>, <code className="text-text font-mono">message</code>, and <code className="text-text font-mono">retryable</code></span>
            </li>
          </ul>
        </div>

        <div className="w-full rounded-lg overflow-hidden border border-border bg-[#08080d]">
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-muted text-xs ml-2">Projected JSON Output</span>
            </div>
            <CopyButton text={`tfl arrivals "waterloo" --json --output arrivals.0.lineName`} />
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <div className="mb-2">
              <span className="text-muted">$ </span>
              <span className="text-text">tfl arrivals "waterloo" --json --output arrivals.0.lineName</span>
            </div>
            <pre className="text-[#0098D4]">{JSON_EXAMPLE}</pre>
          </div>
        </div>
      </div>
    </div>
  </section>
);
