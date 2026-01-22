import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/')({
  component: LocationComponent,
})

function LocationComponent() {
  return <div>Hello "/location/"!</div>
}
