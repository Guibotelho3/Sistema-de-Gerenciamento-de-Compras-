import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, product) => sum + parseFloat(product.price.replace('R$', '').replace(',', '.')), 0);

  const handleCheckout = () => {
    navigate('/escolhermetodopag');
  };

  return (
    <div className="cart-container">
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="cart-image" />
                <div className="cart-details">
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                  <button className="remove-button" onClick={() => removeFromCart(index)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      )}
      <Link to="/">Voltar para a loja</Link>
    </div>
  );
};

export default Cart;