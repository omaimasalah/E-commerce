import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"; // الأيقونة اللي في الصورة
import { photo1, photo2, photo3 } from './assets/img';

const Cart = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="page_header" className="about_header">
        <h2>#Cart</h2>
        <p>LEAVE MESSAGE, We Love To Hear From You!</p>
      </section>

      {/* Cart Section */}
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>SubTotal</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* تعديل الأيقونة هنا لتكون شبه الصورة */}
              <td>
                <a href="#">
                  <FontAwesomeIcon icon={faCircleXmark} className="remove-icon" />
                </a>
              </td>
              <td><img src={photo1} alt="product" style={{width: '70px'}} /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>$118.19</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>$118.19</td>
            </tr>

            <tr>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon={faCircleXmark} className="remove-icon" />
                </a>
              </td>
              <td><img src={photo2} alt="product" style={{width: '70px'}} /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>$118.19</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>$118.19</td>
            </tr>

            <tr>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon={faCircleXmark} className="remove-icon" />
                </a>
              </td>
              <td><img src={photo3} alt="product" style={{width: '70px'}} /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>$118.19</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Cart;