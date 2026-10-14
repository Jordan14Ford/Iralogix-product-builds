import type { Preview } from "@storybook/nextjs-vite";
import { Inter, Public_Sans } from "next/font/google";
import "../src/app/globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-family",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${publicSans.variable} ${inter.variable} min-h-screen bg-white font-sans text-[#111827] antialiased`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
