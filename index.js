import arrayFilter from "./utlis/arrayFilter.js";
import objectFilter from "./utlis/objectFilter.js";

export default class filter {
  /**
   * Filter an dataay based on the provided filter value.
   * @param {Array<data>} data - The dataay to work on.
   * @param {Object} options  - The object used for filtering.
   * @param {number} options.count - The count used for filtering (should be an integer).
   * @param {*} options.filter - The value for filtering data in dataay
   * @param {Boolean} options.random - Want randomness on filtered data?
   * @returns {Array} - The filtered dataay.
   */
  static arrayFilter(data, { count = 1, filter, random = false } = {}) {
    
    if (!data || !(data.constructor.name === "Array") || data.length == 0)
      throw new Error("Expected first argument to be Array");
    if (random !== undefined && typeof random !== "boolean")
      throw new Error("Expected random object to be boolean");
    if (filter == undefined)
      throw new Error("Expected filter object to be a data type");
    return arrayFilter(data, { count, filter, random });
  }
  /**
   * Filter an object based on the provided filter value.
   * @param {Object<data>} data - The dataay to work on.
   * @param {Object} options  - The object used for filtering.
   * @param {number} options.count - The count used for filtering (should be an integer).
   * @param {*} options.filter - The value for filtering data in dataay
   * @param {Boolean} options.random - Want randomness on filtered data?
   * @returns {dataay} - The filtered dataay.
   */
  static objectFilter(data,{count=1,filter,random=false}={}) {
    if(!data|| !(data.constructor.name == "Object") || Object.keys(data).length == 0 )
    throw new Error("Expected first argument to be Object");
    if (random !== undefined && typeof random !== "boolean")
      throw new Error("Expected random object to be boolean");
    if (filter == undefined)
      throw new Error("Expected filter object to be a data type");
    return objectFilter(data, { count, filter, random });
  }
}
