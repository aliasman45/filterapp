import Categories from "./Categories";
import Brands from "./Brands";
export default async function SideBar() {
  return (
    <div className="hidden lg:block flex-col">
      <Categories />
      <Brands />
    </div>
  );
}
