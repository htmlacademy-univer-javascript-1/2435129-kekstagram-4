import { renderGallery } from './user_modal.js';
import { getData} from './api.js';
import { setUserSubmitForm, closePhotoRedactor } from './user_forms.js';
import './effects.js';
import { debounce, showAlert } from './utils.js';
import  { init, getFilteredPictures } from './filters.js';




setUserSubmitForm(closePhotoRedactor);

try {
  const data = await getData();
  const debouncedRenderGalery = debounce(renderGallery);
  init(data, debouncedRenderGalery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
