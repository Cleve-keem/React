import useFetch from "./useFetch";
import Blog from "./Blog";

const Home = () => {
    
    const { fetchData, isLoading, error } = useFetch('http://localhost:4000/posts');

    return(
        <div className="homeComponent">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { fetchData && <Blog blogs={ fetchData } title="All Blogs!" /> }
        </div>
    )
}

export default Home;