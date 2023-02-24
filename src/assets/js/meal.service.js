export const getRandomMeals = () =>
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => data.meals)
    .catch((err) => console.log(err));

export const getSearchMeals = (key) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
    .then((res) => res.json())
    .then((data) => data.meals)
    .catch((err) => console.log(err));

export const getDetailMeal = (id) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => data.meals);
