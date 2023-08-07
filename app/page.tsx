import Image from 'next/image';
import { Hero } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover"></div>
    </main>
  );
}
