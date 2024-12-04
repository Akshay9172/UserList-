import axios from "axios";
import { useState } from "react";

const useApiCallHooks = () => {

    const apiLocalUrl = "https://jsonplaceholder.typicode.com/";
    const [response, setData] = useState([]);
    const [error, setError] = useState([]);

    const callAPI = (type, apiName, parms) => {
        if (type === "get") {
            axios
                .get(apiLocalUrl + apiName, parms)
                .then((res) => {
                    setData(res);
                })
                .catch((error) => {
                    setError(error);
                })

        }
    }
    return [response, error, callAPI];


};
export default useApiCallHooks;