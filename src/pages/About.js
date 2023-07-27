import React from 'react';
//import images
import KeenaA from '../img/about/KeenaA.png'
//import link
import {Link} from 'react-router-dom';

const About = () => {
  return <section>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={KeenaA} alt='image of woman' />
        </div>
        {/* text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-5 max-w-sm'>Keena Jackson is a passionate photographer, captures life's beauty through her lens. With an artist's eye, she immortalizes moments, evoking emotions with every frame. Her work embodies creativity, authenticity, and an unwavering love for the craft.
          <br />
          <br />
          Keena relies on industry-leading photography software to enhance her creations. Utilizing tools like <b>Adobe Lightroom</b> and <b>Photoshop</b>, she brings her images to life, adding depth, clarity, and a touch of magic.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work</Link>
      </div>
      </div>
    </div>
  </section>;
};

export default About;
