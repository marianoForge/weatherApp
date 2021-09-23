//API Manipulation

const key = '6OO0twsaA9NAufqjNoz8GoApW7d63E4S';


//get weather info

const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]

}

//get city info
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]
}

// getCity('manchester').then(data => {
//     return getWeather(data.Key) //esta data es lo que devuelve la api y el Key es el Key de la city.
//   }).then(data => { //Esta es la data como argument de lo resuelto anteriormente (data.Key)
//     console.log(data)
//   })
//   .catch(err => console.log(err))