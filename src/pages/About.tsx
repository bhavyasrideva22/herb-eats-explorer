import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Search, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-6 bg-primary/10 rounded-full mb-6">
              <ChefHat className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Recipe Finder
            </h1>
            <p className="text-xl text-muted-foreground">
              Your culinary companion for discovering delicious recipes
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-custom">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Recipe Finder is your go-to platform for discovering, exploring, and saving 
                thousands of delicious recipes from around the world. Whether you're a seasoned 
                chef or just starting your culinary journey, we make it easy to find the perfect 
                dish for any occasion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-custom hover-lift">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
                <p className="text-muted-foreground">
                  Find recipes by ingredient, cuisine type, dietary preferences, or cooking time.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-custom hover-lift">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
                <p className="text-muted-foreground">
                  Keep track of your favorite recipes and build your personal cookbook.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-custom hover-lift">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Random Discovery</h3>
                <p className="text-muted-foreground">
                  Feeling adventurous? Let us surprise you with a random recipe suggestion.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-custom hover-lift">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Detailed Instructions</h3>
                <p className="text-muted-foreground">
                  Step-by-step instructions with nutrition information for every recipe.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Start Your Culinary Journey</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of food lovers discovering new recipes every day
              </p>
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-accent">
                  Explore Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
