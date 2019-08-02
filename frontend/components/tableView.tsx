import uuidv4 from "uuid";
import styled from "styled-components";

const TableStyle = styled.div`
  margin: ${props => props.theme.spacing.L};
  padding: calc(2 * ${props => props.theme.spacing.L});
  border-radius: ${props => props.theme.borderRadius.L};
  display: block;
  overflow-x: auto;
  white-space: nowrap;
`;

type PropsThStyle = {
  clickedColumn: boolean;
};

const ThStyle = styled.div<PropsThStyle>`
  background-color: ${props => props.clickedColumn && "red"};
  line-height: 1.8;
  font-size: ${props => props.theme.fontSize.XS};
  -webkit-font-smoothing: antialiased;
  white-space: nowrap;
  margin: 0 2em;
`;

const TrStyle = styled.div`
  display: flex;
  margin: 1em 0;
`;

type PropsTable = {
  bankNotes: string[][];
  clickedColumns: number[];
  handleClick: (index: number) => void;
};

const TableView: React.FunctionComponent<PropsTable> = ({
  bankNotes,
  clickedColumns,
  handleClick
}) => (
  <TableStyle>
    {bankNotes.map((lineArray: any, index: any) => {
      if (index > 10) return;
      return (
        <TrStyle key={uuidv4()}>
          {lineArray.map((singleDataPoint: any, index: any) => {
            const clickedColumn: boolean = clickedColumns.includes(index);
            return (
              <ThStyle
                key={uuidv4()}
                onClick={() => handleClick(index)}
                clickedColumn={clickedColumn}
              >
                {singleDataPoint}
              </ThStyle>
            );
          })}
        </TrStyle>
      );
    })}
  </TableStyle>
);

export default TableView;
