import HttpClientXml from "../Utils/HttpClientXml";

async function AddCategory(data) {
  let endpoind = "add-category";
  return HttpClientXml.post(endpoind, data);
}

async function ViewAllCategory() {
  let endpoind = "view-Category";
  return HttpClientXml.get(endpoind);
}

async function UpdateCategory(id, data) {
  let endpoind = `update-Category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteCategory(id) {
  let endpoind = `delete-Category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddCountry(data) {
  let endpoind = "add-Country";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllCountry() {
  let endpoind = "view-Country";
  return HttpClientXml.get(endpoind);
}
async function UpdateCountry(id, data) {
  let endpoind = `update-Country/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteCountry(id) {
  let endpoind = `delete-Country/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddCategoryBanner(data) {
  let endpoind = "add-Category-Banner";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllBannerImage() {
  let endpoind = "view-Category-Banner";
  return HttpClientXml.get(endpoind);
}
async function UpdateBannerImage(id, data) {
  let endpoind = `update-Category-Banner/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteBannerImage(id) {
  let endpoind = `delete-Category-Banner/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddLanguage(data) {
  let endpoind = "add-Language";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllLanguage() {
  let endpoind = "view-Language";
  return HttpClientXml.get(endpoind);
}
async function UpdateLanguage(id, data) {
  let endpoind = `update-Language/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteLanguage(id) {
  let endpoind = `delete-Language/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddSubCategory(data) {
  let endpoind = "add-sub-category";
  return HttpClientXml.post(endpoind, data);
}

async function ViewAllSubCategory(id) {
  let endpoind = `view-Sub-Category/${id}`;
  return HttpClientXml.get(endpoind, id);
}

async function UpdateSubCategory(id, data) {
  let endpoind = `update-sub-Category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteSubCategory(id) {
  let endpoind = `delete-sub-Category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddBanner(data) {
  let endpoind = "add-Banner";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllBanner() {
  let endpoind = "view-Banner";
  return HttpClientXml.get(endpoind);
}
async function UpdateBanner(id, data) {
  let endpoind = `update-Banner/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteBanner(id) {
  let endpoind = `delete-Banner/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddUnit(data) {
  let endpoind = "add-Unit";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllUnit() {
  let endpoind = "view-Unit";
  return HttpClientXml.get(endpoind);
}
async function UpdateUnit(id, data) {
  let endpoind = `update-Unit/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteUnit(id) {
  let endpoind = `delete-Unit/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}
async function ViewAllApprovedPartnerList() {
  let endpoind = "view-Approved-PartnerList";
  return HttpClientXml.get(endpoind);
}
async function ViewAllPendingPartnerList() {
  let endpoind = "view-Pending-ForApproval";
  return HttpClientXml.get(endpoind);
}
async function PartnerApprovedByAdmin(id) {
  let endpoind = `eStore-Partner-Approved-ByAdmin/${id}`;
  return HttpClientXml.put(endpoind);
}

async function AddMusicCategory(data) {
  let endpoind = "add-music-category";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllMusicCategory() {
  let endpoind = "view-music-category";
  return HttpClientXml.get(endpoind);
}
async function UpdateMusicCategory(id, data) {
  let endpoind = `update-music-category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteMusicCategory(id) {
  let endpoind = `delete-music-category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddMusicGenre(data) {
  let endpoind = "add-music-genre";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllMusicGenre() {
  let endpoind = "view-music-genre";
  return HttpClientXml.get(endpoind);
}
async function UpdateMusicGenre(id, data) {
  let endpoind = `update-music-genre/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteMusicGenre(id) {
  let endpoind = `delete-music-genre/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddPodCastCategory(data) {
  let endpoind = "add-podcast-category";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllPodCastCategory() {
  let endpoind = "view-podcast-category";
  return HttpClientXml.get(endpoind);
}
async function UpdatePodCastCategory(id, data) {
  let endpoind = `update-podcast-category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeletePodCastCategory(id) {
  let endpoind = `delete-podcast-category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddPoints(data) {
  let endpoind = "add-podcast-points";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllPoints() {
  let endpoind = "view-podcast-points";
  return HttpClientXml.get(endpoind);
}
async function AddMood(data) {
  let endpoind = "add-music-mood";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllMood() {
  let endpoind = "view-music-mood";
  return HttpClientXml.get(endpoind);
}
async function UpdateMood(id, data) {
  let endpoind = `update-music-mood/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteMood(id) {
  let endpoind = `delete-music-mood/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}
async function AddPodCastGenre(data) {
  let endpoind = "add-podcast-genre";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllPodCastGenre() {
  let endpoind = "view-podcast-genre";
  return HttpClientXml.get(endpoind);
}
async function UpdatePodcastGenre(id, data) {
  let endpoind = `update-podcast-genre/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeletePodcastGenre(id) {
  let endpoind = `delete-podcast-genre/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddPodCastSubscription(data) {
  let endpoind = "add-podcast-subscription";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllPodCastSubscription() {
  let endpoind = "view-podcast-subscription";
  return HttpClientXml.get(endpoind);
}
async function UpdatePodcastSubscription(id, data) {
  let endpoind = `update-podcast-subscription/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeletePodcastSubscription(id) {
  let endpoind = `delete-podcast-subscription/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddOttPartner(data) {
  let endpoind = "add-OTT-Category";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllOttPartner() {
  let endpoind = "view-podcast-subscription";
  return HttpClientXml.get(endpoind);
}
async function UpdateOttPartner(id, data) {
  let endpoind = `update-podcast-subscription/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteOttPartner(id) {
  let endpoind = `delete-podcast-subscription/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddOttContentLanguage(data) {
  let endpoind = "add-OTT-content-language";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllOttContentLanguage() {
  let endpoind = "get-OTT-content-language";
  return HttpClientXml.get(endpoind);
}
async function UpdateOttContentLanguage(id, data) {
  let endpoind = `update-OTT-content-language/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteOttContentLanguage(id) {
  let endpoind = `delete-OTT-content-language/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}
async function ViewAllApprovedOTTPartnerShipList() {
  let endpoind = "view-Approved-OTT-PartnerList";
  return HttpClientXml.get(endpoind);
}
async function ViewAllDisApprovedOTTPartnerShipList() {
  let endpoind = "view-Pending-OTT-ForApproval";
  return HttpClientXml.get(endpoind);
}
async function OTTPartnerApprovedByAdmin(id) {
  let endpoind = `ott-Partner-Approved-ByAdmin/${id}`;
  return HttpClientXml.put(endpoind);
}
async function AddLearningCategory(data) {
  let endpoind = "add-learning-category";
  return HttpClientXml.post(endpoind,data);
}
async function ViewLearningCategory() {
  let endpoind = "view-learning-category";
  return HttpClientXml.get(endpoind);
}
async function DeleteLearningCategory(id) {
  let endpoind = `delete-learning-category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}
async function UpdateLearningCategory(id, data) {
  let endpoind = `update-learning-category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

export default {
  AddLearningCategory,
  ViewLearningCategory,
  DeleteLearningCategory,
  UpdateLearningCategory,
  OTTPartnerApprovedByAdmin,
  AddOttContentLanguage,
  DeleteOttContentLanguage,
  UpdateOttContentLanguage,
  ViewAllOttContentLanguage,
  AddPodCastSubscription,
  AddOttPartner,
  ViewAllPodCastSubscription,
  UpdatePodcastSubscription,
  DeletePodcastSubscription,
  AddPodCastGenre,
  ViewAllPodCastGenre,
  UpdatePodcastGenre,
  DeletePodcastGenre,
  DeleteMood,
  AddMood,
  UpdateMood,
  ViewAllMood,
  AddPoints,
  ViewAllPoints,
  DeletePodCastCategory,
  AddPodCastCategory,
  ViewAllPodCastCategory,
  UpdatePodCastCategory,
  AddMusicGenre,
  DeleteMusicGenre,
  ViewAllMusicGenre,
  UpdateMusicGenre,
  AddMusicCategory,
  ViewAllMusicCategory,
  DeleteMusicCategory,
  UpdateMusicCategory,
  AddCategory,
  ViewAllCategory,
  UpdateCategory,
  DeleteCategory,
  AddCountry,
  ViewAllCountry,
  UpdateCountry,
  DeleteCountry,
  AddCategoryBanner,
  ViewAllBannerImage,
  UpdateBannerImage,
  DeleteBannerImage,
  AddLanguage,
  ViewAllLanguage,
  UpdateLanguage,
  DeleteLanguage,
  AddSubCategory,
  ViewAllSubCategory,
  UpdateSubCategory,
  DeleteSubCategory,
  AddBanner,
  ViewAllBanner,
  UpdateBanner,
  DeleteBanner,
  AddUnit,
  ViewAllUnit,
  UpdateUnit,
  DeleteUnit,
  ViewAllApprovedPartnerList,
  ViewAllPendingPartnerList,
  PartnerApprovedByAdmin,
  ViewAllApprovedOTTPartnerShipList,
  ViewAllDisApprovedOTTPartnerShipList,
};
