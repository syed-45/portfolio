export const About = (): JSX.Element => {
  return (
    <section
      id='about'
      className='min-h-3/4 from-verdigris mt-10 flex flex-col justify-center rounded-xl bg-gradient-to-tr px-7 py-20 shadow-xl drop-shadow-sm sm:px-20 '
    >
      <h2 className='mb-10'>About me</h2>
      <p>
        "Hello, I'm [Your Name], a passionate and skilled [Your Profession].
        With a background in [relevant background or education], I am dedicated
        to creating innovative solutions and pushing the boundaries of
        technology. I thrive on challenges and enjoy collaborating with teams to
        deliver impactful projects. My journey in [Your Profession] has allowed
        me to develop expertise in [mention key skills or areas of
        specialization].
        <br></br>
        <br></br>I have a strong foundation in [mention relevant programming
        languages or tools] and am always eager to expand my knowledge by
        exploring emerging technologies. Throughout my career, I have worked on
        [mention notable projects or experiences] where I have honed my skills
        in [mention specific areas of expertise]. I am adept at [mention
        relevant technical skills or methodologies] and have a keen eye for
        detail when it comes to delivering high-quality code.
      </p>
    </section>
  );
};
