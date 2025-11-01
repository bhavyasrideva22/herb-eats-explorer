import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Favorites = () => {
  // TODO: Implement localStorage for favorites
  const hasFavorites = false;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Favorite Recipes</h1>
        
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
            {/* Favorite recipes will be displayed here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
