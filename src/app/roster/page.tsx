import React from 'react';
import Sidebar from '@/components/Sidebar';
import RosterContent from '@/components/RosterContent';

export default function RosterPage() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <RosterContent />
    </main>
  );
}
