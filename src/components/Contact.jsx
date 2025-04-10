"use client";
import { useState } from "react";
import swal from "sweetalert";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill all fields");
      swal("Error", "Please fill all fields", "error");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setError("");

    swal("Success!", "Your message has been sent!", "success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg border border-solid border-black w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-bold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-black font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-black font-bold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full border border-black text-black  p-2 rounded-md transition-all ease-linear duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
