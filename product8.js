import React from 'react';
import './product8.css';

const Product8 = () => (
  <div className="product-container">
    <div className="product-images">
      <img className="large-image" src="/imagens/produto8f1.jpg" alt="Produto 8 - Foto 1" />
      <img className="large-image" src="/imagens/produto8f2.jpg" alt="Produto 8 - Foto 2" />
      <img className="large-image" src="/imagens/produto8f3.jpg" alt="Produto 8 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>Anker Life Q30 - Headphone sem fio</h1>
      <p>Fone De Ouvido Over-ear Sem Fio Soundcore Life</p>
      <div className="product-price">
        R$ 150,00
      </div>
      <div className="product-info">
        <h2>Informações Gerais</h2>
        <ul>
          <li>Tecnologia de conectividade: Sem fio</li>
          <li>Tecnologia de comunicação sem fio: Bluetooth</li>
          <li>Faixa etária (descrição): Adulto</li>
          <li>Material: Couro</li>
          <li>Tempo de carregamento: 5 Minutos</li>
          <li>Tipo de controle: Controle de volume</li>
          <li>Características do cabo: Sem cabo</li>
          <li>Fabricante: Anker</li>
          <li>Modelo: A3028</li>
          <li>Ano: 2020</li>
          <li>Número da peça: A3028011</li>
          <li>Tipo Do Produto: Eletrônicos</li>
          <li>Responsividade do som: 100 dB</li>
          <li>Voltagem: 230 Volts</li>
          <li>Baterias inclusas: Sim</li>
          <li>Funciona com baterias: Sim</li>
          <li>Composição da pilha ou bateria: Lítio</li>
          <li>Característica de cabo ou fio: Sem cabo</li>
          <li>Tipo de material: Couro</li>
          <li>Contém líquido?: Não</li>
          <li>Bateria recarregável: Não</li>
          <li>Cor correspondente: Preto</li>
          <li>Conexões: Sem fio Bluetooth</li>
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

export default Product8;