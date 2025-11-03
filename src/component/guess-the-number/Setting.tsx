interface SettingProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  message: string;
}

export default function Setting({ handleSubmit, message }: SettingProps) {
  return (
    <form onSubmit={handleSubmit} className="grid gap-3 text-center">
      <h2 className="text-xl font-bold">Game Settings</h2>

      <label className="text-sm text-left">
        Lower Number
        <input
          type="number"
          name="min"
          defaultValue={1}
          className="w-full p-2 rounded-lg text-black mt-1"
        />
      </label>

      <label className="text-sm text-left">
        Higher Number
        <input
          type="number"
          name="max"
          defaultValue={10}
          className="w-full p-2 rounded-lg text-black mt-1"
        />
      </label>

      <label className="text-sm text-left">
        Number of Tries
        <input
          type="number"
          name="tries"
          defaultValue={3}
          className="w-full p-2 rounded-lg text-black mt-1"
        />
      </label>

      {message && <p className="text-xs text-red-400">{message}</p>}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-800 rounded-lg hover:bg-blue-700"
      >
        Save Settings
      </button>
    </form>
  );
}
