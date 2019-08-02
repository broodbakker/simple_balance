import { BankNotes } from "../../interfaces";
import Column from "./bankNotesColumn";

type UserColumnProps = {
  title: string;
  column: string[];
  bankNotes: BankNotes;
};

const UserColumn: React.FunctionComponent<UserColumnProps> = ({
  title,
  column,
  bankNotes
}) => (
  <Column
    key={title}
    dataInColumn={column.map(IDs => bankNotes[IDs])}
    title={title}
    color={["#46B2E8", "white"]}
    icon="faBolt"
  />
);

export default UserColumn;
