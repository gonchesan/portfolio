import React, { useState } from "react";

import "../styles/components/projectPicker.scss";
import "../styles/components/projectCard.scss";

import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

const ProjectPicker = ({ projectsData }) => {
  const [project, setProject] = useState();
  function selectProject(index) {
    setProject(projectsData.find((project) => project.id === index));
  }
  return (
    <div className="project-picker">
      <div className="project-picker__container">
        <div className="project__view">
          {project ? <ProjectCard projectData={project} /> : <EmptyState />}
        </div>
        <div className="project__selector">
          <div className="picker">
            <h3 className="picker__title">More Recently Updated</h3>
            <p className="picker__caption">In case you may have missed it.</p>
            <ul className="picker__list">
              {projectsData.map((project) => {
                return (
                  <li
                    key={project.id}
                    className="picker__item"
                    onClick={() => selectProject(project.id)}
                  >
                    <img className="block__image" loading="lazy" />
                    <div>
                      <header>
                        <h5 className="clamp one-line text-sm">
                          {project.title}
                        </h5>
                        <time className="ml-2 flex-shrink-0 text-3xs leading-none text-grey-600">
                          {project.date}
                        </time>
                      </header>

                      <p className="">{project.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPicker;
