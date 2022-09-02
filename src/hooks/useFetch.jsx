// libs
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetch = (options) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setStatus("pending");
    setValue(null);
    setError(null);
    try {
      const { data } = await axios(options);
      setValue(data);
      setStatus("success");
    } catch (e) {
      setError(e);
      setStatus("error");
    }
  }, [options]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, value, error };
};

export default useFetch;
