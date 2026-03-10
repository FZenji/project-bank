import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://project-bank.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Project Bank — Interactive Simulations, Tools & Games",
  description:
    "A curated collection of interactive web experiences: physics simulations, music tools, type racing, memory games, and educational apps. Built by Henry Tolenaar.",
  keywords: [
    "interactive projects",
    "web simulations",
    "physics simulator",
    "type racing",
    "memory game",
    "periodic table",
    "pitch detection",
    "game of life",
    "three body problem",
    "portfolio",
  ],
  authors: [{ name: "Henry Tolenaar", url: "https://github.com/henrytolenaar" }],
  creator: "Henry Tolenaar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Project Bank",
    title: "Project Bank — Interactive Simulations, Tools & Games",
    description:
      "A curated collection of interactive web experiences: physics simulations, music tools, type racing, memory games, and educational apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Bank — Interactive Simulations, Tools & Games",
    description:
      "A curated collection of interactive web experiences built by Henry Tolenaar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Project Bank",
        url: siteUrl,
        description:
          "A curated collection of interactive web experiences built by Henry Tolenaar.",
        author: {
          "@type": "Person",
          name: "Henry Tolenaar",
          url: "https://github.com/henrytolenaar",
        },
      },
      {
        "@type": "CollectionPage",
        name: "Project Bank",
        url: siteUrl,
        description:
          "A curated collection of interactive simulations, tools, games, and educational web experiences.",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: 10,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Number Learn Studio",
              url: "https://number-learn.xyz/",
              description:
                "Master Pi, Euler's number, and more with proven mnemonic techniques.",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Elements — Interactive Periodic Table",
              url: "https://elements-flax.vercel.app/",
              description:
                "Explore all 118 elements with interactive 3D atom visualizations.",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Three-Body Problem Simulator",
              url: "https://three-body-problem-ivory.vercel.app/",
              description:
                "Interactive 2D/3D gravitational simulation of the three-body problem.",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Pitch Studio",
              url: "https://pitch-tune-studio.vercel.app/",
              description:
                "Train your vocal pitch with real-time detection and MIDI practice mode.",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Typr — Multiplayer Type Racing",
              url: "https://typr-beta.vercel.app/",
              description:
                "Challenge your friends to a real-time type race.",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Game of Life",
              url: "https://game-of-life-alpha-liart.vercel.app/",
              description:
                "Conway's cellular automaton with interactive cell painting and presets.",
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Sequence Memory Game",
              url: "https://sequence-memory.vercel.app/",
              description:
                "Test and train your working memory with increasingly complex sequences.",
            },
            {
              "@type": "ListItem",
              position: 8,
              name: "Rain Simulation",
              url: "https://rain-sim-nu.vercel.app/",
              description:
                "Interactive physics simulation of rain hitting a liquid surface.",
            },
            {
              "@type": "ListItem",
              position: 9,
              name: "Meteor Impact Simulator",
              url: "https://meteor-sim.vercel.app/",
              description:
                "Interactive 2D & 3D meteor impact simulation with real physics.",
            },
            {
              "@type": "ListItem",
              position: 10,
              name: "Emoji Explorer",
              url: "https://emoji-explorer-gray.vercel.app/",
              description:
                "Search, browse, and copy emojis with ease.",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
