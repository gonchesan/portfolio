import "../styles/components/ProjectCardMobile.scss";
import LinkExternalIcon from "../assets/icons/LinkExternal";
import WebsiteIcon from "../assets/icons/Website";

const ProjectCard = ({ projectData }) => {
  const { title, description, date, status, repo, website, tags, img } =
    projectData;

  return (
    <div className="project-card ">
      <div className="card__aside">
        <div className="card__overlay"></div>
        <span
          className={`card__status${
            status === "Completed" ? "--completed" : "--in-progress"
          }`}
        >
          <i></i>
          {status}
        </span>
        <img loading="lazy" className="card__image" src={img} alt={title} />
        <div className="card__header">
          <p className="card__title" title={title}>
            {title}
          </p>
          <p className="card__date">
            <span className="card__date-text">{date}</span>
            <span className="h-px bg-grey-800 card__date-decoration"></span>
          </p>
        </div>
      </div>
      <div className="card__body">
        <span className="card__description">{description}</span>

        <div className="badge__wrapper">
          {tags.map((tag) => (
            <div className="badge" key={tag.icon}>
              <img
                className="badge__icon"
                src={`../src/assets/icons/${tag.icon}.png`}
                alt={`${tag.text} icon`}
              />
              <span className="badge__text">{tag.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card__footer">
        <a href={website} target="_blank" className="card__button--primary">
          <WebsiteIcon />
          Visit website
        </a>
        <a href={repo} target="_blank" className="card__button--secondary">
          <LinkExternalIcon />
          View repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
