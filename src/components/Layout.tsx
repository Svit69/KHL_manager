import React from 'react';
import Sidebar from '@/components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
