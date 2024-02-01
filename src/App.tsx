import "./App.css";
import { useState } from "react";

const defaultResultValue: number = 0;

function App() {
  const [result, setResult] = useState<number>(defaultResultValue);
  const [form, setForm] = useState({
    kms: 0 as string | number,
  });

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(0);

    let { weight, kms } = e.target as HTMLFormElement;
    weight = weight.value;
    kms = kms.value;

    const calorieRate = 1.03 * weight;
    const caloriesBurned = calorieRate * kms;

    setResult(caloriesBurned);
  }

  function resetResult() {
    setResult(defaultResultValue);
  }

  return (
    <div className="my-12 mx-2 p-6 bg-brand/10 rounded-lg text-black backdrop-blur-xl ">
      <form
        onSubmit={onFormSubmit}
        onChange={resetResult}
        className="text-white"
      >
        <div className="space-y-4">
          <h1 className="text-xl font-semibold leading-7">
            Calculadora de calorias
          </h1>
          <p className="mt-1 text-sm leading-6 ">
            Ingrese la siguiente informacion solicitada para calcular cuantas
            calorias aprox quemo
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 "
              >
                Cuanto pesas?
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">kg</span>
                </div>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium leading-6 "
              >
                Cuanto mides?
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">mts</span>
                </div>
                <input
                  type="text"
                  name="height"
                  id="height"
                  className="block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 "
              >
                Cuanto años tienes?
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                  placeholder="0"
                  min={0}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 "
              >
                Eres hombre o mujer?
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="sex"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  <option selected disabled value="">
                    Seleccione una opcion
                  </option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="kms"
                className="text-sm font-medium leading-6  flex justify-between"
              >
                Cuantos kilometros recorriste?
                <span>{form.kms} Kilometros</span>
              </label>
              <input
                type="range"
                id="kms"
                name="kms"
                min="0"
                max="50"
                defaultValue="0"
                onChange={(e) => setForm({ kms: e.target.value })}
                className="w-full text-black"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <a
            href="/"
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:opacity-75"
          >
            Volver
          </a>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 border border-black text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Calcular
          </button>
        </div>
      </form>

      {result ? (
        <div className="flex flex-col gap-2 text-center mt-4">
          <p>Recorriste {form.kms} Kilometros</p>
          <h2 className="text-3xl font-bold">Quemaste {result} Calorias</h2>
        </div>
      ) : null}
    </div>
  );
}

export default App;
