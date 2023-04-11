
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import '../styles/ModuleStyle.css';
// json file containing links for each module
import data from '../JSONfile/ModulesData.json';

const Modules = () => {
  return (
    <Accordion>
      {data.map((module, index) => (
        <Card key={index}>
          <Card.Header>
            <h1>Something</h1>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              {module.title}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              <ul>
                {module.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.link}>{link.linkName}</a>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Modules;
