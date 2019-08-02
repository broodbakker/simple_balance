import { BankNote } from "../interfaces";

const bankNotesFilter = (
  bankNotes: BankNote[],
  titleToggle: string[],
  dateToggle: string[],
  balanceToggle: string
) => {
  const filterTitle = bankNotes.filter(bankNote =>
    titleToggle.includes(bankNote.description)
  );
  const filterTitleDate = filterTitle.filter(
    bankNote => bankNote.date >= dateToggle[0] && dateToggle[1] >= bankNote.date
  );
  if (balanceToggle !== "all") {
    const c = balanceToggle === "plus";
    return filterTitleDate.filter(bankNote => bankNote.balance === c);
  }
  return filterTitleDate;
};

export default bankNotesFilter;
