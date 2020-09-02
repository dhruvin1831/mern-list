import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

class List extends Component {
  state = {
    items: [
      { id: uuid(), name: "Bath" },
      { id: uuid(), name: "123" },
      { id: uuid(), name: "123" },
      { id: uuid(), name: "123" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="success"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Name");
            if (name) {
              this.setState((state) => ({
                items: [...this.state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                        this.setState(state => ({
                            items: state.items.filter(item => item.id !== id)
                        }))
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default List;
