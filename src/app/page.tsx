import React from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <MainContent />
    </main>
  );
} 