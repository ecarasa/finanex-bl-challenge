
import { Alert, Card, Table, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';




const StatsDetails = ({ stats }) => {
    if (!stats) return null;

    const { last_ocean_event, departure_event_of_last_ocean_event } = stats;

    return (
        <div>
            {last_ocean_event && (
                <>
                    <p className='mb-0'><strong>Último evento oceánico:</strong> {last_ocean_event.display_event || 'N/A'}</p>
                    <p className='mb-0'>Ubicación: {last_ocean_event.location || 'N/A'}</p>
                    <p className='mb-0'>Fecha planeada: {last_ocean_event.planned_date || 'N/A'}</p>
                    <p className='mb-0'>Modo: {last_ocean_event.mode || 'N/A'}</p>
                    <hr />
                </>
            )}

            {departure_event_of_last_ocean_event && (
                <>
                    <p className='mb-0'><strong>Evento de partida del último evento oceánico:</strong> {departure_event_of_last_ocean_event.display_event || 'N/A'}</p>
                    <p className='mb-0'>Ubicación: {departure_event_of_last_ocean_event.location || 'N/A'}</p>
                    <p className='mb-0'>Modo: {departure_event_of_last_ocean_event.mode || 'N/A'}</p>
                </>
            )}
        </div>
    );
};


function ContainerInfo({ data }) {



    return (
        <>
            <hr />
            <Row className='mt-4'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Número BL: {data.container_number}</Card.Title>
                            <Card.Text>
                                <p className='mb-0'><strong>Carrier:</strong> {data.carrier_name}</p>
                                <p className='mb-0'><strong>Tracking ID:</strong> {data.tracking_id}</p>
                                <p className='mb-0'><strong>Origen:</strong> {data.pol_name}</p>
                                <p className='mb-0'><strong>Destino:</strong> {data.pod_name}</p>
                                <p className='mb-0'><strong>Contenedor:</strong> {data.container_type} {data.container_size}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Estado: {data.status}</Card.Title>
                            <Card.Text>Fecha estimada de llegada: {data.stats.last_ocean_event.planned_date}</Card.Text>
                            <Card.Link href={data.tracking_link}>Ver más detalles</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <h4>Eventos</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Modo</th>
                                <th>Ubicación</th>
                                <th>Fecha</th>
                                <th>Observaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.events.map(event => (
                                <tr key={event.event_id}>
                                    <td>{event.display_event}</td>
                                    <td>{event.mode}</td>
                                    <td>{event.location}</td>
                                    <td>{event.actual_date || event.planned_date}</td>
                                    <td>{event.remarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <h4>Estadísticas</h4>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <StatsDetails stats={data.stats} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ContainerInfo;