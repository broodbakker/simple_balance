import { FlexContainer, H5 } from "../../blocks/blocks";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "../buttons";

const color = ["red", "blue", "green", "purple"];

const Container = styled.div`
  width: 300px;
  position: relative;
`;

type PropsSelectedElement = {
  bgColor?: any;
};

const SelectedElement = styled(FlexContainer)<PropsSelectedElement>`
  position: relative;
  color: var(--color);
  background-color: var(--bg-color);
  padding: var(--padding);
  border-radius: var(--radius);
  -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  overflow-y: auto;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 0.2rem;
  z-index: 5;
  width: 100%;
`;

const FaRotate = styled(FontAwesomeIcon)<PropsFaStyle>`
  color: ${props => props.color};
  margin-right: 0.5rem;
`;

const FaDynamic = styled(FontAwesomeIcon)<PropsFaStyle>`
  margin-right: 0.5rem;
  color: white;
  z-index: 1;
  position: absolute;
  bottom: 0;
  height: 0%;
  ${({ previousHover }) =>
    previousHover
      ? `
        top: 0;
  `
      : `
        bottom: 0;
  `}
`;

const FaStatic = styled(FontAwesomeIcon)<PropsFaStyle>`
  position: relative;
  color: ${props => props.color};
  z-index: 0;
`;

type PropsStyledSubmitButton = { toggleData?: any };

const Items = styled.div<PropsStyledSubmitButton>`
  position: absolute;
  transform-origin: top;
  background-color: rgba(242, 241, 239, 1);
  border-radius: 0.25rem;
  opacity: 0;
  transform: translateY(-60px);
  width: 100%;
  transition: 0.5s ease;
  visibility: hidden;
  ${({ toggleData }) =>
    toggleData &&
    `
      opacity: 1;
  transform: translateY(0);
  visibility: visible;
  `}
`;

type PropsItem = {
  color?: string;
  selectedHover?: boolean;
  previousHover?: any;
};

type PropsItemBackground = {
  previousHover?: any;
  bgColor?: any;
  color?: any;
};

const ItemBackground = styled.div<PropsItemBackground>`
  width: calc(100% + 1rem);
  left: -1rem;
  position: absolute;
  background-color: ${props => props.color || props.bgColor || "red"};
  bottom: 0;
  height: 0%;
  z-index: -1;
  transition: 0.5s ease;
  ${({ previousHover }) =>
    previousHover
      ? `
        top: 0;
  `
      : `
        bottom: 0;
  `}
`;

const Item = styled.div<PropsItem>`
  position: relative;
  padding: 0.5rem 0;
  padding-left: 1rem;
  cursor: pointer;
  background-color: ${props => props.selectedHover && props.color};
  color: ${props => props.selectedHover && "white"};
  &:hover {
    color: white;
    transition-duration: 0.5s;
  }

  &:hover ${FaDynamic} {
    height: 100%;
    transition: 0.8s ease;

    ${({ previousHover }) =>
      previousHover
        ? `
      bottom: 0;
    top: auto;
  `
        : `
      top: 0;
    bottom: auto;
  `}
  }

  &:hover ${ItemBackground} {
    height: 100%;

    ${({ previousHover }) =>
      previousHover
        ? `
      bottom: 0;
    top: auto;
  `
        : `
      top: 0;
    bottom: auto;
  `}
  }
`;

type PropsFaStyle = {
  rotate?: number;
  opacity?: number;
  color?: string;
  translateY?: any;
  selectedHover?: any;
  previousHover?: any;
};

//data, colors,icons,background color
const Select = ({
  data,
  colors = [],
  icons = false,
  bgColor = false,
  handleClick
}: any) => {
  const [toggleItems, setToggleItems] = useState<any>(false);
  const [itemOnHover, setItemOnHover] = useState<any>();
  const [previousHover, setPreviousHover] = useState<any>(false);
  const [selectedElement, SetselectedElement] = useState<any>(
    "Select an option"
  );

  const handleMouseEnter = (e: any, index: any) => {
    if (itemOnHover - index === 1) setPreviousHover(true);
    else setPreviousHover(false);
    setItemOnHover(index);
  };
  return (
    <StyledButton>
      <Container>
        <SelectedTitle
          toggleData={toggleItems}
          selectedElement={selectedElement}
          setToggleData={setToggleItems}
          bgColor={bgColor}
        />
        <Items toggleData={toggleItems}>
          {data.map((item: any, index: any) => {
            const selectedHover = item === selectedElement;
            return (
              <Item
                color={colors[index]}
                onMouseEnter={e => handleMouseEnter(e, index)}
                onMouseOut={e => setItemOnHover(false)}
                onClick={() => {
                  SetselectedElement(item);
                  handleClick(item);
                }}
                selectedHover={selectedHover}
                previousHover={previousHover}
              >
                {icons && (
                  <>
                    <FaDynamic
                      icon={faBolt}
                      color={color[index]}
                      previousHover={previousHover}
                    />
                    <FaStatic color={color[index]} icon={faBolt} />{" "}
                  </>
                )}
                {item}
                <ItemBackground
                  color={colors[index]}
                  previousHover={previousHover}
                  bgColor={bgColor}
                />
              </Item>
            );
          })}
        </Items>
      </Container>
    </StyledButton>
  );
};

const SelectedTitle = ({
  toggleData,
  selectedElement,
  setToggleData,
  bgColor
}: any) => (
  <SelectedElement onClick={() => setToggleData(!toggleData)} bgColor={bgColor}>
    <H5>{selectedElement}</H5>
    <RotatedArrow toggleData={toggleData} />
  </SelectedElement>
);

const RotatedArrow = ({ toggleData }: any) => (
  <Motion
    defaultStyle={{ rotate: 0, opacity: 0.5 }}
    style={{
      rotate: spring(toggleData ? 180 : 0),
      opacity: spring(toggleData ? 1 : 0.5)
    }}
  >
    {(style: any) => (
      <FaRotate
        icon={faChevronUp}
        rotate={style.rotate}
        opacity={style.opacity}
        style={{
          transform: `rotate(${style.rotate}deg)`,
          opacity: style.opacity
        }}
      />
    )}
  </Motion>
);

export { Select };
