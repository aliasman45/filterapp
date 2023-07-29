import { getData } from "./getData";
export async function uniqueCategories() {
  const data = await getData();
  // const categories = data?.map((item) => item.category);
  // return Array.from(new Set(categories));
}
