import React, { useState } from 'react';
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin = () => {
	const { signin } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = () => {
		if (!email | !password) {
			setError("Preencha todos os campos");
			return;
		}

		const res = signin(email, password);

		if (res) {
			setError(res);
			return;
		}

		navigate("/home");
	};

	return (
		<C.Container>
			<C.Label>SISTEMA DE LOGIN</C.Label>
			<C.Content>
				<Input
					type="email"
					placeholder="Digite o seu E-mail"
					value={email}
					onChange={(event) => [setEmail(event.target.value), setError("")]}
				/>
					<Input
					type="password"
					placeholder="Digite a sua Senha"
					value={password}
					onChange={(event) => [setPassword(event.target.value), setError("")]}
				/>
				<C.labelError>{error}</C.labelError>
				<Button Text="Entrar" onClick={handleLogin} />
				<C.LabelSignup>
					Não tem uma conta?
					<C.Strong>
						<Link to="/signup">&nbsp;Registre-se</Link>
					</C.Strong>
				</C.LabelSignup>
			</C.Content>
		</C.Container>
	)
}

export default Signin