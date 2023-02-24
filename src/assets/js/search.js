import { getSearchMeals, getRandomMeals, getDetailMeal } from "./meal.service";
import { createMealCard, detailMeal } from "./ui";

export const setupSearchForm = (el) => {
  const form = document.querySelector(el);
  const list = document.querySelector("#meals");
  const title = document.querySelector("#result-heading");

  console.log(form);
  const onSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value.trim();
    if (keyword.length > 0) {
      getSearchMeals(keyword).then((meals) => {
        list.innerHTML = (meals || []).map(createMealCard).join("");
        title.innerHTML = `<h2>Kết quả tìm kiếm cho từ khóa '${keyword}':</h2>`;
      });
    }
  };

  form.addEventListener("submit", onSubmit);
};

export const setupSearchRandom = (el) => {
  const random = document.querySelector(el);
  const list = document.querySelector("#meals");
  const title = document.querySelector("#result-heading");

  const onClick = (e) => {
    e.preventDefault();
    getRandomMeals().then((meal) => {
      list.innerHTML = (meal || []).map(createMealCard).join("");
      title.innerHTML = `<h2>Kết quả tìm kiếm ngẫu nhiên:</h2>`;
    });
  };
  random.addEventListener("click", onClick);
};

export const getIdDetailMeal = (id) => {
  const detail = document.querySelector("#single-meal");

  getDetailMeal(id).then(
    (meal) => (detail.innerHTML = (meal || []).map(detailMeal).join(""))
  );
};
