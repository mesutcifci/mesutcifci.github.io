import {
    CardItem,
    CardContentContainer,
    CardContent,
    CardImageContainer,
    ArticleImg,
    TitleContainer,
    Title,
    LinkContainer,
    MediumLinkOption,
    ContentDetailOption,
    CardOpenLink,
  } from "./style";

function Card({ id, title, imgLink, mediumLink }) {

    return (
      <CardItem>
        <CardContentContainer>
          <CardContent layoutId={`card-container-${id}`}>
            <CardImageContainer layoutId={`card-image-container-${id}`}>
              <ArticleImg src={imgLink} alt="" />
            </CardImageContainer>
  
            <TitleContainer layoutId={`title-container-${id}`}>
              <Title>{title}</Title>
            </TitleContainer>
  
            <LinkContainer>
              <MediumLinkOption href={mediumLink} target="_blank">
                Go to Medium
              </MediumLinkOption>
  
              <ContentDetailOption id={id}>
                <CardOpenLink to={`/article-page/${id}`}>Detail</CardOpenLink>
              </ContentDetailOption>
            </LinkContainer>
          </CardContent>
        </CardContentContainer>
      </CardItem>
    );
  }
  
  export default Card;