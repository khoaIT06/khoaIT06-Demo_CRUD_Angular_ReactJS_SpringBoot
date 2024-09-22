import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/customers/getById/${id}`)
        .then(response => {
          const customer = response.data;
          setValue('name', customer.name);
          setValue('phone', customer.phone);
          setValue('birthDay', new Date(customer.birthday).toISOString().split('T')[0]);
          setValue('address', customer.address);
          setValue('identificationNumber', customer.identificationnumber);
        })
        .catch(error => console.error('Error fetching customer:', error));
    }
  }, [id, setValue]);

  const onSubmit = (data) => {
    const customer = {
      ...data,
      birthday: data.birthDay,
      identificationnumber: data.identificationNumber
    };

    if (id) {
      axios.put(`http://localhost:8080/customers/update/${id}`, customer)
        .then(() => {
          toast.success('Customer updated successfully!');
          setTimeout(() => navigate('/'), 2000);
        })
        .catch(error => console.error('Error updating customer:', error));
    } else {
      axios.post('http://localhost:8080/customers/create', customer)
        .then(() => {
          toast.success('Customer created successfully!');
          setTimeout(() => navigate('/'), 2000);
        })
        .catch(error => console.error('Error creating customer:', error));
    }
  };

  return (
    <div className="container mt-5">
      <h2>{id ? 'Edit Customer' : 'New Customer'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            {...register('phone', { required: 'Phone is required' })}
          />
          {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="birthDay" className="form-label">Birth Date</label>
          <input
            type="date"
            className="form-control"
            id="birthDay"
            {...register('birthDay', { required: 'Birth Date is required' })}
          />
          {errors.birthDay && <span className="text-danger">{errors.birthDay.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && <span className="text-danger">{errors.address.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="identificationNumber" className="form-label">Identification Number</label>
          <input
            type="text"
            className="form-control"
            id="identificationNumber"
            {...register('identificationNumber', { required: 'Identification Number is required' })}
          />
          {errors.identificationNumber && <span className="text-danger">{errors.identificationNumber.message}</span>}
        </div>

        <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success me-2">Save</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CustomerForm;
