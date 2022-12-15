import React, { useEffect, useState } from 'react'
import Decoration from '../../assets/Decoration.svg'

export default function Register() {
	return (
		<>
			<div className='login__box'>
				<h2 className='global__title'>Załóż konto</h2>
				<img src={Decoration} alt='dekoracja' className='login__decoration' />
				<div className='login__inputs--box'>
					<p className='login__input--title'>Email</p>
					<input className='contact__inputs--item'></input>
					<p className='login__input--title'>Hasło</p>
					<input className='contact__inputs--item'></input>
					<p className='login__input--title'>Powtórz Hasło</p>
					<input className='contact__inputs--item'></input>
				</div>
				<div className='login__action--box'>
					<button className='header__login--buttons login__button--action'>Zaloguj się</button>
					<button className='header__login--buttons login__button--action'>Załóż konto</button>
				</div>
			</div>
		</>
	)
}
