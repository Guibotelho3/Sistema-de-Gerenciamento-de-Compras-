import React from 'react';
import { Link } from 'react-router-dom';
import './comprafinalizada.css';

const CompraFinalizada = () => {
  return (
    <div className="compra-finalizada-container">
      <div className="compra-finalizada-content">
        <span className="check-emoji">✅</span>
        <h1>Sua compra foi finalizada com sucesso!</h1>
        <p>Obrigado por comprar conosco. Esperamos vê-lo novamente em breve!</p>
        <Link to="/">
          <button className="voltar-button">Voltar à Página Inicial</button>
        </Link>
      </div>
    </div>
  );
};

export default CompraFinalizada;