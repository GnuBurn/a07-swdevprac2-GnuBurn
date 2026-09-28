import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="fixed left-0 right-0 top-0 z-30 flex h-[50px] items-center justify-end gap-2 border-b border-stone-200 bg-white/90 px-4 shadow-sm backdrop-blur sm:px-8">
      <TopMenuItem title="Booking" pageRef='/booking'/>
      <Image src={'/img/logo.png'} className="pointer-events-none h-full w-auto" alt='logo'
      width={0} height={0} sizes='100vh'/>
    </div>
  )
}
