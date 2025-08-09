import React from "react";

const AmfiaSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Amfia Education",
    "description": "At Amfia Education, we believe every child deserves more than just marks — they deserve skills, confidence, and a future they can be proud of. Founded by Amir Kaifiya, an academic coach with years of experience training 300+ teachers and working with 100+ schools, we offer board exam preparation, English communication, competitive foundation, and life skills in one program.",
    "founder": {
      "@type": "Person",
      "name": "Amir Kaifiya"
    },
    "url": "https://www.amfiaeducation.com",
    "sameAs": [
      "https://www.instagram.com/amfiaeducation?igsh=MWE0ZjlmNm92aTVvdg==",
      "https://youtube.com/@amfiaeducation?si=pa7pZzWP_W4ct96R",
      "https://x.com/AmfiaLearn?t=anASmSG8rzSFerBxHcK8Rg&s=08"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default AmfiaSchema;
