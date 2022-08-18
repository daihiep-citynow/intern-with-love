// libraries
import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (url, method = "GET") => {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method,
        url,
      });

      setRes(data);
      setLoading(false);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, res };
};

export default useApi;
