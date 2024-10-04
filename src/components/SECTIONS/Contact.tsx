import React, { useState } from "react";
import Input from "../ui/Input";
import axios from "axios";

const Contact = () => {
  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;

    setinputData((pre) => ({ ...pre, [name]: value }));
    console.log(inputData, "inputdata");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/contact", inputData);
      setResponseMessage("Form submitted successfully!");
    } catch (error: any) {
      console.error("Error submitting form", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      setResponseMessage("Failed to submit form");
    } finally {
      setLoading(false); // This should reset the loading state
      setinputData({ email: "", name: "", message: "" });
      console.log(inputData);
    }
  }

  return (
    <div className=" bg-white dark:bg-black h-full w-full " id="contact">
      <div className="max-screen flex  flex-col md:flex-row items-center justify-center py-20 gap-10">
        <div className="md:w-1/2 w-full flex flex-col justify-self items-center gap-3">
          <h1 className="text-[26px] font-extrabold text-center">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>

          <p className="pl-5">
            Reach out to me today and let&apos;s discuss how I can help you achieve
            your goals
          </p>
        </div>
        <div className="p-5 md:w-96 dark:bg-[rgba(39,51,89,.4)] hover:scale-110 transition-transform  duration-300 ease-in-out bg-[#ffffffbd] flex flex-col justify-start items-center blue-glassmorphism">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-4 space-y-4"
          >
            <p className="contact-headline">Contact us</p>

            <Input
              placeholder="User Name"
              name="name"
              type=""
              value={inputData.name}
              handleChange={handleChange}
            />
            <Input
              placeholder="Email address"
              name="email"
              value={inputData.email}
              type="text"
              handleChange={handleChange}
              othercss="tracking-[2px]"
            />
            <textarea
              name="message"
              value={inputData.message}
              onChange={handleChange}
              required
              className="w-full sm-h-3 border border-gray-300 rounded-lg px-4 py-2 outline-none "
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
              type="submit"
              className="dark:text-white text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              {loading ? "Sending..." : "Send now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
