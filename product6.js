import React from 'react';
import './product6.css';

const Product6 = () => {
  return (
    <div className="product-container">
      <div className="product-images">
        <img className="large-image" src="/imagens/produto6f1.jpg" alt="Produto 6 - Foto 1" />
        <img className="medium-image" src="/imagens/produto6f2.jpg" alt="Produto 6 - Foto 2" />
        <img className="medium-image" src="/imagens/produto6f3.jpg" alt="Produto 6 - Foto 3" />
      </div>
      <div className="product-details">
        <h1>Logitech G305 - Mouse sem fio</h1>
        <p>Mouse Gamer Sem Fio Logitech G305 LIGHTSPEED com 6 Botões Programáveis e Até 12.000 DPI</p>
        <div className="product-price">
          R$ 70,00
        </div>
        <div className="product-buttons">
          <button className="buy-button">Comprar</button>
          <button className="cart-button">Adicionar ao Carrinho</button>
        </div>
        <div className="product-info">
          <h2>Informações Gerais</h2>
          <ul>
            <li>Marca: Logitech G</li>
            <li>Fabricante: Logitech</li>
            <li>Série: 910-005281</li>
            <li>Certificação: ANATEL: 8991103229; 8171803229</li>
            <li>Cor: Preto</li>
            <li>Altura do Produto: 11,7 centímetros</li>
            <li>Largura do Produto: 38,2 milímetros</li>
            <li>Interface de Comunicação: Com fio</li>
            <li>Tecnologia de Conexão: Wi-Fi</li>
            <li>Quantidade de Botões: 6</li>
            <li>Número de Portas USB 2.0: 1</li>
          </ul>
        </div>
        <div className="product-review">
          <h2>Avaliação do Produto</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= 2 ? 'star filled' : 'star'}
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

export default Product6;