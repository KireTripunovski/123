import { useEffect, useState } from "react";
import "../../App.css";
import "./Clients.css";
import { Testimonial } from "../../types/userTypes";

export default function ClientsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/Testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const chunkedTestimonials = testimonials.reduce<Testimonial[][]>(
    (chunks, testimonial, i) => {
      const chunkIndex = Math.floor(i / 3);
      chunks[chunkIndex] = [...(chunks[chunkIndex] || []), testimonial];
      return chunks;
    },
    []
  );

  return (
    <section className="sandBackgroundColor py-20">
      <div className="container mx-auto">
        <h2 className="text-center greenColor font-bold text-3xl">
          Our Clients
        </h2>

        <div
          id="testimonialCarousel"
          className="carousel relative mt-8 borderStyle p-6 rounded-xl"
        >
          <div className="carousel-inner">
            {chunkedTestimonials.map((chunk, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="flex justify-between space-x-8">
                  {chunk.map((testimonial, index) => (
                    <div
                      className="testimonial-box p-6 rounded-xl flex"
                      key={index}
                    >
                      <div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="me-3 imgRound"
                        />
                      </div>
                      <div className="border-l-4 leftBorder pl-6 greenColor">
                        <div className="ml-3">
                          <p className="mb-0">{testimonial.comment}</p>
                          <p className="mt-3 font-bold text-right">
                            — {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
}
