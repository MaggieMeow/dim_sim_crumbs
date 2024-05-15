import Image from 'next/image';

export function ArticleCard(props: {
  categories: string[];
  title: string;
  abstrct: string;
  date: string;
  authors: string;
  year: number;
  articleType: string;
  newspaper: string;
  thumbnailUrl: string;
  Trigger: React.FC<{children: React.ReactNode}>;
  onClick?: () => void;
}) {
  const Trigger = props.Trigger;
  return (
    <div
      className="w-64 flex flex-col border-2 rounded-sm border-white p-4 hover:scale-105 transition-all ease-in-out"
      onClick={props.onClick}
    >
      <Trigger>
        <>
          <Image
            src={props.thumbnailUrl}
            alt={props.title}
            width={200}
            height={200}
          />
          <div>
            <h2 className="font-bold">{props.title}</h2>
            <p>{props.abstrct}</p>
          </div>
        </>
      </Trigger>
    </div>
  );
}
