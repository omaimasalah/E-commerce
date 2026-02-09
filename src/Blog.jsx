import React from 'react'
import { Link } from 'react-router'
import { b1, b2, b3, b4, b5, b6, b7 } from './assets/img'

const Blog = () => {
  return (
    <div>
          <section id="page_header" class="blog_header">
        
        <h2>#ReadMore</h2>
        <p>Read All Case Studies About Our Products!</p>
    </section>
            <section id="blog">
        <div className="blog-box">
            <div className="blog-imag">
                <img src={b1} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b2} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b3} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b3} alt=" "/> 
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b4} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b5} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b6} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={b7} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        

    </section>
    
  
    <section id="Pagination" className="section-p1">
    <Link to="/Blog">1</Link>
    <Link to="/Blog">2</Link>
    <Link to="/Blog"><i className="fa-solid fa-arrow-right"></i></Link>
    </section>
    
    <section id="newsLetter" className="section-p1 section-m1">
        <div className="newText">
            <h4>Sign Up For NewsLetters</h4>
            <p>Get E-mail Updates About Our Latest Shop And <span>Special Offers</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your Emaill Adress" />
            <button className="normal">Sign Up</button>
        </div>

    </section>
    </div>
  )
}

export default Blog