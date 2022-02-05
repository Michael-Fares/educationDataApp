export const formatData = (obj) => {
    const data = []
    for ( let key in obj ) {
      console.log (key, obj[key])
       let formatted = {
        name: key,
        value: obj[key]
      }
      data.push(formatted)
    }
    return data
  }