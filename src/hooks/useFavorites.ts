import { useState, useEffect } from "react";

const FAVORITES_KEY = "recipe-favorites";

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    // Load from localStorage on initialization
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Sync with localStorage whenever favoriteIds changes
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (recipeId: string) => {
    setFavoriteIds((prev) => {
      if (prev.includes(recipeId)) {
        return prev.filter((id) => id !== recipeId);
      } else {
        return [...prev, recipeId];
      }
    });
  };

  const isFavorite = (recipeId: string) => {
    return favoriteIds.includes(recipeId);
  };

  const addFavorite = (recipeId: string) => {
    if (!favoriteIds.includes(recipeId)) {
      setFavoriteIds((prev) => [...prev, recipeId]);
    }
  };

  const removeFavorite = (recipeId: string) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== recipeId));
  };

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
};

