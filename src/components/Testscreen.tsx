export default function Testscreen() {
  return (
    <div className="grid h-screen place-items-center bg-gray-500">
      <div className="rounded-lg overflow-hidden bg-white bg-opacity-20 m-3 border-4 border-indigo-500 w-64 grid grid-cols-1">
        <div className="p-3 rounded bg-red">
          <h1 className="text-white">Login</h1>
          <div>
            <h2 className="text-white">Isi 1</h2>
            <h2 className="text-white">Isi 2</h2>
          </div>
          <div>
            <input
              placeholder="Ini input"
              className="w-full bg-white bg-opacity-20 text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-30 p-4 text-biru">
            <h1>Ayah 1</h1>
            <h2>Ibu 1</h2>
          </div>
          <div className="h-30 p-4 text-biru">
            <h3>Ayah 2</h3>
            <h4>Ibu 2</h4>
          </div>
        </div>
      </div>
      <div className="grid h-screen place-items-center bg-cover bg-white">
        <div className="rounded-xl overflow-hidden bg-white bg-opacity-50 m-3 border-4 border-white-500 w-64">
          <div className="p-3 rounded bg-white">
            Login
            <div className="">
              <label className="text-gray-600 relative top-3 bg-white mx-2 ">
                Your Label
              </label>
              <input
                className="border-2 border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Your Input"
              />
            </div>
          </div>
          <div className="h-30 p-4">Transparent</div>
        </div>
      </div>
    </div>
  );
}
