import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { mockRecipes } from "@/data/mockRecipes";
import { Sparkles, Flame, Leaf, Pizza } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [featuredRecipes] = useState(mockRecipes.slice(0, 6));

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleRandomRecipe = () => {
    const randomRecipe = mockRecipes[Math.floor(Math.random() * mockRecipes.length)];
    navigate(`/recipe/${randomRecipe.id}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Discover Your Next
              <br />
              Favorite Recipe
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search thousands of delicious recipes by ingredient, cuisine, or dietary preference
            </p>
            
            <SearchBar onSearch={handleSearch} />
            
            <Button
              onClick={handleRandomRecipe}
              variant="outline"
              size="lg"
              className="mt-6 rounded-full border-2 hover:border-primary hover:text-primary transition-all"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Surprise Me!
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <button className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl hover-lift shadow-custom group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:shadow-accent transition-all">
                <Pizza className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-semibold">Italian</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl hover-lift shadow-custom group">
              <div className="bg-secondary/10 p-4 rounded-full group-hover:bg-secondary group-hover:shadow-accent transition-all">
                <Flame className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <span className="font-semibold">Spicy</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl hover-lift shadow-custom group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:shadow-accent transition-all">
                <Leaf className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-semibold">Vegan</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl hover-lift shadow-custom group">
              <div className="bg-secondary/10 p-4 rounded-full group-hover:bg-secondary group-hover:shadow-accent transition-all">
                <Sparkles className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <span className="font-semibold">Desserts</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Featured Recipes</h2>
            <p className="text-muted-foreground">Handpicked by our culinary experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
