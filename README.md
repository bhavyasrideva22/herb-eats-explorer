# Recipe Finder - Herb Eats Explorer

A modern, responsive recipe discovery application built with React, TypeScript, and Tailwind CSS. Explore thousands of delicious recipes, search by ingredient, cuisine, or dietary preference, and save your favorites.

## Features

- 🔍 **Advanced Search** - Search recipes by title, cuisine, or dietary preference
- ❤️ **Favorites** - Save your favorite recipes with persistent localStorage
- 🍕 **50+ Recipes** - Browse a diverse collection of recipes from around the world
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations
- 🏷️ **Categories** - Filter by cuisine type (Italian, Thai, Indian, Japanese, etc.)
- 🥗 **Dietary Filters** - Find vegetarian and vegan options
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## Technologies

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd herb-eats-explorer
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
herb-eats-explorer/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── ui/      # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── RecipeCard.tsx
│   │   └── SearchBar.tsx
│   ├── data/        # Mock data and recipes
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── lib/         # Utility functions
│   └── main.tsx     # Entry point
├── index.html
└── package.json
```

## Features Overview

### Search Functionality
- Search recipes by name, cuisine type, or dietary preference
- Real-time filtering as you type
- Advanced filters for cuisine and diet

### Favorites
- Click the heart icon on any recipe card to save favorites
- Favorites persist across page refreshes using localStorage
- View all favorites on the dedicated Favorites page

### Recipe Details
- View full recipe details including:
  - Ingredients list
  - Step-by-step instructions
  - Nutrition information
  - Cooking time and servings

## Deployment

### Build for Production

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy Options

You can deploy this application to various platforms:

- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist` folder or connect via Git
- **GitHub Pages** - Use GitHub Actions for automatic deployment
- **Any static host** - Upload the contents of `dist` folder

## Customization

### Adding Recipes

Edit `src/data/mockRecipes.ts` to add more recipes. Each recipe includes:
- Title
- Image URL
- Cook time
- Servings
- Cuisine type
- Optional dietary preference
- Rating

### Styling

The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.ts`.

### Components

The UI components are from shadcn/ui and can be customized. Components are located in `src/components/ui/`.

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Made with ❤️ for food lovers everywhere
