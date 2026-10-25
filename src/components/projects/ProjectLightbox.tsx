"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getCategoryLabel, type ProjectPhoto } from "@/lib/projects";

type ProjectLightboxProps = {
  photos: ProjectPhoto[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ProjectLightbox({ photos, index, onClose, onChange }: ProjectLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const photo = photos[index];

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onChange((index + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        onChange((index - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onChange, onClose, photos.length]);

  if (!photo || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd realizacji"
      className="fixed inset-0 z-[120] flex flex-col bg-background"
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        if (start == null || end == null) {
          return;
        }
        const delta = end - start;
        if (delta > 50) {
          onChange((index - 1 + photos.length) % photos.length);
        } else if (delta < -50) {
          onChange((index + 1) % photos.length);
        }
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          {getCategoryLabel(photo.category)} · {index + 1} / {photos.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent/70 hover:text-accent"
          aria-label="Zamknij podgląd"
        >
          <X size={22} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-16">
        {photos.length > 1 ? (
          <button
            type="button"
            className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center text-white md:inline-flex hover:text-accent"
            aria-label="Poprzednie zdjęcie"
            onClick={() => onChange((index - 1 + photos.length) % photos.length)}
          >
            <ChevronLeft size={28} />
          </button>
        ) : null}

        <div className="relative h-[min(78dvh,52rem)] w-full max-w-6xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {photos.length > 1 ? (
          <button
            type="button"
            className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center text-white md:inline-flex hover:text-accent"
            aria-label="Następne zdjęcie"
            onClick={() => onChange((index + 1) % photos.length)}
          >
            <ChevronRight size={28} />
          </button>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
