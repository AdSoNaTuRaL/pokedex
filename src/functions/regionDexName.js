const regionDexName = (regionName) => {

  switch (regionName) {
    case "national":
      return ("National Dex");
    case "kanto":
      return ("Kanto Dex");
    case "original-johto":
      return ("Johto Dex (Gold, Silver and Crystal)");
    case "hoenn":
      return ("Hoenn Dex (Ruby, Sapphire and Emerald)");
    case "original-sinnoh":
      return ("Sinnoh Dex (Diamond and Pearl)");
    case "extended-sinnoh":
      return ("Sinnoh Dex (Platinum)");
    case "updated-johto":
      return ("Johto Dex (HeartGold and SoulSilver)");
    case "original-unova":
     return ("Unova Dex (Black and White)");
    case "updated-unova":
      return ("Unova Dex (Black 2 and White 2)");
    case "conquest-gallery":
      return ("Pokémon Conquest Gallery");
    case "kalos-central":
     return ("Central Kalos Dex");
    case "kalos-coastal":
      return ("Coastal Kalos Dex");
    case "kalos-mountain":
      return ("Mountain Kalos Dex");
    case "updated-hoenn":
      return ("Hoenn Dex (Omega Ruby and Alpha Sapphire)");
    case "original-alola":
      return ("Alola Dex (Sun and Moon)");
    case "original-melemele":
      return ("Melemele Dex (Sun and Moon)");
    case "original-akala":
     return ("Akala Dex (Sun and Moon)");
    case "original-ulaula":
      return ("Ula'ula Dex (Sun and Moon)");
    case "original-poni":
      return ("Poni Dex (Sun and Moon)");
    case "updated-alola":
     return ("Alola Dex (Ultra Sun and Ultra Moon)");
    default:
      return regionName;
  }

}

export default regionDexName;