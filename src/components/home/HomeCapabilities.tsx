"use client";

import Image from "next/image";
import { useState } from "react";
import { CAPABILITIES } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

const VISUALS: Record<string, { src: string; alt: string } | null> = {
  projekt: null,
  produkcja: {
    src: "/realizacje/zbiorniki-logo.png",
    alt: "Wykonane zbiorniki z oznaczeniem MONTERBUD",
  },
  montaz: {
    src: "/realizacje/montaz.png",
    alt: "Montaż silosów na placu budowy",
  },
  serwis: null,
};

export function HomeCapabilities() {
  const [openKey, setOpenKey] = useState<string | null>("produkcja");

  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">Działalność</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[0.1em] text-white md:text-5xl">
            PROJEKT • PRODUKCJA • MONTAŻ • SERWIS
          </h2>
          <div className="section-rule mt-6 w-20" />
        </Reveal>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {CAPABILITIES.map((item, index) => {
            const open = openKey === item.key;
            const visual = VISUALS[item.key];
            const panelId = `capability-${item.key}`;

            return (
              <article key={item.key} className="grid gap-6 py-8 lg:grid-cols-[7.5rem_1fr_18rem] lg:items-start">
                <p className="font-display text-4xl tracking-[0.08em] text-accent/80">
                  0{index + 1}
                </p>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-baseline justify-between gap-4 text-left"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(open ? null : item.key)}
                  >
                    <h3 className="font-display text-2xl tracking-[0.16em] text-white uppercase">
                      {item.title}
                    </h3>
                    <span className="text-accent" aria-hidden="true">
                      {open ? "—" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    hidden={!open}
                    className="mt-4 max-w-xl text-sm leading-relaxed text-muted"
                  >
                    {item.text}
                  </div>
                </div>
                {visual ? (
                  <div className="relative hidden h-36 overflow-hidden border border-white/10 lg:block">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="hidden h-36 border border-dashed border-white/8 lg:block" aria-hidden="true" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
