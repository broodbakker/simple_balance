import styled from "styled-components";

const CardStyle = styled.img`
  width: ${props => props.width}rem;
  height: auto;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
`;

type Props = {
  image: string;
  width: string;
};

const Image: React.FunctionComponent<Props> = ({ image, width }) => {
  const src = `static/${image}.jpg`;
  return (
    <CardStyle className="responsive-img" alt="" src={src} width={width} />
  );
};

export { Image };
