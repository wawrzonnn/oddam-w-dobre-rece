import React from 'react'
import decoration from '../../assets/Decoration.svg'
import { useEffect, useState } from 'react'


const API =
	'https://askagyntutlweczoibwy.supabase.co/storage/v1/object/sign/oddam-w-dobre-rece/fundations.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvZGRhbS13LWRvYnJlLXJlY2UvZnVuZGF0aW9ucy5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwODc0NTczLCJleHAiOjE5ODYyMzQ1NzN9.ZffA75n0akomObLTkPmyqpVqtOyegiDdZw88utbh2jA'

const handleError = err => {
	console.log('Oops...')
	console.error(err)
}

const OurHelp = () => {
	const [orgs, setOrgs] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, setPostsPerPage] = useState(3)
	

	useEffect(() => {
		const getOrganisations = async () => {
			const response = await fetch(API)
			const { organisations } = await response.json()

			setOrgs(organisations)
		}
		getOrganisations().catch(handleError)
	}, [])

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = orgs.slice(firstPostIndex, lastPostIndex)



	//   console.log(renderPage);
	// console.log(currentPosts);
	
	// console.log(orgs);

	return (
		<>
			<div className='homesteps__box--title' id='ourhelp'>
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
			{orgs.map(({ id, type, name, description, details }) => (
				<div className='ourhelp__container' key={id}>
					<div className='ourhelp__container--small'>
						<div className='ourhelp__box--left'>
							<p className='ourhelp__content--title'>{name}</p>
							<p className='ourhelp__content--description'>
								{description}
							</p>
						</div>
						<div className='ourhelp__box-right'>
							<p className='ourhelp__content--type'>{details}</p>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default OurHelp
