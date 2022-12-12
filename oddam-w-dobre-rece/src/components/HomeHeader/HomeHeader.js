import React from 'react'
import ImageHero from '../../assets/Home-Hero-Image.jpg'
import Decoration from '../../assets/Decoration.svg'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
	return (
		<div className='header__box'>
			<img className='header__image' src={ImageHero} alt='banner' />
			<div className='header__box--content'>
				<div className='header__box--login'>
					{/* <Link to='/logowanie'> */}
					<button className='header__login--buttons'>Zaloguj</button>
					{/* </Link> */}
					{/* <Link to='/rejestracja'> */}
					<button className='header__login--buttons'>Załóż konto</button>
					{/* </Link> */}
				</div>
				<div>
					<nav>
						<ul className='header__nav'>
							<li className='header__nav--item'>
								<a className='header__nav--link' href='/'>
									Start
								</a>
							</li>
							<LinkScroll to='steps' smooth={true} duration={900}>
								<li className='header__nav--item'>O co chodzi ?</li>
							</LinkScroll>
							<LinkScroll to='aboutus' smooth={true} duration={900}>
								<li className='header__nav--item'>O nas</li>
							</LinkScroll>
							<LinkScroll to='ourhelp' smooth={true} duration={900}>
								<li className='header__nav--item'>Fundacja i organizacje</li>
							</LinkScroll>
							<LinkScroll to='contact' smooth={true} duration={900}>
								<li className='header__nav--item'>Kontakt</li>
							</LinkScroll>
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
						{/* <Link to='/logowanie'> */}
						<button className='header__buttons--item'>
							ODDAJ
							<br /> RZECZY
						</button>
						{/* </Link> */}
						{/* <Link to='/logowanie'> */}
						<button className='header__buttons--item'>ZORGANIZUJ ZBIÓRKĘ</button>
						{/* </Link> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHeader
