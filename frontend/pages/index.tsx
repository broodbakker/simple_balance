import { useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { BankNote } from "../interfaces";
import DbToObjectFilter, {
  structureBankNotes,
  TitlesInDatabase
} from "../utils/dbToObject";

import BankNotesView from "../components/bankNotes/bankNotesView";
import InputUser from "../components/inputUser";

import bankNotesFilter from "../utils/bankNotesFilter";
import UserFilterBankNotes from "../components/toggle";

//query data
const BANKNOTES_QUERY = gql`
  {
    datas {
      date
      description
      price
      balance
      id
    }
  }
`;

//typescript
type BankNotes_Query = {
  loading?: boolean;
  error?: { message: string };
  data: { datas: BankNote[] };
};

//query all data in db
const QueryBankNotesDB = () => (
  <Query query={BANKNOTES_QUERY}>
    {({ loading, error, data: { datas } }: BankNotes_Query) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return <Main dbBankNotes={datas} />;
    }}
  </Query>
);

type Props = {
  dbBankNotes: BankNote[];
};

const Main: React.FunctionComponent<Props> = ({ dbBankNotes }) => {
  const titles: string[] = TitlesInDatabase(dbBankNotes).titles;

  const [filterBankNotes, setFilterBankNotes] = useState<any>([[""], [""], ""]);

  const FilteredBankNotes = bankNotesFilter(
    dbBankNotes,
    filterBankNotes[0],
    filterBankNotes[1],
    filterBankNotes[2]
  );

  const StructuredBankNotes = structureBankNotes(FilteredBankNotes);
  return (
    <>
      <InputUser />
      <UserFilterBankNotes
        setFilterBankNotes={setFilterBankNotes}
        titles={titles}
      />

      <BankNotesView StructuredBankNotes={StructuredBankNotes} />
    </>
  );
};

export default QueryBankNotesDB;
