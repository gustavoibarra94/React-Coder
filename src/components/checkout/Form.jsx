
const Form =({datosForm, guardarDatosInput, enviarOrden})=>{
    return (
        <div>
             <form onSubmit={enviarOrden}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput}/>

                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido" value={datosForm.apellido} onChange={guardarDatosInput}/>

                 <label htmlFor="telefono">Teléfono</label>
                 <input type="text" id="telefonoo" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>

                 <label htmlFor="email">e-mail</label>
                 <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput}/>

                  <button type="submit">Enviar</button>
            </form>
        </div>
       
    )
}

export default Form;