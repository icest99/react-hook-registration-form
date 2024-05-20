import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  interests: string[];
};

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName', { required: true })} />
        {errors.firstName && <p>First name is required</p>}
      </div>
      
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>Email is required and should be a valid email address</p>}
      </div>
      
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" {...register('username', { required: true })} />
        {errors.username && <p>Username is required</p>}
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password', { required: true })} />
        {errors.password && <p>Password is required</p>}
      </div>
      
      <div>
        <label>Interests</label>
        <div>
          <label>
            <input type="checkbox" value="React" {...register('interests')} /> React
          </label>
          <label>
            <input type="checkbox" value="Next.js" {...register('interests')} /> Next.js
          </label>
          <label>
            <input type="checkbox" value="Laravel" {...register('interests')} /> Laravel
          </label>
          <label>
            <input type="checkbox" value="GraphQL" {...register('interests')} /> GraphQL
          </label>
          <label>
            <input type="checkbox" value="Nest.js" {...register('interests')} /> Nest.js
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
