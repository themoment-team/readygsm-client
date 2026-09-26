import { useEffect, useRef } from 'react';

export const APPLICATION_FORM_ID = 'application-form-section';

const SCROLL_DURATION = 500;
const SCROLL_OFFSET = 12;

interface UseApplicationFormScrollProps {
  selectedActivityId?: number;
  userId?: number;
}

const easeInOut = (progress: number) =>
  progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

export const useApplicationFormScroll = ({
  selectedActivityId,
  userId,
}: UseApplicationFormScrollProps) => {
  const scrollAnimationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!selectedActivityId || !userId) return;

    if (window.matchMedia('(min-width: 90rem)').matches) return;

    const target = document.getElementById(APPLICATION_FORM_ID);

    if (!target) return;

    if (scrollAnimationFrameRef.current !== null) {
      cancelAnimationFrame(scrollAnimationFrameRef.current);
    }

    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;

    const startY = window.scrollY;

    const targetY = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_OFFSET,
    );

    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);

      window.scrollTo(0, startY + distance * easeInOut(progress));

      if (progress < 1) {
        scrollAnimationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      scrollAnimationFrameRef.current = null;
    };

    scrollAnimationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (scrollAnimationFrameRef.current !== null) {
        cancelAnimationFrame(scrollAnimationFrameRef.current);
        scrollAnimationFrameRef.current = null;
      }
    };
  }, [selectedActivityId, userId]);
};
