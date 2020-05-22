import React from 'react';
import TweenOne from 'rc-tween-one';

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer',
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div className="waves">
          <div className="wave-1"></div>
          <div className="wave-2"></div>
          <div className="wave-3"></div>
          <div className="wave-4"></div>
        </div>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          {...dataSource.copyrightWrapper}
        >
          <div {...dataSource.copyrightPage}>
            <div {...dataSource.copyright}>
              {dataSource.copyright.children}
            </div>
          </div>
        </TweenOne>
      </div>
    );
  }
}

export default Footer;
