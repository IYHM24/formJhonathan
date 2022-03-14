import React from 'react'

export const Notify = () => {
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Recomendacion!</strong> Manten abierto Whatsapp web para enviar el mensaje.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
