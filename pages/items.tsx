import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { option } from "@/utils/chart";
import { useRouter } from "next/router";
import catMap from "../category_id.json";
import articlesRaw from "../keyed_article_data.json";
import categories from "../structured_web_data_input.json";
import { ArticleCard } from "@/components/article-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Article } from "@/components/article";
import { driver } from "driver.js";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useStore } from "@/components/store";
import { CatList } from "@/components/CatList";
import { Checkbox } from "@/components/ui/checkbox";
const catDescMap: Record<string, string> = {
  '"Dim Sim Do" Fundraising for War Nurses': `The "Dim Sim Do" was an event held on Friday, May 16, 1941, at the Town Hall in Melbourne to raise funds for the War Nurses' Comforts Fund. It featured continuous stage entertainment by Chinese artists, a dim sim luncheon and a Chinese afternoon tea.`,
};
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
interface Category {
  name: string;
  children: Category[];
  value?: number;
}
const inter = Inter({ subsets: ["latin"] });
function getCatList(name: string, categories: Category[]): string[] | null {
  const path: string[] = [];

  function findPath(categoryList: Category[], currentPath: string[]): boolean {
    for (const category of categoryList) {
      const newPath = [...currentPath, category.name];
      if (category.name === name) {
        path.push(...newPath);
        return true;
      }
      if (category.children && findPath(category.children, newPath)) {
        return true;
      }
    }
    return false;
  }

  findPath(categories, []);

  return path.length > 0 ? path : null;
}
function onboard() {
  const driverObj = driver({
    popoverClass: "driverjs-theme",
    overlayColor: "rgb(255 255 255 / 43%)",
    showProgress: true,
    steps: [
      {
        element: "[data-name='article-card']",
        popover: {
          side: "top",
          title: "View article details",
          description: "Click to view more details about the article",
        },
      },
      // {
      //   element: "[data-name='full-text']",
      //   popover: {
      //     side: "top",
      //     title: "Read full article",
      //     description:
      //       "Click to open the article in Trove for its full text.",
      //   },
      // },
      {
        element: "#sun",
        popover: {
          side: "right",
          align: "end",
          title: "Category Navigation",
          description: "Click to expand the category navigation panel.",
        },
      },
      {
        element: "#sun",
        popover: {
          side: "right",
          align: "end",
          title: "Navigate to other categories",
          description: "You can navigate to other categories here.",
        },
      },
    ],
  });
  driverObj.drive();
  localStorage.setItem("items-onboarding", "true");
}
export default function Home() {
  useEffect(() => {
    const listener = (ev: any) => {
      if (ev.data === "show-help") {
        onboard();
      }
    };
    window.addEventListener("message", listener);

    if (localStorage.getItem("items-onboarding")) {
      return;
    }
    onboard();
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  const [sunburstActive, setSunburstActive] = useState(false);
  const chart = useRef<HTMLDivElement>(null);
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
  const { accessibilityMode, setMode } = useStore();

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
    const articleIds = (catMap as any)[subcat];

    if (articleIds) {
      matchedArticles = articleIds.map((id: number) =>
        articles[id] ? { ...articles[id], id } : {}
      );
      matchedArticles.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }
  }

  const triggerRef = useRef<any>(null);

  const [activeId, setActiveArticle] = useState<string | null>(null);

  const breadcrumbList = getCatList(subcat!, categories);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl pb-4">{subcat ?? ""}</h1>
      <p className="pb-4 max-w-prose">{catDescMap[subcat ?? ""]}</p>
      <Breadcrumb className="pb-4">
        <BreadcrumbList>
          {breadcrumbList?.map((item, idx) => {
            return (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/items?subcat=${btoa(item)}`}>{item}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {idx < breadcrumbList.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

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
        <motion.div
          animate={{
            opacity: sunburstActive ? 1 : 0,
          }}
          className="absolute top-[50%] left-[50%] p-4 bg-black text-white z-10 h-12 flex items-center"
        >
          <motion.button onClick={handleClose} className="p-4 text-white">
            Close
          </motion.button>

          <div className="flex items-center space-x-2 bg-black">
            <Checkbox
              aria-label="list view checkbox"
              checked={accessibilityMode}
              onCheckedChange={setMode}
              id="terms"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              List View
            </label>
          </div>
        </motion.div>

        <div className={accessibilityMode ? " opacity-0" : "opacity-100"}>
          <div
            aria-hidden={true}
            ref={chart}
            className={`absolute bottom-[20%] right-[20%] ${
              sunburstActive ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{
              height: "800px",
              width: "800px",
            }}
          />
        </div>
        {accessibilityMode && (
          <div
            className={`absolute bottom-[20%] right-[20%] ${
              sunburstActive ? "pointer-events-auto" : "pointer-events-none"
            } text-black`}
            style={{
              height: "800px",
              width: "800px",
            }}
          >
            <CatList
              tree={categories}
              onClick={(e) => {
                e.stopPropagation();
                setSunburstActive(false);
              }}
            />
          </div>
        )}
      </motion.div>
      <Dialog>
        <DialogTrigger ref={triggerRef} className="hidden" />
        <div className="py-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
