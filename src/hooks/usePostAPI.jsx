import React, { useState } from "react";
import axios from "axios";

const usePostAPI = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const postData = async (url, formData, authToken) => {
    setLoading(true);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: authToken ? `Bearer ${authToken}` : undefined,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, setLoading, data, error, setError, postData };
};

export default usePostAPI;
