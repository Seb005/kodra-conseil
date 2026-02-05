export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-blue-dark px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kodra Conseil. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="transition-colors hover:text-gray-300">
            Mentions légales
          </a>
          <a href="#" className="transition-colors hover:text-gray-300">
            Politique de confidentialité
          </a>
          <a href="#" className="transition-colors hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
