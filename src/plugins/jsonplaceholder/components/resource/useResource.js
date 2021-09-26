import { useEffect, useState } from "react";

export const useResource = (resourceType) => {
  const [items, setItems] = useState([]);

  async function fetchResources(resourceType) {
    const url = `https://jsonplaceholder.typicode.com/${resourceType}`;
    const response = await fetch(url);
    setItems(await response.json());
  }

  useEffect(() => {
    fetchResources(resourceType);
  }, [resourceType]);

  return {
    items,
    reload: () => fetchResources(resourceType)
  };
};
