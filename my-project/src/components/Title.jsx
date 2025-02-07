// function Title(props) {
//     console.log(props)
//     return <h1>{props.name}</h1>
// }

// function Title({name}) {
//     return <h1>{name}</h1>
// }

function Title(props) {
  const { name, price } = props;
 
  return (
    <>
      <h1>{name}</h1>
      <p>{price || "$20"}</p>
    </>
  );
}

export default Title;
