import "./App.css";
import { useState } from "react";
import CustomScroll from "react-custom-scroll";
import MyModal from "./MyModal";

function Input({ value, onChange, placeholderName, inputType, nameField }) {
  return (
    <input
      type={inputType}
      id={nameField}
      name={nameField}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="radioButton border-none mr-5 text-gray-700 px-2 py-1 leading-tight focus:outline-none focus:bg-white"
      placeholder={placeholderName}
    />
  );
}

function FithPage() {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");

  const [autoritzo, setAutoritzo] = useState("autoritzo");

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  const makePostRequest = (dni, name) => {
    fetch("http://localhost:8080/saveentity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dni: dni,
        name: name,
        autoritzo: autoritzo === "autoritzo" ? true : false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Success:", autoritzo);
        setShowModal(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    setDni(data.get("dni"));
    setName(data.get("name"));

    makePostRequest(dni, name);

    console.log(dni);
    console.log(name);
  };

  const handleChange = (event) => {
    setAutoritzo(event.target.value);
    console.log(autoritzo);
  };

  return (
    <div className=" flex flex-row bg-amber-200 h-900 place-items-center ">
      <div className="shadow m-8 h-screen w-200  bg-white rounded-md">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full m-2 sm:overflow-scroll"
        >
          <div className="flex flex-row">
            <p>En/na</p>
            <Input
              value={name}
              onChange={setName}
              inputType="text"
              placeholderName="Ibrahima Sory"
              nameField="name"
            />
            <p>, amb document d???identificaci?? </p>
            <Input
              value={dni}
              onChange={setDni}
              inputType="text"
              placeholderName="41414399H"
              nameField="dni"
            />
            <p> com millor procedeixi, </p>
          </div>

          <div className="flex flex-row mt-10">
            <label className="font-bold">AUTORIZO</label>
            <input
              className="ml-5 mr-5 accent-amber-400"
              type="radio"
              checked={autoritzo === "autoritzo"}
              onChange={handleChange}
              value="autoritzo"
            />
            <label className="font-bold">NO AUTORIZO</label>
            <input
              className="ml-5 mr-5 accent-amber-400"
              type="radio"
              checked={autoritzo === "noautoritzo"}
              onChange={handleChange}
              value="noautoritzo"
            />
          </div>

          <div className="w-full text-left">
            <p className="m-5">
              A les entitats que conformen Plataforma Educativa (Fundaci??
              Resilis ??? G17925215, Fundaci?? Astres ??? G17695768, Fundaci?? Gentis
              ??? G17679267, Fundaci?? Inf??ncia i Fam??lia ??? G63631402, Fundaci??
              Acci?? Social Inf??ncia ??? G-65212789, Fundaci?? Utopia ??? G17933730,
              Fundaci?? El 7 d???Astres ??? G66149162, Eina Activa Empresa d???Inserci??
              ??? B17952250, Id??ria, S.L. ??? F55149025 i A.I.E Plataforma Educativa
              ??? V55124416), a que la meva imatge pugui ser enregistrada a trav??s
              de fotografies o gravacions, i que aquestes es puguin utilitzar
              i/o publicar a les p??gines web, xarxes socials, publicacions,
              llibres, revistes, mem??ries d???activitats, filmacions o qualsevol
              altre mitj?? audiovisual de comunicaci?? p??blica, de conformitat amb
              l???establert a la Llei Org??nica 1/1982 del 5 de maig sobre
              Protecci?? Civil de Dret a l???Honor, a la Intimitat Personal i
              Familiar a la pr??pia imatge, tenint aquesta difusi?? la finalitat
              de donar a con??ixer les activitats i serveis de l???organitzaci??,
              durant el temps que duri la meva vinculaci?? amb aquesta o durant
              la vig??ncia de la campanya o projecte pel qual s???hagin cedit les
              imatges.
            </p>

            <p className="m-5">
              Se m???ha informat que en cap cas, la meva imatge ser?? utilitzada
              amb finalitats comercials ni es cedir?? a tercers alienes a
              Plataforma Educativa excepte en els casos establerts a l???apartat
              anterior, i en tot cas, exceptuant aquells casos en qu?? existeixi
              una obligaci?? legal o, en qualsevol cas, pr??via sol??licitud del
              meu consentiment.
            </p>

            <p className="m-5">
              Tamb?? se m???informa que, de conformitat amb el Reglament UE
              2016/679 del Parlament Europeu i del Consell de 27 d???abril, aix??
              com amb la Llei Org??nica 3/2018 de 5 de desembre de Protecci?? de
              Dades i Garantia de Drets Digitals, les dades rebudes mitjan??ant
              la present autoritzaci?? quedaran incorporades als fitxers de
              Plataforma Educativa amb la finalitat abans descrita i se???m
              comunica el dret d???acc??s, rectificaci??, cancel??laci??, limitaci??,
              supressi??, portabilitat i oposici?? al tractament de la meva
              imatge, i per tant, la possibilitat de revocar la present
              autoritzaci??, dirigint-me per escrit a: Plataforma Educativa ??? C/
              Garrotxa, 7 baixos, 17006 de Girona o enviant un correu electr??nic
              a lopd@plataformaeducativa.org.
            </p>

            <p className="m-5">
              Tanmateix se m???informa del dret a presentar una reclamaci?? davant
              l???Agencia Espa??ola de Protecci??n de Datos i de l???Autoritat
              Catalana de Protecci?? de Dades.
            </p>
            <div className="flex flex-row-reverse m-5">
              <button className="text-center bg-amber-400 hover:bg-amber-500 ml-10 rounded-2xl w-40 h-10 hover:text-red-50">
                Guardar
              </button>
            </div>
          </div>
        </form>
        <MyModal visible={showModal} onClose={handleOnClose} />
      </div>
    </div>
  );
}

export default FithPage;

/*
*

*/
