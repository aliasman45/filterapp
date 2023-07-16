export async function getData(filters = {}) {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  return products;
}

// export async function getData(filters = {}) {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   let data = products;
//   console.log(data);
//   const { category, brand } = filters;
//   if (category && brand) {
//     let filteredDataArray = [];
//     if (category.length >= 0) {
//       filters.category.forEach((item) => {
//         let filtredData = data.filter(({ category }) => category === item);
//         filteredDataArray = [...filteredDataArray, filtredData];
//       });
//       console.log(...filteredDataArray);

//       // return (data = [...filteredDataArray]);
//     }
//   }

//   // if (selected) {
//   //   const arrayFilter = [...selected];

//   //   arrayFilter.forEach((item) => {
//   //     let filtredData = data.filter(({ brand }) => brand === item);
//   //     // hello = [...hello]; // Save previous state of `hello` array
//   //     hello = [...hello, ...filtredData];
//   //   });

//   //   return (data = hello);
//   // }
//   // console.log(data);
//   return data;
// }
