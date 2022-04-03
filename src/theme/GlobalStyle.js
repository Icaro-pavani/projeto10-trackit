import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */
    
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Playball&display=swap');

    * {
        box-sizing: border-box;
        --color-complete-habits-day: #8CC654;
        --color-incomplete-habits-day: #EA5766;
        --background-login-color: #fff;
        --theme-color: #52b6ff;
        --input-border-color: #d5d5d5;
        --text-color: #666;
        --placeholder-color: #dbdbdb;
        --disabled-color: #f2f2f2;
        --routes-title-color: #126ba5;
        --menu-background-color: #fff;
        --header-background-color: #126ba5;
        --checked-color: #8fc549;
        --unchecked-color: #e7e7e7;
    }
    
    html,
    body {
        font-family: 'Lexend Deca', sans-serif;
        background-color: #f2f2f2;
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden; 
    }
`;

export default GlobalStyle;