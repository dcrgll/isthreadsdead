import Image from 'next/image';
import Modal from '@/components/modal';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { usePlausible } from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ dead }: { dead: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const plausible = usePlausible();

  const handleClick = () => {
    plausible('disagree');
    setIsOpen(true);
  };

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
        <meta
          name="twitter:image"
          content="https://isthreadsdeadyet.com/og.png"
        />
        <meta
          name="twitter:image:alt"
          content="The answer to the question: is threads dead yet?"
        />
      </Head>
      <Image
        src="/shrug.png"
        alt="is threads dead yet?"
        width={160}
        height={160}
        priority
      />
      <h1 className="text-4xl font-bold text-center mt-4">
        is{' '}
        <a href="https://threads.net" className="text-sky-600" target="_blank">
          threads
        </a>{' '}
        dead yet?
      </h1>
      <div className="flex flex-col items-center justify-center mt-24 text-6xl font-bold underline ">
        <h2>{dead}</h2>
      </div>

      <div className="mt-16 text-center">
        Disagree?{' '}
        <button onClick={handleClick} className="underline">
          Express your opinion
        </button>
      </div>

      <footer className="absolute bottom-4 right-4 text-gray-500">
        by{' '}
        <button
          onClick={() => {
            plausible('dan');
            window.open('https://twitter.com/dcrgll', '_blank');
          }}
          className="underline"
        >
          dan
        </button>
      </footer>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  console.log(req.headers['x-itdy']);
  return {
    props: {
      dead: req.headers['x-itdy'] || 'no',
    },
  };
}
