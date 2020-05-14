import React, { useState } from "react";
import character from "../references/characterElements";
import magic from "../references/magic";
import Attributes from "./Attributes";
import List from "./List";

function App() {
  let attributes,
    str,
    dex,
    will,
    health,
    armor,
    attack,
    feature,
    skill,
    spell,
    items,
    combatGear,
    miscellaneous;

  const [newChar, setChar] = useState({
    health: "",
    armor: "",
    attack: "",
    strength: "",
    dexterity: "",
    will: "",
    skill: "",
    spells: "",
    items: "",
    combatGear: "",
    miscellaneous: ""
  });

  function getRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function setRandom(elementIndex) {
    return elementIndex[getRandom(elementIndex.length)];
  }

  function generateSpell() {
    const spellVar = getRandom(2);
    const spellFormula = setRandom(magic.spellTypes[spellVar]);
    let elem1, elem2;

    if (spellFormula[0] === 1) {
      elem1 = setRandom(magic.descriptions.physicalEffect);
    } else if (spellFormula[0] === 3) {
      elem1 = setRandom(magic.descriptions.physicalElement);
    } else if (spellFormula[0] === 4) {
      elem1 = setRandom(magic.descriptions.etherealEffect);
    } else if (spellFormula[0] === 6) {
      elem1 = setRandom(magic.descriptions.etherealElement);
    }

    if (spellFormula[1] === 2) {
      elem2 = setRandom(magic.descriptions.physicalForm);
    } else if (spellFormula[1] === 3) {
      elem2 = setRandom(magic.descriptions.physicalElement);
    } else if (spellFormula[1] === 5) {
      elem2 = setRandom(magic.descriptions.etherealForm);
    } else if (spellFormula[1] === 6) {
      elem2 = setRandom(magic.descriptions.etherealElement);
    }

    spell = elem1 + " " + elem2;

    return spell;
  }

  function setElements() {
    //Attributes
    attributes = setRandom(character.abilities);
    str = attributes[0];
    dex = attributes[1];
    will = attributes[2];
    health = 4;
    armor = 8;
    attack = 0;
    console.log(attributes, str, dex, will);

    //Feature
    feature = setRandom(character.features);

    if (feature === character.features[0]) {
      attack++;
    }

    if (feature === character.features[1]) {
      generateSpell();
    } else {
      spell = undefined;
    }

    if (feature === character.features[2]) {
      skill = setRandom(character.skills);
    } else {
      skill = undefined;
    }

    console.log(feature, skill, spell);

    //Items
    items = [];

    function getItem() {
      while (items.length < 6) {
        const item = setRandom(character.gear);
        items.push(item);
      }
    }

    getItem();

    console.log(items);

    //Combat Gear
    combatGear = ["light armor", "shield"];

    function getWeapon() {
      while (combatGear.length < 4) {
        const weaponVar = getRandom(3);
        const weapon = setRandom(character.weapons[weaponVar]);

        combatGear.push(weapon);
      }
    }

    getWeapon();

    //Miscellaneous

    miscellaneous = [];

    function getMiscellaneous() {
      const appearence = setRandom(character.appearances);
      const physicalDetail = setRandom(character.physicalDetails);
      const background = setRandom(character.backgrounds);
      const clothing = setRandom(character.clothes);
      const personality = setRandom(character.personalities);
      const mannerism = setRandom(character.mannerisms);

      miscellaneous.push(
        appearence,
        physicalDetail,
        background,
        clothing,
        personality,
        mannerism
      );
    }

    getMiscellaneous();

    setChar({
      health: health,
      armor: armor,
      attack: "+" + attack,
      strength: str,
      dexterity: dex,
      will: will,
      skill: skill,
      spells: spell,
      items: items,
      combatGear: combatGear,
      miscellaneous: miscellaneous
    });
    console.log(newChar);
  }

  //Create Name
  const [charName, setName] = useState("");
  const [headingText, setHeading] = useState("John Doe");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleName(event) {
    if (charName === "") {
      setHeading("John Doe");
    } else {
      setHeading(charName);
    }
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleName}>
        <input
          placeholder="Write Character Name"
          onChange={handleChange}
          value={charName}
          type="text"
        />
        <button onClick={setElements}>Set</button>
      </form>
      <h1>{headingText}</h1>
      <Attributes
        key1="Health"
        value1={newChar.health}
        key2="Armor"
        value2={newChar.armor}
        key3="Atk Bonus"
        value3={newChar.attack}
      />
      <Attributes
        key1="STR"
        value1={newChar.strength}
        key2="DEX"
        value2={newChar.dexterity}
        key3="WILL"
        value3={newChar.will}
      />
      <List
        title="Spells"
        item1={newChar.spells}
        css="spellList"
        complete={false}
      />
      <div className="flexRow">
        <List
          title="Items"
          item1={newChar.items[0]}
          item2={newChar.items[1]}
          item3={newChar.items[2]}
          item4={newChar.items[3]}
          item5={newChar.items[4]}
          item6={newChar.items[5]}
          complete={true}
        />
        <List
          title="Combat Gear"
          item1={newChar.combatGear[0]}
          item2={newChar.combatGear[1]}
          item3={newChar.combatGear[2]}
          item4={newChar.combatGear[3]}
          complete={true}
        />
      </div>
      <div className="flexRow" style={{ fontSize: "10px" }}>
        <p className="miscellaneous">
          Appearence:
          <br />
          {newChar.miscellaneous[0]}
        </p>
        <p className="miscellaneous">
          Physical Detail:
          <br />
          {newChar.miscellaneous[1]}
        </p>
        <p className="miscellaneous">
          Background:
          <br />
          {newChar.miscellaneous[2]}
        </p>
        <p className="miscellaneous">
          Personality:
          <br />
          {newChar.miscellaneous[4]}
        </p>
        <p className="miscellaneous">
          Clothes:
          <br />
          {newChar.miscellaneous[3]}
        </p>
        <p className="miscellaneous">
          Mannerism:
          <br />
          {newChar.miscellaneous[5]}
        </p>
      </div>
      <p>
        You are {charName === "" ? "John Doe" : charName}, a{" "}
        {newChar.miscellaneous[4]} {newChar.miscellaneous[2]}. Your appearence
        is {newChar.miscellaneous[0]}, with {newChar.miscellaneous[1]}, and you
        wear {newChar.miscellaneous[3]} clothes. You are known for your
        mannerism: {newChar.miscellaneous[5]}.
      </p>
    </div>
  );
}

export default App;
