'use client';

import React from 'react';

export default function MainContent() {
  return (
    <>
      {/* Основной контент */}
      <div className="main-layout flex-1 bg-[#101010] relative">
        {/* Верхнее меню */}
        <div 
          className="main-header sticky top-0 z-10 isolate bg-[#101010] border-b border-[#383838]"
          style={{ top: 'var(--current-stack-height, 0px)' }}
        >
          <div className="header-content p-6">
            <h2 className="header-title text-xl font-medium">Верхнее меню</h2>
          </div>
        </div>

        {/* Основная часть */}
        <div className="main-content bg-[#101010] p-8 flex">
          {/* Часть с фоновой картинкой (64%) */}
          <div className="content-left w-[64%] bg-[#101010] relative">
            <div 
              className="background-image sticky bg-cover bg-center bg-no-repeat" 
              style={{ 
                backgroundImage: 'url(/background.png)',
                top: 'var(--current-stack-height, 78px)',
                height: 'calc(100vh - var(--current-stack-height, 78px))'
              }}
            ></div>
          </div>

          {/* Контентная часть (36%) */}
          <div className="content-right w-[36%] bg-[#101010]">
            <div className="content-wrapper max-w-5xl mx-auto">
              <h1 className="content-title text-2xl font-semibold mb-6">Добро пожаловать в KHL Manager</h1>
              <div className="content-text space-y-4">
                <p>Здесь будет основной контент страницы...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Оверлей на весь экран */}
      <div className="welcome-overlay fixed inset-0 z-50 flex items-center justify-center">
        {/* Затемнение фона */}
        <div className="overlay-backdrop absolute inset-0 bg-[#101010] opacity-74"></div>
        
        {/* Прямоугольник со скругленными углами */}
        <div className="welcome-modal relative w-[350px] h-[92vh] rounded-2xl bg-[#101010] border border-[#AFAFAF] overflow-hidden">
          {/* Фоновое изображение */}
          <div 
            className="modal-background absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/background.png)' }}
          ></div>
          
          {/* Контент внутри прямоугольника */}
          <div className="modal-content relative h-full flex flex-col items-center justify-between p-8">
            {/* Верхний текст */}
            <div className="modal-header text-center mt-8">
              <h2 className="modal-title text-[#FFFFFF] text-2xl font-bold mb-2">
                Вы готовы возглавить<br />
                клуб КХЛ?
              </h2>
              <p className="modal-subtitle text-[#FFFFFF] text-base opacity-50">
                Пора написать новую историю
              </p>
            </div>

            {/* Кнопки внизу */}
            <div className="modal-actions w-full space-y-4 mb-8">
              <button className="start-button w-full py-3 px-6 bg-[#FFFFFF] text-[#000000] rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors">
                Начать
              </button>
              <button className="load-button w-full py-3 px-6 bg-[#101010] text-[#FFFFFF] border border-[#AFAFAF] rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors">
                Загрузить сохранение
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 