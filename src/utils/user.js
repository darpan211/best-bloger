export const getUserNameFromEmail = (email) => {
  if (!email) return
  const name = email.match(/^([^@]*)@/);
  const userExtractedName = name ? name[1] : null;
  return userExtractedName
}