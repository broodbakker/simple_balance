import { BankNote, ModifyObject } from "../interfaces";

//filter balance income and spending
const FilterBankNotes = (query: BankNote[], bool: boolean) => {
  const filtered = query.filter(({ balance }) => balance === bool);
  return structureBankNotes(filtered);
};

// turn db data in object for dragging purposes
const structureBankNotes = (query: BankNote[]) => {
  const ModifyObject = modifyObject();
  query.map(props => {
    ModifyObject.set(props);
    ModifyObject.setTitles();
    ModifyObject.setColumns();
    ModifyObject.setTotals();
    ModifyObject.setBankNotes();
  });
  return ModifyObject.get();
};

const TitlesInDatabase = (query: BankNote[]) => {
  const ModifyObject = modifyObject();
  query.map(props => {
    ModifyObject.set(props);
    ModifyObject.setTitles();
  });
  return ModifyObject.get();
};

const modifyObject = () => {
  let data: ModifyObject = {
    titles: [],
    columns: {},
    totals: [],
    bankNotes: {},
    bankNote: { id: "", date: "", price: 0, description: "", balance: true }
  };
  return Object.assign(data, functions(data));
};

const functions = ({
  bankNotes,
  totals,
  columns,
  titles,
  bankNote: { id, date, price, description, balance }
}: ModifyObject) => ({
  set: (bankNoteReceived: BankNote) =>
    ({ id, date, price, description, balance } = bankNoteReceived),
  get: () => ({ totals, titles, columns, bankNotes }),
  setTitles: () =>
    (titles =
      titles.length === 0
        ? [description]
        : !titles.includes(description)
        ? [...titles, description]
        : [...titles]),
  setTotals() {
    const index: number = titles.indexOf(description);
    if (typeof totals[index] === "number") {
      totals.splice(index, 1, totals[index] + price);
      return;
    }
    totals.splice(index, 1, price);
  },
  setBankNotes: () =>
    (bankNotes[id] = { id, date, price, description, balance }),
  setColumns: () => {
    if (!columns[description]) {
      columns[description] = [id];
      return;
    }
    columns[description].push(id);
  }
});

export default FilterBankNotes;
export { structureBankNotes, TitlesInDatabase };
