import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { mockRecipes } from "@/data/mockRecipes";
import { Filter, X } from "lucide-react";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);

  useEffect(() => {
    let results = mockRecipes;

    if (query) {
      results = results.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCuisine) {
      results = results.filter((recipe) => recipe.cuisine === selectedCuisine);
    }

    if (selectedDiet) {
      results = results.filter((recipe) => recipe.diet === selectedDiet);
    }

    setFilteredRecipes(results);
  }, [query, selectedCuisine, selectedDiet]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  const cuisines = Array.from(new Set(mockRecipes.map((r) => r.cuisine)));
  const diets = Array.from(new Set(mockRecipes.map((r) => r.diet).filter(Boolean)));

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} placeholder={query || "Search recipes..."} />
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">
            {query ? (
              <>
                Search Results for "<span className="text-primary">{query}</span>"
              </>
            ) : (
              "All Recipes"
            )}
          </h1>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <div className="bg-card rounded-2xl p-6 mb-8 shadow-custom">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedCuisine(null);
                  setSelectedDiet(null);
                }}
              >
                Clear All
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-3 text-muted-foreground">Cuisine</p>
                <div className="flex flex-wrap gap-2">
                  {cuisines.map((cuisine) => (
                    <Button
                      key={cuisine}
                      variant={selectedCuisine === cuisine ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine)
                      }
                      className="rounded-full"
                    >
                      {cuisine}
                      {selectedCuisine === cuisine && (
                        <X className="ml-1 h-3 w-3" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-3 text-muted-foreground">Dietary</p>
                <div className="flex flex-wrap gap-2">
                  {diets.map((diet) => (
                    <Button
                      key={diet}
                      variant={selectedDiet === diet ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        setSelectedDiet(selectedDiet === diet ? null : diet)
                      }
                      className="rounded-full"
                    >
                      {diet}
                      {selectedDiet === diet && <X className="ml-1 h-3 w-3" />}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-muted-foreground mb-6">
          Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""}
        </p>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              No recipes found. Try a different search!
            </p>
            <Link to="/">
              <Button>Go Back Home</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
