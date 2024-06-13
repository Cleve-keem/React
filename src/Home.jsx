import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    let url = 'http://localhost:4000/posts';

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then( response => {
                    if(!response.ok){
                        throw Error("The URL is " + response.statusText);
                    } // else{console.table(response)}
                    return response.json()
                })
    
                .then( data => {
                    // console.table(data)
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(error => {
                    // console.log(error.message)
                    setError(error.message);
                    setIsLoading(false)
                    setBlogs(null)
                })
        }, 1000);
    }, [url]);

    return(
        <div className="homeComponent">
            { error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Blog blogs={ blogs } title="All Blogs!" />}
        </div>
    )
}

export default Home;