import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from "./styles";
import useAuth from "../../hooks/useAuth"
import Button from '../../components/Button';

const Home = () => {
	const { signout } = useAuth();
	const navigate = useNavigate();

	return (
		<C.Container>
			<C.Title>Home</C.Title>
			<Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
				Sair
			</Button>
		</C.Container>
	)
}

export default Home