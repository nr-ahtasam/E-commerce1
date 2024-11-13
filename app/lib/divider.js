const Divider = (props) => {
  const { line, space } = props;

  console.log("margin", space);

  return <div className={`my-${space}`}></div>;
};

export default Divider;
