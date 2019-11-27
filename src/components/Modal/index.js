import React from "react";

import Image from "../../assets/image.png";

import "./styles.css";

export default function Modal({ handleModal }) {
  return (
    <div id="modal">
      <h1>Instruções</h1>
      <h2>Vamos começar com programação em bloco!</h2>
      <img src={Image} alt="" />
      <p>
        Para conseguir passar a primeira etapa arraste os blocos para o campo de
        execução de forma a fazer o personagem chegar até o baú!
      </p>
      <p>
        Para conseguir fazer o personagem executar alguma ação, aperte o botão{" "}
        <strong>Correr</strong> que vai causar o evento de correr no personagem
        e use o bloco amarelo <strong>quando correr</strong> que representa a
        condicional necessária para que ele entenda o que fazer ao correr.
      </p>
      <p>
        <strong>Dica:</strong> O personagem não pode{" "}
        <strong>virar a direita</strong>, mas o que acontece se a gente{" "}
        <strong>virar a esquerda</strong> mais de uma vez?
      </p>
      <button type="button" onClick={() => handleModal(false)}>
        Entendi!
      </button>
    </div>
  );
}
