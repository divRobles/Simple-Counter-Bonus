import React, { useState, useEffect } from "react";
import "../../styles/Counter.css";
import CuentaAtras from "./CuentaAtras.jsx";

const Counter = ({}) => {
	const [counterUni, setcounterUni] = useState(0);
	const [intervalIdUni, setIntervalIdUni] = useState(0);
	const [direccion, setDireccion] = useState(false);
	const [temp, setTemp] = useState(999999);

	const funciones = {
		contarDesde0: function setCero(counter) {
			counter((prevcounter) =>
				prevcounter !== 999999
					? prevcounter + 1
					: (prevcounter = 999999999)
			);
		},
		cunetaRegresiva: function CuentaAtras(counter) {
			counter((prevcounter) =>
				prevcounter !== 0 ? prevcounter - 1 : (prevcounter = 0)
			);
		},
	};

	const startCount = () => {
		if ((!intervalIdUni && !direccion) || (direccion && counterUni === 0)) {
			intervalIdUni && clearInterval(intervalIdUni);
			const newIntervalIdUni = setInterval(() => {
				funciones.contarDesde0(setcounterUni);
			}, 1000);
			setIntervalIdUni(newIntervalIdUni);
		} else if (!intervalIdUni && direccion) {
			const newIntervalIdUni = setInterval(() => {
				funciones.cunetaRegresiva(setcounterUni);
			}, 1000);
			setIntervalIdUni(newIntervalIdUni);
		}
	};

	const stop = () => {
		if (intervalIdUni) {
			clearInterval(intervalIdUni);
			setIntervalIdUni(false);
			return;
		}
	};

	const reset = () => {
		clearInterval(intervalIdUni);
		setIntervalIdUni(false);
		setcounterUni(0);
		return;
	};

	const paAtras = () => {
		setDireccion(true);
		const newIntervalIdUni = setInterval(() => {
			funciones.cunetaRegresiva(setcounterUni);
		}, 1000);
		setIntervalIdUni(newIntervalIdUni);
	};

	const temporazirador = useEffect(() => {
		console.log("counter", counterUni);
		console.log("temp", temp);
		temp == counterUni &&
			setTimeout(() => {
				alert("JIBIRI");
			}, 100);
	});

	const enviarAlerta = (numero) => {
		setTemp(numero);
	};

	const enviarCuentaAtras = (numero) => {
		intervalIdUni && clearInterval(intervalIdUni);
		setcounterUni(numero);
		paAtras();
	};

	const mostarNumero = () => {
		let digitos = counterUni.toString().length;
		if (digitos === 1) {
			return `00000${counterUni}`;
		} else if (digitos === 2) {
			return `0000${counterUni}`;
		} else if (digitos === 3) {
			return `000${counterUni}`;
		} else if (digitos === 4) {
			return `00${counterUni}`;
		} else if (digitos === 5) {
			return `0${counterUni}`;
		} else if (digitos === 6) {
			return `${counterUni}`;
		}
	};

	window.addEventListener("load", () => {
		startCount();
	});

	return (
		<>
			<div className="container-inputs">
				<CuentaAtras
					funcion={enviarCuentaAtras}
					placehold={`Número para la cuenta atrás`}></CuentaAtras>
				<CuentaAtras
					funcion={enviarAlerta}
					placehold={`Número para alerta`}></CuentaAtras>
			</div>
			<div className="botone">
				<button className="b1" onClick={startCount}>
					Start
				</button>
				<button className="b2" onClick={stop}>
					Stop
				</button>
				<button className="b3" onClick={reset}>
					Reset
				</button>
			</div>
			<div className="counter-container">
				<div className="contenedor-numero">
					<p>{mostarNumero()}</p>
				</div>
			</div>
		</>
	);
};

export default Counter;
