import React, { useState } from "react";

import Modal from "../Modal";

import "./game.css";

export default function Game() {
  const [showModal, setShowModal] = useState(true);
  return (
    <React.Fragment>
      {showModal ? <Modal handleModal={setShowModal} /> : null}
      <div id="game"></div>
      <div id="blockly"></div>
      <button id="run">Correr</button>
      <xml id="toolbox" style={{ display: "none" }}>
        <block type="when_run"></block>
        <block type="move_forward"></block>
        <block type="turn_left"></block>
        <block type="controls_repeat_ext"></block>
        <block type="math_number">
          <field name="NUM">3</field>
        </block>
      </xml>
    </React.Fragment>
  );
}
