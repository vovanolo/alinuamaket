import React, { useState } from 'react';
import $ from 'jquery';

export default function ContactsPopup() {
  const [show, setShow] = useState(false);

  const styles = {
    mpSocial: {
      display: show ? 'block' : 'none',
    },
  };

  return (
    <div>
      <div className="mp-coll mp-bg-color-violet">
        <div className="shows">
          <div className="mp-social" style={styles.mpSocial}>
            <a
              href="https://instagram.com/alin_services_for_you?igshid=12br995xgk9tr"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 661 649.17">
                <title>icon</title>
                <g id="fotter">
                  <ellipse
                    className="cb-inst-cls-1"
                    cx="330.66"
                    cy="324.37"
                    rx="330.44"
                    ry="324.38"
                  ></ellipse>
                  <g>
                    <rect
                      className="cb-inst-cls-2"
                      x="140.84"
                      y="135.13"
                      width="391.74"
                      height="391.74"
                      rx="57.61"
                      ry="57.61"
                    ></rect>
                    <circle
                      className="cb-inst-cls-2"
                      cx="336.71"
                      cy="331"
                      r="103.7"
                    ></circle>
                    <circle
                      className="cb-inst-cls-3"
                      cx="463.45"
                      cy="192.74"
                      r="23.04"
                    ></circle>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="mp-social" style={styles.mpSocial}>
            <a href="viber://chat?number=%2B380987771600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545 535">
                <title>icon</title>
                <g id="page2">
                  <ellipse
                    className="cb-viber-cls-1"
                    cx="272.31"
                    cy="267.15"
                    rx="272.59"
                    ry="267.59"
                  ></ellipse>
                  <path
                    className="cb-viber-cls-2"
                    d="M192.22,387.55c3,0,0,66.22,0,72.24s3,3,12-6,40.63-43.64,54.17-57.19C272,396.58,427,420.66,427,288.23c0-42.14,27.09-162.54-126.42-162.54-126.41,0-177.58,3-177.58,132.44C123,345.42,153.09,387.55,192.22,387.55Z"
                  ></path>
                  <path
                    className="cb-viber-cls-1"
                    d="M241.88,232.54c-6,6-18.06,12-6,30.1S275,301.77,281,304.78s18.06,0,24.08-9,21.07-6,39.13,9,24.07,24.08,12,36.12-21.07,33.11-60.2,9-87.29-54.18-105.35-102.34-18.06-48.15,0-66.21,33.11-3,42.14,12S253.92,220.51,241.88,232.54Z"
                  ></path>
                  <path
                    className="cb-viber-cls-1"
                    d="M308.07,228.12c3.95,3.95,9.21,10.53,9.87,20.39s-3.29,11.18-6.58,11.84-7.23-3.29-7.23-9.87a18,18,0,0,0-18.42-18.41c-6.57,0-10.52-3.95-9.86-7.23s2-7.24,11.84-6.58S304.13,224.18,308.07,228.12Z"
                  ></path>
                  <path
                    className="cb-viber-cls-1"
                    d="M312.68,221.55c3.94,3.94,13.81,17.75,14.47,30.25s2,15.13,7.23,15.13,5.92-5.92,5.92-15.13-2.63-25-17.76-40.12l.66.66c-15.13-15.13-30.91-17.76-40.12-17.76S268,195.24,268,200.5s2.63,6.58,15.12,7.24,26.31,10.52,30.26,14.46"
                  ></path>
                  <path
                    className="cb-viber-cls-1"
                    d="M339,197.21c19.08,19.08,28.28,40.78,28.28,58.54s-5.92,20.38-7.23,20.38-8.55,3.29-8.55-21.7-17.76-41.43-23-46.69-21.7-23-46.69-23-21.7-7.24-21.7-8.55,2.63-7.24,20.38-7.24S319.91,178.14,339,197.21Z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="mp-social" style={styles.mpSocial}>
            <a href="https://telegram.me/alin_services_for_you" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545 535">
                <title>icon</title>
                <g id="page2">
                  <ellipse
                    className="cb-telegram-cls-1"
                    cx="272.01"
                    cy="266.5"
                    rx="271.48"
                    ry="266.5"
                  ></ellipse>
                  <path
                    className="cb-telegram-cls-2"
                    d="M371.5,149.84c-17.2,6.88-111.79,43-111.79,43s-95.25,37.84-123.82,49.87c-27,11.37-27,18.52-12,24.08,6.65,2.47,63.63,18.92,63.63,18.92s13.76,43,20.64,67.07,20.64,17.2,25.8,12l31-31s43,31,63.64,46.44,25.79-5.16,29.23-20.64,32.68-158.22,39.56-185.74S388.7,143,371.5,149.84Zm-26.66,47.29C339.68,200.57,224.46,302,224.46,302L221,346.75s-18.92-55-20.64-60.19-1.72-6.88,3.44-10.32S329.37,198.85,339.68,192,350,193.69,344.84,197.13Z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div
          className="mp-bt-coll"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          <svg
            className="cb-close"
            style={styles.mpSocial}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 545 535"
          >
            <title>icon</title>
            <g id="page2">
              <ellipse
                className="cb-close-cls-1"
                cx="272.01"
                cy="266.88"
                rx="271.87"
                ry="266.88"
              ></ellipse>
              <g>
                <line
                  className="cb-close-cls-2"
                  x1="374.7"
                  y1="167.47"
                  x2="172.12"
                  y2="370.05"
                ></line>
                <line
                  className="cb-close-cls-2"
                  x1="374.7"
                  y1="370.05"
                  x2="172.12"
                  y2="167.47"
                ></line>
              </g>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660.25 648.81">
            <g id="fotter">
              <ellipse
                className="cb-phone-cls-1"
                cx="329.76"
                cy="323.08"
                rx="330.44"
                ry="324.38"
              ></ellipse>
            </g>
            <g id="page2">
              <rect
                className="cb-phone-cls-2"
                x="192.92"
                y="53.41"
                width="282"
                height="547.42"
                rx="41.47"
                ry="41.47"
              ></rect>
              <rect
                className="cb-phone-cls-1"
                x="201.46"
                y="70"
                width="264.91"
                height="505.95"
                rx="38.64"
                ry="38.64"
              ></rect>
              <path
                className="cb-phone-cls-2"
                d="M311.06,292.7c-5.75,5.75-17.27,11.51-5.75,28.78s37.41,37.41,43.16,40.29,17.27,0,23-8.63,20.14-5.76,37.41,8.63,23,23,11.51,34.53-20.14,31.66-57.56,8.64-83.46-51.8-100.72-97.85-17.27-46,0-63.32,31.65-2.87,40.29,11.52S322.57,281.19,311.06,292.7Z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
