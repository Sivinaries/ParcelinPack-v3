import { useEffect, useState } from "react";
import categoryService from "../api/service/category.service";

const useCategoryById = (id) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await categoryService.getCategoryById(id);
        setCategory(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  return { category, loading, error };
};

export default useCategoryById;