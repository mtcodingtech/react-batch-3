// function Title(props) {
//     console.log(props)
//     return <h1>{props.name}</h1>
// }

// function Title({name}) {
//     return <h1>{name}</h1>
// }

function Title(props) {
  const { name, price } = props;
  const style = { color: "blue", background: "#fff", padding: "3rem" };
  return (
    <>
      <h1 className="heading2">{name}</h1>
      <p style={style}>{price || "$20"}</p>
    </>
  );
}

export default Title;
