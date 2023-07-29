import Categories from "./Categories";
import Brands from "./Brands";
import { getData } from "@/utils/getData";

export default async function SideBar() {
  const data = await getData();
  // unique categories list
  const categories = data.map((item) => item.category);
  const uniqueCategories = Array.from(new Set(categories));
  // unique brands list
  const brands = data.map((product) => product.brand);
  const uniqueBrand = Array.from(new Set(brands));

  return (
    <div className="hidden lg:block flex-col">
      <Categories categories={uniqueCategories} />
      <Brands brand={uniqueBrand} />
    </div>
  );
}
