import { useState, useEffect } from "react";
import axios from "axios";

export const useYesterday = (url, options) => {
  const [G965BYes, setG965B] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios(url, options);
        setG965B(res.data.G965B);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
    const id = setInterval(() => {
      setG965B(G965BYes);
    }, 3000);
    return () => clearInterval(id);
  }, [G965BYes, options, url]);
  return { G965BYes, error };
};