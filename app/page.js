import Products from "@/components/Products";
import SideBar from "@/components/SideBar";
import { getData } from "@/utils/getData";
export default async function Home() {
  const products = await getData();
  return (
    <div className="flex gap-2">
      <SideBar />
      <Products data={products} />
    </div>
  );
}
