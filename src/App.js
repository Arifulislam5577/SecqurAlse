import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./utils/config";
import { data } from "./utils/data";

function App() {
  // Add a new document in collection "cities"
  useEffect(() => {
    const addDate = async () => {
      try {
        await setDoc(doc(db, "actors"), "CA", data);
      } catch (error) {
        console.log(error);
      }
    };

    addDate();
  }, []);

  return <RouterProvider router={Routes} />;
}

export default App;
