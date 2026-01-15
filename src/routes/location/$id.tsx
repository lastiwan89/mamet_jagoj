import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/location/$id"!</div>
}
