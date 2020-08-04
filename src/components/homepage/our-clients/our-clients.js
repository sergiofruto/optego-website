import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';
import Button from '../../shared/button/button';
import LayeredAnimation from '../../shared/layered-animation/layered-animation';

// const ourClients = [
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/uade.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/rodo.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/samsung.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/rip-curl.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/qm.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/mvl.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/mb.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/movistar.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/ean.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/ey.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/dow.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/coca-cola.png'
//   },
//   {
//     name: 'name',
//     description: '',
//     image: 'https://optego.agency/wp-content/uploads/2020/01/agro.png'
//   },
// ];

const ourClients = [
  {
    name: 'name',
    description: '',
    image: './client-logo-coca-cola.svg'
  },
  {
    name: 'name',
    description: '',
    image: './client-logo-movistar.svg'
  },
  {
    name: 'name',
    description: '',
    image: './client-logo-sams-club.svg'
  },
  {
    name: 'name',
    description: '',
    image: './client-logo-quiksilver.svg'
  },
  {
    name: 'name',
    description: '',
    image: './client-logo-coca-cola.svg'
  },
  {
    name: 'name',
    description: '',
    image: './client-logo-movistar.svg'
  },
];

const OurServices = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="homepage-our-clients">
      <ScrollLine />
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
        <Fragment>
          <div className="square-animation">
            {<LayeredAnimation isVisible={isVisible} />}
          </div>
          <Container>
            <AsideMark number="04" tag="our clients" />
            <div className="content">
              <SectionTitle text="our clients" isVisible={isVisible} />
              <SectionSubtitle
                text="Optego’s family (that's what we call them) and our work with the best."
                isVisible={isVisible}
              />
              <ul className={classnames('our-clients-grid', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                {ourClients.map((item) =>
                  <li className="our-clients-item">
                    <a className="client-link" href="#">
                      <img className="client-logo" src={item.image} alt={item.name} />
                    </a>
                  </li>
                )}
              </ul>
              <div className="button-row">
                <Button text="view all clients" link="#" arrow />
              </div>
            </div>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurServices;