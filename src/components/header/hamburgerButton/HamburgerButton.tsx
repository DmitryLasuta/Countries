import classesList from './styles.module.css'

interface HamburgerButtonProps {
  isActive: boolean
  handleClick: () => void
}

const HamburgerButton = ({ isActive, handleClick }: HamburgerButtonProps) => {
  return (
    <button
      className={`${classesList['header__hamburger-button']} ${
        isActive && classesList['header__hamburger-button--active']
      }`}
      aria-label="Navigation menu button"
      onClick={handleClick}
      type="button"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default HamburgerButton
