import MagnifierIcon from '../../svg/MagnifierIcon'
import AzetLogoIcon from '../../svg/AzetLogoIcon'
import HeaderMenuIcon from '../../svg/HeaderMenuIcon'
import './Header.scss'
import { useState, lazy, Suspense } from 'react'

/*  Header component have 2 state
      - default to show Magnifier icon + logo + menu
      - search to show Search form
    these 2 states depend on value isFormShow
*/
const Header = () => {
  const [isFormShown, setIsFormShown] = useState(false)
  const SearchForm = lazy(() => import('../SearchForm/SearchForm'))
  const onMagnifierButtonClick = () => {
    setIsFormShown(true)
  }
  return (
    <div className="header">
      {isFormShown ? (
        <Suspense>
          <SearchForm setIsFormShown={setIsFormShown} />
        </Suspense>
      ) : (
        <div className={'header__header-main-content'}>
          <button
            className="header__header-main-content__magnifier-button"
            aria-label="Otvorit Autocomplete pre mesta"
            onClick={onMagnifierButtonClick}>
            <MagnifierIcon />
          </button>

          <AzetLogoIcon />
          <HeaderMenuIcon />
        </div>
      )}
    </div>
  )
}

export default Header
