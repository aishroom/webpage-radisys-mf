// Form/index.js
import React, { useState } from 'react';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomForm } from './styles'; // Import the styled component

const Form = () => {
  const [services, setServices] = useState([{ id: 1 }]);

  const addService = () => {
    if (services.length < 3) {
      const newServiceId = services[services.length - 1].id + 1;
      setServices([...services, { id: newServiceId }]);
    }
  };

  return (
    <CustomForm>
       <BootstrapForm className="m-5" style={{ 
  width: '500px',
  padding: '20px',
  border: '1px solid #e3e3e3',
  borderRadius: '10px' 
}}>
      <BootstrapForm.Group className="mb-3" controlId="formWebTitle">
        <BootstrapForm.Label>Web Title</BootstrapForm.Label>
        <BootstrapForm.Control type="text" placeholder="Enter web title" required />
      </BootstrapForm.Group>

      <BootstrapForm.Group className="mb-3" controlId="formWebDescription">
        <BootstrapForm.Label>Web Description</BootstrapForm.Label>
        <BootstrapForm.Control as="textarea" rows={3} placeholder="Enter web description" required />
      </BootstrapForm.Group>

      {services.map((service) => (
        <div key={service.id}>
          <BootstrapForm.Group className="mb-3" controlId={`formServiceTitle-${service.id}`}>
            <BootstrapForm.Label>Service Title</BootstrapForm.Label>
            <BootstrapForm.Control type="text" placeholder="Enter service title" required />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3" controlId={`formServiceDescription-${service.id}`}>
            <BootstrapForm.Label>Service Description</BootstrapForm.Label>
            <BootstrapForm.Control as="textarea" rows={3} placeholder="Enter service description" required />
          </BootstrapForm.Group>
        </div>
      ))}
      {services.length < 3 && (
        <Button variant="primary" onClick={addService}>
          Add Service
        </Button>
      )}
      <Button className="ms-3" variant="primary" type="submit">
        Submit
      </Button>
    </BootstrapForm>
    </CustomForm>
   
  );
};

export default Form;
