const TELEGRAM_WEB_URL = 'https://t.me/Polehenko_vibe';

export default function Head() {
  return (
    <>
      <meta httpEquiv="refresh" content={`1;url=${TELEGRAM_WEB_URL}`} />
    </>
  );
}
