import React, { useState } from "react";
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../components/PageTitle";
import { FormInput, VerticalForm } from "../../components";

const NormalFormValidation = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Validation - Normal</h4>
          <p className="sub-header">
            Provide valuable, actionable feedback to your users with HTML5 form
            validation–available in all our supported browsers.
          </p>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Form inputs */}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const FormValidationWithTooltip = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Validation (Tooltips)</h4>
          <p className="sub-header">
            If your form layout allows it, you can swap the{" "}
            <code>.valid | invalid-feedback</code> classes for{" "}
            <code>.valid | invalid-tooltip</code> classes to display validation
            feedback in a styled tooltip.
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Form inputs */}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const BasicForm = () => {
  // Form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      // Validation rules
    })
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-1">Basic Form</h4>
        <p className="sub-header">
          React validation with react-hook-form library.
        </p>
        <VerticalForm onSubmit={() => {}} resolver={schemaResolver} defaultValues={{ username: "test" }}>
          {/* Form inputs */}
        </VerticalForm>
      </Card.Body>
    </Card>
  );
};

const HorizontalForm = () => {
  // Form validation schema
  const schemaResolver2 = yupResolver(
    yup.object().shape({
      // Validation rules
    })
  );

  const methods = useForm({
    defaultValues: { email2: "shreyu@coderthemes.com" },
    resolver: schemaResolver2,
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-1">Horizontal Form</h4>
        <p className="sub-header">
          React validation with react-hook-form library.
        </p>
        <form name="chat-form" id="chat-form" onSubmit={handleSubmit(() => {})}>
          {/* Form inputs */}
        </form>
      </Card.Body>
    </Card>
  );
};

const FormValidation = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/forms/validation" },
          { label: "Validation", path: "/forms/validation", active: true },
        ]}
        title={"Validation"}
      />

      <Row>
        <Col lg={6}>
          <NormalFormValidation />
        </Col>

        <Col lg={6}>
          <FormValidationWithTooltip />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BasicForm />
        </Col>
        <Col lg={6}>
          <HorizontalForm />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormValidation;
