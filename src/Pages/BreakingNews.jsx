import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex border bg-pink-100 rounded-lg">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/' className="mr-12">Hello I am amjad</Link>
                <Link to='/' className="mr-12">Hello I am amjadul alam chowdhury</Link>
                <Link to='/' className="mr-12">Hello I am amjad chy</Link>
                <Link to='/' className="mr-12">Hello I am amjadul</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;