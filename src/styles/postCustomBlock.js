import { css } from "styled-components";

const postCustomBlockStyle = css`
  .custom-block {
    margin: 1em 0;
    background: ${props => props.theme.colors.white};
  }
  .custom-block-heading {
    font-weight: 600;
    .emoji {
      width: 1.2em !important;
      height: 1.2em !important;
      vertical-align: -0.2em !important;
    }
  }
  .custom-block-body {
    font-size: 0.92em;
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
    h5 {
      font-size: 1.05em;
      margin: 20px 0 5px;
    }
  }
  & > *:first-child {
    margin-top: 0;
  }
  .custom-block.simple {
    padding: 1em 1.2em;
    border-radius: 5px;
    .custom-block-heading {
      font-size: 1.1em;
    }
  }
  .custom-block.info,
  .custom-block.alert,
  .custom-block.notice {
    padding: 0.7em 1em;
    border-left: solid 4px ${props => props.theme.colors.blackLight};
    border-radius: 1px 3px 3px 1px;
  }
  .custom-block.alert {
    border-left-color: ${props => props.theme.colors.red};
    background: #e3f4fa;
    .custom-block-heading {
      color: ${props => props.theme.colors.red};
    }
  }
  .custom-block.notice {
    border-left-color: ${props => props.theme.colors.orange};
    background: #e9fff8;
    .custom-block-heading {
      color: ${props => props.theme.colors.orange};
    }
  }
  .custom-block.image-small,
  .custom-block.image-medium {
    background: ${props => props.theme.colors.white};
    padding: 1.5em;
    text-align: center;
    border-radius: 5px;
    .gatsby-resp-image-wrapper {
      margin: 0;
      border: none;
      box-shadow: 0 5px 15px -5px rgba(40, 50, 70, 0.15);
    }
  }
  .custom-block.image-small .gatsby-resp-image-wrapper {
    max-width: 350px !important;
    border: none;
  }
  .custom-block.image-medium .gatsby-resp-image-wrapper {
    max-width: 450px !important;
    border: none;
  }
`;

export default postCustomBlockStyle;
