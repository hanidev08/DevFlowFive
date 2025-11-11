"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

interface ProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children, ...props }: ProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
