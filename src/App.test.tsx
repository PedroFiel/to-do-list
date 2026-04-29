import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('marca e desmarca task como feita', async () => {
  render(<App />)

  const taskTitle = 'Revisar requisitos do trabalho'
  const taskItem = screen.getByText(taskTitle).closest('article')
  expect(taskItem).not.toBeNull()

  const toggleButton = within(taskItem as HTMLElement).getByRole('button', {
    name: /marcar tarefa como concluída|desmarcar tarefa como concluída/i,
  })

  await userEvent.click(toggleButton)
  expect(screen.getByText(taskTitle)).toHaveClass('line-through')

  await userEvent.click(toggleButton)
  expect(screen.getByText(taskTitle)).not.toHaveClass('line-through')
})
