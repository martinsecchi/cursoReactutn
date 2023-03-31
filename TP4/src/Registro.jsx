import react, { Component } from "react";
class Registro extends Component {
  render() {
    return (
       <div>
        <h1>Registro</h1>
        <form>
          <label for>
          Nombre:
            <input type="text" />
          </label>

          <label for>
          Apellido:
            <input type="text" />
          </label>

          <label for>
          Email:
            <input type="text" />
          </label>

          <label for>
          Password:
            <input type="text" />
          </label>

          <label for>
          Confirmar password:
            <input type="text"/>
          </label>
        </form>

        </div>
    );
  }
}

export default Registro;
