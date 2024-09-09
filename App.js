import { useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';
import './App.css';
import './firebase';

function App() {
  const[user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  // Alterna entre os modos de login e registro
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Criar Conta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGoogle /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
          </div>
          <span>ou use seu email para registro</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Registrar</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Entre</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGoogle /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
          </div>
          <span>ou use seu email registrado</span>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <a href="#">Esqueceu sua senha?</a>
          <button type="submit">Entre</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bem-Vindo Novamente!</h1>
            <p>Para manter conectado conosco, por favor entre com suas informações pessoais</p>
            <button className="hidden" onClick={handleToggle}>Login</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Olá Visitante!</h1>
            <p>Para manter conectado conosco, por favor se registre com suas informações pessoais</p>
            <button className="hidden" onClick={handleToggle}>Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
