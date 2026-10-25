"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCadVisual } from "@/components/home/ProjectCadVisual";
import { CAPABILITIES } from "@/lib/site";

type Visual =
  | { kind: "cad" }
  | { kind: "photo"; src: string; alt: string; position: string };

const VISUALS: Record<string, Visual> = {
  projekt: { kind: "cad" },
  produkcja: {
    kind: "photo",
    src: "/realizacje/zbiorniki-logo.png",
    alt: "Wykonane zbiorniki z oznaczeniem MONTERBUD",
    position: "center 82%",
  },
  montaz: {
    kind: "photo",
    src: "/realizacje/silosy-hala.png",
    alt: "Montaż silosów przy hali",
    position: "center 45%",
  },
  serwis: {
    kind: "photo",
    src: "/realizacje/img_9496.jpg",
    alt: "Pojazd serwisowy MONTERBUD przy instalacji",
    position: "center 60%",
  },
};

export function HomeCapabilities() {
  const [openKey, setOpenKey] = useState<string | null>("produkcja");

  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <p className="text-[0.68rem] tracking-[0.32em] text-accent uppercase">Działalność</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[0.1em] text-white md:text-5xl">
          PROJEKT • PRODUKCJA • MONTAŻ • SERWIS
        </h2>
        <div className="section-rule mt-6 w-20" />

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {CAPABILITIES.map((item, index) => {
            const open = openKey === item.key;
            const visual = VISUALS[item.key];
            const panelId = `capability-${item.key}`;

            return (
              <article
                key={item.key}
                className="grid items-center gap-6 py-8 lg:grid-cols-[6.5rem_minmax(0,1fr)_20rem]"
              >
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
                      {open ? "−" : "+"}
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
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-graphite">
                  {visual.kind === "cad" ? (
                    <ProjectCadVisual />
                  ) : (
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      style={{ objectPosition: visual.position }}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
