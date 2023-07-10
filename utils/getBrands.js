import { getData } from "./getData";
const data = await getData();
const brands = data.map((product) => product.brand);
export const uniqueBrand = brands.reduce((brandArray, currentItem) => {
  if (!brandArray.includes(currentItem)) {
    brandArray.push(currentItem);
  }
  return brandArray;
}, []);
// console.log(uniqueBrand);
