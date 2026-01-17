export type IngredientItem = {
  name: string;
  value: string;
};

export type IngredientCategory = {
  id: string;
  title: string;
  items: IngredientItem[];
};

export const ingredientCategories: IngredientCategory[] = [
  {
    id: "spirits",
    title: "Spirits",
    items: [
      { name: "Gin", value: "gin" },
      { name: "Vodka", value: "vodka" },
      { name: "Rum", value: "rum" },
      { name: "Tequila", value: "tequila" },
      { name: "Mezcal", value: "mezcal" },
      { name: "Bourbon whiskey", value: "bourbon whiskey" },
      { name: "Rye whiskey", value: "rye whiskey" },
      { name: "Scotch whisky", value: "scotch whisky" },
      { name: "Cognac", value: "cognac" },
      { name: "Brandy", value: "brandy" },
    ],
  },
  {
    id: "liqueurs",
    title: "Liqueurs & Fortified",
    items: [
      { name: "Triple sec", value: "triple sec" },
      { name: "Campari", value: "campari" },
      { name: "Coffee liqueur", value: "coffee liqueur" },
      { name: "Sweet vermouth", value: "sweet vermouth" },
      { name: "Dry vermouth", value: "dry vermouth" },
      { name: "Aperol", value: "aperol" },
      { name: "Amaro", value: "amaro" },
      { name: "Elderflower liqueur", value: "elderflower liqueur" },
    ],
  },
  {
    id: "mixers",
    title: "Mixers",
    items: [
      { name: "Club soda", value: "club soda" },
      { name: "Tonic water", value: "tonic water" },
      { name: "Ginger beer", value: "ginger beer" },
      { name: "Ginger ale", value: "ginger ale" },
      { name: "Cola", value: "cola" },
      { name: "Grapefruit soda", value: "grapefruit soda" },
      { name: "Sparkling water", value: "sparkling water" },
    ],
  },
  {
    id: "juices",
    title: "Fruits & Juices",
    items: [
      { name: "Lime juice", value: "lime juice" },
      { name: "Lemon juice", value: "lemon juice" },
      { name: "Orange juice", value: "orange juice" },
      { name: "Grapefruit juice", value: "grapefruit juice" },
      { name: "Pineapple juice", value: "pineapple juice" },
      { name: "Cranberry juice", value: "cranberry juice" },
      { name: "Strawberries", value: "strawberries" },
      { name: "Mint leaves", value: "mint leaves" },
      { name: "Basil leaves", value: "basil leaves" },
    ],
  },
  {
    id: "syrups",
    title: "Syrups & Sweeteners",
    items: [
      { name: "Simple syrup", value: "simple syrup" },
      { name: "Agave syrup", value: "agave syrup" },
      { name: "Honey syrup", value: "honey syrup" },
      { name: "Maple syrup", value: "maple syrup" },
      { name: "Grenadine", value: "grenadine" },
      { name: "Demerara sugar", value: "demerara sugar" },
    ],
  },
  {
    id: "bitters",
    title: "Bitters",
    items: [
      { name: "Angostura bitters", value: "angostura bitters" },
      { name: "Orange bitters", value: "orange bitters" },
      { name: "Peychaud's bitters", value: "peychauds bitters" },
    ],
  },
  {
    id: "garnishes",
    title: "Garnishes & Other",
    items: [
      { name: "Orange peel", value: "orange peel" },
      { name: "Lemon peel", value: "lemon peel" },
      { name: "Lime wheel", value: "lime wheel" },
      { name: "Salt", value: "salt" },
      { name: "Sugar", value: "sugar" },
      { name: "Ice", value: "ice" },
      { name: "Coffee beans", value: "coffee beans" },
      { name: "Espresso", value: "espresso" },
    ],
  },
];

export const ingredientList = ingredientCategories.flatMap(
  (category) => category.items,
);

export const ingredientLookup = ingredientList.reduce<Record<string, string>>(
  (acc, item) => {
    acc[item.value] = item.name;
    return acc;
  },
  {},
);
