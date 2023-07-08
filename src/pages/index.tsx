import Image from 'next/image';
import Modal from '@/components/modal';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Head>
        <title>is threads dead yet?</title>
        <meta
          name="description"
          content="The answer to the question: is threads dead yet?"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="is threads dead yet?" />
        <meta
          property="og:description"
          content="The answer to the question: is threads dead yet?"
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://isthreadsdeadyet.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dcrgll" />
        <meta name="twitter:creator" content="@dcrgll" />
      </Head>
      <Image
        src="/shrug.png"
        alt="is threads dead yet?"
        width={160}
        height={160}
      />
      <h1 className="text-4xl font-bold text-center mt-4">
        is{' '}
        <a href="https://threads.net" className="text-sky-600" target="_blank">
          threads
        </a>{' '}
        dead yet?
      </h1>
      <div className="flex flex-col items-center justify-center mt-24 text-6xl font-bold underline ">
        <h2>No</h2>
      </div>

      <div className="mt-24">
        Disagree?{' '}
        <button onClick={() => setIsOpen(true)} className="underline">
          Express your opinion
        </button>
      </div>

      <footer className="absolute bottom-4">
        by{' '}
        <a href="https://twitter.com/dcrgll" className="underline">
          dan
        </a>
      </footer>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
