import React from 'react'
import people from '../../assets/People.jpg'
import signature from '../../assets/Signature.svg'
import decoration from '../../assets/Decoration.svg'

const HomeAbout = () => {
	return (
		<>
			<div className='homeabout__box' id='aboutus'>
				<div className='homeabout__box--title'>
					<h2 className='global__title'>O nas</h2>
					<img src={decoration} alt='dekoracja' />
					<p className='homeabout__text'>
						Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed
						pea prairie turnip leek lentil turnip greens parsnip.
					</p>
					<img className='homeabout__signature' src={signature} alt='podpis' />
				</div>
				<div className='homeabout__box--img'>
					<img className='homeabout__img--item' src={people} alt='ludzie' />
				</div>
			</div>
		</>
	)
}

export default HomeAbout
