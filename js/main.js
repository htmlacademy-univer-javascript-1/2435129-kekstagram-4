import { renderGallery } from './user_modal.js';
import { getData} from './api.js';
import { setUserSubmitForm, closePhotoRedactor } from './user_forms.js';
import './filters.js';
import { showAlert } from './utils.js';


getData()
  .then((pictures) => {
    renderGallery(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserSubmitForm(closePhotoRedactor);

