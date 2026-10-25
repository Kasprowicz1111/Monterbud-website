/**
 * GSAP bootstrap. ScrollTrigger is registered only in the browser.
 */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export async function getGsap() {
  const gsap = (await import("gsap")).default;
  return gsap;
}
