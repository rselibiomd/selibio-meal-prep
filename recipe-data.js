// Quantities for the selected practical recipe variants. Water and optional garnishes are excluded.
const mealData = {
  "dinners": {
    "lemon-chicken": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "yogurt",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "olive-oil",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "lemon-juice",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "garlic",
          "amount": 3.0,
          "unit": "clove"
        },
        {
          "id": "oregano",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "paprika",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "black-pepper",
          "amount": 0.25,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "ginger-tofu": {
      "base": 2,
      "main": [
        {
          "id": "tofu",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "soy-sauce",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "sesame-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "rice-vinegar",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "ginger",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "honey",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "neutral-oil",
          "amount": 1.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "bell-pepper",
          "amount": 1.0,
          "unit": "each"
        }
      ]
    },
    "miso-salmon": {
      "base": 2,
      "main": [
        {
          "id": "salmon",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "miso",
          "amount": 1.5,
          "unit": "tbsp"
        },
        {
          "id": "mirin",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "soy-sauce",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "honey",
          "amount": 1.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "korean-chicken": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 500.0,
          "unit": "g"
        },
        {
          "id": "soy-sauce",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "oyster-sauce",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "sesame-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "ginger",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "honey",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "rice-vinegar",
          "amount": 1.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "cucumber",
          "amount": 0.5,
          "unit": "each"
        }
      ]
    },
    "adobo": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 500.0,
          "unit": "g"
        },
        {
          "id": "soy-sauce",
          "amount": 0.25,
          "unit": "cup"
        },
        {
          "id": "cider-vinegar",
          "amount": 0.25,
          "unit": "cup"
        },
        {
          "id": "garlic",
          "amount": 5.0,
          "unit": "clove"
        },
        {
          "id": "bay-leaf",
          "amount": 2.0,
          "unit": "each"
        },
        {
          "id": "black-pepper",
          "amount": 0.5,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "turkey-meatballs": {
      "base": 2,
      "main": [
        {
          "id": "turkey",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "egg",
          "amount": 0.25,
          "unit": "each"
        },
        {
          "id": "breadcrumbs",
          "amount": 0.0833333333,
          "unit": "cup"
        },
        {
          "id": "garlic",
          "amount": 0.75,
          "unit": "clove"
        },
        {
          "id": "parsley",
          "amount": 0.5,
          "unit": "tbsp"
        },
        {
          "id": "oregano",
          "amount": 0.25,
          "unit": "tsp"
        },
        {
          "id": "black-pepper",
          "amount": 0.125,
          "unit": "tsp"
        },
        {
          "id": "salt",
          "amount": 0.125,
          "unit": "tsp"
        },
        {
          "id": "passata",
          "amount": 125.0,
          "unit": "ml"
        },
        {
          "id": "onion",
          "amount": 0.25,
          "unit": "each"
        },
        {
          "id": "olive-oil",
          "amount": 0.25,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "turkey-skillet": {
      "base": 2,
      "main": [],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "thai-tofu": {
      "base": 2,
      "main": [
        {
          "id": "tofu",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "neutral-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "onion",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "ginger",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "green-curry-paste",
          "amount": 3.0,
          "unit": "tbsp"
        },
        {
          "id": "lemongrass",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "carrot",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "cauliflower",
          "amount": 300.0,
          "unit": "g"
        },
        {
          "id": "zucchini",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "coconut-milk",
          "amount": 400.0,
          "unit": "ml"
        },
        {
          "id": "lime",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "basil",
          "amount": 1.0,
          "unit": "tbsp"
        }
      ],
      "side": []
    },
    "teriyaki-tofu": {
      "base": 2,
      "main": [
        {
          "id": "tofu",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "cornstarch",
          "amount": 3.0,
          "unit": "tbsp"
        },
        {
          "id": "neutral-oil",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "mirin",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "soy-sauce",
          "amount": 2.0,
          "unit": "tbsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "scallion",
          "amount": 1.0,
          "unit": "each"
        }
      ]
    },
    "ginger-chicken": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "soy-sauce",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "oyster-sauce",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "cornstarch",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "ginger",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "neutral-oil",
          "amount": 2.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "bell-pepper",
          "amount": 1.0,
          "unit": "each"
        }
      ]
    },
    "chickpea-curry": {
      "base": 4,
      "main": [
        {
          "id": "chickpeas",
          "amount": 2.0,
          "unit": "can"
        },
        {
          "id": "onion",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "garlic",
          "amount": 3.0,
          "unit": "clove"
        },
        {
          "id": "ginger",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "crushed-tomatoes",
          "amount": 398.0,
          "unit": "ml"
        },
        {
          "id": "cumin",
          "amount": 1.5,
          "unit": "tsp"
        },
        {
          "id": "coriander",
          "amount": 1.5,
          "unit": "tsp"
        },
        {
          "id": "turmeric",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "garam-masala",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "neutral-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "lime",
          "amount": 1.0,
          "unit": "each"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "chicken-fajita": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 500.0,
          "unit": "g"
        },
        {
          "id": "bell-pepper",
          "amount": 2.0,
          "unit": "each"
        },
        {
          "id": "onion",
          "amount": 0.5,
          "unit": "each"
        },
        {
          "id": "neutral-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "cumin",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "paprika",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "oregano",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "garlic-powder",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "lime",
          "amount": 0.5,
          "unit": "each"
        },
        {
          "id": "black-beans",
          "amount": 1.0,
          "unit": "cup"
        },
        {
          "id": "salsa",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "cilantro",
          "amount": 1.0,
          "unit": "tbsp"
        }
      ],
      "side": []
    },
    "beef-broccoli": {
      "base": 2,
      "main": [
        {
          "id": "beef",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "ginger",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "soy-sauce",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "oyster-sauce",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "cornstarch",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "neutral-oil",
          "amount": 2.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 450.0,
          "unit": "g"
        }
      ]
    },
    "fried-rice": {
      "base": 2,
      "main": [
        {
          "id": "tofu",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "edamame",
          "amount": 200.0,
          "unit": "g"
        },
        {
          "id": "carrot",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "scallion",
          "amount": 2.0,
          "unit": "each"
        },
        {
          "id": "soy-sauce",
          "amount": 1.5,
          "unit": "tbsp"
        },
        {
          "id": "sesame-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "neutral-oil",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "black-pepper",
          "amount": 0.25,
          "unit": "tsp"
        }
      ],
      "side": []
    },
    "greek-chicken": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "lemon-juice",
          "amount": 2.0,
          "unit": "tbsp"
        },
        {
          "id": "olive-oil",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "garlic",
          "amount": 3.0,
          "unit": "clove"
        },
        {
          "id": "oregano",
          "amount": 2.0,
          "unit": "tsp"
        },
        {
          "id": "salt",
          "amount": 0.5,
          "unit": "tsp"
        },
        {
          "id": "black-pepper",
          "amount": 0.25,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "broccoli",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "cucumber",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "tomato",
          "amount": 2.0,
          "unit": "each"
        },
        {
          "id": "yogurt",
          "amount": 4.0,
          "unit": "tbsp"
        },
        {
          "id": "lemon-juice",
          "amount": 1.0,
          "unit": "tsp"
        }
      ]
    },
    "lemongrass-tofu": {
      "base": 2,
      "main": [
        {
          "id": "tofu",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "lemongrass",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "soy-sauce",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "sugar",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "neutral-oil",
          "amount": 2.0,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        },
        {
          "id": "cucumber",
          "amount": 0.5,
          "unit": "each"
        },
        {
          "id": "mint",
          "amount": 0.5,
          "unit": "cup"
        },
        {
          "id": "lime",
          "amount": 1.0,
          "unit": "each"
        }
      ]
    },
    "lemon-salmon": {
      "base": 2,
      "main": [
        {
          "id": "salmon",
          "amount": 450.0,
          "unit": "g"
        },
        {
          "id": "lemon-juice",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "dijon",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "garlic",
          "amount": 2.0,
          "unit": "clove"
        },
        {
          "id": "olive-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "black-pepper",
          "amount": 0.25,
          "unit": "tsp"
        }
      ],
      "side": [
        {
          "id": "cauliflower",
          "amount": 350.0,
          "unit": "g"
        }
      ]
    },
    "tinola": {
      "base": 2,
      "main": [
        {
          "id": "chicken",
          "amount": 600.0,
          "unit": "g"
        },
        {
          "id": "ginger",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "garlic",
          "amount": 4.0,
          "unit": "clove"
        },
        {
          "id": "onion",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "neutral-oil",
          "amount": 1.0,
          "unit": "tsp"
        },
        {
          "id": "papaya",
          "amount": 1.0,
          "unit": "each"
        },
        {
          "id": "broth",
          "amount": 3.0,
          "unit": "cup"
        },
        {
          "id": "fish-sauce",
          "amount": 1.0,
          "unit": "tbsp"
        },
        {
          "id": "bok-choy",
          "amount": 2.0,
          "unit": "each"
        }
      ],
      "side": []
    }
  },
  "breakfasts": {
    "Blueberry-banana overnight oats": [
      {
        "id": "oats",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "milk",
        "amount": 0.75,
        "unit": "cup"
      },
      {
        "id": "yogurt",
        "amount": 0.6666666667,
        "unit": "cup"
      },
      {
        "id": "chia",
        "amount": 2.0,
        "unit": "tsp"
      },
      {
        "id": "banana",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "blueberries",
        "amount": 1.0,
        "unit": "cup"
      }
    ],
    "Gala apple pie overnight oats": [
      {
        "id": "oats",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "milk",
        "amount": 0.75,
        "unit": "cup"
      },
      {
        "id": "yogurt",
        "amount": 0.6666666667,
        "unit": "cup"
      },
      {
        "id": "apple",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "chia",
        "amount": 2.0,
        "unit": "tsp"
      },
      {
        "id": "cinnamon",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "walnuts",
        "amount": 2.0,
        "unit": "tbsp"
      }
    ],
    "Mushroom-spinach scrambled eggs": [
      {
        "id": "egg",
        "amount": 4.0,
        "unit": "each"
      },
      {
        "id": "mushrooms",
        "amount": 200.0,
        "unit": "g"
      },
      {
        "id": "spinach",
        "amount": 60.0,
        "unit": "g"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "bread",
        "amount": 2.0,
        "unit": "slice"
      },
      {
        "id": "salt",
        "amount": 0.125,
        "unit": "tsp"
      },
      {
        "id": "black-pepper",
        "amount": 0.125,
        "unit": "tsp"
      }
    ],
    "Strawberry yogurt with walnuts": [
      {
        "id": "yogurt",
        "amount": 350.0,
        "unit": "g"
      },
      {
        "id": "strawberries",
        "amount": 200.0,
        "unit": "g"
      },
      {
        "id": "walnuts",
        "amount": 20.0,
        "unit": "g"
      },
      {
        "id": "oats",
        "amount": 2.0,
        "unit": "tbsp"
      }
    ],
    "Blueberry yogurt with walnuts": [
      {
        "id": "yogurt",
        "amount": 350.0,
        "unit": "g"
      },
      {
        "id": "blueberries",
        "amount": 150.0,
        "unit": "g"
      },
      {
        "id": "walnuts",
        "amount": 20.0,
        "unit": "g"
      },
      {
        "id": "oats",
        "amount": 2.0,
        "unit": "tbsp"
      }
    ],
    "Peanut-butter banana overnight oats": [
      {
        "id": "oats",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "milk",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "yogurt",
        "amount": 0.6666666667,
        "unit": "cup"
      },
      {
        "id": "peanut-butter",
        "amount": 2.0,
        "unit": "tbsp"
      },
      {
        "id": "chia",
        "amount": 2.0,
        "unit": "tsp"
      },
      {
        "id": "cinnamon",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "banana",
        "amount": 1.0,
        "unit": "each"
      }
    ]
  },
  "lunches": {
    "Warm lemon-chickpea grain bowl": [
      {
        "id": "chickpeas",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "tomato",
        "amount": 2.0,
        "unit": "each"
      },
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "oregano",
        "amount": 0.5,
        "unit": "tsp"
      }
    ],
    "Lemon chicken hummus grain bowl": [
      {
        "id": "broccoli",
        "amount": 2.0,
        "unit": "cup"
      },
      {
        "id": "hummus",
        "amount": 4.0,
        "unit": "tbsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Tomato chickpea grain skillet": [
      {
        "id": "chickpeas",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "tomato",
        "amount": 2.0,
        "unit": "each"
      },
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "garlic",
        "amount": 1.0,
        "unit": "clove"
      },
      {
        "id": "olive-oil",
        "amount": 2.0,
        "unit": "tsp"
      },
      {
        "id": "oregano",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Egg and edamame fried grain bowl": [
      {
        "id": "egg",
        "amount": 4.0,
        "unit": "each"
      },
      {
        "id": "edamame",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "carrot",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "soy-sauce",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "sesame-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "neutral-oil",
        "amount": 1.0,
        "unit": "tsp"
      }
    ],
    "Warm chickpea pepper grain bowl": [
      {
        "id": "chickpeas",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "bell-pepper",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "onion",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "neutral-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "paprika",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Turkey meatball tomato grain bowl": [
      {
        "id": "broccoli",
        "amount": 2.0,
        "unit": "cup"
      }
    ],
    "Turkey meatball spinach rice bowl": [
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      }
    ],
    "Thai tofu curry rice bowl": [
      {
        "id": "lime",
        "amount": 0.5,
        "unit": "each"
      }
    ],
    "Miso salmon cucumber grain bowl": [
      {
        "id": "cucumber",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "yogurt",
        "amount": 2.0,
        "unit": "tbsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "black-pepper",
        "amount": 0.125,
        "unit": "tsp"
      }
    ],
    "Warm chickpea tomato spinach bowl": [
      {
        "id": "chickpeas",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "passata",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "garlic",
        "amount": 1.0,
        "unit": "clove"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "oregano",
        "amount": 0.5,
        "unit": "tsp"
      }
    ],
    "Warm black bean cumin rice bowl": [
      {
        "id": "black-beans",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "tomato",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "bell-pepper",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "cumin",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "lime",
        "amount": 0.5,
        "unit": "each"
      }
    ],
    "Sesame ginger chicken grain bowl": [
      {
        "id": "bell-pepper",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "broccoli",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "soy-sauce",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "sesame-oil",
        "amount": 0.5,
        "unit": "tsp"
      }
    ],
    "Chole curry rice bowl": [
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Warm black bean corn tomato bowl": [
      {
        "id": "black-beans",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "corn",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "tomato",
        "amount": 2.0,
        "unit": "each"
      },
      {
        "id": "cumin",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "neutral-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "lime-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Ginger beef broccoli grain bowl": [
      {
        "id": "broccoli",
        "amount": 2.0,
        "unit": "cup"
      },
      {
        "id": "soy-sauce",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "sesame-oil",
        "amount": 1.0,
        "unit": "tsp"
      }
    ],
    "Warm lemon chickpea rice bowl": [
      {
        "id": "chickpeas",
        "amount": 1.0,
        "unit": "can"
      },
      {
        "id": "tomato",
        "amount": 2.0,
        "unit": "each"
      },
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "oregano",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Greek souvlaki chicken grain bowl": [
      {
        "id": "broccoli",
        "amount": 2.0,
        "unit": "cup"
      },
      {
        "id": "yogurt",
        "amount": 4.0,
        "unit": "tbsp"
      },
      {
        "id": "cucumber",
        "amount": 0.25,
        "unit": "each"
      },
      {
        "id": "garlic",
        "amount": 0.5,
        "unit": "clove"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tsp"
      }
    ],
    "Lemongrass tofu edamame grain bowl": [
      {
        "id": "edamame",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "cauliflower",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "lime",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "mint",
        "amount": 1.0,
        "unit": "tbsp"
      }
    ],
    "Adobo chicken broccoli grain bowl": [
      {
        "id": "broccoli",
        "amount": 2.0,
        "unit": "cup"
      }
    ],
    "Lemon salmon spinach grain bowl": [
      {
        "id": "spinach",
        "amount": 1.0,
        "unit": "cup"
      },
      {
        "id": "cucumber",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "yogurt",
        "amount": 2.0,
        "unit": "tbsp"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tsp"
      }
    ]
  },
  "sides": {
    "Japanese sunomono cucumber and wakame": [
      {
        "id": "cucumber",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "wakame",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "rice-vinegar",
        "amount": 2.0,
        "unit": "tbsp"
      },
      {
        "id": "sugar",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "soy-sauce",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "sesame-seeds",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "id": "salt",
        "amount": 0.125,
        "unit": "tsp"
      }
    ],
    "Korean spicy cucumber (oi-muchim)": [
      {
        "id": "cucumber",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "soy-sauce",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "rice-vinegar",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "gochugaru",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "sesame-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "garlic",
        "amount": 1.0,
        "unit": "clove"
      },
      {
        "id": "scallion",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "sesame-seeds",
        "amount": 1.0,
        "unit": "tsp"
      }
    ],
    "Pickled red onions": [
      {
        "id": "red-onion",
        "amount": 1.0,
        "unit": "each"
      },
      {
        "id": "cider-vinegar",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "id": "sugar",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "salt",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "bay-leaf",
        "amount": 1.0,
        "unit": "each"
      }
    ],
    "Japanese spinach ohitashi": [
      {
        "id": "spinach",
        "amount": 300.0,
        "unit": "g"
      },
      {
        "id": "dashi",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "id": "soy-sauce",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "mirin",
        "amount": 1.0,
        "unit": "tsp"
      }
    ],
    "Vietnamese carrot and daikon quick pickles": [
      {
        "id": "carrot",
        "amount": 2.0,
        "unit": "each"
      },
      {
        "id": "daikon",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "rice-vinegar",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "id": "sugar",
        "amount": 1.5,
        "unit": "tbsp"
      },
      {
        "id": "salt",
        "amount": 0.5,
        "unit": "tsp"
      }
    ],
    "Greek tzatziki": [
      {
        "id": "cucumber",
        "amount": 0.5,
        "unit": "each"
      },
      {
        "id": "yogurt",
        "amount": 0.75,
        "unit": "cup"
      },
      {
        "id": "lemon-juice",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "garlic",
        "amount": 1.0,
        "unit": "clove"
      },
      {
        "id": "dill",
        "amount": 1.0,
        "unit": "tbsp"
      },
      {
        "id": "olive-oil",
        "amount": 1.0,
        "unit": "tsp"
      },
      {
        "id": "salt",
        "amount": 0.125,
        "unit": "tsp"
      },
      {
        "id": "black-pepper",
        "amount": 0.125,
        "unit": "tsp"
      }
    ]
  },
  "ingredients": {
    "apple": {
      "name": "Gala apples",
      "cupGrams": null
    },
    "banana": {
      "name": "Ripe bananas",
      "cupGrams": null
    },
    "basil": {
      "name": "Basil",
      "cupGrams": null
    },
    "bay-leaf": {
      "name": "Bay leaf",
      "cupGrams": null
    },
    "beef": {
      "name": "Beef",
      "cupGrams": null
    },
    "bell-pepper": {
      "name": "Bell peppers",
      "cupGrams": null
    },
    "black-beans": {
      "name": "Black beans (540 mL cans, drained)",
      "cupGrams": 170
    },
    "black-pepper": {
      "name": "Black pepper",
      "cupGrams": null
    },
    "blueberries": {
      "name": "Blueberries",
      "cupGrams": 150
    },
    "bok-choy": {
      "name": "Bok choy",
      "cupGrams": null
    },
    "bread": {
      "name": "Whole-grain bread",
      "cupGrams": null
    },
    "breadcrumbs": {
      "name": "Breadcrumbs",
      "cupGrams": null
    },
    "broccoli": {
      "name": "Frozen broccoli",
      "cupGrams": 90
    },
    "broth": {
      "name": "Broth",
      "cupGrams": null
    },
    "carrot": {
      "name": "Carrot",
      "cupGrams": null
    },
    "cauliflower": {
      "name": "Frozen cauliflower",
      "cupGrams": 100
    },
    "chia": {
      "name": "Chia",
      "cupGrams": null
    },
    "chicken": {
      "name": "Boneless skinless chicken",
      "cupGrams": null
    },
    "chickpeas": {
      "name": "Chickpeas (540 mL cans, drained)",
      "cupGrams": null
    },
    "cider-vinegar": {
      "name": "Apple cider vinegar",
      "cupGrams": null
    },
    "cilantro": {
      "name": "Cilantro",
      "cupGrams": null
    },
    "cinnamon": {
      "name": "Cinnamon",
      "cupGrams": null
    },
    "coconut-milk": {
      "name": "Coconut milk",
      "cupGrams": null
    },
    "coriander": {
      "name": "Coriander",
      "cupGrams": null
    },
    "corn": {
      "name": "Corn",
      "cupGrams": 165
    },
    "cornstarch": {
      "name": "Cornstarch",
      "cupGrams": null
    },
    "crushed-tomatoes": {
      "name": "Crushed tomatoes",
      "cupGrams": null
    },
    "cucumber": {
      "name": "Cucumber",
      "cupGrams": null
    },
    "cumin": {
      "name": "Cumin",
      "cupGrams": null
    },
    "daikon": {
      "name": "Daikon",
      "cupGrams": null
    },
    "dashi": {
      "name": "Dashi",
      "cupGrams": null
    },
    "dijon": {
      "name": "Dijon",
      "cupGrams": null
    },
    "dill": {
      "name": "Dill",
      "cupGrams": null
    },
    "edamame": {
      "name": "Frozen shelled edamame",
      "cupGrams": 155
    },
    "egg": {
      "name": "Eggs",
      "cupGrams": null
    },
    "fish-sauce": {
      "name": "Fish sauce",
      "cupGrams": null
    },
    "garam-masala": {
      "name": "Garam masala",
      "cupGrams": null
    },
    "garlic": {
      "name": "Garlic",
      "cupGrams": null
    },
    "garlic-powder": {
      "name": "Garlic powder",
      "cupGrams": null
    },
    "ginger": {
      "name": "Ginger",
      "cupGrams": null
    },
    "gochugaru": {
      "name": "Gochugaru",
      "cupGrams": null
    },
    "grains": {
      "name": "Cooked grain blend",
      "cupGrams": null
    },
    "green-curry-paste": {
      "name": "Green curry paste",
      "cupGrams": null
    },
    "honey": {
      "name": "Honey",
      "cupGrams": null
    },
    "hummus": {
      "name": "Hummus",
      "cupGrams": null
    },
    "lemon-juice": {
      "name": "Lemon juice",
      "cupGrams": null
    },
    "lemongrass": {
      "name": "Lemongrass paste",
      "cupGrams": null
    },
    "lentils": {
      "name": "Dry lentils",
      "cupGrams": null
    },
    "lime": {
      "name": "Lime",
      "cupGrams": null
    },
    "milk": {
      "name": "Milk / soy beverage",
      "cupGrams": null
    },
    "mint": {
      "name": "Mint",
      "cupGrams": null
    },
    "mirin": {
      "name": "Mirin",
      "cupGrams": null
    },
    "miso": {
      "name": "Miso",
      "cupGrams": null
    },
    "mushrooms": {
      "name": "Mushrooms",
      "cupGrams": null
    },
    "neutral-oil": {
      "name": "Neutral oil",
      "cupGrams": null
    },
    "oats": {
      "name": "Oats",
      "cupGrams": 80
    },
    "olive-oil": {
      "name": "Olive oil",
      "cupGrams": null
    },
    "onion": {
      "name": "Onion",
      "cupGrams": null
    },
    "oregano": {
      "name": "Oregano",
      "cupGrams": null
    },
    "oyster-sauce": {
      "name": "Oyster sauce",
      "cupGrams": null
    },
    "papaya": {
      "name": "Papaya",
      "cupGrams": null
    },
    "paprika": {
      "name": "Paprika",
      "cupGrams": null
    },
    "parsley": {
      "name": "Parsley",
      "cupGrams": null
    },
    "passata": {
      "name": "Passata",
      "cupGrams": null
    },
    "peanut-butter": {
      "name": "Peanut butter",
      "cupGrams": null
    },
    "quinoa": {
      "name": "Dry quinoa",
      "cupGrams": null
    },
    "red-onion": {
      "name": "Red onion",
      "cupGrams": null
    },
    "rice": {
      "name": "Dry rice",
      "cupGrams": null
    },
    "rice-vinegar": {
      "name": "Rice vinegar",
      "cupGrams": null
    },
    "salmon": {
      "name": "Salmon",
      "cupGrams": null
    },
    "salsa": {
      "name": "Salsa",
      "cupGrams": null
    },
    "salt": {
      "name": "Salt",
      "cupGrams": null
    },
    "scallion": {
      "name": "Scallion",
      "cupGrams": null
    },
    "sesame-oil": {
      "name": "Sesame oil",
      "cupGrams": null
    },
    "sesame-seeds": {
      "name": "Sesame seeds",
      "cupGrams": null
    },
    "soy-sauce": {
      "name": "Reduced-sodium soy sauce",
      "cupGrams": null
    },
    "spinach": {
      "name": "Spinach",
      "cupGrams": 30
    },
    "strawberries": {
      "name": "Strawberries",
      "cupGrams": null
    },
    "sugar": {
      "name": "Sugar",
      "cupGrams": null
    },
    "tofu": {
      "name": "Firm tofu",
      "cupGrams": null
    },
    "tomato": {
      "name": "Tomato",
      "cupGrams": null
    },
    "turkey": {
      "name": "Lean ground turkey",
      "cupGrams": null
    },
    "turmeric": {
      "name": "Turmeric",
      "cupGrams": null
    },
    "wakame": {
      "name": "Wakame",
      "cupGrams": null
    },
    "walnuts": {
      "name": "Walnuts",
      "cupGrams": 120
    },
    "yogurt": {
      "name": "Plain Greek yogurt",
      "cupGrams": 245
    },
    "zucchini": {
      "name": "Zucchini",
      "cupGrams": null
    },
    "lime-juice": {
      "name": "Lime juice"
    }
  }
};
