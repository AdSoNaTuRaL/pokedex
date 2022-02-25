const statsName = (stats) => {

  switch (stats) {
    case "hp":
      return ("HP");
    case "attack":
      return ("Attack");
    case "defense":
      return ("Defense");
    case "special-attack":
      return ("Sp. Attack");
    case "special-defense":
      return ("Sp. Defense");
    case "speed":
      return ("Speed");
    default:
      return stats;
  }

}

export default statsName;