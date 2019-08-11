---
title: Gnocchi
category: Dinners
tags: 
  - hearty
  - pasta
prepTime:
  - PT5M
cookTime:
  - PT7M
recipeYield: 2 meals
recipeCuisine: Italian
recipeIngredient:
  - slug: potatoes
    amount:
      - 250 g
      - 2 large potatoes
  - slug: plain-flour
    amount:
      - 250 g
  - slug: egg
    amount:
      - 60 g
      - 1 egg
  - slug: water
    amount:
      - 2000 ml
recipeEquipment:
  - slug: large-sauce-pan
  - slug: knife
  - slug: vegetable-peeler
  - slug: potato-ricer
    optional: true
recipeInstructions:
  - instruction: Bring a large pan of water to a boil
    ingredients: water
    action: boil
    section: prep
    equipment: large-sauce-pan
  - instruction: Peel potatoes
    ingredients: potatoes
    action: peel
    section: prep
    equipment: vegetable-peeler
  - instruction: Add potatoes to boiling water. Cook until tender - a knife should slide easily in and fall off under its own weight.
    ingredients: potatoes
    action: boil
    section: cook
    time: PT15M
    equipment: [ large-sauce-pan, knife ]
  - instruction: Mash potatoes into a fine mash, or use a potato ricer
    time: PT10M
    ingredients: potatoes
    action: mash
    section: prep
    equipment: [ large-sauce-pan, knife ]
  - instruction: Loosely combine mashed potatoes with flour. Make a well in the centre of the mixture and break the egg into the well and beat until smooth.
    ingredients: [ potatoes, plain-flour, egg ]
    action: combine
    section: prep
  - instruction: Combine all of the ingredients into a dough, knead until just combined.
    ingredients: [ potatoes, plain-flour, egg ]
    action: knead
    section: prep
  - instruction: Cut dough into fist-sized chunks, and roll out into "rope" shape, about 2-3cm wide
    action: knead
    section: prep
    equipment: knife
  - instruction: Cut the dough "ropes" into 2-3cm pieces 
    action: cut
    section: prep
    equipment: knife
  - instruction: Lightly indent each gnocchi piece with a fork to create a texture
    optional: true
    section: prep
notes:
  - For best results, use an equal weight of potato to flour
---
