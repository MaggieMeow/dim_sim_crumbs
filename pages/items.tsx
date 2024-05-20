import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { option } from "@/utils/chart";
import { useRouter } from "next/router";
import catMap from "../category_id.json";
import articlesRaw from "../keyed_article_data.json";
import { ArticleCard } from "@/components/article-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Article } from "@/components/article";
import { driver } from "driver.js";
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
  useLayoutEffect(() => {
    const driverObj = driver({
      overlayColor: "rgb(255 255 255 / 43%)",
      showProgress: true,
      steps: [
        {
          element: "#sun",
          popover: {
            side: "right",
            align: "end",
            title: "This is a sun",
            description:
              "Click on it to make it big. if it big chart go big, go big u can click",
          },
        },
        {
          element: "[data-name='article-card']",
          popover: {
            side: "top",
            title: "This is a card",
            description: "click to see details",
          },
        },
        {
          element: "[data-name='full-text']",
          popover: {
            side: "top",
            title: "or click here to see original article",
            description: "click to see details",
          },
        },
      ],
    });
    driverObj.drive();
  }, []);

  const [sunburstActive, setSunburstActive] = useState(false);
  const chart = useRef<HTMLDivElement>(null);
  console.log({ sunburstActive });
  const { query } = useRouter();
  const subcat = query.subcat ? atob(query.subcat as string) : null;

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

  const triggerRef = useRef<any>(null);

  const [activeId, setActiveArticle] = useState<string | null>(null);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <motion.div
        id="sun"
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
          scale: 0.1,
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
        <DialogTrigger ref={triggerRef} className="hidden" />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {matchedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              id={article.id}
              onClick={() => {
                setActiveArticle(article.id);
                triggerRef.current.click();
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
