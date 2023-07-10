import Products from "@/components/Products";
import SideBar from "@/components/SideBar";
export default async function Home() {
  return (
    <div className="flex gap-2">
      <SideBar />
      <Products />
    </div>
  );
}
