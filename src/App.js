import React, { useEffect } from "react";
import "./App.css";
import PrivateRoutes from "./View/PrivateRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/View/Dashboard/Index";
import "../src/assets/base.css";
import Main from "./Layout/Main";

import Login from "./AdminAuthentication/Login";
import Register from "./AdminAuthentication/Register";
import AddAndManageCountry from "./View/Category/AddAndManageCountry";
import AddAndManageCategoryBanner from "./View/Category/AddAndManageCategoryBanner";
import AddAndManageLanguage from "./View/Category/AddAndManageLanguage";
import AddAndManageSubCategory from "./View/Category/AddAndManageSubCategory";
import AddAndManageBanner from "./View/Category/AddAndManageBanner";
import AddAndManageUnit from "./View/Category/AddAndManageUnit";
import ApprovedPartnerList from "./View/EstorePartnerCategory/ApprovedPartnerList";
import PendingForApproval from "./View/EstorePartnerCategory/PendingForApproval";
import AddAndMAnageMusicCategory from "./View/PodCast/AddAndMAnageMusicCategory";
import AddAndManageMusicGenre from "./View/PodCast/AddAndManageMusicGenre";
import AddAndManagePodCastCategory from "./View/PodCast/AddAndManagePodCastCategory";
import AddAndManagePoints from "./View/PodCast/AddAndManagePoints";
import AddAndManageMood from "./View/PodCast/AddAndManageMood";
import PodcastGenre from "./View/PodCast/PodcastGenre";
import AddAndMaangePodcastSubscription from "./View/PodCast/AddAndMaangePodcastSubscription";
import AddAndManageOttPartner from "./View/OttPartner/AddAndManageOttPartner";
import AddAndManageOTTContentLanguage from "./View/OTTContentLanguage/AddAndManageOTTContentLanguage";
import ApprovedOTTPartnershipList from "./View/OTTPartnerList/ApprovedOTTPartnershipList";
import DisApprovedOTTPartnerShipList from "./View/OTTPartnerList/DisApprovedOTTPartnerShipList";
import AddAndManageCategory from "./View/Learning/Catagory/AddAndManageCategory";

import { Toaster } from "react-hot-toast";

import AddState from "./View/State/AddState";
import AddCategory from "./View/Category/AddCategory";

function App() {
  return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-state" element={<AddState />} />
            <Route path="/add-manage-category" element={<AddCategory />} />
            <Route
              path="/add-manage-language"
              element={<AddAndManageLanguage />}
            />
            <Route
              path="/add-manage-country"
              element={<AddAndManageCountry />}
            />
            <Route
              path="/add-manage-category-banner"
              element={<AddAndManageCategoryBanner />}
            />
            <Route
              path="/add-manage-subcategory"
              element={<AddAndManageSubCategory />}
            />
            <Route path="/add-manage-banner" element={<AddAndManageBanner />} />
            <Route path="/add-manage-unit" element={<AddAndManageUnit />} />
            <Route
              path="/apprroved-partner-list"
              element={<ApprovedPartnerList />}
            />
            <Route
              path="/view-pending-for-approval"
              element={<PendingForApproval />}
            />
            <Route
              path="/add-manage-music-category"
              element={<AddAndMAnageMusicCategory />}
            />
            <Route
              path="/add-manage-music-genre"
              element={<AddAndManageMusicGenre />}
            />
            <Route
              path="/add-manage-podcast-category"
              element={<AddAndManagePodCastCategory />}
            />

            <Route
              path="/add-and-view-points"
              element={<AddAndManagePoints />}
            />

            <Route
              path="/add-and-manage-podcast-genre"
              element={<PodcastGenre />}
            />

            <Route
              path="/add-and-manage-podcast-subscription"
              element={<AddAndMaangePodcastSubscription />}
            />

            <Route
              path="/add-and-manage-ott-partner"
              element={<AddAndManageOttPartner />}
            />
            <Route
              path="/add-and-manage-ott-content-language"
              element={<AddAndManageOTTContentLanguage />}
            />
            <Route
              path="/view-apprroved-partnership-list"
              element={<ApprovedOTTPartnershipList />}
            />
            <Route
              path="/view-disapproved-partnership-list"
              element={<DisApprovedOTTPartnerShipList />}
            />
            <Route path="/add-and-manage-mood" element={<AddAndManageMood />} />


            <Route
              path="/manage-category"
              element={<AddAndManageCategory />}
            />
          </Route>
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
