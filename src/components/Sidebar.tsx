'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  { title: 'Главная', path: '/' },
  { title: 'Состав', path: '/roster' },
  { title: 'Трансферы', path: '/transfers' },
  { title: 'Академия', path: '/academy' },
  { title: 'Офис', path: '/office' },
  { title: 'Настройки', path: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 h-screen w-60 bg-[#101010] border-r border-[#383838]">
      <ul className="pt-8 px-4 flex flex-col" style={{ gap: 'var(--unit)', rowGap: '8px', columnGap: '8px' }}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="block relative p-3 group"
            >
              <span 
                className={`relative z-10 transition-transform duration-300 block group-hover:translate-x-2 ${
                  pathname === item.path ? 'font-medium' : 'opacity-70 group-hover:opacity-100'
                }`}
              >
                {item.title}
              </span>
              <span
                className={`absolute inset-0 rounded-[15px] bg-[#2A2A2A] transition-opacity duration-300 ${
                  pathname === item.path
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-70'
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 