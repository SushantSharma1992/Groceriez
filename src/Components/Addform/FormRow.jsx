import React from "react";

export default function FormRow({ label, input }) {
  return (
    <div className="form_row">
      <div>
        <label>{label}</label>
      </div>
      <div className="center">
        {input}
      </div>
    </div>
  );
}
