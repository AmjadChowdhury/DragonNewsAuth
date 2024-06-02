import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-extrabold mb-6 ml-1">All Categories</h2>
            <div className="space-y-6">
                {
                    categories.map(category => <Link 
                        className="block ml-4 text-xl font-semibold px-4 hover:text-2xl hover:font-extrabold" 
                        key={category.id}
                        to={`/category/${category.id}`}
                        >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;