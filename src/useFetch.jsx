import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [fetchData, setFatchData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
                    setFatchData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(error => {
                    // console.log(error.message)
                    setError(error.message);
                    setIsLoading(false)
                    setFatchData(null)
                })
        }, 1000);
    }, [url]);

    return { fetchData, error, isLoading }
}

export default useFetch;