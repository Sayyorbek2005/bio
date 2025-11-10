import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./osimlik.css";

// 🧪 Asboblar rasmlari
import buyumOynasi from "../../assets/5.1/buyum_oynasi.png";
import hovoncha from "../../assets/5.1/hovoncha.png";
import petri from "../../assets/5.1/petri_kosachasi.png";
import pinset from "../../assets/5.1/pinset_o_zi.png";
import pipetka from "../../assets/5.1/pipetka_jpg-removebg-preview.png";
import probirka from "../../assets/5.1/probirka-removebg-preview.png";
import qoplagich from "../../assets/5.1/qoplagich_jpg-removebg-preview.png";
import skalpel from "../../assets/5.1/skalpel-removebg-preview.png";
import voronka from "../../assets/5.1/voronka_remove.png";

// 🔹 Har bir bosqich matni
const steps = [
  "Idishdagi iliq suvga shakar soling.",
  "Shakarli suvga achitqi zamburug'idan soling va iliq joyga qo'ying.",
  "Ko'pchib chiqqan xamirtuturshtan pipetka yordamida oling.",
  "Buyum oynasiga tomizing.",
  "Ustidan qoplagich oynani yoping.",
  "Tayyor bo'lgan preparatni mikroskop ostida kuzating.",
];

const Osimlik = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  // 🔁 Accordion ochish/yopish funksiyasi
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div data-aos="fade-down">
      <div className="max-width">
        {/* 📘 Sahifa sarlavhasi */}
        <div className="pages-title osimlik">
          <h1>Piyoz po'sti hujayrasining tuzilishini mikroskop ostida kuzatish</h1>

          {/* 🔙 Orqaga qaytish tugmasi */}
          <div onClick={() => navigate(-1)} className="display-flex orqaga">
            <i className="bx bx-chevron-left"></i>
            <p>orqaga</p>
          </div>
        </div>

        {/* 🔧 Yon panel – laboratoriya asboblari */}
        <div className="side-bar">
          {[buyumOynasi, hovoncha, petri, pinset, pipetka, probirka, qoplagich, skalpel, voronka].map(
            (img, i) => (
              <div className="bar-img" key={i}>
                <img src={img} alt={`tool-${i}`} />
              </div>
            )
          )}
        </div>

        {/* 📋 Bosqichma-bosqich accordion */}
        <div className="accordion-container">
          {steps.map((step, index) => (
            <div key={index} className="accordion-item">
              {/* Accordion boshi */}
              <button
                onClick={() => toggle(index)}
                className={`accordion-header ${openIndex === index ? "active" : ""}`}
              >
                <span>
                  {index + 1}. {step}
                </span>
                <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
              </button>

              {/* Accordion tarkibi */}
              {openIndex === index && (
                <div className="accordion-content">
                  <p>
                    Bu bosqichda siz <b>{step.toLowerCase()}</b> ishini bajarishingiz kerak.
                  </p>

                  <div className="buttons">
                    <button className="do-btn zambrug-cont-btn">Ishni bajarish</button>
                    <button className="refresh-btn zambrug-cont-btn">Yangilash</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Osimlik;
