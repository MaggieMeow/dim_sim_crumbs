import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { option } from "@/utils/chart";
import { useRouter } from "next/router";
import catMap from "../category_id.json";
import articlesRaw from "../keyed_article_data.json";
import { ArticleCard } from "@/components/article-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Article } from "@/components/article";
export type Article = {
  categories: string[];
  title: string;
  abstrct: string;
  date: string;
  authors: string;
  year: number;
  articleType: string;
  newspaper: string;
  thumbnailUrl: string;
};
const articles = articlesRaw as unknown as Record<string, Article>;

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [sunburstActive, setSunburstActive] = useState(false);
  const chart = useRef<HTMLDivElement>(null);
  console.log({ sunburstActive });
  const { query } = useRouter();
  const subcat = query.subcat
    ? decodeURIComponent(query.subcat as string)
    : null;
  useEffect(() => {
    console.log("!!");
  }, [subcat]);

  const { push } = useRouter();

  const hasRendered = useRef(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSunburstActive((prev) => !prev);
  };

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (e.data.name === "navigate") {
        push({
          pathname: "/items",
          query: { subcat: e.data.subcat },
        });
        setSunburstActive((prev) => !prev);
      }
    };
    window.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  useEffect(() => {
    if (hasRendered.current) return;
    if (chart.current) {
      const myChart = echarts.init(chart.current);
      myChart.setOption(option);
      hasRendered.current = true;
    }
  }, []);

  let matchedArticles: (Article & { id: string })[] = [];
  if (subcat) {
    console.log({ subcat }, catMap);
    const articleIds = (catMap as any)[subcat];

    if (articleIds) {
      matchedArticles = articleIds.map((id: number) =>
        articles[id] ? { ...articles[id], id } : {}
      );
    }
  }

  console.log(matchedArticles);

  const [activeId, setActiveArticle] = useState<string | null>(null);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <motion.div
        onClick={() => {
          setSunburstActive(true);
        }}
        animate={{
          scale: sunburstActive ? 1 : 0.1,
        }}
        transition={{
          type: "spring",
          bounce: 0.15,
        }}
        // layout
        initial={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 bg-white rounded-full h-[3000px] w-[3000px]"
      >
        <motion.button
          animate={{
            opacity: sunburstActive ? 1 : 0,
          }}
          onClick={handleClose}
          className="absolute top-[50%] left-[50%] p-4 bg-black text-white z-10"
        >
          Close
        </motion.button>

        <div
          ref={chart}
          className={`absolute bottom-[20%] right-[20%] ${
            sunburstActive ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{
            height: "800px",
            width: "800px",
          }}
        />
      </motion.div>
      <Dialog>
        <div className="grid grid-cols-3 gap-4">
          {matchedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              id={article.id}
              Trigger={DialogTrigger}
              onClick={() => {
                setActiveArticle(article.id);
              }}
            />
          ))}
        </div>

        <DialogContent className="min-w-[80vw] min-h-[60vh]">
          <Article id={activeId} />
        </DialogContent>
      </Dialog>
    </main>
  );
}
