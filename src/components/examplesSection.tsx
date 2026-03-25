import { EXAMPLES } from '../content/examples.ts';
import { ExampleBlock } from './exampleBlock.tsx';

export const ExamplesSection = () => (
  <section className="px-6 py-24 max-w-3xl mx-auto section-reveal">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 tracking-tight">
      See it in action
    </h2>
    <p className="text-muted text-center mb-12 max-w-lg mx-auto">
      Real output from the CLI. Human-readable by default, precise when agents only need one field.
    </p>

    <div className="flex flex-col gap-6">
      {EXAMPLES.map((example) => (
        <ExampleBlock key={example.title} example={example} />
      ))}
    </div>
  </section>
);
