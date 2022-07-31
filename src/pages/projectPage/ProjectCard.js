import {
  Card,
  Img,
  Title,
  LinkContainer,
  PreviewLink,
  ProjectCodeLink,
} from "./styles";

const ProjectCard = ({imgSrc, title, previewLink, codeLink}) => {
  return (
    <Card>
      <Img src={imgSrc} alt="" />
      <Title id={title}>{title}</Title>
      <LinkContainer>
        <PreviewLink href={previewLink} target="_blank">
          Preview
        </PreviewLink>
        <ProjectCodeLink href={codeLink} target="_blank">
          Code
        </ProjectCodeLink>
      </LinkContainer>
    </Card>
  );
};

export default ProjectCard;
