import React from 'react';
import './product1.css';

const Product1 = () => {
  return (
    <div className="product-container">
      <div className="product-images">
        <img className="product-image" src="/imagens/produto1f1.jpg" alt="Produto 1 - Foto 1" />
        <img className="product-image" src="/imagens/produto1f2.jpg" alt="Produto 1 - Foto 2" />
        <img className="product-image" src="/imagens/produto1f3.jpg" alt="Produto 1 - Foto 3" />
      </div>
      <div className="product-details">
        <h1>Teclado Mecânico Gamer</h1>
        <p>Teclado Mecânico Gamer com Interruptores Jerrzi e Outemu</p>
        <div className="product-price">
          R$ 150,00
        </div>
        <div className="product-buttons">
          <button className="buy-button">Comprar</button>
          <button className="cart-button">Adicionar ao Carrinho</button>
        </div>
        <div className="product-info">
          <h2>Informações Gerais</h2>
          <ul>
            <li>Comprimento do fio: aproximadamente 1.5m</li>
            <li>Sistema do apoio MAC/Win</li>
            <li>Dispositivo tablet bit gaming teclado esports</li>
          </ul>
          <h2>Sobre o interruptor:</h2>
          <h3>Interruptor amarelo: Interruptor linear amarelo Jerrzi</h3>
          <ul>
            <li>Força operacional: 45 ± 10g</li>
            <li>Pré-viagem: 2.0 ± 0.4mm</li>
            <li>Viagem total: 3.7 ± 0.4mm</li>
          </ul>
          <h3>Interruptor prateado: Interruptor Jerrzi Silver Linear</h3>
          <ul>
            <li>Força operacional: 45 ± 10g</li>
            <li>Pré-viagem: 1.2 ± 0.4mm</li>
            <li>Viagem total: 3.4 ± 0.4mm</li>
          </ul>
        </div>
        <div className="product-review">
          <h2>Avaliação do Produto</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= 4 ? 'star filled' : 'star'}
              >
                &#9733;
              </span>
            ))}
          </div>
          <textarea
            className="comment-box"
            placeholder="Deixe seu comentário aqui..."
          />
          <button className="submit-button">Enviar Avaliação</button>
        </div>
      </div>
    </div>
  );
};

export default Product1;