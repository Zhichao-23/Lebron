'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

class LinkObj {
  public href: string;
  public segment: string;
  constructor(segment: string) {
    this.href = "/" + segment;
    this.segment = segment;
  }
}

const links = [new LinkObj("championship"), new LinkObj("goat")];
const accessibleLinks = ["/", "/championship", "/goat"];

export default function Nav() {
  const pathname = usePathname();
  if (!accessibleLinks.includes(usePathname())) return null;
  return (
   <div className='sticky top-0 bg-black overflow-hidden z-10 h-12'>
     <div className='flex flex-nowrap justify-between container mt-3 mr-4'>
      <div className='text-white ml-7 text-xl font-bold'>
        <Link href='/'>Home</Link>
      </div>
      <div className='hidden sm:flex gap-4 text-white text-sm '>
        {links.map(link => 
          <div key={link.href} className='flex items-center'>
            <Link 
              href={link.href} 
              className={pathname == link.href ? 'text-purple-500' : ''}
              >
              {link.segment}
            </Link>
          </div>
        )}
      </div>
    </div>
   </div>
  )
}
