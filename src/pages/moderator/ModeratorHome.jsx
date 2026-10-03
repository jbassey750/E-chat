import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  Badge,
  ListGroup,
} from "react-bootstrap";
import {
  Megaphone,
  ShieldCheck,
  ChatDots,
  PencilSquare,
  ExclamationTriangle,
  CheckCircle,
  XCircle,
  InfoCircle,
} from "react-bootstrap-icons";

const ModeratorHome = () => {
  return (
    <div className="bg-light min-vh-100 py-4">
      <Container fluid="lg">
        {/* Page Header */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-white"
              style={{ width: "52px", height: "52px" }}
            >
              <Megaphone size={24} />
            </div>

            <div>
              <h2 className="fw-bold mb-1">Moderator Home</h2>
              <p className="text-muted mb-0">
                Important announcements and moderator guidelines
              </p>
            </div>
          </div>
        </div>

        {/* Welcome Announcement */}
        <Card className="border-0 shadow-sm mb-4 overflow-hidden">
          <Card.Body className="p-4 p-md-5">
            <Badge bg="dark" className="mb-3 px-3 py-2">
              IMPORTANT ANNOUNCEMENT
            </Badge>

            <h1 className="fw-bold mb-3">
              Welcome to the USA Platform!
            </h1>

            <p className="text-muted fs-5 mb-3">
              We are very happy that you are working with us. You are
              entertaining our clients from the USA, and we appreciate the
              effort and time you put into every conversation.
            </p>

            <Alert variant="warning" className="mb-0">
              <div className="d-flex gap-3">
                <ExclamationTriangle
                  size={22}
                  className="flex-shrink-0 mt-1"
                />

                <div>
                  <strong>Important:</strong>
                  <div className="mt-1">
                    Please always check your orthography and grammar before
                    sending a message. Also remember to write your notes
                    correctly after every relevant conversation.
                  </div>
                </div>
              </div>
            </Alert>
          </Card.Body>
        </Card>

        {/* Message Quality */}
        <Card className="border-0 shadow-sm mb-4">
          <Card.Body className="p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10 text-primary"
                style={{ width: "46px", height: "46px" }}
              >
                <ChatDots size={22} />
              </div>

              <div>
                <h4 className="fw-bold mb-1">Message Quality</h4>
                <p className="text-muted mb-0">
                  Keep every conversation natural, clear and engaging.
                </p>
              </div>
            </div>

            <p className="text-muted">
              Our supervisors are constantly checking the messages you send
              to ensure that our clients receive a high-quality experience.
              Every message matters.
            </p>

            <ListGroup variant="flush">
              <ListGroup.Item className="px-0 py-3 border-bottom">
                <div className="d-flex gap-3">
                  <CheckCircle
                    size={20}
                    className="text-success flex-shrink-0 mt-1"
                  />

                  <div>
                    <strong>Check your grammar</strong>
                    <p className="text-muted mb-0 mt-1">
                      Read your message before sending it and correct obvious
                      spelling or grammar mistakes.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="px-0 py-3 border-bottom">
                <div className="d-flex gap-3">
                  <CheckCircle
                    size={20}
                    className="text-success flex-shrink-0 mt-1"
                  />

                  <div>
                    <strong>Keep conversations natural</strong>
                    <p className="text-muted mb-0 mt-1">
                      Respond naturally to what the client says instead of
                      sending generic or repetitive messages.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="px-0 py-3">
                <div className="d-flex gap-3">
                  <CheckCircle
                    size={20}
                    className="text-success flex-shrink-0 mt-1"
                  />

                  <div>
                    <strong>Write proper notes</strong>
                    <p className="text-muted mb-0 mt-1">
                      Make sure your notes accurately describe the important
                      information from the conversation.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Guidelines */}
        <Row className="g-4 mb-4">
          {/* Do */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <CheckCircle className="text-success" size={23} />
                  <h5 className="fw-bold mb-0">What You Should Do</h5>
                </div>

                <ListGroup variant="flush">
                  <ListGroup.Item className="px-0">
                    Be polite and respectful.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Read the client's message carefully.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Give meaningful responses.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Check your spelling before sending.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Write clear and useful notes.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Follow the instructions provided by supervisors.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Don't */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <XCircle className="text-danger" size={23} />
                  <h5 className="fw-bold mb-0">What You Should Avoid</h5>
                </div>

                <ListGroup variant="flush">
                  <ListGroup.Item className="px-0">
                    Do not send messages with obvious spelling mistakes.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Do not repeatedly send the same generic response.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Do not ignore important information from the client.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Do not leave important conversations without proper notes.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Do not share internal moderator information with clients.
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0">
                    Do not ignore supervisor instructions.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Notes Section */}
        <Card className="border-0 shadow-sm mb-4">
          <Card.Body className="p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 text-warning"
                style={{ width: "46px", height: "46px" }}
              >
                <PencilSquare size={21} />
              </div>

              <div>
                <h5 className="fw-bold mb-1">Moderator Notes</h5>
                <p className="text-muted mb-0">
                  Notes help supervisors understand the conversation.
                </p>
              </div>
            </div>

            <p className="text-muted mb-0">
              After an important conversation, make sure your note contains
              the relevant information clearly and accurately. Avoid writing
              unnecessary information or personal opinions.
            </p>
          </Card.Body>
        </Card>

        {/* Supervisor Notice */}
        <Alert variant="info" className="border-0 shadow-sm">
          <div className="d-flex gap-3">
            <InfoCircle size={24} className="flex-shrink-0 mt-1" />

            <div>
              <h6 className="fw-bold">Supervisor Review</h6>

              <p className="mb-0">
                Your messages and notes may be reviewed by supervisors.
                Please make sure every interaction follows the platform's
                guidelines and maintains a professional standard.
              </p>
            </div>
          </div>
        </Alert>

        {/* Footer */}
        <div className="text-center text-muted mt-4 pb-3">
          <ShieldCheck size={17} className="me-2" />
          <small>
            Thank you for being part of the moderation team.
          </small>
        </div>
      </Container>
    </div>
  );
};

export default ModeratorHome;