import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-0 pb-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home_images.png)' }}>
      <div className="max-w-7xl mx-auto sm:mt-24">
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
            href="https://t.me/Polehenko_vibe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#0088cc] hover:bg-[#0077b3] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
            Телеграм
          </a>
        </div>
      </div>
    </main>
  );
}
