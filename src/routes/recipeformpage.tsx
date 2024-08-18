import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipeformpage')({
  component: () => <div>Hello /recipeformpage!</div>
})