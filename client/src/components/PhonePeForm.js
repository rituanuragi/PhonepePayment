import React, { useState } from "react";
import axios from "axios";
import './PhonePeForm.css'; // Import CSS file

const PhonePeForm = () => {
  const [form, setForm] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, amount) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/phonepe/payment", {
        data: {
          ...form,
          amount: amount,
        },
      })
      .then((response) => {
        window.location.href = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card-container"> 
        {/* First Card */}
        <div className="card form-container">
          <h1 className="title">Standard Lending Solutions</h1>
          <div className="info">
            <p className="price">₹1</p>
            <p className="paragraph">✓F2 Financial Advisory</p>
            <p className="paragraph">✓1 Free Live Session</p>
            <p className="paragraph">✓Get 15mins free call</p>
            <p className="paragraph">✓1st call for data gathering with our advisor</p>
            <p className="paragraph">✓2nd call with our qualified financial advisor for a plan</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e, 1)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div>
          </form>
        </div>
        
        {/* Second Card */}
        <div className="card form-container second-card">
          <h1 className="title">Supreme Strategy For Lenders</h1>
          <div className="info">
            <p className="price">₹639</p>
            <p className="paragraph">✓ For individuals looking for lending solutions</p>
            <p className="paragraph">✓ Eligibility Check Form Multiple Lenders</p>
            <p className="paragraph">✓ Persoalized Lending Solutions</p>
            <p className="paragraph">✓ 1 Free live sessions</p>
            <p className="paragraph">✓ One Year Relationship Management (RM) Support</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e, 639)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div> 
          </form>   
        </div>
        
        
        {/* Third Card */}
        <div className="card form-container second-card">
          <h1 className="title">Ultimate Financial Blueprint</h1>
          <div className="info">
            <p className="price1">₹1369</p>
            <p className="paragraph">✓ F2 Financial Advisory </p>
            <p className="paragraph">✓ Personalized Loan Solutions</p>
            <p className="paragraph">✓ Team Sheet For Easy Comparison</p>
            <p className="paragraph">✓ 1 Free live sessions</p>
            <p className="paragraph">✓ One Year Relationship Management (RM) Support</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e, 1369)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div> 
          </form>   
        </div>
      </div>
      <div className="card-container1"> 
        {/* First Card */}
        <div className="card form-container">
          <h1 className="title">Magnus Premier Portfolio</h1>
          <div className="info">
            <p className="price">₹3,369</p>
            <p className="paragraph">✓ Priority Access to Senior Financial Experts </p>
            <p className="paragraph">✓ Rapid Lending Processing</p>
            <p className="paragraph">✓ Regular financial consultations sessions</p>
            <p className="paragraph">✓ Lifetime F2 Membership</p>
           
          </div>
          <form onSubmit={(e) => handleSubmit(e, 1)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div>
          </form>
        </div>
        
        {/* Second Card */}
        <div className="card form-container second-card">
          <h1 className="title">Presidential Portfolio Plan </h1>
          <div className="info">
            <p className="price">5,369</p>
            <p className="paragraph">✓ Based Deals on Fees & Charges </p>
            <p className="paragraph">✓ Regular Financial Check-ups</p>
            <p className="paragraph">✓ Periodic reviews & Support</p>
            <p className="paragraph">✓ Priority Processing</p>
          
          </div>
          <form onSubmit={(e) => handleSubmit(e, 639)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div> 
          </form>   
        </div>
        <div className="card form-container second-card">
          <h1 className="title">Presidential Portfolio Plan </h1>
          <div className="info">
            <p className="price">5,369</p>
            <p className="paragraph">✓ Based Deals on Fees & Charges </p>
            <p className="paragraph">✓ Regular Financial Check-ups</p>
            <p className="paragraph">✓ Periodic reviews & Support</p>
            <p className="paragraph">✓ Priority Processing</p>
          
          </div>
          <form onSubmit={(e) => handleSubmit(e, 639)}>
            <div>
              <button type="submit" className="btn-get-started">Pay Now</button>
            </div> 
          </form>   
        </div>
        
 
      </div>
    </div>
    
  );
};

export default PhonePeForm;
