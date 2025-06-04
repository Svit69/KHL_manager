'use client';

import React from 'react';

export default function MainContent() {
  return (
    <div className="flex-1 bg-[#101010] relative">
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
        {/* Часть с фоновой картинкой (64%) */}
        <div className="w-[64%] bg-[#101010] relative">
          <div 
            className="sticky bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: 'url(/background.png)',
              top: 'var(--current-stack-height, 78px)',
              height: 'calc(100vh - var(--current-stack-height, 78px))'
            }}
          ></div>
        </div>

        {/* Контентная часть (36%) */}
        <div className="w-[36%] bg-[#101010]">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Добро пожаловать в KHL Manager</h1>
            <div className="space-y-4">
              <p>Здесь будет основной контент страницы...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Оверлей на весь экран */}
      <div className="fixed inset-0 bg-[#101010] bg-opacity-74 flex items-center justify-center">
        {/* Прямоугольник со скругленными углами */}
        <div className="w-[600px] h-[400px] rounded-2xl bg-[#101010] border border-[#AFAFAF] relative overflow-hidden">
          {/* Фоновое изображение */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/background.png)' }}
          ></div>
          
          {/* Контент внутри прямоугольника */}
          <div className="relative h-full flex flex-col items-center justify-between p-8">
            {/* Верхний текст */}
            <div className="text-center mt-8">
              <h2 className="text-[#FFFFFF] text-4xl font-bold mb-2">
                Вы готовы возглавить<br />
                клуб КХЛ?
              </h2>
              <p className="text-[#FFFFFF] text-xl opacity-50">
                Пора написать новую историю
              </p>
            </div>

            {/* Кнопки внизу */}
            <div className="w-full space-y-4 mb-8">
              <button className="w-full py-4 px-6 bg-[#FFFFFF] text-[#000000] rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                Начать
              </button>
              <button className="w-full py-4 px-6 bg-[#101010] text-[#FFFFFF] border border-[#AFAFAF] rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                Загрузить сохранение
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 