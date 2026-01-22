import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <section className="bg-linear-to-r bg-cyan-600 via-cyan-600 to-orange-600">
        <div></div>
        <div>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
