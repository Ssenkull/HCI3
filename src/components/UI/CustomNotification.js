import classes from "./CustomNotification.module.css";

const CustomNotification = ({ title, text, onConfirm }) => {
  return (
    <div className={classes.wrapper}>
      {title && <p>{title}</p>}
      {text && <p>{text}</p>}
      <div className={classes.buttons}>
        <button className="button-39" onClick={onConfirm.bind(null, text)}>
          OK
        </button>
        <button className="button-39"> Cancel </button>
      </div>
    </div>
  );
};

export default CustomNotification;
