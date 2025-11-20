import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './tufelka.css'

// 🔹 Asboblar rasmlari
import buyumOynasi from "../../assets/5.1/buyum_oynasi.png";
import pichan from "../../assets/7.6/pichan_ivitmasi-removebg-preview.png";
import paxta from "../../assets/7.6/paxta_tolasi-removebg-preview.png";
import pinset from "../../assets/5.1/pinset_o_zi.png";
import pipetka from "../../assets/5.1/pipetka_jpg-removebg-preview.png";
import qaychi from "../../assets/7.6/qaychi-removebg-preview.png";
import qoplagich from "../../assets/5.1/qoplagich_jpg-removebg-preview.png";
import filter from "../../assets/7.6/filtr_qg-removebg-preview.png";
import mik from "../../assets/7.6/mikroskop-removebg-preview.png";

// 🥄 Bosqich rasmlari (Osimliklarda dan olingan)
import buyumOynaQop from "../../assets/7.6/buym_qop_rangsiz.png";
import suvliBuyumOna from "../../assets/5.3/suvli_buyum_oyna.png";
import pinDaPiyoz from "../../assets/5.3/pinsetda_piyoz-removebg-preview.png";
import pipS from "../../assets/5.3/pip-suv.png";
import resVid from '../../assets/7.6/video.mp4'


// 🔹 Har bir bosqich uchun ma’lumotlar
const stepsData = [
  {
    text: "Tomizgich yordamida tufelka infuzoriyasining oldindan tayyorlab qo'yilgan pichan ivitmasidan 15-20 tomchi oling",
    img1: pichan,
    img2: pipetka,
    resultImg: pipS,
  },
  {
    text: "Buyum oynasiga tomizing.",
    img1: buyumOynasi,
    img2: pipS,
    resultImg: suvliBuyumOna,
  },
  {
    text: "Pinset yordamida paxtadan ozroq oling.",
    img1: paxta,
    img2: pinset,
    resultImg: pinDaPiyoz,
  },
  {
    text: "Tufelka infuzoriyasining harakatini sekinlashtirish uchun tomchiga bir necha dona paxta tolasi tashlang",
    img1: suvliBuyumOna,
    img2: pinDaPiyoz,
    resultImg: suvliBuyumOna,
  },
  {
    text: "Tomchining ustini qoplagich oyna bilan yoping .",
    img1: suvliBuyumOna,
    img2: qoplagich,
    resultImg: buyumOynaQop,
  },
  {
    text: "Uning chetlaridagi suvni filtr qog'oziga ehtiyotkorlik bilan shimdirib oling.",
    img1: buyumOynaQop,
    img2: filter,
    resultImg: buyumOynaQop,
  },
  {
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.",
    img1: mik,
    img2: buyumOynaQop,
    resultImg: resVid,
  },
];

const Tufelka = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // 🔹 Accordionni boshqarish (faqat bittasi ochilsin)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setAnimate(false);
    setShowResult(false);
  };  

  // 🔹 "Ishni bajarish" tugmasi
  const handleDoClick = (index) => {
    setActiveIndex(index);
    setAnimate(true);
    setTimeout(() => setShowResult(true), 1500);
  };

  // 🔹 "Yangilash" tugmasi
  const handleRefresh = () => {
    setAnimate(false);
    setShowResult(false);
  };

  return (
    <div data-aos="fade-down" className="tufelka-container">
      <div className="max-width">
        {/* 🔹 Sarlavha */}
        <div className="pages-title">
          <h1>O‘simliklarda moddalar transportini o‘rganish</h1>
          <div onClick={() => navigate(-1)} className="display-flex orqaga">
            <i className="bx bx-chevron-left"></i>
            <p>Orqaga</p>
          </div>
        </div>

        {/* 🔹 Yon panel (asboblar) */}
        <div className="side-bar">
          {[buyumOynasi, pichan, paxta, pinset, pipetka, qaychi, qoplagich, filter, mik].map(
            (img, i) => (
              <div className="bar-img" key={i}>
                <img src={img} alt={`asbob-${i}`} />
              </div>
            )
          )}
        </div>

        {/* 🔹 Asosiy qism — Accordion */}
        <div className="accordion-container">
          {stepsData.map((step, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => toggle(index)}
                className={`accordion-header ${openIndex === index ? "active" : ""}`}
              >
                <span>
                  {index + 1}. {step.text}
                </span>
                <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
              </button>

              {openIndex === index && (
                <div className={`accordion-content ac-${index + 1}`}>
                  <div
                    className={`animation-area ${
                      animate && activeIndex === index ? "active" : ""
                    }`}
                  >
                    {!showResult ? (
                      <>
                        {step.img1 && <img src={step.img1} alt="img1" className="left-img" />}
                        {step.img2 && <img src={step.img2} alt="img2" className="right-img" />}
                      </>
                    ) : (
                      step.resultImg && (
                        <div className="vid">
                        <img src={step.resultImg} alt="result" className="result-img" />
                        
                        <video  controls autoPlay>
                          <source src={resVid} />
                        </video>
                        
                        </div>
                          
                      )
                    )}
                  </div>

                  <div className="buttons">
                    <button
                      className="do-btn zambrug-cont-btn"
                      onClick={() => handleDoClick(index)}
                    >
                      Ishni bajarish
                    </button>
                    <button
                      className="refresh-btn zambrug-cont-btn"
                      onClick={handleRefresh}
                    >
                      Yangilash
                    </button>
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

export default Tufelka;
