import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { task } from "../Data/data";

const List = ({ data, deleteOneItem, onUpdateItem }) => {
  // Retrieve items from local storage
  const dataLocal = JSON.parse(localStorage.getItem("items"));

  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      // Find the index of the item to delete
      const index = task.findIndex((item) => item.id === ID);
      // Remove the item from the task
      task.splice(index, 1);
      // Call the deleteOneItem function with the updated task array
      deleteOneItem(task);
    }
  };

  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          // Render items from local storage
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header> {item.q}</Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline ">{item.a}</div>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    Delete Task
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          // Render a message when there are no items
          <h2 className="fs-4 text-center p-5"> There are no questions</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default List;
