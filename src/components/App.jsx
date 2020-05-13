import React from "react";
import character from "../references/characterElements";
import magic from "../references/magic";

function App() {
  let attributes,
    str,
    dex,
    will,
    health,
    lvl,
    exp,
    feature,
    skill,
    spell,
    newChar,
    items,
    combatGear,
    weaponSpec,
    miscellaneous;

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
    lvl = 1;
    exp = 0;

    console.log(attributes, str, dex, will);

    //Feature
    feature = setRandom(character.features);

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
    weaponSpec = ["+1 armor", "+1 armor, 1 hand"];

    function getWeapon() {
      while (combatGear.length < 4) {
        const weaponVar = getRandom(3);
        const weapon = setRandom(character.weapons[0][weaponVar]);
        const spec = character.weapons[1][weaponVar];

        combatGear.push(weapon);
        weaponSpec.push(spec);
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

    //char object
    newChar = {
      health: health,
      strength: str,
      dexterity: dex,
      will: will,
      level: lvl,
      experience: exp,
      feature: feature,
      skill: skill,
      spells: spell,
      items: items,
      combatGear: combatGear,
      weaponSpec: weaponSpec,
      miscellaneous: miscellaneous
    };

    console.log(newChar);
  }

  return (
    <div className="App">
      <h1>{attributes}</h1>
      <h2>{will}</h2>
      <button onClick={setElements}>Set</button>
      {/* {spell !== undefined && spell}
      {skill !== undefined && skill} */}
    </div>
  );
}

export default App;
