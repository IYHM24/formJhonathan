import React from 'react'
import { Imagenes } from '../config/URL';

export const Modal = () => {
    console.log(Imagenes);
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Promociones vigentes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-wrap justify-content-center">
                        {
                            Imagenes && Imagenes.length > 0 && Imagenes.map((producto) => (
                                <div className="mx-2 my-2 text-center">
                                    <img src={producto.link} alt="error" width="160px" />
                                    <p>{producto.titulo}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
