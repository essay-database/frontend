import { selectRandom } from "./utils";

export const FACEBOOK_PAGE_LINK = "#";
export const TWITTER_PAGE_LINK = "#";

export const FETCH_URL = "http://backend";
export const NUM_FEATURED = 3;

// TODO add redirect URL: redirect_uri=https://www.essaydatabase.org
export const FACEBOOK_SHARE_LINK = `https://www.facebook.com/dialog/share?app_id=1298099583680280&href=www.essaydatabase.org&quote=checkout%20essaydb%20for%20college%20application%20essays
`;

export const TWITTER_SHARE_LINK = `https://twitter.com/intent/tweet?url=www.essaydatabase.org&text=checkout%20essaydb%20for%20college%20application%20essays&hashtags=essaydb
`;

const IMAGES = [];
importAll(require.context("./images", true, /\.jpg$/));
function importAll(r) {
  r.keys().forEach(key => IMAGES.push(r(key)));
}
export const UPLOAD_IMAGE = selectRandom(IMAGES);
// app info
export { default as LOGO_IMAGE } from "./icons/logo.png";
export { default as LOGO_IMAGE_LIGHT } from "./icons/logo-white.png";
export const LOGO_WIDTH = 140;
export const LOGO = "essay db";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const ABOUT =
  "Compiling a global collection of college application essays and personal statements.";
export const UPLOAD_TITLE = "Share with the world!";
export const LOADING_DELAY = 600;
