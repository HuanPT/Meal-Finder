import "@assets/css/style.css";
import { getIdDetailMeal } from "./search";

const id = location.search.replace("?", "");
console.log(id);

getIdDetailMeal(id);
