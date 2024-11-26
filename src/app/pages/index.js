import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <Link href="/about">Про нас</Link>
    </div>
  );
}
