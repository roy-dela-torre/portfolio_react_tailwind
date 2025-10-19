import ProfileCard from '@/reacbits/ProfileCard/ProfileCard';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const Hero: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = useMemo(() => ["a WordPress Developer.", "a Shopify Developer.", "a Frontend Developer."], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);


  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center flex-wrap w-full">
        <div className="w-full md:w-7/12 md:pe-10">
          <p className="text-lg text-cyan-400 mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-100 mb-4">
            Roy De La Torre.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8 h-16 md:h-24">
            I'm {` `}<span className="border-r-2 border-r-cyan-400">{text}</span>
          </h2>
          <ProfileCard
            name="Roy De La Torre"
            title="Wordpress/Shoppify Developer"
            handle="roy"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/img/profile.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            className="block md:hidden mb-8"
            behindGradient=""
          />
          <p className="text-lg max-w-xl text-slate-400 mb-8">
            I'm a web developer specializing in building custom themes and applications on platforms like WordPress and Shopify. I'm focused on creating accessible, user-friendly digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center inline-block bg-cyan-500/30 backdrop-blur-sm border border-cyan-400 text-cyan-300 font-semibold py-3 px-8 rounded-md hover:bg-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Check out my work!
            </a>
            <a
              href="/Roy-De-La-Torre-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Roy-De-La-Torre-CV.pdf"
              className="w-full sm:w-auto text-center inline-block bg-transparent backdrop-blur-sm border border-slate-500 text-slate-300 font-semibold py-3 px-8 rounded-md hover:bg-slate-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full md:w-5/12 lg:ps-10 hidden md:block">
          <div className="image">
            <ProfileCard
              name="Roy De La Torre"
              title="Wordpress/Shoppify Developer"
              handle="roy"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/img/profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
              className=""
              behindGradient=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;