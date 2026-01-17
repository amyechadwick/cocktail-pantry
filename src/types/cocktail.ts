export type CocktailIngredient = {
  name: string;
  amount: string;
};

export type Cocktail = {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: CocktailIngredient[];
  instructions: string[];
  glass: string;
  category: string;
};
