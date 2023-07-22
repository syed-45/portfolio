import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
export interface ProjectProps {
  imageSrc: StaticImageData;
  siteURL: string;
  githubRepo: string;
  title: string;
}

import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Project = (props: ProjectProps): JSX.Element => {
  return (
    <div className='relative'>
      {/* The image */}
      <Image
        className='h-72 w-full rounded-xl object-cover object-top'
        src={props.imageSrc}
        alt='Image'
      />

      {/* The overlay layer */}
      <div className='absolute inset-0 rounded-xl bg-gradient-to-tr from-black'></div>

      {/* The overlay content */}
      <div className='absolute inset-0 mb-7 ml-7 flex items-end justify-start'>
        <h2 className='text-4xl font-bold text-white'>{props.title}</h2>
      </div>

      <div className='absolute inset-0 mr-7 mt-7 flex items-start justify-end gap-8'>
        <Link href={props.githubRepo}>
          <AiFillGithub
            className='border-spacing-3 rounded-xl border-2 border-black backdrop-blur'
            size={70}
          />
        </Link>
        <Link href={props.siteURL} target='_blank'>
          <FaExternalLinkAlt size={60} />
        </Link>
      </div>
    </div>
  );
};
