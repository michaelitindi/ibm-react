import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="sticky top 0 flex justify-between pl-3 pb-10 border-b 2 w-full mb-10 bg-green-700 ">
            <Link to={"/"}>
            <div className="text-3xl text-white text-center pt-4">Paradise Nursery</div>
            </Link>
            <div className="">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl pt-5 pr-5" />
            </div>
        </div>
    )
}

export default Header