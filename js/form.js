const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.nombre, e.target, 'usuario');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
	}
}

const campos = {
	usuario: false,
	correo: false
};

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (campos.usuario && campos.correo) {
		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activado');
		setTimeout(() => {
			document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activado');

		}, 4000);
	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo')
		setTimeout(() => {
			document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');

		}, 3000);
	}

});
