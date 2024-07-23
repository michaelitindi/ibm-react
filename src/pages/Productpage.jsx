import Header from "../components/Header"
import bamboo from "../assets/bamboo.jpeg"
import cactus from "../assets/cactus.jpeg"
import eucalyptus from "../assets/eucalyptus.jpg"
import jadeplant from "../assets/jadeplant.jpeg"
import watermelon from "../assets/watermelon.jpeg"
import orchid from "../assets/orchid.jpeg"
function Productpage()
{
    const posts = [
        {
            title: "Bamboo",
            image: bamboo,
            description: "A bamboo plant"
        },
        {
            title: "Cactus",
            image: cactus,
            description: "A cactus plant"
        },
        {
            title: "Eucalyptus",
            image: eucalyptus,
            description: "An eucalyptus plant"
        },
        {
            title: "Jade Plant",
            image: jadeplant,
            description: "A jade plant"
        },
        {
            title: "Watermelon",
            image: watermelon,
            description: "A watermelon plant"
        },
        {
            title: "Orchid",
            image: orchid,
            description: "An orchid plant"
        }

    ]
    return (
        <>
        <Header/>
        <p className="pt-10">Plants available</p>
        <div className="grid gap-2 lg:grid-cols-4">

        {posts.map((post, index) => ( 
                <div key={index} className="w-full rounded-lg shadow-md lg:max-w-sm"> 
                    <img className="object-cover w-full h-48" src={post.image} alt=""/>
                    <div className="p-4">
                        <h4 className="text-xl font-semibold">{post.title}</h4>
                        <p>{post.description}</p>
                        <button className="bg-green-600 text-white font-bold rounded-full p-3 mt-3">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>

        

        </>
    )
}

export default Productpage