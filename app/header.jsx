import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function header() {
  return (
    <header className="z-10 w-full items-center justify-between font-mono fixed left-0 top-0 flex border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-5 px-10 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <Link href={'/'}>
        <h2 className="text-4xl font-black text-red-500 line-height tracking-wide font-sans uppercase cursor-pointer">
          YTODOS
        </h2>
      </Link>
      <div className="">
        <a
          className="pointer-events-none flex place-items-center gap-2 px-8 "
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/ysoftwares.svg"
            alt="Ysoftwares Logo"
            className="dark:bg-red-400"
            width={50}
            height={24}
            priority
          />
        </a>
      </div>
    </header>
  );
}
