import type { Cocktail } from "@/types/cocktail";

export const cocktails: Cocktail[] = [
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    image:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    description: "A spirit-forward classic with bitters, sugar, and citrus oils.",
    ingredients: [
      { name: "Bourbon or rye whiskey", amount: "60 ml" },
      { name: "Demerara sugar", amount: "5 ml" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1" },
    ],
    instructions: [
      "Add sugar and bitters to a rocks glass and muddle with a splash of water.",
      "Add a large ice cube and pour in the whiskey.",
      "Stir until chilled and lightly diluted.",
      "Express the orange peel over the glass and drop it in.",
    ],
    glass: "Rocks",
    category: "Classic",
  },
  {
    id: "margarita",
    name: "Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    description: "Bright citrus, tequila, and a salty rim for a zesty sip.",
    ingredients: [
      { name: "Blanco tequila", amount: "60 ml" },
      { name: "Triple sec", amount: "30 ml" },
      { name: "Fresh lime juice", amount: "30 ml" },
      { name: "Agave syrup", amount: "7.5 ml" },
      { name: "Kosher salt", amount: "For the rim" },
    ],
    instructions: [
      "Rim a chilled coupe or rocks glass with salt.",
      "Shake tequila, triple sec, lime juice, and agave with ice.",
      "Strain into the prepared glass over fresh ice if desired.",
    ],
    glass: "Coupe or rocks",
    category: "Sour",
  },
  {
    id: "mojito",
    name: "Mojito",
    image:
      "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
    description: "Minty, bubbly, and bright with lime and rum.",
    ingredients: [
      { name: "White rum", amount: "60 ml" },
      { name: "Fresh lime juice", amount: "22 ml" },
      { name: "Simple syrup", amount: "15 ml" },
      { name: "Fresh mint leaves", amount: "8-10" },
      { name: "Club soda", amount: "Top" },
    ],
    instructions: [
      "Gently muddle mint with syrup and lime juice in a highball glass.",
      "Fill the glass with crushed ice and add rum.",
      "Top with club soda and stir gently.",
      "Garnish with a mint sprig and lime wheel.",
    ],
    glass: "Highball",
    category: "Highball",
  },
  {
    id: "negroni",
    name: "Negroni",
    image:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    description: "Bitter-sweet balance of gin, vermouth, and Campari.",
    ingredients: [
      { name: "Gin", amount: "30 ml" },
      { name: "Sweet vermouth", amount: "30 ml" },
      { name: "Campari", amount: "30 ml" },
      { name: "Orange peel", amount: "1" },
    ],
    instructions: [
      "Add gin, vermouth, and Campari to a mixing glass with ice.",
      "Stir until chilled and diluted.",
      "Strain over a large cube in a rocks glass.",
      "Express the orange peel over the drink and garnish.",
    ],
    glass: "Rocks",
    category: "Aperitif",
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    image:
      "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
    description: "Silky, caffeinated, and lightly sweet with a crema top.",
    ingredients: [
      { name: "Vodka", amount: "45 ml" },
      { name: "Coffee liqueur", amount: "30 ml" },
      { name: "Fresh espresso", amount: "30 ml" },
      { name: "Simple syrup", amount: "7.5 ml" },
    ],
    instructions: [
      "Add all ingredients to a shaker with ice.",
      "Shake hard until well chilled and foamy.",
      "Double strain into a chilled coupe.",
      "Garnish with coffee beans.",
    ],
    glass: "Coupe",
    category: "Martini",
  },
  {
    id: "paloma",
    name: "Paloma",
    image:
      "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
    description: "Tequila with grapefruit sparkle and a hint of salt.",
    ingredients: [
      { name: "Blanco tequila", amount: "60 ml" },
      { name: "Fresh lime juice", amount: "15 ml" },
      { name: "Grapefruit soda", amount: "Top" },
      { name: "Kosher salt", amount: "Pinch" },
    ],
    instructions: [
      "Add tequila, lime juice, and salt to an ice-filled highball.",
      "Top with grapefruit soda and give a gentle stir.",
      "Garnish with a grapefruit wedge.",
    ],
    glass: "Highball",
    category: "Highball",
  },
];

export const getCocktailById = (id: string) =>
  cocktails.find((cocktail) => cocktail.id === id);
