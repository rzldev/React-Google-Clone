import { useCallback, useState } from "react";

const useGoogleSearch = () => {
    const [data, setData] = useState(null);

    const fetchData = useCallback(async (text) => {
        // const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}:omuauf_lfve&q=${text}`
        const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${text}`
        console.log(url);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Headers': 'X-Requested-With',
                }
            });
            const data = await response.json();
            setData(data);
        } catch (e) {
            console.log(e);
        }
    }, [])

    return {
        data: data,
        fetchData: fetchData,
    }
}

export default useGoogleSearch;