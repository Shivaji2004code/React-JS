export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} Shivaji. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">
            GitHub
          </a>
          |
          <a href="https://linkedin.com/in/shivaji-tech" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">
            LinkedIn
          </a>
          |
          <a href="/contact" className="mx-2 hover:text-blue-400">
            Contact
          </a>
        </div>
      </footer>
    );
  }
  