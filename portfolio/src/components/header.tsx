import Image from 'next/image';

export default function Header({ 
    localLogo,
}: { 
    localLogo: any; 
}) {
    return (
        <header className='absolute top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>logo</span>
              <Image
                src={localLogo}
                alt='Lorem Kaine'
                width={40}
                height={40}
              />
            </a>
          </div>
        </nav>
      </header>
    );
}