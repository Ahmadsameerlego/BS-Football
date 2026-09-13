import React, { createContext, useContext, useState, useEffect } from 'react';
import { Coach, Athlete, Program, Camp, ProjectCaseStudy, BookingSubmission } from '../types';
import { coachesData } from '../data/coachesData';
import { athletesData } from '../data/athletesData';
import { programsData } from '../data/programsData';
import { campsData } from '../data/campsData';
import { projectsData } from '../data/projectsData';

interface DataContextType {
  coaches: Coach[];
  athletes: Athlete[];
  programs: Program[];
  camps: Camp[];
  projects: ProjectCaseStudy[];
  submissions: BookingSubmission[];
  addSubmission: (sub: Omit<BookingSubmission, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateSubmissionStatus: (id: string, status: BookingSubmission['status']) => void;
  deleteSubmission: (id: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coaches] = useState<Coach[]>(coachesData);
  const [athletes] = useState<Athlete[]>(athletesData);
  const [programs] = useState<Program[]>(programsData);
  const [camps] = useState<Camp[]>(campsData);
  const [projects] = useState<ProjectCaseStudy[]>(projectsData);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  const [submissions, setSubmissions] = useState<BookingSubmission[]>(() => {
    const saved = localStorage.getItem('bs_submissions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing submissions from local storage', e);
      }
    }
    // Initial demo sample submissions for BS staff to see in CMS
    return [
      {
        id: 'sub-1',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        playerName: 'Youssef Al-Mutairi',
        age: '16',
        position: 'Winger',
        currentLevel: 'Club Youth Team',
        goal: 'Position-Specific Technical Mastery & Agility',
        program: '1-on-1 Private Session with Coach Bassem',
        phone: '+966 50 123 4567',
        email: 'youssef.m@example.com',
        preferredTime: '6:00 PM – 7:00 PM',
        notes: 'Seeking 1-on-1 preparation before Saudi Pro League youth trials.',
        status: 'new',
      },
      {
        id: 'sub-2',
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        playerName: 'Tariq Al-Ghamdi',
        age: '14',
        position: 'Central Midfielder',
        currentLevel: 'Academy Competitive',
        goal: 'Complete 5-Pillar Holistic Evolution',
        program: 'Position-Specific Elite Group',
        phone: '+966 55 987 6543',
        email: 'tariq.g@example.com',
        preferredTime: '7:00 PM – 8:00 PM',
        notes: 'Needs mental performance focus to handle high-pressure matches.',
        status: 'contacted',
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('bs_submissions', JSON.stringify(submissions));
  }, [submissions]);

  const addSubmission = async (sub: Omit<BookingSubmission, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    const newEntry: BookingSubmission = {
      ...sub,
      id: 'sub-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    setSubmissions((prev) => [newEntry, ...prev]);
    return true;
  };

  const updateSubmissionStatus = (id: string, status: BookingSubmission['status']) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const deleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        coaches,
        athletes,
        programs,
        camps,
        projects,
        submissions,
        addSubmission,
        updateSubmissionStatus,
        deleteSubmission,
        isAdminOpen,
        setIsAdminOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
