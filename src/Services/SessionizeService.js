import store from "../store";

const STORAGEKEY = "BOISECODECAMP";
const APIKEY = "qmd7y8xz";
const TYPES = {
  Sessions: [],
  Speakers: [],
  GridSmart: []
};

async function _getSessionizeData(type) {
  let res = await fetch(`https://sessionize.com/api/v2/${APIKEY}/view/${type}`);
  let data = await res.json();
  return data;
}

function _cacheData(data) {
  data.cached = Date.now() + 1000 * 60 * 60 * 24;
  localStorage.setItem(STORAGEKEY, JSON.stringify(data));
}

async function _fetchData() {
  let [sessions, speakers, schedule] = await Promise.all(
    Object.keys(TYPES).map(async type => await _getSessionizeData(type))
  );
  let data = { sessions, speakers, schedule };
  _cacheData(data);
  return data;
}

export default class SessionizeService {
  static async loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGEKEY));
    if (!data || data.cached < Date.now()) {
      data = await _fetchData();
    }
    store.commit("setSessionizeData", data);
  }
}
