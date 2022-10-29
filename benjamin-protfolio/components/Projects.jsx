import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItem from './ProjectItem';
import youTube from "../public/youTube.png";
import spotifyApp from "../public/spotifyApp.png";
import gameApp from "../public/gameApp.png";
import chat from "../public/chat.png";

const Projects = () => {
  const projects = [
    {title: 'Youtube App',img:youTube,link:'/youTube',tech:'React JS'},
    // {title: 'SpotifyApp App',img:spotifyApp,link:'/spotifyApp',tech:'React JS'},
    // {title: 'chat App',img:chat,link:'/chat',tech:'Next JS'},
    {title: 'Bullets-pop-game',img:gameApp,link:'/GameApp',tech:'JS'},
  ]
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-teal-400'>
          Projects
        </p>
        <h2 className='py-4 dark:text-white'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {
            projects.map((project,i)=>(

              <ProjectItem
              key={i}
                title={project.title}
                backgroundImg={project.img}
                projectUrl={project.link}
                tech={project.tech}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
