import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const FaStyle = styled(FontAwesomeIcon)`
  color: ${props => props.color};
`;

const Test = styled.span`
  height: 30px;
  width: 30px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
`;

type Props = {
  title: string;
};

const Title: React.FunctionComponent<Props> = ({ title }) => (
  <h3>
    <Test color="blue">
      <FaStyle icon={faBolt} color="red" />
    </Test>
    {title}
  </h3>
);

export default Title;
