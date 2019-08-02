import { InputFile } from "../blocks/blocks";
import styled from "styled-components";
import { FlexContainer, FlexChild, Button1 } from "../blocks/blocks";

type PropsView = {
  handleSubmit: any;
  handleFile: any;
  hasInput: boolean;
  error: string;
};

const Container = styled(FlexContainer)`
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  width: 400px;
`;

const data = ["audi", "lambogine", "ferrari", "mercedess"];

const color = ["red", "blue", "green", "purple"];
const FileReaderView: React.FunctionComponent<PropsView> = ({
  handleSubmit,
  handleFile,
  hasInput,
  error
}) => (
  <>
    <Container>
      <InputFile handleFile={handleFile}>choose a file...</InputFile>
      <form onSubmit={handleSubmit}>
        <Button1 hasInput={hasInput}>submit</Button1>
        {error != "" && <div> error</div>}
      </form>
    </Container>
  </>
);

export default FileReaderView;
