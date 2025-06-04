'use client';

import React from 'react';

export default function MainContent() {
  return (
    <div className="flex-1 bg-[#101010]">
      {/* Верхнее меню */}
      <div 
        className="sticky top-0 z-[1] isolate bg-[#101010] border-b border-[#383838]"
        style={{ top: 'var(--current-stack-height, 0px)' }}
      >
        <div className="p-6">
          <h2 className="text-xl font-medium">Верхнее меню</h2>
        </div>
      </div>

      {/* Основная часть */}
      <div className="bg-[#101010] p-8 flex">
        {/* Левая часть (36%) */}
        <div className="w-[36%] bg-[#101010]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Добро пожаловать в KHL Manager</h1>
          <div className="space-y-4">
            <p>Здесь будет основной контент страницы...</p>
          </div>
          </div>
        </div>
        
        {/* Правая часть (64%) */}
        <div className="w-[64%] bg-[#101010] relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background.png)' }}></div>
        </div>
      </div>
    </div>
  );
} 