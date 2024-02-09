import Random_items from "./helpers/Random_items.js";

const objectFilter = (data, { count, filter, random }) => {
    const arr = [];
    Object.keys(data).forEach((key) => {
      const value = data[key]?.constructor.name;
      switch (value) {
        case "Object":
          Object.keys(data[key]).forEach((e) => {
            const nestedValue = data[key][e];
            if (nestedValue === filter) arr.push({ [key]: data[key] });
          });
          break;
        case "Array":
          if (data[key].includes(filter)) arr.push({ [key]: data[key] });
          break;
        default:
          if (data[key] === filter) arr.push({ [key]: data[key] });
          break;
      }
    });
    //randomize and return
    let items;
  
    if (random === true) items = Random_items(arr, count);
    else {
      items = arr;
      items.splice((count));
    }
    let tempObj = {};
    items.forEach((e) => {
      const key = Object.keys(e);
      tempObj[key] = e[key];
    });
    return tempObj;
}

export default objectFilter
