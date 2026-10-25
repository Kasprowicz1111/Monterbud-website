"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { LoadingScreen } from "@/components/loading/LoadingScreen";

type LoadingContextValue = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

export function useLoadingScreen() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoadingScreen must be used within LoadingProvider");
  }

  return context;
}

type LoadingProviderProps = {
  children: ReactNode;
};

/**
 * Holds loading-screen state for the future intro animation.
 * Stage 1 keeps the overlay inactive so the site is immediately usable.
 */
export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const value = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading],
  );

  return (
    <LoadingContext.Provider value={value}>
      <LoadingScreen active={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
}
