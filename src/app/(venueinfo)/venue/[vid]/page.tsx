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
    <main className="text-center p-5 bg-stone-100 text-emerald-950">
      <h1 className="text-lg font-medium">Venue ID {vid}!</h1>
      <div className="flex flex-row my-5">
        <Image 
        src={selectedVenue.image}
        alt={selectedVenue.name}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 90vw, 30vw"
        className="h-auto w-[30%] rounded-lg"/>
        <div className="text-md mx-5">{selectedVenue.name}</div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const venues = ['001', '002', '003']
  return venues.map((vid) => ({ vid }))
}