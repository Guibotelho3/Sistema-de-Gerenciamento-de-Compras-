import React from 'react';
import './product9.css';

const Product9 = () => (
  <div className="product-container">
    <div className="product-images">
      <img className="large-image" src="/imagens/produto9f1.jpg" alt="Produto 9 - Foto 1" />
      <img className="large-image" src="/imagens/produto9f2.jpg" alt="Produto 9 - Foto 2" />
      <img className="large-image" src="/imagens/produto9f3.jpg" alt="Produto 9 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Xiaomi P2961 - Headphone sem fio</h1>
      <p>Bluetooth 5.3, fone de ouvido para Samsung, iPhone, estéreo, fone de ouvido HIFI</p>
      <div className="product-price">
        R$ 90,00
      </div>
      <div className="product-info">
        <h2>Informações Gerais</h2>
        <ul>
          <li>Modelo: P2961</li>
          <li>Número de chaves: 84 chaves</li>
          <li>Material: Plástico</li>
          <li>Assistente de voz embutido: Sim</li>
          <li>Alcance sem fio máximo: &lt;10m</li>
          <li>Tecnologia NFC: Não</li>
          <li>Isolamento de som: Sim</li>
          <li>Categoria: Fones de ouvido & fones de ouvido</li>
          <li>Tipo de fones de ouvido: Semi-aberto</li>
          <li>Número de controladores: 2</li>
          <li>Método de carregamento: Cabo</li>
          <li>Material das almofadas de fone de ouvido: Espuma macia</li>
          <li>Tipo de ímã: Neodímio</li>
          <li>Diâmetro do driver: 30mm</li>
          <li>Faixa de impedância: Até 32Ω</li>
          <li>Versão Bluetooth: 5.3</li>
          <li>Lista de pacotes: Cabo de carregamento</li>
          <li>Características: Com microfone</li>
          <li>Com microfone: Sim</li>
          <li>Sem fio: Sim</li>
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

export default Product9;