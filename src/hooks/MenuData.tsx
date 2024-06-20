// useFetchMenuData.ts
import { useState, useEffect } from "react";

interface MenuItem {
  url: string;
  title: string;
  name: string;
  fontAwesomeClass: string;
  teaserText: string;
}

interface Data {
  desktopMenu: {
    products: {
      first: {
        title: string;
        menuItems: MenuItem[];
      };
      second: {
        title: string;
        menuItems: MenuItem[];
      };
    };
    [key: string]: any;
  };
  [key: string]: any;
}

const MenuData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/frontendapi/getmenu");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const data: Data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default MenuData;
