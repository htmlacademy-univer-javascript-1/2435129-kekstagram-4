import { renderGallery } from './user_modal.js';
import { getData } from './api.js';
import { setUserSubmitForm, closePhotoRedactor } from './user_forms.js';
import './effects.js';
import { debounce, showAlert } from './utils.js';
import { init, getFilteredPictures } from './filters.js';
import './photo.js';

setUserSubmitForm(closePhotoRedactor);

(async () => {
  try {
    const data = await getData();
    const debouncedRenderGallery = debounce(renderGallery);
    init(data, debouncedRenderGallery);
    renderGallery(getFilteredPictures());
  } catch (err) {
    showAlert(err.message);
  }
})();
