import useToggle from "../hooks/useToggle";
import "../styles/components/projectCard.scss";
import CalendarIcon from "../assets/icons/Calendar.jsx";
import LinkExternalIcon from "../assets/icons/LinkExternal";
import WebsiteIcon from "../assets/icons/Website";
import useVisibility from "../hooks/useVisibility";

const ProjectCard = ({ projectData }) => {
  const { title, description, pages, date, status, repo, website, tags, img } =
    projectData;
  const [showMore, setShowMore] = useToggle();
  const [isOpen, cardRef] = useVisibility(50);

  return (
    <div ref={cardRef} className={`card${isOpen ? "--active" : ""}`}>
      <div className="card__aside">
        <span className="card__status">
          <i></i>
          {status}
        </span>
        <img className="card__image" src={img} alt={title} />
      </div>
      <div className="card__header">
        <p className="card__title" title={title}>
          {title}
        </p>
        <span className="card__date">
          <CalendarIcon />
          {date}
        </span>
      </div>
      <div className="card__body">
        <span className="card__description">
          {showMore ? description : `${description.substring(0, 105)}...`}
        </span>
        <button className="button--toggle" onClick={setShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
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
        <a href={repo} target="_blank" className="card__button--secondary">
          View repo
          <LinkExternalIcon />
        </a>
        <a href={website} target="_blank" className="card__button--primary">
          Visit website
          <WebsiteIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
