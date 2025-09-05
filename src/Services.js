import React, { useState } from 'react';
import { FaCogs, FaLeaf, FaLightbulb,FaChair,FaUtensils,FaMusic, FaArrowLeft, FaTimes } from 'react-icons/fa';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    { 
      title: 'Stage Decoration', 
      description: 'Elegant and custom-made stage setups tailored to your event.',
      icon: <FaCogs size={40} />,
      images: [
        '/images/dec1.png',
        '/images/dec2.png',
        '/images/dec4.png',
        '/images/dec3.png',
        '/images/dec5.png',
      ]
    },
    { 
      title: 'Floral Arrangements', 
      description: 'Fresh flowers carefully selected to fit your theme.',
      icon: <FaLeaf size={40} />,
      images: [
        '/images/floral1.png',
        '/images/floral2.png',
        '/images/floral3.png',
        '/images/floral4.png',
        '/images/floral5.png',
      ]
    },
    { 
      title: 'Lighting', 
      description: 'Ambient lighting to create the perfect atmosphere for any occasion.',
      icon: <FaLightbulb size={40} />,
      images: [
        '/images/l1.png',
        '/images/l6.png',
        '/images/l3.png',
        '/images/l4.png',
        '/images/l5.png',
        '/images/l2.png',
      ]
    },
    { 
      title: 'Chairs and Tables', 
      description: 'Comfortable and stylish chairs,tents,linens and tables to match your event decor.',
      icon: <FaChair size={40} />,  // Assuming you use react-icons/fa
      images: [
    '/images/t2.png',
    '/images/t1.png',
    '/images/t3.png',
    '/images/t4.png',
  ]
    },
    {
    title: 'Delicious Food', 
    description: 'Tasty and freshly prepared dishes to delight your guests.',
    icon: <FaUtensils size={40} />,  // Using the utensils icon from react-icons/fa
    images: [
    '/images/c1.png',
    '/images/c2.png',
    '/images/c3.png',
    '/images/c4.png',
    '/images/c5.png',
  ]
},
{
  title: 'Music & Entertainment',
  description: 'Live bands, DJs, and sound systems to keep your guests dancing all night.',
  icon: <FaMusic size={40} />,  // Using react-icons/fa music icon
  images: [
    '/images/m1.png',
    '/images/m2.png',
    '/images/m3.png',
    '/images/m4.png',
    '/images/m5.png',
  ]
},
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setSelectedImage(null); // reset big image on modal open
  };

  const closeModal = () => {
    setSelectedService(null);
    setSelectedImage(null);
  };

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 text-center text-primary font-weight-bold">Our Premium Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div 
                className="card h-100 shadow-lg border-0" 
                onClick={() => openModal(service)} 
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body text-center p-4" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
                  <div className="mb-3">{service.icon}</div>
                  <h5 className="card-title text-dark font-weight-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for service images */}
      {selectedService && (
        <div 
          className="modal show" 
          style={{ 
            display: 'block', 
            position: 'fixed', 
            top: 0, left: 0, right: 0, bottom: 0, 
            zIndex: 1050, 
            backgroundColor: 'rgba(0, 0, 0, 0.8)' 
          }} 
          onClick={closeModal}
        >
          <div className="modal-dialog modal-fullscreen" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{ height: '100vh', borderRadius: '15px' }}>
              <div 
                className="modal-header d-flex align-items-center justify-content-between" 
                style={{ backgroundColor: '#343a40', color: 'white' }}
              >
                <button 
                  onClick={closeModal} 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    color: '#343a40',
                    border: 'none', 
                    borderRadius: '20px', 
                    padding: '0.4rem 0.8rem', 
                    display: 'flex',
                    alignItems: 'center', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    gap: '0.5rem', 
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
                  }} 
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'} 
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'} 
                >
                  <FaArrowLeft /> Back 
                </button>
                <h5 className="modal-title m-0">{selectedService.title} Images</h5>
                <div /> {/* Spacer */}
              </div>

              <div className="modal-body d-flex justify-content-center align-items-center">
                <div className="container">
                  <div className="row justify-content-center">
                    {selectedService.images.map((image, idx) => (
                      <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div 
                          className="card border-0 shadow-sm image-glow" 
                          style={{ 
                            height: '250px',
                            overflow: 'hidden', 
                            borderRadius: '10px',
                            transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                            cursor: 'pointer',
                          }}
                          tabIndex={0}
                          onClick={() => openImage(image)}
                          onKeyDown={(e) => { if(e.key === 'Enter') openImage(image); }}
                        >
                          <img 
                            src={image} 
                            alt={`${selectedService.title} ${idx + 1}`} 
                            className="img-fluid" 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover', 
                              display: 'block' 
                            }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Big Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="modal show" 
          style={{ 
            display: 'block',
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 1100,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          onClick={closeImage}
        >
          <div 
            style={{ 
              height: '100vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              position: 'relative',
              padding: '1rem',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          >
            <button
              onClick={closeImage}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.6)', // Dark transparent bg
                border: 'none',
                borderRadius: '50%',
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: '1.8rem',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                zIndex: 1110,
              }}
              aria-label="Close"
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FaTimes />
            </button>

            <img
              src={selectedImage}
              alt="Expanded view"
              style={{ 
                maxHeight: '90vh', 
                maxWidth: '90vw', 
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* Inline CSS for glow effect */}
      <style>{`
        .image-glow:hover,
        .image-glow:focus-within {
          box-shadow: 0 0 15px 5px rgba(255, 215, 0, 0.8);
          transform: scale(1.05);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
          z-index: 10;
        }

        .image-glow {
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Services;
