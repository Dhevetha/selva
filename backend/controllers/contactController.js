const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Send notification email (don't let email failure block the response)
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${contact.name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Phone:</strong> ${contact.phone || "-"}</p>
        <p><strong>Email:</strong> ${contact.email || "-"}</p>
        <p><strong>Project Type:</strong> ${contact.projectType || "-"}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
      `,
    }).catch((emailErr) => {
      console.log("⚠️ Email notification failed:", emailErr.message);
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createContact,
};