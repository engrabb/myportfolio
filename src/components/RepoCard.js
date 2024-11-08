import React from 'react';
import './RepoCard.css';

const RepoCard = ({ title, description, link }) => {
  return (
    <div className="repo-card">
      <h3 className="repo-title">{title}</h3>
      <p className="repo-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="repo-link">View Repo</a>
    </div>
  );
};

export default RepoCard;