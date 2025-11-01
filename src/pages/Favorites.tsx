import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { mockRecipes } from "@/data/mockRecipes";
import { useMemo } from "react";

const Favorites = () => {
  const { favoriteIds } = useFavorites();

  const favoriteRecipes = useMemo(() => {
    return mockRecipes.filter((recipe) => favoriteIds.includes(recipe.id));
  }, [favoriteIds]);

  const hasFavorites = favoriteRecipes.length > 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">My Favorite Recipes</h1>
          {hasFavorites && (
            <p className="text-muted-foreground">
              {favoriteRecipes.length} {favoriteRecipes.length === 1 ? "recipe" : "recipes"}
            </p>
          )}
        </div>
        
        {!hasFavorites ? (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-primary/10 rounded-full mb-6">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">No favorites yet!</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start exploring recipes and click the heart icon to save your favorites here.
            </p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 shadow-accent">
                Explore Recipes
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
