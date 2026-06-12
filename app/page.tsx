'use client';

import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });
const TELEGRAM_URL = 'tg://resolve?domain=Polehenko_vibe'; // Deep link для відкриття в додатку
const TELEGRAM_WEB_URL = 'https://t.me/Polehenko_vibe'; // Fallback для браузера

export default function Home() {
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [attemptedRedirect, setAttemptedRedirect] = useState(false);

  const handleButtonClick = () => {
    setAttemptedRedirect(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(TELEGRAM_WEB_URL);
      setShowCopyNotification(true);
      
      // Ховаємо повідомлення через 3 секунди
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 3000);
    } catch (err) {
      // Fallback для старих браузерів
      const textArea = document.createElement('textarea');
      textArea.value = TELEGRAM_WEB_URL;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setShowCopyNotification(true);
        setTimeout(() => setShowCopyNotification(false), 3000);
      } catch (err) {
        alert('Посилання: ' + TELEGRAM_WEB_URL);
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/home_images.png)' }}>
      {/* Toast повідомлення про копіювання */}
      {showCopyNotification && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-2xl z-[100] animate-slideDown">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold text-lg">Посилання скопійовано! ✅</span>
          </div>
        </div>
      )}

      {/* Fallback for no-JS */}
      <noscript>
        <div className="text-center text-white bg-black/60 p-8 rounded-xl">
          <p className="text-2xl mb-4">Для роботи сайту потрібен JavaScript</p>
          <a href={TELEGRAM_WEB_URL} className="text-blue-300 underline text-xl hover:text-blue-200">
            Або перейдіть за посиланням вручну
          </a>
        </div>
      </noscript>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl ${playfair.className}`}>
            ПРОБУДИ СВІЙ<br />ІДЕАЛЬНИЙ ВАЙБ
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-xl">
            10 сортів чаю в одному путівнику
          </h2>
        </div>

        {/* Основна кнопка переходу — тепер текстова ссылка */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-4 border-[#0088cc] shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="#0088cc"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
              </svg>
            </div>
            <p className="text-white text-xl sm:text-2xl font-semibold mb-4">
              👉 Натисніть на посилання нижче:
            </p>
            <a
              href={TELEGRAM_WEB_URL}
              onClick={handleButtonClick}
              className="inline-block text-[#0088cc] bg-white font-bold text-2xl sm:text-3xl lg:text-4xl px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 underline decoration-4 underline-offset-8"
            >
              t.me/Polehenko_vibe
            </a>
          </div>

          {/* Додаткова кнопка — копіювання посилання */}
          <div className="text-center">
            <p className="text-white/90 drop-shadow-lg text-base sm:text-lg mb-3">
              Посилання не працює? 🤔
            </p>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold py-3 px-8 rounded-full border-2 border-white/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-base sm:text-lg">Скопіювати посилання</span>
            </button>
          </div>
        </div>

        {/* Інструкція (показується після спроби редиректу) */}
        {attemptedRedirect && (
          <div className="text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 mt-8 border border-white/20 animate-fadeIn">
            <p className="text-white text-lg sm:text-xl font-semibold mb-4">
              📱 Якщо Telegram не відкрився автоматично:
            </p>
            <ol className="text-white/90 text-left max-w-md mx-auto space-y-3 text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#0088cc] text-xl">1.</span>
                <span>Скопіюйте посилання кнопкою вище ☝️</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#0088cc] text-xl">2.</span>
                <span>Вставте його в браузер Safari/Chrome</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#0088cc] text-xl">3.</span>
                <span>Або відкрийте Telegram вручну та знайдіть: <span className="font-mono bg-white/20 px-2 py-1 rounded">@Polehenko_vibe</span></span>
              </li>
            </ol>
          </div>
        )}
        
        <p className="text-center text-white/80 text-sm sm:text-base mt-6">
          💫 Натисніть на велику кнопку, щоб приєднатися до каналу!
        </p>
      </div>
    </main>
  );
}
