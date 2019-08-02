import styled from "styled-components";

const Container = styled.div`
  margin: ${props => props.theme.spacing.S};
  label {
    font-size: ${props => props.theme.fontSize.M};
  }
`;

const Textarea = styled.textarea`
  width: calc(100%);
  border: none;
  font-size: ${props => props.theme.fontSize.S};
  background-color: #f2f2f2;
  border-radius: ${props => props.theme.borderRadius.M};
  height: 10em;
  padding: ${props => props.theme.spacing.XS};
  :focus {
  }
  &::-webkit-input-placeholder {
  }
`;

type Props = {
  htmlFor: string;
  color: string;
  placeholder: string;
};

const TextareaForm: React.FunctionComponent<Props> = ({
  htmlFor,
  color,
  placeholder,

  children
}) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{children}</label>
      <Textarea color={color} placeholder={placeholder} />
    </Container>
  );
};

export { TextareaForm as Textarea };
