const postValidation = (postType, input, file) => {
  const error = {}
  if (!file) {
    error.error = 'Please select image'
  }
  if (input.tags.length === 0) {
    error.error = "Please add at least one tag."
  }
  if (postType === 'subscribers' && !input.tierAccess) [
    error.error = "Please choose tier access."
  ]
  if (postType === 'private' && (!input.oneTimePrice || !input.nPurchase)) {
    error.error = "Please add either a purchase price or a one-time view price."
  }
  return error
}

export default postValidation