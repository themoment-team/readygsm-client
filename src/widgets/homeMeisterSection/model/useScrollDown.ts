const useScrollDown = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return { handleScrollDown };
};

export default useScrollDown;
