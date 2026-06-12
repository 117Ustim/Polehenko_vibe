'use client';

import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });
const TELEGRAM_URL = 'https://t.me/Polehenko_vibe';

export default function Home() {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = TELEGRAM_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = TELEGRAM_URL;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home_images.png)' }}>
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
            className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-5 px-10 sm:py-7 sm:px-14 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 z-50 cursor-pointer active:scale-95 animate-pulse"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
            <span className="text-lg sm:text-xl">👉 Перейти в Телеграм 👈</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-white drop-shadow-lg text-base sm:text-lg font-semibold mb-2">
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
