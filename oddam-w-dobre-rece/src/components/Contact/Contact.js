import React from 'react'
import decoration from '../../assets/Decoration.svg'
import background from '../../assets/Background-Contact-Form.jpg'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'

const Contact = () => {
	return (
		<>
			<div className='contact__box' id='contact'>
				<div className='contact__box--img'>
					<img className='contact__image--item' src={background} alt='ubrania' />
				</div>
				<div className='contact__box--content'>
					<h2 className='global__title'>Skontaktuj się z nami!</h2>

					<img src={decoration} alt='dekoracja' />
					<div className='contact__inputs--box'>
						<div className='contact__name--box'>
							<p className='contact__placeholder'>Wpisz swoje imię</p>
							<input className='contact__inputs--item' type={'text'}></input>
						</div>
						<div className='contact__email--box'>
							<p className='contact__placeholder'>Wpisz swłój email</p>
							<input className='contact__inputs--item' type={'email'}></input>
						</div>
					</div>
					<div>
						<p className='contact__placeholder'>Wpisz swoją wiadomość</p>
						<textarea className='contact__inputs--item contact__inputs--textarea' type={'textarea'} />
					</div>
					<button className='contact__button'>Wyślij</button>
				</div>
			</div>
			
				<p className='contact__footer--txt'>Copyright by Coders Lab</p><div className='contact__footer--box'>
				<div className='contact__footer--icons'>
					<img className='contact__footer--fb' src={facebook} alt='ikonka facebooka' />
					<img className='contact__footer--ig' src={instagram} alt='ikonka instagrama' />
				</div>
			</div>
		</>
	)
}

export default Contact
