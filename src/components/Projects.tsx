import { ProjectProps, Project } from '@/components/Project';
import dogBreedImg from 'public/images/dog_breed_voting.png';
import pasteBinImg from 'public/images/pastebin.png';
import studyResourcesImg from 'public/images/study_resources.png';

export const Projects = (): JSX.Element => {
  const projectData: ProjectProps[] = [
    {
      imageSrc: studyResourcesImg,
      siteURL: 'https://study-resources-catalogue.netlify.app/',
      githubRepo: 'https://github.com/syed-45/study-resource-catalog-c5c3',
      title: 'Study Resource Sharing App',
    },
    {
      imageSrc: dogBreedImg,
      siteURL: 'https://dogbreed-voting.netlify.app/',
      githubRepo: 'https://github.com/syed-45/c5b1-dog-breeds-front-end',
      title: 'Dog Breed Voting App',
    },
    {
      imageSrc: pasteBinImg,
      siteURL: 'https://pastebin-syed-keadeish.netlify.app/',
      githubRepo: 'https://github.com/keadeish/pastebin-front-end',
      title: 'Pastebin App',
    },
  ];
  return (
    <section
      id='projects'
      className=' from-tea-green mt-10 flex flex-col justify-center gap-10 rounded-xl bg-gradient-to-tr px-7 py-20 shadow-xl drop-shadow-sm sm:px-20 '
    >
      <h2>Projects</h2>
      <p className='italic'>
        Please note the data may take time to load on the sites...
      </p>
      {projectData.map((oneProject: ProjectProps, index): JSX.Element => {
        return <Project {...oneProject} key={index} />;
      })}
    </section>
  );
};
