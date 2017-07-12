{% if include.recipe.nutrition[include.name] %}

  {{ include.recipe.nutrition[include.name] | round: 1 }}

{% else %}

  {% capture total %}
    {% for component in include.recipe.recipeComponent %}
      {% assign componentRecipe = site.recipes | where:"slug",component.slug | first %}
      {% capture sum %}{% include calc-nutrient.md recipe=componentRecipe name=include.name %}{% endcapture %}
      {% assign sum = 1.0 | times: sum %}

      {% if componentRecipe.nutrition.servingSize.first %}
        {% assign servingSize = componentRecipe.nutrition.servingSize | first | default: 100 | times: 1.0 %}
      {% else %}
        {% assign servingSize = componentRecipe.nutrition.servingSize | default: 100 | times: 1.0 %}
      {% endif %}

      {% if component.servingAmount %}
        {% assign desiredAmount = componentRecipe.servingAmount %}
      {% elsif component.amount.first %}
        {% assign desiredAmount = component.amount.first %}
      {% else %}
        {% assign desiredAmount = component.amount %}
      {% endif %}

      {% assign multiplier = desiredAmount | times: 0.0 | divided_by: servingSize %}
      {{ sum | times: multiplier }}
    {% endfor %}

    {% for ingredient in include.recipe.recipeIngredient %}
      {% assign ingredientData = site.ingredients | where:"slug", ingredient.slug | first %}

      {% if ingredientData.nutrition.servingSize.first %}
        {% assign servingSize = ingredientData.nutrition.servingSize.first | default: 100 %}
      {% else %}
        {% assign servingSize = ingredientData.nutrition.servingSize | default: 100 %}
      {% endif %}
  
      {% if ingredient.servingAmount %}
        {% assign multiplier = ingredient.servingAmount | divided_by: servingSize | times 1.0 %}
      {% elsif ingredient.amount.first %}
        {% assign multiplier = ingredient.amount | first | divided_by: servingSize | times: 1.0 %}
      {% else %}
        {% assign multiplier = ingredient.amount | divided_by: servingSize | times: 1.0 %}
      {% endif %}

      {{ ingredientData.nutrition[include.name] | times: multiplier }}
    {% endfor %}
  {% endcapture %}

  {% capture totalNutrition %}{% include sum.md start=0.0 values=total %}{% endcapture %}
  {% assign totalNutrition = 1.0 | times: totalNutrition %}
  {% if include.recipe.nutrition.servingSize.first %}
    {% assign totalServing = include.recipe.nutrition.servingSize | first | times: 1.0 | default: 1 %}
    {{ totalNutrition | divided_by: totalServing }}
  {% elsif include.recipe.nutrition.servingSize %}
    {% assign totalServing = include.recipe.nutrition.servingSize | times: 1.0 | default: 1 %}
    {{ totalNutrition | divided_by: totalServing | round: 1 }}
  {% else %}
    {{ totalNutrition | round 1 }}
  {% endif %}

{% endif %}
