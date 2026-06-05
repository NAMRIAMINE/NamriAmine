import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center bg-[#f5fdfb] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 rounded-[2.5rem] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:p-12">
        <div>
          <p className="text-sm font-medium text-teal-700">404</p>
          <h1 className="mt-5 max-w-[10ch] text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            This page is not here.
          </h1>
          <p className="mt-6 max-w-[55ch] text-base leading-7 text-slate-600 sm:text-lg">
            The link may be outdated, or the page may have moved. The main portfolio is still live.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-teal-600 px-5 text-white hover:bg-teal-700"
            >
              <Link href="/">Back home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-slate-300 bg-white px-5 text-slate-800 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
            >
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-[#f0faf8] p-5 ring-1 ring-slate-200/80">
          <div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-slate-200/70">
            <p className="text-xs font-medium text-slate-400">Quick routes</p>
            <div className="mt-5 space-y-3">
              <Link
                href="/#projects"
                className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                View work
              </Link>
              <Link
                href="/#about"
                className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                Read the profile
              </Link>
              <Link
                href="/#contact"
                className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                Reach out directly
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
