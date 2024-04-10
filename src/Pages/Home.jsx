import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";
import { useLoaderData } from 'react-router-dom'


const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    {
                        news.map(aNews => <NewsCard 
                        key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;