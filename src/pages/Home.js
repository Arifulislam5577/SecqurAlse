import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import PersonModel from "../components/PersonModel";
import { data } from "../utils/data";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/DataContext";

const Home = () => {
  const { data: actors } = useContext(MyContext);
  const [user, setUser] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [gender, setGender] = useState("");
  const { id } = useParams();

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  console.log(actors);
  useEffect(() => {
    const user = data.find((person) => person._id === id);
    setUser(user);
  }, [id]);
  return (
    <section>
      <div className="grid grid-cols-10  min-h-[88vh]">
        <aside className="col-span-1 bg-gray-100 flex items-center flex-col justify-between py-5">
          <button>
            <FaBars size="24" color="#6b7280" />
          </button>
          <button>
            <FaSignOutAlt size="24" color="#6b7280" />
          </button>
        </aside>
        <div className="col-span-3">
          <div className="py-10 px-10 flex flex-col items-start justify-start">
            <p>EVTOO50</p>
            <p>Person Detected</p>

            <div className="grid grid-cols-2 items-start my-5">
              <p className="col-span-1 mb-2">Name</p>
              <p className="col-span-1 mb-2">: Md Ariful Islam</p>
              <p className="col-span-1 mb-2">Location</p>
              <p className="col-span-1 mb-2">: Bangladesh</p>
              <p className="col-span-1 mb-2">Date</p>
              <p className="col-span-1 mb-2">: 09-Jan-23</p>
              <p className="col-span-1 mb-2">Time</p>
              <p className="col-span-1 mb-2">: 09:31:24</p>
              <p className="col-span-1 mb-2">Description</p>
              <p className="col-span-1 mb-2">
                : Md Ariful Islam is detected 09th January 2023 from Bangladesh
                at 09:24:24
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="py-10 px-10">
            <h1>{user ? user.gender : "Male"}</h1>

            <div className="mt-5">
              <img
                src={
                  user
                    ? user.image
                    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
                alt="/"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200">
          <div className="flex items-center justify-between p-5 ">
            <p>Events</p>
            <button onClick={() => setShowFilter(!showFilter)}>
              <BsFilterRight size={28} />
            </button>
          </div>

          <div className={`px-5 ${!showFilter ? "" : "hidden"}`}>
            <form>
              <div className="mb-1">
                <span className="text-sm mr-1">Location :</span>
                <input
                  type="radio"
                  id="Chennai"
                  name="location"
                  value="Chennai"
                  onChange={handleChange}
                  checked={selectedLocation === "Chennai"}
                />
                <label htmlFor="Chennai" className="mx-1 text-sm">
                  Chennai
                </label>
                <input
                  type="radio"
                  id="Hyderabad"
                  name="location"
                  value="Hyderabad"
                  onChange={handleChange}
                  checked={selectedLocation === "Hyderabad"}
                />
                <label htmlFor="Hyderabad" className="mx-1 text-sm">
                  Hyderabad
                </label>
                <input
                  type="radio"
                  id="Bangalore"
                  name="location"
                  value="Bangalore"
                  onChange={handleChange}
                  checked={selectedLocation === "Bangalore"}
                />
                <label htmlFor="Bangalore" className="mx-1 text-sm">
                  Bangalore
                </label>
              </div>
              <div className="mb-1">
                <span className="text-sm mr-1">Gender :</span>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={handleGender}
                  checked={gender === "Male"}
                />
                <label htmlFor="male" className="mx-1 text-sm">
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={handleGender}
                  checked={gender === "Female"}
                />
                <label htmlFor="female" className="mx-1 text-sm">
                  Female
                </label>
              </div>
              <div>
                <span className="text-sm mr-1">Date : </span>
                <input
                  type="date"
                  className="mr-2 bg-white px-1 rounded text-sm"
                />
              </div>
            </form>
          </div>

          <div
            className={`p-5  overflow-y-scroll ${
              showFilter ? "h-[73vh]" : "h-[60vh]"
            }`}
          >
            {data.map((person) => (
              <PersonModel key={person._id} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
