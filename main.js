import './main.css';
import './src/_index.scss';

Catalog.render({
  title: '@appwrite/ui',
  logoSrc: '/logo.svg',
  theme: {
    pageHeadingBackground: '#f02e65'
  },
  pages: [
    {
      path: '/',
      title: 'Introduction',
      src: 'intro.md'
    },
    {
      path: '/typography',
      title: 'Typography',
      src: 'typography.md'
    },
    {
      title: 'Elements',
      pages: [
        {
          path: '/elements/link',
          title: 'Link',
          src: 'elements/link.md'
        },
        {
          path: '/elements/button',
          title: 'Button',
          src: 'elements/button.md'
        },
        {
          path: '/elements/input',
          title: 'Input',
          src: 'elements/input.md'
        },
        {
          path: '/elements/search',
          title: 'Search',
          src: 'elements/search.md'
        },
        {
          path: '/elements/password',
          title: 'Password',
          src: 'elements/password.md'
        },
        {
          path: '/elements/checkbox',
          title: 'Checkbox',
          src: 'elements/checkbox.md'
        },
        {
          path: '/elements/radio',
          title: 'Radio',
          src: 'elements/radio.md'
        },
        {
          path: '/elements/file',
          title: 'File',
          src: 'elements/file.md'
        },
        {
          path: '/elements/select',
          title: 'Select',
          src: 'elements/select.md'
        },
        {
          path: '/elements/tags-input',
          title: 'Tags Input',
          src: 'elements/tags-input.md'
        },
        {
          path: '/elements/helper',
          title: 'Helper',
          src: 'elements/helper.md'
        },
        {
          path: '/elements/pill',
          title: 'Pill',
          src: 'elements/pill.md'
        }
      ]
    },
    {
      title: 'Components',
      pages: [
        {
          path: '/components/upload-box',
          title: 'Upload Box',
          src: 'components/upload-box.md'
        },
        {
          path: '/components/upload-image',
          title: 'Upload Image',
          src: 'components/upload-image.md'
        },
        {
          path: '/components/console-header',
          title: 'Console Header',
          src: 'components/console-header.md'
        },
        {
          path: '/components/side-nav',
          title: 'Side Nav',
          src: 'components/side-nav.md'
        }
      ]
    },
    {
      title: 'Grids',
      pages: [
        {
          path: '/grids/grid-with-side',
          title: 'Grid With Side',
          src: 'grids/grid-with-side.md'
        }
      ]
    }
  ]
}, document.getElementById('catalog'));

const body = document.querySelector('body');
const toggle = document.querySelector('#catalog-theme-toggle > input');
toggle.addEventListener('change', () => {
  body.classList.toggle('theme-dark')
});
