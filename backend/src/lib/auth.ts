const jwt = require('jsonwebtoken')

const getClaims = async (req: any) => {
  let decodedToken
  try {
    const { authorization } = req.request.headers
    console.log(authorization)
    decodedToken = await jwt.verify(authorization, process.env.APP_SECRET)
    console.log(decodedToken)
  } catch (err) {
    console.log(err)
    return null
  }
  return decodedToken.claims
}

export default {
  getClaims
}
