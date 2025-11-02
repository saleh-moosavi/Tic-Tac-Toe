import { settingProps } from "../../types/guessNumber";

export default function Setting({ handleSubmit }: settingProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 border p-10 rounded-xl text-center"
    >
      <h2 className="text-xl font-bold">Change The Setting</h2>

      <input
        type="number"
        name="min"
        defaultValue={1}
        placeholder="Min Number"
        className="p-2 rounded-lg border-none outline-none focus:shadow-sm shadow-white text-black"
      />

      <input
        type="number"
        name="max"
        defaultValue={10}
        placeholder="Max Number"
        className="p-2 rounded-lg border-none outline-none focus:shadow-sm shadow-white text-black"
      />

      <input
        type="number"
        name="tries"
        defaultValue={3}
        placeholder="Number of Tries"
        className="p-2 rounded-lg border-none outline-none focus:shadow-sm shadow-white text-black"
      />

      <button type="submit" className="px-4 py-2 bg-sky-600 rounded-lg">
        Save
      </button>
    </form>
  );
}
