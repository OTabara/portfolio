import { useState } from "react";
import { motion } from "framer-motion";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mrbeanyj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Erreur lors de l'envoi du message !");
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 ">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-600">Contactez-moi</h1>
      <p className="blanc text-lg text-gray-700  dark:text-gray-300 text-center mt-4">
        Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.
      </p>

      {/* Formulaire avec animation */}
      <motion.div
        className="mt-8 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {submitted ? (
          <p className="text-green-600 dark:text-gray-300 text-center font-semibold">
            ✅ Message envoyé avec succès !
          </p>
        ) : (
          <form
            className="bg-white shadow-lg dark:bg-gray-800 rounded-lg p-6"
            onSubmit={handleSubmit}
          >
            {/* Nom */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white font-medium mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:bg-gray-800 dark:text-white font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border dark:bg-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Bouton d'envoi avec animation */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Envoyer
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}