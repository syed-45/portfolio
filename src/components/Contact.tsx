import React, { useRef, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Link from 'next/link';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { MdCall, MdOutlineAlternateEmail } from 'react-icons/md';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_3fj4tgw',
          'template_ji6jmub',
          form.current,
          'cLNs_K8dpVBrgQd0J'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section
      id='contact'
      className='from-light-green mb-10 mt-10 flex flex-col justify-center rounded-xl bg-gradient-to-tr px-7 py-20 shadow-xl drop-shadow-sm sm:px-20'
    >
      <h2 className='mb-10'>Contact Me</h2>
      <div className=' mb-5 flex h-12 w-full items-center justify-center gap-8 rounded-xl bg-opacity-60 py-7 sm:mx-auto sm:w-96'>
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col justify-center gap-2'
      >
        <label>Name</label>
        <input
          title='Name'
          type='text'
          name='user_name'
          className='bg-primary-50 border-primary-400 w-full rounded-xl border-2 bg-opacity-60 sm:mx-auto'
        />
        <label>Email</label>
        <input
          title='Email'
          type='email'
          name='user_email'
          className='bg-primary-50 border-primary-400 w-full rounded-xl border-2 bg-opacity-60 sm:mx-auto'
        />
        <label>Message</label>
        <textarea
          title='Message'
          name='message'
          className='bg-primary-50 border-primary-400 h-[300px] w-full rounded-xl border-2 bg-opacity-60 sm:mx-auto'
        />
        <button
          type='submit'
          value='Send'
          className='bg-primary-50 border-primary-400 mt-2 w-full rounded-xl border-2 bg-opacity-60 py-4 sm:mx-auto sm:w-96'
        >
          Send
        </button>
      </form>
    </section>
  );
};
