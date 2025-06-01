// DOM Elements
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const otpSection = document.getElementById("otpSection");
const phoneNumberInput = document.getElementById("phoneNumber");
const otpInput = document.getElementById("otpInput");
const countryCodeSelect = document.getElementById("countryCode");

// Open Modal
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Close Modal
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  resetForm();
});

// Send OTP (Using Twilio Verify API)
sendOtpBtn.addEventListener("click", async () => {
  const countryCode = countryCodeSelect.value;
  const phoneNumber = phoneNumberInput.value;
  
  if (!phoneNumber) {
    alert("Please enter a phone number.");
    return;
  }
  
  const fullNumber = countryCode + phoneNumber;
  
  try {
    // Replace with your Twilio Verify API call or backend endpoint
    const response = await fetch("https://bodymatchauth-4008.twil.io/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: fullNumber })
    });
    
    const data = await response.json();
    
    if (data.success) {
      sendOtpBtn.style.display = "none";
      otpSection.style.display = "block";
    } else {
      alert("Failed to send OTP. Please try again.");
    }
  } catch (error) {
    alert("Error sending OTP. Check console for details.");
    console.error(error);
  }
});

// Verify OTP (Using Twilio Verify API)
verifyOtpBtn.addEventListener("click", async () => {
  const countryCode = countryCodeSelect.value;
  const phoneNumber = phoneNumberInput.value;
  const fullNumber = countryCode + phoneNumber;
  const otp = otpInput.value;
  
  if (!otp) {
    alert("Please enter the OTP.");
    return;
  }
  
  try {
    // Replace with your Twilio Verify API call or backend endpoint
    const response = await fetch("https://bodymatchauth-4008.twil.io/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: fullNumber, otp })
    });
    
    const data = await response.json();
    
    if (data.success) {
      alert("Login successful! Redirecting...");
      loginModal.style.display = "none";
      resetForm();
    } else {
      alert("Invalid OTP. Please try again.");
    }
  } catch (error) {
    alert("Error verifying OTP. Check console for details.");
    console.error(error);
  }
});

// Reset Form
function resetForm() {
  phoneNumberInput.value = "";
  otpInput.value = "";
  otpSection.style.display = "none";
  sendOtpBtn.style.display = "block";
}