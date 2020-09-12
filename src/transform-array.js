module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error('wrong type');

  const result = [];
  let deleted;

  for (let i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case '--discard-next':
        deleted = i + 1;
        i++;
        break;
      case '--discard-prev':
        if (result.length && deleted !== i - 1)
        result.pop();
        break;
      case '--double-next':
       if (i < arr.length - 1)
        result.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (result.length && deleted !== i - 1)
        result.push(arr[i - 1]);
        break;
      default:
        result.push(arr[i]);
    }
  }

return result;
}