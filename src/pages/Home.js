import React from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import PersonModel from "../components/PersonModel";
import { data } from "../utils/data";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

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
                class="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200">
          <div className="flex items-center justify-between p-5 ">
            <p>Events</p>
            <button>
              <BsFilterRight size={28} />
            </button>
          </div>

          <div className="p-5  overflow-y-scroll h-[73vh]">
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
