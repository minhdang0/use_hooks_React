import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () =>  
            {   
                try {
                    const res = await fetch(url);

                    if(!res.ok) throw new Error("Lỗi khi tải dữ liệu");
        
                    const data = await res.json();
                    setData(data);
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false)
                }
            }
            fetchData()
    }, [url])
    

    return [data, loading, error];

}

export default useFetch
