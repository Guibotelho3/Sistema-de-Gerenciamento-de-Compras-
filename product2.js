import React from 'react';
import './product2.css';

const Product2 = () => (
  <div className="product-container">
    <div className="product-images">
      <img className="product-image" src="/imagens/produto2f1.jpg" alt="Produto 2 - Foto 1" />
      <img className="product-image" src="/imagens/produto2f2.jpg" alt="Produto 2 - Foto 2" />
      <img className="product-image" src="/imagens/produto2f3.jpg" alt="Produto 2 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Epomaker Th80 - Teclado Mecânico Sem Fio Com Knob De Volume</h1>
      <p>Teclado mecânico, Interruptor linear, Hot-swappable, RGB, Bluetooth, Três modos, 2.4G, Com fio, 75 por cento</p>
      <div className="product-price">
        R$ 120,00
      </div>
      <div className="product-buttons">
        <button className="buy-button">Comprar</button>
        <button className="cart-button">Adicionar ao Carrinho</button>
      </div>
      <div className="product-info">
        <h2>Informações Gerais:</h2>
        <ul>
          <li>Modelo: EPOMAKER TH80-X</li>
          <li>Número de teclas: 79 teclas + 1 Knob</li>
          <li>Layout: 75% layout</li>
          <li>Conectividade: sem fio e com fio</li>
          <li>Bateria: 4000mAh</li>
          <li>Material da placa: ferro</li>
          <li>Teclas: Material PBT, perfil NAE (perfil personalizado)</li>
          <li>Material do case: ABS</li>
          <li>Hot-swappable: sim</li>
          <li>Camada inferior: silício</li>
          <li>Camada do meio: silicone</li>
          <li>Comprimento do cabo: aproximadamente 1.5m</li>
          <li>Conector: Tipo-C</li>
          <li>Sistema compatível: Win/macOS/Linux/Android/iOS</li>
          <li>Dimensão do teclado: 340*138*38mm</li>
          <li>Peso do teclado: sobre 1117g</li>
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

export default Product2;