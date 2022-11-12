import { Card, LinkContainer } from "./styles";

const ProjectCard = ({ imgSrc, title, previewLink, codeLink }) => {
  return (
    <Card>
      <img className="project-img" src={imgSrc} alt="" />
      <h2 className="project-title" id={title}>
        {title}
      </h2>
      <LinkContainer>
        <a
          className={`preview-link ${
            previewLink.length === 0 && "disabled-link"
          }`}
          href={previewLink}
          target="_blank"
        >
          Preview
        </a>
        <a className="project-code-link" href={codeLink} target="_blank">
          Code
        </a>
      </LinkContainer>
    </Card>
  );
};

export default ProjectCard;
