!(function (t) {
  var e,
    a,
    l,
    c,
    o,
    i =
      '<svg><symbol id="icon-widget_5" viewBox="0 0 1024 1024"><path d="M24.398367 0.018285h975.203266v677.888171c0 31.889147-19.260265 63.778294-44.90811 82.916657L556.90811 1009.621847c-25.672226 19.138364-64.143995 19.138364-96.228182 0L69.306477 760.823113C43.658631 741.684749 24.398367 709.795603 24.398367 677.906456z" fill="#C71D24" ></path><path d="M512 146.298775c161.566801 0 292.56098 130.994179 292.56098 292.56098s-130.994179 292.56098-292.56098 292.56098S219.43902 600.426556 219.43902 438.859755 350.433199 146.298775 512 146.298775z m148.084616 130.043356h-202.257157a108.345083 108.345083 0 0 0-108.369463 108.345083v202.257157c0 7.972287 6.485102 14.457388 14.457388 14.457388h213.081914a97.520327 97.520327 0 0 0 97.520326-97.520326v-83.087319a14.457388 14.457388 0 0 0-14.433008-14.433008H493.95874a14.457388 14.457388 0 0 0-14.433009 14.433008v36.131282c-0.02438 7.167744 5.217337 13.140864 12.068141 14.262347l2.364868 0.170661h101.128578c7.192124 0 13.165244 5.241718 14.262348 12.1169l0.195041 2.340488v7.216504c0 23.94124-19.406545 43.347785-43.347785 43.347786h-137.25986a14.457388 14.457388 0 0 1-14.433009-14.433009v-137.259859c0-22.746616 17.504899-41.397379 39.763914-43.201505l3.559492-0.146281h202.232777a14.481769 14.481769 0 0 0 14.457388-14.433008l0.02438-36.131281a14.433008 14.433008 0 0 0-12.06814-14.262348z" fill="#FFFFFF" ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M153.6 768a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m716.8 0a51.2 51.2 0 0 1 0 102.4H307.2a51.2 51.2 0 0 1 0-102.4h563.2zM153.6 460.8a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m716.8 0a51.2 51.2 0 0 1 0 102.4H307.2a51.2 51.2 0 0 1 0-102.4h563.2zM153.6 153.6a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m716.8 0a51.2 51.2 0 0 1 0 102.4H307.2a51.2 51.2 0 1 1 0-102.4h563.2z"  ></path></symbol><symbol id="icon-xitongshezhi" viewBox="0 0 1024 1024"><path d="M835.62 524.616l29.375 66.547 66.547 29.374c13.492 5.955 19.916 21.465 14.587 35.216l-26.285 67.826 26.285 67.826c5.33 13.751-1.095 29.261-14.587 35.216l-66.547 29.375-29.375 66.546c-5.955 13.492-21.465 19.916-35.216 14.587l-67.827-26.285-67.827 26.285c-13.75 5.33-29.261-1.095-35.216-14.587l-29.375-66.546-66.547-29.375c-13.492-5.955-19.916-21.465-14.587-35.216l26.285-67.826-26.285-67.826c-5.33-13.75 1.095-29.261 14.587-35.216l66.547-29.374 29.375-66.547c5.955-13.491 21.465-19.916 35.216-14.587l67.827 26.285 67.827-26.285c13.75-5.329 29.261 1.096 35.216 14.587zM447.43 877.649c16.51 0 29.894 13.384 29.894 29.894 0 16.51-13.384 29.894-29.894 29.894H185.278c-16.51 0-29.894-13.384-29.894-29.894 0-16.51 13.384-29.894 29.894-29.894H447.43zM800.637 559.26l-68.06 26.378-68.063-26.378-29.477 66.78-66.78 29.477 26.377 68.062-26.378 68.06 66.78 29.48 29.478 66.777 68.063-26.376 68.06 26.376 29.48-66.778 66.778-29.48-26.375-68.059 26.375-68.062-66.778-29.477-29.48-66.78z m-68.06 81.535c45.72 0 82.785 37.064 82.785 82.784 0 45.72-37.064 82.784-82.785 82.784-45.72 0-82.785-37.064-82.785-82.784 0-45.72 37.064-82.784 82.785-82.784z m0 41.392c-22.86 0-41.392 18.532-41.392 41.392 0 22.86 18.532 41.392 41.392 41.392 22.86 0 41.392-18.532 41.392-41.392 0-22.86-18.532-41.392-41.392-41.392zM477.324 105v9.198h316.662c79.572 0 144.248 63.776 145.533 142.96l0.02 2.404v201.844c0 16.51-13.385 29.894-29.895 29.894-16.274 0-29.511-13.004-29.886-29.189l-0.008-0.705V259.562c0-46.779-37.623-84.808-84.346-85.564l-1.418-0.011H213.553c-46.903 0-84.995 37.561-85.753 84.16l-0.011 1.415v348.547c0 46.78 37.623 84.809 84.345 85.564l1.419 0.012h217.04c16.51 0 29.894 13.384 29.894 29.894 0 16.274-13.005 29.511-29.189 29.886l-0.705 0.008h-217.04c-79.572 0-144.248-63.776-145.533-142.96L68 608.11V259.562c0-79.49 63.88-144.06 143.146-145.344l2.407-0.02h203.982V105h59.79z"  ></path></symbol><symbol id="icon-a-darkyejianmoshiheiyemoshishensemoshianheimoshi" viewBox="0 0 1024 1024"><path d="M720.02461 351.522c0 259.827-221.377 469.494-494.203 473.068 78.511 91.057 197.258 145.666 326.238 145.666 231.677 0 418.199-174.779 418.199-388.489 0-162.588-109.02-306.676-270.391-363.244 13.31 42.857 20.157 87.526 20.157 132.999z m-76.28-131.527c-9.555-27.056-9.008-37.45 0-49.873 0 0 28.78-16.85 59.647-7.072C889.78761 222.094 1024.00061 387.29 1024.00061 581.767 1024.00061 825.967 812.66361 1024 552.05861 1024c-157.888 0-297.578-72.693-383.223-184.328-6.154-8.02-9.26-17.873-8.79-27.879 1.123-23.846 21.853-42.292 46.304-41.198 4.426 0.2 8.555 0.298 12.386 0.298 247.14 0 447.545-187.79 447.545-419.371 0-45.951-7.932-90.164-22.537-131.526zM337.56061 498.625l4.356-26.754-18.702-19.487c-4.375-4.557-4.27-11.84 0.235-16.266a11.32 11.32 0 0 1 6.246-3.126l25.33-3.814 20.89-44.885a0.752 0.752 0 0 0 0.051-0.154l0.015-0.068a0.046 0.046 0 0 1 0.012-0.023 0.01 0.01 0 0 1 0.015 0.004l20.935 45.126 25.36 3.819c6.21 0.935 10.496 6.787 9.572 13.072a11.556 11.556 0 0 1-3.08 6.31l-18.665 19.492 4.355 26.753c1.022 6.27-3.173 12.188-9.369 13.22a11.255 11.255 0 0 1-7.338-1.276l-21.754-12.138-21.756 12.138c-5.498 3.068-12.413 1.045-15.445-4.519a11.62 11.62 0 0 1-1.263-7.425zM32.55061 178.151l8.99-53.652L3.42261 85.91a11.768 11.768 0 0 1 0.252-16.84 12.193 12.193 0 0 1 6.655-3.237l52.16-7.631C74.85061 19.401 86.55761 0 97.61061 0c11.054 0 21.676 19.4 31.866 58.202l52.191 7.636c6.618 0.97 11.183 7.027 10.2 13.533a11.834 11.834 0 0 1-3.282 6.534L150.55061 124.5l8.99 53.652c1.086 6.49-3.383 12.618-9.984 13.688a12.29 12.29 0 0 1-7.817-1.323l-45.695-24.774-45.696 24.774c-5.858 3.177-13.226 1.083-16.455-4.677a11.737 11.737 0 0 1-1.346-7.686z"  ></path></symbol><symbol id="icon-rijianmoshixhdpi" viewBox="0 0 1025 1024"><path d="M512.640801 798.010847a289.001252 289.001252 0 1 1 288.14685-289.001252A289.428452 289.428452 0 0 1 512.640801 798.010847z m0-513.922403a224.921151 224.921151 0 1 0 224.06675 224.921151A225.134752 225.134752 0 0 0 512.640801 284.088444zM274.476429 291.564456a32.04005 32.04005 0 0 1-21.360034-8.544014L178.142678 213.600334a32.04005 32.04005 0 0 1 43.788069-46.778473l74.546516 69.847309a32.04005 32.04005 0 0 1-21.360033 55.322486zM64.0801 536.991239a32.04005 32.04005 0 0 1 0-64.0801L165.113058 469.920734a32.04005 32.04005 0 0 1 1.922403 64.0801l-101.887359 3.204005zM190.958698 856.110138a31.82645 31.82645 0 0 1-23.496036-53.827284l69.847309-74.546517a32.25365 32.25365 0 0 1 45.283271-1.495202 31.82645 31.82645 0 0 1 1.495202 45.283271L213.600334 846.070922a32.25365 32.25365 0 0 1-22.641636 10.039216zM506.232791 992.17355A32.04005 32.04005 0 0 1 474.192741 961.201502l-3.204005-101.887359a32.04005 32.04005 0 1 1 64.0801-2.136004l3.417605 102.10096a32.25365 32.25365 0 0 1-31.185648 33.108052zM825.35169 865.294952a31.399249 31.399249 0 0 1-21.360034-8.757614l-74.546516-69.847309a32.04005 32.04005 0 0 1 44.001669-46.564873l74.332916 69.84731a31.82645 31.82645 0 0 1 0.854401 44.428869 32.680851 32.680851 0 0 1-23.282436 10.893617zM859.100542 553.224864a32.04005 32.04005 0 0 1 0-64.0801l102.10096-3.204005a32.04005 32.04005 0 0 1 2.136003 64.0801l-102.100959 3.204005zM764.475594 305.448477a32.25365 32.25365 0 0 1-21.360033-8.757613 31.82645 31.82645 0 0 1-1.495202-45.283271L811.681268 177.074677a32.04005 32.04005 0 1 1 46.778473 43.788068l-69.847309 74.332916a32.04005 32.04005 0 0 1-24.136838 10.252816z"  ></path><path d="M522.252816 196.939508A31.82645 31.82645 0 0 1 491.280768 165.967459L487.008761 64.0801a32.04005 32.04005 0 0 1 31.185649-32.894451A31.399249 31.399249 0 0 1 551.088861 61.944097l4.272007 102.100959a31.82645 31.82645 0 0 1-32.04005 32.894452z"  ></path></symbol><symbol id="icon-hailang" viewBox="0 0 1024 1024"><path d="M399.901461 1023.586655l-6.499915 0C384.101667 1024.186648 384.501662 1024.086649 399.901461 1023.586655z"  ></path><path d="M565.599301 9.099881C431.901044-11.399851 353.002073 6.399917 319.202514 26.899649c-66.899128 32.599575-102.598662 83.59891-102.598662 156.49796 0 80.898945 73.099047 146.698087 163.39787 146.698087 9.399877 0 18.299761-0.699991 27.299644-1.999974-47.399382-14.499811-64.599158-74.299031-64.599158-93.098786 0-44.599419 20.999726-89.998827 81.998931-102.998657 0 0 48.999361-15.999791 138.898189 7.999896C690.597672 186.997562 727.697188 243.096831 761.996741 328.995711c42.899441 135.598232 6.599914 316.195878-61.799194 418.694541-130.3983 195.59745-453.094093 259.096622-453.094093 259.096622 327.795726-78.898971 474.393815-264.696549 503.393437-504.993416C769.496643 182.997614 464.300622 107.698596 416.701242 304.996024c42.299449-36.699522 88.598845-28.899623 134.898241-9.99987C657.998097 366.995215 642.898293 480.893731 633.298419 543.492914c-21.699717 141.198159-106.398613 278.096374-230.996988 361.395288-130.898293 72.799051-303.196047 105.998618-360.995294 118.798451l352.195408 0c29.199619-1.699978 155.097978-9.599875 222.697097-34.299553C800.296241 921.98798 982.393867 760.790081 982.393867 499.893483 982.393867 238.896885 777.196543 41.599458 565.599301 9.099881z"  ></path><path d="M214.703876 917.888033c-38.299501 29.799611-169.897785 87.498859-169.897785 87.498859s121.998409-10.799859 220.89712-52.799312c88.698844-37.59951 130.498299-76.599001 171.997758-136.798217 37.799507-54.799286 73.799038-222.697097-59.999218-302.896051-77.798986-46.599392-186.097574-47.599379-230.89699 8.999883-53.099308 67.199124-11.999844 125.898359-11.999844 125.898359s15.799794-53.799299 67.899115-62.999179c13.999817-2.499967 67.899115 0.599992 96.098747 25.699665 21.199724 18.899754 55.19928 52.799312 35.999531 138.998188C320.402498 814.689379 282.202996 865.288719 214.703876 917.888033z"  ></path></symbol><symbol id="icon-duoyuyan" viewBox="0 0 1024 1024"><path d="M891.2 948.8l-33.6-96H699.2l-33.6 96H564.8l153.6-403.2h115.2l153.6 403.2h-96zM780.8 632l-57.6 148.8h115.2L780.8 632zM526.4 780.8L569.6 680c-14.4-9.6-28.8-19.2-38.4-28.8 72-81.6 129.6-182.4 172.8-302.4h129.6v-96H468.8l72-24c-9.6-33.6-33.6-86.4-57.6-129.6l-105.6 33.6c19.2 38.4 38.4 86.4 48 120H70.4v96h134.4c43.2 120 105.6 220.8 177.6 302.4C296 718.4 185.6 766.4 56 800c19.2 24 48 72 62.4 96 134.4-38.4 249.6-96 340.8-172.8 19.2 19.2 43.2 38.4 67.2 57.6z m-220.8-432h288C560 440 512 516.8 454.4 584 392 516.8 339.2 440 305.6 348.8z"  ></path></symbol></svg>',
    n = (n = document.getElementsByTagName('script'))[n.length - 1].getAttribute('data-injectcss'),
    h = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (n && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function d() {
    o || ((o = !0), l());
  }
  function s() {
    try {
      c.documentElement.doScroll('left');
    } catch (t) {
      return void setTimeout(s, 50);
    }
    d();
  }
  (e = function () {
    var t,
      e = document.createElement('div');
    (e.innerHTML = i),
      (i = null),
      (e = e.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (e = e),
        (t = document.body).firstChild ? h(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((a = function () {
            document.removeEventListener('DOMContentLoaded', a, !1), e();
          }),
          document.addEventListener('DOMContentLoaded', a, !1))
      : document.attachEvent &&
        ((l = e),
        (c = t.document),
        (o = !1),
        s(),
        (c.onreadystatechange = function () {
          'complete' == c.readyState && ((c.onreadystatechange = null), d());
        }));
})(window);