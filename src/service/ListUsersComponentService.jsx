
import React, { useState, useEffect } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';

export const useApiList = (apiUrl) => {
    // Define state for your list of values
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Inside the effect, make an Axios API call     
        request(
            "GET", apiUrl,
            {}).then(
                (response) => {
                    // Update the state with the fetched data
                    setData(response.data);
                    setLoading(false);
                }).catch(
                    (err) => {
                        setError(err);
                        setLoading(false);
                    }
                );
    }, []);

    return { data, loading, error };
}