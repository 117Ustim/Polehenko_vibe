import { Playfair_Display } from 'next/font/google';
import { useEffect } from 'react';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });
const TELEGRAM_URL = 'https://t.me/Polehenko_vibe';

export default function Home() {
  useEffect(() => {
    // Auto-redirect after 3 seconds as a backup
    const timer = setTimeout(() => {
      window.location.href = TELEGRAM_URL;
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center pt-0 pb-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home_images.png)' }}>
      <div className="max-w-7xl mx-auto sm:mt-24 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl ${playfair.className}`}>
            ПРОБУДИ СВІЙ<br />ІДЕАЛЬНИЙ ВАЙБ
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-xl">
            10 сортів чаю в одному путівнику
          </h2>
        </div>

        <div className="flex justify-center mt-[-38px] sm:mt-16">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#0088cc] hover:bg-[#0077b3] text-white font-semibold py-4 px-8 sm:py-5 sm:px-10 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 z-50 relative cursor-pointer active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = TELEGRAM_URL;
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
            Перейти в Телеграм
          </a>
        </div>
        
        <p className="text-center text-white/80 mt-8 text-sm">
          Если кнопка не сработает — произойдёт автоматический переход через 3 секунды
        </p>
      </div>
    </main>
  );
}
