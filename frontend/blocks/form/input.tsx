import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: ${props => props.theme.spacing.S};
  label {
    display: block;
    font-size: ${props => props.theme.fontSize.M};
  }
`;

type PropsInput = {
  surface: number;
  color: string;
};

const Input = styled.input<PropsInput>`
  font-size: ${props => props.theme.fontSize.S};
  width: ${props => props.surface}%;
  padding: ${props => props.theme.spacing.M} 0;
  border: none;
  background-color: transparent;
  padding-left: ${props => props.theme.spacing.XS};
  &::-webkit-input-placeholder {
  }
  :active {
    outline: none !important;
  }
  :focus {
    outline: none !important;
    padding-bottom: calc(${props => props.theme.spacing.M} - 0.1rem);
    /* counter border-bottom so that font stays on the same place */
  }
`;

type Props = {
  htmlFor: string;
  surface: number;
  color: string;
  placeholder: string;
};

const InputForm: React.FunctionComponent<Props> = ({
  htmlFor,
  surface,
  color,
  placeholder,
  children
}) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{children}</label>
      <Input surface={surface} color={color} placeholder={placeholder} />
    </Container>
  );
};

export { InputForm as Input };
