// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

// El componente Item:
// ESTADO: Item no necesita manejar un estado.
// MÉTODOS: Item no requiere de métodos.
// PROPS: Item recibe como props el método para modificar la plataforma favorita y su respectivo nombre como contenido.

export default function Item({ plataforma, setFavorita }) {
  return (
    <li>
      <button
        onClick={() => setFavorita(plataforma)}
        style={{ backgroundColor: "#90EE90",
          color: "black",
          border: "none",
          borderRadius: "10px",
          padding: "0",
          cursor: "pointer",
          margin: "0",
          width: "100%",
          outline: "none",
        }}  
      >
        {plataforma}
      </button>
    </li>
  );
}