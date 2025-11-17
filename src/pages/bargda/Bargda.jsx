import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bargda.css"

// 🧪 Asboblar rasmlari (yon panel)
import buyumOynasi from "../../assets/5.1/buyum_oynasi.png";
import qaychi from "../../assets/7.4/qaychi-removebg-preview.png";
import pinset from "../../assets/5.1/pinset_o_zi.png";
import pipetkaSide from "../../assets/5.1/pipetka_jpg-removebg-preview.png";
import qoplagich from "../../assets/5.1/qoplagich_jpg-removebg-preview.png";
import probirka from "../../assets/5.1/probirka-removebg-preview.png";
import  qoraQo from "../../assets/7.4/qora_qog_ozzzz-removebg-preview.png";
import  yod from "../../assets/7.4/yod_ochiq-removebg-preview.png";
import  spirtL from "../../assets/7.4/spirt_lampa-removebg-preview.png";
import  spirt from "../../assets/7.4/spirt-removebg-preview.png";
import  stakan from "../../assets/7.4/stakannn-removebg-preview.png";
import  suv from "../../assets/7.4/suv-removebg-preview.png";








import xonadaOsimlik from '../../assets/7.4/geran_-removebg-preview.png'
import petriKos from '../../assets/7.4/petri_kosachasi.png'





// 🥄 Bosqich rasmlari (Osimliklarda dan ko‘chirildi)
import mikroskop from "../../assets/5.3/mikroskop-removebg-preview.png";
import filterQ from "../../assets/5.3/filtr_qg-removebg-preview.png";
import suvStakan from "../../assets/7.5/water_in_glass-removebg-preview.png";

import skalpelN from "../../assets/5.3/skalpel-removebg-preview.png";
import piyoz from "../../assets/5.3/piyoz-removebg-preview.png";
import piozP from "../../assets/5.3/cutted_onion-removebg-preview.png";
import suvliBuyumOna from "../../assets/5.3/suvli_buyum_oyna.png";
import pinDaPiyoz from "../../assets/5.3/pinsetda_piyoz-removebg-preview.png";
import pipetka from "../../assets/7.5/pipetka_jpg-removebg-preview.png";
import pipS from '../../assets/5.3/pip-suv.png'
// import yod from "../../assets/5.3/yod_ochiq-removebg-preview.png";
import yPipetka from "../../assets/5.3/pipet_yod-removebg-preview.png";
import buyumY from "../../assets/5.3/buyum_yod-removebg-preview.png";

import underMik from "../../assets/5.3/under_microskope.jpg";
import buyumQopOyna from "../../assets/5.3/buyum_qop_oyna_sariq.png";

// ✅ 10 bosqichli ma'lumotlar (Osimliklarda dagi bilan bir xil)
const stepsData = [
  {
    text: "Idishdagi iliq suvga shakar soling.",
    img1: piyoz,
    img2: skalpelN,
    resultImg: piozP,
  },
  {
    text: "Piyozni skalpel yordamida bo'ling",
    img1: suvStakan,
    img2: pipetka,
    resultImg: pipS,
  },
  {
    text: "Pipetka yordamida idishdagi suvdan oling.",
    img1: buyumOynasi,
    img2: pipS,
    resultImg: suvliBuyumOna,
  },
  {
    text: " Tozalab artilgan buyum oynasiga pipetka yordamida bir tomchi suv tomizing.",
    img1: piozP,
    img2: pinset,
    resultImg: pinDaPiyoz,
  },
  {
    text: " Pinset yordamida kesilgan piyozning yupqa po'stini ajratib oling.",
    img1: suvliBuyumOna,
    img2: pinDaPiyoz,
    resultImg: suvliBuyumOna,
  },
  {
    text: " Piyozning yupqa po'stini buyum oynasidagi bir tomchi suv ustiga tekis qilib joylashtiring",
    img1: yod,
    img2: pipetka,
    resultImg: yPipetka,
  },
  {
    text: " Pipetka yordamida yod eritmasidan oling.",
    img1: suvliBuyumOna,
    img2: yPipetka,
    resultImg: buyumY,
  },
  {
    text: " Piyozning yupqa po'stini buyum oynasiga qo'ygandan so'ng, ustiga 1 tomchi yod eritmasini tomizing",
    img1: buyumY,
    img2: qoplagich,
    resultImg: buyumQopOyna,
  },
  {
    text: "Qoplagich oyna bilan yoping.",
    img1: buyumQopOyna,
    img2: filterQ,
    resultImg: buyumQopOyna,
  },
  {
    text: "Tayyor bo'lgan preperatni mikroskop ostida kuzating.",
    img1: mikroskop,
    img2: buyumQopOyna,
    resultImg: underMik ,
  },
];

const Bargda = () => {
 const navigate = useNavigate();
   const [openIndex, setOpenIndex] = useState(null);
   const [activeIndex, setActiveIndex] = useState(null);
   const [animate, setAnimate] = useState(false);
   const [showResult, setShowResult] = useState(false);
 
   // Accordion toggle: faqat bittasi ochiq bo‘lsin
   const toggle = (index) => {
     setOpenIndex(openIndex === index ? null : index);
     setAnimate(false);
     setShowResult(false);
   };
 
   // "Ishni bajarish" tugmasi
   const handleDoClick = (index) => {
     setActiveIndex(index);
     setAnimate(true);
     setTimeout(() => setShowResult(true), 1500);
   };
 
   // "Yangilash" tugmasi
   const handleRefresh = () => {
     setAnimate(false);
     setShowResult(false);
   };
 

  return (
    <div className="cont-osimlik" data-aos="fade-down">
      <div className="max-width">
        {/* Sarlavha */}
        <div className="pages-title osimlik">
          <h1>Piyoz po'sti hujayrasining tuzilishini mikroskop ostida kuzatish</h1>
          <div onClick={() => navigate(-1)} className="display-flex orqaga">
            <i className="bx bx-chevron-left"></i>
            <p>orqaga</p>
          </div>
        </div>

        {/* Yon panel */}
        <div className="side-bar">
          {[xonadaOsimlik, petriKos,probirka, pinset, pipetkaSide, qaychi, qoraQo, yod, spirtL, spirt, stakan, suv].map(
            (img, i) => (
              <div className="bar-img" key={i}>
                <img src={img} alt={`tool-${i}`} />
              </div>
            )
          )}
        </div>

        {/* Accordion - 10 ta */}
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
                  <div className={`animation-area ${animate && activeIndex === index ? "active" : ""}`}>
                    {!showResult ? (
                      <>
                        {step.img1 && <img src={step.img1} alt="img1" className="left-img" />}
                        {step.img2 && <img src={step.img2} alt="img2" className="right-img" />}
                      </>
                    ) : (
                      step.resultImg && <img src={step.resultImg} alt="result" className="result-img" />
                    )}
                    {/* <img className="img-10" src={res} alt="bg" /> */}
                  </div>

                  <div className="buttons">
                    <button className="do-btn zambrug-cont-btn" onClick={() => handleDoClick(index)}>
                      Ishni bajarish
                    </button>
                    <button className="refresh-btn zambrug-cont-btn" onClick={handleRefresh}>
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

export default Bargda;
