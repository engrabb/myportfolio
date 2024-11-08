import React from 'react';
import RepoCard from '../components/RepoCard';
import './Projects.css';

const repos = [
  {
    title: "Refactoring",
    description: "School project where i was handed real messy code, which was refactored and cleaned up with exact same functionality in .NET",
    link: "https://github.com/engrabb/WebshopTestRefactoring"
  },
  {
    title: "Project 2",
    description: "A preview of a website for a cakery! Made in React",
    link: "https://github.com/engrabb/cakery"
  },
  {
    title: "Project 3",
    description: "An asset tracker for office enviroment, with a currency converter fetching exchange rates from an API. Made in .NET",
    link: "https://github.com/engrabb/LexiconMiniProject03"
  },
  {
    title: "Project 4",
    description: "A code test - my first experience in React. Also saves information from the webpage through a C# API down to a JSON file, loads information on restart and reload.",
    link: "https://github.com/engrabb/wizardworkTest"
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="repo-grid">
        {repos.map((repo, index) => (
          <RepoCard
            key={index}
            title={repo.title}
            description={repo.description}
            link={repo.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;