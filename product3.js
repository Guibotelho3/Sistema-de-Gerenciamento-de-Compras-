import React from 'react';
import './product3.css';

const Product3 = () => (
  <div className="product-container">
    <div className="product-images">
      <img src="/imagens/produto3f1.jpg" alt="Produto 3 - Foto 1" />
      <img src="/imagens/produto3f2.jpg" alt="Produto 3 - Foto 2" />
      <img src="/imagens/produto3f3.jpg" alt="Produto 3 - Foto 3" />
    </div>
    <div className="product-details">
      <h1>APAYDO K82 - Teclado Mecânico Tipo-C 75%</h1>
      <p>Teclado mecânico, Interruptor tenas, Hot-swappable, Layout de 82 teclas, Modo de metal, Teclado com tecnologia Gateboolação, Teclado Tipo-C, Compacto (75%).</p>
      <div className="product-price">
        R$ 80,00
      </div>
      <div className="product-buttons">
        <button className="buy-button">Comprar</button>
        <button className="cart-button">Adicionar ao Carrinho</button>
      </div>
      <div className="product-info">
        <h2>Informações Gerais:</h2>
        <ul>
          <li>Nome do produto: Teclado mecânico K82</li>
          <li>Número de chaves: 82 chaves</li>
          <li>Nome do Eixo: Eixo Verde/Vermelho</li>
          <li>Tensão nominal: 4.5V ~ 5.5V</li>
          <li>Iluminação do teclado: Iluminação colorida mista (20 tipos de ajustável)</li>
          <li>Transmissão método: conexão prendida</li>
          <li>Plug and Play: Hot swappable chaves</li>
          <li>Peso do teclado: sobre 750g</li>
          <li>Projeto do teclado: punchless chave completa</li>
          <li>Tamanho do Teclado: 323x125x33mm</li>
          <li>Sistema do apoio: Windows7/8/10/11Mac etc.</li>
        </ul>
        <h2>Características:</h2>
        <ul>
          <li>Retroiluminação legal</li>
          <li>Botão metálico multi-funcional</li>
          <li>Chaves Hot-swappable</li>
          <li>Teclas ABS</li>
          <li>Conexão com fio</li>
          <li>Equipado com eixo mecânico</li>
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

export default Product3;