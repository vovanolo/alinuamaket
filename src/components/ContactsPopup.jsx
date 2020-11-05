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
            <a href="https://wa.me/380987771600" target="_blank">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <title>icon</title>{' '}
                <ellipse
                  className="cb-whatsapp-cls-1"
                  cx="262.01"
                  cy="256.5"
                  rx="110.0"
                  ry="110.0"
                ></ellipse>{' '}
                <path
                  className="cb-whatsapp-cls-1"
                  d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm5.425781 405.050781c-.003906 0 .003907 0 0 0h-.0625c-25.644531-.011719-50.84375-6.441406-73.222656-18.644531l-81.222656 21.300781 21.738281-79.375c-13.410156-23.226562-20.464844-49.578125-20.453125-76.574219.035156-84.453124 68.769531-153.160156 153.222656-153.160156 40.984375.015625 79.457031 15.96875 108.382813 44.917969 28.929687 28.953125 44.851562 67.4375 44.835937 108.363281-.035156 84.457032-68.777343 153.171875-153.21875 153.171875zm0 0"
                ></path>{' '}
                <path
                  className="cb-whatsapp-cls-2"
                  d="m261.476562 124.46875c-70.246093 0-127.375 57.105469-127.40625 127.300781-.007812 24.054688 6.726563 47.480469 19.472657 67.75l3.027343 4.816407-12.867187 46.980468 48.199219-12.640625 4.652344 2.757813c19.550781 11.601562 41.964843 17.738281 64.816406 17.746094h.050781c70.191406 0 127.320313-57.109376 127.351563-127.308594.011718-34.019532-13.222657-66.003906-37.265626-90.066406-24.042968-24.0625-56.019531-37.324219-90.03125-37.335938zm74.90625 182.035156c-3.191406 8.9375-18.484374 17.097656-25.839843 18.199219-6.597657.984375-14.941407 1.394531-24.113281-1.515625-5.5625-1.765625-12.691407-4.121094-21.828126-8.0625-38.402343-16.578125-63.484374-55.234375-65.398437-57.789062-1.914063-2.554688-15.632813-20.753907-15.632813-39.59375 0-18.835938 9.890626-28.097657 13.398438-31.925782 3.511719-3.832031 7.660156-4.789062 10.210938-4.789062 2.550781 0 5.105468.023437 7.335937.132812 2.351563.117188 5.507813-.894531 8.613281 6.570313 3.191406 7.664062 10.847656 26.5 11.804688 28.414062.957031 1.917969 1.59375 4.152344.320312 6.707031-1.277344 2.554688-5.519531 8.066407-9.570312 13.089844-1.699219 2.105469-3.914063 3.980469-1.679688 7.8125 2.230469 3.828125 9.917969 16.363282 21.296875 26.511719 14.625 13.039063 26.960938 17.078125 30.789063 18.996094 3.824218 1.914062 6.058594 1.59375 8.292968-.957031 2.230469-2.554688 9.570313-11.175782 12.121094-15.007813 2.550782-3.832031 5.105469-3.191406 8.613282-1.914063 3.511718 1.273438 22.332031 10.535157 26.160156 12.449219 3.828125 1.917969 6.378906 2.875 7.335937 4.472657.960938 1.597656.960938 9.257812-2.230469 18.199218zm0 0"
                ></path>{' '}
              </svg>
            </a>
          </div>
          <div className="mp-social" style={styles.mpSocial}>
            <a href="tel:+380987771600" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 660.25 648.81"
              >
                <g id="fotter">
                  <ellipse
                    className="cb-viber-cls-1"
                    cx="329.76"
                    cy="323.08"
                    rx="330.44"
                    ry="324.38"
                  ></ellipse>
                </g>
                <g id="page2">
                  <rect
                    className="cb-tel-cls-2"
                    x="192.92"
                    y="53.41"
                    width="282"
                    height="547.42"
                    rx="41.47"
                    ry="41.47"
                  ></rect>
                  <rect
                    className="cb-tel-cls-1"
                    x="201.46"
                    y="70"
                    width="264.91"
                    height="505.95"
                    rx="38.64"
                    ry="38.64"
                  ></rect>
                  <path
                    className="cb-tel-cls-2"
                    d="M311.06,292.7c-5.75,5.75-17.27,11.51-5.75,28.78s37.41,37.41,43.16,40.29,17.27,0,23-8.63,20.14-5.76,37.41,8.63,23,23,11.51,34.53-20.14,31.66-57.56,8.64-83.46-51.8-100.72-97.85-17.27-46,0-63.32,31.65-2.87,40.29,11.52S322.57,281.19,311.06,292.7Z"
                  ></path>
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
