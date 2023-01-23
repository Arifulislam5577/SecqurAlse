import React, { useContext, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
} from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { MyContext } from "../context/DataContext";
import { db, storage } from "../utils/config";
import { doc } from "firebase/firestore";

const AddPeople = () => {
  const { data } = useContext(MyContext);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = async (event) => {
    setLoading(true);
    const imageFile = event.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    getDownloadURL(storageRef).then((url) => {
      setLoading(false);
      setFile(url);
    });
  };

  const handleGender = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!selectedLocation || !selectedGender || !file || !name) {
      return;
    }

    try {
      const actor = {
        name: name,
        location: selectedLocation,
        gender: selectedGender,
        image: file,
        timestamp: serverTimestamp(),
      };
      await addDoc(collection(db, "actors"), actor);
      setLoading(false);
      setName("");
      setSelectedLocation("");
      setSelectedGender("");
      setFile("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="w-1/3 mx-auto my-10 py-6 px-8 rounded bg-white shadow-xl">
          <h1 className="mb-3 text-xl  font-bold text-gray-900 uppercase">
            Add New Actor
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="mb-1 text-sm block font-bold text-gray-500"
              >
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="block py-2.5 px-5 border bg-gray-100 rounded w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <fieldset className="mb-3 text-sm">
              <legend className="mb-1 font-bold text-gray-500">
                Select Location
              </legend>
              <div className="inline-block">
                <input
                  type="radio"
                  id="Bangalore"
                  name="location"
                  value="Bangalore"
                  checked={selectedLocation === "Bangalore"}
                  onChange={handleLocation}
                  className="form-radio mr-2"
                />
                <label htmlFor="Bangalore" className="mr-2">
                  Bangalore
                </label>
                <input
                  type="radio"
                  id="Chennai"
                  name="location"
                  value="Chennai"
                  checked={selectedLocation === "Chennai"}
                  onChange={handleLocation}
                  className="form-radio mr-2"
                />
                <label htmlFor="Chennai" className="mr-2">
                  Chennai
                </label>
                <input
                  type="radio"
                  id="Hyderabad"
                  name="location"
                  value="Hyderabad"
                  checked={selectedLocation === "Hyderabad"}
                  onChange={handleLocation}
                  className="form-radio mr-2"
                />
                <label htmlFor="Hyderabad" className="mr-2">
                  Hyderabad
                </label>
              </div>
            </fieldset>
            <fieldset className="mb-3 text-sm">
              <legend className="mb-1 font-bold text-gray-500">
                Select Gender
              </legend>
              <div className="inline-block">
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  checked={selectedGender === "Male"}
                  onChange={handleGender}
                  className="form-radio mr-2"
                />
                <label htmlFor="Male" className="mr-2">
                  Male
                </label>
                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  checked={selectedGender === "Female"}
                  onChange={handleGender}
                  className="form-radio mr-2"
                />
                <label htmlFor="Female" className="mr-2">
                  Female
                </label>
              </div>
            </fieldset>

            <fieldset className="w-full mb-3 ">
              <label
                htmlFor="files"
                className="block text-sm font-sm mb-1 font-bold text-gray-500"
              >
                Image
              </label>

              <input
                type="file"
                name="files"
                id="files"
                className="px-5 py-2 border border-dashed rounded bg-gray-200 w-full"
                onChange={handleFileChange}
              />
            </fieldset>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 bg-gray-900 text-white text-sm rounded"
            >
              {loading ? "Creating..." : "ADD NOW"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPeople;
