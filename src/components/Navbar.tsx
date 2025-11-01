import { Link } from "react-router-dom";
import { ChefHat, Heart, Home, Info } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-lg p-2 group-hover:shadow-accent transition-all duration-300">
              <ChefHat className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Recipe Finder
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
            <Link 
              to="/favorites" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">Favorites</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
