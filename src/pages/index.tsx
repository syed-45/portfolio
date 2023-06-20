import Link from 'next/link';
import * as React from 'react';
import {
  AiFillGithub,
  AiOutlineArrowDown,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { MdCall, MdOutlineAlternateEmail } from 'react-icons/md';

import { About } from '@/components/about';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <nav className='max-w-900 min-w-100 flex justify-center gap-40 bg-[#ffffff] p-4 drop-shadow-lg'>
        <Link href='/'>Home</Link>
        <Link href='/#about'>About</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contact</Link>
      </nav>
      <div className='relative mx-5 max-w-screen-2xl pt-20 sm:mx-auto sm:w-4/5'>
        <main className='min-h-3/4 from-emerald flex flex-col justify-center rounded-xl bg-gradient-to-tr px-7 pt-20 shadow-xl drop-shadow-sm sm:px-10'>
          <h1 className='text-5xl font-bold'>
            Syed Haque, a passionate web developer
          </h1>
          <h4 className='mb-20 mt-10 font-normal'>
            Hello and welcome to my portfolio website! My name is [Your Name]
            and I am a junior web developer with a passion for creating
            beautiful and functional websites. With experience in [list your
            skills or technologies],
          </h4>
          <h5 className='mb-2 mt-10 flex items-center justify-center gap-1 text-sm font-normal tracking-widest'>
            CONTACT ME <AiOutlineArrowDown className='animate-bounce' />
          </h5>
          <div className='bg-primary-50 border-primary-400 mb-5 flex h-12 w-full items-center justify-center gap-8 rounded-xl border-2 bg-opacity-60 py-7 sm:mx-auto sm:w-96'>
            <AiFillGithub
              size={28}
              onClick={() => {
                window.location.href = 'https://www.github.com/syed-45';
              }}
              cursor='pointer'
            />
            <AiOutlineLinkedin
              size={28}
              onClick={() => {
                window.location.href = 'https://linkedin.com/in/syed-haque1';
              }}
              cursor='pointer'
            />
            <MdOutlineAlternateEmail
              size={28}
              onClick={() => {
                window.location.href = 'mailto:haque_45@hotmail.co.uk';
              }}
              cursor='pointer'
            />
            <Link href='tel:+447767233450'>
              <MdCall size={28} cursor='pointer' />
            </Link>
          </div>
        </main>
        <About />
      </div>
    </Layout>
  );
}
