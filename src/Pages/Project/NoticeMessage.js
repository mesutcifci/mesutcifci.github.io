import { Message } from "./styles";

const NoticeMessage = ({ filteredProject }) => {
  return (
    <Message>
      According to your selections, {filteredProject.length} projects were
      found.
    </Message>
  );
};

export default NoticeMessage;
