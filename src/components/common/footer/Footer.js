import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-content-group">
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Explore Shows</span>
          <div className="contentcss">SET Shows</div>
          <div className="contentcss">SAB TV Shows</div>
          <div className="contentcss">Marathi TV Shows</div>
          <div className="contentcss">Bengali TV Shows</div>
          <div className="contentcss">English TV Shows</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Shows by Genres</span>
          <div className="contentcss">Drama Shows</div>
          <div className="contentcss">Comedy Shows</div>
          <div className="contentcss">Thriller Shows</div>
          <div className="contentcss">Romantic Shows</div>
          <div className="contentcss">Reality Shows</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Movies by Language</span>
          <div className="contentcss">Hindi Movies</div>
          <div className="contentcss">English Movies</div>
          <div className="contentcss">Marathi Movies</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Movies by Genre</span>
          <div className="contentcss">Action Movies</div>
          <div className="contentcss">Drama Movies</div>
          <div className="contentcss">Romantic Movies</div>
          <div className="contentcss">Comedy Movies</div>
          <div className="contentcss">Horror Movies</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Channels</span>
          <div className="contentcss">LIVE TV</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Sports</span>
          <div className="contentcss">Football</div>
          <div className="contentcss">Cricket</div>
          <div className="contentcss">WWE</div>
          <div className="contentcss">UFC</div>
        </div>
        <div className="list-unstyled contentfont" style={{ flex: "0 0 20%" }}>
          <span>Explore More</span>
          <div className="contentcss">Shows</div>
          <div className="contentcss">Movies</div>
          <div className="contentcss">Sports</div>
          <div className="contentcss">LIVE TV</div>
          <div className="contentcss">Premium</div>
        </div>
        <div className="footer-end">
          <div className="mr-1em">
            <div className="terms-div">
              <div className="c-pointer">Terms of Use </div>
              <div className="c-pointer">• Privacy Policy </div>
              <div className="c-pointer">• FAQs </div>
              <div className="c-pointer">• Contact Us </div>
              <div className="c-pointer">• Advertise With Us </div>
              <div className="c-pointer">• Content Redressal Mechanism </div>
              <div className="c-pointer">• 3.5.23 </div>
            </div>
            <div className="footer-copyright">
              © 2023 Sony Pictures Networks India Pvt. Ltd.
            </div>
          </div>
          <div className="mr-1em">
            <div className="font-14px mb-2">Download Sony LIV App</div>
            <span className="c-pointer">
              <a href="https://play.google.com/store/apps/details?id=com.sonyliv&hl=en_IN&gl=US">{<img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAoCAMAAADjcxkDAAAA/1BMVEVHcEwxMTGOjo7///9+fn55eXmEhISQkJB0dHSLi4sA4v80NTUyMjIA0/8A8HbHx8f29vbi4uIA2/9DQ0M8Pj3AwMDs7Oz7+/sAxv9VVVVnZ2dzcnOrq6s4OTjd3d1LS0tfX1+hoaFrbWv8OEXzMkrY2NiampqKiopPT0+np6f/zAAcc4SAgIC0tLR4eHiFhYX/xACJcpkAt//Pz8+VlZXmKVH/1AAcbYSRkZHOxykE53swUksN2ncVs31p1F1bXn6FXoYA3bDRikkA3LFCU2WuT3MdZ3xzbTAfkGUma14D17AJzbDXOFsC3qyvrzPSjEjgR1eiwUtvmFsPxLAklb6+WhWOAAAACnRSTlMA////uJrS+VvmxdMMwwAABFxJREFUWMPNmHlb2zgQxiPP7gKVQTK2ZRwfcQy+WDtpcEqBQqHHtnt07/3+n2VHcgKmxDTdsE8yfyRRLNm/zLwzmqjX623vbGnrtK2d7R7aN2OTrNV0M/sWvTEmazeqbfd2zPVzkPy73tYGYBC61dM2gYP8Nw6douGb/tmvwjFdnePD1U/6Y3P7zLYjUoaMaYkIGSFaUYUirPDSGC+5pLYJMQarcrw6+fvy6lU3Sc4sYg1IWcoB6+NLVuBzLfww8nVi1hYLSxKuzPHh5OSXSyTpmprGxHRdq/RH8ecctsy5M49lobk6x8sTCXJxcRV0cPRJP2VlWZVeF0c89J+G4+Tni729ix8Xis1lAaEsfywuMU3E6hwHBwcIsod2uVCwMbOZR8rEtq2GQ0OOUHLMdMpiEjtPwoH2bk+RLJSJpKNBEMzSs523utwn8MKAPhFHA3Kxd2V9fVl5kjr2cnd3t+URlEmwlnoqORqUNw3I6/OP+ho4vt+dWwPy+vnx8fnHe7MHRSiMKvrCPftp3h5maZpOR5jZA6xAy3Ds79+SvJEYyHF8+ltLJmMOIByA4nEtDsFrDw2QJjzSB39JDmUK5FfEQI7T09Pz27ka8LFFgn44JV/HEUWRxrm7LMez/TnJ/u7k7fPGH3ccrsMbf38pMx9wKF9CujQH2oxkcnj4tvHHn7eFxIbs3lIrmpUs6roztNylOp1xDKKgzRFBpThoFJmyCKmFAV3Msf+sYUEMCYI67d8VBQ7tDtKqMOihlGyGquGyyY1QCUYNruRwQ/wya3EUoEmOWAA4PrUVqg2jLn8olMmR5Dj8/fyvVggC4PKtdKQxwqDOfBmpDMR0KmBMcu4UWgKKwxROkSXNYwxI0yEDw0IOmjjDswTSCLB9MR1BOzkaDAnyh3e/ojogx16SJCGwWN6IlFBRzmVKcq5X8rGBoThS0IhbgXGXL/agyRc39lwekgRyMoUz8gjH5Ajt8Ojm/f06rbNb+fWhmKrfSh3DBbsRT25wXYlUctgwrUGkg3m+uJZa5pMSgwgOJyMY6ga3HuFQGEc/vH+43YKw5oodnYHc/gMnnHEwGBgOVTpoOKAe0bZOG47cEaM85pxQIbx2+jzgmLx4gRTXC3JT9yF0G4UmNIIEJX8Gvi64K3NakErmkykURybpdM1sc+jI4cFQ8nC5VEDezSExPl0v3moDTBHDZhwS9DcGf2iDMNHD3Pc5xgwR7EI0OqUh1EXSuKrtD9SRXzmSw+JKYR0ciPHpprNDJXGNwU2m0lk05eAwKQAPhRjizqHntQM1g3wqsJOt8LKvqkQtZv6IxJDEBvApM1Rw404OxJDy7N5l9aDV55jzj1bjP0sPTGI7s2/pg45IV62T2dzdxKTp6NcRY6Ewlmx7RnwohZIstziFcQeH/s/NtbVCC2EaEGJkoqUmB0IEnf8rV+x6zMIQbDkMEtnjJ/h/+3/0Y5ty7rAp5zCbci61/nM6os7pNuTc8l8biZR33Rr82QAAAABJRU5ErkJggg=="
                alt="googleplay"
                width="135"
                height="40"
              />}</a>

            </span>
            <span className="c-pointer ml-6px">
              <a href="https://apps.apple.com/in/app/sony-liv/id587794258">{<img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAoCAMAAAASeEKOAAAAYFBMVEVHcEyvr6////8xMTGnp6enp6epqamnp6enp6enp6eampo6Ojo0NDSLi4u6urqurq6lpaX39/dBQUFOTk5sbGzq6up1dXXFxcXR0dFhYWGTk5Pd3d19fX1ZWVlHR0eFhYXTwDbLAAAACnRSTlMAEP//ds0+4x2wKL7qggAABBNJREFUWMPNmNt22zgMRTXnpO1EpHi/ipT0/3/ZB9lxbKVO2mbG4YuxuLCgbQAEQA7DMDx9Gx+6fjx/H4ZhGJ6T42OXn56GYXhKfPiS8/dh+CEfD8Llefhn/gIcdN+Gf6evACJ+3AGRSd1ksXTrL+IoD1Y28bZm8r8LshbgxtgUc1NvfsDZ2534xgddJXP6TRDZgHKzN2lKZUifPEWlWLh6Wdcg6SwpQiW5JEeKtOwgIlRy9UslSWlKZU5hJVmD/CDIBqAeQVgbQ5takNZtkWaTNudCZynamDW9GZuURSnrydNeirrNJKVqG3PRdqVRWn0QpAEj3wbJnVOmSkotbZVYBYSz7JkOgsnYtUZK60n2zBUiFaZMkl2RubMkaafNyo+B2HYM5qRJo1kSt8xuch8LJQStc5ZbpoOb8hJ9aCeQSdFBpMxQXkASVRfoKb0HIsM8B0lBPxnTr1JzKl03x62Eluji7OJ8AVljMpmj2qwXcdTWk1xj0oovICGGHYRZpfROaEIEgKjHAgCI/XX9m6cgSYa5kuwr+0pOkpuQG+nnTVJsKTn6OewNzM9d0geu+2dTZ/IMnrLP9T5Ix+3qb56p/7qgeXvLEf1DKqu+5bD+ISVeHhxiHtNrlkOG3DpkKiW8N+aoaKPyfwUSDiDiWOfUfZvVIpYIT9LXzwO56b8e2dr7R6ZhJrmQnKA/LzQ3cZixlX1POElR3UVcTyZf4N0I5XaFZZFnxcWTlKeNX4K4A0i5/bt+3v+nQlUAlCAVgj6JJC1OFiMAWFJoAHaWpEbIGMnNArbfPb7lQDJeR6bRI0qSCjHOxkKR+iKSHAG1kOSU0caZzCh9ijCkRrGlc0IJoV05+wAyH0CgX6XJhJHcTWhYT1ZgOYkLsJxJoDzJ3XcJUZAV8DRAJYW1ggxXzj6AHJPkaiopqEKM0CT1HqGCTrP7opxj4rVF9GcQvTu1YKNBJhlQQggd9m6vOcamvZoez2X/Yl9hpNnLnr5Uv7VBnUHK3q0uitPZsrwHUu+dmw1Na60t6gtIxnayLxWmV3UgnkHyvp0xnRQ7cq211uX+GHDbbV6Xr4xt/zGkRiYpLCoNCkkRXzEnFHJCJjm+VjQklz3b3xueXbtuvu7qcK/7qBBJDUxizSikAWbhFJokKXPyLkTMZIKtjqvFRqF2RbOHX610wb0zofkIAC03AIjL1azSzkALNYo9KZiL+JLuavcRGpksrEXzLyC+AfZ60HlzZnWjmj3JdVbjenU3Gk++38ZKjbEaNTuSBmY5iaRcRq3G/frgjZpI+lnpLkmGkwHZjTL9PY98cOlLqTPXw8IHp7eP3mv+HOTT777/M8gfPkvIui0Xsf4tiPv2Fw81nznJL89f6Onq8Y950s9Pw/BVnjd/At6LguQbVdJVAAAAAElFTkSuQmCC"
                alt="appleStore"
                width="135"
                height="40"
              />}
              </a>
            </span>
          </div>
          <div>
            <div className="font-14px mb-2
            
            ">Connect With Us</div>
            <div>
              <span className="ml-16px c-pointer">
                <a href="https://www.linkedin.com/company/sony-pictures-networks-india/?originalSubdomain=in">{<img
                  src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M30.063 0H6.938A6.94 6.94 0 000 6.938v23.125A6.94 6.94 0 006.938 37h23.125A6.94 6.94 0 0037 30.062V6.938A6.94 6.94 0 0030.062 0zM11.44 31.408H5.692l-.033-17.21h5.748l.033 17.21zM8.422 11.946h-.034c-1.879 0-3.09-1.295-3.09-2.907 0-1.651 1.25-2.902 3.163-2.902 1.912 0 3.085 1.25 3.124 2.902 0 1.612-1.218 2.907-3.163 2.907zm22.947 19.462H25.57v-9.35c0-2.263-.6-3.803-2.624-3.803-1.545 0-2.38 1.04-2.78 2.046-.15.361-.188.856-.188 1.362v9.745h-5.826l-.033-17.21h5.825l.034 2.429c.745-1.151 1.984-2.78 4.953-2.78 3.68 0 6.431 2.402 6.431 7.566v9.995h.006z' fill='%23B4B4B4'/%3e%3c/svg%3e"
                  alt="linkedin"
                  width="37"
                  height="37"
                />}</a>

              </span>
              <span className="ml-16px c-pointer">
                <a href="https://www.instagram.com/sonylivindia/reels/?hl=en">{<img
                  src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.457 0C4.69 0 0 4.691 0 10.457v16.086C0 32.31 4.691 37 10.457 37h16.086C32.31 37 37 32.309 37 26.543V10.457C37 4.69 32.309 0 26.543 0H10.457zm18.5 6.435a1.608 1.608 0 110 3.217 1.608 1.608 0 110-3.217zM18.5 8.848c5.323 0 9.652 4.33 9.652 9.652 0 5.323-4.33 9.652-9.652 9.652-5.323 0-9.652-4.33-9.652-9.652 0-5.323 4.33-9.652 9.652-9.652zm0 1.609c-4.436 0-8.043 3.607-8.043 8.043 0 4.436 3.607 8.043 8.043 8.043 4.436 0 8.043-3.607 8.043-8.043 0-4.436-3.607-8.043-8.043-8.043z' fill='%23B4B4B4'/%3e%3c/svg%3e"
                  alt="instagram"
                  width="37"
                  height="37"
                />}</a>

              </span>
              <span className="ml-16px c-pointer">
                <a href="https://www.facebook.com/SonyLIV/">{<img
                  src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M33.61 0H3.39C1.542 0 0 1.542 0 3.39v30.22C0 35.458 1.542 37 3.39 37H18.5V21.583h-4.625v-4.625H18.5v-4.625c0-3.854 1.542-6.166 6.167-6.166h4.625v4.625h-2.006c-1.385 0-2.62 1.234-2.62 2.62v3.546h6.167l-.77 4.625h-5.396V37h8.943c1.848 0 3.39-1.542 3.39-3.39V3.39C37 1.542 35.458 0 33.61 0z' fill='%23B4B4B4'/%3e%3c/svg%3e"
                  alt="facebook"
                  width="37"
                  height="37"
                />}</a>

              </span>
              <span className="ml-16px c-pointer">

                <a href="https://twitter.com/SonyLIV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">{<img

                  src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M37 4.733a13.218 13.218 0 01-4.36 1.431c1.566-1.127 2.77-2.912 3.336-5.037A13.863 13.863 0 0131.16 3.34C29.774 1.57 27.8.456 25.62.456c-4.192 0-7.595 4.083-7.595 9.113 0 .715.066 1.41.199 2.074-6.311-.376-11.906-4.004-15.646-9.517-.656 1.344-1.03 2.912-1.03 4.581 0 3.158 1.338 5.948 3.38 7.58a6.621 6.621 0 01-3.44-1.14v.115c0 4.415 2.614 8.1 6.089 8.932a6.385 6.385 0 01-2 .325c-.487 0-.97-.058-1.427-.166.964 3.62 3.77 6.25 7.088 6.33-2.595 2.443-5.871 3.895-9.424 3.895-.615 0-1.217-.043-1.813-.13 3.36 2.587 7.347 4.098 11.635 4.098 13.965 0 21.601-13.883 21.601-25.922 0-.39-.012-.788-.024-1.178 1.482-1.286 2.77-2.89 3.788-4.712z' fill='%23B4B4B4'/%3e%3c/svg%3e"
                  alt="twitter"
                  width="37"
                  height="37"
                />} </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
