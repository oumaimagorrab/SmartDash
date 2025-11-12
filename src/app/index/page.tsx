
import SearchBar from "../components/SearchBar";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Section principale */}
      <section className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Trouvez l’emploi qui vous correspond
        </h1>
        <p className="text-gray-600 mt-3">
          Explorez des milliers d’offres d’emploi collectées automatiquement grâce à SmartDash.
        </p>

        <SearchBar />

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Offres populaires</h2>
          <p className="text-gray-500 mt-2">
            Exemple de suggestions d’emploi à afficher plus tard.
          </p>
        </div>
      </section>
    </div>
  );
}
