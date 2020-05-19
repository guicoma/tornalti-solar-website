import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from '../utils';

import imageJumbo from '../assets/iso_panels2.png';
import imageCloud1 from '../assets/cloud1.png';
import imageCloud2 from '../assets/cloud2.png';

class Banner5 extends React.PureComponent {
  render() {
    const { isMobile, ...tagProps } = this.props;
    const { dataSource } = tagProps;
    delete tagProps.dataSource;
    const animType = {
      queue: 'bottom',
      one: {
        y: '+=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
    };
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            {...dataSource.childWrapper}
            componentProps={{
              md: dataSource.childWrapper.md,
              xs: dataSource.childWrapper.xs,
            }}
          >
            {dataSource.childWrapper.children.map(getChildrenToRender)}
          </QueueAnim>
          <TweenOne animation={animType.one} key="title" {...dataSource.image}>
            {!isMobile && <img src={imageJumbo} width="100%" alt="img" />}
            <img src={imageCloud1} className="cloud1" alt="cloud1" />
            <img src={imageCloud2} className="cloud2" alt="cloud2" />
            {/* <img src={imageSun} className="sun" alt="sun" /> */}
          </TweenOne>
        </div>
      </div>
    );
  }
}
export default Banner5;
