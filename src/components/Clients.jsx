import "./Clients.css";
import FadeUp from "./FadeUp";

const clients = ["LIV Lagos", "Hava Lagos", "Rococo", "Roots and Roofs"];

function Clients() {
  return (
    <section className="clients">
      {/* <FadeUp>
        <div className="clients-header">
          <span className="clients-label">Brands & Clients</span>
        </div>
      </FadeUp> */}

      <div className="clients-marquee">
        <div className="clients-track">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <span className="client-name" key={index}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
