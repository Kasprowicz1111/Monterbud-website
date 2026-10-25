"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import {
  PROJECT_ALBUMS,
  PROJECT_CATEGORIES,
  PROJECT_PHOTOS,
  getAlbumPhotos,
  getCategoryLabel,
  getPhotoById,
  type ProjectAlbum,
  type ProjectCategoryId,
  type ProjectPhoto,
} from "@/lib/projects";

type FilterId = "all" | ProjectCategoryId;

type GalleryItem =
  | { kind: "album"; album: ProjectAlbum; cover: ProjectPhoto }
  | { kind: "photo"; photo: ProjectPhoto };

function buildItems(filter: FilterId): GalleryItem[] {
  const photos =
    filter === "all"
      ? PROJECT_PHOTOS
      : PROJECT_PHOTOS.filter((photo) => photo.category === filter);

  const used = new Set<string>();
  const items: GalleryItem[] = [];

  for (const album of PROJECT_ALBUMS) {
    if (filter !== "all" && album.category !== filter) {
      continue;
    }
    const cover = getPhotoById(album.coverId);
    if (!cover) {
      continue;
    }
    items.push({ kind: "album", album, cover });
    album.photoIds.forEach((id) => used.add(id));
  }

  for (const photo of photos) {
    if (used.has(photo.id)) {
      continue;
    }
    items.push({ kind: "photo", photo });
  }

  return items;
}

export function ProjectGallery() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [lightbox, setLightbox] = useState<{ photos: ProjectPhoto[]; index: number } | null>(
    null,
  );

  const items = useMemo(() => buildItems(filter), [filter]);
  const flatPhotos = useMemo(
    () =>
      items.flatMap((item) =>
        item.kind === "album" ? getAlbumPhotos(item.album) : [item.photo],
      ),
    [items],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategorie realizacji">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label="Wszystkie"
        />
        {PROJECT_CATEGORIES.map((category) => (
          <FilterButton
            key={category.id}
            active={filter === category.id}
            onClick={() => setFilter(category.id)}
            label={category.label}
          />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          if (item.kind === "album") {
            const photos = getAlbumPhotos(item.album);
            return (
              <GalleryCard
                key={item.album.id}
                photo={item.cover}
                category={item.album.category}
                caption={item.album.title}
                badge={`${photos.length} zdjęcia`}
                tall={item.cover.span === "tall"}
                wide={item.cover.span === "wide"}
                onOpen={() => setLightbox({ photos, index: 0 })}
              />
            );
          }

          return (
            <GalleryCard
              key={item.photo.id}
              photo={item.photo}
              category={item.photo.category}
              tall={item.photo.span === "tall"}
              wide={item.photo.span === "wide"}
              onOpen={() => {
                const index = flatPhotos.findIndex((photo) => photo.id === item.photo.id);
                setLightbox({ photos: flatPhotos, index: Math.max(index, 0) });
              }}
            />
          );
        })}
      </div>

      {lightbox ? (
        <ProjectLightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onChange={(index) => setLightbox((current) => (current ? { ...current, index } : current))}
        />
      ) : null}
    </>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 px-4 text-[0.65rem] tracking-[0.18em] uppercase transition-colors ${
        active
          ? "bg-accent text-background"
          : "border border-white/12 text-white/70 hover:border-accent/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function GalleryCard({
  photo,
  category,
  caption,
  badge,
  tall,
  wide,
  onOpen,
}: {
  photo: ProjectPhoto;
  category: ProjectCategoryId;
  caption?: string;
  badge?: string;
  tall?: boolean;
  wide?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden border border-white/10 bg-surface text-left ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <span className="sr-only">
        Otwórz zdjęcie: {caption ?? photo.alt}
      </span>
      <div className={`relative ${tall ? "h-80 md:h-[28rem]" : "h-64 md:h-[22rem]"}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div>
            <p className="text-[0.62rem] tracking-[0.18em] text-accent uppercase">
              {getCategoryLabel(category)}
            </p>
            {caption ? (
              <p className="mt-1 text-sm text-white/90">{caption}</p>
            ) : null}
            {badge ? <p className="mt-1 text-[0.65rem] text-muted">{badge}</p> : null}
          </div>
          <Expand size={16} className="shrink-0 text-white/80" />
        </div>
      </div>
    </button>
  );
}
