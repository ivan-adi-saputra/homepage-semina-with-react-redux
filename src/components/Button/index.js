import React from "react";
import { Button } from "react-bootstrap";

export default function SButton({
  loading,
  className,
  disabled,
  onClick,
  children,
}) {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      {loading ? "Loading..." : children}
    </Button>
  );
}
