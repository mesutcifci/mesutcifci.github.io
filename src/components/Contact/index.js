import { contactConstants } from "../../constants/contactConstants";
import { colors } from "../../styles/globalStyles";
import { ContactContainer, ContactLink } from "./styles";

const variants = {
  hover: {
    scale: 1.8,
    color: colors.secondary,
  },
};

const Contact = () => {
  return (
    <ContactContainer>
      {contactConstants.map((contactConstant, index) => {
        return (
          <ContactLink
            key={index}
            href={contactConstant.contactLink}
            target="_blank"
            className={`${contactConstant.contactIcon}`}
            variants={variants}
            whileHover="hover"
          />
        );
      })}
    </ContactContainer>
  );
};

export default Contact;
