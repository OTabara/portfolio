import "@/styles/globals.css";
import Header from '../components/header';
import Footer from "../components/footer";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.main>
      <Footer />
    </div>
  );
}
