

export const Datalist = ({lista, mostrarobj }) => {
 
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Edicion</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>
                  <button
                    onClick={() => mostrarobj(el)}
                    className="btn btn-success">
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
};
