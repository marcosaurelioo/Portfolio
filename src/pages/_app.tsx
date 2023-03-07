import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import localFont from "@next/font/local";
import "@/styles/globals.css";

const kaiseiRegular = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  variable: "--font-kaisei-regular",
  display: "swap",
  weight: "700",
});

const kaiseiSemi = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-400-normal.woff2",
  variable: "--font-kaisei-semi",
  display: "swap",
  weight: "400",
});

const kaiseiBold = localFont({
  src: "../../public/fonts/kaisei-tokumin-bold.ttf",
  variable: "--font-kaisei-bold",
  display: "swap",
  weight: "bold",
});

export default function App({ Component, pageProps }: AppProps) {
  const { route, push } = useRouter();

  return (
    <main style={kaiseiSemi.style && kaiseiRegular.style && kaiseiBold.style}>
      <aside>
        <div>
          <h1>M</h1>
        </div>

        <div className="aside-buttons-box">
          <button
            className={route == "/" ? "active-aside-button" : ""}
            onClick={() => push("/")}
          >
            Home
          </button>
          <button
            className={route == "/about" ? "active-aside-button" : ""}
            onClick={() => push("/about")}
          >
            About
          </button>
          <button
            className={route == "/projects" ? "active-aside-button" : ""}
            onClick={() => push("/projects")}
          >
            Projects
          </button>
        </div>
      </aside>

      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
