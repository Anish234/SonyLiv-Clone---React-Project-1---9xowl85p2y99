import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import "./Settings.css";
import Navbar from "../../components/common/navbar/Navbar";

const Settings = () => {
  const [qualityDropDown, setQualityDropDown] = useState(false);
  const [selectedQualityIndex, setSelectedQualityIndex] = useState("Auto");
  function toggleQualityDropDown() {
    setQualityDropDown(!qualityDropDown);
  }
  return (
    <>
      <Navbar />
      <div className="settings-container">
        <div className="settings-content">
          <div className="settings-label">Settings & Preferences</div>
          <div className="settings-input-group">
            <ul className="settings-list">
              <li>
                <div className="option-icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACK1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+d+zKBAAAAuHRSTlMAA/0u+P78gLgBEw0wnAgE7I/21/tlJ9YS+uVO7dy6gUgjRwnxszLhIsdqjtt5O+B+AibQ1RH5P8Vj6cov1CQp4iWFzUwOVjx/HUFL8FBVHKJA6gdKDE/0cxa75CCmbbByEDR3GqDjYkPobK9NcbT3M3YUV3ufpOfIqShrri1wmXoYvWCERonMrdFvsrc2IUXLae+NbrY1eH0bXqGHBkmMKgvztVMVmzl8xIbJZwUK8g9SON2+PcNhIGwPuwAAA1JJREFUWMPtmFVDG0EQgJeQBFKkeHEppaUUh0KLFOrUDSlVaJG6u7u7u7t7v5/Xh4vtJblsci99YN6YmftyszczO4MQQzIkRjKvcX1DQ86f/XlZfaY4TRbc0jxlTfigtUgydbAwTNBOdJKZGhEWKGK1nsSI0eG9U+y0TZtOlj0c4yFZV5k69oKJK5NcqI3jzaVC96NRTlLFaJNZ1bvLiUpoMZugxdc00sAss6TH4zRS8g7TVZO1FYDG56ZJnXYAjpqv5L9adPnmSdsBaC00TyoC4K6id8zS3AmJkX5NK5IA5g5T4iyoALDF+fUuA6BMheM476yHhIkOX+vnEQCtKj3lqqfeJ/iJ7wEAWQqgpV49KGVcjN7c0QXQrwCKArC6UMvn6+0LAbIjFEHR+TkuVPQk2b4OgB+qIBGf53ora9sSb3vVeoBVyiAhJue6Xqp0pLfDaoCFIYCE2JnpQm33ctgFcDYkkIhJtDtJnzwOMwD2hgYSInasBvrpcZgJYBmu+wTv5hiDhCM1G4Bit6YagPE+N/NTNdACt2YSAOlSWb0AUjpUQhvjCaXAFxQPwDaVwy7xOGwDQG5uN/wUoBdohvvzR3k5TAOYKz9UC7AhxIS8AJAsP3QRYHewEomSSkQcAiiSH6oEqA2taB3ZAG2y8gkA1SG1kVgAdOnXmwFwStLdMm5sYjNAxjedNhegQurN5catVtQALNNrSwBYJE19Y42av2gH4KBenZ4EcE7STS41uI7Ee4Ak39EtDgApT8SXYy8b4wLMZvUAxPkaIm0AOfGKl/DwjwC2w35MKwHIUwSdAWCP39vcCmC9rMTJtwHUXQncEUk4oMDpWwxAT4Cwp2pDT/Ap834tAEWOAPYWbfRN7g7CSdO2gIHAM029NmVm1hty1mhx2X8bbXlaH7RXVgXecjZ3afl+xPDXBp1V8etZAIe3NZqDJTVI/D02zdG28Y6/03njNFu/B/0ipxtcJb/slXya6df3uUxfZyvkyPET7u5hq0nsTJsuhJje0l55u86z+sUqZW3VPbu0MaZkyH9bbqoWpGi6RGCJjgxlHl+0xeKXYtkyW4QoxR+SfdfiKQVhrQnVG/qbM5yMuubdJWlmdg7H66aZ5eWROxxD/9z5b+QfJBGSXGsp/fcAAAAASUVORK5CYII="
                    alt="AutoplayIcon"
                  />
                </div>
                <div className="option-description">
                  <div className="option-text">Autoplay</div>
                  <label className="setting-switch">
                    <input type="checkbox" id="autoPlay" />
                  </label>
                </div>
              </li>
              <li className="video-quality-section">
                <div className="option-description-video">
                  <div className="option-icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABelBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Ov6tSAAAAfXRSTlMAxwUVD5aVZg7dtxtjAXvv23EDBmVCbJ/RGquq7tdWnq3LjUkv1B+LKZoeRv0IFvuH2Asc0/5z33Le5yNHzUzxj7NRMhM88G8NdBKY4MFfQOUhZEXqkhG2l+SmRMqw85EQNJt8oD5ihvK0dlf8vj3iw16Fay3SJ52I9HftuS2+KgoAAAHDSURBVFjD7ZflVwJBFMWfWIRLSYuKCNiohNjd3d3d3Tr/u8uwq2c5HoH3vqn329698zsbb+bNgNAcY1hFjSYBmhhJJmihAYzgpgEMUEQDuMDpoIyP6AAKrZZ8rGpU8K9fo8sqvTrZU+urBtIdX1DLmH9U6fX7Gas9TG98qD5ek16l6Y179aHEhV37paXVhb1y5fPm8KLOUwJyuSkFNckz4Hx9to4EEDV/aqYBGLsOEAHM7csIoCmIy6bfmjiWCa0zmQCyPu+ZOzckQmMdCiDKKr2VHguAYDEPvDixAAh38cQzGgAjia+ABxQO8sijDCjNVsieEiA1FJsM+FY/Aiw80oAHlPPIEx6wwyMneICPR97xgHYescuAZZVCY6kBkzxyi64D2OeRO3whGXjkHg2w8cQDupSrN3niFQvQJabzWxAJmBpP/Ocb1IIiHLikOtFmsiZ26ES19a0NlV7JdVa2SFvWy7ZpfWF3mNRYNHOk3njRa8Y2V4Ojp7tEpww3iP5KpdKrnBbNo3S3KGeeiupkL1DhKfnf/P0lqWrQJx6LVTzyhCOUQ5fDCS7asa8IDDSAG4w0QAuYaIAmEEzGKHp4rFn4APIjEnrn1ibUAAAAAElFTkSuQmCC"
                      alt="VideoQualityIcon"
                    />
                  </div>
                  <div className="option-description">
                    <div className="option-text">Video Quality</div>
                    <div className="dropdown-header">
                      <div
                        className="option-text-grey c-pointer"
                        onClick={toggleQualityDropDown}
                      >
                        {selectedQualityIndex}
                      </div>
                    </div>
                  </div>
                </div>
                {qualityDropDown === true && (
                  <div className="dropdown-wrapper">
                    <ul className="dropdown-list">
                      <li
                        onClick={() => {
                          setSelectedQualityIndex("Auto");
                          toggleQualityDropDown();
                        }}
                        className="active-option c-pointer"
                      >
                        {selectedQualityIndex === "Auto" ? (
                          <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='%23000' fill-opacity='.01' d='M0 .25h24v24H0z' opacity='.4'/%3e%3cpath stroke='%230091FF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 7.25l-8.937 10L5 12.705'/%3e%3c/g%3e%3c/svg%3e"
                            className="selected-icon"
                            alt="selected-item"
                          />
                        ) : (
                          <span className="image-space"></span>
                        )}

                        <span>Auto</span>
                      </li>
                      <li
                        onClick={() => {
                          setSelectedQualityIndex("Data Saver");
                          toggleQualityDropDown();
                        }}
                        className="active-option c-pointer"
                      >
                        {selectedQualityIndex === "Data Saver" ? (
                          <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='%23000' fill-opacity='.01' d='M0 .25h24v24H0z' opacity='.4'/%3e%3cpath stroke='%230091FF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 7.25l-8.937 10L5 12.705'/%3e%3c/g%3e%3c/svg%3e"
                            className="selected-icon"
                            alt="selected-item"
                          />
                        ) : (
                          <span className="image-space"></span>
                        )}
                        Data Saver
                      </li>
                      <li
                        onClick={() => {
                          setSelectedQualityIndex("Good");
                          toggleQualityDropDown();
                        }}
                        className="active-option c-pointer"
                      >
                        {selectedQualityIndex === "Good" ? (
                          <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='%23000' fill-opacity='.01' d='M0 .25h24v24H0z' opacity='.4'/%3e%3cpath stroke='%230091FF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 7.25l-8.937 10L5 12.705'/%3e%3c/g%3e%3c/svg%3e"
                            className="selected-icon"
                            alt="selected-item"
                          />
                        ) : (
                          <span className="image-space"></span>
                        )}
                        Good
                      </li>
                      <li
                        onClick={() => {
                          setSelectedQualityIndex("High");
                          toggleQualityDropDown();
                        }}
                        className="active-option c-pointer"
                      >
                        {selectedQualityIndex === "High" ? (
                          <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='%23000' fill-opacity='.01' d='M0 .25h24v24H0z' opacity='.4'/%3e%3cpath stroke='%230091FF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 7.25l-8.937 10L5 12.705'/%3e%3c/g%3e%3c/svg%3e"
                            className="selected-icon"
                            alt="selected-item"
                          />
                        ) : (
                          <span className="image-space"></span>
                        )}
                        High
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <div className="option-icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAMAAAANBM47AAAAyVBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////um6cVAAAAQnRSTlMArlpqmQH9ZjPMrL0FOozoWf5EDvvCsja8jXjFynftlVc8xmsx4BsGFCiLtDgNeSxnLTvDJ4g3np2Gj1iJkpdDlpMyGeP5AAABX0lEQVRIx+3Wx3LCMBSF4d8QAaGZ3nvvvUMa7/9QWeCMIcjOCG2y4Ozu2PebkXWlMUDEMH1n5fhMIwJAN/pAt2VEu0D0rJEoRHw6gC+CcdaKgakHmFgrCHr9SvEGrTVg9aMcS7AArzrgvQH86oD/CTyBJ+AACM/7izRvRwFA4nCpTx9yYOt87+wA1na9lwFzt5trCv24XcZXEsDjBnggdl3HJMDCDahD9roeSQCxdO4vCiBj10PpRxwPGq/SlPJJgHA5d6nThfBzlP8tEC6kL9uUK4cBkvmSfFsbg7EUGNqDkgFE0XmwlkICjK7fyELdbbQXEuD3YfnrcN0Bq+vj2oepGzCXfYO9/XwNsHPu38q3MXG6XFmHBADi+CW/4j494g6Yqc/B7AaoqgPVGyA12QSUspmkLKCi959YIaQHhKjpATX0fpYNoKexiFAPQDTbj7W3m+JnTzutgHJaHQC+AQpzqrdLFpBoAAAAAElFTkSuQmCC"
                    alt="SubtitleIcon"
                  />
                </div>
                <div className="option-description">
                  <div className="option-text">Subtitles</div>
                  <label className="setting-switch">
                    <input type="checkbox" id="subtitles" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Settings;
