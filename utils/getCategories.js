import { getData } from "./getData";
const data = await getData();
const categories = data?.map((item) => item.category);
const uniqueCategories = Array.from(new Set(categories));
export default uniqueCategories;
