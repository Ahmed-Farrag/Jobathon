import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "../Components/FormInput";

import { useState } from "react";
import { task } from "../Data/data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "../Components/List";

const HomePage = () => {
  const [data, setData] = useState(task);

  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...task]));
    setData([...task]);
    notify("Added successfully", "Success");
  };

  const deleteAllItems = () => {
    localStorage.removeItem("items");
    task.slice(0, task.length);
    setData([]);
    notify("Deleted successfully", "Success");
  };

  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("Task Deleted successfully", "Success");
  };

  // to push notification
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <div className="fs-3 text-center py-3">Task App</div>
        <Row className="justify-content-center">
          <Col sm="12">
            <FormInput onAdd={addItem} notify={notify} />
            <List data={data} deleteOneItem={deleteOneItem} />
            {data.length >= 1 ? (
              <Button
                onClick={deleteAllItems}
                variant="danger"
                className="w-100 my-3"
              >
                Delete all
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
