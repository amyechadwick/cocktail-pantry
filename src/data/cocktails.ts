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
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    image:
      "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    description: "Zingy ginger beer with vodka and fresh lime.",
    ingredients: [
      { name: "Vodka", amount: "60 ml" },
      { name: "Fresh lime juice", amount: "15 ml" },
      { name: "Ginger beer", amount: "Top" },
      { name: "Lime wheel", amount: "1" },
    ],
    instructions: [
      "Add vodka and lime juice to a copper mug or highball with ice.",
      "Top with ginger beer and stir lightly.",
      "Garnish with a lime wheel.",
    ],
    glass: "Mule mug",
    category: "Highball",
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    image:
      "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    description: "Tart lemon and sweet syrup lift rich whiskey.",
    ingredients: [
      { name: "Bourbon whiskey", amount: "60 ml" },
      { name: "Fresh lemon juice", amount: "30 ml" },
      { name: "Simple syrup", amount: "15 ml" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Lemon peel", amount: "1" },
    ],
    instructions: [
      "Shake whiskey, lemon juice, syrup, and bitters with ice.",
      "Strain into a rocks glass over fresh ice.",
      "Express the lemon peel and garnish.",
    ],
    glass: "Rocks",
    category: "Sour",
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    image:
      "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    description: "A clean, crisp rum sour with bright lime.",
    ingredients: [
      { name: "White rum", amount: "60 ml" },
      { name: "Fresh lime juice", amount: "25 ml" },
      { name: "Simple syrup", amount: "15 ml" },
    ],
    instructions: [
      "Shake rum, lime juice, and syrup with ice.",
      "Double strain into a chilled coupe.",
    ],
    glass: "Coupe",
    category: "Sour",
  },
  {
    id: "tom-collins",
    name: "Tom Collins",
    image:
      "https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg",
    description: "Effervescent gin sour topped with soda.",
    ingredients: [
      { name: "Gin", amount: "60 ml" },
      { name: "Fresh lemon juice", amount: "30 ml" },
      { name: "Simple syrup", amount: "15 ml" },
      { name: "Club soda", amount: "Top" },
      { name: "Lemon peel", amount: "1" },
    ],
    instructions: [
      "Shake gin, lemon juice, and syrup with ice.",
      "Strain into an ice-filled highball and top with soda.",
      "Garnish with a lemon peel.",
    ],
    glass: "Highball",
    category: "Highball",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    image:
      "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    description: "Citrusy, lightly sweet, and cranberry-bright.",
    ingredients: [
      { name: "Vodka", amount: "45 ml" },
      { name: "Triple sec", amount: "15 ml" },
      { name: "Cranberry juice", amount: "30 ml" },
      { name: "Fresh lime juice", amount: "15 ml" },
      { name: "Orange peel", amount: "1" },
    ],
    instructions: [
      "Shake all ingredients with ice until chilled.",
      "Double strain into a chilled coupe.",
      "Express the orange peel and garnish.",
    ],
    glass: "Coupe",
    category: "Martini",
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    image:
      "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
    description: "A whiskey-forward cousin to the Negroni.",
    ingredients: [
      { name: "Bourbon whiskey", amount: "30 ml" },
      { name: "Sweet vermouth", amount: "30 ml" },
      { name: "Campari", amount: "30 ml" },
      { name: "Orange peel", amount: "1" },
    ],
    instructions: [
      "Stir bourbon, vermouth, and Campari with ice until chilled.",
      "Strain over a large cube in a rocks glass.",
      "Express the orange peel and garnish.",
    ],
    glass: "Rocks",
    category: "Aperitif",
  },
];

export const getCocktailById = (id: string) =>
  cocktails.find((cocktail) => cocktail.id === id);
