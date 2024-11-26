import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Мій блог</h1>
      <section>
        <h2>Статті</h2>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <nav>
        <Link href="/about">Про нас</Link>
        <Link href="/user/1">Профіль користувача</Link>
      </nav>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  };
}