export const scrollToElement = (selector: string) => {
  const el = document.querySelector(selector);
  el?.scrollIntoView({ behavior: 'smooth' });
};
