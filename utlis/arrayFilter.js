import Random_items from "./helpers/Random_items.js";

const isFilter = (slicedStr, data) => {
  return slicedStr === data;
};
const arrayFilter = (arr, { count, filter, random }) => {
  const filterType = filter.constructor.name;
  let tempArr, filterAmt;
  switch (filterType) {
    case "Array":
      if (filter.length === 0) throw new Error("Filter array cant be empty");
      filterAmt = filter[0].length;
      tempArr = arr.filter((e) =>
        Array.isArray(e)
          ? e.some((el) => isFilter(el.slice(0, filterAmt), filter[0]))
          : false
      );
      break;
    case "Object":
      const objKey = Object.keys(filter)[0];
      const objValue = filter[Object.keys(filter)[0]];
      tempArr = arr.filter(
        (e) => e.constructor === Object && e[objKey] === objValue
      );
      break;
    case "String":
      filterAmt = filter.length;
      tempArr = arr.filter((element) =>
        isFilter(element.slice(0, filterAmt), filter)
      );
      break;
    default:
      throw new Error("Invalid filter argument");
  }
  if (tempArr.length === 0) return [];
  if (count > 1 && !(count <= tempArr.length)) {
    return {
      data: tempArr,
      dataLength: tempArr.length,
      error: "Count must be less then filtered items",
    };
  } else if (random == false) {
    tempArr.splice(count);
  } else {
    tempArr = Random_items(tempArr, count);
  }
  return tempArr;
};

export default arrayFilter;
