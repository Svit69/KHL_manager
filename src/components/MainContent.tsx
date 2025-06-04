'use client';

import React, { useState } from 'react';
import { teams } from '../data/teams';

export default function MainContent() {
  const [isTeamSelection, setIsTeamSelection] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

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
        <div className="overlay-backdrop absolute inset-0 bg-[#101010] opacity-50"></div>
        
        {/* Прямоугольник со скругленными углами */}
        <div className="welcome-modal relative w-[400px] h-[92vh] rounded-2xl bg-[#101010] border border-[#AFAFAF] overflow-hidden">
          {/* Фоновое изображение */}
          {!isTeamSelection && (
            <div 
              className="modal-background absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url(/gagarin_cup_backround.png), url(/background.png)',
                backgroundBlendMode: 'overlay'
              }}
            />
          )}
          
          {/* Контент внутри прямоугольника */}
          <div className="modal-content relative h-full flex flex-col items-center justify-between p-4">
            {/* Верхний текст */}
            <div className="modal-header text-center mt-8">
              <h2 className="modal-title text-[#FFFFFF] text-2xl font-bold mb-2">
                {isTeamSelection ? (
                  <>
                    Выберите команду,<br />
                    за которую начнете
                  </>
                ) : (
                  <>
                    Вы готовы возглавить<br />
                    клуб КХЛ?
                  </>
                )}
              </h2>
              <p className="modal-subtitle text-[#8B8B8B] text-sm">
                {isTeamSelection ? 
                  'и приведете к кубку Гагарина' : 
                  'Пора написать новую историю'
                }
              </p>
            </div>

            {/* Сетка команд или кнопки */}
            {isTeamSelection ? (
              <div className="teams-grid w-full flex-1 mt-8 mb-4 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 px-2">
                  {teams.map((team) => (
                    <button
                      key={team.id}
                      onClick={() => setSelectedTeamId(team.id)}
                      className={`team-card p-4 rounded-lg border border-[#AFAFAF] transition-colors ${
                        selectedTeamId === team.id ? 'bg-[#AFAFAF]' : 'bg-[#202020]'
                      }`}
                    >
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        className="w-20 h-20 mx-auto mb-2 object-contain"
                      />
                      <p className="text-white text-center">{team.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Кнопки внизу */}
            <div className="modal-actions w-full space-y-4 mb-8">
              <button 
                onClick={() => setIsTeamSelection(true)}
                className="start-button w-full py-3 px-6 bg-[#FFFFFF] text-[#000000] rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors"
              >
                {isTeamSelection ? 'Выбрать' : 'Начать'}
              </button>
              <button 
                onClick={() => {
                  if (isTeamSelection) {
                    setIsTeamSelection(false);
                    setSelectedTeamId(null);
                  }
                }}
                className="load-button w-full py-3 px-6 bg-[#101010] text-[#FFFFFF] border border-[#AFAFAF] rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors"
              >
                {isTeamSelection ? 'Назад' : 'Загрузить сохранение'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 