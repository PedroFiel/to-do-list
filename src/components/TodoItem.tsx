export type TodoItemData = {
  id: string
  title: string
  done: boolean
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function IconPencil({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function IconTrash({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}

const iconBtn =
  'inline-flex size-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'

type TodoItemProps = TodoItemData & {
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export function TodoItem({ id, title, done, onDelete, onToggle }: TodoItemProps) {
  return (
    <article className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="min-w-0 flex-1">
        <p
          className={
            done
              ? 'text-sm text-slate-400 line-through sm:text-base'
              : 'text-sm font-medium text-slate-900 sm:text-base'
          }
        >
          {title}
        </p>
        {done ? (
          <p className="mt-1 text-xs text-emerald-600">Concluída</p>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          className={iconBtn}
          aria-label={
            done
              ? 'Desmarcar tarefa como concluída'
              : 'Marcar tarefa como concluída'
          }
          onClick={() => onToggle(id)}
        >
          <IconCheck className="size-4" />
        </button>
        <button type="button" className={iconBtn} aria-label="Editar tarefa">
          <IconPencil className="size-4" />
        </button>
        <button type="button" className={iconBtn} aria-label="Excluir tarefa"
          onClick={() => onDelete(id)}
        >
          <IconTrash className="size-4" />
        </button>
      </div>
    </article>
  )
}
