export default function Random_items(e,count){
    
    const items = []
    Array(count)
    .fill(null)
    .forEach(() => {
      const randomIndex = Math.floor(Math.random() * e.length);
      items.push(e.splice(randomIndex, 1)[0]);
    });
    return items[0]==undefined?[]:items;
}