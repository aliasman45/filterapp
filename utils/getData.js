export async function getData(selected) {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  let data = products;
  let hello = [];

  if (selected) {
    const arrayFilter = [...selected];

    arrayFilter.forEach((item) => {
      let filtredData = data.filter(({ brand }) => brand === item);
      // hello = [...hello]; // Save previous state of `hello` array
      hello = [...hello, ...filtredData];
    });

    return (data = hello);
  }
  // console.log(data);
  return data;
}
// // data.filter(({ brand, category }) => brand === item);

// export async function getData(selected) {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   let data = products;
//   let hello = [];

//   if (selected) {
//     const arrayFilter = [...selected];

//     arrayFilter.forEach((item) => {
//       let filteredData = data.filter(({ brand }) => brand === item);
//       hello = [...hello, ...filteredData]; // Accumulate filtered results in `hello` array
//     });
//     console.log(hello);

//     return (data = hello); // Return the filtered results from `hello` array
//   }

//   return data;
// }
