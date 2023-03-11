export const animateContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 2,
    },
  },
}

export const animateContainerItems = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
}

export const animationZoom = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
}

export const animateUp = {
  hidden: { opacity: 0, y: '8%' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeInOut' },
  },
}

export const animateSlideLeftToRight = {
  hidden: { opacity: 0, x: '-50%' },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.7, ease: 'easeOut' },
  },
}

export const animateSlideRightToLeft = {
  hidden: { opacity: 0, x: '50%' },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.7, ease: 'easeOut' },
  },
}
