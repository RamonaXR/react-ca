import { useState, useEffect } from "react";

/**
 * Custom hook to fetch products from the API.
 *
 * This hook fetches product data from the Noroff online-shop API endpoint
 * ("https://v2.api.noroff.dev/online-shop") and returns an object containing
 * the fetched data, a loading state, and an error state.
 *
 * @returns {Object} An object with the following properties:
 *   - data {Array}: The fetched product data.
 *   - isLoading {boolean}: Indicates whether the data is currently being fetched.
 *   - isError {boolean}: Indicates whether an error occurred during fetching.
 */
function useApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const apiUrl = "https://v2.api.noroff.dev/online-shop";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, isError };
}

export default useApi;
