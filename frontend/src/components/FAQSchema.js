import React from "react";

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is AmfiaEducation trustworthy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AmfiaEducation is a trusted education company providing quality, future-ready classes to students. We have positive feedback from parents and schools."
        }
      },
      {
        "@type": "Question",
        "name": "Is AmfiaEducation fake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, AmfiaEducation is 100% genuine and registered. We have trained many students and worked with respected schools."
        }
      },
      {
        "@type": "Question",
        "name": "Is AmfiaEducation reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our classes are designed for real learning, and we have a strong record of results in English, Math, and technology skills."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose AmfiaEducation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer affordable online classes, experienced teachers, and modern learning content to prepare students for the future."
        }
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </script>
  );
};

export default FAQSchema;
