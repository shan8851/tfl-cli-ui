import { AgentSection } from './components/agentSection.tsx';
import { ExamplesSection } from './components/examplesSection.tsx';
import { FeatureGrid } from './components/featureGrid.tsx';
import { Hero } from './components/hero.tsx';
import { SkillSection } from './components/skillSection.tsx';
import { SiteFooter } from './components/siteFooter.tsx';

export const App = () => (
  <main className="min-h-screen">
    <Hero />
    <FeatureGrid />
    <ExamplesSection />
    <AgentSection />
    <SkillSection />
    <SiteFooter />
  </main>
);
