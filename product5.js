import React from 'react';
import './product5.css';

const Product5 = () => (
  <div className="product-container">
    <div className="product-images">
      <img className="small-image" src="/imagens/produto5f1.jpg" alt="Produto 5 - Foto 1" />
      <img src="/imagens/produto5f2.jpg" alt="Produto 5 - Foto 2" />
      <img src="/imagens/produto5f3.jpg" alt="Produto 5 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Attack Shark - Mouse sem fio para jogos</h1>
      <p>Macro mouse para Jogos, R1, 18000dpi, 1000Hz, Conexão Tri-Mode, PAW3311</p>
      <div className="product-price">
        R$ 200,00
      </div>
      <div className="product-buttons">
        <button className="buy-button">Comprar</button>
        <button className="cart-button">Adicionar ao Carrinho</button>
      </div>
      <div className="product-info">
        <h2>Informações Gerais</h2>
        <ul>
          <li>Modelo do produto: R1</li>
          <li>Interface do produto tipo: USB Typo C</li>
          <li>Produto conexão método: USB, 2.4G. Bluetooth</li>
          <li>Frequência de Transmissão: 2402MHz-2480MHz</li>
          <li>Sensor óptico do produto: fase original PAW3311</li>
          <li>Taxa de reembolso (HZ): 125/250/500/1000 HZ (motorista ajustável)</li>
          <li>Frame taxa (IPS): 400IPS</li>
        </ul>
        <h2>Detalhes</h2>
        <ul>
          <li>Nome da Marca: Attack Shark</li>
          <li>Modelo de Sensor: PAW3311</li>
          <li>DPI: 18000</li>
          <li>Alimentação: Recarregável</li>
          <li>Número de Botões: 6</li>
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

export default Product5;