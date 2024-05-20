import Image from 'next/image';

export function ArticleCard(props: {
  id: string;
  categories: string[];
  title: string;
  abstrct: string;
  date: string;
  authors: string;
  year: number;
  articleType: string;
  newspaper: string;
  thumbnailUrl: string;
  onClick?: () => void;
}) {
  const trove_link = 'https://trove.nla.gov.au/newspaper/article/' + props.id;
  return (
    <div
      className="w-68 flex flex-col border-2 rounded-sm border-white p-4 hover:scale-105 transition-all ease-in-out"
      onClick={props.onClick}
    >
      <img
        className="mx-auto"
        src={props.thumbnailUrl}
        alt={props.title}
        width={200}
        height={200}
      />
      <div className="text-left my-1">
        <h2 className="font-bold py-1">{props.title}</h2>
        <p>{props.date}</p>
        <p className="">{props.newspaper}</p>
      </div>
      <a className="underline" href={trove_link} target="_blank">
        Full Text
      </a>
    </div>
  );
}
