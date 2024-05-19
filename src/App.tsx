import Form from "./Components/Form";
function App() {
  return (
    <>
      <header className="bg-blue-900 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>
      <section className="bg-gray-300 py-20 px-2 md:px-5">
        <div className=" max-w-4xl mx-auto">
          <p className="text-center text-2xl font-bold uppercase py-1">Formulario</p>
        </div>
        <Form />
      </section>
    </>
  );
}

export default App;
