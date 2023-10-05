import Image from 'next/image'
import logo from 'public/images/logo.png'

export default function Home() {
  return (
    <div className='bg-white'>
      <header className='absolute top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>logo</span>
              <Image
                src='{logo}'
                alt='Lorem Kaine'
                width={40}
                height={40}
              />
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}
