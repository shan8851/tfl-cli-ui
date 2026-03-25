import { InstallBlock } from './installBlock.tsx';
import { Roundel } from './roundel.tsx';
import { TerminalDemo } from './terminalDemo.tsx';
import { TubeMapBackground } from './tubeMapBackground.tsx';

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
    <TubeMapBackground />

    <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl hero-stagger">
      <div className="animate-[roundelPulse_4s_ease-in-out_infinite]">
        <Roundel size={80} />
      </div>

      <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-center tracking-tight leading-tight">
        London transport in your terminal
      </h1>

      <p className="text-muted text-center text-lg max-w-xl leading-relaxed">
        Journey planning, live tube status, disruptions, arrivals, bike availability — and
        <code className="text-accent-blue font-mono text-sm mx-1">--output</code>
        when agents only need one field instead of the whole payload.
      </p>

      <InstallBlock />

      <div className="w-full flex justify-center mt-4">
        <TerminalDemo />
      </div>
    </div>
  </section>
);
