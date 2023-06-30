import React, {useState} from 'react';

import {createRoot} from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const App = () => {
    const [googleQuery, setGoogleQuery] = useState('');
    const [bingQuery, setBingQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleColorMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    const handleGoogleSearch = (event) => {
        event.preventDefault();
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`;
        window.open(searchUrl, '_blank');
    };

    const handleBingSearch = (event) => {
        event.preventDefault();
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(bingQuery)}`;
        window.open(searchUrl, '_blank');
    };

    const handleGoogleQueryChange = (event) => {
        setGoogleQuery(event.target.value);
    };

    const handleBingQueryChange = (event) => {
        setBingQuery(event.target.value);
    };

    return (
        <Container className={"w-100 mt-4 justify-content-center align-items-center"}>
            <Row className={"py-4"}>
                <Col></Col>
                <Col md={10} className={"text-center px-1"} >
                    <Card  style={{ border: "1px solid black" }}>
                        <Card.Body>
                            <Form onSubmit={handleGoogleSearch}>
                                <Row>
                                    <Col md={10}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Google Search"
                                                value={googleQuery}
                                                onChange={handleGoogleQueryChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" size="md" type="submit">
                                                Google
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                            <Form onSubmit={handleBingSearch}>
                                <Row>
                                    <Col md={10}>
                                        <Form.Group className="">
                                            <Form.Control
                                                type="text"
                                                placeholder="Bing Search"
                                                value={bingQuery}
                                                onChange={handleBingQueryChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" size="md" type="submit">
                                                Bing
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <Row className={"py-4"}>
                <Col></Col>
                <Col md={2} className={"px-1"}>
                    <Card className={"h-100"} style={{ border: "1px solid black" }}>
                        <Card.Header className={""}>Building</Card.Header>
                        <ListGroup variant="flush" className={"justify-content-start"}>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://github.com/shanedoolane"}
                                        variant="outline-secondary" size="md">
                                        Github
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://github.com/shanedoolane/optiagbe"}
                                        variant="outline-secondary" size="md">
                                        OptiAG BE
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://github.com/shanedoolane/optiaghw"}
                                        variant="outline-secondary" size="md">
                                        OptiAG HW
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#Home"}
                                        variant="outline-secondary" size="md">
                                        AWS EC2
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://s3.console.aws.amazon.com/s3/home?region=us-east-2#"}
                                        variant="outline-secondary" size="md">
                                        AWS S3
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://us-east-2.console.aws.amazon.com/rds/home?region=us-east-2"}
                                        variant="outline-secondary" size="md">
                                        AWS RDS
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={2} className={"px-1"}>
                    <Card className={"h-100"}  style={{ border: "1px solid black" }}>
                        <Card.Header className={""}>Learn</Card.Header>
                        <ListGroup variant="flush" className={"justify-content-start"}>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://login.factset.com/login/"}
                                        variant="outline-secondary" size="md">
                                        FACTSET
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://chat.openai.com/?model=text-davinci-002-render-sha"}
                                        variant="outline-secondary" size="md">
                                        OpenAI Console
                                    </Button>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.youtube.com/"}
                                        variant="outline-secondary" size="md">
                                        Youtube
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.researchgate.net/"}
                                        variant="outline-secondary" size="md">
                                        Research Gate
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.wsj.com/"}
                                        variant="outline-secondary" size="md">
                                        WSJ
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={2} className={"px-1"} >
                    <Card className={"h-100"}  style={{ border: "1px solid black" }}>
                        <Card.Header className={""}>Tools</Card.Header>
                        <ListGroup variant="flush" className={"justify-content-start"}>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://photos.google.com/u/1/?pageId=none"}
                                        variant="outline-secondary" size="md">
                                        Google Photos
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://drive.google.com/drive/u/1/"}
                                        variant="outline-secondary" size="md">
                                        Google Drive
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://stackoverflow.com/"}
                                        variant="outline-secondary" size="md">
                                        Stack Overflow
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.paste.photos/"}
                                        variant="outline-secondary" size="md">
                                        Paste Photo
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={2} className={"px-1"}>
                    <Card  style={{ border: "1px solid black" }}>
                        <Card.Header className={""}>Finance</Card.Header>
                        <ListGroup variant="flush" className={"justify-content-start"}>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://home.personalcapital.com/page/login/app#/dashboard"}
                                        variant="outline-secondary" size="md">
                                        Empower
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx"}
                                        variant="outline-secondary" size="md">
                                        Schwab
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://digital.fidelity.com/ftgw/digital/portfolio/summary"}
                                        variant="outline-secondary" size="md">
                                        Fidelity
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.americanexpress.com/en-us/account/login"}
                                        variant="outline-secondary" size="md">
                                        Amex
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.citi.com/"}
                                        variant="outline-secondary" size="md">
                                        Citi
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.chase.com/"}
                                        variant="outline-secondary" size="md">
                                        Chase
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.discover.com/"}
                                        variant="outline-secondary" size="md">
                                        Discover
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>
                <Col md={2} className={"px-1"}>
                    <Card className={"h-100"} style={{ border: "1px solid black" }}>
                        <Card.Header className={""}>Shop</Card.Header>
                        <ListGroup variant="flush" className={"justify-content-start"}>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.mcmaster.com/"}
                                        variant="outline-secondary" size="md">
                                        McMaster
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.amazon.com/gp/cart/view.html?ref_=nav_cart"}
                                        variant="outline-secondary" size="md">
                                        Amazon
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.digikey.com/"}
                                        variant="outline-secondary" size="md">
                                        DigiKey
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        href={"https://www.aliexpress.us/"}
                                        variant="outline-secondary" size="md">
                                        Aliexpress
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

