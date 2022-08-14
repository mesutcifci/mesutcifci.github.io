import {
  CardItem,
  CardContentContainer,
  CardContent,
  CardImageContainer,
  TitleContainer,
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
            <CardOpenLink to={`/article-page/${id}`}>
              <img className="card-img" src={imgLink} alt="" />
            </CardOpenLink>
          </CardImageContainer>

          <TitleContainer layoutId={`title-container-${id}`}>
            <h2 className="card-title">{title}</h2>
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
