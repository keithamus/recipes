---
title: Sour Cocktail
category: Alcoholic Drinks
tags:
  - cocktails
  - whiskey
prepTime: PT5M
totalTime: PT5M
recipeYield: 1 Cocktail
recipeComponent:
  - slug: simple-syrup
    amount: 
      - 15 ml
      - 1 part
  - slug: maraschino-cherries
    amount:
    - 5g
    - 1 cherry
recipeIngredient:
  - slug: whiskey
    amount:
      - 45 ml
      - 3 parts
  - slug: lemon-juice
    amount:
      - 30 ml
      - 2 parts
  - slug: lemon-slice
    amount:
      - 5g
      - 1 slice
recipeEquipment:
  - slug: rocks-glass
  - slug: bar-spoon
  - slug: cocktail-shaker
recipeInstructions:
  - instruction: Add sugar syrup, lemon juice, whiskey, and egg whites to cocktail shaker, shake well
    ingredients: [ simple-syrup, lemon-juice, whiskey, egg-whites ]
    action: pour
    equipment: cocktail-shaker
    scope: prep
  - instruction: Fill glass with ice
    ingredients: ice
    action: pour
    equipment: rocks-glass
    scope: prep
  - instruction: Strain shaker into glass filled with ice
    action: pour
    equipment: [ cocktail-shaker, rocks-glass ]
    scope: prep
  - instruction: Garish with lemon slice and cherry
    ingredients: [ lemon-slice, maraschino-cherries ]
    action: garnish
    equipment: rocks-glass
    scope: prep
notes:
  - Remove the egg whites, and add some soda, and you have yourself a [Collins](/recipes/collins.md)!
---
