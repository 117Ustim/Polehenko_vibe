'use client';

import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });
const TELEGRAM_URL = 'tg://resolve?domain=Polehenko_vibe'; // Deep link to open Telegram app directly
const TELEGRAM_WEB_URL = 'https://t.me/Polehenko_vibe'; // Fallback for web

export default function Home() {
  const [countdown, setCountdown] = useState(1);

  const redirectToTelegram = () => {
    // Try to open Telegram app first with deep link
    window.location.href = TELEGRAM_URL;
    // Fallback to web version after a short delay if app doesn't open
    setTimeout(() => {
      window.location.replace(TELEGRAM_WEB_URL);
    }, 1500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          redirectToTelegram();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    redirectToTelegram();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home_images.png)' }}>
      {/* Fallback for no-JS */}
      <noscript>
        <meta httpEquiv="refresh" content={`1;url=${TELEGRAM_WEB_URL}`} />
        <div className="text-center text-white">
          <p className="text-2xl mb-4">Перенаправлення...</p>
          <a href={TELEGRAM_WEB_URL} className="text-blue-300 underline text-xl">
            Якщо не перенаправило — натисни сюди
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

        <div className="flex justify-center mb-8">
          <button
            onClick={handleRedirect}
            className="group relative inline-flex items-center justify-center gap-4 sm:gap-6 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-6 px-12 sm:py-8 sm:px-20 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 z-50 cursor-pointer active:scale-95 animate-pulse"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
            <span className="text-xl sm:text-2xl">👉 Перейти в Телеграм 👈</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-white drop-shadow-lg text-lg sm:text-xl font-semibold mb-2">
            ⏰ Автоматичний перехід через {countdown} секунд...
          </p>
        </div>
        
        <p className="text-center text-white/80 text-sm sm:text-base mt-2">
          (якщо не хочете чекати — натисніть на кнопку вище!)
        </p>
      </div>
    </main>
  );
}
