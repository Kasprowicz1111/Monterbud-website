import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LoadingProvider } from "@/components/loading/LoadingProvider";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <LoadingProvider>
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
      >
        Przejdź do treści
      </a>
      <Navbar />
      <main id="tresc" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </LoadingProvider>
  );
}
