import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chart } from "@/components/chart";
import { useRouter } from "next/router";
import { driver } from "driver.js";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  useLayoutEffect(() => {
    if (localStorage.getItem("home-onboarding")) {
      return;
    }
    const driverObj = driver({
      overlayColor: "rgb(255 255 255 / 43%)",
      showProgress: true,
      steps: [
        {
          element: "#nav-menu",
          popover: {
            title: "This is a menu",
            description: "Click on it to go back to the home page.",
          },
        },
        {
          element: "#chart",
          popover: {
            side: "top",
            title: "This is a chart",
            description: "Hover on a section to get a tooltip, click on it.",
          },
        },
      ],
    });
    driverObj.drive();
    localStorage.setItem("home-onboarding", "true");
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
    <div className="">
      <h1 className="mx-auto w-fit text-4xl">Dim Sim Crumbs</h1>
      <h2 className="mx-auto w-fit text-3xl">
        Historical Australian Newspaper Articles on Dim Sims
      </h2>
      <main>
        <Chart className="my-3 mx-auto" />
        <div className="mx-auto max-w-prose">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            facilis, quas hic id assumenda perferendis aliquam numquam quos ipsa
            provident distinctio earum perspiciatis enim ex maxime veritatis
            praesentium ut. Tempora!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            facilis, quas hic id assumenda perferendis aliquam numquam quos ipsa
            provident distinctio earum perspiciatis enim ex maxime veritatis
            praesentium ut. Tempora!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            facilis, quas hic id assumenda perferendis aliquam numquam quos ipsa
            provident distinctio earum perspiciatis enim ex maxime veritatis
            praesentium ut. Tempora!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            facilis, quas hic id assumenda perferendis aliquam numquam quos ipsa
            provident distinctio earum perspiciatis enim ex maxime veritatis
            praesentium ut. Tempora!
          </p>
        </div>
      </main>
    </div>
  );
}
