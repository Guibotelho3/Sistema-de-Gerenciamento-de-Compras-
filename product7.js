import React from 'react';
import './product7.css';

const Product7 = () => (
  <div className="product-container">
    <div className="product-images">
      <img className="small-image" src="/imagens/produto7f1.jpg" alt="Produto 7 - Foto 1" />
      <img src="/imagens/produto7f2.jpg" alt="Produto 7 - Foto 2" />
      <img src="/imagens/produto7f3.jpg" alt="Produto 7 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Fifine SFH6 SuperFrame Edition - Headset Gamer</h1>
      <p>Headset Gamer 7.1 Surround Drivers 50mm USB Branco</p>
      <div className="product-price">
        R$ 40,00
      </div>
      <div className="product-buttons">
        <button className="buy-button">Comprar</button>
        <button className="cart-button">Adicionar ao Carrinho</button>
      </div>
      <div className="product-info">
        <h2>Informações Gerais</h2>
        <ul>
          <li>Marca: Fifine x SuperFrame</li>
          <li>Modelo: SFH6 Headset Gamer Fifine SuperFrame Edition</li>
          <li>Cor: Branco</li>
          <li>Iluminação: RGB</li>
          <li>Microfone: Omnidirecional</li>
          <li>Drivers: 50mm</li>
          <li>7.1 Virtual Surround: Sim</li>
          <li>Plug & Play: Sim</li>
          <li>Compatibilidade: Windows, PS4 / PS5, MAC OS</li>
          <li>Tipo de controle: Controle em linha</li>
          <li>Peso do produto: 500 Gramas</li>
          <li>Plataforma de hardware: PC</li>
          <li>Número de unidades: 1</li>
          <li>Formato do microfone: Destacável</li>
          <li>Tecnologia de microfone: Omnidirecional</li>
          <li>Tipo de fonte de energia: Elétrico com fio</li>
          <li>Baterias inclusas: Não</li>
          <li>Funciona com baterias: Não</li>
          <li>Tipo de material: Couro Plástico</li>
          <li>Tipo de produto: Sobre a orelha</li>
        </ul>
      </div>
      <div className="product-review">
        <h2>Avaliação do Produto</h2>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= 3 ? 'star filled' : 'star'}
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

export default Product7;