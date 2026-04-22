import { useEffect } from 'react';

export default function Feed() {
  useEffect(() => {
    window.location.href =
      'https://raw.githubusercontent.com/smp46/smp46.github.io/nextjs/public/feeds/feed.xml';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to RSS feed...</p>
    </div>
  );
}
