import { useEffect, useState } from "react";
import classes from "./MainContent.module.css";

import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import CustomNotification from "../UI/CustomNotification";
import Button from "../UI/Button";

const notifyCustomFn = (title, text, confirmFn) => {
  return function () {
    let custom = (
      <CustomNotification text={text} title={title} onConfirm={confirmFn} />
    );

    Store.addNotification({
      //We put our component with styles here
      content: custom,
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        showIcon: true,
      },
    });
  };
};

const MainContent = (props) => {
  const { message, option } = props.customSettings;

  const [result, setResult] = useState("it's initial value!");

  useEffect(() => {
    if (props.isFile && props.fileName) {
      setResult(props.fileName);
    } else if (message && !props.isFile) {
      setResult(message);
    }
  }, [message, props.fileName]);

  const onConfirm = (text) => {
    const formattedStr = text.slice(0, text.length - 1) + "!";
    setResult(formattedStr);
  };

  const fileShow = () => {
    setResult(document.title);
  };

  const optionShowHandler = () => {
    setResult(`current option - ${option}`);
  };

  return (
    <div className={classes.main}>
      <h2> lab 3 GUI</h2>
      <div className={classes.center}>
        <Button
          onClick={notifyCustomFn(
            "Confirmation",
            "Yes, No, Cancel?",
            onConfirm
          )}
        >
          Yes, No, Cancel
        </Button>
        <Button
          onClick={notifyCustomFn(
            "Confirmation",
            "Abort, Retry, Ignore?",
            onConfirm
          )}
        >
          Abort, Retry, Ignore
        </Button>
      </div>
      <Button onClick={props.onFileOpen}>File Open</Button>
      <div className={classes.center}>
        <Button onClick={props.onCustomOpen}>Custom dialog</Button>
        <Button disabled={!Boolean(option)} onClick={optionShowHandler}>
          Which option
        </Button>
      </div>
      <div className={classes.result}>
        <p> Dialog result: </p>
        <p>{result}</p>
      </div>
      <Button onClick={props.onClose}>Exit</Button>
    </div>
  );
};

export default MainContent;
