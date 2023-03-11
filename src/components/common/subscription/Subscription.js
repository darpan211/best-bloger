import styles from "./subscription.module.css";

const Subscription = (props) => {
  const { isSupport, isAdmin, isModerator } = props
  const { active, isVipActive, isPlatinumActive, isDiamondActive, onClick, children, isTwoFactorActive, classes, itemBetween } = props
  const style = isVipActive ? styles.vipActive : isPlatinumActive ?
    styles.platinumActive : isDiamondActive ? styles.diamondActive : isTwoFactorActive ? styles.blueBorder : isSupport ? styles.support : isAdmin ? styles.admin : isModerator ? styles.moderator : ''
  return (
    <div onClick={onClick} className={`${itemBetween} ${active ? styles.activeClass : typeof active !== "undefined" ? "shadow-none" : ""} flex mt-3 p-4 rounded-xl mb-4 cursor-pointer 
      ${classes ? classes : style ? style : styles.notActive}`}>
      {children}
    </div>
  )
}

export default Subscription