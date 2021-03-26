import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Card } from 'react-bootstrap'

import './Gallery.css';
import events from '../../data/gallery';

function Gallery() {
	const images = [""]
	return (
		<Container fluid className='contained'>
			<div>
				<h1> Event Gallery </h1>
				<div className="events">
					{events.map((event) =>
						event.show ? (
							<Card className='gallery-card' key={event.id}>
								<Card.Img src={event.image} />
								<Card.Body>
									<Card.Title>{event.name}</Card.Title>
									<LinkContainer to={`/gallery/${event.link}`} className='event-link'><a>View Event</a></LinkContainer>
								</Card.Body>
							</Card>
						) : null
					)}
				</div>
			</div>
		</Container>
	)
}

export default Gallery
