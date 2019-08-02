import { useState } from "react";
import { Select } from "../../blocks/blocks";

import TitlesToggleView from "./titlesToggleView";

type Props = {
  sendTitleToggle(arg1: string[]): void;
  options: string[];
};

const TitlesToggle: React.FunctionComponent<Props> = ({
  sendTitleToggle,
  options
}) => {
  const [title, setTitle] = useState("all");
  const [titles, setTitles] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // no duplicates
    if (titles.includes(title)) return;

    // if single item remove "all'
    if (titles.includes("all") && title != "all") {
      setTitles([title]);
      sendTitleToggle([title]);
      return;
    }
    // if "all" remove the rest
    if (title == "all") {
      setTitles([title]);
      sendTitleToggle([...options]);
      return;
    }
    setTitles([...titles, title]);
    sendTitleToggle([...titles, title]);
  };

  return (
    <>
      <Select data={options} handleClick={setTitle} />
      <TitlesToggleView
        sendTitles={setTitles}
        sendTitleToggle={sendTitleToggle}
        titles={titles}
      />
    </>
  );
};

export default TitlesToggle;
