import CapturePhotoScreen from '../screens/app/CapturePhoto'
import CameraRollScreen from '../screens/app/CameraRoll'

import ROUTES from './_routes'

const modalRoutes = {
  [ROUTES.CapturePhotoModal]: CapturePhotoScreen,
  [ROUTES.CameraRoll]: CameraRollScreen
}

export default modalRoutes
