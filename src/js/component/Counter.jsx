import React, { useState, useEffect } from "react";
import "../../styles/Counter.css";
// import inputCuentaAtras from "./InputCuentaAtras";
import CuentaAtras from "./CuentaAtras.jsx";
// import CuentaAtras from "./CuentaAtras";
// import aaa from "./aaa";
// import bbb from "./bbb";

const Counter = ({}) => {
	const [counterUni, setcounterUni] = useState(0);
	const [intervalIdUni, setIntervalIdUni] = useState(0);
	const [direccion, setDireccion] = useState(false);
	const [temp, setTemp] = useState(0);
	const [intervalTemp, setIntervalTemp] = useState(0);
	const [diferenciaTemp, setDiferenciaTemp] = useState(0);
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
		temporizador: function temporizar() {
			// setTemp((pre) => (pre = pre - counterUni));
			// temp === counterUni && console.log("ahhhh");
			// temp !== counterUni && console.log("nooo");
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

	const enviarAlerta = (numero) => {
		if (intervalTemp) {
			clearInterval(intervalTemp);
			setTemp(numero);
			console.log(temp);
		} else {
			setTemp(numero);
			const newIntervalITemp = setInterval(() => {
				funciones.temporizador();
			}, 1000);
			setIntervalTemp(newIntervalITemp);
			funciones.temporizador();
		}
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
			<CuentaAtras
				funcion={enviarCuentaAtras}
				placehold={`Número para la cuenta atrás`}
			/>
			{/* <CuentaAtras
				funcion={enviarAlerta}
				placehold={`Número para alerta`}
			/> */}
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
