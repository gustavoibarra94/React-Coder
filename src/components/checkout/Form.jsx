
import './form.css'

const Form =({datosForm, guardarDatosInput, enviarOrden})=>{
    return (
        <div className= "form">
            <form onSubmit={enviarOrden}>
                <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required/>

                <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" value={datosForm.apellido} onChange={guardarDatosInput} required/>

                <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefonoo" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} required/>

                <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} required/>

                <label htmlFor="emailRepetido">Repetir e-mail</label>
                    <input type="email" id="emailRepetido" name="emailRepetido" value={datosForm.emailRepetido} onChange={guardarDatosInput} required/>

                <button type="submit">Enviar</button>
            </form>
        </div>       
    )
}

export default Form;