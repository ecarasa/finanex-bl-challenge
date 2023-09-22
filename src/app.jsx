import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Alert, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import ContainerInfo from './components/ContainerInfo';
import mockData from './mock/api-response.json';


function App() {

  const fetchContainerData = async (containerNumber) => {
    // Simulamos un delay como si estuvieramos haciendo una llamada a una API
    await new Promise(resolve => { setTimeout(resolve, 1000) });
    const searchResult = mockData.updated_trackings.find(track => track.container_number === containerNumber);
    return searchResult;
  }

  const [containerData, setContainerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [containerNumber, setContainerNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchContainerData(containerNumber);
    setContainerData(data);
    setHasSearched(true);
    setIsLoading(false);
  }, [containerNumber]);


  useEffect(() => {
    // podriamos ir validando el codigo del contenedor que sea real antes del request.
    console.log("containerNumber", containerNumber)
  }, [containerNumber])

  return (
    <div>
      <NavigationBar />
      <Container className="mt-6">
        <Row className="mt-4">
          <Col><h2>Bill of Lading Tracker</h2></Col>
        </Row>
        <Form inline>
          <Row className="mt-4">
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter BL Number"
                className=""
                onChange={(e) => setContainerNumber(e.target.value)}
              />
            </Col>
            <Col>
              <Button variant="primary" onClick={() => handleSearch()}>
                {isLoading ? <Spinner animation="border" size="sm" /> : 'Buscar'}
              </Button>
            </Col>
          </Row>
        </Form>

        {containerData
          ? <ContainerInfo data={containerData} />
          : hasSearched && <Alert className="mt-4" key="alert_badge_error" variant="danger">No hemos encontrado información para tu número de BL.</Alert>}
      </Container>
    </div>
  )
}

export default App
