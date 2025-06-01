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

// Send OTP (Mock Twilio API)
sendOtpBtn.addEventListener("click", () => {
  const countryCode = countryCodeSelect.value;
  const phoneNumber = phoneNumberInput.value;
  
  if (!phoneNumber) {
    alert("Please enter a phone number.");
    return;
  }
  
  const fullNumber = countryCode + phoneNumber;
  console.log("OTP sent to:", fullNumber); // Replace with Twilio API call
  
  // Hide Send OTP, Show OTP Section
  sendOtpBtn.style.display = "none";
  otpSection.style.display = "block";
});

// Verify OTP (Mock Twilio API)
verifyOtpBtn.addEventListener("click", () => {
  const otp = otpInput.value;
  
  if (!otp) {
    alert("Please enter the OTP.");
    return;
  }
  
  console.log("Verifying OTP:", otp); // Replace with Twilio API call
  
  alert("Login successful! Redirecting...");
  loginModal.style.display = "none";
  resetForm();
});

// Reset Form
function resetForm() {
  phoneNumberInput.value = "";
  otpInput.value = "";
  otpSection.style.display = "none";
  sendOtpBtn.style.display = "block";
}