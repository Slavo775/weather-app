import MagnifierIcon from "../../svg/MagnifierIcon";
import AzetLogoIcon from "../../svg/AzetLogoIcon";
import HeaderMenuIcon from "../../svg/HeaderMenuIcon";
import './Header.scss'

const Header = () => {
    const onMagnifierButtonClick = () => {console.log('on magnifier click')}
    return (
        <div className="header">
            <button className="header__magnifier-button" aria-label="Otvorit Autocomplete pre mesta" onClick={onMagnifierButtonClick}>
                <MagnifierIcon  />
            </button>

            <AzetLogoIcon />
            <HeaderMenuIcon />
        </div>
    )
}

export default Header