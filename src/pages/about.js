import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      {/* Image de profil avec animation */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpg"
          alt="Photo de profil"
          width={200}
          height={200}
          className="rounded-full border-4 border-gray-300 shadow-lg hover:shadow-xl transition-shadow"
        />
      </motion.div>

      {/* Texte de présentation avec animation */}
      <motion.div
        className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-600">À propos de moi</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
          Je suis <strong>Oumou Tabara DIALLO</strong>, étudiante en <strong>Licence 3 MIASHS</strong> à l’Université Jean Jaurès Toulouse.
          Passionnée par le développement logiciel, j’ai acquis des compétences en <strong>Java (Spring Boot), Python, C++, React.js, et PostgreSQL</strong>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
          J’aime concevoir des applications performantes et optimiser les systèmes. Je suis actuellement à la recherche d’un stage dans le domaine du développement logiciel.
        </p>
        
        {/* Bouton vers les projets avec animation */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
          <Link href="/projects">
            <span className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer">
              Voir mes projets
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
