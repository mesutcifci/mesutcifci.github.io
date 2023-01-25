import { skillsConstants } from "../../constants/skillContants";
import { Container, Icon, IconWrapper } from "./styles";

const Skills = () => {
  return (
    <Container>
      <h1 className="main-heading">Tech Stack</h1>
      <IconWrapper>
        {skillsConstants.map((item) => (
          <Icon
            href={item.url}
            title={item.name}
            key={item.name}
            target="_blank"
          >
            {item.icon}
          </Icon>
        ))}
      </IconWrapper>
    </Container>
  );
};

export default Skills;
