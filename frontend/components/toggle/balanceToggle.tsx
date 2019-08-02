import { Select } from "../../blocks/form/select";

type Props = {
  setToggle(arg1: string): void;
  options: string[];
};

const balanceToggle: React.FunctionComponent<Props> = ({
  setToggle,
  options
}) => <Select data={options} handleClick={setToggle} />;

export default balanceToggle;
