import {Article as ArticleType} from '@/pages/items';
import articlesRaw from '../keyed_article_data.json';
import Image from 'next/image';
const articles = articlesRaw as unknown as Record<string, ArticleType>;

export function Article({id}: {id: string | null}) {
  if (!id) return null;
  const article = articles[id as string];
  return (
    <div className=" flex flex-col items-center text-black">
      <h3>{article.title}</h3>
      <Image
        src={article.thumbnailUrl}
        alt={article.title}
        width={200}
        height={200}
      />
      <p>{article.abstrct}</p>
      <p>{article.authors}</p>
      <p>{article.date}</p>
      <p>{article.year}</p>
      <p>{article.articleType}</p>
      <p>{article.newspaper}</p>
    </div>
  );
}
