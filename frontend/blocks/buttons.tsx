import styled from "styled-components";
import { lighten, darken } from "polished";
import PropTypes from "prop-types";

//custom import
import { Link } from "./blocks";

type PropsButton = {
  full?: string;
  color: string;
  lighten: string;
};
const ButtonStyle = styled.button<PropsButton>`
  font-size: ${props => props.theme.fontSize.S};
  width: ${props => props.full && "100%"};
  margin: auto 0;
  padding: ${props => props.theme.spacing.S} ${props => props.theme.spacing.M};
  border-radius: ${props => props.theme.borderRadius.S};
  color: #fff;
  transition: background-color 0.2s ease-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  :hover {
  }
  border: 0;
  cursor: pointer;
`;

type PropsInput = {
  full?: string;
  color?: string;
  lighten: string;
  theme: string;
};

const InputStyle = styled.input<PropsInput>`
  width: ${props => props.full && "100%"};
  margin: auto 0;
  padding: ${props => props.theme.spacing.S} ${props => props.theme.spacing.M};
  border-radius: ${props => props.theme.borderRadius.S};
  font-size: ${props => props.theme.fontSize.S};
  color: #fff;
  transition: background-color 0.2s ease-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border: 0;
  cursor: pointer;
`;

type Props = {
  submit: string;
  color: string;
  href: string;
  value: string;
  lighten: string;
};

const Button: React.FunctionComponent<Props> = ({
  submit,
  color,
  href,
  children,
  value,
  lighten
}) => {
  if (submit) {
    return (
      <InputStyle color={color} type="button" value={value} lighten={lighten} />
    );
  } else if (href) {
    return (
      <Link href={href}>
        <ButtonStyle color={color} lighten={lighten}>
          {children}
        </ButtonStyle>
      </Link>
    );
  }
  return (
    <ButtonStyle color={color} lighten={lighten}>
      {children}
    </ButtonStyle>
  );
};

const StyledButton = styled.div`
  --bg-color: #df474d;
  --color: white;
  --padding: var(--spacingXS) var(--spacingS);
  --radius: var(--borderRadiusXS);
  --mg-rgt-icon: var(--spacingXS);
`;

type PropsStyledSubmitButton = {
  hasInput: boolean;
};

const StyledSubmitButton = styled.button<PropsStyledSubmitButton>`
  color: var(--color);
  display: inline-block;
  cursor: pointer;
  background-color: var(--bg-color);
  padding: var(--padding);
  border-radius: var(--radius);
  &:hover {
    background-color: red;
  }
  ${({ hasInput }) =>
    !hasInput &&
    `
    opacity: 0.65;
    cursor: not-allowed;
  `}
`;

type propsButton1 = {
  hasInput: boolean;
};

const Button1: React.FunctionComponent<propsButton1> = ({
  children,
  hasInput
}) => (
  <StyledButton>
    <StyledSubmitButton type="submit" disabled={!hasInput} hasInput={hasInput}>
      {children}
    </StyledSubmitButton>
  </StyledButton>
);

export { Button, Button1, StyledButton };
