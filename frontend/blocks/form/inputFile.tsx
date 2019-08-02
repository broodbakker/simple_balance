import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../buttons";

const Input = (props: props) => {
  let textInput: any = null;
  return (
    <StyledInput
      onChange={(e: any) => props.handleFile(e, textInput)}
      type="file"
      id="file"
      accept=".csv"
      ref={(input: any) => {
        textInput = input;
      }}
    />
  );
};

const StyledInput = styled.input`
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  &:focus + label {
    background-color: red;
    outline: calc(var(--spacingS, 10px) * 0.1) dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

const Label = ({ children }: any) => (
  <StyledLabel htmlFor="file">{children}</StyledLabel>
);
const StyledLabel = styled.label`
  color: var(--color);
  display: inline-block;
  cursor: pointer;
  background-color: var(--bg-color);
  padding: var(--padding);
  border-radius: var(--radius);
  &:hover {
    background-color: red;
  }
  * {
    pointer-events: none;
  }
`;

const Icon = (props: any) => <FaStyle icon={props.icon} />;
const FaStyle = styled(FontAwesomeIcon)`
  margin-right: var(--mg-rgt-icon);
`;

const StyledInputFile = styled(StyledButton)`
  --mg-rgt-icon: var(--spacingXS);
`;

type props = {
  children: string;
  handleFile: (
    e: React.ChangeEvent<HTMLInputElement>,
    labelName: HTMLElement
  ) => any;
};

const InputFile = (props: props) => (
  <StyledInputFile>
    <Input {...props} />
    <Label>
      <Icon icon={faUpload} />
      {props.children}
    </Label>
  </StyledInputFile>
);

export { InputFile };
