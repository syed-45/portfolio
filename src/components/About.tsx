export const About = (): JSX.Element => {
  return (
    <section
      id='about'
      className='min-h-3/4 from-light-green mt-10 flex flex-col justify-center gap-4 rounded-xl bg-gradient-to-tr px-7 py-20 shadow-xl drop-shadow-sm sm:px-20 '
    >
      <h2 className='mb-5'>About Me</h2>
      <p>
        I graduated with a degree in mathematics and statistics from Newcastle
        University 🎓🎓🎓
      </p>
      <p>
        I trained as a software engineer at Academy, covering full-stack
        fundamentals and modern technologies such as React, NodeJS, ExpressJS
        and PostgreSQL 👩‍💻👩‍💻👩‍💻
      </p>
      <p>
        At Academy, I completed a number of projects in teams, implementing
        agile methodolgies, CI/CD workflows as well as TDD 🧪🧪🧪
      </p>
      <p>I also have interests in football, running and hiking 🏔🏔🏔</p>
      <p>Check out my projects below 👇</p>
    </section>
  );
};
