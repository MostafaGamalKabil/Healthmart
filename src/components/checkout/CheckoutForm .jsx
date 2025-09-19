import React from "react";

// import './chekOut.css' // تأكد إنك بتحذف السطر ده لو بتستدعيه في MainCheckout

const CheckoutForm = () => {
  return (
    <div className="checkout-form-container">
      <h3>Billing details</h3>
      <div className="form-section">
        <form>
          <div className="form-row">
            {" "}
            {/* Div جديد عشان يجمع الـ first name والـ last name */}
            <div className="form-group">
              <label htmlFor="first-name">First name *</label>
              <input type="text" id="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last name *</label>
              <input type="text" id="last-name" required />
            </div>
          </div>

          {/* كل الـ inputs اللي تحت هتكون بعرض كامل */}
          <div className="form-group full-width">
            <label htmlFor="countries">Country / Region *</label>
            <input list="country" id="countries" required />
            <datalist id="country">
                <option value="Argentina"/>
                <option value="Brazil"/>
                <option value="Canada"/>
                <option value="Denmark"/>
                <option value="Egypt"/>
                <option value="France"/>
                <option value="Germany"/>
                <option value="Hungary"/>
                <option value="India"/>
            </datalist>
          </div>
          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              placeholder="House number and street name"
              required
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="state">State / County *</label>
            <input type="text" id="state" required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="zip">Postcode / ZIP *</label>
            <input type="text" id="zip" required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="email">Email address *</label>
            <input type="email" id="email" required />
          </div>
        </form>
      </div>

      <div className="full-width checkbox-group">
        <input type="checkbox" id="create-account" />
        <label htmlFor="create-account">Create an account?</label>
      </div>
      <div className="full-width checkbox-group">
        <input type="checkbox" id="create-account" />
        <label htmlFor="create-account">Ship to a different address?</label>
      </div>
      <div className="form-group full-width">
        <label id="notes" htmlFor="notes">Order notes (optional)</label>
        <textarea
          id="notes"
          // @ts-ignore
          rows="2"
          placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
      </div>
    </div>
  );
};

export default CheckoutForm;
