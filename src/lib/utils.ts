/**
 * Light-weight classname merger utility.
 * Mimics clsx functionality without adding external dependencies.
 */
export function cn(...classes: (string | undefined | null | boolean | { [key: string]: any })[]): string {
  const result: string[] = [];

  classes.forEach((c) => {
    if (!c) return;
    if (typeof c === "string") {
      result.push(c);
    } else if (typeof c === "object") {
      Object.keys(c).forEach((key) => {
        if (c[key]) {
          result.push(key);
        }
      });
    }
  });

  return result.join(" ");
}

/**
 * Standardized Framer Motion transition variants for consistent premium page animations.
 */
export const fadeInUp = (delay = 0, duration = 0.6) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutQuint
    },
  },
});

export const fadeInDown = (delay = 0, duration = 0.6) => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export const fadeInLeft = (delay = 0, duration = 0.6) => ({
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export const fadeInRight = (delay = 0, duration = 0.6) => ({
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export const scaleUp = (delay = 0, duration = 0.6) => ({
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverScale = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};
