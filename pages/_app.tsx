import "driver.js/dist/driver.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HelpButton } from "@/components/help-button";
import { Checkbox } from "@/components/ui/checkbox";
import { useStore } from "@/components/store";

export default function App({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter();
  const path = useMemo(() => {
    if (pathname.includes("items")) return "items";
    if (pathname.includes("about")) return "about";
    return "home";
  }, [pathname]);
  const [route, setRoute] = useState(path);

  return (
    <>
      <div className={`dark`}>
        <Head>
          <title>Dim Sim Crumbs</title>
        </Head>

        <div className="pt-12 max-w-7xl mx-auto">
          <HelpButton className="absolute top-4 right-24" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                id="nav-menu"
                className="absolute top-4 right-4 hover:underline"
              >
                Menu
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem value="home" onClick={() => push("/")}>
                Home
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="items"
                onClick={() => push("/items?subcat=Rm9vZA%3D%3D")}
              >
                Articles
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="about"
                onClick={() => push("/about")}
              >
                About
              </DropdownMenuRadioItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
