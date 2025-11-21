import { Card, Button } from "react-bootstrap";

export default function App() {
  return (
    <div className="p-4">
      <Card>
        <Card.Body>
          <Card.Title>API Manager</Card.Title>
          <Card.Text>
            Microfrontend carregado com sucesso!
          </Card.Text>
          <Button variant="primary">Testar API</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
