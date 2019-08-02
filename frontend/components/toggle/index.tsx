import { useState, useEffect } from "react";

import BalancesToggle from "./balanceToggle";
import DatesToggle from "./dateToggle";
import TitlesToggle from "./titlesToggle";
import DateToday from "../../utils/formattedDate";

type Props = {
  titles: any;
  setFilterBankNotes: any;
};

const UserFilterBankNotes: React.FunctionComponent<Props> = ({
  titles,
  setFilterBankNotes
}) => {
  const [balanceToggle, setBalanceToggle] = useState("all");
  const [titleToggle, setTitleToggle] = useState<string[]>([...titles]);
  const [dateToggle, setDateToggle] = useState<string[]>([
    "1970-01-01",
    DateToday()
  ]);
  useEffect(() => {
    setFilterBankNotes([titleToggle, dateToggle, balanceToggle]);
  }, [balanceToggle, titleToggle, dateToggle]);
  return (
    <>
      <BalancesToggle setToggle={setBalanceToggle} options={["plus", "min"]} />
      <DatesToggle setDateToggle={setDateToggle} dateToggle={dateToggle} />
      <TitlesToggle sendTitleToggle={setTitleToggle} options={[...titles]} />
    </>
  );
};

export default UserFilterBankNotes;
