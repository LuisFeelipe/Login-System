import React, {useState} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button"
import * as C from "./styles";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const {signup} = useAuth();

    const handleSignUp = () => {
        if(!email | !emailConf | !senha){
            setError("Preencha todos os campos");
            return;
        }else if(email !== emailConf){
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if(res){
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }

    return(
        <C.Container>
            <C.Label>Login System</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]} 
                />
                <Input
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="Digite a sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]} 
                />
                <C.labelError>{error}</C.labelError>
                <Button text="Entrar"  onClick={handleSignUp}/>
                <C.LabelSignIn>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignIn>
            </C.Content>
        </C.Container>
    )
}

export default SignUp;