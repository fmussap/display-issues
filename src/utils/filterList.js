const filterList = (value, fullList) => {
  let filteredList = [];
  if (value) {
    filteredList = fullList.filter((issue) => {
      const { title } = issue;
      title.toLowerCase();
      value.toLowerCase();
      return title.toLowerCase().includes(value.toLowerCase());
    });
  } else {
    filteredList = [...fullList];
  }
  return filteredList;
};

export default filterList;
