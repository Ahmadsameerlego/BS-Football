import React from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { PhilosophySection } from './components/home/PhilosophySection';
import { PillarsSection } from './components/home/PillarsSection';
import { CompletePlayerSection } from './components/home/CompletePlayerSection';
import { AudienceSection } from './components/home/AudienceSection';
import { FacilitiesShowcase } from './components/home/FacilitiesShowcase';
import { ProgramsSection } from './components/home/ProgramsSection';
import { AthletesSection } from './components/home/AthletesSection';
import { CampSection } from './components/home/CampSection';
import { CoachesSection } from './components/home/CoachesSection';
import { ProjectsSection } from './components/home/ProjectsSection';
import { AssessmentBookingSection } from './components/home/AssessmentBookingSection';
import { FaqSection } from './components/home/FaqSection';
import { Footer } from './components/common/Footer';
import { AdminModal } from './components/admin/AdminModal';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pitch-950 text-slate-100 flex flex-col font-sans selection:bg-bsgold-400 selection:text-black">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <PillarsSection />
        <CompletePlayerSection />
        <FacilitiesShowcase />
        <ProgramsSection />
        <AudienceSection />
        <AthletesSection />
        <CampSection />
        <CoachesSection />
        <ProjectsSection />
        <AssessmentBookingSection />
        <FaqSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Admin CMS Modal */}
      <AdminModal />
    </div>
  );
};

export default App;
