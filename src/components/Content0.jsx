import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Tilt from 'react-tilt';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils';

import imageSun from '../assets/sun2.png';

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      page,
      description,
      titleWrapper,
      OverPack: overPackData,
      mapWrapper,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...description}>
            <img src={imageSun} alt='description' />
            <div style={{fontSize: '18px'}}>
              <p>
              Tornaltí es una empresa de energías renovables formada por varios profesionales del sector. Con el compromiso con la isla de Menorca contra el cambio climático y aportar a su plan de descarbonización.</p><p>A día de hoy, la empresa tiene en tramitación tres proyectos fotovoltaicos en la isla de Menorca correspondientes a 2 MWp/cu, cuyo objetivo es contribuir, de manera integrada y descentralizada, en la aceleración energética de la isla.
              </p>
            </div>
          </div>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
            <div {...mapWrapper}>
              <div key="title" {...dataSource.image}>
                  <Tilt className="Tilt" options={{ max : 25 }} >
                      <div className="Tilt-inner">
                          {
                              mapWrapper.labels.map((block, i) => {
                                  const { children: item } = block;
                                  return (
                                      <div key={i.toString()} {...block}>
                                          {item}
                                      </div>
                                  );
                              })
                          }
                      </div>
                  </Tilt>
              </div>
            </div>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
