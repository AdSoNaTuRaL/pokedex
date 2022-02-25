const capitalize = (name) => {
  let capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return capitalized;
}

export default capitalize;