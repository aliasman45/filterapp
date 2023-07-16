import { getData } from "./getData";
export async function filterData(filters = {}, querry) {
  const data = await getData();
  const { category, brand } = filters;

  if (category.length !== 0 || brand.length !== 0 || querry) {
    let filteredDataArray = [];
    if (querry) {
      // console.log(querry);
      let filtredData = data.filter(
        ({ title }) => title.toLowerCase().indexOf(querry.toLowerCase()) !== -1
      );
      filteredDataArray = [...filteredDataArray, ...filtredData];
    }
    if (category.length > 0) {
      category.forEach((item) => {
        let filtredData = data.filter(({ category }) => category === item);
        filteredDataArray = [...filteredDataArray, ...filtredData];
      });
    }
    if (brand.length > 0) {
      brand.forEach((item) => {
        let filtredData = data.filter(({ brand }) => brand === item);
        filteredDataArray = [...filteredDataArray, ...filtredData];
      });
    }
    return filteredDataArray;
  } else {
    return data;
  }
}
