import React from 'react'
import Vehicle from './components/Vehicle'

const App = () => {

  const cars =[
    {
      carName: "Tesla 3",
      carImage: "https://images.autofun.co.id/file1/5934fe7817f44bb0a64dcf1a4bbf4bce_606x402.jpg",
      carDesk:"Tampilan desain Eksterior terlihat Modern",
      carMerk: "Tesla",

    },
    {
      carName: "Tesla Model S",
      carImage: "https://images.autofun.co.id/file1/03e85ef5ac3c448b908d9cd17288d4e2_606x402.jpg",
      carDesk:"Performa tinggi Fitur lengkap dan canggih ",
      carMerk: "Tesla",

    },
    {
      carName: "Tesla Model X",
      carImage: "https://images.autofun.co.id/file1/3d0c2f0eb47741b6b85219ef915be0e0_606x402.jpg",
      carDesk:"Memiliki tampilan desain eksterior modern ",
      carMerk: "Tesla",

    },
    {
      carName: "BMW X1",
      carImage: "https://images.autofun.co.id/file1/58fa364fe2364152b454122667ae03e6_606x402.jpg",
      carDesk:"Desain BMW X1 Sporty",
      carMerk: "BMW",

    },
    {
      carName: "2 Series Grand Coupe",
      carImage: "https://images.autofun.co.id/file1/92b25a2cebab4b3584469cdf6f8346d8_606x402.jpg",
      carDesk:"BMW termasuk salah satu brand Keren",
      carMerk: "BMW",

    },
  ]
  return (
    <div>
      {cars.map((car, index) => (
        <Vehicle
          key={index}
          carName={car.carName}
          carImage={car.carImage}
          carDesk={car.carDesk}
          carMerk={car.carMerk}
        />
      ))}
    </div>
    
  )
}

export default App