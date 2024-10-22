import { useState } from "react";
import "./CarRentalForm.css";
import React from "react";

function CarRentalForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    collectionDate: "",
    returnDate: "",
    specialRequests: "",
    creditCardType: "",
    creditCard: "",
    creditCardExpiryMonth: "",
    creditCardExpiryYear: "",
  });

  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  function isMobilePhoneValid(phone) {
    return /^\d{10}$/.test(phone);
  }

  function isEmailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isCreditCardValid(card) {
    return /^\d{16}$/.test(card);}
  function handleSubmit(event) {
    event.preventDefault();

    // Validation logic
    if (
      formData.firstName.length >= 2 &&
      formData.firstName.length <= 15 &&
      formData.lastName.length >= 2 &&
      formData.lastName.length <= 15 &&
      isMobilePhoneValid(formData.mobilePhone) &&
      isEmailValid(formData.email) &&
      isCreditCardValid(formData.creditCard)
    ) {
        localStorage.setItem("carRentalFormData", JSON.stringify(formData));
    } else {
      alert("Form validation failed");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="row">
      <label htmlFor={id + "-firstName"}>First Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        id={id + "-firstName"}
      />
      <label htmlFor={id + "-lastName"}>Last Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        id={id + "-lastName"}
      /></div>              <div className="row">

      <label htmlFor={id + "-mobilePhone"}>Mobile Phone</label>
      <input
        type="text"
        onChange={handleChange}
        name="mobilePhone"
        value={formData.mobilePhone}
        id={id + "-mobilePhone"}
      />

      <label htmlFor={id + "-email"}>Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        id={id + "-email"}
      /></div>               <div className="row">

      <label htmlFor={id + "-collectionDate"}>Collection Date</label>
      <input
        type="date"
        onChange={handleChange}
        name="collectionDate"
        value={formData.collectionDate}
        id={id + "-collectionDate"}
      />
      <label htmlFor={id + "-returnDate"}>Return Date</label>
      <input
        type="date"
        onChange={handleChange}
        name="returnDate"
        value={formData.returnDate}
        id={id + "-returnDate"}
      /></div> 
              <div className="row">

      <label htmlFor={id + "-specialRequests"}>Special Requests</label>
      <textarea
        value={formData.specialRequests}
        onChange={handleChange}
        name="specialRequests"
        id={id + "-specialRequests"}
      /></div>               <div className="row">

      <label htmlFor={id + "-creditCardType"}>Credit Card Type</label>
      <select
        id={id + "-creditCardType"}
        value={formData.creditCardType}
        onChange={handleChange}
        name="creditCardType"
      >
        <option value="VISA">VISA</option>
        <option value="MASRERCARD">MASRERCARD</option>
        <option value="Diners Club">Diners Club</option>
      </select>

      <label htmlFor={id + "-creditCard"}>Credit Card</label>
      <input
        type="text"
        onChange={handleChange}
        name="creditCard"
        value={formData.creditCard}
        id={id + "-creditCard"}
      /></div>               <div className="row">

      <label htmlFor={id + "-creditCardExpiryMonth"}>
        Credit Card Expiry Month
      </label>
      <select
        id={id + "-creditCardExpiryMonth"}
        value={formData.creditCardExpiryMonth}
        onChange={handleChange}
        name="creditCardExpiryMonth"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>{" "}
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>

      </select>

      <label htmlFor={id + "-creditCardExpiryYear"}>
        Credit Card Expiry Year
        </label>
      <select
        id={id + "-creditCardExpiryYear"}
        value={formData.creditCardExpiryYear}
        onChange={handleChange}
        name="creditCardExpiryYear"
      >
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>

      </div> 
      <button>Submit</button>
    </form>
  );
}

export default CarRentalForm;
