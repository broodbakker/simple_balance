import { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import FileReader from "./fileReader";
import Questions from "./questions";
import TransposeTable from "../utils/transposeTable";
import TableView from "./tableView";


const All_DATA_MUTATION = gql`
  mutation createData($date: String!, $price: Int!, $description: String!) {
    CreateData(date: $date, price: $price, description: $description) {
      price
    }
  }
`;

//creating new banknotes in db
const SendBankNotes = () => (
  <Mutation mutation={All_DATA_MUTATION}>
    {(sendBankNotes: any) => <InputUser sendBankNotes={sendBankNotes} />}
  </Mutation>
);

type Props = {
  sendBankNotes: any;
};

const InputUser: React.FunctionComponent<Props> = ({ sendBankNotes }) => {
  const [bankNotes, setBankNotes] = useState([]);
  const [clickedColumns, SetClickedColumns] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const questions: string[] = [
    "click on the file with the dates?",
    "what is the price?",
    "are you sure? click submit you cant go back"
  ];

  const handleClick = (index: number) => {
    if (clickedColumns.includes(index)) return; //error
    if (clickedColumns.length === 2) return; //error
    setCounter(counter + 1);
    SetClickedColumns([...clickedColumns, index]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    if (counter != 2) return; //error
    const TransposedBankNotes: string[][] = TransposeTable(bankNotes);
    const filteredTransposedBankNotes: string[][] = clickedColumns.map(
      clickedColumn => TransposedBankNotes[clickedColumn]
    );
    const filteredBankNotes: string[][] = TransposeTable(
      filteredTransposedBankNotes
    );

    filteredBankNotes.map(bankNote => {
      const date: string = bankNote[0];
      const price: number = parseInt(bankNote[1]);
      if (!price) return; //error
      const description = "undecided";
      sendBankNotes({ variables: { date, price, description } });
      setBankNotes([]);
      SetClickedColumns([]);
      setCounter(0);
    });
  };

  const returnClickedColumns = (): void => {
    if (counter === 0) return;
    setCounter(counter - 1);
    const replicaClickedColumn: number[] = Array.from(clickedColumns);
    replicaClickedColumn.pop();
    SetClickedColumns([...replicaClickedColumn]);
  };
  return (
    <>
      <FileReader sendBankNotes={setBankNotes} />
      {bankNotes.length != 0 && (
        <>
          <Questions index={counter} questions={questions} />
          <button
            onClick={(e: React.MouseEvent<HTMLElement>) => handleSubmit(e)}
          >
            submit
          </button>
          <button onClick={returnClickedColumns}>return</button>
          <TableView
            bankNotes={bankNotes}
            clickedColumns={clickedColumns}
            handleClick={handleClick}
          />
        </>
      )}
    </>
  );
};

export default SendBankNotes;
