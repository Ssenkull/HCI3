const Button = ({ onClick, children, disabled }) => {
  return (
    <button disabled={disabled} className="button-39" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
