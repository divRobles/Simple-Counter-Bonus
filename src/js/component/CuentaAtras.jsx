import React, { useState } from "react";
import "../../styles/Counter.css";
import "../../styles/CuentaAtras.css";

const CuentaAtras = ({ funcion }) => {
	const [numero, setNumero] = useState("");

	const input = document.querySelector(".input-cuenta-atras");

	const numeroCuentaAtras = (e) => {
		if (!isNaN(e.key)) {
			setNumero((numeroo) => (numeroo += e.key));
		} else if (isNaN(e.key)) {
			if (e.key === "Enter") {
				enviarCuentaAtras();
				e.target.value = "";
			}
		}
	};

	const enviarCuentaAtras = (e) => {
		console.log("hola", numero);
		if (numero && !isNaN(numero)) {
			if (numero.length > 6) {
				alert("El número debe tener 6 dígitos como máximo");
				setNumero("");
			} else if (numero.length <= 6) {
				funcion(numero);
				setNumero("");
			}
		} else {
			alert("debes escribir un numero");
			setNumero("");
		}
		input.value = "";
	};

	return (
		<>
			<div className="conteiner-cuenta-atras">
				<div className="row row-cuenta-atras">
					<div className="col-10 p-0">
						<input
							onKeyDown={numeroCuentaAtras}
							type="text"
							className="input-cuenta-atras"
							placeholder="Numero para cuenta atrás"
						/>
					</div>
					<div className="col-2 p-0 ">
						<div
							onClick={enviarCuentaAtras}
							className="d-flex justify-content-center submit-cuenta-atras">
							Enviar
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CuentaAtras;
