import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "TeachPlanner - Logiciel de Génération d’Emplois du Temps",
      description: "Développement d’un logiciel pour l’automatisation des emplois du temps en utilisant Java, Spring Boot et PostgreSQL.",
      status: "En cours", // Ajout du statut "En cours"
      link: null, // Suppression du lien GitHub
    },
    {
      title: "DreamPark - Système de Gestion de Parking",
      description: "Développement d’un système automatisé pour la gestion de parking en Python avec une conception modulaire.",
      link: "https://github.com/tonprofil/dreampark",
    },
    {
      title: "QuizzGame - Application de Jeu de Quiz Culturel",
      description: "Création d’une application web interactive en JavaScript avec une interface utilisateur responsive en HTML/CSS.",
      link: "https://github.com/tonprofil/quizzgame",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-600">
        Mes Projets
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-4">
        Voici quelques projets que j'ai réalisés :
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              {project.description}
            </p>

            {/* Affichage du statut "En cours" pour TeachPlanner */}
            {project.status && (
              <p className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {project.status}
              </p>
            )}

            {/* Affichage du bouton "Voir le projet" uniquement si un lien est disponible */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Voir le projet
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}