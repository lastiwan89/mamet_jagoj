import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/$workId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/$id"!</div>
}
