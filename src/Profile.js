import React, { Component } from 'react'
import axios from 'axios'

const IMAGES = {
  'Luke Skywalker': require('./images/1.jpg'),
  'C-3PO': require('./images/2.jpeg'),
  R2D2: require('./images/3.jpg'),
  'Darth Vader': require('./images/4.jpeg'),
  'Leia Organa': require('./images/5.jpg'),
  'Owen Lars': require('./images/6.jpg'),
  'Beru Whitesun lars': require('./images/7.jpg'),
  'R5-D4': require('./images/8.jpg'),
  'Biggs Darklighter': require('./images/9.jpeg'),
  'Obi-Wan Kenobi': require('./images/10.jpeg'),
  'Anakin Skywalker': require('./images/11.jpg'),
  'Wilhuff Tarkin': require('./images/wilhuff_tarkin.jpeg'),
  Chewbacca: require('./images/13.jpg'),
  'Han Solo': require('./images/14.jpg'),
  Greedo: require('./images/15.jpeg'),
  'Jabba Desilijic Tiure': require('./images/16.jpg'),
  'Wedge Antilles': require('./images/17.jpg'),
  'Jek Tono Porkins': require('./images/18.jpeg'),
  Yoda: require('./images/19.jpeg'),
  Palpatine: require('./images/20.jpg'),
  'Boba Fett': require('./images/Boba-Fett_61fdadfd.jpeg'),
  'IG-88': require('./images/IG88.jpeg'),
  Bossk: require('./images/bossk.jpeg'),
  'Lando Calrissian': require('./images/Lando.jpg'),
  Lobot: require('./images/lobot.jpeg'),
  Ackbar: require('./images/ackbar1.jpg'),
  'Mon Mothma': require('./images/monmothma.jpeg'),
  'Arvel Crynyd': require('./images/Arvel-crynyd.jpg'),
  'Wicket Systri Warrick': require('./images/wicket.jpeg'),
  'Nien Nunb': require('./images/nien.jpeg'),
  'Qui-Gon Jinn': require('./images/Qui-Gon-Jinn_d89416e8.jpeg'),
  'Nute Gunray': require('./images/nute_gunray.jpeg'),
  'Finis Valorum': require('./images/finis_val.jpeg'),
  'Jar Jar Binks': require('./images/jarjar.jpg'),
  'Roos Tarpals': require('./images/roos_tarpals.jpg'),
  'Rugor Nass': require('./images/rugor_nass.jpg'),
  'Ric Olié': require('./images/ric_olie.jpeg'),
  Watto: require('./images/watto.jpeg'),
  Sebulba: require('./images/sebulba_1f3fe180.jpeg'),
  'Quarsh Panaka': require('./images/quarsh.jpeg'),
  'Shmi Skywalker': require('./images/Shmi_Skywalker_002.jpg'),
  'Darth Maul': require('./images/darth_maul.webp'),
  'Bib Fortuna': require('./images/bib_fortuna.jpeg'),
  'Ayla Secura': require('./images/ayla_secura.jpg'),
  'Dud Bolt': require('./images/Dud_Bolt.jpg'),
  Gasgano: require('./images/gasgano.jpg'),
  'Ben Quadinaros': require('./images/ben_quad.jpeg'),
  'Mace Windu': require('./images/mace_windu.jpg'),
  'Ki-Adi-Mundi': require('./images/ki_adi_mundi.jpeg'),
  'Kit Fisto': require('./images/kit_fisto.jpeg'),
  'Eeth Koth': require('./images/Eeth-Koth2_246ea172.jpeg'),
  'Adi Gallia': require('./images/adi_gallia.jpeg'),
  'Saesee Tiin': require('./images/Saesse_tiin.jpg'),
  'Yarael Poof': require('./images/Yarael_Poof_Canon.jpg'),
  'Plo Koon': require('./images/plo_koon.jpeg'),
  'Mas Armedda': require('./images/mas-amedda.jpeg'),
  'Gregor Typho': require('./images/gregor_typho.jpeg'),
  Cordé: require('./images/Corde.jpg'),
  'Cliegg Lars': require('./images/cliegg_lars.jpeg'),
  'Poggle the Lesser': require('./images/poggle.jpeg'),
  'Luminara Unduli': require('./images/luminara-unduli-1-retina_1824949d.jpeg'),
  'Barriss Offee': require('./images/barris.jpg'),
  Dormé: require('./images/dorme.jpg'),
  Dooku: require('./images/dooku.jpeg'),
  'Bail Prestor Organa': require('./images/bail-organa.jpeg'),
  'Jango Fett': require('./images/jango.jpeg'),
  'Zam Wesell': require('./images/zam.jpg'),
  'Dexter Jettster': require('./images/dexter.jpeg'),
  'Lama Su': require('./images/Lama_Su.jpg'),
  'Taun We': require('./images/taun_ we.jpeg'),
  'Jocasta Nu': require('./images/jocasta-nu_a3b32f08.jpeg'),
  'Ratts Tyerell': require('./images/ratts.jpeg'),
  'R4-P17': require('./images/R4P17.jpg'),
  'Wat Tambor': require('./images/wat-tambor.jpeg'),
  'San Hill': require('./images/san-hill_852a226d.jpeg'),
  'Shaak Ti': require('./images/shaak_ti_9523e7c7.jpeg'),
  Grievous: require('./images/Grievous_c9df9cb5.jpeg'),
  Tarfful: require('./images/tarrful_f20d3412.jpeg'),
  'Raymous Antilles': require('./images/raymus.jpg'),
  'Sly Moore': require('./images/SlyMoore.jpg'),
  'Tion Medon': require('./images/tionmedon_.jpeg'),
  Finn: require('./images/finn.webp'),
  Rey: require('./images/rey.jpg'),
  'Poe Dameron': require('./images/poe-dameron_70f5aee2.jpeg'),
  BB8: require('./images/bb8.jpg'),
  'Captain Phasma': require('./images/captain-phasma-armor.jpg'),
  'Padmé Amidala': require('./images/padme.jpg')
}

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: {},
      homePlanet: {}
    }
  }

  componentDidMount = () => {
    axios.get(this.props.speciesURL).then(response => {
      this.setState({
        species: response.data
      })
    })

    axios.get(this.props.homePlanetURL).then(response => {
      this.setState({
        homePlanet: response.data
      })
    })
  }

  backToCharactersButton = () => {
    this.props.displayCharacterLists()
  }

  render() {
    return (
      <section className="profile">
        <img src={IMAGES[this.props.name]} alt="Star Wars Character" />
        <h2>{this.props.name}</h2>
        <ul>
          <li>Species: {this.state.species.name}</li>
          <li>Home Planet: {this.state.homePlanet.name}</li>
        </ul>
        <button className="list-button back" onClick={this.backToCharactersButton}>
          Back to Characters
        </button>
      </section>
    )
  }
}

export default Profile
