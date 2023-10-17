import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { task } from "../Data/data";

const FormInput = ({ onAdd, notify, onEdit }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("Please complete the information", "Error");
      return;
    }

    if (editIndex === -1) {
      task.push({ id: Math.random(), q: qu, a: an });
    } else {
      task[editIndex].q = qu;
      task[editIndex].a = an;
      setEditIndex(-1);
    }

    setQu("");
    setAn("");
    onAdd();
    console.log(task);
  };

  const editItem = (index) => {
    const item = task[index];
    setQu(item.q);
    setAn(item.a);
    setEditIndex(index);
  };

  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder="task description"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="status"
        />
      </Col>
      <Col sm="2">
        {editIndex === -1 ? (
          <Button
            onClick={addNewItem}
            className="w-100"
            variant="primary"
            type="submit"
          >
            Add
          </Button>
        ) : (
          <Button
            onClick={addNewItem}
            className="w-100"
            variant="primary"
            type="submit"
          >
            Edit
          </Button>
        )}
      </Col>
      {editIndex !== -1 && (
        <Col sm="12" className="mt-2">
          <Button
            onClick={() => {
              setQu("");
              setAn("");
              setEditIndex(-1);
            }}
            className="w-100"
            variant="secondary"
          >
            Cancel modification
          </Button>
        </Col>
      )}
      <Col
        sm="12"
        className="mt-2"
        style={{ backgroundColor: "#E8E8E8", borderRadius: "20px" }}
      >
        <h5> Task And Status</h5>
        {task.map((item, index) => (
          <div key={item.id}>
            <span>{item.q}</span>
            <span> - </span>
            <span>{item.a}</span>
            <Button
              onClick={() => editItem(index)}
              className="m-2"
              variant="info"
              size="sm"
              disabled={editIndex !== -1}
            >
              Edit Task
            </Button>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default FormInput;
