import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chart } from "@/components/chart";
import { useRouter } from "next/router";
import { driver } from "driver.js";
import { useStore } from "@/components/store";
import { CatList } from "@/components/CatList";
import catTree from "../structured_web_data_input.json";

function onboard() {
  const driverObj = driver({
    popoverClass: "driverjs-theme",
    overlayColor: "rgb(255 255 255 / 43%)",
    showProgress: true,
    steps: [
      {
        element: "#site-title",
        popover: {
          side: "top",
          title: "Welcome to Dim Sim Crumbs",
          description:
            "Explore over 700 historical Australian newspaper articles about dim sims. <br>Please be advised that some articles may contain racist or offensive content.",
        },
      },
      {
        element: "#chart",
        popover: {
          side: "top",
          title: "Explore article categories",
          description:
            "You can explore articles based on hierarchical categories.",
        },
      },
      {
        element: "#chart",
        popover: {
          title: "Click to Expand Categories",
          description:
            "Click on any category to focus on it and its subcategories.",
        },
      },
      {
        element: "#chart",
        popover: {
          title: "Find articles by category",
          description: `Hover over any category for a tooltip with a "View Articles" button. <br>Click "View Articles" to find articles of that category.`,
        },
      },
    ],
  });
  driverObj.drive();
  localStorage.setItem("home-onboarding", "true");
}
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { accessibilityMode } = useStore();
  useEffect(() => {
    const listener = (ev: any) => {
      if (ev.data === "show-help") {
        onboard();
      }
    };
    window.addEventListener("message", listener);

    if (localStorage.getItem("home-onboarding")) {
      return;
    }
    onboard();
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);
  const [sunburstActive, setSunburstActive] = useState(false);
  const chart = useRef<HTMLDivElement>(null);
  console.log({ sunburstActive });
  const { push } = useRouter();
  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (e.data.name === "navigate") {
        push({
          pathname: "/items",
          query: { subcat: e.data.subcat },
        });
      }
    };
    window.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);
  return (
    <div className="py-4">
      <h1 id="site-title" className="mx-auto w-fit text-4xl">
        Dim Sim Crumbs
      </h1>
      <h2 className="mx-auto w-fit text-2xl">
        Historical Australian Newspaper Articles on Dim Sims
      </h2>
      <main>
        <div className="my-4 mx-auto max-w-prose">
          <p className="py-2">
            Welcome to the Dim Sim Crumbs, an interactive library showcasing
            over 700 historical Australian newspaper articles about the iconic
            Australian snack, dim sim. As a symbol of Australia's food
            multiculturalism, the dim sim's journey from Chinese cuisine to
            becoming a part of Australian food scene is a story worth exploring.
            This interactive library offers intuitive navigation with
            hierarchical categories, allowing you to explore the cultural
            history of dim sims in Australian society.
          </p>{" "}
          <p className="py-2">This site is best viewed on desktop.</p>
          {/* <button className="underline py-4" onClick={onboard}>
            Show user guide
          </button> */}
        </div>
        <h2 className="mx-auto w-fit text-2xl">Find articles by category</h2>
        {accessibilityMode ? (
          <div className="my-2 flex justify-center">
            <CatList tree={catTree} />
          </div>
        ) : (
          <Chart className="my-2 mx-auto" />
        )}
      </main>
    </div>
  );
}
