export const logoStyle = {
  width: 200,
  height: 200,
  margin: 20,
};

export const btnStyle = (isMobile) => {
  return {
    background: isMobile ? "blue" : "red",
    padding: 20,
  };
};
