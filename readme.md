## This is my first time trying to make a npm package so please do help in contributing if you find any mistakes or want me to solve something, kudos to senior devs!

# filter-and-random

>pick random data from array or object with specific filter

## Install

```
npm install filter-and-random
```

## usage

```
import filterPick from "filter-and-random"
```

## for array 

```
const data = [['1','5'],['2','5'],'5']
const options = {
  random: true,
  filter: ['5'],
  count: 1
};
 filter.arrayFilter(
    data,
    options
  )
//=> [['1','5']] || [ [ '2', '5' ] ]
```
## filterPick.arrayFilter(array,options)
```
data should be array
random is default to false
count is default to 1
filter should be data type
returns array
```
## for object
```
const data =    {
        property1: "value1",
    
        property2: {
            nestedProperty1: 2,
            nestedProperty2: "value2"
        },
        property3: "value1",
        property4: undefined,
        property5:["value1",1,2,undefined]
    }
const options =   {
      filter:"value1",
      count:2,
      random:true
    }
filterPick.objectFilter(data,options)
//=> [ { property1: 'value1' }, { property3: 'value1' } ]
```
## filterPick.objectFilter(object,options)
```
- object => must be object
- filter => Data type
- count  => optional || defaults to 1
- random => boolean , want randomness among the data that is filtered?
```
