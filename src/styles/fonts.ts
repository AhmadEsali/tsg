import { css } from 'styled-components';
// import HubotFont from 'assets/fonts/hubot/TTF/Hubot-Sans-Regular.ttf';
// import SatoshiMedium from '../Satoshi-Medium.woff2';
// import font from assets/fonts/hubot/TTF/Hubot-Sans-Regular.ttf
export default css`
  @font-face {
    font-family: 'Satoshi-Variable';
    src: url('/fonts/satoshi/Satoshi-Variable.woff2') format('woff2'),
      url('/fonts/satoshi/Satoshi-Variable.woff') format('woff'),
      url('/fonts/satoshi/Satoshi-Variable.ttf') format('truetype');
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Switzer-Variable';
    src: url('/fonts/switzer/Switzer-Variable.woff2') format('woff2'),
      url('/fonts/switzer/Switzer-Variable.woff') format('woff'),
      url('/fonts/switzer/Switzer-Variable.ttf') format('truetype');
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
  }
`;
