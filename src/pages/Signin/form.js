import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function FormSignin({
  form,
  handleInput,
  handleSubmit,
  loading,
}) {
  return (
    <>
      <form action="" class="form-login d-flex flex-column mt-4 mt-md-0 p-30">
        <div class="d-flex flex-column align-items-start">
          <Input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            label="Email"
            onChange={handleInput}
          />
        </div>
        <div class="d-flex flex-column align-items-start">
          <Input
            type="password"
            name="password"
            placeholder="Your Password"
            label="Password"
            value={form.password}
            onChange={handleInput}
          />
        </div>
        <div class="d-grid mt-2 gap-4">
          <Button
            onClick={handleSubmit}
            className="btn-green"
            loading={loading}
            disabled={loading}
            children="Sign In"
          />
          <Link to="/signup" className="btn-navy">
            Create New Account
          </Link>
        </div>
      </form>
    </>
  );
}
