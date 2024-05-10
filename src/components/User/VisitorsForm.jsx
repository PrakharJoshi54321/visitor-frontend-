import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const VisitorsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    state: '',
    adharCardNo: '', // Added adharCard field
    photo: null,
    entryDate: '',
    entryTimeIn: '',
    entryTimeOut: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        setFormData({ ...formData, photo: file });
      } else {
        alert('Please select a JPG or PNG image file.');
        // Reset the input value to clear the selected file
        e.target.value = '';
      }
    }
  };

  const handleAdharCardChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        setFormData({ ...formData, adharCard: file }); // Update adharCard field
      } else {
        alert('Please select a JPG or PNG image file for Aadhar card.');
        // Reset the input value to clear the selected file
        e.target.value = '';
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const entryDate = currentDate.toLocaleDateString();
    const entryTimeIn = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const entryTimeOut = ''; // You can modify this to capture the time out if needed
    const updatedFormData = { ...formData, entryDate, entryTimeIn, entryTimeOut };
    console.log(updatedFormData);
    // Process form data here, e.g., send it to a server or perform validation
    // Reset form after submission
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      mobileNumber: '',
      city: '',
      state: '',
      adharCardNo: '',
      photo: null,
      entryDate: '',
      entryTimeIn: '',
      entryTimeOut: '',
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant=""
          color="gray"
          className="mb-4 grid h-20 place-items-center"
        >
          <Typography variant="h3" color="white">
            Visitor Form
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
  {/* Input fields */}


          
          <Input
            label="Name"
            size="lg"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            label="Mobile Number"
            size="lg"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            type='number'
            maxLength={10}
          />
          <Input
            label="City"
            size="lg"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <Input
            label="State"
            size="lg"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          <Input
            label="Adhar Card Number"
            size="lg"
            name="adharCardNo"
            color="black"
            value={formData.adharCard}
            onChange={handleInputChange}
            type="string"
          />
          <div className="-ml-2.5">
            <Input
              type="file"
              label="Upload Photo"
              size="lg"
              accept=".jpg, .jpeg, .png"
              onChange={handlePhotoChange}
            />
          </div>
          {/* Aadhar Card Upload */}
          <div className="-ml-2.5">
            <Input
              type="file"
              label="Upload Aadhar Card"
              size="lg"
              accept=".jpg, .jpeg, .png"
              onChange={handleAdharCardChange}
              
            />
            </div>
             <Input
            label="Date of Entry"
            size="lg"
            type="date"
            name="entryDate"
            value={formData.entryDate}
            onChange={handleInputChange}
          />
             <Input
            label="In Time"
            size="lg"
            name="entryTime"
            value={formData.InTime}
            onChange={handleInputChange}
            type="time"
          />
          <Input
            label="  Out Time"
            size="lg"
            name="entryTime"
            value={formData.OutTime}
            onChange={handleInputChange}
            type="time"
          />
          
        
         
    
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSubmit}>
            Register
          </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default VisitorsForm;
