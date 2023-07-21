import { getData } from "./getData";
export async function filterData(filters = {}, querry) {
  const data = await getData();
  const { category, brand } = filters;

  if (category.length > 0 || brand.length !== 0 || querry) {
    // if user search by querry
    let filteredDataArray = [];
    if (querry) {
      let filtredData = data.filter(
        ({ title }) => title.toLowerCase().indexOf(querry.toLowerCase()) !== -1
      );
      return (filteredDataArray = [...filteredDataArray, ...filtredData]);
    }
    //checking if user click only category
    if (category.length > 0) {
      category.forEach((item) => {
        let filtredCategory = data.filter(({ category }) => category === item);
        if (brand.length > 0) {
          brand.forEach((item) => {
            let filtredData = filtredCategory.filter(
              ({ brand }) => brand === item
            );
            filteredDataArray = [...filteredDataArray, ...filtredData];
          });
          return filteredDataArray;
        }
        filteredDataArray = [...filteredDataArray, ...filtredCategory];
      });
      return filteredDataArray;
    }

    //checking if user click only brand
    if (brand.length > 0) {
      brand.forEach((item) => {
        let filtredCategory = data.filter(({ brand }) => brand === item);
        if (category.length > 0) {
          category.forEach((item) => {
            let filtredData = filtredCategory.filter(
              ({ category }) => category === item
            );
            filteredDataArray = [...filteredDataArray, ...filtredData];
          });
          return filteredDataArray;
        }
        filteredDataArray = [...filteredDataArray, ...filtredCategory];
      });
      return filteredDataArray;
    }
  } else {
    return data;
  }
}
