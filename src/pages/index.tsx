import Link from 'next/link';
import * as React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { MdCall, MdOutlineAlternateEmail } from 'react-icons/md';

import { About } from '../components/About';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

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
      <ResponsiveNavbar />
      <div className='relative mx-5 max-w-screen-xl pt-10 sm:mx-auto sm:w-4/5 '>
        <main className='min-h-3/4 from-tea-green flex w-full flex-col justify-center rounded-xl bg-gradient-to-tr px-7 pt-20 shadow-xl drop-shadow-sm sm:px-20'>
          <h1 className='text-3xl font-bold tracking-tighter text-neutral-800 sm:text-5xl'>
            Syed Haque,{' '}
            <span className='underline decoration-green-500'>
              Full-Stack Developer
            </span>{' '}
            👨‍💻
          </h1>

          <p className='mb-5 mt-10  italic text-neutral-700'>Hello 👋🏽</p>
          <p className='mb-20 text-neutral-700'>
            Welcome to my portfolio website where you can found out more about
            me and check out the projects I have worked on!
          </p>

          <div className=' mb-5 flex h-12 w-full items-center justify-center gap-8 rounded-xl py-7 sm:mx-auto sm:w-96'>
            <Link href='https://www.github.com/syed-45'>
              <AiFillGithub size={28} cursor='pointer' />
            </Link>
            <Link href='https://linkedin.com/in/syed-haque1'>
              <AiOutlineLinkedin size={28} cursor='pointer' />
            </Link>
            <Link href='mailto:haque_45@hotmail.co.uk'>
              <MdOutlineAlternateEmail size={28} cursor='pointer' />
            </Link>
            <Link href='tel:+447767233450'>
              <MdCall size={28} cursor='pointer' />
            </Link>
          </div>
        </main>
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
