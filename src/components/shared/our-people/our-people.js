import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "../container/container";

let ourPeopleList = [
  { photo:'./../people/Annelise.jpg' ,title: 'ANNELISE ROBINS', desc: 'Associate. Communications Degree. Devil wears Prada and works for Optego. Mother of 3 (dragons).'},
  { photo:'./../people/Barbi.jpg' ,title: 'BÁRBARA LISEO', desc: 'Account Manager. The “Faceless Girl”. PR Degree.'},
  { photo:'./../people/Clarita.jpg' ,title: 'MARÍA CLARA ÁLVAREZ ETCHEBEST', desc: ' Account Manager. A.k.a “Clarita”. Life member of Jet.'},
  { photo:'./../people/Dayana.jpg' ,title: 'DAYANA CASTRO', desc: 'Content Manager. Mother of Elizabeth. Caribbean girl.' },
  { photo:'./../people/Facu.jpg' ,title: 'FACUNDO CORSI', desc: 'Optego Co-founder. Digital Marketing Specialist. Geek & nerd. Jedi & funko pop collector. Drums of the team.'},
  { photo:'./../people/Fede.jpg' ,title: 'FEDERICO ROULET', desc: 'CTO. First of 7 brothers. Antisocial from 10 a.m. to 6 p.m.'},
  { photo:'./../people/Fer.jpg' ,title: 'FERNANDO CROCE', desc: ' IT, FrontEnd & Influencer. River Plate´s FAN #1. Nina´s father. Publicity Degree.'},
  { photo:'./../people/Flor.png' ,title: 'FLORENCIA LA GRECA', desc: 'UX/UI Specialist. The only thing that matters is her pink hair.'},
  { photo:'./../people/Gaston.jpg' ,title: 'GASTÓN IGUÑA', desc: 'Optego Co-founder. Data-Analytics Specialist. JC’s father, first guitar of the team. Carroll Shelby reincarnation.' },
  { photo:'./../people/Guadax2.jpg' ,title: 'GUADALUPE PADILLA', desc: 'Digital Guideline Specialist/Media Plan Specialist. Women power representation. Only speaks when she has something to say.'},
  { photo:'./../people/Juanu.jpg' ,title: 'JUANU HAEDO', desc: 'Senior Data Analyst. As he did not want to pass us a bio, we left it empty.'},
  { photo:'./../people/Manuel.jpg' ,title: 'MANUEL VILLALONGA', desc: 'Senior Data Analyst and cool trends enthusiast. Brit pop lover' },
  { photo:'./../people/Marcos.jpg' ,title: 'MARCOS GARAVAGLIA', desc: `Data-Analytics Junior. The Sleeping Beauty. Carroll Shelby's cousin.`},
  { photo:'./../people/avatar-placeholder.png' ,title: 'MARTÍN RODRÍGUEZ', desc: 'Audiovisual Designer. If you give him a 1-minute video, he transforms it into a 15-second masterpiece.'},
  { photo:'./../people/Pancho.jpg' ,title: 'MAXIMILIANO “PANCHO” CORSI', desc: 'Graphic Designer Senior. He’s not called Francisco. ' },
  { photo:'./../people/PIO.jpg' ,title: 'PIO ROULET', desc: 'Graphic Designer. Former Menem´s godson. Actually:  The “Lobizón”. ' },
  { photo:'./../people/Sabrina.jpg' ,title: 'SABRINA ANIDO', desc: 'Head of administration. Accountant and HR specialist. Terror of taxes and numbers.'},
]

const OurPeople = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="our-people-section">
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <Container>
            <ul className="our-people-grid animate__animated animate__fadeInUp">
              {ourPeopleList.map((item) =>
                <li className={classnames('our-people-item', 'animate__animated animate__delay-1s', (isVisible && 'animate__fadeInUp'))}>
                  <div className="our-people-item__card">
                    <div className="our-people-item__inner">
                      <div className="our-people-item__front-face">
                        <img src={item.photo} alt={item.title} className="our-people-item__avatar"/>
                      </div>
                      <div className="our-people-item__back-face">
                        <p className="our-people-item__role">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <h2 className="our-people-item__name">{item.title}</h2>
                </li>
              )}
            </ul>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurPeople;