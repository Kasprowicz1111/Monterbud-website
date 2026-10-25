/**
 * GSAP bootstrap for future client-side animations.
 * Plugins will be registered here once motion work begins.
 */
export async function getGsap() {
  const gsap = (await import("gsap")).default;
  return gsap;
}
