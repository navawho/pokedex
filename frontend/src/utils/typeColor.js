function typeColor(type) {
  switch(type) {
    case "Grama": return "#78C850";
    case "Fogo": return "#F08030";
    case "Água": return "#6890F0";
    case "Normal": return "#A8A878";
    case "Eletrico": return "#F8D030";
    case "Solo": return "#E0C068";
    case "Inseto": return "#A8B820";
    case "Voador": return "#A890F0";
    case "Veneno": return "#A040A0";
    case "Lutador": return "#C03028";
    case "Rocha": return "#B8A038";
    case "Gelo": return "#98D8D8";
    case "Dragão": return "#7038F8";
    case "Psíquico": return "#F85888";
    case "Fantasma": return "#705898";
    case "Sombrio": return "#705848";
    case "Metal": return "#B8B8D0";
    case "Fada": return "#EE99AC";
    default: return "#68A090";
  }
}

export default typeColor;