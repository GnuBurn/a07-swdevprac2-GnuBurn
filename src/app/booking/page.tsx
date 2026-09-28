import { Box, Button } from '@mui/material'
import DateReserve from '@/components/DateReserve'

export default function Booking() {
  return (
    <main className="min-h-screen bg-stone-100 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Plan your event
        </p>
        <h1 className="mb-8 text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
          Venue Booking
        </h1>
      <Box component="form" className="flex flex-col gap-6">
        <DateReserve />
        <Button
          type="submit"
          name="Book Venue"
          variant="contained"
          className="self-start rounded-full bg-emerald-900 px-8 py-3 font-semibold normal-case shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-800"
        >
          Book Venue
        </Button>
      </Box>
      </div>
    </main>
  )
}
