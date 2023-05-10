import React from 'react';
import './HeaderNav.scss'

function HeaderNav() {
  return (

    <div class="nav-container">
      <div class="nav-top">
        <div className="nav-top-left">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 256 43" viewBox="0 0 256 43">
            <path d="m21.3.2c-11.8 0-21.3 9.5-21.3 21.3s9.6 21.3 21.3 21.3c11.8 0 21.3-9.6 21.3-21.3 0-11.8-9.6-21.3-21.3-21.3z" />
            <g fill="#fff">
              <path d="m7.6 7.8c3.7-3.7 8.6-5.7 13.7-5.7s10.1 2 13.7 5.7c3.3 3.3 5.3 7.6 5.6 12.3h-10.2c-.3-1.9-1.2-3.7-2.6-5.1-1.8-1.7-4.1-2.7-6.5-2.7-4.6 0-8.4 3.4-9.1 7.8h-10.2c.3-4.7 2.2-9 5.6-12.3z" />
              <path d="m27.6 21.5c0 3.5-2.8 6.3-6.3 6.3-1.7 0-3.3-.7-4.5-1.9s-1.9-2.8-1.9-4.5.7-3.3 1.9-4.5 2.8-1.8 4.5-1.9c1.7 0 3.3.7 4.5 1.8 1.2 1.4 1.8 3 1.8 4.7z" />
              <path d="m21.3 40.9c-5.2 0-10.1-2-13.7-5.7-3.4-3.3-5.3-7.6-5.6-12.2h10.2c.3 1.9 1.2 3.7 2.6 5.1 1.7 1.7 4.1 2.7 6.5 2.7 2.5 0 4.8-1 6.5-2.7 1.4-1.4 2.3-3.2 2.6-5.1h10.2c-.7 10-9.1 17.9-19.3 17.9z" />
            </g>
            <path d="m21.3 3.4c-1.9 0-3.6.3-5.3.8l3.6.7-8.1 1.6 5.2 1-8.3 1.6 5.6 1.1-7.7 1.5 5.8 1.1-7.2 1.4 5.6 1.1-6.6 1.3v.1l5.2 1-5.7 1.1v.1h7.6c1.1-4.6 5.3-8.1 10.3-8.1s9.2 3.4 10.3 8.1h7.6c-1.2-8.7-8.8-15.5-17.9-15.5z" fill="#ed1c24" />
            <path d="m31.9 25.4 5.3 1-6.5 1.3 5.6 1.1-8 1.6 6.2 1.2-9.3 1.8 6.4 1.2-9.2 1.8 4.9 1-9.3 1.9c1 .2 2.2.3 3.3.3 2.8 0 5.4-.6 7.8-1.8.7-.3 1.3-.7 1.9-1.1.8-.5 1.6-1.1 2.3-1.7.3-.2.5-.5.8-.8.7-.7 1.4-1.5 1.9-2.3.2-.2.3-.4.5-.7.4-.7.8-1.4 1.2-2.1.1-.2.2-.4.3-.6.2-.6.4-1.2.6-1.8 0-.2.1-.4.2-.6.2-.7.4-1.4.5-2.2z" />
            <path d="m21.3 25.2c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" />
            <path d="m107.5 12.5-.6-1.5-.6-1.5-7 3.7 1 2.5z" />
            <path d="m58.1 12.6h-5.7v17.8h4.8v-6.2h1.8c4.4 0 7.1-2.2 7.1-5.7 0-4.1-2.5-5.9-8-5.9zm.3 8.2h-1.2v-4.9h1.2c1.6 0 2.9.6 2.9 2.4.1 1.9-1.3 2.5-2.9 2.5z" />
            <path d="m74.3 16.8c-4.1 0-7.2 2.6-7.2 7s3.1 7 7.2 7 7.2-2.6 7.2-7c0-4.5-3.1-7-7.2-7zm0 10.7c-2 0-2.8-1.8-2.8-3.7 0-2 .8-3.8 2.8-3.8s2.8 1.8 2.8 3.8c-.1 1.9-.9 3.7-2.8 3.7z" />
            <path d="m141.4 16.8c-4.1 0-7.2 2.6-7.2 7s3.1 7 7.2 7 7.2-2.6 7.2-7c0-4.5-3.1-7-7.2-7zm0 10.7c-2 0-2.8-1.8-2.8-3.7 0-2 .8-3.8 2.8-3.8s2.8 1.8 2.8 3.8c0 1.9-.8 3.7-2.8 3.7z" />
            <path d="m96.1 17.1h-4.6l-3.6 5.6v-11.5h-4.2v19.2h4.2v-6.6l3.4 6.6h5.1l-4.6-7.2z" />
            <path d="m103.5 16.8c-3.9 0-6.6 2.6-6.6 7s3.1 7 7.2 7c1.6 0 3.2-.2 4.5-.8v-3.2c-1.3.7-2.6 1-3.8 1-2.1 0-3.4-.7-3.6-2.6h8.6v-.8c0-4.1-1.7-7.6-6.3-7.6zm-2.3 5.7c.1-1.5.8-2.8 2.4-2.8 1.7 0 2.4 1.3 2.4 2.8z" />
            <path d="m196.3 16.8c-3.9 0-6.6 2.6-6.6 7s3.1 7 7.2 7c1.6 0 3.2-.2 4.5-.8v-3.2c-1.3.7-2.6 1-3.8 1-2.1 0-3.4-.7-3.6-2.6h8.6v-.8c0-4.1-1.7-7.6-6.3-7.6zm-2.3 5.7c.1-1.5.8-2.8 2.4-2.8 1.7 0 2.4 1.3 2.4 2.8z" />
            <path d="m238.5 16.8c-3.9 0-6.6 2.6-6.6 7s3.1 7 7.2 7c1.6 0 3.2-.2 4.5-.8v-3.2c-1.3.7-2.6 1-3.8 1-2.1 0-3.4-.7-3.6-2.6h8.6v-.8c-.1-4.1-1.7-7.6-6.3-7.6zm-2.4 5.7c.1-1.5.8-2.8 2.4-2.8 1.7 0 2.4 1.3 2.4 2.8z" />
            <path d="m127.9 16.8c-1.7 0-3.2.8-4.2 2.6-.6-1.7-2-2.6-3.7-2.6-1.9 0-3.5.8-4.3 2.8v-2.5h-3.7v13.3h4.1v-5.6c0-2.9.9-4.2 2.3-4.2 1.2 0 1.6 1.1 1.6 2.6v7.2h4.1v-5.6c0-2.9.9-4.2 2.3-4.2 1.2 0 1.6 1.1 1.6 2.6v7.2h4.1v-7.9c0-3.5-.8-5.7-4.2-5.7z" />
            <path d="m159.3 16.7c-2 0-3.7.8-4.5 2.8v-2.5h-3.9v13.3h4.3v-5.6c0-2.9.9-4.2 2.7-4.2 1.2 0 2 .8 2 3.4v6.4h4.3v-8.3c-.2-2.7-1.5-5.3-4.9-5.3z" />
            <path d="m213.2 16.7c-2 0-3.7.8-4.5 2.8v-2.5h-3.9v13.3h4.3v-5.6c0-2.9.9-4.2 2.7-4.2 1.2 0 2 .8 2 3.4v6.4h4.3v-8.3c-.1-2.7-1.5-5.3-4.9-5.3z" />
            <path d="m183.9 27.2c-3.2 0-5.5-2.1-5.5-5.6 0-3.3 2-5.8 5.2-5.8 1.5 0 2.9.4 4.3 1.2l.4-3.9c-1.6-.5-3.2-.9-4.9-.9-5.5 0-9.5 3.1-9.5 9.3 0 6.7 5.1 9.1 9.5 9.1 2.3 0 3.7-.4 4.9-.7l-.2-3.7c-1.3.6-2.8 1-4.2 1z" />
            <path d="m228.8 27.7c-1.5 0-1.8-.8-1.8-2.4v-4.9h3.2v-3.2h-3.2v-4.4l-4.5 1.4v3h-2.7v3.2h2.6v5.4c0 3.2 1 5 5.1 5 1.1 0 2-.2 2.9-.2l-.2-3c-.5 0-1 .1-1.4.1z" />
            <path d="m254.5 16.8c-1.9 0-2.9 1.1-3.7 2.8v-2.5h-3.9v13.3h4.3v-5.6c0-2.6 1.1-4.2 3.1-4.2.5 0 1 0 1.5.2l.2-3.8c-.4-.1-1-.2-1.5-.2z" />
            <path d="m38.8 39.8h-.7v2.2h-.6v-2.2h-.7v-.5h2.1v.5zm3.2 2.2h-.5v-2.2l-.8 2.2h-.3l-.7-2.2v2.2h-.5v-2.7h.8l.6 1.6.6-1.6h.8z" />
            <path d="m23.4 19.9c-.4-.4-1-.6-1.6-.6-1.4 0-2.6 1.2-2.6 2.6 0 .6.2 1.1.5 1.5-.6-.5-1-1.2-1-2 0-1.4 1.2-2.6 2.6-2.6.9.1 1.6.5 2.1 1.1z" fill="#fff" />
          </svg>

        </div>
        <div className="nav-top-middle">
          <form action="" class="search-form">
            <input type="search" placeholder="Search Pikachu, Plush, T-Shirts..." />
            <div>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1043 1024"><path fill="currentColor" d="M995 860 762 627q-28 40-61.5 75T627 762l233 233q28 28 68 28t67-28q28-27 28-67t-28-68zM385 672q-60 0-112-23-52-22-91-60.5T121 497q-23-52-23-112t23-112q22-52 61-91t91-61q52-23 112-23t112 23q53 22 91.5 61t60.5 91q23 52 23 112t-23 112q-22 53-60.5 91.5T497 649q-52 23-112 23zm381-287q0-80-30-150t-82.5-122.5T531 30 381 0q-78 0-148 30-69 30-121 82.5T30 235 0 385t30 150 82.5 122.5T235 740t150 30q80-1 149-32 70-30 121.5-82T736 534q30-69 30-149z"></path></svg>
            </div>
          </form>

        </div>
        <div className="nav-top-right">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1044 1024"><path fill="currentColor" d="M512 0Q406 0 312 40q-93 40-162.5 109.5T40 312Q0 406 0 512t40 200q40 93 109.5 162.5T312 984q94 40 200 40t200-40q93-40 162.5-109.5T984 712q40-94 40-200t-40-200q-40-93-109.5-162.5T712 40Q618 0 512 0zm355 768q-9-60-45-104-37-45-88-74t-109-43q-59-15-113-15-55 0-115 15-59 15-110 44.5T200 665q-35 44-43 103-41-54-63-119T72 512q0-91 34-171 35-80 95-140t140-95q80-34 171-34t171 34q80 35 140 95t95 140q34 80 34 171 0 72-22 137t-63 119zM631 232q-12-13-25.5-21.5T577 195q-16-8-31.5-11t-33.5-3-33.5 3-31.5 11q-15 7-28.5 15.5T393 232q-13 13-21.5 26T355 287q-8 15-11 31t-3 34q0 17 3 33t11 31q8 16 16.5 29t21.5 26q12 13 25.5 21.5T447 509q16 7 31.5 10t33.5 3 33.5-3 31.5-10q15-8 28.5-16.5T631 471q13-13 21.5-26t16.5-29q8-15 11-31t3-33q0-18-4.5-34t-9.5-31q-8-16-16.5-29T631 232z"></path></svg>
          <span>SIGN IN / REGISTER</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1191 1024"><path fill="currentColor" d="M287 219q10 47 20 93t19.5 91.5T345 493q9 45 18 89h19q76-9 153-17 76-7 152-15l152-16 151-16q8 0 17.5-11t12.5-20q9-22 13-46.5t10-47.5q8-43 16.5-85.5T1077 219H287zm102 450q0 42 6 49t43 7h556q20 0 35 6t18 28q5 20-7.5 35t-38.5 15H404q-54 0-70.5-14.5T306 729q-14-78-29-154-15-77-30.5-153T215 270q-17-76-34-153 0-8-2-15.5T174 83H53q-23 0-38-8T0 42Q0 19 15 9.5T53 0h125q34 0 50.5 15T253 64q17 63 19.5 66t67.5 6h748q57 0 72.5 20.5t7.5 73.5q-15 74-31.5 149.5T1103 529q-8 37-26 51.5t-61 20.5q-77 7-155 15-77 7-154 15.5T554 648q-77 9-153 17-3 0-6 .5t-6 3.5zm518 189q34 0 58.5 24.5T990 941q0 31-24 57t-55 26q-34 3-60.5-23T824 941q0-31 24.5-57t58.5-26zm-363 83q0 34-24.5 58.5T461 1024t-56.5-24.5T382 941t24.5-58.5T465 858q31 0 55 24.5t24 58.5z"></path></svg>
          <span>MY CART</span>
        </div>
      </div>









      <div class="nav-middle">
        <div className="nav-middle-all">
          generations 1,2,3,4,5,6
        </div>
      </div>
      <div class="nav-bottom">
        <div className="nav-bottom-types">fire,water,ice,flying,normal</div>
      </div>
    </div>

  )
}

export default HeaderNav