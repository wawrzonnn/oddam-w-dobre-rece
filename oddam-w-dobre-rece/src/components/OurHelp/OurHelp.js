import React from 'react'
import decoration from '../../assets/Decoration.svg'

const OurHelp = () => {
	return (
		<>
			<div className='homesteps__box--title'  id='ourhelp'>
				<h2 className='global__title'>Komu pomagamy?</h2>
				<img src={decoration} alt='dekoracja' />
			</div>
			<div className='ourhelp__buttons--box'>
				<div className='ourhelp__buttons--item'>Fundacjom</div>
				<div className='ourhelp__buttons--item'>Organizacjom Pozarządowym</div>
				<div className='ourhelp__buttons--item'>Lokalnym Zbiórkom</div>
			</div>
			<p className='ourhelp__text--main'>
				W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
				zajmują, komu pomagają i czego potrzebują.
			</p>



			<div className='ourhelp__container'>

                {/* JEDNA KOMÓRKA */}
				<div className='ourhelp__container--small'>
					<div className='ourhelp__box--left'>
						<p className='ourhelp__content--title'>Fundacja “Dbam o Zdrowie”</p>
						<p className='ourhelp__content--description'>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
					</div>
					<div className='ourhelp__box-right'>
						<p className='ourhelp__content--type'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
					</div>
				</div>

                {/* JEDNA KOMÓRKA  */}
				<div className='ourhelp__container--small'>
					<div className='ourhelp__box--left'>
						<p className='ourhelp__content--title'>Fundacja “Dla dzieci”</p>
						<p className='ourhelp__content--description'>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
					</div>
					<div className='ourhelp__box-right'>
						<p className='ourhelp__content--type'>ubrania, meble, zabawki</p>
					</div>
				</div>

                {/* JEDNA KOMÓRKA  */}
				<div className='ourhelp__container--small'>
					<div className='ourhelp__box--left'>
						<p className='ourhelp__content--title'>Fundacja “Bez domu”</p>
						<p className='ourhelp__content--description'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
					</div>
					<div className='ourhelp__box-right'>
						<p className='ourhelp__content--type'>ubrania, jedzenie, ciepłe koce</p>
					</div>
				</div>
    
			</div>
		</>
	)
}

export default OurHelp
