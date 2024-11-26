export async function getStaticProps() {
  const articles = [
    { id: 1, title: 'Стаття 1' },
    { id: 2, title: 'Стаття 2' },
    { id: 3, title: 'Стаття 3' },
  ];

  return {
    props: { articles },
  };
}

export default function Home({ articles }) {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
