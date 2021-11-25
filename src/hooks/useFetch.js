import { useEffect, useState } from "react";

const useFetch = () => {
    const [bikes, setbikes] = useState([]);
    const [spinner, setspinner] = useState(true);

    useEffect(() => {
        fetch("https://frozen-peak-94262.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setbikes(data);
                setspinner(false);
            });
    }, []);
    return [bikes,spinner,setbikes,setspinner ];
};

export default useFetch;
