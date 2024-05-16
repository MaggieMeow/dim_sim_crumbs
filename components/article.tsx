import { Article as ArticleType } from "@/pages/items";
import articlesRaw from "../keyed_article_data.json";
import Image from "next/image";
const articles = articlesRaw as unknown as Record<string, ArticleType>;

export function Article({ id }: { id: string | null }) {
  if (!id) return null;
  const article = articles[id as string];
  const link = "https://trove.nla.gov.au/newspaper/article/" + id;
  let authors = article.authors.replace(/[\[\]'"]/g, "");
  if (authors.length === 0) {
    authors = "Not Available";
  }
  return (
    <div className=" flex flex-col items-center text-black">
      <Image
        src={article.thumbnailUrl}
        alt={article.title}
        width={200}
        height={200}
      />
      <div className="my-6 grid grid-cols-[1fr_5fr] gap-4">
        <div>Title</div>
        <h3>{article.title}</h3>
        <div>Abstract</div>
        <p className="max-w-prose">{article.abstrct}...</p>
        <div>Authors</div>
        <p>{authors}</p>
        <div>Published Date</div>
        <p>{article.date}</p>
        <div>Article Type</div>
        <p>{article.articleType}</p>
        <div>Newspaper</div>
        <p>{article.newspaper}</p>
        <div>Trove Link</div>
        <a className="underline" href={link} target="_blank">
          {link}
        </a>
      </div>
    </div>
  );
}
