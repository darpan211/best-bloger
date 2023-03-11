
export const isUserHasPurchasedPost = (post, user, purchasedPosts) => {

  const isPurchased = purchasedPosts?.find((pPost) => pPost == post?.id)
  const isSubscribed = user?.extraDetails?.subscriber?.find((subs) => subs?.creatorId === post?.userId)
  const isUserOwnPost = post?.userId === user?.uid
  if (post.type === 'subscribers' && isSubscribed && isSubscribed?.type === post?.tierAccess.toLowerCase() && isSubscribed?.creatorId === post?.userId) {
    return true
  } else if (isPurchased || isUserOwnPost || post?.type === 'public') {
    return true
  } else {
    return false
  }
}

export const postLockType = (post, isAlreadyPurchased) => {

  if (post?.type === 'private') {
    return '/images/post/privateLock.png'
  } else if (post.type === 'subscribers') {
    if (post?.tierAccess.toLowerCase() === 'platinum') {
      return '/images/post/platinumLock.png'
    }
    if (post?.tierAccess.toLowerCase() === 'vip') {
      return '/images/post/vipLock.png'
    }
    if (post?.tierAccess.toLowerCase() === 'diamond') {
      return '/images/post/diamondLock.png'
    }
  }
}