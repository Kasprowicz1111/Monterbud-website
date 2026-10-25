export type LoadingTimelineOptions = {
  root: HTMLElement;
  onComplete?: () => void;
};

/**
 * Architecture placeholder for the intro loading screen.
 * The production GSAP timeline will be implemented in a later stage.
 */
export function createLoadingTimeline(
  options: LoadingTimelineOptions,
): GSAPTimeline | null {
  void options;
  return null;
}
