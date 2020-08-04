import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "../container/container";

let ourPeopleList = [
  { title: 'ANNELISE ROBINS', desc: 'Associate. Communications Degree. Devil wears Prada and works for Optego. Mother of 3 (dragons).'},
  { title: 'BÁRBARA LISEO', desc: 'Account Manager. The “Faceless Girl”. PR Degree.'},
  { title: 'MARÍA CLARA ÁLVAREZ ETCHEBEST', desc: ' Account Manager. A.k.a “Clarita”. Life member of Jet.'},
  { title: 'DAYANA CASTRO', desc: 'Content Manager. Mother of Elizabeth. Caribbean girl.' },
  { title: 'FACUNDO CORSI', desc: 'Optego Co-founder. Digital Marketing Specialist. Geek & nerd. Jedi & funko pop collector. Drums of the team.'},
  { title: 'FEDERICO ROULET', desc: 'CTO. First of 7 brothers. Antisocial from 10 a.m. to 6 p.m.'},
  { title: 'FERNANDO CROCE', desc: ' IT, FrontEnd & Influencer. River Plate´s FAN #1. Nina´s father. Publicity Degree.'},
  { title: 'GASTÓN IGUÑA', desc: 'Optego Co-founder. Data-Analytics Specialist. JC’s father, first guitar of the team. Carroll Shelby reincarnation.' },
  { title: 'GUADALUPE PADILLA', desc: 'Digital Guideline Specialist/Media Plan Specialist. Women power representation. Only speaks when she has something to say.'},
  { title: 'MARCOS GARAVAGLIA', desc: `Data-Analytics Junior. The Sleeping Beauty. Carroll Shelby's cousin.`},
  { title: 'MARTÍN RODRÍGUEZ', desc: 'Audiovisual Designer. If you give him a 1-minute video, he transforms it into a 15-second masterpiece.'},
  { title: 'MAXIMILIANO “PANCHO” CORSI', desc: 'Graphic Designer Senior. He’s not called Francisco. ' },
  { title: 'PIO ROULET', desc: 'Graphic Designer. Former Menem´s godson. Actually:  The “Lobizón”. ' },
  { title: 'FLORENCIA LA GRECA', desc: 'UX/UI Specialist. The only thing that matters is her pink hair.'},
  { title: 'MANUEL VILLALONGA', desc: 'Senior Data Analyst and cool trends enthusiast. Brit pop lover' },
  { title: 'JUANU HAEDO', desc: 'Senior Data Analyst. As he did not want to pass us a bio, we left it empty.'},
  { title: 'SABRINA ANIDO', desc: 'Head of administration. Accountant and HR specialist. Terror of taxes and numbers.'},
]

const OurPeople = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  // const iconGenerator = (name) => {
  //   const Icon = iconsComponents[name];
  //   console.log(Icon);
  //   return <Icon />;
  // }

  return (
    <section className="our-people-section">
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <Container>
            <ul className="our-people-grid animate__animated animate__fadeInUp">
              {ourPeopleList.map((item) =>
                <li className={classnames('our-people-item', 'animate__animated animate__delay-1s', (isVisible && 'animate__fadeInUp'))}>
                  <img src={'./../avatar-placeholder@2x.png'} alt={item.title} className="our-people-item__avatar"/>
                  <h2 className="our-people-item__name">{item.title}</h2>
                  <p className="our-people-item__role">{item.desc}</p>
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