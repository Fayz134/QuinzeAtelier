"use client";

import { useState } from "react";

const watches = [
  {
    name: "Rolex Submariner",
    price: "899€",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    name: "Omega Speedmaster",
    price: "749€",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
  },
  {
    name: "Patek Philippe",
    price: "1299€",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen text-white">
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold">
          QUINZE ATELIER
        </h1>

        <p className="mt-6 text-zinc-400 text-xl max-w-2xl">
          Luxury watches crafted for timeless elegance.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">
                {watch.name}
              </h2>

              <p className="text-zinc-400 mt-2 text-xl">
                {watch.price}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold"
              >
                Commander
              </button>
            </div>
          </div>
        ))}
      </section>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 w-full max-w-md rounded-3xl p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center">
              Commander une montre
            </h2>

            <form
              action="https://formsubmit.co/hcaptainyt@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle commande Quinze Atelier"
              /><input
  type="hidden"
  name="_next"
  value="https://quinze-atelier.vercel.app/merci"
/>

              <input
                type="text"
                name="Nom"
                placeholder="Nom"
                required
                className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
              />

              <input
                type="text"
                name="Prenom"
                placeholder="Prénom"
                required
                className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
              />

              <input
                type="tel"
                name="Telephone"
                placeholder="Numéro (facultatif)"
                className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
              />

              <input
                type="text"
                name="ReseauSocial"
                placeholder="Instagram / Snapchat / TikTok"
                required
                className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
              />

              <select
                name="Modele"
                required
                className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
              >
                <option value="">Choisir un modèle</option>
                <option value="Rolex Noir">Rolex Noir</option>
                <option value="Rolex Or">Rolex Or</option>
                <option value="Omega Argent">Omega Argent</option>
                <option value="Patek Philippe Bleu">
                  Patek Philippe Bleu
                </option>
              </select>

              <button
                type="submit"
                className="bg-white text-black py-3 rounded-xl font-semibold"
              >
                Envoyer la commande
              </button>
        </form>
          </div>
        </div>
      )}
    </main>
  );
}