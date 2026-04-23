import { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export function TodoForm({ onAddTask }: Props) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (!input.trim()) return;

    onAddTask(input);
    setInput("");
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <label className="sr-only" htmlFor="todo-title">
        Título da tarefa
      </label>

      <input
        id="todo-title"
        name="title"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        placeholder="Digite uma nova tarefa…"
        className="min-h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none ring-emerald-500/30 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2"
      />

      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-5 font-medium text-white shadow-sm transition hover:bg-emerald-700"
      >
        Adicionar
      </button>
    </form>
  );
}