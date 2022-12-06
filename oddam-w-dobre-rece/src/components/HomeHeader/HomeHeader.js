import React from 'react'
import ImageHero from '../../assets/Home-Hero-Image.jpg'
import Decoration from '../../assets/Decoration.svg'

const HomeHeader = () => {
	return (
		<div className='header__box'>
			<img className='header__image' src={ImageHero} alt='banner' />
			<div className='header__box--content'>
				<div className='header__box--login'>
					<div className='header__login--buttons'>Zaloguj</div>
					<div className='header__login--buttons'>Załóż konto</div>
				</div>
				<div>
					<nav>
						<ul className='header__nav'>
							<li className='header__nav--item'>Start</li>
							<li className='header__nav--item'>O co chodzi ?</li>
							<li className='header__nav--item'>O nas</li>
							<li className='header__nav--item'>Fundacja i organizacje</li>
							<li className='header__nav--item'>Kontakt</li>
						</ul>
					</nav>
				</div>
				<div className='header__banner--box'>
					<h1 className='global__title'>
						Zacznij pomagać! <br />
						Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img src={Decoration} alt='dekoracja' />
					<div className='header__buttons--box'>
						<div className='header__bottons--item'>
							ODDAJ
							<br /> RZECZY
						</div>
						<div className='header__bottons--item'>ZORGANIZUJ ZBIÓRKĘ</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHeader
