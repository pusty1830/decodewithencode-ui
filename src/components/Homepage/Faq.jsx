"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ data
const faqs = [
  {
    question: "What is the refund policy",
    answer:
      "Our LMS operates a strict no-refunds policy for all purchased paid courses. Once a course purchase is confirmed, payment cannot be refunded. This policy applies to all courses, irrespective of the price, duration or the learner progress within the course.",
  },
  {
    question: "I need to purchase a course. Whom should I contact?",
    answer:
      'You can purchase any course directly through our platform using the "Enroll Now" button on the course page. If you need assistance, please contact our support team through the help center or email us at support@example.com.',
  },
  {
    question:
      "I am not able to view my enrolled course. What to do/whom to contact?",
    answer:
      "If you are having trouble accessing your enrolled course, please first try clearing your browser cache and cookies. If the issue persists, contact our technical support team at technical.support@example.com with your enrollment details.",
  },
  {
    question: "What is an experience portal? How to use it?",
    answer:
      'The experience portal is your personalized learning dashboard where you can track your progress, access course materials, and interact with other learners. To use it, simply log in to your account and navigate to "My Learning Dashboard".',
  },
  {
    question: "How to get Placements and Job assistance?",
    answer:
      "We offer comprehensive placement and job assistance through our career services portal. This includes resume reviews, mock interviews, and access to our job board with exclusive opportunities from our partner companies.",
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#1a1a1a",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "#3cacae",
              "&:hover": {
                backgroundColor: "rgba(60, 172, 174, 0.08)",
              },
            }}
          >
            View all
          </Button>
        </Box>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              mb: 1,
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: "0 0 8px 0",
              },
              border: "1px solid #e0e0e0",
              borderRadius: "8px !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#3cacae",
                    transform:
                      expanded === `panel${index}` ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                />
              }
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "16px 0",
                },
                "&.Mui-expanded": {
                  borderBottom: "1px solid #e0e0e0",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 500,
                  color: "#1a1a1a",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "16px 24px",
                backgroundColor: "rgba(60, 172, 174, 0.02)",
              }}
            >
              <Typography
                sx={{
                  color: "#666666",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
