import { createFileRoute } from '@tanstack/react-router'
import RecipeDetailPage from '../pages/RecipeDetailPage'

export const Route = createFileRoute('/recipedetailspage')({
  component: () => <div><RecipeDetailPage /></div>
  // component: RecipeDetailPage 
})