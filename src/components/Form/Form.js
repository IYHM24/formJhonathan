import React from 'react'

const Form = ({ handeInputChange }) => {
    return (
        <>
            <div id="Title" className="mb-5">
                <h2>Hogar y movil</h2>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre y Apellidos</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handeInputChange} />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo electronico</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    onChange={handeInputChange} />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Celular</label>
                <input
                    type="text"
                    className="form-control"
                    id="cel"
                    onChange={handeInputChange} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Promocion</label>
                <input
                    type="text"
                    className="form-control"
                    id="product"
                    onChange={handeInputChange} />
                <small id="prouctHelp" class="form-text text-muted">Puedes ver las promociones en el icono de la cesta</small>
            </div>
            <button type="submit" className="mt-5 btn btn-primary">Submit</button>
        </>
    )
}

export default Form