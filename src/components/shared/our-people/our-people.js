import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "../container/container";

let ourPeopleList = [
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
  { title: 'Facundo Corsi', desc: 'Chief Executive Officer ' },
  { title: 'Florencia La Greca', desc: 'UX Designer' },
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