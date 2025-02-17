import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Section Head pour le SEO et les métadonnées */}
      <Head>
        <title>Mon Portfolio - Oumou Tabara DIALLO</title>
        <meta name="description" content="Portfolio de Oumou Tabara DIALLO, développeuse passionnée par la création d'applications performantes et interactives avec React.js, Next.js, et Tailwind CSS." />
        <meta name="keywords" content="développeuse, React.js, Next.js, Tailwind CSS, portfolio, Oumou Tabara DIALLO" />
        <meta name="author" content="Oumou Tabara DIALLO" />
      </Head>

      {/* Section principale du contenu */}
      <main className="container mx-auto px-4 py-20 text-center">
        {/* Section de présentation avec photo de profil et texte */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Animation de la photo de profil */}
          <motion.div
            className="relative w-100 h-50 md:w-80 md:h-60 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/sourire.jpg" alt="Photo de profil de Oumou Tabara DIALLO" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Texte de présentation */}
          <motion.div
            className="text-center md:text-left mt-6 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600">Oumou Tabara DIALLO</h1>
            <p className="text-gray-600 mt-4 text-lg md:text-xl dark:text-gray-300">
              Développeuse spécialisée en <strong>React.js, Next.js, et Tailwind CSS</strong>. 
              Passionnée par la création d'interfaces modernes, performantes et intuitives.
            </p>
            {/* Bouton de téléchargement du CV */}
            <motion.a
              href="/cv.pdf"
              download
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV 📄
            </motion.a>
          </motion.div>
        </div>

        {/* Section des icônes animées */}
        <motion.div
          className="mt-12 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl">💻</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl">🚀</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl">🎨</span>
          </motion.div>
        </motion.div>

        {/* Section "Pourquoi travailler avec moi ?" */}
        <motion.div
          className="mt-20 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Pourquoi travailler avec moi ?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Carte 1 : Dynamique et Innovante */}
            <motion.div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-blue-600">💡 Dynamique et Innovante</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Expérience académique en <strong>Next.js, React.js, HTML</strong>.
              </p>
            </motion.div>

            {/* Carte 2 : Capacité d'Adaptation */}
            <motion.div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-blue-600">🎯 Capacité d'Adaptation</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Mes diverses expériences professionnelles témoignent de ma capacité à apprendre rapidement et à m'adapter à différents environnements.
              </p>
            </motion.div>

            {/* Carte 3 : Créativité et Conception */}
            <motion.div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-blue-600">✨ Créativité et Conception</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Passionnée par la conception d'interfaces innovantes et interactives, je veille à offrir des expériences utilisateurs engageantes.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bouton pour voir les projets */}
        <motion.div className="mt-12" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <motion.a href="/projects" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Voir mes projets
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}