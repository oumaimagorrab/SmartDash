"use client";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16 relative">

        {/* 🔹 Logo centré, grand, légèrement décalé vers le haut */}
        <Link href="/" className="flex items-center relative">
          <div className="relative -top-2"> {/* 🔸 monte légèrement le logo */}
            <Image
              src="/logo.png"
              alt="SmartDash Logo"
              width={200}    // taille de rendu
              height={200}
              className="object-contain h-14 w-auto" // hauteur réelle visible (≈96 px)
              priority
            />
          </div>
        </Link>

        {/* 🔹 Liens du menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Accueil</Link>
          <Link href="/about" className="hover:text-blue-600 transition">À propos</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
}
