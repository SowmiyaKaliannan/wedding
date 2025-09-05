import React from 'react';
import './Home.css';
import floralBg from './assets/home.png';
import work1 from './assets/work1.png';
import work2 from './assets/work2.png';
import work3 from './assets/work3.png';


function Home() {
  const features = [
    { title: '🎨 Custom Themes', desc: 'Tailored decoration to match your wedding vibe.' },
    { title: '💎 Premium Quality', desc: 'Only the finest materials and floral designs.' },
    { title: '🧘‍♀️ Stress-Free Service', desc: 'We handle everything from setup to takedown.' },
  ];

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section
        className="hero text-white text-center d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${floralBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4" >  Dream Wedding Decorations </h1>
          <p className="lead" style={{ color: 'white' }}><i>Crafting Magical Moments with Elegance & Love🎀🌟</i></p>
          <a href="/contact" className="btn btn-light mt-3">Book a Consultation🤝</a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 text-center">
        <h2>Why Choose Us🙌?</h2>
        <div className="container">
          <div className="row">
            {features.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-light py-5 text-center">
  <h2>Happy Couples 👩‍❤️‍👨</h2>
  <div className="container">
    <div className="row">
      {[
        { quote: 'They made our wedding magical from start to finish!', name: 'Priya & Rahul' },
        { quote: 'Flawless service and beautiful decor!', name: 'Anjali & Rohan' },
        { quote: 'Couldn’t have asked for a better experience.', name: 'Neha & Arjun' },
      ].map((testimonial, index) => {
        const colors = ['#e8edf1ff','#efebeeff', '#e6f0f8'];
        return (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="p-4 rounded shadow-sm h-100 testimonial-card"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <p className="fst-italic">"{testimonial.quote}"</p>
              <strong className="d-block mt-2">{testimonial.name}</strong>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* GALLERY */}
     <section className="py-5 text-center">
       <h2>Our Recent Work✨</h2>
         <div className="container">
           <div className="row">
              {[work1, work2, work3].map((img, i) => (
             <div key={i} className="col-md-4 mb-3">
                <img src={img} alt={`wedding decor ${i + 1}`} className="gallery-img" />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
