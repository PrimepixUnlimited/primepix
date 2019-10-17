const jwt = require('jsonwebtoken')

const getClaims = async (req: any) => {
  let verifiedToken
  try {
    const { token } = req.request.cookies
    verifiedToken = await jwt.verify(token, process.env.APP_SECRET)
  } catch (err) {
    return null
  }
  return verifiedToken.claims
}

export default {
  getClaims
}
