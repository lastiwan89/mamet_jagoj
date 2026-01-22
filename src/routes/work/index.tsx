import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/')({
  component: WorkComponent,
})

function WorkComponent() {
  return <div>Hello "/work/"!</div>
}
