import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/config";
export const MyContext = createContext();

export const MyProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let actors = [];
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "actors"));
        querySnapshot.forEach((doc) => {
          actors.push({ id: doc.id, ...doc.data() });
        });
        setData(actors);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <MyContext.Provider value={{ loading, data }}>
      {props.children}
    </MyContext.Provider>
  );
};
