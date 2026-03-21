import type { Feature } from '../content/features.ts';

type FeatureCardProps = {
  feature: Feature;
};

export const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div
    className="bg-surface border border-border rounded-lg p-5 border-l-3 transition-all duration-200 hover:border-l-5"
    style={{ borderLeftColor: feature.borderColor }}
  >
    <h3 className="font-heading font-semibold text-lg text-text mb-2">
      {feature.title}
    </h3>
    <p className="text-muted text-sm mb-3 leading-relaxed">
      {feature.description}
    </p>
    <code className="font-mono text-xs text-accent-red bg-background px-2 py-1 rounded">
      {feature.command}
    </code>
  </div>
);
