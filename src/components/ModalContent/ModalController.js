import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import CustomContent from "./CustomContent";
import FileContent from "./FileContent";
import MainContent from "./MainContent";

const ModalController = (props) => {
  const [isMainShowed, setIsMainShowed] = useState(true);
  const [isCustomShowed, setIsCustomShowed] = useState(false);
  const [isFileShowed, setIsFileShowed] = useState(false);
  const [customData, setCustomData] = useState({ message: "", option: "" });
  const [fileName, setFileName] = useState("");
  const [isFile, setIsFile] = useState(false);

  const manageCustomWindows = () => {
    setIsMainShowed((curState) => !curState);
    setIsCustomShowed((curState) => !curState);
  };

  const manageFileWindows = () => {
    setIsMainShowed((curState) => !curState);
    setIsFileShowed((curState) => !curState);
  };

  const getData = (data) => {
    setIsFile(false);
    setCustomData(data);
  };

  const getFile = (file) => {
    setIsFile(true);
    setFileName(file);
  };

  const showMainConditions = isMainShowed && !isCustomShowed;
  const showCustomConditions = !isMainShowed && isCustomShowed;
  const showFileConditions = !isMainShowed && isFileShowed;

  return (
    <Modal onClose={props.onClose}>
      {showMainConditions && (
        <MainContent
          isFile={isFile}
          customSettings={customData}
          fileName={fileName}
          onCustomOpen={manageCustomWindows}
          onFileOpen={manageFileWindows}
          onClose={props.onClose}
        />
      )}
      {showCustomConditions && (
        <CustomContent onTransferData={getData} onClose={manageCustomWindows} />
      )}

      {showFileConditions && (
        <FileContent onTransferFile={getFile} onClose={manageFileWindows} />
      )}
    </Modal>
  );
};

export default ModalController;
