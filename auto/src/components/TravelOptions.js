import React from "react";
import { useNavigate } from "react-router-dom";

export default function TravelOptions() {
  const navigate = useNavigate();

  const handleBooking = (data) => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "/user-booking");
      alert("Please login to continue booking.");
      navigate("/login");
    } else {
      // Pass booking data to /user-booking
      navigate("/user-booking", { state: data });
    }
  };

  const cards = [
    {
      title: "City Rides",
      img: "/images/city.webp",
      desc: "Book an auto to nearby locations in Agartala city with fixed rates and quick confirmation.",
      btn: "Book City Ride",
      data: { pickup: "NIT Agartala Campus", drop: "Agartala City Center" },
    },
    {
      title: "Airport Rides",
      img: "/images/airport.webp",
      desc: "Heading to Maharaja Bir Bikram Airport? Book your ride in advance for on-time travel.",
      btn: "Book Airport Ride",
      data: { pickup: "NIT Agartala Campus", drop: "Airport" },
    },
    {
      title: "Railway Station Rides",
      img: "/images/auto.webp",
      desc: "Travel conveniently from NIT Agartala to the railway station with pre-set fares.",
      btn: "Book Station Ride",
      data: { pickup: "NIT Agartala Campus", drop: "Railway Station" },
    },
    {
      title: "Sharing Rides",
      img: "/images/share.webp",
      desc: "Opt for sharing rides and choose preferences — female, male, or both for a comfortable journey.",
      btn: "Book Sharing Ride",
      data: {
        pickup: "NIT Agartala Campus",
        drop: "Agartala City Center",
        bookingType: "sharing",
      },
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold mb-4">
        Use the NITA Auto Service to help you travel your way 🛺
      </h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={card.img}
                className="card-img-top"
                alt={card.title}
                style={{
                  height: "180px",
                  objectFit: "fill",
                  padding: "15px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  {card.desc}
                </p>
                <button
                  className="btn btn-dark w-100"
                  onClick={() => handleBooking(card.data)}
                >
                  {card.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
