const qs = obj =>  {
  let arr = [];
  for (var o in obj) {
    arr.push(encodeURIComponent(o) + "=" + encodeURIComponent(obj[o]));
  }
  return arr.join("&");
} 

module.exports = {
  qs
}
