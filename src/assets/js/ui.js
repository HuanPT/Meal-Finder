export const createMealCard = (meal) => {
  return `
      <a href="./recipe.html?${meal.idMeal}" target="_blank" class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info">
          <h3>${meal.strMeal}</h3>
        </div>
      </a>
  `;
};

export const detailMeal = (meal) => {
  console.log(meal);

  let ingredient = [];

  let measure = [];

  for (let item in meal) {
    if (item.includes("strIngredient") && meal[item].trim() !== "")
      ingredient.push(meal[item]);
    if (item.includes("strMeasure") && meal[item].trim() !== "")
      measure.push(meal[item]);
  }

  let list = "";
  ingredient.forEach((item, i) => {
    list += `<li>${item} - ${measure[i]}</li>`;
  });

  console.log(ingredient, measure);
  return `
    <div class="single-meal" id=${meal.idMeal}>

                <h1>${meal.strMeal}</h1>

                <img src="${meal.strMealThumb}" alt="">
                <div class="single-meal-info">
                    <p>${meal.strCategory}</p>
                    <!-- Khu vực (Area) -->
                    <p>${meal.strArea}</p>
                </div>
                <div class="main">
                    <p>${meal.strInstructions}</p>

                    <h2>Ingredients</h2>
                    <ul>
                      ${list}
                    </ul>
                </div>
            </div>
  `;
};
