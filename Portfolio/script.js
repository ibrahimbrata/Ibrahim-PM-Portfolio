function redirectToEmail() {
  const emailBody = "Hi! I'm interested with your portfolio, can you send me your Resume?";
  const encodedEmailBody = encodeURIComponent(emailBody);
  const emailSubject = 'Request for Resume';
  const emailAddress = 'ibrahimbrata.mib@gmail.com';
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${encodedEmailBody}`;
  window.location.href = mailtoLink;
}
