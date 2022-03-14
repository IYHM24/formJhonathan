import React from 'react'
/* import { useWhatsapp } from '../../Hooks/useWhatsapp' */
import { useState } from 'react';
import Form from './Form';
import { Notify } from '../Notify';
import Swal from 'sweetalert2'

export const PCForm = () => {

    const [Handle, setHandle] = useState({
        name: "",
        email: "",
        cel: "",
        product: "",
    })


    const handeInputChange = (e) => {
        console.log(e.target.id);
        setHandle({
            ...Handle,
            [e.target.id]: e.target.value,
        })
    }

    const useWhatsapp = (e) => {
        e.preventDefault();
        console.log(Handle);
        MSJ();
    }


    const MSJ = () => {
        let numero = "3006895242"
        console.log('Datos para enviar: ', JSON.stringify(Handle));
        Swal.fire({
            title: 'Paso 2: Whatsapp',
            text: `A continuacion sige los pasos para enviar el mensaje si estas por whatsapp web clickea donde dice whatsapp web (Recomendamos que tengas abierto ya el whatsapp)
            `,
            icon: 'sucess',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'corregir'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(`https://api.whatsapp.com/send?phone=57${numero}&text=%0ASOY%0ACLIENTE%0AINTERESADO%0A ${JSON.stringify(Handle)}`);;
            }
        })
    }


    return (
        <form className="mt-5 shadow container p-5 d-flex flex-column d-none d-lg-block w-25" onSubmit={useWhatsapp}>
            <Notify />
            <Form handeInputChange={handeInputChange} />
        </form>
    )
}
