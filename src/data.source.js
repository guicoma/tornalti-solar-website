import React from 'react';

import imageLogo from './assets/logo_tornalti.svg';
import imageLogoText from './assets/logo_icon_text.svg';
// import imageMap from './assets/menorca_outline_blue.png';
import imageMap from './assets/menorca_outline_blue_markers.png';
import iconCiutadella from './assets/icon_ciut.png';
import iconMao from './assets/icon_mao.png';
import iconBinibequer from './assets/icon_bini.png';


export const NavbarDataSource = {
  wrapper: { className: 'navbar home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'navbar-logo',
    children: imageLogoText,
  },
  Menu: {
    className: 'navbar-menu',
    children: [
      {
        name: 'item0',
        className: 'navbar-item',
        children: {
          href: '#',
          children: [{ children: 'Proyectos', name: 'text' }],
        }
      },
      {
        name: 'item1',
        className: 'navbar-item',
        children: {
          href: '#',
          children: [{ children: 'Contacto', name: 'text' }],
        },
      },
    //   {
    //     name: 'item2',
    //     className: 'navbar-item',
    //     children: {
    //       href: '#',
    //       children: [{ children: <GlobalOutlined style={{fontSize: 18}} />, name: 'icon' }],
    //     },
    //     subItem: [
    //         {
    //           name: 'sub0',
    //           className: 'item-sub',
    //           children: {
    //             className: 'item-sub-item',
    //             children: [
    //               {
    //                 name: 'image0',
    //                 className: 'item-image',
    //                 children:
    //                   'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
    //               },
    //               {
    //                 name: 'title',
    //                 className: 'item-title',
    //                 children: 'Ant Design',
    //               },
    //               {
    //                 name: 'content',
    //                 className: 'item-content',
    //                 children: '企业级 UI 设计体系',
    //               },
    //             ],
    //           },
    //         },
    //         {
    //           name: 'sub1',
    //           className: 'item-sub',
    //           children: {
    //             className: 'item-sub-item',
    //             children: [
    //               {
    //                 name: 'image0',
    //                 className: 'item-image',
    //                 children:
    //                   'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
    //               },
    //               {
    //                 name: 'title',
    //                 className: 'item-title',
    //                 children: 'Ant Design',
    //               },
    //               {
    //                 name: 'content',
    //                 className: 'item-content',
    //                 children: '企业级 UI 设计体系',
    //               },
    //             ],
    //           },
    //         },
    //       ],
    //   },
    ],
  },
  mobileMenu: { className: 'navbar-mobile-menu' },
};

export const JumboDataSource = {
  wrapper: { className: 'home-page-wrapper jumbo' },
  page: { className: 'home-page jumbo-page' },
  childWrapper: {
    className: 'jumbo-title-wrapper',
    children: [
      { name: 'title', children: 'Tornaltí Solar S.L.', className: 'jumbo-title' },
      {
        name: 'explain',
        className: 'jumbo-explain',
        children: 'Energías Renovables',
      },
      {
        name: 'content',
        className: 'jumbo-content',
        children: 'Promotor de parques fotovoltaicos.',
      },
      {
        name: 'button',
        className: 'jumbo-button-wrapper',
        children: {
          href: '#',
          className: 'jumbo-button',
          type: 'primary',
          children: 'Contacto',
        },
      },
    ],
  },
  image: {
    className   : 'jumbo-image'
  },
};

export const Content0DataSource = {
    wrapper: { className: 'home-page-wrapper content0-wrapper' },
    page: { className: 'home-page content0' },
    description: { className: 'description' },
    OverPack: { playScale: 0.1, className: 'triage-wrapper' },
    titleWrapper: {
      className: 'title-wrapper',
      children: [{ name: 'title', children: 'Proyectos' }],
    },
    mapWrapper: {
        className: 'map-wrapper',
        image: {
            className: 'map',
            children: imageMap
        },
        labels: [
            { className: 'point1', children: ''},
            { className: 'point2', children: ''},
            { className: 'point3', children: ''},
            { className: 'label1', children: 'Ciutadella'},
            { className: 'label2', children: 'Maó'},
            { className: 'label3', children: 'Binibèquer'},
        ],
    },
    childWrapper: {
      className: 'content0-block-wrapper',
      children: [
        {
          name: 'block0',
          className: 'content0-block',
          md: 8,
          xs: 24,
          children: {
            className: 'content0-block-item',
            children: [
              {
                name: 'image',
                className: 'content0-block-icon',
                children: iconCiutadella,
              },
              {
                name: 'title',
                className: 'content0-block-title',
                children: 'Rafal Vell',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Localización',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Ciutadella',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Poténcia',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: '2MWp',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Tipo',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Seg. a un eje',
              },
            ],
          },
        },
        {
          name: 'block1',
          className: 'content0-block',
          md: 8,
          xs: 24,
          children: {
            className: 'content0-block-item',
            children: [
              {
                name: 'image',
                className: 'content0-block-icon',
                children: iconMao,
              },
              {
                name: 'title',
                className: 'content0-block-title',
                children: 'Tornaltí Cases',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Localización',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Maó',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Poténcia',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: '2MWp',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Tipo',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Seg. a un eje (estacional)',
              },
            ],
          },
        },
        {
          name: 'block2',
          className: 'content0-block',
          md: 8,
          xs: 24,
          children: {
            className: 'content0-block-item',
            children: [
              {
                name: 'image',
                className: 'content0-block-icon',
                children: iconBinibequer,
              },
              {
                name: 'title',
                className: 'content0-block-title',
                children: 'Binibeca Vell',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Localización',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Binibèquer',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Poténcia',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: '2MWp',
              },
              {
                name: 'item',
                className: 'content0-block-label',
                children: 'Tipo',
              },
              {
                name: 'value',
                className: 'content0-block-value',
                children: 'Instalación fija',
              },
            ],
          },
        },
      ],
    },
};

export const ContactDataSource = {
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Contacto' }],
  },
}

export const FooterDataSource = {
    wrapper: { className: 'home-page-wrapper footer-wrapper' },
    OverPack: { className: 'footer', playScale: 0.2 },
    block: {
      className: 'home-page',
      gutter: 0,
      children: [
        {
          name: 'block0',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            className: 'logo',
            children: imageLogo,
          },
          childWrapper: {
            className: 'slogan',
            children: [
              {
                name: 'content0',
                children: 'Tornaltí Solar S.L.',
              },
            ],
          },
        },
        // {
        //   name: 'block1',
        //   xs: 24,
        //   md: 6,
        //   className: 'block',
        //   title: { children: 'Sitemap' },
        //   childWrapper: {
        //     children: [
        //       { name: 'link0', href: '#', children: 'Proyectos' },
        //       { name: 'link1', href: '#', children: 'Contacto' },
        //     ],
        //   },
        // },
        // {
        //   name: 'block2',
        //   xs: 24,
        //   md: 6,
        //   className: 'block',
        //   title: { children: '关于' },
        //   childWrapper: {
        //     children: [
        //       { href: '#', name: 'link0', children: 'FAQ' },
        //       { href: '#', name: 'link1', children: '联系我们' },
        //     ],
        //   },
        // },
        // {
        //   name: 'block3',
        //   xs: 24,
        //   md: 6,
        //   className: 'block',
        //   title: { children: '资源' },
        //   childWrapper: {
        //     children: [
        //       { href: '#', name: 'link0', children: 'Ant Design' },
        //       { href: '#', name: 'link1', children: 'Ant Motion' },
        //     ],
        //   },
        // },
      ],
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
      className: 'copyright',
      children: (
        <span>
          ©2020 by <a href="https://tornaltisolar.com">Tornalti Solar</a> All Rights
          Reserved
        </span>
      ),
    },
};
