export default function Merci() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-10 rounded-3xl text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Merci pour votre commande
        </h1>

        <p className="text-zinc-400 text-xl">
          Votre demande a bien été envoyée.
          Nous vous contacterons rapidement via
          votre réseau social ou votre numéro.
        </p>

        <a
          href="/"
          className="mt-8 inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold"
        >
          Retour à l'accueil
        </a>
      </div>
    </main>
  );
}