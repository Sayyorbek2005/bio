import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bargda.css"

// 🧪 Asboblar rasmlari (yon panel)
import qaychi from "../../assets/7.4/qaychi-removebg-preview.png";
import pinset from "../../assets/5.1/pinset_o_zi.png";
import pipetkaSide from "../../assets/5.1/pipetka_jpg-removebg-preview.png";
import probirka from "../../assets/5.1/probirka-removebg-preview.png";
import  qoraQo from "../../assets/7.4/qora_qog_ozzzz-removebg-preview.png";
import  yod from "../../assets/7.4/yod_ochiq-removebg-preview.png";
import  spirtL from "../../assets/7.4/spirt_lampa-removebg-preview.png";
import  spirt from "../../assets/7.4/spirt-removebg-preview.png";
import  stakan from "../../assets/7.4/stakannn-removebg-preview.png";
import  suv from "../../assets/7.4/suv-removebg-preview.png";
import kesilganQ from "../../assets/7.4/kesilganQ.png";
import qisqichB from '../../assets/7.4/4qisqichbarg.png'
import gul from '../../assets/7.4/gul.png'
import qogozGuldanQisqich from '../../assets/7.4/barg_qogoz_qisqich.png'
import qogozGuldan from '../../assets/7.4/qogozGulda.png'
import qisqich from '../../assets/7.4/qisqichch-removebg-preview.png'
import stakanOlovda from '../../assets/7.4/issiq_suv-removebg-preview.png'
import stakanIchidaIdish from '../../assets/7.4/bargli_spirt_lamp_suv_hammomida.png'
import kesilganBarg from '../../assets/7.4/qirqilgan_barg.png'
import konusStakan from '../../assets/7.4/konusStakan.png'
import konusBarg from '../../assets/7.4/bargli_spirt.png'
import stakandaBarg from '../bargda/../../assets/7.4/stakanda-barg.png'
import xonadaOsimlik from '../../assets/7.4/geran_-removebg-preview.png'
import petriKos from '../../assets/7.4/petri_kosachasi.png'
import yashilS from '../../assets/7.4/yashil_suyuqlik-removebg-preview.png'
import rangsizbarg from '../../assets/7.4/rangsiz_barg-removebg-preview.png'
import kosadaS from '../../assets/7.4/chayish_uchun_suv-removebg-preview.png'
import bargSuvDa from '../../assets/7.4/barg_suvda.png'
import rangQaytargich from '../../assets/7.4/petri_yod-removebg-preview.png'
import kokBarg from '../../assets/7.4/kok_sariq_barg.png'


import buyumQopOyna from "../../assets/5.3/buyum_qop_oyna_sariq.png";

// ✅ 10 bosqichli ma'lumotlar (Osimliklarda dagi bilan bir xil)
const stepsData = [
  {
    text: "Idishdagi iliq suvga shakar soling.",
    img1: qoraQo,
    img2: qaychi,
    resultImg: kesilganQ,
  },
  {
    text: "Piyozni skalpel yordamida bo'ling",
    img1: gul,
    img2: kesilganQ,
    resultImg: qogozGuldan,
  },
  {
    text: "Pipetka yordamida idishdagi suvdan oling.",
    img1: qogozGuldan,
    img2: qisqich,
    resultImg: qogozGuldanQisqich,
  },
  {
    text: " Tozalab artilgan buyum oynasiga pipetka yordamida bir tomchi suv tomizing.",
    img1: qogozGuldanQisqich,
    img2: qaychi,
    resultImg: qisqichB,
  },
  {
    text: " Pinset yordamida kesilgan piyozning yupqa po'stini ajratib oling.",
    img1: stakanOlovda,
    img2: kesilganBarg,
    resultImg: stakandaBarg,
  },
  {
    text: " Piyozning yupqa po'stini buyum oynasidagi bir tomchi suv ustiga tekis qilib joylashtiring",
    img1: konusStakan,
    img2: kesilganBarg,
    resultImg: konusBarg,
  },
  {
    text: " Pipetka yordamida yod eritmasidan oling.",
    img1: stakanOlovda,
    img2: konusBarg,
    resultImg: stakanIchidaIdish,
  },
  {
    text: " Piyozning yupqa po'stini buyum oynasiga qo'ygandan so'ng, ustiga 1 tomchi yod eritmasini tomizing",
    img1: yashilS,
    img2: rangsizbarg,
    resultImg: buyumQopOyna,
  },
  {
    text: "Qoplagich oyna bilan yoping.",
    img1: kosadaS,
    img2: rangsizbarg,
    resultImg: bargSuvDa,
  },
  {
    text: "Tayyor bo'lgan preperatni mikroskop ostida kuzating.",
    img1: rangQaytargich,
    img2: rangsizbarg,
    resultImg: kokBarg,
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
