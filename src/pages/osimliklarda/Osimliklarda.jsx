import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./osimliklarda.css";

// 🧪 Asboblar rasmlari
import karam from "../../assets/7.5/karam-removebg-preview.png";
import qizil from "../../assets/7.5/qizillll-removebg-preview.png";
import sariq from "../../assets/7.5/sariq-removebg-preview.png";
import kok from "../../assets/7.5/ko_k-removebg-preview.png";
import suvStakan from "../../assets/7.5/water_in_glass-removebg-preview.png";

// 🥄 Bosqich rasmlari
import pipSariq from "../../assets/7.5/pipetka_sariq.png";
import sariqKontchada from "../../assets/7.5/sariq_ranggg-removebg-preview.png";
import sariqSuv from "../../assets/7.5/sariq_suv-removebg-preview.png";
import sariqKaram from "../../assets/7.5/karam_barglari-removebg-preview.png";
import qizilRang from "../../assets/7.5/qizil_rangg-removebg-preview.png";
import pipetka from "../../assets/7.5/pipetka_jpg-removebg-preview.png";
import qizilPip from "../../assets/7.5/pipetka_qizil.png";
import qizilSuv from "../../assets/7.5/qizil_suyuqlik-removebg-preview.png";
import karamQizil from "../../assets/7.5/karam_barglari-removebg-preview_qizil.png";

import kokRang from "../../assets/7.5/blue_jar-removebg-preview.png";
import kokPip from "../../assets/7.5/pipetka_kok.png";
import kokSuv from "../../assets/7.5/blue_suyuqlik-removebg-preview.png";
import kokKaram from "../../assets/7.5/karam_barglari-removebg-preview_kok.png";

import res from '../../assets/7.5/natija-removebg-preview.png'


const stepsData = [
  { 
    text: "Idishdagi iliq suvga shakar soling.", 
    img1: sariqKontchada, 
    img2: pipetka, 
    resultImg: pipSariq, 
  },
  { 
    text: "Shakarli suvga achitqi zamburug'idan soling va iliq joyga qo'ying.", 
    img1: suvStakan, 
    img2: pipSariq, 
    resultImg: sariqSuv
  },
  { 
    text: "Ko'pchib chiqqan xamirtuturshtan pipetka yordamida oling.", 
    img1: sariqSuv, 
    img2: karam, 
    resultImg: sariqKaram 
  },
  { 
    text: "Buyum oynasiga tomizing.", 
    img1: qizilRang, 
    img2: pipetka, 
    resultImg: qizilPip 
  },
  { 
    text: "Ustidan qoplagich oynani yoping.", 
    img1: suvStakan, 
    img2: qizilPip, 
    resultImg: qizilSuv 
  },
  { 
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.", 
    img1: qizilSuv, 
    img2: karam, 
    resultImg: karamQizil 
  },
   { 
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.", 
    img1: kokRang, 
    img2: pipetka, 
    resultImg: kokPip 
  },
   { 
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.", 
    img1: suvStakan, 
    img2: kokPip, 
    resultImg: kokSuv 
  },
   { 
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.", 
    img1: kokSuv, 
    img2: karam, 
    resultImg: kokKaram
  },
   { 
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.", 
    img1: res, 
    resultImg: res,
    
  },
];

const Osimliklarda = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setAnimate(false);
    setShowResult(false);
  };

  const handleDoClick = (index) => {
    setActiveIndex(index);
    setAnimate(true);
    setTimeout(() => setShowResult(true), 1500);
  };

  const handleRefresh = () => {
    setAnimate(false);
    setShowResult(false);
  };

  return (
    <div className="cont-osimliklarda" data-aos="fade-down">
      <div className="max-width">
        {/* Sarlavha */}
        <div className="pages-title">
          <h1>O'simliklarda moddalar transportini o‘rganish</h1>
          <div onClick={() => navigate(-1)} className="display-flex orqaga">
            <i className="bx bx-chevron-left"></i>
            <p>orqaga</p>
          </div>
        </div>

        {/* Yon panel */}
        <div className="side-bar">
          {[karam, qizil, sariq, kok, suvStakan].map(
            (img, i) => (
              <div className="bar-img" key={i}>
                <img src={img} alt={`tool-${i}`} />
              </div>
            )
          )}
        </div>

        {/* Accordion */}
        <div className="accordion-container">
          {stepsData.map((step, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => toggle(index)}
                className={`accordion-header ${openIndex === index ? "active" : ""}`}
              >
                <span>{index + 1}. {step.text}</span>
                <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
              </button>

              {openIndex === index && (
                <div className={`accordion-content ac-${index + 1}`} >
                  <div className={`animation-area  ${animate && activeIndex === index ? "active" : ""}`}>
                    {!showResult ? (
                      <>
                        <img src={step.img1} alt="img1" className="left-img" />
                        <img src={step.img2} alt="img2" className="right-img" />
                      </>
                    ) : (
                      <img src={step.resultImg} alt="result" className="result-img" />
                    )}
                    <img className="img-10" src={res} alt="" />
                  </div>
                  <div className="buttons">
                    <button className="do-btn zambrug-cont-btn" onClick={() => handleDoClick(index)}>Ishni bajarish</button>
                    <button className="refresh-btn zambrug-cont-btn" onClick={handleRefresh}>Yangilash</button>
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

export default Osimliklarda;
