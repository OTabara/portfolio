import Link from "next/link"; // permet de naviguer entre les pages sans recherger le site

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center py-6 mt-10">
          <div className="container mx-auto px-4">
            <p className="text-lg">&copy; {new Date().getFullYear()}. Tous droits réservés.</p>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
              <a href="https://www.linkedin.com/in/oumou-tabara-diallo-8b365b1a0/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
              <a href="mailto:doumoutabara@gmail.com" className="hover:text-blue-500">Email</a>
            </div>
          </div>
        </footer>
      );
};
