'use client';

import { Playfair_Display } from 'next/font/google';
import { useState, type MouseEvent } from 'react';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });
const TELEGRAM_URL = 'tg://resolve?domain=Polehenko_vibe'; // Deep link для відкриття в додатку
const TELEGRAM_WEB_URL = 'https://t.me/Polehenko_vibe'; // Fallback для браузера

export default function Home() {
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [attemptedRedirect, setAttemptedRedirect] = useState(false);
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);

  const handleButtonClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setAttemptedRedirect(true);

    if (/Android/i.test(navigator.userAgent)) {
      event.preventDefault();
      setShowAndroidHelp(true);
      handleCopyLink();
    }
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
          <div className="text-center rounded-3xl p-8 sm:p-12 border-4 border-[#0088cc] shadow-2xl">
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
            
            {/* Анімована інструкція */}
            <div className="mb-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl shadow-lg animate-pulse">
              <p className="font-bold text-lg sm:text-xl mb-2">
                ✋ Як перейти в Telegram:
              </p>
              <ol className="text-left space-y-2 text-base sm:text-lg">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1️⃣</span>
                  <span><strong>iPhone:</strong> натисніть та утримуйте посилання</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2️⃣</span>
                  <span><strong>Android:</strong> натисніть посилання, воно скопіюється</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3️⃣</span>
                  <span>Відкрийте через меню TikTok або вставте в Chrome</span>
                </li>
              </ol>
            </div>

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
            <p className="text-black drop-shadow-lg text-base sm:text-lg mb-3 font-semibold">
              ❌ Не спрацювало? Спробуйте цей спосіб:
            </p>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-lg sm:text-xl">📋 Скопіювати посилання</span>
            </button>
            <p className="text-black text-sm mt-3">
              (Потім вставте в Safari або Chrome)
            </p>
          </div>
        </div>

        {/* Інструкція (показується після спроби редиректу) */}
        {attemptedRedirect && (
          <div className="text-center bg-black/50 backdrop-blur-md rounded-2xl p-6 mt-8 border-2 border-red-500 animate-fadeIn">
            <p className="text-red-500 text-lg sm:text-xl font-bold mb-4">
              {showAndroidHelp ? '⚠️ Android TikTok блокує прямий перехід!' : '⚠️ TikTok блокує прямі переходи!'}
            </p>
            <p className="text-white/90 text-base sm:text-lg mb-4">
              {showAndroidHelp
                ? 'Посилання скопійовано. Натисніть ⋯ зверху та відкрийте в браузері, або вставте посилання в Chrome.'
                : 'Використовуйте один із способів вище 👆'}
            </p>
          </div>
        )}
        
        <p className="text-center text-red-500 text-sm sm:text-base mt-6 font-semibold drop-shadow-lg">
          💫 TikTok вимагає додаткові кроки для переходу в Telegram
        </p>
      </div>
    </main>
  );
}
