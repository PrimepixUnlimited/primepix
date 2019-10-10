const hasPermission = (user: any, permissionsNeeded: string[]) => {
  const matchedPermissions = user.permissions.filter(
    (permissionTheyHave: string) =>
      permissionsNeeded.includes(permissionTheyHave)
  )
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions
      : ${permissionsNeeded}
      You Have:
      ${user.permissions}
      `)
  }
}

export default {
  hasPermission
}
