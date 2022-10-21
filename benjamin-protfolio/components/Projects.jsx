import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItem from './ProjectItem';
import youTube from "../public/youTube.png";
import spotifyApp from "../public/spotifyApp.png";
import gameApp from "../public/gameApp.png";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 dark:text-white'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Youtube App'
            backgroundImg={youTube}
            projectUrl='/youTube'
            tech='React JS'
          />
          <ProjectItem
            title='SpotifyApp App'
            backgroundImg={spotifyApp}
            projectUrl='/SpotifyApp'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Bullets-pop-game'
            backgroundImg={gameApp}
            projectUrl='/GameApp'
            tech='JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
