import filter from "./index.js";
const data = [["1", "5"], ["2", "5"], "5"];
const options = {
  random: true,
  filter: ["5"],
  count: 1,
};
console.log(filter.arrayFilter(data, options));
console.log(
  filter.objectFilter(
    {
      data: "hello",
      data2: "hello",
    },
    {
      filter: "hello",
      count: 1,
      random: true,
    }
  )
);
