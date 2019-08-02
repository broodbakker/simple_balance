import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

//custom import
import BankNotesLogic from "./bankNotesLogic";
import UserColumn from "./userColumn";
import Column from "./bankNotesColumn";
import { Columns, BankNotes } from "../../interfaces";

const colors = [
  ["#08A977", "white"],
  ["#F0B64A", "white"],
  ["#46B2E8", "white"],
  ["#DB77DD", "white"]
];

const icons = ["faBolt", "faHome", "faSchool", "faCar"];

const Container = styled.div`
  padding: 1em;
  flex-wrap: wrap;
`;

type Props = {
  StructuredBankNotes: {
    bankNotes: BankNotes;
    totals: number[];
    columns: Columns;
    titles: string[];
  };
};

const BankNotesView: React.FunctionComponent<Props> = ({
  StructuredBankNotes
}) => {
  return (
    <BankNotesLogic {...StructuredBankNotes}>
      {(
        bankNotes: BankNotes,
        columns: Columns,
        onDragEnd: (result: DropResult) => void,
        total: number[],
        titles: string[]
      ) => (
        <Container>
          <DragDropContext onDragEnd={onDragEnd}>
            {columns.undecided && columns.undecided.length != 0 && (
              <UserColumn
                title={"undecided"}
                column={columns["undecided"]}
                bankNotes={bankNotes}
              />
            )}
            {titles.map((title, index) => {
              if (title === "undecided") return;
              const columnIDs = columns[title];
              const dataInColumn = columnIDs.map(IDs => bankNotes[IDs]);
              return (
                <Column
                  key={title}
                  dataInColumn={dataInColumn}
                  title={title}
                  color={colors[index]}
                  icon={icons[index]}
                />
              );
            })}
          </DragDropContext>
        </Container>
      )}
    </BankNotesLogic>
  );
};

export { BankNotesLogic };
export default BankNotesView;
