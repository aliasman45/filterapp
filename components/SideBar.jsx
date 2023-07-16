import Categories from "./Categories";
import Brands from "./Brands";
export default async function SideBar() {
  return (
    <div className="flex flex-col">
      <Categories />
      <Brands />
    </div>
  );
}