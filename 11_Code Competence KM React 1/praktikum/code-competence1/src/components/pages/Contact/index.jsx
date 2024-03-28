import imgContact from "../../../assets/imgcontact.jpg";
import { useState, useEffect } from "react";
import Navbar from "../../global/Navbar";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../global/Footer";

export default function Contact() {
  const initial = {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [values, setValid] = useState(initial);
  const [data, setData] = useState([]);
  const [Err, setErr] = useState({});

  useEffect(() => {
    setData(data);
  }, [data]);

  function handleInput(e) {
    setValid({ ...values, [e.target.name]: e.target.value });
    setErr(validation(values));
  }

  function handleValid(e) {
    e.preventDefault();

    const newData = {
      id: uuidv4(),
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      message: values.message,
    };
    setData([...data, newData]);
    console.log(data);
    setValid({ ...values, [e.target.name]: (e.target.value = "") });
  }

  function validation(values) {
    const Err = {};
    if (!values.firstname) {
      Err.firstname = `field first name can't be empty`;
    }
    if (!values.email) {
      Err.email = `field email can't be empty`;
    }
    return Err;
  }

  return (
    <main>
      <Navbar></Navbar>
      <section className="container max-w-screen-xl mx-auto grid items-center h-screen">
        <div className="flex justify-between items-center">
          <div className="max-w-lg grid gap-4">
            <h1 className="text-start text-[64px] font-bold text-sky-500 ">
              Contact Us
            </h1>
            <p className="text-[18px] font-normal text-slate-900">
              Need to ged in touch with us? Either fill out the form with your
              inquiry or find the department email you'd like to contact below
            </p>
            <img
              className="shadow-lg rounded-md w-[450px]"
              src={imgContact}
              alt=""
            />
          </div>
          <div className="max-w-xl w-full rounded-xl h-fit ">
            <form action="" onSubmit={handleValid}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-8 justify-between">
                  <div className="grid gap-2">
                    <label>First name* </label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={values.firstname}
                      name="firstname"
                      className="bg-slate-200 h-12 rounded-md outline-sky-300 px-2 py-1"
                    />
                    {Err.firstname ? (
                      <p className="text-red-500 text-sm text-start px-2">
                        {Err.firstname}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid gap-2">
                    <label>Last name </label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={values.lastname}
                      name="lastname"
                      className="bg-slate-200 h-12 rounded-md outline-sky-300 px-2 py-1"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label>Email* </label>
                  <input
                    type="email"
                    onChange={handleInput}
                    value={values.email}
                    name="email"
                    className="bg-slate-200 h-12 rounded-md outline-sky-300 px-2 py-1"
                  />
                  {Err.email ? (
                    <p className="text-red-500 text-sm text-start px-2">
                      {Err.email}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label>What can we help you with? </label>
                  <textarea
                    name="message"
                    onChange={handleInput}
                    value={values.message}
                    className="bg-slate-200 h-32 rounded-md outline-sky-300 px-2 py-1"
                  />
                </div>
                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="rounded-md py-2 px-4 text-[16px]"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=" mx-auto py-14">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{i + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.firstname}
                    </th>
                    <td className="px-6 py-4">{item.lastname}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
