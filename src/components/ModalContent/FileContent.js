import { useState } from "react";
import Button from "../UI/Button";

import classes from "./FileContent.module.css";

const FileContent = (props) => {
  const [selectedFile, setSelectedFile] = useState();

  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    props.onTransferFile(selectedFile.name);
    props.onClose();
  };

  const onCancel = () => {
    props.onTransferFile("");
    props.onClose();
  };

  return (
    <div className={classes.wrapper}>
      <h2> File picker </h2>

      <input type="file" name="file" onChange={changeHandler} />

      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>

          <p>Filetype: {selectedFile.type}</p>

          <p>Size in bytes: {selectedFile.size}</p>

          <p>
            lastModifiedDate:{" "}
            {new Date(selectedFile.lastModified).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}

      <div className={classes.buttons}>
        <Button onClick={handleSubmission}> Attach </Button>
        <Button onClick={onCancel}> Cancel </Button>
      </div>
    </div>
  );
};

export default FileContent;
