import React from 'react';
import './product4.css';

const Product4 = () => (
  <div className="product-container">
    <div className="product-images">
      <img src="/imagens/produto4f1.jpg" alt="Produto 4 - Foto 1" />
      <img src="/imagens/produto4f2.jpg" alt="Produto 4 - Foto 2" />
      <img src="/imagens/produto4f3.jpg" alt="Produto 4 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Delux-M600 Mouse sem fio para jogos</h1>
      <p>Macro Mice recarregável para PC Gamer, leve, conexão de modo duplo, 2.4G, 49g, PMW3325</p>
      <div className="product-price">
        R$ 200,00
      </div>
      <div className="product-buttons">
        <button className="buy-button">Comprar</button>
        <button className="cart-button">Adicionar ao Carrinho</button>
      </div>
      <div className="product-info">
        <h2>Informações Gerais:</h2>
        <ul>
          <li>Micro Switch: Huanou Pink Dot Microswitches com 80 milhões de cliques Lifetime</li>
          <li>MCU: BK 3633</li>
          <li>Polling taxa: 1000 HZ</li>
          <li>Sensibilidade máxima: 10000DPI</li>
          <li>Velocidade máxima: 100IPS</li>
          <li>Capacidade da Bateria: 300mAh</li>
          <li>Botões: 7</li>
        </ul>
        <h2>Detalhes</h2>
        <ul>
          <li>Nome da Marca: Delux</li>
          <li>Modelo de Sensor: Pixart 3325 (5000 DPI | 100 IPS | 20G)</li>
          <li>DPI: 10000</li>
          <li>Modo de Operação: Opto-eletrônico</li>
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
              className={star <= 5 ? 'star filled' : 'star'}
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

export default Product4;