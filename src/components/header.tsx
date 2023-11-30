import Image from 'next/image';

type HeaderProps = {
    localLogo: string;
    width: number;
    height: number;
}

export default function Header({ 
    localLogo,
    width,
    height,
}: HeaderProps) {
    return (
        <header className='absolute top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>logo-signal</span>
              <Image
                src={localLogo}
                alt='logo'
                width={width}
                height={height}
              />
            </a>
          </div>
        </nav>
      </header>
    );
}