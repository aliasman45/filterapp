import { getData } from "./getData";
const data = await getData();
const brands = data.map((product) => product.brand);
const uniqueBrand = brands.reduce((brandArray, currentItem) => {
  if (!brandArray.includes(currentItem)) {
    brandArray.push(currentItem);
  }
  return brandArray;
}, []);

export default uniqueBrand;
// console.log(uniqueBrand);
