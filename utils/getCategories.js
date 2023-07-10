import { getData } from "./getData";
const data = await getData();
const categories = data?.map((item) => item.category);
export const uniqueCategories = Array.from(new Set(categories));
// console.log(uniqueCategories);
