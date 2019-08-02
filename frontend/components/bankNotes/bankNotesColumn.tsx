import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import styled from "styled-components";

import BankNotesItem from "./bankNotesItem";
import Title from "./bankNotesTitle";
import { BankNote } from "../../interfaces";

const TaskList = styled.div`
  min-height: 100px;
`;

const Hello = styled(TaskList)`
  background-color: red;
`;

type PropsFlex = {
  surface: number;
  Ssurface?: number;
  Msurface?: number;
  Lsurface?: number;
};

const FlexChild = styled.div<PropsFlex>`
  flex-basis: ${props => props.surface}%;
  @media (min-width: ${props => props.theme.mediaQuery.S}) {
    flex-basis: ${props => props.Ssurface && props.Ssurface}%;
  }
  @media (min-width: ${props => props.theme.mediaQuery.M}) {
    flex-basis: ${props => props.Msurface && props.Msurface}%;
  }
  @media (min-width: ${props => props.theme.mediaQuery.L}) {
    flex-basis: ${props => props.Lsurface && props.Lsurface}%;
  }
`;

const ContainerColumn = styled(FlexChild)`
  padding: 0 0.5em;
  border-radius: 0.2em;
`;

const TotalContainer = styled.div`
  border: grey 1px solid;
  padding: 0.2em;
  display: flex;
  justify-content: center;
  margin-bottom: 0.2em;
`;

type Props = {
  dataInColumn: BankNote[];
  title: string;
  color: string[];
  icon: string;
};

const Column: React.FunctionComponent<Props> = ({ dataInColumn, title }) => (
  <ContainerColumn surface={50} Ssurface={33.3333} Msurface={16.666}>
    <Title title={title} />
    {dataInColumn && (
      <Droppable droppableId={title}>
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {dataInColumn.map((data, index) => {
              return <BankNotesItem key={data.id} data={data} index={index} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )}
  </ContainerColumn>
);

export default Column;
