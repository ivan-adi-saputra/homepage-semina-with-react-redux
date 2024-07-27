import React from "react";
import Input from "../../components/Input";
import SButton from "../../components/Button";

export default function FormRegister({
  form,
  handleChange,
  handleSubmit,
  loading,
}) {
  return (
    <form action="" class="form-login d-flex flex-column mt-4 mt-md-0">
      {form.otp_status ? (
        <div class="d-flex flex-column align-items-start">
          <Input
            label="Kode Otp"
            name="otp"
            placeholder={"First name here"}
            value={form.name}
            type={"text"}
            onChange={handleChange}
          />
        </div>
      ) : (
        <>
          <div class="d-flex flex-column align-items-start">
            <Input
              label="First Name"
              name="firstName"
              placeholder={"First name here"}
              value={form.name}
              type={"text"}
              onChange={handleChange}
            />
          </div>
          <div class="d-flex flex-column align-items-start">
            <Input
              label="Last Name"
              name="lastName"
              placeholder={"Last name here"}
              value={form.name}
              type={"text"}
              onChange={handleChange}
            />
          </div>
          <div class="d-flex flex-column align-items-start">
            <Input
              label="Email"
              name="email"
              placeholder={"Your Email"}
              value={form.name}
              type={"email"}
              onChange={handleChange}
            />
          </div>
          <div class="d-flex flex-column align-items-start">
            <Input
              label="Password"
              name="password"
              placeholder={"Your Password"}
              value={form.name}
              type={"password"}
              onChange={handleChange}
            />
          </div>
          <div class="d-flex flex-column align-items-start">
            <Input
              label="Role"
              name="role"
              placeholder={"Your Role"}
              value={form.name}
              type={"text"}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      <div class="d-grid mt-2">
        <SButton
          children={"Sign Up"}
          className={"btn-green"}
          loading={loading}
          disabled={loading}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
