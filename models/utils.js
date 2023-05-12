class Utils {
    camelToSnake(key) {
        const newKey = key.split('').reduce((acc, curr) => {
          const keyCode = curr.charCodeAt(0);
          if (keyCode < 97) {
            acc += '_' + curr.toLowerCase();
          } else {
            acc += curr
          }
      
          return acc;
        }, '')
      
        return newKey
    }
}

module.exports = Utils;