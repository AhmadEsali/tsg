import { css } from 'styled-components';

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: var(--main-font);
    font-size: 1.6rem;
    line-height: 1.4;
    overflow-x: hidden;
  }

  .main-container {
    padding: 24px 147px 600px;
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  .icon {
    div {
      display: flex;
    }
  }

  // Modal

  .app-modal-close {
    margin-left: auto;
  }

  .app-modal {
    max-width: 1400px;
    padding: 32px !important;
    border-radius: 16px;
    box-shadow: none !important ;
    &:focus {
      outline: none;
    }
  }
`;
