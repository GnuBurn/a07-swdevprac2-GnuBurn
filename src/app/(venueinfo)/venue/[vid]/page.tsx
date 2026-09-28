import Image from "next/image"
import { notFound } from "next/navigation"

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params
  
  const venue = new Map()
  venue.set('001', {name: 'The Bloom Pavilion', image: '/img/bloom.jpg', rating: 0})
  venue.set('002', {name: 'Spark Space', image: '/img/sparkspace.jpg', rating: 0})
  venue.set('003', {name: 'The Grand Table', image: '/img/grandtable.jpg', rating: 0})

  const selectedVenue = venue.get(vid)
  if (!selectedVenue) notFound()

  return(
    <main className="min-h-[calc(100vh-50px)] bg-stone-100 px-5 py-10 text-emerald-950 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row overflow-hidden rounded-lg border border-emerald-950/10 bg-white shadow-md md:flex-row">
          <Image
            src={selectedVenue.image}
            alt={selectedVenue.name}
            width={0}
            height={0}
            sizes="100vw, 68vw"
            className=" w-1/3 object-cover"
          />
          <section className="flex flex-1 flex-start border-t-4 border-emerald-800 p-7 sm:p-10 md:border-l-4 md:border-t-0">
            <h3 className="mt-3 font-semibold leading-tight sm:text-4xl">
              {selectedVenue.name}
            </h3>
          </section>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const venues = ['001', '002', '003']
  return venues.map((vid) => ({ vid }))
}