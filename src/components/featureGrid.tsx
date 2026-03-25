import { FEATURES } from '../content/features.ts';
import { FeatureCard } from './featureCard.tsx';

export const FeatureGrid = () => (
  <section className="px-6 py-24 max-w-5xl mx-auto section-reveal">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 tracking-tight">
      Everything you need
    </h2>
    <p className="text-muted text-center mb-12 max-w-lg mx-auto">
      Six core commands across the full TfL network, plus agent-friendly projection for route, arrivals, and bikes.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  </section>
);
