function Home() {
  return (
    <>
      <main className="hero min-h-screen bg-slate-100">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-slate-800">
              Benvenuto nella Home
            </h1>
            <p className="py-6 text-lg text-slate-600">
              Questa è la pagina principale del progetto
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">Esplora</button>
              <button className="btn btn-outline text-slate-700 border-slate-400 hover:bg-slate-200">
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-px bg-slate-300"></div>

      <section className="text-center py-12 px-4 bg-white">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">
          Seconda sezione
        </h2>
      </section>
    </>
  );
}

export default Home;
