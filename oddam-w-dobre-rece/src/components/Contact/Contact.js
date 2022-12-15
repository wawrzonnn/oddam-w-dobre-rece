import React from 'react'
import decoration from '../../assets/Decoration.svg'
import background from '../../assets/Background-Contact-Form.jpg'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import { useState } from 'react'

const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = e =>
		setForm(prev => ({
			...prev,
			[e.target.id]: e.target.value,
		}))

	const submitHandler = async e => {
		e.preventDefault()
		const body = JSON.stringify({
			form,
		})

		const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		})
		console.log(res);
		const resul = await res.json()
		console.log(resul);
	}

	return (
		<>
			<div className='contact__box' id='contact'>
				<div className='contact__box--img'>
					<img className='contact__image--item' src={background} alt='ubrania' />
				</div>
				<div className='contact__box--content'>
					<h2 className='global__title'>Skontaktuj się z nami!</h2>

					<img src={decoration} alt='dekoracja' />
					<form onSubmit={submitHandler}>
						<div className='contact__inputs--box'>
							<div className='contact__name--box'>
								<p className='contact__placeholder'>Wpisz swoje imię</p>
								<input
									id='name'
									className='contact__inputs--item'
									type={'text'}
									value={form.name}
									onChange={handleChange}></input>
							</div>
							<div className='contact__email--box'>
								<p className='contact__placeholder'>Wpisz swłój email</p>
								<input
									id='email'
									className='contact__inputs--item'
									type={'email'}
									value={form.email}
									onChange={handleChange}></input>
							</div>
						</div>
						<div>
							<p className='contact__placeholder'>Wpisz swoją wiadomość</p>
							<textarea
								id='message'
								className='contact__inputs--item contact__inputs--textarea'
								type={'textarea'}
								value={form.message}
								onChange={handleChange}
							/>
						</div>
						<button className='contact__button' type='submit'>
							Wyślij
						</button>
					</form>
				</div>
			</div>
			<input type={'text'}></input>

			<p className='contact__footer--txt'>Copyright by Coders Lab</p>
			<div className='contact__footer--box'>
				<div className='contact__footer--icons'>
					<img className='contact__footer--fb' src={facebook} alt='ikonka facebooka' />
					<img className='contact__footer--ig' src={instagram} alt='ikonka instagrama' />
				</div>
			</div>
		</>
	)
}

export default Contact
