import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Heart, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockRecipes } from "@/data/mockRecipes";
import { recipeDetails } from "@/data/mockRecipes";
import { useFavorites } from "@/hooks/useFavorites";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => r.id === id);
  const details = recipeDetails[id || "1"] || recipeDetails["1"];
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (id) {
      toggleFavorite(id);
    }
  };

  const favoriteStatus = id ? isFavorite(id) : false;

  if (!recipe) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
          <Link to="/">
            <Button className="mt-4">Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </Link>

        {/* Recipe Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                {recipe.cuisine}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{recipe.title}</h1>
            
            <div className="flex items-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="font-semibold text-foreground">{recipe.rating}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={handleToggleFavorite}
                className={`flex-1 shadow-accent ${
                  favoriteStatus 
                    ? "bg-secondary hover:bg-secondary/90" 
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                <Heart className={`mr-2 h-5 w-5 ${favoriteStatus ? "fill-current" : ""}`} />
                {favoriteStatus ? "Saved" : "Save Recipe"}
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <Card className="md:col-span-1 shadow-custom">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">Ingredients</h2>
              <ul className="space-y-3">
                {details.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-custom">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">Instructions</h2>
                <ol className="space-y-6">
                  {details.instructions.map((instruction: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-foreground/90">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card className="shadow-custom">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">Nutrition Facts</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">{details.nutrition.calories}</p>
                    <p className="text-sm text-muted-foreground">Calories</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">{details.nutrition.protein}</p>
                    <p className="text-sm text-muted-foreground">Protein</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">{details.nutrition.carbs}</p>
                    <p className="text-sm text-muted-foreground">Carbs</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">{details.nutrition.fat}</p>
                    <p className="text-sm text-muted-foreground">Fat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
