import { useState } from "react";
import Button from "../UI/Button";

import classes from "./CustomContent.module.css";

const CustomContent = (props) => {
  const [radioValue, setRadioValue] = useState("");
  const [messageValue, setMessageValueChange] = useState("");

  const transferData = () => {
    props.onClose();
    props.onTransferData({
      message: messageValue,
      option: radioValue,
    });
  };

  const onCancel = () => {
    props.onTransferData({ message: "", option: "" });
    props.onClose();
  };

  const onRadioValueChange = (event) => {
    setRadioValue(event.target.value);
  };

  const onMessageValueChange = (event) => {
    setMessageValueChange(event.target.value);
  };

  return (
    <div className={classes.main}>
      <h2> Custom window creator </h2>
      <div className={classes.input}>
        <label> Enter message </label>
        <input
          type="text"
          placeholder="Enter your message"
          onChange={onMessageValueChange}
          value={messageValue}
        />
      </div>

      <div className={classes.actions}>
        <div
          className={classes.inputs}
          onChange={onRadioValueChange}
          value={radioValue}
        >
          <div className={classes.radio}>
            <label htmlFor="option1">Option1</label>
            <input id="option1" type="radio" value="Option1" name="option" />
          </div>
          <div className={classes.radio}>
            <label htmlFor="option2">Option2</label>
            <input id="option2" type="radio" value="Option2" name="option" />
          </div>
          <div className={classes.radio}>
            <label htmlFor="option3">Option3</label>
            <input id="option3" type="radio" value="Option3" name="option" />
          </div>
          <div className={classes.radio}>
            <label htmlFor="option4">Option4</label>
            <input id="option4" type="radio" value="Option4" name="option" />
          </div>
        </div>
        <div className={classes.buttons}>
          <Button onClick={transferData}>OK</Button>
          <Button onClick={onCancel}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomContent;
