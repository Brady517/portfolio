// tailwind.config.ts
import type { Config } from 'tailwindcss';

type DaisyUIConfig = Config & {
  daisyui?: {
    themes?: string[];
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    logs?: boolean;
    rtl?: boolean;
    prefix?: string;
    themeRoot?: string;
  };
};

const config: DaisyUIConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themeRoot: ":root",
  },
};
export default config;