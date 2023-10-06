import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
// import { VscDashboard  } from "react-icons/vsc";

export default function Sidebar() {
  const active = () => {
    $(".metismenu-link").toggleClass("active");
  };

  return (
    <>
      <div className="sidebar-mobile-overlay"></div>
      <div
        className="app-sidebar bg-royal sidebar-text-light sidebar-shadow appear-done enter-done fade-in slide-right"
        id="sidebar"
      >
        <div className="app-sidebar__inner">
          <div className="metismenu vertical-nav-menu">
            <ul className="metismenu-container">
              <li className="metismenu-item">
                <Link
                  className="metismenu-link"
                  to="/"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="panel-group"
            id="accordionMenu"
            role="tablist"
            aria-multiselectable="true"
          ></div>

          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingone"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  Explore(E-Store)
                </a>
              </div>
            </div>
            <div
              id="collapseEleven"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingone"
            >
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading1"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Category
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseNine"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-category"
                            className="metismenu-link"
                          >
                            Add/Manage Category
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading2"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Country
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse2"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading2"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-country"
                            className="metismenu-link"
                          >
                            Add/Manage Country
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading3"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Category Banner
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading3"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-category-banner"
                            className="metismenu-link"
                          >
                            Add/Manage Category Banner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading4"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Language
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse4"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading4"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-language"
                            className="metismenu-link"
                          >
                            Add/Manage Language
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading5"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        SubCategory
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse5"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading5"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-subcategory"
                            className="metismenu-link"
                          >
                            Add/Manage SubCategory
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading6"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Banner
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse6"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading6"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-banner"
                            className="metismenu-link"
                          >
                            Add/Manage Banner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading7"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse7"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Unit
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse7"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading7"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-unit"
                            className="metismenu-link"
                          >
                            Add/Manage Unit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingTwo"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                  {/* <TbCategory/> */}
                  Estore Partner
                </a>
              </div>
            </div>
            <div
              id="collapseTwo"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div className="panel-body">
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/apprroved-partner-list"
                      className="metismenu-link"
                    >
                      Approved PartnerList
                    </Link>
                  </li>
                </ul>
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/view-pending-for-approval"
                      className="metismenu-link"
                    >
                      Pending ForApproval
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingThree"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapse22"
                  aria-expanded="false"
                  aria-controls="collapse22"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  PodCast
                </a>
              </div>
            </div>
            <div
              id="collapse22"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingONE"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapseTWO"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Music Category
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseTWO"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingONE"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-music-category"
                            className="metismenu-link"
                          >
                            Add/Manage Music Category
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingTWO"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse11"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Music Genre
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse11"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-music-genre"
                            className="metismenu-link"
                          >
                            Add/Manage Music Genre
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingThree"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse12"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        PodCast Category
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse12"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-podcast-category"
                            className="metismenu-link"
                          >
                            Add/Manage PodCast Category
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingFour"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse13"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Points
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse13"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-and-view-points"
                            className="metismenu-link"
                          >
                            Add/View Points
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingFive"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse14"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Mood
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse14"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-and-manage-mood"
                            className="metismenu-link"
                          >
                            Add/Manage Mood
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingSix"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse15"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Podcast Genre
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse15"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingSix"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-and-manage-podcast-genre"
                            className="metismenu-link"
                          >
                            Add/Manage Podcast Genre
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="headingSeven"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse16"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Subscription
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse16"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingSeven"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-and-manage-podcast-subscription"
                            className="metismenu-link"
                          >
                            Add/Manage Subscription
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingeight"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapse21"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                  {/* <TbCategory/> */}
                  OTT Partner
                </a>
              </div>
            </div>
            <div
              id="collapse21"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingeight"
            >
              <div className="panel-body">
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/add-and-manage-ott-partner"
                      className="metismenu-link"
                    >
                      AddAndManage OTT Partner
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingnine"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapse23"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                  {/* <TbCategory/> */}
                  OTT Content Language
                </a>
              </div>
            </div>
            <div
              id="collapse23"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingnine"
            >
              <div className="panel-body">
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/add-and-manage-ott-content-language"
                      className="metismenu-link"
                    >
                      Add/Manage OTTContentLanguage
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingTen"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapse43"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                  {/* <TbCategory/> */}
                  OTT Partner Approve
                </a>
              </div>
            </div>
            <div
              id="collapse43"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingten"
            >
              <div className="panel-body">
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/view-apprroved-partnership-list"
                      className="metismenu-link"
                    >
                      Approved PartnerShip
                    </Link>
                  </li>
                </ul>
                <ul className="metismenu-container">
                  <li className="metismenu-item">
                    <Link
                      to="/view-disapproved-partnership-list"
                      className="metismenu-link"
                    >
                      DisApproved PartnerShip
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="heading41"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapse71"
                  aria-expanded="false"
                  aria-controls="collapse71"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  Learning
                </a>
              </div>
            </div>
            <div
              id="collapse71"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading41"
            >
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="collapse76"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapseTWO"
                        aria-expanded="false"
                        aria-controls="collapse76"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Category
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseTWO"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="collapse76"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/manage-category"
                            className="metismenu-link"
                          >
                            Add/Manage Category
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
