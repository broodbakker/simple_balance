import Papa from "papaparse";
import { useState } from "react";
import fileNameTolabelName from "../utils/fileNameToLabelName";
import FileReaderView from "./fileReaderView";
import { BankNotes } from "../interfaces";

type Props = {
  sendBankNotes: any;
};

const fileReader: React.FunctionComponent<Props> = ({ sendBankNotes }) => {
  const [bankNotes, setBankNotes] = useState<string[]>([""]);
  const hasInput = bankNotes != [""];
  const [error, setError] = useState<string>("");

  const FromFileToArray = (fileText: string) => {
    return new Promise(resolve => {
      Papa.parse(fileText, {
        complete: ({ data }: any) => {
          resolve(data);
          return data;
        }
      });
    });
  };
  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    labelName: any
  ) => {
    fileNameTolabelName(e.target.value, labelName);
    return new Promise(resolve => {
      const fileReader = new FileReader();
      if (e.target.files && e.target.files[0]) {
        fileReader.readAsText(e.target.files[0]);
      }
      fileReader.onload = async (event: any) => {
        const fileText: string = event.target.result;
        const array: any = await FromFileToArray(fileText);
        if (csvValidation(array) === "") {
          setBankNotes(array);
          return array;
        } else {
          setError(csvValidation(array));
        }
      };
      fileReader.onerror = (event: any) => {
        alert(event.target.error.name);
      };
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    sendBankNotes(bankNotes);
  };

  return (
    <FileReaderView
      handleSubmit={handleSubmit}
      handleFile={handleFile}
      hasInput={hasInput}
      error={error}
    />
  );
};

const csvValidation = (bankNotes: any) => {
  // check bankNotes = array
  if (typeof bankNotes != "object") return "something wrong with the data";

  //check if bankNotes has less then 1000 banknotes
  if (bankNotes.length > 1000) return "to many data points";

  const bankNotesCheck = bankNotes.filter((bankNote: any) => {
    // check bankNote = array
    typeof bankNote != "object";

    //check if data is string and not more then 100 characters
    const bankNoteCheck = bankNote.filter((data: any) => {
      typeof data != "string" || data.length > 100;
    });
    bankNoteCheck.length != 0;
  });
  if (bankNotesCheck.length != 0) return "something wrong with the data";
  return "";
};

export default fileReader;
