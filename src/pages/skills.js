import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiSpringboot, SiCplusplus, SiPostgresql, SiMariadb } from 'react-icons/si';

export default function Skills() {
    const skills = [
        { name: "Java", icon: <FaJava className="w-8 h-8" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8" /> },
        { name: "Python", icon: <FaPython className="w-8 h-8" /> },
        { name: "C++", icon: <SiCplusplus className="w-8 h-8" /> },
        { name: "React.js", icon: <FaReact className="w-8 h-8" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
        { name: "SQL", icon: <FaDatabase className="w-8 h-8" /> },
        { name: "MariaDB", icon: <SiMariadb className="w-8 h-8" /> },
        { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
        { name: "HTML", icon: <FaHtml5 className="w-8 h-8" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-8 h-8" /> },
        { name: "JavaScript", icon: <FaJs className="w-8 h-8" /> },
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-600">Mes Compétences</h1>
            <p className="text-lg text-gray-500 dark:text-gray-300 text-center mt-4">
                Voici un aperçu des technologies et outils que j'utilise :
            </p>

            <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl">
                            {skill.icon}
                        </div>
                        <span className="text-lg font-semibold">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}