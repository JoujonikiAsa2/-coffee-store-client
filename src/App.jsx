import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { FaArrowRight } from 'react-icons/fa'

function App() {
  const coffees = useLoaderData()
  return (
    <>
    <Link to="/add" className='text-black flex gap-4 items-center'><FaArrowRight></FaArrowRight>Add Coffee</Link>
      <h1 className='text-2xl text-gray-900 font-bold' >Coffee</h1>
      <div className='max-w-2xl lg:max-w-5xl md:max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-12'>
        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
