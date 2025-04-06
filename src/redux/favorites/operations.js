export const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};
