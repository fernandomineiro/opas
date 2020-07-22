const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getBolas = () => {
    const set = new Set()
    while(Array.from(set).length <= 89){
      set.add(getRandomBetween(1,90))
    }
    return Array.from(set)
}

module.exports = getBolas