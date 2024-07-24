import plants from '../assets/plants.jpg'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className="items-center justify-center h-screen " style={{ backgroundImage: `url(${plants})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.9  }}>
            <div className="flex flex-col justify-center items-center h-full">    
            <h1 className="text-7xl font-black text-gray-50">Welcome to Paradise Nursery</h1><br/>
            <p className="text-2xl font-bold text-gray-50">Providing a wide range of quality plants that suit your needs.</p>
            <Link to="/products">
            <button className="bg-green-600 text-white font-bold rounded-full p-3 mt-3">Get Started</button>
            </Link>
            </div>

        </div>
    )
}

export default Landing