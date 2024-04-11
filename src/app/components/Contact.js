"use client";

import React from "react";
import { useState } from "react";
// import { SendMail } from './SendMail';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("All Fields are Required!!")
            return
        }
        if (!emailIsValid(formData.email)) {
            alert("invalid email address")
            return
        }

        try {
            setLoading(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(formData),
            });
            setLoading(false);
            if (!res.ok) {
                alert("Error Sending Message");
                return
            }
            const data = await res.json();
            alert("Message Sent Successfully");
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact-main-div" className="md:w-1/3">
            <form
                className="flex flex-col px-8 py-8 dark:bg-gray-900"
                onSubmit={handleSubmit}
                autoComplete="on"
            >
                <p className="text-center text-xl dark:text-gray-50">
                    Send me a Message
                </p>

                <label
                    htmlFor="name"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Full name<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    value={formData.name}
                    autoComplete="off"
                />

                <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    E-mail<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    value={formData.email}
                    autoComplete="off"
                />

                <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Message<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    onChange={handleChange}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    value={formData.message}
                    autoComplete="off"
                ></textarea>
                <div className="flex flex-row items-center justify-start">
                    <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg ">
                        {loading ? (
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="flex flex-row gap-2 items-center">
                                <span>Send</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="text-cyan-500 ml-2"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
