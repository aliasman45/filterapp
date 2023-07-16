function handleChange(e) {
  const { value, checked } = e.target;
  if (checked) {
    setCategorySelected((pre) => [...pre, value]);
  } else {
    setCategorySelected((pre) => {
      return [...pre.filter((category) => category !== value)];
    });
  }
}

export async function getData(filters = {}) {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  let data = products;
  const { category, brand } = filters;
  if (category && brand) {
    let filteredDataArray = [];
    if (category.length >= 0) {
      category.forEach((item) => {
        let filtredData = data.filter(({ category }) => category === item);
        filteredDataArray = [...filteredDataArray, filtredData];
      });

      return (data = [...filteredDataArray]);
    }
  }

  return data;
}
