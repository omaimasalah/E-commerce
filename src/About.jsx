import React from 'react'
import { a6, vedio } from './assets/img'


const About = () => {
  return (
    <div>
         <section id="page_header" className="about_header">
        
        <h2>#KnowUs</h2>
        <p>Read All Case Studies About Our Products!</p>
    </section>

            <section id="about_head" className="section-p1 ">
        <img src={a6} alt="" />
        <div>
            <h2>Who Are You ?</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            </p>
            <abbr title="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!

            </abbr>
            <br />
            <br />
            <marquee bgcolor="aqua" loop="-1" scrollamount="5" width="100%">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            </marquee>
        </div>

    </section>
     


    <section id="about_app"  className="section-p1 ">
     <h1>Download Our <a href="#">App</a> </h1>
     

    <div className="video" >
        <video autoplay muted loop src={vedio} type="video/mp4"></video >
    </div>

    </section>
    </div>
  )
}

export default About