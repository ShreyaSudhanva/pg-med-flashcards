const subjects = [
  {
    id: "anatomy",
    name: "Anatomy",
    group: "Pre-clinical",
    summary: "Gross anatomy, embryology, neuroanatomy, histology, and applied anatomy.",
    topics: ["Upper limb", "Lower limb", "Thorax", "Abdomen", "Pelvis", "Head and neck", "Neuroanatomy", "Embryology"],
  },
  {
    id: "physiology",
    name: "Physiology",
    group: "Pre-clinical",
    summary: "Systems physiology, cellular physiology, nerve-muscle, blood, endocrine, and reproduction.",
    topics: ["General physiology", "Blood", "Nerve-muscle", "Cardiovascular", "Respiratory", "Renal", "GIT", "Endocrine", "CNS"],
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    group: "Pre-clinical",
    summary: "Metabolism, molecular biology, vitamins, enzymes, genetics, and nutrition.",
    topics: ["Carbohydrates", "Lipids", "Proteins", "Vitamins", "Enzymes", "Molecular biology", "Genetics", "Nutrition"],
  },
  {
    id: "pathology",
    name: "Pathology",
    group: "Para-clinical",
    summary: "General pathology, hematology, systemic pathology, neoplasia, and immunopathology.",
    topics: ["Cell injury", "Inflammation", "Hemodynamics", "Neoplasia", "Hematology", "Immunopathology", "Systemic pathology"],
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    group: "Para-clinical",
    summary: "General pharmacology, autonomic, CNS, CVS, antimicrobials, chemotherapy, and toxicology.",
    topics: ["Pharmacokinetics", "ANS", "CNS drugs", "CVS drugs", "Antimicrobials", "Endocrine drugs", "Autacoids", "Toxicology"],
  },
  {
    id: "microbiology",
    name: "Microbiology",
    group: "Para-clinical",
    summary: "Bacteriology, virology, mycology, parasitology, immunology, and infection control.",
    topics: ["General microbiology", "Immunology", "Bacteriology", "Virology", "Mycology", "Parasitology", "Sterilization"],
  },
  {
    id: "forensic",
    name: "Forensic Medicine",
    group: "Para-clinical",
    summary: "Legal medicine, toxicology, identification, injury, asphyxia, sexual offences, and ethics.",
    topics: ["Legal procedure", "Identification", "Injuries", "Asphyxia", "Toxicology", "Sexual offences", "Medical ethics"],
  },
  {
    id: "psm",
    name: "Community Medicine",
    group: "Para-clinical",
    summary: "Epidemiology, biostatistics, screening, national programs, environment, nutrition, and demography.",
    topics: ["Epidemiology", "Biostatistics", "Screening", "Communicable diseases", "National programs", "Environment", "Nutrition"],
  },
  {
    id: "medicine",
    name: "General Medicine",
    group: "Clinical",
    summary: "Internal medicine with integrated dermatology, psychiatry, emergency, and systemic medicine.",
    topics: ["Cardiology", "Neurology", "Pulmonology", "Nephrology", "Gastroenterology", "Endocrinology", "Rheumatology", "Infectious diseases"],
  },
  {
    id: "surgery",
    name: "General Surgery",
    group: "Clinical",
    summary: "General surgery, trauma, GI surgery, urology, neurosurgery basics, burns, and perioperative care.",
    topics: ["Shock", "Wounds", "Trauma", "Burns", "GI surgery", "Urology", "Breast", "Thyroid", "Vascular"],
  },
  {
    id: "obg",
    name: "Obstetrics and Gynaecology",
    group: "Clinical",
    summary: "Pregnancy, labor, puerperium, gynecologic disorders, oncology, contraception, and infertility.",
    topics: ["Antenatal care", "Labor", "Obstetric emergencies", "Puerperium", "Menstrual disorders", "Gyn oncology", "Infertility", "Contraception"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    group: "Clinical",
    summary: "Neonatology, growth, development, nutrition, infections, immunization, and pediatric emergencies.",
    topics: ["Neonatology", "Growth", "Development", "Nutrition", "Immunization", "Pediatric infections", "Emergency pediatrics"],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    group: "Clinical",
    summary: "Optics, cornea, lens, glaucoma, retina, uvea, neuro-ophthalmology, and ocular trauma.",
    topics: ["Optics", "Conjunctiva", "Cornea", "Lens", "Glaucoma", "Retina", "Uvea", "Neuro-ophthalmology"],
  },
  {
    id: "ent",
    name: "ENT",
    group: "Clinical",
    summary: "Ear, nose, throat, larynx, head-neck infections, tumors, and emergencies.",
    topics: ["Ear", "Audiology", "Nose", "Paranasal sinuses", "Pharynx", "Larynx", "Head and neck"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    group: "Clinical",
    summary: "Fractures, dislocations, bone infections, tumors, spine, pediatric orthopedics, and arthritis.",
    topics: ["Fractures", "Dislocations", "Bone infections", "Bone tumors", "Spine", "Pediatric orthopedics", "Arthritis"],
  },
  {
    id: "anaesthesia",
    name: "Anaesthesia",
    group: "Clinical",
    summary: "Airway, anesthetic agents, regional blocks, monitoring, pain, CPR, and critical care basics.",
    topics: ["Airway", "General anesthesia", "Regional anesthesia", "Monitoring", "Pain", "CPR", "ICU basics"],
  },
  {
    id: "radiology",
    name: "Radiodiagnosis and Radiotherapy",
    group: "Clinical",
    summary: "Imaging physics, X-ray signs, CT/MRI, ultrasound, contrast, nuclear medicine, and oncology basics.",
    topics: ["Imaging physics", "Chest X-ray", "Abdominal imaging", "Neuroimaging", "Ultrasound", "Contrast", "Radiotherapy"],
  },
  {
    id: "dermatology",
    name: "Dermatology, Venereology and Leprosy",
    group: "Clinical",
    summary: "Lesion morphology, infections, inflammatory dermatoses, pigmentary disorders, STIs, and leprosy.",
    topics: ["Primary lesions", "Bacterial infections", "Fungal infections", "Eczema", "Psoriasis", "STIs", "Leprosy"],
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    group: "Clinical",
    summary: "Psychopathology, mood, psychosis, anxiety, substance use, child psychiatry, and psychopharmacology.",
    topics: ["Psychopathology", "Mood disorders", "Schizophrenia", "Anxiety", "Substance use", "Child psychiatry", "Psychopharmacology"],
  },
];

const subjectReferenceMap = {
  anatomy: {
    books: ["BD Chaurasia"],
    topics: [
      "Upper limb nerves, plexus, vessels, spaces, and fractures",
      "Lower limb gluteal region, femoral triangle, adductor canal, gait, and nerve lesions",
      "Thorax mediastinum, heart, lung segments, pleura, and diaphragm",
      "Abdomen peritoneum, hernias, stomach, liver, pancreas, spleen, gut rotation, and portal system",
      "Pelvis perineum, pelvic diaphragm, ureter, bladder, uterus, prostate, and pudendal canal",
      "Head and neck cranial nerves, triangles, parotid, orbit, cavernous sinus, pharyngeal arches",
      "Neuroanatomy tracts, brainstem, cerebellum, basal ganglia, ventricles, and blood supply",
      "Embryology derivatives, congenital anomalies, placentation, and high-yield timelines",
      "Histology of epithelium, cartilage, bone, muscle, vessels, lymphoid organs, GIT, liver, kidney",
      "Imaging anatomy and surface anatomy frequently tested in clinical vignettes",
    ],
  },
  physiology: {
    books: ["GK Pal", "Guyton"],
    topics: [
      "Cell membrane transport, action potentials, synapse, and skeletal muscle contraction",
      "Blood indices, anemia physiology, hemostasis, blood groups, and immunity basics",
      "Cardiac cycle, ECG, pressure-volume loop, murmurs physiology, cardiac output, shock",
      "Respiratory mechanics, compliance, V/Q mismatch, gas transport, hypoxia, and acid-base",
      "Renal clearance, countercurrent mechanism, RAAS, micturition, and tubular disorders",
      "GIT motility, secretions, digestion, absorption, liver functions, and GI hormones",
      "Endocrine feedback axes, diabetes physiology, calcium balance, growth, and reproduction",
      "CNS pathways, reflexes, pain, posture, sleep, EEG, higher functions, and special senses",
      "Exercise, temperature regulation, pregnancy-lactation physiology, and aging",
      "Graphs and numericals: spirometry, renal clearance, pressure curves, and endocrine tests",
    ],
  },
  biochemistry: {
    books: ["Satyanarayan"],
    topics: [
      "Carbohydrate metabolism, glycolysis, TCA, HMP shunt, glycogen disorders, and diabetes biochemistry",
      "Lipid metabolism, beta oxidation, ketone bodies, cholesterol, lipoproteins, and fatty acid synthesis",
      "Amino acid metabolism, urea cycle, one-carbon metabolism, porphyrias, and inborn errors",
      "Nucleic acids, purine-pyrimidine metabolism, DNA replication, repair, transcription, translation",
      "Enzyme kinetics, inhibitors, clinical enzymes, isoenzymes, and diagnostic interpretation",
      "Vitamins and minerals: deficiency syndromes, coenzymes, toxicity, and lab correlations",
      "Molecular biology tools: PCR, blotting, sequencing, recombinant DNA, and gene therapy basics",
      "Genetics, inheritance patterns, mutations, population genetics, and cytogenetics",
      "Nutrition, protein-energy malnutrition, obesity, dietary reference values, and antioxidants",
      "Integrated metabolism in starvation, fed state, exercise, liver disease, and endocrine disease",
    ],
  },
  pathology: {
    books: ["Robbins", "Harsh Mohan"],
    topics: [
      "Cell injury, necrosis, apoptosis, autophagy, adaptations, pigments, and calcification",
      "Inflammation, mediators, wound healing, granulomas, amyloidosis, and repair",
      "Hemodynamics, edema, thrombosis, embolism, infarction, shock, and DIC",
      "Immunopathology, hypersensitivity, autoimmune disease, transplant rejection, and immunodeficiency",
      "Neoplasia basics, oncogenes, tumor suppressors, carcinogenesis, grading, staging, and markers",
      "Hematology: anemia, leukemias, lymphomas, plasma cell disorders, bleeding disorders",
      "Cardiovascular pathology, vasculitis, atherosclerosis, MI, rheumatic fever, and cardiomyopathy",
      "Respiratory, renal, liver, GIT, endocrine, breast, female genital, CNS, bone, and skin pathology",
      "High-yield morphology-image associations and named bodies or inclusions",
      "Lab interpretation: CBC patterns, coagulation tests, tumor markers, and renal/liver panels",
    ],
  },
  pharmacology: {
    books: ["KD Tripathi"],
    topics: [
      "Pharmacokinetics, pharmacodynamics, receptors, dose-response curves, and adverse drug reactions",
      "Autonomic drugs: cholinergic, anticholinergic, adrenergic, blockers, and clinical toxicology",
      "CNS drugs: anesthetics, sedatives, antiepileptics, antipsychotics, antidepressants, opioids",
      "CVS drugs: antihypertensives, antianginals, heart failure, antiarrhythmics, diuretics, anticoagulants",
      "Autacoids, NSAIDs, antiallergics, respiratory pharmacology, and GI pharmacology",
      "Antimicrobials by class, resistance, spectrum, adverse effects, pregnancy safety, and prophylaxis",
      "Antitubercular, antileprosy, antimalarial, antiviral, antifungal, and antihelminthic drugs",
      "Endocrine drugs, diabetes therapy, thyroid drugs, steroids, sex hormones, and osteoporosis drugs",
      "Anticancer drugs, immunosuppressants, biologics, and targeted therapies",
      "Toxicology antidotes, drug interactions, therapeutic drug monitoring, and rational prescribing",
    ],
  },
  microbiology: {
    books: ["Apurva Shastri"],
    topics: [
      "Sterilization, disinfection, culture methods, microscopy, staining, and lab diagnosis algorithms",
      "Immunology: innate/adaptive immunity, hypersensitivity, complement, vaccines, and serology",
      "Gram-positive cocci and bacilli, toxins, culture traits, virulence, and treatment clues",
      "Gram-negative cocci and bacilli, enteric pathogens, non-fermenters, and zoonoses",
      "Mycobacteria, spirochetes, rickettsiae, chlamydia, mycoplasma, and atypical organisms",
      "Virology: DNA/RNA viruses, hepatitis, HIV, respiratory viruses, arboviruses, and oncogenic viruses",
      "Mycology: superficial, subcutaneous, systemic, and opportunistic fungal infections",
      "Parasitology: protozoa, helminths, vectors, life cycles, diagnostic stages, and treatment",
      "Hospital infection control, biomedical waste, antimicrobial resistance, and outbreak investigation",
      "Syndromic diagnosis: meningitis, pneumonia, diarrhea, UTI, STI, fever with rash, and sepsis",
    ],
  },
  forensic: {
    books: ["Narayan Reddy"],
    topics: [
      "Legal procedure, courts, evidence, dying declaration, negligence, consent, and documentation",
      "Identification, age estimation, sex determination, scars, tattoos, DNA, and forensic odontology",
      "Thanatology: death signs, postmortem changes, rigor, lividity, cooling, and time since death",
      "Mechanical injuries, weapons, wound age, fracture patterns, and medicolegal interpretation",
      "Asphyxial deaths: hanging, strangulation, drowning, smothering, choking, and traumatic asphyxia",
      "Thermal, electrical, radiation, starvation, and environmental injury patterns",
      "Sexual offences, pregnancy, delivery, abortion, infanticide, and POCSO-related exam points",
      "Toxicology: corrosives, pesticides, alcohol, opioids, sedatives, metals, plant poisons, and antidotes",
      "Forensic psychiatry, professional ethics, organ transplantation, and biomedical law basics",
      "Autopsy procedure, viscera preservation, chain of custody, and report-writing essentials",
    ],
  },
  psm: {
    books: ["Park's"],
    topics: [
      "Epidemiology measures, study designs, bias, confounding, causation, and outbreak investigation",
      "Biostatistics: sampling, tests of significance, confidence intervals, correlation, regression",
      "Screening, diagnostic test performance, ROC curve, surveillance, and disease control levels",
      "Communicable diseases: epidemiology, prevention, vaccines, chemoprophylaxis, and programs",
      "Noncommunicable diseases: risk factors, screening programs, prevention, and lifestyle medicine",
      "National health programs, health missions, indicators, health planning, and health management",
      "Maternal-child health, contraception, adolescent health, geriatrics, and reproductive health",
      "Nutrition, PEM, micronutrients, food hygiene, and nutritional assessment",
      "Environment, water, sanitation, air pollution, occupational health, and waste management",
      "Demography, health education, sociology, international health, and recent public health initiatives",
    ],
  },
  medicine: {
    books: ["Davidson", "Harrison"],
    topics: [
      "Cardiology: ACS, heart failure, arrhythmias, valvular disease, hypertension, and infective endocarditis",
      "Pulmonology: asthma, COPD, pneumonia, TB, ILD, PE, pleural disease, and respiratory failure",
      "Neurology: stroke, seizures, headache, movement disorders, neuropathy, myopathy, dementia, and coma",
      "Nephrology: AKI, CKD, glomerular syndromes, electrolytes, acid-base, dialysis, and transplant basics",
      "Gastroenterology-hepatology: GI bleed, IBD, malabsorption, hepatitis, cirrhosis, pancreatitis",
      "Endocrinology: diabetes, thyroid, adrenal, pituitary, calcium-bone disorders, and emergencies",
      "Infectious disease: fever approach, sepsis, HIV, malaria, dengue, leptospirosis, and antimicrobial strategy",
      "Rheumatology-immunology: arthritis patterns, SLE, vasculitis, spondyloarthropathy, and gout",
      "Hematology-oncology: anemia, leukemia, lymphoma, myeloma, coagulation, and oncologic emergencies",
      "Emergency medicine: poisoning, shock, anaphylaxis, altered sensorium, and critical care basics",
    ],
  },
  surgery: {
    books: ["SRB"],
    topics: [
      "Shock, fluids, blood transfusion, wound healing, sutures, surgical infections, and antibiotics",
      "Trauma: ATLS approach, head, chest, abdomen, vascular, burns, and compartment syndromes",
      "GI surgery: esophagus, stomach, small bowel, appendix, colorectal, peritonitis, and obstruction",
      "Hepatobiliary-pancreatic surgery: gallstones, jaundice, pancreatitis, liver abscess, and tumors",
      "Hernias, abdominal wall, acute abdomen, stomas, and postoperative complications",
      "Breast: benign disease, carcinoma staging, lymphatics, surgery, and screening",
      "Endocrine surgery: thyroid, parathyroid, adrenal, MEN syndromes, and neck swellings",
      "Urology: stones, BPH, prostate cancer, testicular disease, hematuria, and urinary obstruction",
      "Vascular surgery: ischemia, aneurysm, varicose veins, DVT, ulcers, and amputations",
      "Plastic, pediatric, neurosurgery, and transplant basics commonly tested in PG entrances",
    ],
  },
  obg: {
    books: ["DC Dutta"],
    topics: [
      "Antenatal care, physiological changes, fetal growth, placenta, screening, and high-risk pregnancy",
      "Normal labor, partograph, induction, augmentation, analgesia, and active third-stage management",
      "Obstetric emergencies: PPH, eclampsia, obstructed labor, rupture uterus, cord prolapse, shoulder dystocia",
      "Medical disorders in pregnancy: anemia, hypertension, diabetes, heart disease, thyroid, infections",
      "Operative obstetrics: cesarean, instrumental delivery, episiotomy, and obstetric anesthesia basics",
      "Puerperium, lactation, contraception, abortion, ectopic pregnancy, and trophoblastic disease",
      "Menstrual disorders, amenorrhea, AUB, dysmenorrhea, endometriosis, fibroid, and adenomyosis",
      "Infertility, PCOS, menopause, pelvic organ prolapse, urinary incontinence, and genital tract infections",
      "Gynecologic oncology: cervix, endometrium, ovary, vulva, vagina, screening, staging, and treatment principles",
      "Reproductive endocrinology, contraception methods, emergency contraception, and sterilization",
    ],
  },
  pediatrics: {
    books: ["Ghai"],
    topics: [
      "Neonatology: resuscitation, prematurity, RDS, jaundice, sepsis, hypoglycemia, and congenital anomalies",
      "Growth and development milestones, developmental delay, adolescent health, and behavioral pediatrics",
      "Nutrition: breastfeeding, complementary feeding, PEM, obesity, vitamins, and micronutrient deficiencies",
      "Immunization schedule, contraindications, adverse events, and vaccine-preventable diseases",
      "Pediatric infections: pneumonia, diarrhea, meningitis, TB, sepsis, rash fevers, and parasitic disease",
      "Cardiology: congenital heart disease, cyanotic spells, rheumatic fever, and heart failure",
      "Respiratory, nephrology, GI, liver, endocrine, neurology, hematology, and oncology pediatric patterns",
      "Genetics, metabolic disorders, dysmorphology, and common syndromes",
      "Pediatric emergencies: shock, dehydration, seizures, poisoning, trauma, and respiratory distress",
      "Drug doses, fluid therapy, anthropometry charts, and pediatric procedure basics",
    ],
  },
  ophthalmology: {
    books: ["Parsons"],
    topics: [
      "Optics, refraction errors, retinoscopy, lenses, accommodation, and visual acuity testing",
      "Conjunctiva, cornea, sclera, uvea, dry eye, keratitis, uveitis, and red-eye differentials",
      "Lens and cataract: types, complications, surgery, IOLs, and postoperative issues",
      "Glaucoma: open-angle, angle-closure, congenital, secondary, visual fields, and drugs",
      "Retina: diabetic retinopathy, hypertensive retinopathy, vascular occlusion, detachment, ARMD",
      "Neuro-ophthalmology: optic neuritis, papilledema, visual pathways, pupils, and ocular motility",
      "Orbit, lacrimal apparatus, lids, strabismus, amblyopia, and pediatric ophthalmology",
      "Ocular trauma, chemical injury, foreign body, endophthalmitis, and emergency management",
      "Community ophthalmology: blindness definitions, vitamin A, trachoma, and national programs",
      "Image-based signs: cherry-red spot, boat-shaped hemorrhage, dendritic ulcer, and glaucomatous disc",
    ],
  },
  ent: {
    books: ["PL Dhingra"],
    topics: [
      "Ear anatomy, otitis externa/media, cholesteatoma, mastoiditis, facial nerve, and temporal bone trauma",
      "Hearing loss, tuning fork tests, audiometry, vestibular testing, vertigo, and Meniere disease",
      "Nose, epistaxis, rhinitis, nasal polyps, septal disease, granulomatous disease, and trauma",
      "Paranasal sinusitis, fungal sinusitis, complications, imaging, and functional endoscopic surgery basics",
      "Oral cavity, pharynx, tonsils, adenoids, deep neck space infections, and dysphagia",
      "Larynx, hoarseness, vocal cord palsy, airway obstruction, tracheostomy, and foreign bodies",
      "Head and neck tumors: nasopharynx, larynx, oral cavity, salivary gland, thyroid-neck nodes",
      "Pediatric ENT: stridor, croup, epiglottitis, foreign body, and congenital anomalies",
      "ENT emergencies and instruments commonly shown in exams",
      "Radiology and endoscopic image correlations for ear, nose, throat, and larynx",
    ],
  },
  orthopedics: {
    books: ["Maheswari"],
    topics: [
      "Fracture principles, healing, complications, open fractures, implants, traction, and plaster",
      "Upper-limb fractures and dislocations: clavicle, humerus, elbow, forearm, wrist, and hand",
      "Lower-limb fractures and dislocations: pelvis, hip, femur, knee, tibia, ankle, and foot",
      "Spine: TB spine, disc prolapse, scoliosis, spondylolisthesis, spinal injury, and cauda equina",
      "Bone and joint infections: osteomyelitis, septic arthritis, TB, and diabetic foot basics",
      "Bone tumors: benign, malignant, metastases, X-ray patterns, staging, and biopsy principles",
      "Pediatric orthopedics: CTEV, DDH, Perthes, SUFE, rickets, and growth plate injuries",
      "Arthritis: OA, RA, seronegative arthritis, gout, and joint replacement basics",
      "Sports injury, ligament injuries, meniscus, rotator cuff, and rehabilitation principles",
      "X-ray signs, named fractures, nerve injury associations, and orthopedic emergencies",
    ],
  },
  anaesthesia: {
    books: ["Ajay Yadav"],
    topics: [
      "Preoperative assessment, ASA grading, fasting, consent, risk stratification, and optimization",
      "Airway anatomy, assessment, difficult airway algorithm, devices, intubation, and extubation",
      "General anesthetic agents, inhalational agents, IV induction, muscle relaxants, and reversal",
      "Regional anesthesia: spinal, epidural, peripheral nerve blocks, local anesthetics, and toxicity",
      "Monitoring: ECG, BP, pulse oximetry, capnography, temperature, neuromuscular monitoring",
      "Fluids, blood products, shock, perioperative emergencies, malignant hyperthermia, and anaphylaxis",
      "Pain management, opioids, non-opioids, chronic pain, and obstetric analgesia",
      "ICU basics: ventilation modes, oxygen therapy, ABG interpretation, sepsis, and sedation",
      "CPR, ACLS principles, defibrillation, emergency drugs, and resuscitation endpoints",
      "Anesthesia for special populations: pediatrics, geriatrics, pregnancy, cardiac, renal, liver disease",
    ],
  },
  radiology: {
    books: ["Rachana Chaurasia"],
    topics: [
      "Imaging physics: X-ray, CT, MRI, ultrasound, Doppler, nuclear medicine, and radiation safety",
      "Chest imaging: consolidation, collapse, pneumothorax, pleural effusion, TB, edema, and nodules",
      "Abdominal imaging: obstruction, perforation, stones, hepatobiliary, pancreas, and acute abdomen signs",
      "Neuroimaging: stroke, hemorrhage, tumors, hydrocephalus, trauma, infections, and spine imaging",
      "Musculoskeletal imaging: fractures, bone tumors, arthritis, infection, and metabolic bone disease",
      "Obstetric and gynecologic ultrasound, fetal anomalies, ectopic pregnancy, and adnexal masses",
      "Pediatric imaging, congenital anomalies, NEC, foreign bodies, and radiation minimization",
      "Contrast agents, reactions, contraindications, renal safety, and emergency management",
      "Interventional radiology basics, biopsies, drains, angiography, embolization, and stents",
      "Radiotherapy principles, radiosensitivity, fractionation, adverse effects, and oncologic imaging",
    ],
  },
  dermatology: {
    books: ["Saurav Jindal"],
    topics: [
      "Morphology of primary and secondary lesions, distribution patterns, and bedside diagnostic signs",
      "Bacterial, viral, fungal, parasitic skin infections, infestations, and treatment principles",
      "Eczema, dermatitis patterns, urticaria, drug eruptions, erythema multiforme, SJS/TEN",
      "Papulosquamous disorders: psoriasis, lichen planus, pityriasis rosea, and erythroderma",
      "Vesiculobullous disorders: pemphigus, pemphigoid, dermatitis herpetiformis, and immunofluorescence",
      "Pigmentary disorders, vitiligo, melasma, albinism, and disorders of hair and nails",
      "Connective tissue disease skin signs, vasculitis, panniculitis, and photosensitivity disorders",
      "Leprosy spectrum, reactions, nerve involvement, disability prevention, and multidrug therapy",
      "STIs: syphilis, chancroid, LGV, donovanosis, herpes, HPV, HIV skin signs, and syndromic approach",
      "Dermatologic therapeutics: topical steroids, retinoids, antifungals, immunosuppressants, biologics",
    ],
  },
  psychiatry: {
    books: ["Niraj Ahuja"],
    topics: [
      "History taking, mental status examination, psychopathology terms, thought, perception, mood, cognition",
      "Classification, diagnostic criteria approach, rating scales, and organic psychiatric syndromes",
      "Schizophrenia spectrum, delusional disorder, acute psychosis, catatonia, and management",
      "Mood disorders: depression, bipolar disorder, mania, suicide risk, and maintenance therapy",
      "Anxiety, OCD, PTSD, somatoform, dissociative, stress-related, and personality disorders",
      "Substance use: alcohol, opioids, cannabis, stimulants, withdrawal syndromes, and de-addiction",
      "Child psychiatry: autism, ADHD, intellectual disability, learning disorder, conduct disorder",
      "Geriatric psychiatry, delirium, dementia, sleep disorders, eating disorders, and sexual disorders",
      "Psychopharmacology: antidepressants, antipsychotics, mood stabilizers, anxiolytics, ECT",
      "Forensic psychiatry, ethics, capacity, consent, admission, and emergency psychiatry",
    ],
  },
};

subjects.forEach((subject) => {
  const reference = subjectReferenceMap[subject.id];
  if (!reference) return;
  subject.referenceBooks = reference.books;
  subject.topics = reference.topics;
});

const baseCards = [
  ["anatomy", "Erb palsy", "Which roots and posture define Erb-Duchenne palsy?", "C5-C6 upper trunk injury. Limb is adducted, medially rotated, elbow extended, forearm pronated: the classic waiter's tip posture.", ["upper limb", "neuroanatomy"], "AIIMS, NEET"],
  ["anatomy", "Carpal tunnel contents", "List the structures passing through the carpal tunnel.", "Median nerve plus nine tendons: four FDS, four FDP, and one FPL. Flexor carpi radialis is in a separate compartment.", ["upper limb"], "NEET"],
  ["anatomy", "Cavernous sinus", "Name the lateral wall and central structures of the cavernous sinus.", "Lateral wall: CN III, IV, V1, V2. Central: internal carotid artery with sympathetic plexus and CN VI.", ["head and neck"], "AIIMS"],
  ["anatomy", "Midgut rotation", "What is the normal embryologic rotation of midgut?", "The midgut rotates 270 degrees counterclockwise around the superior mesenteric artery.", ["embryology"], "NEET"],
  ["anatomy", "Internal capsule", "Which fibers pass through the genu and posterior limb?", "Genu carries corticonuclear fibers. Posterior limb carries corticospinal fibers plus major sensory thalamocortical radiations.", ["neuroanatomy"], "AIIMS"],
  ["physiology", "Oxygen dissociation curve", "What shifts the oxyhemoglobin dissociation curve to the right?", "Increased CO2, H+ concentration, temperature, and 2,3-BPG. Right shift supports oxygen unloading in tissues.", ["respiratory", "blood"], "NEET"],
  ["physiology", "Renal clearance", "What is the clearance pattern for inulin, PAH, glucose, and urea?", "Inulin equals GFR. PAH approximates renal plasma flow. Glucose clearance is zero below threshold. Urea is partially reabsorbed.", ["renal"], "NEET"],
  ["physiology", "Cardiac cycle", "Which heart sound marks AV valve closure?", "S1 marks mitral and tricuspid valve closure at the start of ventricular systole.", ["cardiovascular"], "AIIMS"],
  ["physiology", "Visual pathway", "Where does a pituitary macroadenoma classically compress the visual pathway?", "Optic chiasm, especially crossing nasal retinal fibers, causing bitemporal hemianopia.", ["CNS"], "AIIMS"],
  ["physiology", "JVP waveform", "Match JVP waves with physiology.", "a: atrial contraction. c: tricuspid bulge during ventricular systole. v: atrial filling against closed tricuspid valve. x and y are descents.", ["cardiovascular"], "NEET"],
  ["biochemistry", "Rate-limiting enzymes", "Name key rate-limiting enzymes for glycolysis, TCA, and cholesterol synthesis.", "Glycolysis: PFK-1. TCA: isocitrate dehydrogenase. Cholesterol synthesis: HMG-CoA reductase.", ["enzymes", "metabolism"], "NEET"],
  ["biochemistry", "Urea cycle defect", "Which urea cycle defect classically causes orotic aciduria without megaloblastic anemia?", "Ornithine transcarbamylase deficiency causes hyperammonemia with increased orotic acid.", ["proteins"], "AIIMS"],
  ["biochemistry", "Vitamin B12", "What biochemical markers rise in vitamin B12 deficiency?", "Methylmalonic acid and homocysteine both increase. Folate deficiency raises homocysteine but not methylmalonic acid.", ["vitamins"], "NEET"],
  ["biochemistry", "Lesch-Nyhan", "Which enzyme deficiency causes Lesch-Nyhan syndrome?", "HGPRT deficiency impairs purine salvage, causing hyperuricemia, dystonia, self-injury, and intellectual disability.", ["genetics"], "AIIMS"],
  ["biochemistry", "Collagen synthesis", "Which vitamin is required for collagen hydroxylation?", "Vitamin C supports proline and lysine hydroxylation. Deficiency causes defective collagen and scurvy.", ["vitamins"], "NEET"],
  ["pathology", "Apoptosis markers", "How does apoptosis differ from necrosis?", "Apoptosis is programmed single-cell death with cell shrinkage, chromatin condensation, apoptotic bodies, and little inflammation.", ["cell injury"], "NEET"],
  ["pathology", "Granuloma", "Which cells dominate a caseating granuloma?", "Activated epithelioid macrophages, Langhans giant cells, lymphocytes, and central caseous necrosis.", ["inflammation"], "AIIMS"],
  ["pathology", "Nephrotic syndrome", "What are the defining clinical features of nephrotic syndrome?", "Proteinuria above 3.5 g/day, hypoalbuminemia, edema, hyperlipidemia, and lipiduria.", ["systemic pathology"], "NEET"],
  ["pathology", "Philadelphia chromosome", "Which translocation defines CML?", "t(9;22) creates BCR-ABL, a constitutively active tyrosine kinase.", ["hematology"], "NEET"],
  ["pathology", "Virchow triad", "What are the components of Virchow triad?", "Endothelial injury, abnormal blood flow, and hypercoagulability.", ["hemodynamics"], "AIIMS", ["Endothelial injury", "Stasis / turbulence", "Hypercoagulability", "Thrombosis"]],
  ["pharmacology", "Michaelis-Menten drugs", "Name common drugs showing capacity-limited metabolism.", "Phenytoin, ethanol, and aspirin at higher doses can show zero-order or capacity-limited kinetics.", ["pharmacokinetics"], "NEET"],
  ["pharmacology", "Beta blockers", "Which beta blocker is preferred in glaucoma and why?", "Timolol decreases aqueous humor production through beta blockade in the ciliary epithelium.", ["ANS", "ophthalmology"], "NEET"],
  ["pharmacology", "Aminoglycosides", "What are major toxicities of aminoglycosides?", "Nephrotoxicity, ototoxicity, and neuromuscular blockade. Risk rises with loop diuretics and renal impairment.", ["antimicrobials"], "AIIMS"],
  ["pharmacology", "Organophosphate poisoning", "What is the treatment approach for organophosphate poisoning?", "Decontamination, airway support, atropine for muscarinic effects, and pralidoxime early to regenerate acetylcholinesterase.", ["toxicology"], "NEET", ["Exposure", "Cholinergic crisis", "Atropine", "Pralidoxime early"]],
  ["pharmacology", "Warfarin antidote", "How is serious warfarin-associated bleeding reversed?", "Vitamin K plus four-factor prothrombin complex concentrate when urgent reversal is required.", ["CVS drugs"], "NEET"],
  ["microbiology", "Sterilization", "What are standard autoclave conditions?", "121 degrees Celsius at 15 psi for 15 minutes is the classic gravity-displacement autoclave cycle.", ["sterilization"], "NEET"],
  ["microbiology", "Tuberculosis stain", "Which stain is used for Mycobacterium tuberculosis?", "Ziehl-Neelsen stain shows acid-fast bacilli because mycolic acid-rich cell walls retain carbol fuchsin.", ["bacteriology"], "NEET"],
  ["microbiology", "Hepatitis B markers", "What does HBeAg indicate?", "HBeAg indicates active viral replication and higher infectivity.", ["virology"], "AIIMS"],
  ["microbiology", "Type II hypersensitivity", "Give examples of type II hypersensitivity.", "Autoimmune hemolytic anemia, Goodpasture syndrome, myasthenia gravis, Graves disease, and erythroblastosis fetalis.", ["immunology"], "NEET"],
  ["microbiology", "Malaria relapse", "Which malaria species form hepatic hypnozoites?", "Plasmodium vivax and Plasmodium ovale form dormant liver hypnozoites and can relapse.", ["parasitology"], "AIIMS"],
  ["forensic", "Postmortem lividity", "When does postmortem lividity usually become fixed?", "It begins within 30 minutes to 2 hours and commonly becomes fixed by about 6 to 12 hours, varying with conditions.", ["legal procedure"], "NEET"],
  ["forensic", "Hanging mark", "What is the typical ligature mark in hanging?", "Oblique, non-continuous, high up in the neck, and directed toward the point of suspension.", ["asphyxia"], "NEET"],
  ["forensic", "Lead poisoning", "Name classic findings of chronic lead poisoning.", "Burton line, basophilic stippling, abdominal colic, wrist drop, anemia, and encephalopathy in children.", ["toxicology"], "AIIMS"],
  ["forensic", "Laceration", "How do lacerations differ from incised wounds?", "Lacerations have irregular margins, tissue bridging, abrasion/contusion around edges, and are caused by blunt force.", ["injuries"], "NEET"],
  ["forensic", "Consent age", "What is the practical exam point for consent in medical procedures?", "Valid consent requires competence, adequate information, voluntariness, and procedure-specific permission. Local legal thresholds must be checked from current law.", ["medical ethics"], "AIIMS"],
  ["psm", "Screening test", "Which test property is most important for ruling out disease?", "High sensitivity helps rule out disease when negative: SnNout.", ["screening"], "NEET"],
  ["psm", "Odds ratio", "Which study commonly uses odds ratio?", "Case-control studies usually estimate association using odds ratio.", ["biostatistics"], "NEET"],
  ["psm", "Herd immunity", "What determines herd immunity threshold?", "The approximate threshold is 1 - 1/R0, assuming homogeneous mixing and effective immunity.", ["epidemiology"], "AIIMS"],
  ["psm", "Cold chain", "What is the usual vaccine cold-chain temperature?", "Most routine vaccines are stored at 2 to 8 degrees Celsius; freeze-sensitive vaccines must not be frozen.", ["national programs"], "NEET"],
  ["psm", "Disease control levels", "Arrange control, elimination, eradication, and extinction.", "Control reduces disease burden. Elimination stops transmission in a region. Eradication stops worldwide transmission. Extinction removes the agent from nature and labs.", ["epidemiology"], "AIIMS", ["Control", "Elimination", "Eradication", "Extinction"]],
  ["medicine", "STEMI management", "What is the immediate reperfusion principle in STEMI?", "Primary PCI is preferred when timely available. Otherwise fibrinolysis is considered if no contraindication and within the recommended window.", ["cardiology"], "NEET", ["Chest pain + ST elevation", "Aspirin + antiplatelet + anticoagulation", "Primary PCI", "Fibrinolysis if PCI delay"]],
  ["medicine", "DKA triad", "What defines diabetic ketoacidosis?", "Hyperglycemia, ketonemia or ketonuria, and high-anion-gap metabolic acidosis.", ["endocrinology"], "NEET"],
  ["medicine", "Nephritic syndrome", "What features suggest nephritic syndrome?", "Hematuria with RBC casts, hypertension, oliguria, azotemia, and sub-nephrotic proteinuria.", ["nephrology"], "AIIMS"],
  ["medicine", "Meningitis empiric therapy", "What must be remembered before antibiotics in suspected meningitis?", "Do not delay antibiotics. Obtain blood cultures when feasible, give dexamethasone when indicated, and tailor therapy to age/risk.", ["infectious diseases", "neurology"], "NEET"],
  ["medicine", "COPD oxygen target", "What oxygen saturation target is commonly used in acute COPD exacerbation at risk of CO2 retention?", "A controlled target around 88-92% is commonly used while monitoring blood gases.", ["pulmonology"], "NEET"],
  ["surgery", "Shock classes", "What is the earliest vital sign change in hemorrhagic shock?", "Tachycardia is often the earliest vital sign change; hypotension is later after substantial blood loss.", ["shock", "trauma"], "NEET"],
  ["surgery", "Acute appendicitis", "Describe classic pain migration in appendicitis.", "Visceral periumbilical pain later localizes to the right iliac fossa as parietal peritoneum becomes inflamed.", ["GI surgery"], "NEET"],
  ["surgery", "Breast cancer spread", "What is the most common lymphatic drainage pathway for breast carcinoma?", "Axillary nodes, especially anterior or pectoral group, are the common first drainage basin.", ["breast"], "AIIMS"],
  ["surgery", "Burn fluid", "What is Parkland formula?", "Ringer lactate 4 mL x body weight in kg x percent TBSA burn in first 24 hours; half in first 8 hours from burn time.", ["burns"], "NEET"],
  ["surgery", "Thyroid nodule", "What is the key initial investigation for thyroid nodule risk stratification?", "High-resolution ultrasound guides risk features and need for FNAC based on size and suspicious morphology.", ["thyroid"], "AIIMS"],
  ["obg", "Preeclampsia", "Define preeclampsia.", "New-onset hypertension after 20 weeks with proteinuria or end-organ dysfunction.", ["antenatal care"], "NEET"],
  ["obg", "Ectopic pregnancy", "What ultrasound and lab pattern suggests ectopic pregnancy?", "Positive pregnancy test with no intrauterine pregnancy above the discriminatory beta-hCG zone, or adnexal mass/free fluid in the right context.", ["obstetric emergencies"], "AIIMS"],
  ["obg", "Active management third stage", "What are key steps in active management of third stage of labor?", "Uterotonic after delivery, controlled cord traction when appropriate, and uterine tone assessment/massage.", ["labor"], "NEET"],
  ["obg", "PCOS Rotterdam", "What are Rotterdam criteria for PCOS?", "Any two of oligo/anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology after excluding mimics.", ["menstrual disorders"], "NEET"],
  ["obg", "Cervical cancer screening", "What is the central screening principle for cervical cancer?", "Use cytology, HPV testing, or VIA depending on program setting; abnormal results require protocol-based triage and colposcopy when indicated.", ["gyn oncology"], "AIIMS"],
  ["pediatrics", "APGAR", "What are APGAR components?", "Appearance, Pulse, Grimace, Activity, and Respiration, assessed at 1 and 5 minutes.", ["neonatology"], "NEET"],
  ["pediatrics", "Development milestone", "At what age does a child usually sit without support?", "Around 8 months is a common exam milestone for sitting without support.", ["development"], "NEET"],
  ["pediatrics", "ORS", "What is the basis of ORS efficacy?", "Sodium-glucose cotransport remains functional in many diarrheal illnesses, allowing water absorption.", ["nutrition"], "AIIMS"],
  ["pediatrics", "Neonatal jaundice danger", "Why is unconjugated neonatal hyperbilirubinemia dangerous?", "Unconjugated bilirubin can cross the blood-brain barrier and cause acute bilirubin encephalopathy or kernicterus.", ["neonatology"], "NEET"],
  ["pediatrics", "Vaccine contraindication", "What is a true contraindication to a vaccine dose?", "Severe allergic reaction to a previous dose or component is a true contraindication. Minor illness usually is not.", ["immunization"], "AIIMS"],
  ["ophthalmology", "Acute angle closure", "What are features of acute angle-closure glaucoma?", "Painful red eye, halos, mid-dilated fixed pupil, corneal edema, shallow anterior chamber, and raised IOP.", ["glaucoma"], "NEET"],
  ["ophthalmology", "Cataract", "What is the definitive treatment for visually significant cataract?", "Surgical lens extraction with intraocular lens implantation when visual function is affected.", ["lens"], "NEET"],
  ["ophthalmology", "Diabetic retinopathy", "What marks proliferative diabetic retinopathy?", "Neovascularization at disc or elsewhere, with risk of vitreous hemorrhage and tractional retinal detachment.", ["retina"], "AIIMS"],
  ["ophthalmology", "Argyll Robertson pupil", "What is the classic pupil finding in neurosyphilis?", "Small irregular pupils that accommodate but do not react to light.", ["neuro-ophthalmology"], "AIIMS"],
  ["ophthalmology", "Dendritic ulcer", "Which infection causes dendritic corneal ulcer?", "Herpes simplex keratitis classically causes branching dendritic epithelial ulcers.", ["cornea"], "NEET"],
  ["ent", "Otitis media", "Which organism is a common cause of acute otitis media?", "Streptococcus pneumoniae, Haemophilus influenzae, and Moraxella catarrhalis are common causes.", ["ear"], "NEET"],
  ["ent", "Rinne test", "How is Rinne interpreted?", "Positive Rinne means air conduction exceeds bone conduction. Negative Rinne suggests conductive hearing loss in that ear.", ["audiology"], "NEET"],
  ["ent", "Kiesselbach plexus", "Where is the common site of anterior epistaxis?", "Little area on the anterior nasal septum, supplied by Kiesselbach plexus.", ["nose"], "AIIMS"],
  ["ent", "Ludwig angina", "What is the immediate concern in Ludwig angina?", "Airway compromise from rapidly spreading submandibular space infection.", ["head and neck"], "NEET"],
  ["ent", "Vocal cord palsy", "Which nerve is commonly injured in thyroid surgery causing vocal cord palsy?", "Recurrent laryngeal nerve injury causes ipsilateral vocal cord paralysis.", ["larynx"], "AIIMS"],
  ["orthopedics", "Colles fracture", "What deformity is typical of Colles fracture?", "Distal radius fracture with dorsal displacement, producing dinner-fork deformity.", ["fractures"], "NEET"],
  ["orthopedics", "Compartment syndrome", "What is the key early symptom of acute compartment syndrome?", "Severe pain out of proportion, especially pain on passive stretch.", ["trauma"], "AIIMS"],
  ["orthopedics", "Osteosarcoma", "What X-ray signs suggest osteosarcoma?", "Sunburst periosteal reaction and Codman triangle around metaphysis of long bones.", ["bone tumors"], "NEET"],
  ["orthopedics", "TB spine", "What deformity is associated with spinal tuberculosis?", "Gibbus deformity from vertebral body collapse in Pott disease.", ["spine"], "NEET"],
  ["orthopedics", "Anterior shoulder dislocation", "Which nerve is at risk in anterior shoulder dislocation?", "Axillary nerve, causing deltoid weakness and sensory loss over regimental badge area.", ["dislocations"], "AIIMS"],
  ["anaesthesia", "Mallampati", "What does Mallampati score assess?", "Visibility of oropharyngeal structures to predict potential difficulty with intubation.", ["airway"], "NEET"],
  ["anaesthesia", "Local anesthetic toxicity", "What is the treatment for severe local anesthetic systemic toxicity?", "Airway support, seizure control, cardiovascular support, and intravenous lipid emulsion.", ["regional anesthesia"], "AIIMS"],
  ["anaesthesia", "MAC", "What does MAC represent?", "Minimum alveolar concentration preventing movement in 50% of patients exposed to a surgical stimulus.", ["general anesthesia"], "NEET"],
  ["anaesthesia", "CPR ratio", "What is adult single-rescuer CPR compression-to-ventilation ratio?", "30 compressions to 2 breaths, with high-quality compressions and minimal interruptions.", ["CPR"], "NEET"],
  ["anaesthesia", "Capnography", "What is capnography useful for after intubation?", "Continuous waveform capnography confirms tracheal tube placement and monitors ventilation/perfusion trends.", ["monitoring"], "AIIMS"],
  ["radiology", "CT head acute bleed", "How does acute hemorrhage appear on noncontrast CT?", "Acute blood is usually hyperdense on noncontrast CT.", ["neuroimaging"], "NEET"],
  ["radiology", "Pneumoperitoneum", "What is the erect chest X-ray sign of perforated hollow viscus?", "Free gas under the diaphragm, classically under the right hemidiaphragm.", ["abdominal imaging"], "NEET"],
  ["radiology", "Radiation sensitivity", "Which cells are most radiosensitive?", "Rapidly dividing, less differentiated cells are more radiosensitive, such as hematopoietic and germ cells.", ["radiotherapy"], "AIIMS"],
  ["radiology", "Barium swallow bird beak", "Which condition shows bird-beak appearance on barium swallow?", "Achalasia cardia due to failure of LES relaxation and esophageal aperistalsis.", ["abdominal imaging"], "NEET"],
  ["radiology", "Ultrasound gallstone", "What are classic ultrasound features of gallstones?", "Echogenic foci with posterior acoustic shadowing and mobility with position change.", ["ultrasound"], "AIIMS"],
  ["dermatology", "Psoriasis sign", "What is Auspitz sign?", "Pinpoint bleeding after removal of psoriatic scales due to suprapapillary thinning and dilated capillaries.", ["psoriasis"], "NEET"],
  ["dermatology", "Leprosy spectrum", "Which immune response dominates tuberculoid leprosy?", "Strong cell-mediated Th1 response with few bacilli and well-defined anesthetic lesions.", ["leprosy"], "AIIMS"],
  ["dermatology", "Scabies", "What is the classic symptom and site pattern of scabies?", "Intense nocturnal pruritus with burrows in finger webs, wrists, axillae, waist, and genital region.", ["infections"], "NEET"],
  ["dermatology", "Chancre", "Describe primary syphilis chancre.", "Painless indurated ulcer with clean base and non-tender regional lymphadenopathy.", ["STIs"], "NEET"],
  ["dermatology", "Pemphigus vulgaris", "What antibody and level of split occur in pemphigus vulgaris?", "IgG against desmoglein, causing suprabasal intraepidermal split with flaccid bullae.", ["blistering"], "AIIMS"],
  ["psychiatry", "Schizophrenia duration", "What duration is required for schizophrenia diagnosis in many standard criteria?", "At least 6 months of disturbance with at least 1 month of active-phase symptoms, after exclusions.", ["schizophrenia"], "NEET"],
  ["psychiatry", "Lithium toxicity", "Name important adverse effects of lithium.", "Tremor, hypothyroidism, nephrogenic diabetes insipidus, renal dysfunction, weight gain, and teratogenic risk.", ["psychopharmacology"], "AIIMS"],
  ["psychiatry", "Panic attack", "What defines a panic attack?", "Abrupt surge of intense fear or discomfort peaking within minutes, with autonomic and cognitive symptoms.", ["anxiety"], "NEET"],
  ["psychiatry", "Alcohol withdrawal", "When can delirium tremens occur after alcohol cessation?", "Usually 48 to 96 hours after last drink, with confusion, autonomic instability, hallucinations, and tremor.", ["substance use"], "NEET"],
  ["psychiatry", "First-rank symptoms", "Give examples of Schneider first-rank symptoms.", "Thought insertion, withdrawal, broadcasting, voices commenting, voices discussing, and delusional perception.", ["psychopathology"], "AIIMS"],
].map((item, index) => ({
  id: `card-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
}));

const anatomyExpansionCards = [
  ["anatomy", "Nutrient foramen rule", "What is the direction rule for nutrient foramina in long bones?", "The nutrient canal is directed away from the growing end. Around the elbow it is directed toward the joint, and around the knee it is directed away from the joint.", ["general anatomy", "bones"], "AIIMS, NEET"],
  ["anatomy", "Sesamoid bones", "Why are sesamoid bones clinically important?", "They develop in tendons near joints, reduce friction, alter the line of pull, and may be mistaken for fracture fragments on imaging.", ["general anatomy", "bones"], "NEET"],
  ["anatomy", "Types of cartilage", "Compare hyaline, elastic, and fibrocartilage by high-yield locations.", "Hyaline cartilage: articular surfaces, costal cartilages, trachea. Elastic cartilage: pinna, epiglottis. Fibrocartilage: intervertebral disc, pubic symphysis, menisci.", ["general anatomy", "cartilage"], "AIIMS, NEET"],
  ["anatomy", "Endochondral ossification", "What is the sequence of endochondral ossification?", "Cartilage model forms first, then primary ossification center, vascular invasion, marrow cavity, secondary centers, and persistence of articular cartilage and epiphyseal plate until maturity.", ["general anatomy", "embryology"], "NEET", ["Cartilage model", "Primary center", "Vascular invasion", "Secondary centers"]],
  ["anatomy", "Synovial joint features", "What are essential features of a synovial joint?", "Articular cartilage, joint cavity, synovial membrane, fibrous capsule, synovial fluid, and accessory ligaments or discs when present.", ["general anatomy", "joints"], "NEET"],
  ["anatomy", "Hilton law", "State Hilton law for joints.", "A nerve supplying a muscle that moves a joint also supplies the joint and the skin over the muscle insertion region.", ["general anatomy", "joints", "nerves"], "AIIMS"],
  ["anatomy", "Lymph node drainage logic", "What is the exam logic for superficial and deep lymph drainage?", "Superficial lymphatics usually accompany superficial veins, while deep lymphatics follow deep vessels and drain through regional deep nodes.", ["general anatomy", "lymphatics"], "NEET"],
  ["anatomy", "Deep fascia importance", "Why does deep fascia matter clinically?", "Deep fascia forms compartments, retinacula and intermuscular septa; tight fascial compartments explain compartment syndrome and spread of infection along planes.", ["general anatomy", "fascia"], "AIIMS, NEET"],
  ["anatomy", "Clavicle unique features", "List high-yield unique features of the clavicle.", "It is subcutaneous, horizontally placed, ossifies early, largely ossifies in membrane, has no typical medullary cavity, and transmits upper-limb weight to the axial skeleton.", ["upper limb", "bones"], "NEET"],
  ["anatomy", "Clavicle fracture displacement", "Why does the lateral fragment of a mid-clavicle fracture droop?", "The upper limb weight pulls the lateral fragment downward, while sternocleidomastoid tends to elevate the medial fragment.", ["upper limb", "fractures"], "AIIMS"],
  ["anatomy", "Scapular anastomosis", "Which arteries form the scapular anastomosis?", "Suprascapular and dorsal scapular arteries connect with circumflex scapular branches around the scapula, preserving collateral flow after proximal axillary artery obstruction.", ["upper limb", "arteries"], "NEET"],
  ["anatomy", "Axillary artery parts", "How are the three parts of the axillary artery defined?", "They are defined by pectoralis minor: first part medial, second part posterior, third part lateral to the muscle.", ["upper limb", "arteries"], "AIIMS, NEET"],
  ["anatomy", "Axillary nerve lesion", "What deficits follow axillary nerve injury?", "Deltoid and teres minor weakness, impaired shoulder abduction after the first 15 degrees, and sensory loss over the regimental badge area.", ["upper limb", "nerves"], "NEET"],
  ["anatomy", "Long thoracic nerve", "Which lesion causes winging of scapula?", "Long thoracic nerve injury paralyzes serratus anterior, causing medial scapular winging and difficulty pushing or abducting above shoulder level.", ["upper limb", "nerves"], "AIIMS"],
  ["anatomy", "Radial nerve in spiral groove", "What is the classic radial nerve lesion at the spiral groove?", "Wrist and finger extension are weak, but triceps may be partly spared because branches to triceps often arise proximally.", ["upper limb", "nerves"], "NEET"],
  ["anatomy", "Median nerve at wrist", "What motor deficit is typical in carpal tunnel syndrome?", "Thenar weakness with impaired opposition and abduction of thumb; palmar cutaneous sensation is usually spared because that branch passes superficial to the tunnel.", ["upper limb", "nerves"], "AIIMS, NEET"],
  ["anatomy", "Ulnar nerve at wrist", "What is ulnar claw and why does it occur?", "Ulnar claw affects ring and little fingers due to paralysis of interossei and medial lumbricals, leaving extensor and long flexor imbalance at MCP and IP joints.", ["upper limb", "nerves"], "NEET"],
  ["anatomy", "Cubital fossa contents", "List cubital fossa contents from medial to lateral.", "Median nerve, brachial artery, biceps tendon, and radial nerve region are remembered as MBBR from medial to lateral.", ["upper limb", "relations"], "AIIMS"],
  ["anatomy", "Anatomical snuffbox", "What are the boundaries and key floor structure of anatomical snuffbox?", "Boundaries are APL/EPB laterally and EPL medially; scaphoid and trapezium form the floor, with radial artery crossing the floor.", ["upper limb", "hand"], "NEET"],
  ["anatomy", "Rotator cuff", "Name rotator cuff muscles and their main action pattern.", "Supraspinatus initiates abduction; infraspinatus and teres minor laterally rotate; subscapularis medially rotates. Together they stabilize the humeral head.", ["upper limb", "muscles"], "NEET"],
  ["anatomy", "Breast lymphatics", "Where does most breast lymph drain?", "Most lymph drains to axillary nodes, especially anterior or pectoral nodes; medial quadrants can drain to internal mammary nodes.", ["thorax", "lymphatics"], "AIIMS, NEET"],
  ["anatomy", "Intercostal neurovascular bundle", "What is the order of structures in the costal groove?", "From superior to inferior in the costal groove: vein, artery, nerve. Procedures are usually done near the upper border of the rib below.", ["thorax", "relations"], "NEET"],
  ["anatomy", "Azygos vein arch", "Where does the azygos vein arch terminate?", "It arches over the root of the right lung and drains into the superior vena cava.", ["thorax", "veins"], "AIIMS"],
  ["anatomy", "Right vs left main bronchus", "Why is foreign body aspiration more common on the right?", "The right main bronchus is wider, shorter, and more vertical than the left.", ["thorax", "respiratory"], "NEET"],
  ["anatomy", "Lung segment principle", "Why are bronchopulmonary segments surgically important?", "Each segment has its own segmental bronchus and arterial supply with veins running intersegmentally, allowing segmental resection.", ["thorax", "respiratory"], "AIIMS"],
  ["anatomy", "Phrenic nerve", "What does the phrenic nerve supply?", "C3-C5 motor supply to diaphragm and sensory supply to central diaphragmatic pleura, pericardium, and central diaphragmatic peritoneum.", ["thorax", "nerves"], "NEET"],
  ["anatomy", "Femoral triangle", "List femoral triangle contents lateral to medial.", "Nerve, artery, vein, empty canal, lymphatics: NAVEL from lateral to medial.", ["lower limb", "relations"], "AIIMS, NEET"],
  ["anatomy", "Femoral sheath", "Which femoral triangle content is outside the femoral sheath?", "Femoral nerve lies outside the femoral sheath; the sheath contains femoral artery, vein, and canal.", ["lower limb", "fascia"], "NEET"],
  ["anatomy", "Adductor canal", "What are the contents of the adductor canal?", "Femoral artery, femoral vein, saphenous nerve, nerve to vastus medialis, and lymphatics pass through the canal.", ["lower limb", "relations"], "AIIMS"],
  ["anatomy", "Sciatic nerve injury", "What is the safest quadrant for gluteal intramuscular injection?", "Superolateral quadrant of the buttock, away from the sciatic nerve and major inferior gluteal neurovascular structures.", ["lower limb", "nerves"], "NEET"],
  ["anatomy", "Common peroneal nerve", "What is the classic deficit after common peroneal nerve injury at fibular neck?", "Foot drop with loss of dorsiflexion and eversion, plus sensory loss over lateral leg and dorsum of foot.", ["lower limb", "nerves"], "AIIMS, NEET"],
  ["anatomy", "Tarsal tunnel contents", "List structures behind the medial malleolus.", "Tom, Dick And Very Nervous Harry: tibialis posterior, flexor digitorum longus, posterior tibial artery, tibial nerve, flexor hallucis longus.", ["lower limb", "ankle"], "NEET"],
  ["anatomy", "Hip joint blood supply", "Which vessels are critical for femoral head blood supply in adults?", "Retinacular branches of the medial circumflex femoral artery are most important; fracture neck femur can endanger them.", ["lower limb", "arteries"], "AIIMS"],
  ["anatomy", "Trendelenburg sign", "What does a positive Trendelenburg sign indicate?", "Weak hip abductors, commonly gluteus medius and minimus due to superior gluteal nerve lesion or hip pathology.", ["lower limb", "gait"], "NEET"],
  ["anatomy", "Knee locking", "What causes locking and unlocking of the knee?", "Terminal extension locks the knee through medial rotation of femur on tibia in weight-bearing; popliteus initiates unlocking.", ["lower limb", "joints"], "AIIMS"],
  ["anatomy", "Inguinal canal walls", "Summarize the walls of the inguinal canal.", "Anterior wall: external oblique aponeurosis. Posterior wall: transversalis fascia. Roof: arching internal oblique/transversus. Floor: inguinal ligament.", ["abdomen", "inguinal canal"], "NEET"],
  ["anatomy", "Direct vs indirect hernia", "How do direct and indirect inguinal hernias relate to inferior epigastric vessels?", "Indirect hernia passes lateral to inferior epigastric vessels through deep ring; direct hernia protrudes medial to them through Hesselbach triangle.", ["abdomen", "hernia"], "AIIMS, NEET"],
  ["anatomy", "Portal-systemic anastomoses", "Name major portal-systemic anastomosis sites.", "Lower esophagus, upper anal canal, paraumbilical region, retroperitoneal gut areas, and bare area of liver.", ["abdomen", "veins"], "NEET"],
  ["anatomy", "Lesser sac entry", "How is the lesser sac entered surgically?", "Through the epiploic foramen, bounded anteriorly by the free edge of lesser omentum containing portal triad.", ["abdomen", "peritoneum"], "AIIMS"],
  ["anatomy", "Portal triad arrangement", "What is the arrangement of structures in the free edge of lesser omentum?", "Common bile duct lies right anterior, hepatic artery left anterior, and portal vein posterior.", ["abdomen", "relations"], "NEET"],
  ["anatomy", "Appendix base landmark", "Where is the base of appendix located?", "At the convergence of the three taeniae coli on the cecum; surface marking is classically McBurney point.", ["abdomen", "gut"], "AIIMS"],
  ["anatomy", "Ureter constrictions", "Name the three classic constrictions of the ureter.", "Pelviureteric junction, crossing of pelvic brim or iliac vessels, and ureterovesical junction.", ["abdomen", "pelvis"], "NEET"],
  ["anatomy", "Kidney coverings", "List kidney coverings from inside outward.", "Fibrous capsule, perirenal fat, renal fascia, and pararenal fat.", ["abdomen", "kidney"], "NEET"],
  ["anatomy", "Pelvic splanchnic nerves", "What fibers do pelvic splanchnic nerves carry?", "Parasympathetic fibers from S2-S4 to pelvic organs and hindgut derivatives up to the left colic flexure region through plexuses.", ["pelvis", "nerves"], "AIIMS"],
  ["anatomy", "Pudendal nerve course", "Trace the pudendal nerve around the pelvis.", "It exits greater sciatic foramen below piriformis, hooks around sacrospinous ligament near ischial spine, and enters perineum through lesser sciatic foramen.", ["pelvis", "nerves"], "AIIMS, NEET"],
  ["anatomy", "Ischioanal fossa contents", "What is the key neurovascular content of the lateral wall of ischioanal fossa?", "Pudendal canal in obturator fascia contains pudendal nerve and internal pudendal vessels.", ["pelvis", "perineum"], "NEET"],
  ["anatomy", "Uterine artery relation", "What is the classic relation of uterine artery to ureter?", "The uterine artery crosses superior to the ureter near the cervix: water under the bridge.", ["pelvis", "relations"], "AIIMS, NEET"],
  ["anatomy", "Prostate zones", "Which prostate zone is important in carcinoma?", "Carcinoma commonly arises in the peripheral zone, while benign prostatic hyperplasia mainly involves the transitional or periurethral region.", ["pelvis", "prostate"], "NEET"],
  ["anatomy", "Anterior triangle", "What are the main subdivisions of the anterior triangle of neck?", "Submental, submandibular, carotid, and muscular triangles.", ["head and neck", "neck"], "NEET"],
  ["anatomy", "Posterior triangle", "Which nerves are clinically important in posterior triangle?", "Spinal accessory nerve crosses the triangle superficially and roots/trunks of brachial plexus emerge between scalene muscles.", ["head and neck", "nerves"], "AIIMS"],
  ["anatomy", "Parotid gland contents", "List structures within parotid gland from superficial to deep.", "Facial nerve, retromandibular vein, and external carotid artery are arranged from superficial to deep.", ["head and neck", "salivary gland"], "NEET"],
  ["anatomy", "Danger area of face", "Why is infection in the danger area of face important?", "Facial vein communications with ophthalmic veins can allow spread to cavernous sinus.", ["head and neck", "veins"], "AIIMS"],
  ["anatomy", "Cavernous sinus syndrome", "Which ocular motor nerve is most vulnerable inside cavernous sinus?", "Abducens nerve runs close to the internal carotid artery within the sinus and is commonly affected early.", ["head and neck", "cranial nerves"], "NEET"],
  ["anatomy", "Mandibular foramen relation", "Why is the mandibular foramen important for dental anesthesia?", "Inferior alveolar nerve enters the mandibular foramen before traversing the mandibular canal, making it a target for inferior alveolar nerve block.", ["head and neck", "mandible"], "AIIMS"],
  ["anatomy", "Laryngeal nerve lesions", "How do recurrent and external laryngeal nerve injuries differ?", "Recurrent laryngeal nerve injury causes vocal cord palsy and hoarseness; external laryngeal nerve injury weakens cricothyroid and affects pitch.", ["head and neck", "nerves"], "NEET"],
  ["anatomy", "Scalp layers", "List the five layers of scalp.", "Skin, connective tissue, aponeurosis, loose areolar tissue, and pericranium: SCALP.", ["head and neck", "scalp"], "AIIMS, NEET"],
  ["anatomy", "Circle of Willis", "Which arteries form the circle of Willis?", "Anterior cerebral arteries with anterior communicating artery, internal carotid arteries, posterior communicating arteries, and posterior cerebral arteries.", ["neuroanatomy", "arteries"], "NEET"],
  ["anatomy", "Internal capsule blood supply", "Why is lenticulostriate artery occlusion important?", "Lenticulostriate branches supply deep structures including parts of internal capsule; occlusion can cause dense contralateral motor deficits.", ["neuroanatomy", "blood supply"], "AIIMS"],
  ["anatomy", "Brown-Sequard syndrome", "What deficits occur in Brown-Sequard syndrome?", "Ipsilateral upper motor neuron weakness and loss of proprioception below lesion with contralateral pain and temperature loss below lesion.", ["neuroanatomy", "tracts"], "AIIMS, NEET"],
  ["anatomy", "Medial medullary syndrome", "Which structures are involved in medial medullary syndrome?", "Pyramid, medial lemniscus, and hypoglossal fibers, producing contralateral hemiparesis, contralateral loss of proprioception, and ipsilateral tongue weakness.", ["neuroanatomy", "brainstem"], "AIIMS"],
  ["anatomy", "Lateral medullary syndrome", "Which artery is classically involved in lateral medullary syndrome?", "Posterior inferior cerebellar artery involvement affects nucleus ambiguus, spinal trigeminal tract, spinothalamic tract, vestibular nuclei, and inferior cerebellar peduncle.", ["neuroanatomy", "brainstem"], "NEET"],
  ["anatomy", "CSF pathway", "Trace cerebrospinal fluid flow.", "Lateral ventricles to third ventricle through foramina of Monro, then aqueduct to fourth ventricle, then foramina of Luschka and Magendie to subarachnoid space.", ["neuroanatomy", "ventricles"], "NEET", ["Lateral ventricles", "Third ventricle", "Aqueduct", "Fourth ventricle"]],
].map((item, index) => ({
  id: `anat-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/anatomy",
}));

const physiologyExpansionCards = [
  ["physiology", "Resting membrane potential", "What mainly determines resting membrane potential in large nerve fibers?", "High resting potassium permeability dominates RMP. The Na-K ATPase maintains gradients and adds a small electrogenic negative contribution.", ["nerve", "membrane potential"], "AIIMS, NEET"],
  ["physiology", "Nernst equation use", "What does the Nernst equation calculate?", "It calculates the equilibrium potential for a single ion across a membrane from its concentration gradient.", ["nerve", "electrophysiology"], "NEET"],
  ["physiology", "Goldman equation", "Why is the Goldman equation more physiologic than Nernst for RMP?", "It accounts for multiple permeant ions and their relative membrane permeabilities, especially potassium, sodium, and chloride.", ["nerve", "electrophysiology"], "AIIMS"],
  ["physiology", "Action potential phases", "Which ion movements cause depolarization and repolarization in a nerve action potential?", "Depolarization is mainly rapid sodium influx through voltage-gated sodium channels. Repolarization is sodium channel inactivation plus potassium efflux.", ["nerve", "action potential"], "NEET", ["Resting", "Depolarization", "Repolarization", "After-hyperpolarization"]],
  ["physiology", "Absolute refractory period", "What causes the absolute refractory period?", "Voltage-gated sodium channels are inactivated, so another action potential cannot be generated regardless of stimulus strength.", ["nerve", "action potential"], "AIIMS"],
  ["physiology", "Saltatory conduction", "Why is conduction faster in myelinated fibers?", "Action potentials jump between nodes of Ranvier, reducing membrane capacitance and increasing conduction speed.", ["nerve", "conduction"], "NEET"],
  ["physiology", "Nerve fiber classification", "Which fibers conduct fastest and slowest?", "Large myelinated A-alpha fibers conduct fastest; small unmyelinated C fibers conduct slowest.", ["nerve", "conduction"], "NEET"],
  ["physiology", "NMJ transmission", "What is the sequence at the neuromuscular junction?", "Nerve impulse opens presynaptic calcium channels, acetylcholine is released, nicotinic receptors open, end-plate potential forms, and muscle action potential follows.", ["nerve-muscle", "NMJ"], "AIIMS, NEET"],
  ["physiology", "Myasthenia gravis physiology", "What is the physiological defect in myasthenia gravis?", "Reduced functional nicotinic acetylcholine receptors at the neuromuscular junction reduce safety factor and cause fatigable weakness.", ["nerve-muscle", "NMJ"], "AIIMS"],
  ["physiology", "Excitation-contraction coupling", "How does skeletal muscle excitation cause contraction?", "T-tubule depolarization activates dihydropyridine receptors, which open ryanodine receptors on sarcoplasmic reticulum, releasing calcium for actin-myosin interaction.", ["muscle", "contraction"], "NEET"],
  ["physiology", "Power stroke", "What triggers the actin-myosin power stroke?", "Inorganic phosphate release after myosin binds actin triggers the power stroke; ATP binding later detaches myosin.", ["muscle", "contraction"], "AIIMS"],
  ["physiology", "Rigor mortis", "Why does rigor mortis occur?", "ATP depletion prevents detachment of myosin from actin, causing sustained stiffness until proteins degrade.", ["muscle", "applied"], "NEET"],
  ["physiology", "Isometric vs isotonic", "Differentiate isometric and isotonic contraction.", "Isometric contraction develops tension without shortening. Isotonic contraction shortens against a load with relatively constant tension.", ["muscle", "mechanics"], "NEET"],
  ["physiology", "Smooth muscle latch state", "Why can smooth muscle maintain tone economically?", "The latch state allows attached cross-bridges to maintain force with low ATP use.", ["muscle", "smooth muscle"], "AIIMS"],
  ["physiology", "Plasma proteins", "Name key functions of plasma proteins.", "They maintain oncotic pressure, transport substances, buffer pH, contribute to coagulation and immunity, and affect viscosity.", ["blood", "plasma"], "NEET"],
  ["physiology", "RBC indices", "How are MCV, MCH, and MCHC useful?", "MCV classifies RBC size, MCH estimates hemoglobin per cell, and MCHC estimates hemoglobin concentration in packed RBCs.", ["blood", "RBC"], "NEET"],
  ["physiology", "Erythropoietin trigger", "What stimulates erythropoietin secretion?", "Tissue hypoxia stimulates renal peritubular interstitial cells to increase erythropoietin production.", ["blood", "erythropoiesis"], "AIIMS"],
  ["physiology", "Hemostasis sequence", "What is the sequence of normal hemostasis?", "Vasoconstriction, platelet plug formation, coagulation with fibrin stabilization, clot retraction, and fibrinolysis.", ["blood", "coagulation"], "NEET", ["Vasoconstriction", "Platelet plug", "Fibrin clot", "Fibrinolysis"]],
  ["physiology", "Intrinsic pathway test", "Which coagulation test reflects the intrinsic pathway?", "Activated partial thromboplastin time reflects intrinsic and common pathways; PT reflects extrinsic and common pathways.", ["blood", "coagulation"], "NEET"],
  ["physiology", "ABO transfusion logic", "Why is O negative called a universal RBC donor?", "O negative RBCs lack A, B, and Rh D antigens, reducing risk of recipient antibody-mediated hemolysis for emergency RBC transfusion.", ["blood", "transfusion"], "AIIMS"],
  ["physiology", "Cardiac muscle plateau", "What causes the plateau phase of cardiac ventricular action potential?", "Slow calcium influx through L-type calcium channels balances potassium efflux, prolonging depolarization.", ["cardiovascular", "action potential"], "NEET"],
  ["physiology", "SA node pacemaker", "What ionic current drives SA nodal pacemaker potential?", "Funny current plus calcium currents drive phase 4 depolarization; autonomic tone changes the slope.", ["cardiovascular", "pacemaker"], "AIIMS"],
  ["physiology", "ECG intervals", "What does PR interval represent?", "PR interval reflects atrial depolarization and conduction through AV node and His-Purkinje system before ventricular depolarization.", ["cardiovascular", "ECG"], "NEET"],
  ["physiology", "Cardiac cycle valves", "When are all cardiac valves closed?", "During isovolumetric contraction and isovolumetric relaxation.", ["cardiovascular", "cardiac cycle"], "NEET"],
  ["physiology", "Frank-Starling law", "State the Frank-Starling law.", "Within physiological limits, increased venous return increases end-diastolic fiber length and increases stroke volume.", ["cardiovascular", "cardiac output"], "AIIMS"],
  ["physiology", "Cardiac output equation", "What is the basic equation for cardiac output?", "Cardiac output equals heart rate multiplied by stroke volume.", ["cardiovascular", "cardiac output"], "NEET"],
  ["physiology", "Venous return", "What factors increase venous return?", "Skeletal muscle pump, respiratory pump, venoconstriction, increased blood volume, and reduced right atrial pressure within limits.", ["cardiovascular", "circulation"], "NEET"],
  ["physiology", "Mean arterial pressure", "How is mean arterial pressure approximated?", "MAP is approximately diastolic pressure plus one-third pulse pressure at normal heart rates.", ["cardiovascular", "blood pressure"], "NEET"],
  ["physiology", "Baroreceptor reflex", "How does baroreceptor reflex respond to increased arterial pressure?", "Carotid sinus and aortic arch firing increases, inhibiting sympathetic output and increasing vagal output to lower heart rate and vascular tone.", ["cardiovascular", "reflex"], "AIIMS"],
  ["physiology", "Capillary Starling forces", "Which forces determine capillary fluid movement?", "Capillary and interstitial hydrostatic pressures plus plasma and interstitial oncotic pressures determine filtration or absorption.", ["cardiovascular", "microcirculation"], "NEET"],
  ["physiology", "Shock compensation", "What are early compensations in hypovolemic shock?", "Baroreceptor-mediated sympathetic activation causes tachycardia, vasoconstriction, venoconstriction, and later RAAS/ADH-mediated fluid conservation.", ["cardiovascular", "shock"], "AIIMS, NEET"],
  ["physiology", "Lung compliance", "What decreases lung compliance?", "Pulmonary fibrosis, edema, atelectasis, and surfactant deficiency reduce compliance.", ["respiratory", "mechanics"], "NEET"],
  ["physiology", "Surfactant function", "What is the main function of pulmonary surfactant?", "It lowers alveolar surface tension, increases compliance, stabilizes alveoli of different sizes, and reduces work of breathing.", ["respiratory", "surfactant"], "NEET"],
  ["physiology", "Spirometry obstruction", "What spirometry pattern suggests obstructive disease?", "FEV1 falls disproportionately, so FEV1/FVC decreases.", ["respiratory", "spirometry"], "AIIMS, NEET"],
  ["physiology", "Dead space", "Differentiate anatomical and physiological dead space.", "Anatomical dead space is conducting airway volume. Physiological dead space includes anatomical dead space plus alveoli that are ventilated but underperfused.", ["respiratory", "ventilation"], "NEET"],
  ["physiology", "V/Q mismatch", "What is the V/Q pattern in pulmonary embolism?", "Ventilation is preserved but perfusion falls, creating high V/Q and increased dead space.", ["respiratory", "VQ"], "AIIMS"],
  ["physiology", "Oxygen transport", "How is most oxygen transported in blood?", "Most oxygen is carried bound to hemoglobin; only a small fraction is dissolved in plasma.", ["respiratory", "gas transport"], "NEET"],
  ["physiology", "CO2 transport", "How is most carbon dioxide transported?", "Most CO2 is transported as bicarbonate after conversion by carbonic anhydrase in RBCs.", ["respiratory", "gas transport"], "NEET"],
  ["physiology", "Haldane effect", "What is the Haldane effect?", "Deoxygenated hemoglobin carries more CO2 and H+, facilitating CO2 loading in tissues and unloading in lungs.", ["respiratory", "gas transport"], "AIIMS"],
  ["physiology", "Central chemoreceptors", "What do central chemoreceptors mainly sense?", "They respond to CSF hydrogen ion concentration generated from arterial CO2 crossing the blood-brain barrier.", ["respiratory", "control"], "NEET"],
  ["physiology", "GFR determinants", "What determines glomerular filtration rate?", "Net filtration pressure, filtration coefficient, renal plasma flow, and afferent/efferent arteriolar tone determine GFR.", ["renal", "GFR"], "NEET"],
  ["physiology", "Autoregulation of GFR", "Name the mechanisms of renal autoregulation.", "Myogenic response and tubuloglomerular feedback help stabilize renal blood flow and GFR.", ["renal", "GFR"], "AIIMS"],
  ["physiology", "Clearance formula", "What is the renal clearance formula?", "Clearance equals urine concentration times urine flow rate divided by plasma concentration: C = UxV/Px.", ["renal", "clearance"], "NEET"],
  ["physiology", "PAH clearance", "Why does PAH clearance estimate renal plasma flow?", "At low plasma concentrations PAH is filtered and strongly secreted, so nearly all PAH entering renal plasma is excreted.", ["renal", "clearance"], "AIIMS"],
  ["physiology", "Countercurrent multiplier", "What creates the medullary osmotic gradient?", "NaCl reabsorption in thick ascending limb plus water permeability of descending limb creates the countercurrent multiplier; urea recycling reinforces inner medulla.", ["renal", "concentration"], "NEET"],
  ["physiology", "ADH action", "Where does ADH act and what does it do?", "ADH acts mainly on V2 receptors in collecting ducts to insert aquaporin-2 channels and increase water reabsorption.", ["renal", "hormones"], "NEET"],
  ["physiology", "Aldosterone action", "What are the main renal effects of aldosterone?", "It increases sodium reabsorption and potassium/hydrogen secretion in late distal tubule and collecting duct principal/intercalated cells.", ["renal", "hormones"], "AIIMS"],
  ["physiology", "Micturition reflex", "Which spinal segments mediate parasympathetic micturition reflex?", "S2-S4 parasympathetic outflow contracts detrusor and relaxes internal sphincter during micturition.", ["renal", "bladder"], "NEET"],
  ["physiology", "Salivary secretion", "Which autonomic input produces watery salivary secretion?", "Parasympathetic stimulation produces copious watery saliva; sympathetic stimulation produces smaller protein-rich secretion.", ["GIT", "secretions"], "NEET"],
  ["physiology", "Gastric acid secretion", "What stimulates parietal cell acid secretion?", "Acetylcholine, gastrin, and histamine stimulate acid secretion; somatostatin and prostaglandins inhibit it.", ["GIT", "stomach"], "AIIMS"],
  ["physiology", "Pancreatic bicarbonate", "Which hormone stimulates pancreatic bicarbonate secretion?", "Secretin stimulates bicarbonate-rich pancreatic duct secretion, especially in response to duodenal acid.", ["GIT", "pancreas"], "NEET"],
  ["physiology", "Bile salt role", "Why are bile salts important?", "They emulsify fats and form micelles to aid absorption of lipids and fat-soluble vitamins.", ["GIT", "absorption"], "NEET"],
  ["physiology", "Peristalsis law", "What is the law of intestine?", "Distension causes contraction above and relaxation below the bolus, propelling contents aborally.", ["GIT", "motility"], "AIIMS"],
  ["physiology", "Insulin actions", "Name key metabolic actions of insulin.", "Insulin increases glucose uptake in muscle/adipose, glycogenesis, lipogenesis and protein synthesis, while decreasing gluconeogenesis and lipolysis.", ["endocrine", "pancreas"], "NEET"],
  ["physiology", "Glucagon actions", "What are key actions of glucagon?", "Glucagon increases hepatic glycogenolysis, gluconeogenesis, ketogenesis, and lipolysis, especially during fasting.", ["endocrine", "pancreas"], "NEET"],
  ["physiology", "Thyroid hormone effects", "What are major physiological effects of thyroid hormones?", "They increase basal metabolic rate, heat production, growth and CNS development, and beta-adrenergic responsiveness.", ["endocrine", "thyroid"], "AIIMS, NEET"],
  ["physiology", "Cortisol actions", "Name major actions of cortisol.", "Cortisol increases gluconeogenesis, protein catabolism, lipolysis, vascular responsiveness to catecholamines, and anti-inflammatory effects.", ["endocrine", "adrenal"], "NEET"],
  ["physiology", "PTH actions", "What does parathyroid hormone do?", "PTH increases serum calcium by bone resorption, renal calcium reabsorption, phosphate excretion, and activation of vitamin D.", ["endocrine", "calcium"], "AIIMS"],
  ["physiology", "Menstrual cycle hormones", "What triggers ovulation?", "Sustained high estradiol produces positive feedback causing the LH surge, which triggers ovulation.", ["endocrine", "reproduction"], "NEET"],
  ["physiology", "Stretch reflex", "What receptor mediates the stretch reflex?", "Muscle spindle detects stretch and activates Ia afferents causing monosynaptic contraction of the same muscle.", ["CNS", "reflex"], "NEET"],
  ["physiology", "Golgi tendon organ", "What does the Golgi tendon organ detect?", "It detects muscle tension via Ib afferents and contributes to inverse stretch reflex.", ["CNS", "reflex"], "AIIMS"],
  ["physiology", "Pain pathway", "Which tract carries pain and temperature?", "The lateral spinothalamic tract carries pain and temperature after crossing within a few spinal segments.", ["CNS", "sensory"], "NEET"],
  ["physiology", "Dorsal column pathway", "What modalities are carried in dorsal columns?", "Fine touch, vibration, conscious proprioception, and two-point discrimination ascend ipsilaterally before decussating in medulla.", ["CNS", "sensory"], "AIIMS"],
  ["physiology", "Basal ganglia role", "What is the main motor role of basal ganglia?", "Basal ganglia help initiate desired movements and suppress unwanted movements through direct and indirect pathways.", ["CNS", "motor"], "NEET"],
  ["physiology", "Cerebellar lesion", "What are classic signs of cerebellar dysfunction?", "Ataxia, intention tremor, dysmetria, dysdiadochokinesia, nystagmus, hypotonia, and scanning speech.", ["CNS", "cerebellum"], "AIIMS, NEET"],
  ["physiology", "Phototransduction", "What happens to photoreceptors in light?", "Light hyperpolarizes photoreceptors by reducing cGMP and closing sodium channels.", ["special senses", "vision"], "AIIMS"],
  ["physiology", "Organ of Corti", "What converts sound vibration into nerve signals?", "Hair cells in the organ of Corti transduce basilar membrane movement into neural signals through stereocilia deflection.", ["special senses", "hearing"], "NEET"],
  ["physiology", "Temperature regulation", "Where is the main thermoregulatory center?", "The hypothalamus integrates thermal signals; anterior hypothalamus promotes heat loss and posterior hypothalamus supports heat conservation.", ["temperature", "hypothalamus"], "NEET"],
  ["physiology", "Exercise physiology", "What happens to arteriovenous oxygen difference during exercise?", "It increases because active muscles extract more oxygen from delivered blood.", ["exercise", "cardiorespiratory"], "AIIMS"],
].map((item, index) => ({
  id: `phys-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/physiology",
}));

const biochemistryExpansionCards = [
  ["biochemistry", "Biomolecule monomers", "Match major biomolecules with their monomeric units.", "Proteins are built from amino acids, nucleic acids from nucleotides, polysaccharides from monosaccharides, and many lipids from fatty acids plus alcohol backbones.", ["biomolecules", "basics"], "NEET"],
  ["biochemistry", "Mitochondrial pathways", "Which major biochemical pathways occur in mitochondria?", "TCA cycle, beta oxidation, ketogenesis, parts of urea cycle, oxidative phosphorylation, and early heme synthesis steps occur in mitochondria.", ["cell biology", "metabolism"], "AIIMS, NEET"],
  ["biochemistry", "Lysosomal enzymes", "What is the biochemical basis of lysosomal storage disorders?", "Defective lysosomal hydrolases or trafficking causes substrate accumulation inside lysosomes, producing organ dysfunction.", ["cell biology", "lysosome"], "AIIMS"],
  ["biochemistry", "Peroxisome functions", "Name key functions of peroxisomes.", "Peroxisomes contain catalase, oxidize very-long-chain fatty acids, and help synthesize plasmalogens and bile acid intermediates.", ["cell biology", "peroxisome"], "NEET"],
  ["biochemistry", "Glycocalyx", "Why are membrane carbohydrates important?", "Glycoproteins and glycolipids contribute to cell recognition, receptors, antigenicity, adhesion, and membrane protection.", ["carbohydrates", "cell membrane"], "NEET"],
  ["biochemistry", "Reducing sugars", "What makes a sugar reducing?", "A sugar is reducing if it has a free anomeric carbon capable of reducing mild oxidizing agents.", ["carbohydrates", "chemistry"], "NEET"],
  ["biochemistry", "Lactose intolerance", "What is the biochemical defect in lactose intolerance?", "Low intestinal lactase leaves lactose unabsorbed, causing osmotic diarrhea, bloating, and bacterial fermentation symptoms.", ["carbohydrates", "digestion"], "AIIMS"],
  ["biochemistry", "Glycosaminoglycans", "Why are GAGs clinically important?", "GAGs are negatively charged extracellular matrix polysaccharides; defective degradation causes mucopolysaccharidoses.", ["carbohydrates", "GAG"], "NEET"],
  ["biochemistry", "Glycolysis rate-limiting step", "Which enzyme is the committed rate-limiting enzyme of glycolysis?", "Phosphofructokinase-1 is activated by AMP and fructose-2,6-bisphosphate and inhibited by ATP and citrate.", ["carbohydrate metabolism", "glycolysis"], "AIIMS, NEET"],
  ["biochemistry", "Anaerobic glycolysis", "Why is lactate formed in anaerobic glycolysis?", "Lactate dehydrogenase regenerates NAD+ from NADH, allowing glycolysis to continue without sufficient oxygen.", ["carbohydrate metabolism", "glycolysis"], "NEET"],
  ["biochemistry", "Pyruvate dehydrogenase", "What cofactors are required by pyruvate dehydrogenase complex?", "Thiamine pyrophosphate, lipoic acid, CoA, FAD, and NAD+ are required.", ["carbohydrate metabolism", "TCA"], "AIIMS"],
  ["biochemistry", "TCA energy yield", "What does one turn of TCA cycle generate per acetyl-CoA?", "Three NADH, one FADH2, one GTP, and two CO2 are produced per acetyl-CoA.", ["carbohydrate metabolism", "TCA"], "NEET"],
  ["biochemistry", "HMP shunt functions", "What are the main functions of HMP shunt?", "It generates NADPH for reductive synthesis and antioxidant defense, and ribose-5-phosphate for nucleotide synthesis.", ["carbohydrate metabolism", "HMP shunt"], "AIIMS, NEET"],
  ["biochemistry", "G6PD deficiency", "Why does G6PD deficiency cause hemolysis?", "Reduced NADPH impairs glutathione regeneration, making RBCs vulnerable to oxidative stress.", ["carbohydrate metabolism", "RBC"], "NEET"],
  ["biochemistry", "Glycogen phosphorylase", "Which enzyme releases glucose-1-phosphate from glycogen?", "Glycogen phosphorylase cleaves alpha-1,4 linkages to release glucose-1-phosphate.", ["carbohydrate metabolism", "glycogen"], "NEET"],
  ["biochemistry", "Von Gierke disease", "Which enzyme deficiency causes von Gierke disease?", "Glucose-6-phosphatase deficiency causes severe fasting hypoglycemia, lactic acidosis, hyperuricemia, and hepatomegaly.", ["carbohydrate metabolism", "glycogen storage"], "AIIMS"],
  ["biochemistry", "Cori cycle", "What is the Cori cycle?", "Muscle or RBC lactate travels to liver, is converted to glucose by gluconeogenesis, and returns to peripheral tissues.", ["integration", "carbohydrates"], "NEET", ["Lactate", "Liver gluconeogenesis", "Glucose", "Peripheral glycolysis"]],
  ["biochemistry", "Essential fatty acids", "Name essential fatty acids.", "Linoleic acid and alpha-linolenic acid are essential fatty acids; arachidonic acid is conditionally essential when linoleic acid is deficient.", ["lipids", "fatty acids"], "NEET"],
  ["biochemistry", "Beta oxidation steps", "What is the repeating sequence of beta oxidation?", "Oxidation, hydration, oxidation, and thiolysis shorten fatty acyl-CoA by two carbons each cycle.", ["lipid metabolism", "beta oxidation"], "AIIMS, NEET"],
  ["biochemistry", "Carnitine shuttle", "Why is carnitine required for fatty acid oxidation?", "Long-chain fatty acyl groups need the carnitine shuttle to enter mitochondrial matrix for beta oxidation.", ["lipid metabolism", "carnitine"], "NEET"],
  ["biochemistry", "Ketone bodies", "When does ketogenesis increase?", "Ketogenesis increases during fasting, uncontrolled diabetes, prolonged exercise, and low-carbohydrate states when hepatic acetyl-CoA exceeds TCA capacity.", ["lipid metabolism", "ketones"], "NEET"],
  ["biochemistry", "HMG-CoA reductase", "What is the rate-limiting enzyme of cholesterol synthesis?", "HMG-CoA reductase is the rate-limiting enzyme and target of statins.", ["lipid metabolism", "cholesterol"], "AIIMS, NEET"],
  ["biochemistry", "Lipoprotein ApoB48", "Which lipoprotein contains ApoB48?", "Chylomicrons contain ApoB48 and transport dietary triglycerides from intestine.", ["lipid metabolism", "lipoproteins"], "NEET"],
  ["biochemistry", "ApoC-II", "What is the function of ApoC-II?", "ApoC-II activates lipoprotein lipase for hydrolysis of triglycerides in chylomicrons and VLDL.", ["lipid metabolism", "lipoproteins"], "AIIMS"],
  ["biochemistry", "ApoE", "What is the function of ApoE?", "ApoE mediates hepatic uptake of chylomicron remnants and IDL/remnant particles.", ["lipid metabolism", "lipoproteins"], "NEET"],
  ["biochemistry", "Fatty acid synthesis", "Where does fatty acid synthesis occur and what reducing power is used?", "It occurs in cytosol and uses NADPH, mainly from HMP shunt and malic enzyme.", ["lipid metabolism", "fatty acid synthesis"], "NEET"],
  ["biochemistry", "Protein structure", "What bonds stabilize primary, secondary, tertiary, and quaternary protein structure?", "Primary: peptide bonds. Secondary: hydrogen bonds. Tertiary: hydrophobic, ionic, hydrogen, disulfide interactions. Quaternary: subunit interactions.", ["proteins", "structure"], "NEET"],
  ["biochemistry", "Collagen hydroxylation", "Which nutrients are important for collagen synthesis?", "Vitamin C is needed for proline/lysine hydroxylation; copper is needed for lysyl oxidase-mediated cross-linking.", ["proteins", "collagen"], "AIIMS"],
  ["biochemistry", "Phenylketonuria", "What is the biochemical defect in classic PKU?", "Phenylalanine hydroxylase deficiency, or less commonly BH4 deficiency, reduces conversion of phenylalanine to tyrosine.", ["amino acid metabolism", "inborn errors"], "NEET"],
  ["biochemistry", "Maple syrup urine disease", "Which enzyme complex is deficient in MSUD?", "Branched-chain alpha-ketoacid dehydrogenase deficiency impairs metabolism of leucine, isoleucine, and valine.", ["amino acid metabolism", "inborn errors"], "AIIMS"],
  ["biochemistry", "Homocystinuria", "Name common causes of homocystinuria.", "Cystathionine beta-synthase deficiency or defects in remethylation pathways can raise homocysteine.", ["amino acid metabolism", "sulfur amino acids"], "NEET"],
  ["biochemistry", "Alkaptonuria", "What accumulates in alkaptonuria?", "Homogentisic acid accumulates due to homogentisate oxidase deficiency, causing dark urine and ochronosis.", ["amino acid metabolism", "inborn errors"], "NEET"],
  ["biochemistry", "Urea cycle location", "Which urea cycle steps occur in mitochondria?", "Carbamoyl phosphate synthetase I and ornithine transcarbamylase steps occur in mitochondria; later steps occur in cytosol.", ["amino acid metabolism", "urea cycle"], "AIIMS"],
  ["biochemistry", "CPS-I activator", "What activates carbamoyl phosphate synthetase I?", "N-acetylglutamate activates CPS-I, linking urea cycle activity to amino acid load.", ["amino acid metabolism", "urea cycle"], "NEET"],
  ["biochemistry", "Purine salvage", "Which enzymes are important in purine salvage?", "HGPRT salvages hypoxanthine and guanine; APRT salvages adenine.", ["nucleotides", "purines"], "NEET"],
  ["biochemistry", "Gout biochemistry", "What is the biochemical basis of gout?", "Hyperuricemia leads to monosodium urate crystal deposition; uric acid is the final product of purine degradation in humans.", ["nucleotides", "purines"], "AIIMS"],
  ["biochemistry", "Orotic aciduria", "Which defect causes hereditary orotic aciduria?", "UMP synthase deficiency impairs pyrimidine synthesis, causing orotic aciduria and megaloblastic anemia without hyperammonemia.", ["nucleotides", "pyrimidines"], "NEET"],
  ["biochemistry", "Ribonucleotide reductase", "What does ribonucleotide reductase do?", "It converts ribonucleotides to deoxyribonucleotides and requires thioredoxin/NADPH systems.", ["nucleotides", "DNA synthesis"], "AIIMS"],
  ["biochemistry", "Enzyme classes", "List the six major enzyme classes.", "Oxidoreductases, transferases, hydrolases, lyases, isomerases, and ligases.", ["enzymes", "classification"], "NEET"],
  ["biochemistry", "Holoenzyme", "Define holoenzyme.", "A holoenzyme is the active enzyme complex consisting of apoenzyme plus required cofactor or coenzyme.", ["enzymes", "cofactors"], "NEET"],
  ["biochemistry", "Km meaning", "What does Km represent?", "Km is the substrate concentration at half Vmax and inversely reflects apparent substrate affinity in Michaelis-Menten kinetics.", ["enzymes", "kinetics"], "AIIMS, NEET"],
  ["biochemistry", "Competitive inhibition", "How does competitive inhibition affect Km and Vmax?", "Competitive inhibition increases apparent Km while Vmax is unchanged if substrate concentration is high enough.", ["enzymes", "inhibition"], "NEET"],
  ["biochemistry", "Noncompetitive inhibition", "How does pure noncompetitive inhibition affect Km and Vmax?", "Vmax decreases while Km remains unchanged in pure noncompetitive inhibition.", ["enzymes", "inhibition"], "AIIMS"],
  ["biochemistry", "Allosteric enzymes", "What is a key feature of allosteric enzymes?", "They often have multiple subunits, regulatory sites, and sigmoid substrate-velocity curves.", ["enzymes", "regulation"], "NEET"],
  ["biochemistry", "Isoenzymes", "Why are isoenzymes clinically useful?", "Tissue-specific isoenzyme patterns help localize organ injury, such as cardiac, liver, bone, or muscle damage.", ["enzymes", "clinical biochemistry"], "NEET"],
  ["biochemistry", "Thiamine deficiency", "Which enzymes require thiamine pyrophosphate?", "Pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, branched-chain ketoacid dehydrogenase, and transketolase require TPP.", ["vitamins", "B1"], "AIIMS, NEET"],
  ["biochemistry", "Riboflavin coenzymes", "What are riboflavin coenzyme forms?", "FMN and FAD are riboflavin-derived coenzymes used in redox reactions.", ["vitamins", "B2"], "NEET"],
  ["biochemistry", "Niacin deficiency", "What are the classic features of pellagra?", "Dermatitis, diarrhea, dementia, and death in severe untreated niacin deficiency.", ["vitamins", "B3"], "NEET"],
  ["biochemistry", "Biotin role", "Which reactions require biotin?", "Biotin is a cofactor for carboxylation reactions such as pyruvate carboxylase, acetyl-CoA carboxylase, and propionyl-CoA carboxylase.", ["vitamins", "biotin"], "AIIMS"],
  ["biochemistry", "Folate trap", "What is the methyl-folate trap?", "Vitamin B12 deficiency traps folate as methyl-THF, impairing DNA synthesis and causing megaloblastic anemia.", ["vitamins", "folate B12"], "AIIMS"],
  ["biochemistry", "Vitamin K", "What does vitamin K do?", "Vitamin K enables gamma-carboxylation of glutamate residues in clotting factors II, VII, IX, X and proteins C and S.", ["vitamins", "K"], "NEET"],
  ["biochemistry", "Vitamin D activation", "Where is vitamin D activated?", "Vitamin D is 25-hydroxylated in liver and 1-alpha hydroxylated in kidney to form active calcitriol.", ["vitamins", "D"], "NEET"],
  ["biochemistry", "Hemoglobin oxygen binding", "What causes cooperative oxygen binding by hemoglobin?", "Hemoglobin subunit interactions allow oxygen binding to one heme to increase affinity at remaining heme sites.", ["hemoglobin", "oxygen"], "NEET"],
  ["biochemistry", "2,3-BPG", "How does 2,3-BPG affect hemoglobin?", "2,3-BPG decreases hemoglobin oxygen affinity and shifts the dissociation curve right, promoting tissue oxygen delivery.", ["hemoglobin", "oxygen"], "AIIMS"],
  ["biochemistry", "Heme synthesis rate-limiting step", "What is the rate-limiting step of heme synthesis?", "ALA synthase catalyzes glycine plus succinyl-CoA to ALA and is inhibited by heme.", ["heme", "porphyrins"], "NEET"],
  ["biochemistry", "Lead poisoning enzymes", "Which heme synthesis enzymes are inhibited by lead?", "Lead inhibits ALA dehydratase and ferrochelatase.", ["heme", "toxicology"], "AIIMS"],
  ["biochemistry", "Unconjugated bilirubin", "Why is unconjugated bilirubin water-insoluble?", "It is hydrophobic and circulates bound to albumin until hepatic uptake and conjugation with glucuronic acid.", ["bilirubin", "liver"], "NEET"],
  ["biochemistry", "Conjugated hyperbilirubinemia", "What does conjugated bilirubin in urine suggest?", "Conjugated bilirubin is water-soluble, so bilirubinuria suggests conjugated hyperbilirubinemia from hepatobiliary disease or obstruction.", ["bilirubin", "liver"], "NEET"],
  ["biochemistry", "Liver function tests", "Which lab pattern suggests cholestasis?", "Disproportionately elevated alkaline phosphatase and GGT with conjugated bilirubin suggests cholestasis.", ["organ function tests", "liver"], "AIIMS"],
  ["biochemistry", "Renal function tests", "Why is creatinine used to estimate GFR?", "Creatinine is produced at a relatively steady rate and is mainly filtered, so serum creatinine and clearance approximate renal filtration.", ["organ function tests", "kidney"], "NEET"],
  ["biochemistry", "Acid-base Henderson", "What does Henderson-Hasselbalch equation relate?", "It relates pH to pKa and the ratio of conjugate base to weak acid, explaining buffer behavior.", ["acid-base", "buffers"], "NEET"],
  ["biochemistry", "Anion gap", "How is anion gap calculated?", "Anion gap is commonly calculated as sodium minus chloride plus bicarbonate.", ["acid-base", "clinical biochemistry"], "AIIMS, NEET"],
  ["biochemistry", "DNA replication direction", "In which direction is DNA synthesized?", "DNA polymerases synthesize new DNA in the 5 prime to 3 prime direction while reading template 3 prime to 5 prime.", ["molecular biology", "DNA"], "NEET"],
  ["biochemistry", "Okazaki fragments", "Why are Okazaki fragments formed?", "The lagging strand is synthesized discontinuously because DNA polymerase can extend only 5 prime to 3 prime.", ["molecular biology", "DNA"], "AIIMS"],
  ["biochemistry", "DNA repair xeroderma", "Which repair defect causes xeroderma pigmentosum?", "Defective nucleotide excision repair impairs removal of UV-induced pyrimidine dimers.", ["molecular biology", "DNA repair"], "NEET"],
  ["biochemistry", "Transcription enzyme", "Which enzyme synthesizes RNA from DNA?", "RNA polymerase synthesizes RNA using DNA as template.", ["molecular biology", "transcription"], "NEET"],
  ["biochemistry", "Translation initiation codon", "What is the usual start codon for translation?", "AUG is the start codon and codes for methionine in eukaryotic protein synthesis.", ["molecular biology", "translation"], "NEET"],
  ["biochemistry", "Lac operon concept", "What is the core idea of operon regulation?", "Gene expression is coordinated by regulatory DNA sequences and proteins that turn related genes on or off according to metabolic need.", ["molecular biology", "gene regulation"], "AIIMS"],
  ["biochemistry", "PCR", "What are the basic steps of PCR?", "Denaturation, primer annealing, and extension are repeated to amplify a target DNA sequence.", ["molecular biology", "biotechnology"], "NEET", ["Denaturation", "Annealing", "Extension", "Amplification"]],
  ["biochemistry", "Western blot", "What does Western blot detect?", "Western blot detects specific proteins using antibodies.", ["molecular biology", "lab tools"], "NEET"],
  ["biochemistry", "ELISA", "What is ELISA used for?", "ELISA detects antigens or antibodies using enzyme-linked detection systems and is used in many diagnostic assays.", ["molecular biology", "lab tools"], "AIIMS"],
  ["biochemistry", "Fed state insulin", "Which pathways dominate in the fed state?", "Glycogenesis, glycolysis, lipogenesis, protein synthesis, and storage pathways dominate under insulin influence.", ["integration", "fed state"], "NEET"],
  ["biochemistry", "Fasting metabolism", "Which fuels dominate during prolonged fasting?", "Liver produces glucose initially and ketone bodies later; brain increasingly uses ketones while RBCs remain glucose-dependent.", ["integration", "fasting"], "AIIMS, NEET"],
  ["biochemistry", "Diabetes biochemical changes", "Name key biochemical features of uncontrolled diabetes mellitus.", "Hyperglycemia, glycosuria, increased lipolysis, ketogenesis, protein catabolism, dehydration, and electrolyte disturbances can occur.", ["integration", "diabetes"], "NEET"],
  ["biochemistry", "Free radicals", "Name important antioxidant defenses.", "Superoxide dismutase, catalase, glutathione peroxidase, vitamins E and C, carotenoids, and glutathione are key defenses.", ["free radicals", "antioxidants"], "NEET"],
  ["biochemistry", "Xenobiotic metabolism", "What are phase I and phase II detoxification reactions?", "Phase I introduces or exposes functional groups, often by cytochrome P450. Phase II conjugates molecules to increase water solubility.", ["xenobiotics", "detoxification"], "AIIMS"],
  ["biochemistry", "Kwashiorkor vs marasmus", "Differentiate kwashiorkor and marasmus biochemically.", "Kwashiorkor is protein deficiency with edema and fatty liver; marasmus is severe calorie deficiency with wasting and little edema.", ["nutrition", "PEM"], "NEET"],
  ["biochemistry", "Nitrogen balance", "When is nitrogen balance positive?", "Positive nitrogen balance occurs in growth, pregnancy, recovery, and anabolic states when intake exceeds loss.", ["nutrition", "protein"], "NEET"],
].map((item, index) => ({
  id: `biochem-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/biochemistry",
}));

const pathologyExpansionCards = [
  ["pathology", "Reversible cell injury", "What are classic microscopic features of reversible cell injury?", "Cell swelling and fatty change are classic reversible injury patterns before irreversible membrane and nuclear damage occur.", ["cell injury", "general pathology"], "NEET"],
  ["pathology", "Irreversible cell injury", "What changes suggest irreversible cell injury?", "Severe membrane damage, mitochondrial dysfunction, lysosomal rupture, and nuclear changes such as pyknosis, karyorrhexis, and karyolysis suggest irreversibility.", ["cell injury", "necrosis"], "AIIMS, NEET"],
  ["pathology", "Coagulative necrosis", "Where is coagulative necrosis classically seen?", "It is typical of ischemic infarcts in solid organs except brain, with preserved tissue architecture initially.", ["cell injury", "necrosis"], "NEET"],
  ["pathology", "Liquefactive necrosis", "Where is liquefactive necrosis seen?", "It is seen in brain infarcts and abscesses, where enzymatic digestion creates liquid debris.", ["cell injury", "necrosis"], "AIIMS"],
  ["pathology", "Caseous necrosis", "Which disease classically shows caseous necrosis?", "Tuberculosis classically produces caseating granulomas with cheese-like necrotic centers.", ["cell injury", "granuloma"], "NEET"],
  ["pathology", "Fat necrosis", "What is enzymatic fat necrosis associated with?", "Acute pancreatitis can release lipases that digest fat, producing chalky calcium soaps by saponification.", ["cell injury", "necrosis"], "AIIMS"],
  ["pathology", "Apoptosis pathways", "Name the two major apoptosis pathways.", "Intrinsic mitochondrial pathway and extrinsic death receptor pathway activate caspases to produce controlled cell death.", ["cell injury", "apoptosis"], "NEET"],
  ["pathology", "Autophagy", "What is autophagy?", "Autophagy is lysosomal degradation of a cell's own components, often as an adaptive survival response to nutrient deprivation.", ["cell injury", "adaptation"], "AIIMS"],
  ["pathology", "Cellular adaptations", "List the main cellular adaptations.", "Hypertrophy, hyperplasia, atrophy, and metaplasia are the major adaptive responses to stress.", ["cell adaptation", "general pathology"], "NEET"],
  ["pathology", "Metaplasia risk", "Why is squamous metaplasia clinically important?", "It is an adaptive change that may be reversible, but persistent irritation can predispose to dysplasia and carcinoma.", ["cell adaptation", "metaplasia"], "AIIMS"],
  ["pathology", "Acute inflammation signs", "What causes the cardinal signs of acute inflammation?", "Vasodilation causes redness and heat; increased permeability causes swelling; mediators and pressure cause pain; tissue damage causes loss of function.", ["inflammation", "acute"], "NEET"],
  ["pathology", "Leukocyte recruitment", "What is the sequence of leukocyte recruitment?", "Margination, rolling, adhesion, transmigration, chemotaxis, phagocytosis, and killing.", ["inflammation", "leukocytes"], "NEET", ["Margination", "Rolling", "Adhesion", "Transmigration"]],
  ["pathology", "Selectins", "What do selectins mediate in inflammation?", "Selectins mediate leukocyte rolling on activated endothelium.", ["inflammation", "adhesion"], "AIIMS"],
  ["pathology", "Integrins", "What do integrins mediate in leukocyte recruitment?", "Activated leukocyte integrins bind endothelial adhesion molecules to produce firm adhesion.", ["inflammation", "adhesion"], "NEET"],
  ["pathology", "Neutrophil killing", "Name oxygen-dependent killing mechanisms in neutrophils.", "NADPH oxidase generates superoxide; myeloperoxidase converts hydrogen peroxide and chloride into hypochlorous acid.", ["inflammation", "phagocytosis"], "AIIMS"],
  ["pathology", "Chronic granuloma", "What defines granulomatous inflammation?", "Aggregates of activated macrophages, often epithelioid cells and giant cells, form in response to persistent difficult-to-eradicate stimuli.", ["inflammation", "granuloma"], "NEET"],
  ["pathology", "Langhans giant cell", "Describe a Langhans giant cell.", "It is a multinucleated giant cell with peripheral horseshoe-like arrangement of nuclei, often seen in tuberculous granulomas.", ["inflammation", "granuloma"], "AIIMS"],
  ["pathology", "Wound healing phases", "List wound healing phases.", "Hemostasis, inflammation, proliferation with granulation tissue, and remodeling with scar maturation.", ["repair", "wound healing"], "NEET"],
  ["pathology", "Granulation tissue", "What is granulation tissue composed of?", "New capillaries, proliferating fibroblasts, inflammatory cells, and loose extracellular matrix.", ["repair", "wound healing"], "NEET"],
  ["pathology", "Keloid", "What is the pathology of keloid?", "Excess collagen deposition extends beyond original wound margins due to abnormal scar formation.", ["repair", "scar"], "AIIMS"],
  ["pathology", "Edema mechanisms", "Name major mechanisms of edema.", "Increased hydrostatic pressure, reduced plasma oncotic pressure, lymphatic obstruction, sodium retention, and inflammation-related permeability.", ["hemodynamics", "edema"], "NEET"],
  ["pathology", "Transudate vs exudate", "Differentiate transudate and exudate.", "Transudate is low-protein fluid from hydrostatic/oncotic imbalance; exudate is protein-rich inflammatory fluid from increased vascular permeability.", ["hemodynamics", "edema"], "NEET"],
  ["pathology", "Virchow triad expanded", "How do Virchow triad components promote thrombosis?", "Endothelial injury exposes thrombogenic surfaces, abnormal flow disrupts laminar dilution, and hypercoagulability increases clotting tendency.", ["hemodynamics", "thrombosis"], "AIIMS, NEET"],
  ["pathology", "Lines of Zahn", "What are lines of Zahn?", "Alternating pale platelet-fibrin and dark RBC layers in thrombi formed in flowing blood, helping distinguish antemortem thrombus from clot.", ["hemodynamics", "thrombosis"], "AIIMS"],
  ["pathology", "DVT risk", "Name common risk factors for deep venous thrombosis.", "Stasis, surgery, immobilization, malignancy, pregnancy, oral contraceptives, inherited thrombophilia, and heart failure increase DVT risk.", ["hemodynamics", "thrombosis"], "NEET"],
  ["pathology", "Pulmonary embolism source", "What is the most common source of pulmonary thromboembolism?", "Deep veins of lower limb, especially above-knee veins, are the usual source.", ["hemodynamics", "embolism"], "NEET"],
  ["pathology", "Fat embolism syndrome", "What triad suggests fat embolism syndrome?", "Respiratory distress, neurologic symptoms, and petechial rash after long-bone fracture suggest fat embolism syndrome.", ["hemodynamics", "embolism"], "AIIMS"],
  ["pathology", "Infarct color", "When are infarcts red versus pale?", "Red infarcts occur in venous occlusion, loose tissues, dual blood supply, or reperfusion; pale infarcts occur in solid organs with end-arterial circulation.", ["hemodynamics", "infarction"], "NEET"],
  ["pathology", "Shock types", "Classify shock by mechanism.", "Shock may be cardiogenic, hypovolemic, septic, neurogenic, or anaphylactic depending on pump failure, volume loss, vasodilation, or immune mediator effects.", ["hemodynamics", "shock"], "NEET"],
  ["pathology", "DIC", "What is disseminated intravascular coagulation?", "Systemic activation of coagulation causes widespread microthrombi with consumption of platelets and clotting factors, leading to bleeding and organ dysfunction.", ["hemodynamics", "DIC"], "AIIMS"],
  ["pathology", "Amyloidosis stain", "Which stain demonstrates amyloid?", "Congo red stain shows apple-green birefringence under polarized light.", ["protein deposition", "amyloid"], "NEET"],
  ["pathology", "AL vs AA amyloid", "Differentiate AL and AA amyloid.", "AL is derived from immunoglobulin light chains, often plasma cell dyscrasia; AA derives from serum amyloid A in chronic inflammation.", ["protein deposition", "amyloid"], "AIIMS"],
  ["pathology", "Hypersensitivity type I", "What mediates type I hypersensitivity?", "IgE-mediated mast cell degranulation with histamine and lipid mediators produces immediate allergy or anaphylaxis.", ["immunopathology", "hypersensitivity"], "NEET"],
  ["pathology", "Hypersensitivity type III", "What is type III hypersensitivity?", "Immune complex deposition activates complement and inflammation, causing diseases such as serum sickness and some vasculitides.", ["immunopathology", "hypersensitivity"], "AIIMS"],
  ["pathology", "SLE marker", "Which antibodies are specific for SLE?", "Anti-dsDNA and anti-Smith antibodies are relatively specific; anti-dsDNA also correlates with lupus nephritis activity.", ["immunopathology", "autoimmune"], "NEET"],
  ["pathology", "Transplant rejection", "Differentiate hyperacute and acute rejection.", "Hyperacute rejection is preformed antibody-mediated and occurs minutes to hours; acute rejection occurs days to months and may be cellular or antibody-mediated.", ["immunopathology", "transplant"], "AIIMS"],
  ["pathology", "Benign vs malignant", "List key differences between benign and malignant tumors.", "Benign tumors are well differentiated, slow growing, localized, and noninvasive; malignant tumors invade, metastasize, and show variable anaplasia.", ["neoplasia", "tumors"], "NEET"],
  ["pathology", "Carcinoma spread", "How do carcinomas and sarcomas usually spread?", "Carcinomas commonly spread by lymphatics, while sarcomas more often spread hematogenously.", ["neoplasia", "metastasis"], "AIIMS, NEET"],
  ["pathology", "Tumor grading vs staging", "Differentiate tumor grade and stage.", "Grade describes differentiation/anaplasia; stage describes extent of spread and is usually more important prognostically.", ["neoplasia", "grading staging"], "NEET"],
  ["pathology", "Oncogenes", "What is the effect of oncogene activation?", "Gain-of-function mutations in proto-oncogenes promote growth signaling, survival, or proliferation.", ["neoplasia", "molecular"], "NEET"],
  ["pathology", "Tumor suppressor genes", "What is the two-hit hypothesis?", "Both alleles of a tumor suppressor gene often need inactivation for loss of growth control, classically RB.", ["neoplasia", "molecular"], "AIIMS"],
  ["pathology", "p53", "Why is p53 called guardian of the genome?", "p53 responds to DNA damage by inducing cell-cycle arrest, DNA repair, senescence, or apoptosis.", ["neoplasia", "molecular"], "NEET"],
  ["pathology", "Angiogenesis in tumors", "Why do tumors induce angiogenesis?", "Growing tumors need new vessels for oxygen and nutrients; VEGF is a major pro-angiogenic factor.", ["neoplasia", "angiogenesis"], "NEET"],
  ["pathology", "Paraneoplastic syndromes", "Give examples of paraneoplastic syndromes.", "Ectopic hormone production, hypercalcemia, Cushing syndrome, SIADH, migratory thrombophlebitis, and neuromuscular syndromes can occur.", ["neoplasia", "clinical"], "AIIMS"],
  ["pathology", "Iron deficiency anemia", "What is the typical blood picture in iron deficiency anemia?", "Microcytic hypochromic anemia with low ferritin, high TIBC, and raised RDW is typical.", ["hematology", "anemia"], "NEET"],
  ["pathology", "Megaloblastic anemia", "What causes megaloblastic morphology?", "Impaired DNA synthesis from vitamin B12 or folate deficiency causes nuclear-cytoplasmic asynchrony and macro-ovalocytes.", ["hematology", "anemia"], "AIIMS"],
  ["pathology", "Anemia of chronic disease", "What is the mechanism of anemia of chronic disease?", "Inflammation increases hepcidin, trapping iron in macrophages and reducing intestinal absorption.", ["hematology", "anemia"], "NEET"],
  ["pathology", "Sickle cell disease", "What mutation causes sickle cell disease?", "A beta-globin point mutation substitutes valine for glutamic acid at position 6, promoting HbS polymerization when deoxygenated.", ["hematology", "hemoglobinopathy"], "NEET"],
  ["pathology", "Hereditary spherocytosis", "What is the defect in hereditary spherocytosis?", "RBC membrane cytoskeleton defects such as spectrin or ankyrin deficiency cause spherocytes and extravascular hemolysis.", ["hematology", "hemolysis"], "AIIMS"],
  ["pathology", "ITP", "What is immune thrombocytopenic purpura?", "Autoantibodies against platelet membrane glycoproteins cause splenic platelet destruction and isolated thrombocytopenia.", ["hematology", "bleeding"], "NEET"],
  ["pathology", "Hemophilia A", "Which factor is deficient in hemophilia A?", "Factor VIII deficiency causes deep tissue bleeding with prolonged aPTT and normal platelet count.", ["hematology", "coagulation"], "NEET"],
  ["pathology", "CML marker", "What is the defining molecular lesion of CML?", "BCR-ABL fusion from t(9;22), the Philadelphia chromosome, causes constitutive tyrosine kinase signaling.", ["hematology", "leukemia"], "AIIMS, NEET"],
  ["pathology", "AML Auer rods", "What are Auer rods?", "Needle-like azurophilic granules in myeloblasts, classically seen in AML.", ["hematology", "leukemia"], "NEET"],
  ["pathology", "CLL smear", "What smear finding is associated with CLL?", "Smudge cells are fragile disrupted lymphocytes commonly seen in CLL smears.", ["hematology", "leukemia"], "AIIMS"],
  ["pathology", "Hodgkin lymphoma", "What cell is characteristic of classical Hodgkin lymphoma?", "Reed-Sternberg cell, a large atypical cell with prominent nucleoli, is characteristic.", ["hematology", "lymphoma"], "NEET"],
  ["pathology", "Multiple myeloma", "Name classic features of multiple myeloma.", "CRAB features: hyperCalcemia, Renal dysfunction, Anemia, and Bone lesions, often with monoclonal protein.", ["hematology", "plasma cell"], "AIIMS"],
  ["pathology", "Atherosclerosis lesion", "What is the basic lesion of atherosclerosis?", "An intimal atheromatous plaque with lipid core, inflammatory cells, smooth muscle cells, and fibrous cap.", ["cardiovascular", "vessels"], "NEET"],
  ["pathology", "Aortic dissection", "Which condition strongly predisposes to aortic dissection?", "Hypertension is the most common risk factor; connective tissue disorders also predispose in younger patients.", ["cardiovascular", "aorta"], "AIIMS"],
  ["pathology", "MI timing", "When do gross changes of myocardial infarction become apparent?", "Gross changes are usually not obvious in the first several hours; coagulative necrosis and neutrophils evolve over the first 1 to 3 days.", ["cardiovascular", "MI"], "NEET"],
  ["pathology", "Rheumatic heart disease", "What are Aschoff bodies?", "Granulomatous inflammatory lesions in rheumatic myocarditis, containing activated macrophages called Anitschkow cells.", ["cardiovascular", "rheumatic fever"], "AIIMS"],
  ["pathology", "Infective endocarditis", "What are vegetations in infective endocarditis?", "Bulky friable masses of fibrin, inflammatory cells, and organisms on valves that can destroy tissue and embolize.", ["cardiovascular", "endocarditis"], "NEET"],
  ["pathology", "ARDS pathology", "What is the characteristic histology of ARDS?", "Diffuse alveolar damage with hyaline membranes is characteristic.", ["respiratory", "ARDS"], "AIIMS, NEET"],
  ["pathology", "Emphysema", "Define emphysema pathologically.", "Permanent enlargement of airspaces distal to terminal bronchioles with destruction of alveolar walls and little fibrosis.", ["respiratory", "COPD"], "NEET"],
  ["pathology", "Chronic bronchitis", "Define chronic bronchitis clinically.", "Productive cough for at least 3 months in each of 2 consecutive years after excluding other causes.", ["respiratory", "COPD"], "NEET"],
  ["pathology", "Bronchiectasis", "What is bronchiectasis?", "Permanent dilation of bronchi due to destruction of airway wall from chronic necrotizing infection or obstruction.", ["respiratory", "airway"], "AIIMS"],
  ["pathology", "Lobar pneumonia", "What are stages of lobar pneumonia?", "Congestion, red hepatization, gray hepatization, and resolution.", ["respiratory", "infection"], "NEET", ["Congestion", "Red hepatization", "Gray hepatization", "Resolution"]],
  ["pathology", "TB primary complex", "What is Ghon complex?", "A subpleural lung focus with involved draining hilar lymph nodes in primary tuberculosis.", ["respiratory", "TB"], "AIIMS"],
  ["pathology", "Lung cancer smoking", "Which lung cancers are strongly associated with smoking?", "Squamous cell carcinoma and small cell carcinoma have strong smoking associations.", ["respiratory", "neoplasia"], "NEET"],
  ["pathology", "Nephritic syndrome pathology", "What is the basic lesion pattern in nephritic syndrome?", "Glomerular inflammation causes hematuria, RBC casts, reduced GFR, oliguria, hypertension, and azotemia.", ["renal", "glomerular"], "NEET"],
  ["pathology", "Minimal change disease", "What is the ultrastructural lesion in minimal change disease?", "Diffuse effacement of podocyte foot processes on electron microscopy.", ["renal", "nephrotic"], "AIIMS"],
  ["pathology", "Membranous nephropathy", "What is the immune deposit pattern in membranous nephropathy?", "Subepithelial immune deposits produce granular immunofluorescence and spike-and-dome appearance.", ["renal", "nephrotic"], "NEET"],
  ["pathology", "RPGN", "What is the characteristic morphology of rapidly progressive glomerulonephritis?", "Crescent formation in Bowman's space due to proliferation of parietal epithelial cells and macrophage influx.", ["renal", "glomerular"], "AIIMS"],
  ["pathology", "Acute tubular necrosis", "Name major causes of acute tubular necrosis.", "Ischemia and nephrotoxins are major causes; muddy brown granular casts are classically seen.", ["renal", "tubules"], "NEET"],
  ["pathology", "Barrett esophagus", "What is Barrett esophagus?", "Intestinal metaplasia of distal esophageal squamous mucosa due to chronic reflux, increasing adenocarcinoma risk.", ["GIT", "esophagus"], "NEET"],
  ["pathology", "Peptic ulcer", "Name major causes of peptic ulcer disease.", "Helicobacter pylori and NSAID use are the major causes.", ["GIT", "stomach"], "NEET"],
  ["pathology", "Crohn vs UC", "Differentiate Crohn disease and ulcerative colitis.", "Crohn has transmural skip lesions anywhere in GI tract; UC is continuous mucosal disease starting in rectum and limited to colon.", ["GIT", "IBD"], "AIIMS, NEET"],
  ["pathology", "Colorectal adenoma carcinoma sequence", "What is the adenoma-carcinoma sequence?", "Stepwise accumulation of mutations such as APC loss, KRAS activation, and p53 loss drives many colorectal cancers.", ["GIT", "colon cancer"], "AIIMS"],
  ["pathology", "Cirrhosis", "Define cirrhosis pathologically.", "Diffuse hepatic fibrosis with regenerative nodules and distorted vascular architecture.", ["liver", "cirrhosis"], "NEET"],
  ["pathology", "Councilman bodies", "What are Councilman bodies?", "Apoptotic hepatocytes seen in viral hepatitis and other liver injuries.", ["liver", "hepatitis"], "AIIMS"],
  ["pathology", "Alcoholic hepatitis", "Which inclusions are seen in alcoholic hepatitis?", "Mallory-Denk bodies are damaged intermediate filament aggregates in hepatocytes.", ["liver", "alcohol"], "NEET"],
  ["pathology", "Gallstones", "Name risk factors for cholesterol gallstones.", "Female sex, obesity, increasing age, pregnancy/estrogen, rapid weight loss, and certain ethnic backgrounds increase risk.", ["biliary", "gallstones"], "NEET"],
  ["pathology", "Hashimoto thyroiditis", "What is Hashimoto thyroiditis?", "Autoimmune thyroiditis with lymphoid infiltrates and Hurthle cell change, commonly causing hypothyroidism.", ["endocrine", "thyroid"], "NEET"],
  ["pathology", "Graves disease", "What antibody causes Graves disease?", "TSH receptor-stimulating antibodies cause diffuse hyperthyroidism.", ["endocrine", "thyroid"], "AIIMS"],
  ["pathology", "Papillary thyroid carcinoma", "Name classic nuclear features of papillary thyroid carcinoma.", "Orphan Annie eye nuclei, nuclear grooves, pseudoinclusions, and psammoma bodies are classic.", ["endocrine", "thyroid cancer"], "NEET"],
  ["pathology", "Diabetic microangiopathy", "What vascular lesion underlies many diabetic complications?", "Nonenzymatic glycation and basement membrane thickening contribute to diabetic microangiopathy.", ["endocrine", "diabetes"], "AIIMS"],
  ["pathology", "Fibrocystic change", "What is fibrocystic change of breast?", "A benign nonproliferative or proliferative breast change with cysts, fibrosis, and variable epithelial hyperplasia.", ["breast", "benign"], "NEET"],
  ["pathology", "Breast carcinoma spread", "Where does breast carcinoma commonly spread first?", "Axillary lymph nodes are common first nodal sites, though drainage varies by quadrant.", ["breast", "carcinoma"], "NEET"],
  ["pathology", "Cervical cancer precursor", "What is the precursor lesion of cervical squamous carcinoma?", "Cervical intraepithelial neoplasia linked to high-risk HPV, especially types 16 and 18.", ["female genital", "cervix"], "AIIMS, NEET"],
  ["pathology", "Hydatidiform mole", "What is a complete hydatidiform mole?", "An abnormal conception with diffuse villous swelling and trophoblastic proliferation, typically androgenetic diploid with no fetus.", ["female genital", "trophoblastic"], "AIIMS"],
  ["pathology", "Osteosarcoma morphology", "What is diagnostic of osteosarcoma?", "Malignant osteoid production by tumor cells is diagnostic.", ["bone", "tumors"], "NEET"],
  ["pathology", "Osteomyelitis", "Which organism commonly causes acute hematogenous osteomyelitis?", "Staphylococcus aureus is the most common cause.", ["bone", "infection"], "NEET"],
  ["pathology", "Meningioma", "What histologic bodies are associated with meningioma?", "Psammoma bodies may be seen in meningioma.", ["CNS", "tumors"], "AIIMS"],
  ["pathology", "Glioblastoma", "What histology suggests glioblastoma?", "Pseudopalisading necrosis and microvascular proliferation suggest glioblastoma.", ["CNS", "tumors"], "NEET"],
  ["pathology", "Basal cell carcinoma", "What is the behavior of basal cell carcinoma?", "It is locally invasive and destructive but rarely metastasizes.", ["skin", "cancer"], "NEET"],
  ["pathology", "Melanoma depth", "Which factor is most important for melanoma prognosis?", "Breslow thickness is a key prognostic factor.", ["skin", "melanoma"], "AIIMS"],
].map((item, index) => ({
  id: `path-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/pathology",
}));

const pharmacologyExpansionCards = [
  ["pharmacology", "Bioavailability", "Define bioavailability.", "Bioavailability is the fraction of an administered dose that reaches systemic circulation unchanged.", ["pharmacokinetics", "absorption"], "NEET"],
  ["pharmacology", "First-pass metabolism", "Which routes avoid first-pass hepatic metabolism?", "Intravenous, sublingual, transdermal, inhalational, and some rectal drug delivery can avoid or reduce first-pass metabolism.", ["pharmacokinetics", "routes"], "AIIMS, NEET"],
  ["pharmacology", "Volume of distribution", "What does high volume of distribution imply?", "A high Vd suggests extensive tissue binding or distribution outside plasma.", ["pharmacokinetics", "distribution"], "NEET"],
  ["pharmacology", "Clearance", "Define drug clearance.", "Clearance is the volume of plasma cleared of drug per unit time by elimination organs.", ["pharmacokinetics", "elimination"], "NEET"],
  ["pharmacology", "Half-life", "How many half-lives are needed to reach near steady state?", "About 4 to 5 half-lives are needed to reach approximately 94-97% steady state.", ["pharmacokinetics", "half-life"], "AIIMS"],
  ["pharmacology", "Loading dose", "What is the purpose of a loading dose?", "A loading dose rapidly achieves target plasma concentration, especially for drugs with long half-lives.", ["pharmacokinetics", "dosing"], "NEET"],
  ["pharmacology", "Maintenance dose", "What determines maintenance dose?", "Maintenance dosing depends mainly on clearance, target concentration, bioavailability, and dosing interval.", ["pharmacokinetics", "dosing"], "NEET"],
  ["pharmacology", "Zero-order kinetics", "Name drugs with zero-order or capacity-limited elimination.", "Phenytoin, ethanol, and high-dose aspirin are classic examples.", ["pharmacokinetics", "elimination"], "AIIMS, NEET"],
  ["pharmacology", "Therapeutic index", "What does therapeutic index indicate?", "It estimates the margin between effective and toxic doses; a narrow index requires closer monitoring.", ["pharmacodynamics", "safety"], "NEET"],
  ["pharmacology", "Potency vs efficacy", "Differentiate potency and efficacy.", "Potency is dose needed for effect; efficacy is maximal effect a drug can produce.", ["pharmacodynamics", "dose response"], "NEET"],
  ["pharmacology", "Competitive antagonist", "How does a competitive antagonist shift a dose-response curve?", "It causes a parallel rightward shift with unchanged maximal response if enough agonist is given.", ["pharmacodynamics", "receptors"], "AIIMS"],
  ["pharmacology", "Noncompetitive antagonist", "How does noncompetitive antagonism affect dose-response curve?", "It lowers maximal response and often flattens the curve; increasing agonist cannot fully overcome it.", ["pharmacodynamics", "receptors"], "NEET"],
  ["pharmacology", "Partial agonist", "Why can a partial agonist antagonize a full agonist?", "It occupies receptors but produces lower intrinsic activity, reducing the response generated by a full agonist.", ["pharmacodynamics", "receptors"], "AIIMS"],
  ["pharmacology", "Adverse drug reaction types", "Differentiate type A and type B ADRs.", "Type A reactions are predictable and dose-related; type B reactions are idiosyncratic, allergic, or unpredictable.", ["ADR", "safety"], "NEET"],
  ["pharmacology", "Teratogenic period", "When is teratogenic risk usually highest for structural malformations?", "Organogenesis in the first trimester, especially weeks 3 to 8 post-fertilization, is the major structural malformation risk period.", ["ADR", "pregnancy"], "AIIMS"],
  ["pharmacology", "Pharmacovigilance", "What is pharmacovigilance?", "Detection, assessment, understanding, and prevention of adverse drug effects and drug-related problems.", ["ADR", "safety"], "NEET"],
  ["pharmacology", "Muscarinic agonist effects", "Name typical muscarinic effects.", "Miosis, bronchoconstriction, bradycardia, increased secretions, increased GI motility, and detrusor contraction.", ["ANS", "cholinergic"], "NEET"],
  ["pharmacology", "Atropine uses", "Name important uses of atropine.", "Symptomatic bradycardia, organophosphate poisoning with oxime, preanesthetic secretion reduction, and mydriasis/cycloplegia in selected settings.", ["ANS", "anticholinergic"], "AIIMS, NEET"],
  ["pharmacology", "Anticholinergic toxicity", "What are features of anticholinergic toxicity?", "Dry mouth, hot dry skin, mydriasis, urinary retention, tachycardia, ileus, agitation, and delirium.", ["ANS", "toxicology"], "NEET"],
  ["pharmacology", "Neostigmine", "Why is neostigmine used in myasthenia gravis?", "It inhibits acetylcholinesterase, increasing acetylcholine at neuromuscular junctions.", ["ANS", "cholinesterase"], "NEET"],
  ["pharmacology", "Succinylcholine", "What is the major mechanism of succinylcholine?", "It is a depolarizing neuromuscular blocker causing persistent end-plate depolarization followed by paralysis.", ["ANS", "NMJ"], "AIIMS"],
  ["pharmacology", "Phenylephrine", "Which receptor does phenylephrine primarily stimulate?", "Phenylephrine is mainly an alpha-1 agonist causing vasoconstriction and mydriasis without cycloplegia.", ["ANS", "adrenergic"], "NEET"],
  ["pharmacology", "Dobutamine", "What is the main clinical effect of dobutamine?", "Beta-1 agonism increases cardiac contractility and is used for acute heart failure or stress testing.", ["ANS", "adrenergic"], "AIIMS"],
  ["pharmacology", "Beta blocker contraindications", "When should nonselective beta blockers be avoided?", "They can worsen bronchospasm in asthma/COPD and mask hypoglycemia symptoms in diabetes.", ["CVS drugs", "beta blockers"], "NEET"],
  ["pharmacology", "Alpha blocker first-dose", "What adverse effect is classic with prazosin?", "First-dose postural hypotension and syncope can occur due to alpha-1 blockade.", ["ANS", "alpha blockers"], "AIIMS"],
  ["pharmacology", "Levodopa carbidopa", "Why is carbidopa combined with levodopa?", "Carbidopa inhibits peripheral dopa decarboxylase, increasing CNS levodopa availability and reducing peripheral adverse effects.", ["CNS drugs", "Parkinson"], "NEET"],
  ["pharmacology", "Antipsychotic EPS", "Which antipsychotics commonly cause extrapyramidal symptoms?", "High-potency typical antipsychotics such as haloperidol are more likely to cause EPS.", ["CNS drugs", "antipsychotics"], "NEET"],
  ["pharmacology", "Clozapine adverse effect", "What serious adverse effect requires monitoring with clozapine?", "Agranulocytosis requires regular blood count monitoring.", ["CNS drugs", "antipsychotics"], "AIIMS"],
  ["pharmacology", "Lithium monitoring", "Why does lithium need monitoring?", "It has a narrow therapeutic index and can cause renal, thyroid, neurologic, and cardiac toxicity.", ["CNS drugs", "mood stabilizers"], "NEET"],
  ["pharmacology", "SSRI adverse effects", "Name important SSRI adverse effects.", "GI upset, sexual dysfunction, insomnia, serotonin syndrome risk, SIADH, and bleeding risk with NSAIDs/anticoagulants.", ["CNS drugs", "antidepressants"], "NEET"],
  ["pharmacology", "Benzodiazepine antidote", "What is the antidote for benzodiazepine overdose?", "Flumazenil is a benzodiazepine receptor antagonist, used cautiously because it can precipitate seizures.", ["CNS drugs", "sedatives"], "AIIMS"],
  ["pharmacology", "Phenytoin adverse effects", "Name classic adverse effects of phenytoin.", "Gingival hyperplasia, hirsutism, nystagmus, ataxia, megaloblastic anemia, teratogenicity, and drug interactions.", ["CNS drugs", "antiepileptics"], "NEET"],
  ["pharmacology", "Valproate adverse effects", "Name important adverse effects of valproate.", "Hepatotoxicity, pancreatitis, weight gain, tremor, thrombocytopenia, and neural tube defects.", ["CNS drugs", "antiepileptics"], "AIIMS"],
  ["pharmacology", "Opioid overdose", "What is the triad of opioid overdose and treatment?", "Coma, pinpoint pupils, and respiratory depression; treat with airway support and naloxone.", ["CNS drugs", "opioids"], "NEET"],
  ["pharmacology", "Aspirin mechanism", "How does aspirin inhibit platelets?", "Aspirin irreversibly inhibits platelet COX-1, reducing thromboxane A2 for the platelet lifespan.", ["NSAIDs", "antiplatelet"], "AIIMS, NEET"],
  ["pharmacology", "NSAID toxicity", "Name important NSAID toxicities.", "Gastric ulcer/bleeding, renal injury, sodium retention, bronchospasm in susceptible patients, and platelet dysfunction.", ["NSAIDs", "toxicity"], "NEET"],
  ["pharmacology", "Acetaminophen antidote", "What is the antidote for paracetamol poisoning?", "N-acetylcysteine replenishes glutathione and detoxifies NAPQI.", ["toxicology", "analgesics"], "AIIMS"],
  ["pharmacology", "Nitrates", "How do nitrates relieve angina?", "They release nitric oxide, increase cGMP, venodilate, reduce preload, and decrease myocardial oxygen demand.", ["CVS drugs", "antianginal"], "NEET"],
  ["pharmacology", "ACE inhibitors", "Name common ACE inhibitor adverse effects.", "Cough, hyperkalemia, hypotension, renal function worsening in renal artery stenosis, angioedema, and teratogenicity.", ["CVS drugs", "RAAS"], "NEET"],
  ["pharmacology", "ARBs", "How do ARBs differ from ACE inhibitors?", "ARBs block angiotensin II AT1 receptors and usually cause less cough because bradykinin breakdown is not inhibited.", ["CVS drugs", "RAAS"], "AIIMS"],
  ["pharmacology", "Calcium channel blockers", "Differentiate dihydropyridine and non-dihydropyridine CCBs.", "Dihydropyridines mainly vasodilate; verapamil and diltiazem also slow AV conduction and reduce contractility.", ["CVS drugs", "CCB"], "NEET"],
  ["pharmacology", "Digoxin toxicity", "Name features of digoxin toxicity.", "GI upset, confusion, visual disturbances, hyperkalemia in acute overdose, and arrhythmias can occur.", ["CVS drugs", "heart failure"], "AIIMS"],
  ["pharmacology", "Loop diuretics", "Where do loop diuretics act?", "They inhibit Na-K-2Cl cotransporter in the thick ascending limb.", ["diuretics", "renal"], "NEET"],
  ["pharmacology", "Thiazides", "Where do thiazides act?", "They inhibit Na-Cl cotransporter in the distal convoluted tubule.", ["diuretics", "renal"], "NEET"],
  ["pharmacology", "Spironolactone", "What is spironolactone's mechanism?", "It antagonizes aldosterone receptors in collecting duct, reducing sodium reabsorption and potassium/hydrogen secretion.", ["diuretics", "renal"], "AIIMS"],
  ["pharmacology", "Heparin antidote", "What reverses heparin toxicity?", "Protamine sulfate reverses unfractionated heparin and partially reverses LMWH.", ["CVS drugs", "anticoagulants"], "NEET"],
  ["pharmacology", "Warfarin mechanism", "What is warfarin's mechanism?", "It inhibits vitamin K epoxide reductase, reducing activation of factors II, VII, IX, X and proteins C/S.", ["CVS drugs", "anticoagulants"], "NEET"],
  ["pharmacology", "Thrombolytics", "Name serious adverse effect of thrombolytic therapy.", "Major bleeding, especially intracranial hemorrhage, is the most serious risk.", ["CVS drugs", "thrombolytics"], "AIIMS"],
  ["pharmacology", "Insulin adverse effects", "Name important insulin adverse effects.", "Hypoglycemia, weight gain, lipodystrophy at injection sites, and hypokalemia can occur.", ["endocrine drugs", "diabetes"], "NEET"],
  ["pharmacology", "Metformin", "What is metformin's key mechanism and major contraindication?", "It reduces hepatic gluconeogenesis and improves insulin sensitivity; avoid in severe renal dysfunction due to lactic acidosis risk.", ["endocrine drugs", "diabetes"], "AIIMS, NEET"],
  ["pharmacology", "Sulfonylureas", "How do sulfonylureas lower glucose?", "They close ATP-sensitive potassium channels in pancreatic beta cells, increasing insulin release.", ["endocrine drugs", "diabetes"], "NEET"],
  ["pharmacology", "SGLT2 inhibitors", "Name key adverse effects of SGLT2 inhibitors.", "Genital mycotic infections, volume depletion, euglycemic ketoacidosis, and UTI risk can occur.", ["endocrine drugs", "diabetes"], "AIIMS"],
  ["pharmacology", "Levothyroxine", "What is levothyroxine used for?", "It is synthetic T4 used for hypothyroidism and TSH suppression in selected thyroid cancer contexts.", ["endocrine drugs", "thyroid"], "NEET"],
  ["pharmacology", "Propylthiouracil", "What is PTU's unique action compared with methimazole?", "PTU inhibits thyroid peroxidase and also inhibits peripheral conversion of T4 to T3.", ["endocrine drugs", "thyroid"], "AIIMS"],
  ["pharmacology", "Glucocorticoid toxicity", "Name chronic glucocorticoid adverse effects.", "Hyperglycemia, hypertension, osteoporosis, infections, Cushingoid features, cataracts, myopathy, and adrenal suppression.", ["endocrine drugs", "steroids"], "NEET"],
  ["pharmacology", "Beta-lactam mechanism", "How do beta-lactam antibiotics work?", "They inhibit bacterial cell wall cross-linking by binding penicillin-binding proteins.", ["antimicrobials", "beta lactams"], "NEET"],
  ["pharmacology", "Penicillin allergy", "What is the major hypersensitivity issue with penicillins?", "IgE-mediated allergy can cause urticaria, angioedema, bronchospasm, and anaphylaxis.", ["antimicrobials", "beta lactams"], "NEET"],
  ["pharmacology", "Cephalosporin generations", "Which cephalosporins cover Pseudomonas?", "Ceftazidime and cefepime are commonly tested antipseudomonal cephalosporins.", ["antimicrobials", "cephalosporins"], "AIIMS"],
  ["pharmacology", "Carbapenems", "Why are carbapenems important?", "They are broad-spectrum beta-lactams often reserved for severe resistant gram-negative and mixed infections.", ["antimicrobials", "carbapenems"], "NEET"],
  ["pharmacology", "Vancomycin", "What is vancomycin's mechanism?", "It binds D-Ala-D-Ala termini and inhibits cell wall synthesis in gram-positive bacteria.", ["antimicrobials", "glycopeptides"], "AIIMS"],
  ["pharmacology", "Aminoglycoside mechanism", "How do aminoglycosides work?", "They bind 30S ribosomal subunit, causing misreading of mRNA and bactericidal protein synthesis inhibition.", ["antimicrobials", "aminoglycosides"], "NEET"],
  ["pharmacology", "Macrolide mechanism", "How do macrolides work?", "They bind 50S ribosomal subunit and inhibit translocation.", ["antimicrobials", "macrolides"], "NEET"],
  ["pharmacology", "Tetracycline adverse effects", "Name important tetracycline adverse effects.", "Teeth discoloration, bone growth inhibition in children, photosensitivity, GI upset, and esophagitis can occur.", ["antimicrobials", "tetracyclines"], "AIIMS"],
  ["pharmacology", "Fluoroquinolone adverse effects", "Name important fluoroquinolone adverse effects.", "Tendinopathy, QT prolongation, dysglycemia, CNS effects, cartilage toxicity concerns, and aortic risk warnings.", ["antimicrobials", "quinolones"], "NEET"],
  ["pharmacology", "Sulfonamides", "What is the mechanism of sulfonamides?", "They inhibit dihydropteroate synthase, blocking folate synthesis in bacteria.", ["antimicrobials", "sulfonamides"], "NEET"],
  ["pharmacology", "Trimethoprim", "What is trimethoprim's mechanism?", "It inhibits bacterial dihydrofolate reductase.", ["antimicrobials", "folate antagonists"], "AIIMS"],
  ["pharmacology", "ATT first line", "Name first-line antitubercular drugs.", "Isoniazid, rifampicin, pyrazinamide, ethambutol, and streptomycin are classic first-line agents.", ["antimicrobials", "TB"], "NEET"],
  ["pharmacology", "Isoniazid toxicity", "Which vitamin prevents INH neuropathy?", "Pyridoxine prevents isoniazid-induced peripheral neuropathy.", ["antimicrobials", "TB"], "AIIMS, NEET"],
  ["pharmacology", "Rifampicin", "What is a key drug interaction property of rifampicin?", "Rifampicin is a strong hepatic enzyme inducer and can reduce efficacy of many drugs including oral contraceptives and warfarin.", ["antimicrobials", "TB"], "NEET"],
  ["pharmacology", "Ethambutol toxicity", "What toxicity is associated with ethambutol?", "Optic neuritis with red-green color vision impairment is classically tested.", ["antimicrobials", "TB"], "AIIMS"],
  ["pharmacology", "Amphotericin B", "What is amphotericin B's mechanism and toxicity?", "It binds ergosterol and forms pores; nephrotoxicity and infusion reactions are important toxicities.", ["antimicrobials", "antifungal"], "NEET"],
  ["pharmacology", "Azoles", "How do azole antifungals work?", "They inhibit fungal 14-alpha demethylase, reducing ergosterol synthesis.", ["antimicrobials", "antifungal"], "NEET"],
  ["pharmacology", "Acyclovir", "What is acyclovir used for and how is it activated?", "It treats HSV/VZV infections and is activated by viral thymidine kinase before inhibiting viral DNA polymerase.", ["antimicrobials", "antiviral"], "AIIMS"],
  ["pharmacology", "NRTIs", "How do nucleoside reverse transcriptase inhibitors act?", "They are phosphorylated nucleoside analogs that inhibit reverse transcriptase and terminate viral DNA chain elongation.", ["antimicrobials", "HIV"], "NEET"],
  ["pharmacology", "Chloroquine resistance", "What is chloroquine mainly used for now?", "It is used where malaria remains chloroquine-sensitive and for some non-malarial indications; resistance limits falciparum use in many areas.", ["antimicrobials", "malaria"], "NEET"],
  ["pharmacology", "Artemisinin combinations", "Why are artemisinin drugs used in combinations?", "Combination therapy improves efficacy and reduces emergence of resistance.", ["antimicrobials", "malaria"], "AIIMS"],
  ["pharmacology", "Primaquine", "What is primaquine used for?", "Primaquine targets hepatic hypnozoites of vivax/ovale malaria and gametocytes, but requires G6PD consideration.", ["antimicrobials", "malaria"], "NEET"],
  ["pharmacology", "Anticancer alkylators", "How do alkylating agents work?", "They form covalent DNA cross-links and damage DNA, impairing replication and transcription.", ["anticancer", "chemotherapy"], "NEET"],
  ["pharmacology", "Methotrexate", "What is methotrexate's mechanism and rescue agent?", "It inhibits dihydrofolate reductase; leucovorin rescue can protect normal cells in high-dose therapy.", ["anticancer", "antimetabolites"], "AIIMS"],
  ["pharmacology", "Cisplatin toxicity", "Name important cisplatin toxicities.", "Nephrotoxicity, ototoxicity, neuropathy, and severe nausea/vomiting are important.", ["anticancer", "platinum"], "NEET"],
  ["pharmacology", "Doxorubicin toxicity", "What is the dose-limiting toxicity of doxorubicin?", "Cardiotoxicity is dose-limiting; dexrazoxane may reduce risk in selected cases.", ["anticancer", "anthracyclines"], "AIIMS"],
  ["pharmacology", "Vincristine toxicity", "What toxicity is classic for vincristine?", "Peripheral neuropathy and autonomic neuropathy such as constipation are classic.", ["anticancer", "vinca alkaloids"], "NEET"],
  ["pharmacology", "Cyclosporine", "What is cyclosporine's mechanism?", "It inhibits calcineurin, reducing IL-2 transcription and T-cell activation.", ["immunosuppressants", "calcineurin"], "NEET"],
  ["pharmacology", "Tacrolimus toxicity", "Name important tacrolimus toxicities.", "Nephrotoxicity, neurotoxicity, hyperglycemia, hypertension, and infections can occur.", ["immunosuppressants", "calcineurin"], "AIIMS"],
  ["pharmacology", "Organophosphate toxidrome", "What are muscarinic features of organophosphate poisoning?", "Salivation, lacrimation, urination, diarrhea, bronchorrhea/bronchospasm, bradycardia, emesis, miosis, and sweating.", ["toxicology", "cholinergic"], "NEET"],
  ["pharmacology", "Methanol poisoning", "What is the treatment principle in methanol poisoning?", "Block alcohol dehydrogenase with fomepizole or ethanol, correct acidosis, give folinic acid, and dialyze when severe.", ["toxicology", "alcohols"], "AIIMS"],
  ["pharmacology", "Iron poisoning", "What chelator is used in severe iron poisoning?", "Deferoxamine chelates iron and can cause vin rose urine discoloration.", ["toxicology", "chelators"], "NEET"],
  ["pharmacology", "Lead chelation", "Name chelators used in lead poisoning.", "Succimer, EDTA, and dimercaprol are used depending on severity and context.", ["toxicology", "chelators"], "NEET"],
  ["pharmacology", "CYP induction", "Name classic enzyme inducers.", "Rifampicin, carbamazepine, phenytoin, phenobarbital, and smoking are common enzyme inducers.", ["drug interactions", "CYP"], "AIIMS"],
  ["pharmacology", "CYP inhibition", "Name classic enzyme inhibitors.", "Macrolides, azole antifungals, cimetidine, isoniazid, grapefruit juice, ritonavir, and chloramphenicol are classic inhibitors.", ["drug interactions", "CYP"], "NEET"],
].map((item, index) => ({
  id: `pharm-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/pharmacology",
}));

const microbiologyExpansionCards = [
  ["microbiology", "Gram stain sequence", "What is the sequence of Gram staining?", "Crystal violet, iodine, decolorizer, and safranin are applied in order.", ["general microbiology", "stains"], "NEET", ["Crystal violet", "Iodine", "Decolorizer", "Safranin"]],
  ["microbiology", "Gram positive wall", "What cell wall feature helps Gram-positive bacteria retain crystal violet?", "A thick peptidoglycan layer with teichoic acids helps retain the crystal violet-iodine complex.", ["general microbiology", "cell wall"], "NEET"],
  ["microbiology", "Gram negative endotoxin", "Which component of gram-negative bacteria acts as endotoxin?", "Lipid A portion of lipopolysaccharide acts as endotoxin.", ["general microbiology", "cell wall"], "AIIMS, NEET"],
  ["microbiology", "Acid-fast stain", "Why are mycobacteria acid-fast?", "Mycolic acid-rich cell walls retain carbol fuchsin despite acid-alcohol decolorization.", ["general microbiology", "stains"], "NEET"],
  ["microbiology", "Albert stain", "Which organism is demonstrated with Albert stain?", "Corynebacterium diphtheriae metachromatic granules are demonstrated by Albert stain.", ["general microbiology", "stains"], "AIIMS"],
  ["microbiology", "Capsule importance", "Why is bacterial capsule important?", "Capsule resists phagocytosis, increases virulence, and can be a vaccine antigen in organisms such as pneumococcus, meningococcus, and Hib.", ["general microbiology", "virulence"], "NEET"],
  ["microbiology", "Quellung reaction", "What is Quellung reaction used for?", "It demonstrates capsular swelling, classically for Streptococcus pneumoniae typing.", ["general microbiology", "diagnosis"], "AIIMS"],
  ["microbiology", "Bacterial spores", "Which bacteria form clinically important spores?", "Bacillus and Clostridium species form resistant spores.", ["general microbiology", "spores"], "NEET"],
  ["microbiology", "Autoclave indicator", "Which biological indicator is used for autoclave sterilization?", "Geobacillus stearothermophilus spores are used as biological indicators for autoclaves.", ["sterilization", "quality control"], "AIIMS"],
  ["microbiology", "Hot air oven indicator", "Which biological indicator is used for hot air oven?", "Bacillus atrophaeus spores are used as biological indicators for dry heat sterilization.", ["sterilization", "quality control"], "NEET"],
  ["microbiology", "Pasteurization", "What is Holder pasteurization?", "Heating at 63 degrees Celsius for 30 minutes is Holder pasteurization.", ["sterilization", "disinfection"], "NEET"],
  ["microbiology", "Disinfection levels", "What is high-level disinfection used for?", "High-level disinfection is used for semi-critical instruments contacting mucosa, when sterilization is not feasible.", ["sterilization", "disinfection"], "AIIMS"],
  ["microbiology", "Culture media examples", "Match organisms with common selective media.", "TCBS for Vibrio, Lowenstein-Jensen for Mycobacterium, tellurite/Loeffler media for C. diphtheriae, and MacConkey for many enteric gram-negative bacilli.", ["culture", "diagnosis"], "NEET"],
  ["microbiology", "MacConkey agar", "What does MacConkey agar differentiate?", "It selects gram-negative bacilli and differentiates lactose fermenters from non-lactose fermenters.", ["culture", "diagnosis"], "NEET"],
  ["microbiology", "Bacterial conjugation", "What mediates bacterial conjugation?", "Sex pilus transfers plasmid DNA between bacteria, commonly from F+ donor to F- recipient.", ["bacterial genetics", "plasmids"], "AIIMS"],
  ["microbiology", "Transduction", "What is bacterial transduction?", "Bacteriophages transfer bacterial DNA from one bacterium to another.", ["bacterial genetics", "phage"], "NEET"],
  ["microbiology", "Transformation", "What is transformation?", "Uptake of naked DNA from the environment by competent bacteria.", ["bacterial genetics", "DNA transfer"], "NEET"],
  ["microbiology", "Beta-lactamase", "How do beta-lactamases cause resistance?", "They hydrolyze beta-lactam rings, inactivating many penicillins and cephalosporins.", ["antimicrobial resistance", "enzymes"], "NEET"],
  ["microbiology", "MRSA mechanism", "What causes methicillin resistance in Staphylococcus aureus?", "mecA encodes altered PBP2a with low beta-lactam affinity.", ["antimicrobial resistance", "staphylococcus"], "AIIMS"],
  ["microbiology", "IgM", "What is the first antibody in primary immune response?", "IgM is the first antibody produced in primary response and is an efficient complement activator.", ["immunology", "antibodies"], "NEET"],
  ["microbiology", "IgG placenta", "Which immunoglobulin crosses placenta?", "IgG crosses placenta and provides neonatal passive immunity.", ["immunology", "antibodies"], "NEET"],
  ["microbiology", "IgA", "Where is IgA most important?", "Secretory IgA protects mucosal surfaces and is present in secretions such as saliva, tears, and breast milk.", ["immunology", "antibodies"], "AIIMS"],
  ["microbiology", "IgE", "What is IgE associated with?", "IgE mediates type I hypersensitivity and defense against helminths via mast cells and eosinophils.", ["immunology", "antibodies"], "NEET"],
  ["microbiology", "MHC I vs II", "Compare MHC I and MHC II antigen presentation.", "MHC I presents intracellular peptides to CD8 T cells; MHC II presents extracellular peptides to CD4 T cells.", ["immunology", "MHC"], "AIIMS, NEET"],
  ["microbiology", "Complement C3b", "What is the main function of C3b?", "C3b opsonizes microbes and helps form downstream complement convertases.", ["immunology", "complement"], "NEET"],
  ["microbiology", "Complement C5a", "What is C5a known for?", "C5a is a potent chemotactic and anaphylatoxin mediator.", ["immunology", "complement"], "AIIMS"],
  ["microbiology", "Type I hypersensitivity", "What mediates type I hypersensitivity?", "IgE bound to mast cells cross-links with antigen, causing degranulation and immediate allergic inflammation.", ["immunology", "hypersensitivity"], "NEET"],
  ["microbiology", "Type IV hypersensitivity", "What mediates type IV hypersensitivity?", "T-cell mediated delayed hypersensitivity causes reactions such as tuberculin test response and contact dermatitis.", ["immunology", "hypersensitivity"], "NEET"],
  ["microbiology", "Live vaccines", "Name examples of live attenuated vaccines.", "BCG, OPV, MMR, varicella, yellow fever, rotavirus, and intranasal influenza are common examples.", ["immunology", "vaccines"], "AIIMS, NEET"],
  ["microbiology", "Killed vaccines", "Name examples of killed or inactivated vaccines.", "IPV, rabies, hepatitis A, injectable influenza, and Japanese encephalitis vaccines are examples.", ["immunology", "vaccines"], "NEET"],
  ["microbiology", "Staphylococcus aureus", "Which tests identify Staphylococcus aureus?", "Gram-positive cocci in clusters, catalase positive, coagulase positive, and often beta hemolytic.", ["bacteriology", "staphylococcus"], "NEET"],
  ["microbiology", "Staph food poisoning", "What causes rapid-onset vomiting after staphylococcal food poisoning?", "Preformed heat-stable enterotoxin causes abrupt vomiting after short incubation.", ["bacteriology", "staphylococcus"], "AIIMS"],
  ["microbiology", "Streptococcus pyogenes", "What diseases are caused by Streptococcus pyogenes?", "Pharyngitis, impetigo, cellulitis, necrotizing fasciitis, scarlet fever, rheumatic fever, and post-streptococcal glomerulonephritis.", ["bacteriology", "streptococcus"], "NEET"],
  ["microbiology", "Pneumococcus", "Which features suggest Streptococcus pneumoniae?", "Lancet-shaped gram-positive diplococci, alpha hemolysis, optochin sensitivity, bile solubility, and capsule.", ["bacteriology", "streptococcus"], "AIIMS"],
  ["microbiology", "Enterococcus", "What is a key resistance concern with Enterococcus?", "Vancomycin-resistant Enterococcus is an important healthcare-associated pathogen.", ["bacteriology", "enterococcus"], "NEET"],
  ["microbiology", "Neisseria meningitidis", "What specimen is important in suspected meningococcal meningitis?", "CSF and blood cultures are important; gram-negative kidney-shaped diplococci may be seen.", ["bacteriology", "neisseria"], "NEET"],
  ["microbiology", "Neisseria gonorrhoeae", "Why is gonococcus fastidious?", "It requires enriched media such as chocolate agar/Thayer-Martin and increased CO2 for culture.", ["bacteriology", "neisseria"], "AIIMS"],
  ["microbiology", "Corynebacterium diphtheriae", "What toxin action causes diphtheria?", "Diphtheria toxin ADP-ribosylates EF-2, inhibiting protein synthesis.", ["bacteriology", "corynebacterium"], "NEET"],
  ["microbiology", "Bacillus anthracis", "What morphology suggests Bacillus anthracis?", "Large gram-positive spore-forming bacilli with bamboo-stick appearance and nonmotility.", ["bacteriology", "bacillus"], "AIIMS"],
  ["microbiology", "Clostridium tetani", "How does tetanus toxin act?", "Tetanospasmin blocks release of inhibitory neurotransmitters GABA and glycine, causing spastic paralysis.", ["bacteriology", "clostridium"], "NEET"],
  ["microbiology", "Clostridium botulinum", "How does botulinum toxin act?", "It blocks acetylcholine release at neuromuscular junctions, causing flaccid paralysis.", ["bacteriology", "clostridium"], "NEET"],
  ["microbiology", "Clostridioides difficile", "What disease is caused by C. difficile toxins?", "Antibiotic-associated pseudomembranous colitis due to toxins A and B.", ["bacteriology", "clostridium"], "AIIMS"],
  ["microbiology", "Mycobacterium tuberculosis", "What is the standard culture medium for M. tuberculosis?", "Lowenstein-Jensen medium is a classic egg-based medium for mycobacterial culture.", ["bacteriology", "mycobacteria"], "NEET"],
  ["microbiology", "M. leprae", "Why is M. leprae difficult to culture?", "It cannot be grown on artificial media and has a long generation time.", ["bacteriology", "mycobacteria"], "AIIMS"],
  ["microbiology", "E. coli UTI", "Which virulence factor helps uropathogenic E. coli attach?", "P fimbriae and other adhesins help uropathogenic E. coli adhere to uroepithelium.", ["bacteriology", "enterobacteriaceae"], "NEET"],
  ["microbiology", "EHEC", "Which E. coli strain is associated with HUS?", "Enterohemorrhagic E. coli, especially O157:H7, produces Shiga-like toxin and can cause HUS.", ["bacteriology", "E coli"], "AIIMS"],
  ["microbiology", "Shigella", "What is the infectious dose of Shigella like?", "Shigella has a low infectious dose and spreads efficiently by fecal-oral transmission.", ["bacteriology", "enteric"], "NEET"],
  ["microbiology", "Salmonella Typhi", "Which antigen is associated with Salmonella Typhi virulence?", "Vi capsular antigen contributes to virulence and is used in some vaccine strategies.", ["bacteriology", "salmonella"], "NEET"],
  ["microbiology", "Vibrio cholerae", "How does cholera toxin cause diarrhea?", "It ADP-ribosylates Gs, increases cAMP, and drives chloride and water secretion.", ["bacteriology", "vibrio"], "AIIMS, NEET"],
  ["microbiology", "Pseudomonas", "Name classic Pseudomonas features.", "Oxidase-positive nonfermenter with blue-green pigment, fruity odor, biofilm formation, and opportunistic infection tendency.", ["bacteriology", "nonfermenters"], "NEET"],
  ["microbiology", "Haemophilus influenzae", "Which factor is needed by Haemophilus influenzae?", "It requires X factor hemin and V factor NAD, supplied in chocolate agar.", ["bacteriology", "HBB"], "AIIMS"],
  ["microbiology", "Bordetella pertussis", "What is the diagnostic sample for pertussis?", "Nasopharyngeal swab or aspirate for PCR/culture is used in suspected pertussis.", ["bacteriology", "HBB"], "NEET"],
  ["microbiology", "Brucella", "What exposure suggests brucellosis?", "Unpasteurized dairy, livestock exposure, and occupational exposure suggest brucellosis.", ["bacteriology", "zoonosis"], "NEET"],
  ["microbiology", "Treponema pallidum", "Why is dark-field microscopy useful in syphilis?", "T. pallidum is too thin for routine light microscopy and can be seen in lesion exudate by dark-field microscopy.", ["bacteriology", "spirochetes"], "AIIMS"],
  ["microbiology", "Leptospira", "What severe syndrome is associated with leptospirosis?", "Weil disease presents with jaundice, renal failure, hemorrhage, and systemic illness.", ["bacteriology", "spirochetes"], "NEET"],
  ["microbiology", "Rickettsia", "What is Weil-Felix test based on?", "It detects cross-reacting antibodies against Proteus OX strains in rickettsial infections, though modern tests are preferred.", ["bacteriology", "rickettsia"], "AIIMS"],
  ["microbiology", "Chlamydia", "Why are chlamydiae obligate intracellular?", "They depend on host cells for ATP and replicate through elementary and reticulate body forms.", ["bacteriology", "chlamydia"], "NEET"],
  ["microbiology", "Mycoplasma", "Why are mycoplasmas resistant to beta-lactams?", "They lack a cell wall, so beta-lactam cell-wall inhibitors are ineffective.", ["bacteriology", "mycoplasma"], "NEET"],
  ["microbiology", "Herpes latency", "Which viruses establish latency in sensory ganglia?", "HSV and VZV establish latency in sensory ganglia and can reactivate.", ["virology", "herpes"], "NEET"],
  ["microbiology", "EBV", "Which malignancies are associated with EBV?", "Burkitt lymphoma, nasopharyngeal carcinoma, Hodgkin lymphoma, and post-transplant lymphoproliferative disease are associated.", ["virology", "EBV"], "AIIMS"],
  ["microbiology", "CMV owl eye", "What inclusion is associated with CMV?", "Large cells with owl-eye intranuclear inclusions are characteristic.", ["virology", "CMV"], "NEET"],
  ["microbiology", "Influenza drift shift", "Differentiate antigenic drift and shift.", "Drift is gradual point mutation causing seasonal epidemics; shift is reassortment causing major pandemics.", ["virology", "influenza"], "AIIMS, NEET"],
  ["microbiology", "Rubella congenital", "Name features of congenital rubella syndrome.", "Cataracts, cardiac defects such as PDA, sensorineural deafness, and blueberry muffin rash are classic.", ["virology", "rubella"], "NEET"],
  ["microbiology", "Dengue warning", "What immunologic phenomenon contributes to severe dengue?", "Antibody-dependent enhancement can worsen secondary infection with a different serotype.", ["virology", "arbovirus"], "AIIMS"],
  ["microbiology", "Rabies", "Which inclusion body is seen in rabies?", "Negri bodies are cytoplasmic inclusions in neurons.", ["virology", "rabies"], "NEET"],
  ["microbiology", "Hepatitis B serology", "What does anti-HBc IgM indicate?", "Anti-HBc IgM indicates recent acute HBV infection and can be the only marker during window period.", ["virology", "hepatitis"], "AIIMS, NEET"],
  ["microbiology", "Hepatitis C", "Why is HCV clinically important?", "It commonly causes chronic hepatitis and increases risk of cirrhosis and hepatocellular carcinoma.", ["virology", "hepatitis"], "NEET"],
  ["microbiology", "HIV target cells", "Which receptors does HIV use to enter cells?", "HIV binds CD4 and coreceptors CCR5 or CXCR4 to enter target cells.", ["virology", "HIV"], "AIIMS"],
  ["microbiology", "HPV cancer", "Which HPV types are high risk for cervical cancer?", "HPV 16 and 18 are high-risk types strongly associated with cervical cancer.", ["virology", "HPV"], "NEET"],
  ["microbiology", "Candida germ tube", "Which Candida species is germ tube positive?", "Candida albicans is classically germ tube positive.", ["mycology", "candida"], "NEET"],
  ["microbiology", "Cryptococcus", "Which stain demonstrates Cryptococcus capsule?", "India ink or mucicarmine can demonstrate the capsule; cryptococcal antigen testing is also important.", ["mycology", "cryptococcus"], "AIIMS"],
  ["microbiology", "Aspergillus morphology", "Describe Aspergillus hyphae.", "Septate hyphae with acute-angle branching are characteristic.", ["mycology", "aspergillus"], "NEET"],
  ["microbiology", "Mucor morphology", "Describe mucormycosis hyphae.", "Broad aseptate or pauci-septate hyphae with right-angle branching are typical.", ["mycology", "mucor"], "AIIMS"],
  ["microbiology", "Dermatophytes", "What do dermatophytes infect?", "They infect keratinized tissues such as skin, hair, and nails.", ["mycology", "dermatophytes"], "NEET"],
  ["microbiology", "Entamoeba histolytica", "What diagnostic feature suggests E. histolytica trophozoite?", "Trophozoites containing ingested RBCs support invasive E. histolytica infection.", ["parasitology", "amoeba"], "AIIMS"],
  ["microbiology", "Giardia", "What is the classic Giardia presentation?", "Foul-smelling greasy diarrhea, bloating, malabsorption, and trophozoites with falling-leaf motility.", ["parasitology", "flagellates"], "NEET"],
  ["microbiology", "Leishmania donovani", "Where are LD bodies found?", "Amastigotes are found inside macrophages, especially in spleen, bone marrow, and lymph nodes.", ["parasitology", "leishmania"], "AIIMS"],
  ["microbiology", "Malaria vector", "Which mosquito transmits malaria?", "Female Anopheles mosquitoes transmit Plasmodium species.", ["parasitology", "malaria"], "NEET"],
  ["microbiology", "P falciparum severity", "Why is falciparum malaria severe?", "High parasitemia and cytoadherence/rosetting cause microvascular obstruction and severe complications.", ["parasitology", "malaria"], "AIIMS"],
  ["microbiology", "Toxoplasma", "Why is toxoplasmosis important in pregnancy?", "Primary maternal infection can transmit congenitally, causing chorioretinitis, hydrocephalus, and intracranial calcifications.", ["parasitology", "coccidia"], "NEET"],
  ["microbiology", "Taenia solium", "What causes neurocysticercosis?", "Ingestion of Taenia solium eggs leads to larval cysts in tissues including brain.", ["parasitology", "cestodes"], "AIIMS"],
  ["microbiology", "Hydatid disease", "Which parasite causes hydatid cyst?", "Echinococcus granulosus causes hydatid cyst disease, commonly involving liver and lung.", ["parasitology", "cestodes"], "NEET"],
  ["microbiology", "Schistosoma egg", "Which Schistosoma has terminal spine?", "Schistosoma haematobium eggs have terminal spine and are linked to urinary disease and bladder cancer risk.", ["parasitology", "trematodes"], "AIIMS"],
  ["microbiology", "Enterobius", "What test diagnoses Enterobius vermicularis?", "Perianal adhesive tape test detects eggs.", ["parasitology", "nematodes"], "NEET"],
  ["microbiology", "Ancylostoma", "What anemia is caused by hookworm?", "Chronic hookworm infection can cause iron deficiency anemia from intestinal blood loss.", ["parasitology", "nematodes"], "NEET"],
  ["microbiology", "Wuchereria bancrofti", "What is the diagnostic timing for microfilariae?", "Peripheral blood smears are often collected at night for nocturnally periodic Wuchereria bancrofti microfilariae.", ["parasitology", "filaria"], "AIIMS"],
  ["microbiology", "Meningitis CSF", "What CSF pattern suggests bacterial meningitis?", "Neutrophilic pleocytosis, high protein, and low glucose suggest bacterial meningitis.", ["clinical microbiology", "meningitis"], "NEET"],
  ["microbiology", "UTI culture", "What is significant bacteriuria in clean-catch urine classically?", "A count of 10^5 CFU/mL is a classic threshold, interpreted with symptoms and collection method.", ["clinical microbiology", "UTI"], "NEET"],
  ["microbiology", "Blood culture timing", "When should blood cultures be collected in suspected sepsis?", "Collect before antibiotics when feasible, but do not delay urgent antimicrobial therapy in unstable patients.", ["clinical microbiology", "sepsis"], "AIIMS"],
  ["microbiology", "Biomedical waste", "Why is biomedical waste segregation important?", "Segregation at source reduces infection risk, sharps injury, environmental contamination, and inappropriate mixing of hazardous waste.", ["infection control", "biomedical waste"], "NEET"],
  ["microbiology", "Needle stick", "What is the immediate step after needle-stick injury?", "Wash the site, report exposure, assess source and recipient risk, and start indicated post-exposure prophylaxis promptly.", ["infection control", "occupational"], "AIIMS"],
  ["microbiology", "Hand hygiene", "What is the most important hospital infection control measure?", "Appropriate hand hygiene is the single most important measure to reduce healthcare-associated infections.", ["infection control", "HAI"], "NEET"],
].map((item, index) => ({
  id: `micro-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/microbiology",
}));

const psmExpansionCards = [
  ["psm", "Incidence", "Define incidence.", "Incidence measures new cases occurring in a defined population during a specified time period.", ["epidemiology", "measures"], "NEET"],
  ["psm", "Prevalence", "Define prevalence.", "Prevalence measures all existing cases in a population at a particular time or over a period.", ["epidemiology", "measures"], "NEET"],
  ["psm", "Incidence vs prevalence", "How does disease duration affect prevalence?", "Prevalence increases with longer disease duration and decreases when recovery or death shortens duration.", ["epidemiology", "measures"], "AIIMS"],
  ["psm", "Relative risk", "Which study commonly estimates relative risk?", "Cohort studies estimate relative risk by comparing incidence in exposed and unexposed groups.", ["epidemiology", "cohort"], "NEET"],
  ["psm", "Attributable risk", "What does attributable risk measure?", "It measures excess disease incidence among exposed people due to the exposure.", ["epidemiology", "risk"], "AIIMS"],
  ["psm", "Case-control study", "What measure of association is used in case-control studies?", "Odds ratio is the usual measure because incidence cannot be directly calculated from a case-control design.", ["epidemiology", "case-control"], "NEET"],
  ["psm", "Randomized trial", "What is the purpose of randomization?", "Randomization distributes known and unknown confounders between intervention groups.", ["epidemiology", "trial"], "NEET"],
  ["psm", "Confounding", "What is confounding?", "Confounding occurs when a third factor is associated with both exposure and outcome and distorts their apparent relationship.", ["epidemiology", "bias"], "AIIMS"],
  ["psm", "Lead-time bias", "What is lead-time bias in screening?", "Screening appears to prolong survival because diagnosis occurs earlier, even if death is not delayed.", ["screening", "bias"], "NEET"],
  ["psm", "Sensitivity", "Define sensitivity.", "Sensitivity is the proportion of diseased individuals who test positive.", ["screening", "test performance"], "NEET"],
  ["psm", "Specificity", "Define specificity.", "Specificity is the proportion of non-diseased individuals who test negative.", ["screening", "test performance"], "NEET"],
  ["psm", "Positive predictive value", "What affects positive predictive value most in population screening?", "Disease prevalence strongly affects PPV; PPV rises when prevalence is higher.", ["screening", "predictive value"], "AIIMS"],
  ["psm", "ROC curve", "What does ROC curve plot?", "It plots sensitivity against 1-specificity across different test cutoffs.", ["screening", "ROC"], "NEET"],
  ["psm", "Iceberg phenomenon", "What is the iceberg phenomenon of disease?", "Clinically apparent cases are the visible portion, while subclinical, undiagnosed, and carrier states form the hidden portion.", ["epidemiology", "natural history"], "NEET"],
  ["psm", "Levels of prevention", "List levels of prevention.", "Primordial, primary, secondary, tertiary, and quaternary prevention address risk emergence, disease occurrence, early detection, disability limitation, and overmedicalization.", ["prevention", "public health"], "AIIMS, NEET"],
  ["psm", "Primary prevention", "Give examples of primary prevention.", "Immunization, health education, nutrition, sanitation, and risk-factor control prevent disease occurrence.", ["prevention", "primary"], "NEET"],
  ["psm", "Secondary prevention", "Give examples of secondary prevention.", "Screening and early treatment, such as Pap smear or hypertension detection, reduce disease progression.", ["prevention", "secondary"], "NEET"],
  ["psm", "Tertiary prevention", "What is tertiary prevention?", "Disability limitation and rehabilitation after disease has occurred.", ["prevention", "tertiary"], "NEET"],
  ["psm", "Epidemic curve", "What does a point-source epidemic curve show?", "A sharp rise and gradual fall within one incubation period suggests a point-source outbreak.", ["epidemiology", "outbreak"], "AIIMS"],
  ["psm", "Attack rate", "What is attack rate?", "Attack rate is cumulative incidence during an outbreak, often expressed as cases among exposed persons.", ["epidemiology", "outbreak"], "NEET"],
  ["psm", "Herd immunity", "What factors influence herd immunity?", "Vaccine coverage, vaccine efficacy, natural immunity, R0, population mixing, and duration of immunity influence herd protection.", ["immunization", "herd immunity"], "NEET"],
  ["psm", "Cold chain", "What is the purpose of cold chain?", "Cold chain maintains vaccine potency from manufacture to administration by preserving recommended temperatures.", ["immunization", "cold chain"], "NEET"],
  ["psm", "Open vial policy", "What is the principle of open vial policy?", "Certain opened multi-dose vaccine vials may be reused in later sessions if cold chain, asepsis, VVM, expiry, and handling conditions are satisfied.", ["immunization", "vaccine logistics"], "AIIMS"],
  ["psm", "Vaccine vial monitor", "What does VVM indicate?", "A vaccine vial monitor indicates cumulative heat exposure of the vaccine vial.", ["immunization", "cold chain"], "NEET"],
  ["psm", "Pulse polio", "What is the public health logic of pulse polio immunization?", "Mass synchronized OPV dosing interrupts poliovirus transmission by rapidly boosting intestinal immunity in children.", ["immunization", "polio"], "NEET"],
  ["psm", "Measles prevention", "What is the key community prevention measure for measles?", "High two-dose measles-containing vaccine coverage is essential due to high transmissibility.", ["communicable diseases", "measles"], "NEET"],
  ["psm", "TB control", "What is directly observed treatment intended to improve?", "It improves adherence, cure, and resistance prevention in tuberculosis control programs.", ["communicable diseases", "TB"], "AIIMS"],
  ["psm", "Malaria control", "Name key malaria control strategies.", "Early diagnosis and treatment, vector control, insecticide-treated nets, indoor residual spraying, surveillance, and source reduction.", ["communicable diseases", "malaria"], "NEET"],
  ["psm", "Dengue control", "What is the main dengue prevention strategy?", "Aedes source reduction, personal protection, surveillance, and community participation are central.", ["communicable diseases", "dengue"], "NEET"],
  ["psm", "Rabies PEP", "What are core components of rabies post-exposure prophylaxis?", "Immediate wound washing, rabies vaccination, and rabies immunoglobulin for indicated category III exposures.", ["communicable diseases", "rabies"], "AIIMS, NEET"],
  ["psm", "NCD risk factors", "Name common modifiable NCD risk factors.", "Tobacco, alcohol, unhealthy diet, physical inactivity, obesity, hypertension, dyslipidemia, and hyperglycemia.", ["noncommunicable diseases", "risk factors"], "NEET"],
  ["psm", "Hypertension screening", "Why is hypertension suitable for screening?", "It is common, measurable, often asymptomatic, has serious outcomes, and effective treatment exists.", ["noncommunicable diseases", "screening"], "NEET"],
  ["psm", "Oral rehydration", "What is the basis of ORS?", "Sodium-glucose cotransport promotes water and electrolyte absorption even in many diarrheal illnesses.", ["child health", "diarrhea"], "NEET"],
  ["psm", "IMNCI", "What is IMNCI aimed at?", "Integrated management of neonatal and childhood illness standardizes assessment and management of common child health problems.", ["child health", "programs"], "AIIMS"],
  ["psm", "Exclusive breastfeeding", "What is exclusive breastfeeding recommendation?", "Only breast milk, no other food or drink except medicines/ORS/vitamins when indicated, for the first 6 months.", ["nutrition", "MCH"], "NEET"],
  ["psm", "Low birth weight", "Define low birth weight.", "Birth weight less than 2500 g irrespective of gestational age.", ["MCH", "newborn"], "NEET"],
  ["psm", "Maternal mortality ratio", "Define maternal mortality ratio.", "Maternal deaths per 100,000 live births during a specified period.", ["MCH", "indicators"], "NEET"],
  ["psm", "Infant mortality rate", "Define infant mortality rate.", "Deaths under 1 year of age per 1000 live births in a given year.", ["demography", "indicators"], "NEET"],
  ["psm", "TFR", "What is total fertility rate?", "Average number of children a woman would bear if she experienced current age-specific fertility rates throughout reproductive life.", ["demography", "fertility"], "AIIMS"],
  ["psm", "Replacement fertility", "What is replacement-level fertility approximately?", "About 2.1 children per woman in many populations, allowing replacement of parents after accounting for mortality and sex ratio.", ["demography", "fertility"], "NEET"],
  ["psm", "Demographic cycle", "What happens in late expanding demographic stage?", "Death rate declines while birth rate remains high, causing rapid population growth.", ["demography", "population"], "NEET"],
  ["psm", "Protein-energy malnutrition", "Differentiate marasmus and kwashiorkor.", "Marasmus shows severe wasting from calorie deficiency; kwashiorkor shows edema, fatty liver, and skin/hair changes from protein deficiency.", ["nutrition", "PEM"], "NEET"],
  ["psm", "Vitamin A deficiency", "Name ocular signs of vitamin A deficiency.", "Night blindness, conjunctival xerosis, Bitot spots, corneal xerosis, keratomalacia, and corneal scarring.", ["nutrition", "vitamin A"], "AIIMS, NEET"],
  ["psm", "Iodine deficiency", "What disorders are included in iodine deficiency disorders?", "Goiter, hypothyroidism, impaired mental development, cretinism, stillbirths, and reduced work capacity.", ["nutrition", "iodine"], "NEET"],
  ["psm", "Water purification", "What are steps in large-scale water purification?", "Storage, filtration, and disinfection are major steps.", ["environment", "water"], "NEET"],
  ["psm", "Breakpoint chlorination", "What is breakpoint chlorination?", "Chlorine is added until demand is satisfied and free residual chlorine appears after oxidation of impurities.", ["environment", "water"], "AIIMS"],
  ["psm", "Residual chlorine", "Why is residual chlorine important?", "It indicates continuing disinfectant protection against contamination in distributed water.", ["environment", "water"], "NEET"],
  ["psm", "Air pollution indicator", "Which pollutants are commonly monitored for air quality?", "Particulate matter, sulfur dioxide, nitrogen oxides, ozone, carbon monoxide, and lead are commonly monitored.", ["environment", "air pollution"], "NEET"],
  ["psm", "Biomedical waste color", "Why is color coding used in biomedical waste?", "Color coding segregates waste by disposal method and hazard, reducing infection, injury, and environmental risk.", ["environment", "biomedical waste"], "AIIMS"],
  ["psm", "Occupational pneumoconiosis", "Name examples of pneumoconiosis.", "Silicosis, asbestosis, coal worker pneumoconiosis, and byssinosis are common occupational lung diseases.", ["occupational health", "lung"], "NEET"],
  ["psm", "Health education", "What is the purpose of health education?", "It helps individuals and communities gain knowledge, attitudes, and practices that support healthful behavior.", ["health education", "communication"], "NEET"],
  ["psm", "Screening ethics", "Why can screening cause harm?", "False positives, false negatives, overdiagnosis, anxiety, unnecessary treatment, and cost can cause harm.", ["screening", "ethics"], "AIIMS"],
  ["psm", "Normal distribution", "What is the empirical rule for normal distribution?", "About 68%, 95%, and 99.7% of observations lie within 1, 2, and 3 standard deviations of mean.", ["biostatistics", "distribution"], "NEET"],
  ["psm", "Standard error", "What does standard error measure?", "It measures precision of a sample estimate, such as the sample mean, around the population parameter.", ["biostatistics", "sampling"], "NEET"],
  ["psm", "P value", "What does a p value represent?", "It is the probability of obtaining results as extreme as observed if the null hypothesis is true.", ["biostatistics", "hypothesis"], "AIIMS"],
  ["psm", "Type I error", "What is type I error?", "Rejecting a true null hypothesis; its probability is alpha.", ["biostatistics", "errors"], "NEET"],
  ["psm", "Type II error", "What is type II error?", "Failing to reject a false null hypothesis; its probability is beta.", ["biostatistics", "errors"], "NEET"],
  ["psm", "Chi-square test", "When is chi-square test used?", "It tests association between categorical variables or goodness of fit when expected counts are adequate.", ["biostatistics", "tests"], "NEET"],
  ["psm", "T test", "When is Student t test used?", "It compares means, commonly between two groups when data are approximately normally distributed.", ["biostatistics", "tests"], "AIIMS"],
].map((item, index) => ({
  id: `psm-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/psm",
}));

const ophthalmologyExpansionCards = [
  ["ophthalmology", "Corneal layers", "List the main layers of cornea from anterior to posterior.", "Epithelium, Bowman's layer, stroma, Descemet membrane, and endothelium.", ["cornea", "anatomy"], "NEET"],
  ["ophthalmology", "Corneal transparency", "Why is the cornea transparent?", "Regular stromal collagen arrangement, avascularity, relative dehydration maintained by endothelium, and smooth epithelium support transparency.", ["cornea", "physiology"], "AIIMS"],
  ["ophthalmology", "Aqueous humor pathway", "Trace aqueous humor flow.", "Ciliary body produces aqueous; it flows posterior chamber to pupil to anterior chamber to trabecular meshwork and Schlemm canal.", ["glaucoma", "aqueous"], "NEET", ["Ciliary body", "Posterior chamber", "Pupil", "Schlemm canal"]],
  ["ophthalmology", "Intraocular pressure", "What determines intraocular pressure?", "IOP depends on aqueous humor production, outflow resistance, episcleral venous pressure, and ocular wall compliance.", ["glaucoma", "IOP"], "NEET"],
  ["ophthalmology", "Myopia", "What is the optical defect in myopia?", "Parallel rays focus in front of retina, usually due to long axial length or excessive refractive power; corrected with concave lenses.", ["optics", "refractive errors"], "NEET"],
  ["ophthalmology", "Hypermetropia", "What is the optical defect in hypermetropia?", "Parallel rays focus behind retina due to short axial length or low refractive power; corrected with convex lenses.", ["optics", "refractive errors"], "NEET"],
  ["ophthalmology", "Astigmatism", "What causes astigmatism?", "Unequal curvature in different meridians, commonly corneal, prevents a point focus on retina.", ["optics", "refractive errors"], "AIIMS"],
  ["ophthalmology", "Presbyopia", "What causes presbyopia?", "Age-related reduction in lens elasticity and accommodation causes near-vision difficulty.", ["optics", "accommodation"], "NEET"],
  ["ophthalmology", "Aphakia optics", "What optical changes occur in aphakia?", "Loss of lens causes high hypermetropia, loss of accommodation, deep anterior chamber, and magnified retinal images with spectacles.", ["lens", "aphakia"], "AIIMS"],
  ["ophthalmology", "Visual acuity", "What does 6/18 visual acuity mean?", "The patient sees at 6 meters what a normal eye can see at 18 meters.", ["optics", "visual acuity"], "NEET"],
  ["ophthalmology", "Retinoscopy", "What is retinoscopy used for?", "It objectively estimates refractive error by observing movement of retinal reflex.", ["optics", "refraction"], "NEET"],
  ["ophthalmology", "Accommodation reflex", "What are components of near reflex?", "Accommodation, convergence, and pupillary constriction.", ["neuro-ophthalmology", "reflex"], "AIIMS"],
  ["ophthalmology", "Conjunctivitis bacterial", "What discharge suggests bacterial conjunctivitis?", "Mucopurulent discharge with eyelid sticking suggests bacterial conjunctivitis.", ["conjunctiva", "infection"], "NEET"],
  ["ophthalmology", "Vernal keratoconjunctivitis", "Name classic finding in vernal keratoconjunctivitis.", "Giant papillae on upper tarsal conjunctiva and limbal gelatinous changes may occur.", ["conjunctiva", "allergy"], "AIIMS"],
  ["ophthalmology", "Pterygium", "What is pterygium?", "A triangular fibrovascular conjunctival growth extending onto cornea, commonly from nasal side.", ["conjunctiva", "degeneration"], "NEET"],
  ["ophthalmology", "Corneal ulcer signs", "What suggests corneal ulcer?", "Pain, redness, photophobia, watering, corneal epithelial defect, stromal infiltrate, and possibly hypopyon.", ["cornea", "ulcer"], "NEET"],
  ["ophthalmology", "Fungal corneal ulcer", "What features suggest fungal keratitis?", "Dry-looking ulcer with feathery margins, satellite lesions, and hypopyon after vegetative trauma suggests fungal keratitis.", ["cornea", "fungal"], "AIIMS"],
  ["ophthalmology", "Herpes simplex keratitis", "What corneal lesion is typical of HSV keratitis?", "Dendritic epithelial ulcer with terminal bulbs is typical.", ["cornea", "viral"], "NEET"],
  ["ophthalmology", "Keratoconus", "What is keratoconus?", "Progressive corneal thinning and conical protrusion causing irregular astigmatism and visual distortion.", ["cornea", "ectasia"], "AIIMS"],
  ["ophthalmology", "Uveitis symptoms", "What symptoms suggest anterior uveitis?", "Pain, photophobia, circumcorneal congestion, small pupil, cells and flare, and blurred vision.", ["uvea", "uveitis"], "NEET"],
  ["ophthalmology", "Keratic precipitates", "What are keratic precipitates?", "Inflammatory cell deposits on corneal endothelium seen in uveitis.", ["uvea", "uveitis"], "AIIMS"],
  ["ophthalmology", "Cataract symptoms", "Name common cataract symptoms.", "Painless progressive vision loss, glare, halos, monocular diplopia, and frequent refractive changes.", ["lens", "cataract"], "NEET"],
  ["ophthalmology", "Senile cataract stages", "List broad stages of age-related cataract.", "Incipient, immature, mature, hypermature, and morgagnian changes may be described.", ["lens", "cataract"], "NEET"],
  ["ophthalmology", "Diabetic cataract", "What cataract pattern is classically linked to diabetes?", "Snowflake cataract may occur in young diabetics; diabetes also accelerates age-related cataract.", ["lens", "cataract"], "AIIMS"],
  ["ophthalmology", "Acute angle closure treatment", "What is initial management principle in acute angle closure glaucoma?", "Urgently lower IOP medically, relieve pupillary block, and perform laser peripheral iridotomy when cornea clears.", ["glaucoma", "emergency"], "AIIMS, NEET"],
  ["ophthalmology", "Open angle glaucoma", "What is the typical presentation of primary open-angle glaucoma?", "Chronic progressive optic neuropathy with open angles, raised or normal IOP, cupping, and peripheral field loss.", ["glaucoma", "POAG"], "NEET"],
  ["ophthalmology", "Glaucomatous cupping", "What happens to cup-disc ratio in glaucoma?", "Cup-disc ratio increases due to progressive loss of retinal ganglion cell axons.", ["glaucoma", "optic disc"], "NEET"],
  ["ophthalmology", "Timolol glaucoma", "How does timolol lower IOP?", "It reduces aqueous humor production by beta blockade in ciliary epithelium.", ["glaucoma", "drugs"], "AIIMS"],
  ["ophthalmology", "Prostaglandin analogs", "How do prostaglandin analogs lower IOP?", "They increase uveoscleral outflow.", ["glaucoma", "drugs"], "NEET"],
  ["ophthalmology", "Central retinal artery occlusion", "What fundus finding is classic in CRAO?", "Retinal pallor with cherry-red spot at macula.", ["retina", "vascular"], "AIIMS, NEET"],
  ["ophthalmology", "Central retinal vein occlusion", "What fundus appearance is classic in CRVO?", "Blood and thunder fundus with widespread retinal hemorrhages, venous tortuosity, and disc edema.", ["retina", "vascular"], "NEET"],
  ["ophthalmology", "Diabetic retinopathy stages", "What differentiates NPDR from PDR?", "Proliferative diabetic retinopathy is defined by retinal or optic disc neovascularization.", ["retina", "diabetes"], "NEET"],
  ["ophthalmology", "Hypertensive retinopathy", "Name classic hypertensive retinopathy findings.", "Arteriolar narrowing, AV nicking, flame hemorrhages, cotton-wool spots, hard exudates, and papilledema in malignant hypertension.", ["retina", "hypertension"], "AIIMS"],
  ["ophthalmology", "Retinal detachment", "What symptoms suggest retinal detachment?", "Flashes, floaters, curtain-like field defect, and painless vision loss.", ["retina", "detachment"], "NEET"],
  ["ophthalmology", "Retinoblastoma", "What is the common presentation of retinoblastoma?", "Leukocoria and strabismus are common presentations in children.", ["retina", "tumor"], "AIIMS"],
  ["ophthalmology", "Papilledema", "What is papilledema?", "Optic disc swelling due to raised intracranial pressure, usually bilateral.", ["neuro-ophthalmology", "optic disc"], "NEET"],
  ["ophthalmology", "Optic neuritis", "What presentation suggests optic neuritis?", "Painful acute monocular visual loss with decreased color vision and relative afferent pupillary defect.", ["neuro-ophthalmology", "optic nerve"], "AIIMS"],
  ["ophthalmology", "RAPD", "What does relative afferent pupillary defect indicate?", "It indicates asymmetric optic nerve or severe retinal disease affecting afferent input.", ["neuro-ophthalmology", "pupil"], "NEET"],
  ["ophthalmology", "Third nerve palsy", "What findings occur in complete third nerve palsy?", "Ptosis, eye down and out, diplopia, impaired adduction/elevation/depression, and pupil involvement if parasympathetic fibers are affected.", ["neuro-ophthalmology", "cranial nerves"], "AIIMS"],
  ["ophthalmology", "Sixth nerve palsy", "What deficit occurs in abducens nerve palsy?", "Lateral rectus weakness causes impaired abduction and horizontal diplopia.", ["neuro-ophthalmology", "cranial nerves"], "NEET"],
  ["ophthalmology", "Strabismus amblyopia", "Why treat childhood strabismus early?", "Early alignment and amblyopia therapy prevent permanent cortical visual suppression.", ["squint", "amblyopia"], "NEET"],
  ["ophthalmology", "Hordeolum", "What is hordeolum?", "An acute staphylococcal abscess of eyelid glands; external involves glands of Zeis/Moll and internal involves meibomian gland.", ["lids", "infection"], "NEET"],
  ["ophthalmology", "Chalazion", "What is chalazion?", "A chronic lipogranulomatous inflammation of meibomian gland.", ["lids", "meibomian"], "AIIMS"],
  ["ophthalmology", "Dacryocystitis", "What causes chronic dacryocystitis?", "Nasolacrimal duct obstruction predisposes to lacrimal sac infection and epiphora.", ["lacrimal", "infection"], "NEET"],
  ["ophthalmology", "Chemical eye injury", "What is the immediate management of chemical eye injury?", "Immediate copious irrigation is the priority before detailed examination.", ["ocular trauma", "emergency"], "AIIMS, NEET"],
  ["ophthalmology", "Open globe injury", "What should be avoided in suspected open globe injury?", "Avoid pressure, tonometry, and manipulation; shield the eye and arrange urgent ophthalmic care.", ["ocular trauma", "emergency"], "NEET"],
  ["ophthalmology", "Trachoma", "What organism causes trachoma?", "Chlamydia trachomatis serovars A, B, Ba, and C cause trachoma.", ["community ophthalmology", "trachoma"], "NEET"],
  ["ophthalmology", "SAFE strategy", "What does SAFE strategy for trachoma mean?", "Surgery for trichiasis, Antibiotics, Facial cleanliness, and Environmental improvement.", ["community ophthalmology", "trachoma"], "AIIMS"],
  ["ophthalmology", "Night blindness", "Which deficiency causes night blindness?", "Vitamin A deficiency impairs rhodopsin regeneration and causes night blindness.", ["community ophthalmology", "vitamin A"], "NEET"],
  ["ophthalmology", "Blindness definition", "What is blindness in public health terms commonly based on?", "It is commonly classified by presenting visual acuity below a defined threshold in the better eye, with definitions varying by program and standard.", ["community ophthalmology", "blindness"], "NEET"],
  ["ophthalmology", "Red eye danger signs", "Which red eye features need urgent evaluation?", "Pain, photophobia, reduced vision, corneal opacity, irregular pupil, trauma, high IOP signs, or contact lens keratitis risk.", ["red eye", "triage"], "AIIMS"],
  ["ophthalmology", "Hypopyon", "What is hypopyon?", "Layering of inflammatory cells in anterior chamber, seen in severe keratitis, uveitis, or endophthalmitis.", ["anterior segment", "inflammation"], "NEET"],
  ["ophthalmology", "Endophthalmitis", "What suggests endophthalmitis?", "Severe pain, reduced vision, hypopyon, vitritis, and recent surgery, trauma, or endogenous infection suggest endophthalmitis.", ["ocular infection", "emergency"], "AIIMS"],
  ["ophthalmology", "Sympathetic ophthalmia", "What is sympathetic ophthalmia?", "Bilateral granulomatous panuveitis after penetrating injury or surgery to one eye.", ["uvea", "trauma"], "AIIMS"],
  ["ophthalmology", "Leukocoria differential", "Name important causes of leukocoria.", "Retinoblastoma, congenital cataract, persistent fetal vasculature, Coats disease, ROP, and toxocariasis.", ["pediatrics", "leukocoria"], "NEET"],
  ["ophthalmology", "ROP risk", "Which infants are at risk for retinopathy of prematurity?", "Premature and low-birth-weight infants, especially with oxygen exposure or unstable neonatal course, are at risk.", ["retina", "ROP"], "NEET"],
].map((item, index) => ({
  id: `ophth-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/eye",
}));

const entExpansionCards = [
  ["ent", "Tympanic membrane landmarks", "Name key otoscopic landmarks of the tympanic membrane.", "Handle of malleus, lateral process of malleus, cone of light, pars tensa, pars flaccida, anterior and posterior malleolar folds.", ["ear", "anatomy"], "NEET"],
  ["ent", "Middle ear contents", "List the main contents of the middle ear.", "Ossicles, stapedius, tensor tympani tendon, chorda tympani, tympanic plexus, air, and mucosal folds occupy the middle ear cleft.", ["ear", "anatomy"], "NEET"],
  ["ent", "Eustachian tube function", "What are the functions of the Eustachian tube?", "Ventilation and pressure equalization, drainage of middle ear secretions, and protection from nasopharyngeal reflux.", ["ear", "eustachian tube"], "AIIMS"],
  ["ent", "Acute otitis media", "What clinical findings suggest acute otitis media?", "Ear pain, fever, reduced hearing, and a congested bulging tympanic membrane with reduced mobility suggest acute otitis media.", ["ear", "infection"], "NEET"],
  ["ent", "Otitis media with effusion", "What is otitis media with effusion?", "Middle-ear fluid without acute infection, causing conductive hearing loss and a dull or retracted tympanic membrane.", ["ear", "middle ear"], "NEET"],
  ["ent", "CSOM tubotympanic", "What characterizes tubotympanic CSOM?", "It is the safe type, usually with central perforation, intermittent mucopurulent discharge, and conductive hearing loss.", ["ear", "CSOM"], "NEET"],
  ["ent", "CSOM atticoantral", "Why is atticoantral CSOM unsafe?", "It commonly involves cholesteatoma, marginal or attic perforation, bone erosion, foul discharge, and risk of complications.", ["ear", "CSOM"], "AIIMS, NEET"],
  ["ent", "Cholesteatoma", "What is cholesteatoma?", "Keratinizing squamous epithelium in the middle ear or mastoid that expands and erodes bone.", ["ear", "cholesteatoma"], "AIIMS"],
  ["ent", "Mastoiditis", "Name warning features of acute mastoiditis.", "Postauricular pain, swelling, fever, protruding pinna, sagging canal wall, and persistent otorrhea after otitis media.", ["ear", "mastoid"], "NEET"],
  ["ent", "Bezold abscess", "What is Bezold abscess?", "A deep neck abscess caused by mastoid infection tracking through the mastoid tip into the sternocleidomastoid region.", ["ear", "complications"], "AIIMS"],
  ["ent", "Facial nerve in ear disease", "Why can CSOM cause facial palsy?", "Cholesteatoma, granulation, or infection can erode the facial canal or inflame a dehiscent facial nerve.", ["ear", "facial nerve"], "AIIMS"],
  ["ent", "Otosclerosis", "What is otosclerosis?", "Abnormal bone remodeling around the stapes footplate causing progressive conductive hearing loss, often in young adults.", ["ear", "hearing loss"], "NEET"],
  ["ent", "Carhart notch", "What is Carhart notch?", "An apparent dip in bone conduction around 2 kHz on audiometry, classically associated with stapes fixation in otosclerosis.", ["audiology", "otosclerosis"], "AIIMS"],
  ["ent", "Presbycusis", "What is presbycusis?", "Age-related bilateral symmetric sensorineural hearing loss, usually affecting high frequencies first.", ["audiology", "SNHL"], "NEET"],
  ["ent", "Noise-induced hearing loss", "What audiogram pattern suggests noise-induced hearing loss?", "A sensorineural notch around 4 kHz is typical, especially with chronic occupational noise exposure.", ["audiology", "occupational"], "NEET"],
  ["ent", "Weber test", "How is Weber test interpreted?", "Sound lateralizes to the poorer ear in conductive loss and to the better ear in sensorineural loss.", ["audiology", "tuning fork"], "NEET"],
  ["ent", "Rinne test", "How is Rinne test interpreted?", "Air conduction greater than bone conduction is positive; bone conduction greater than air conduction suggests conductive hearing loss.", ["audiology", "tuning fork"], "NEET"],
  ["ent", "ABC test", "What does absolute bone conduction test compare?", "It compares the patient's bone conduction with the examiner's to identify sensorineural impairment.", ["audiology", "tuning fork"], "AIIMS"],
  ["ent", "Pure tone audiometry", "What does pure tone audiometry measure?", "It measures hearing threshold across frequencies by air and bone conduction, helping classify and quantify hearing loss.", ["audiology", "audiometry"], "NEET"],
  ["ent", "Tympanometry", "What does tympanometry assess?", "It assesses middle-ear pressure and compliance, useful for effusion, ossicular fixation, and tympanic membrane mobility.", ["audiology", "tympanometry"], "AIIMS"],
  ["ent", "Meniere disease", "What is the classic triad of Meniere disease?", "Episodic vertigo, fluctuating sensorineural hearing loss, and tinnitus, often with aural fullness.", ["vertigo", "inner ear"], "NEET"],
  ["ent", "BPPV", "What presentation suggests benign paroxysmal positional vertigo?", "Brief positional vertigo triggered by head movement with characteristic positional nystagmus.", ["vertigo", "BPPV"], "NEET"],
  ["ent", "Vestibular neuritis", "How does vestibular neuritis differ from labyrinthitis?", "Vestibular neuritis causes acute vertigo without hearing loss; labyrinthitis includes cochlear symptoms such as hearing loss.", ["vertigo", "infection"], "AIIMS"],
  ["ent", "Acoustic neuroma", "What early symptoms suggest vestibular schwannoma?", "Unilateral progressive sensorineural hearing loss, tinnitus, imbalance, and poor speech discrimination.", ["ear", "CPA tumor"], "AIIMS, NEET"],
  ["ent", "Epistaxis site", "What is Little area?", "An anteroinferior nasal septal vascular area where Kiesselbach plexus commonly causes anterior epistaxis.", ["nose", "epistaxis"], "NEET"],
  ["ent", "Epistaxis management", "What is first-line management of anterior epistaxis?", "Sit forward, pinch the soft nose, clear clots, apply topical vasoconstrictor or cautery if visible, and pack if needed.", ["nose", "emergency"], "NEET"],
  ["ent", "Posterior epistaxis", "When should posterior epistaxis be suspected?", "Persistent heavy bleeding into the throat, older hypertensive patient, or failure of anterior measures suggests posterior source.", ["nose", "epistaxis"], "AIIMS"],
  ["ent", "DNS symptoms", "What symptoms can deviated nasal septum cause?", "Nasal obstruction, recurrent sinusitis, epistaxis, headache, snoring, and contact-point symptoms may occur.", ["nose", "septum"], "NEET"],
  ["ent", "Septal hematoma", "Why is septal hematoma urgent?", "It can cause septal cartilage necrosis, saddle-nose deformity, and abscess unless drained promptly.", ["nose", "trauma"], "AIIMS"],
  ["ent", "Allergic rhinitis", "Name typical features of allergic rhinitis.", "Sneezing, watery rhinorrhea, nasal itching, obstruction, pale boggy turbinates, and allergic shiners.", ["nose", "rhinitis"], "NEET"],
  ["ent", "Nasal polyps", "What are common associations of bilateral nasal polyps?", "Allergy, asthma, aspirin sensitivity, chronic rhinosinusitis, and cystic fibrosis in children.", ["nose", "polyps"], "NEET"],
  ["ent", "Antrochoanal polyp", "What is antrochoanal polyp?", "A solitary polyp arising from maxillary sinus, passing through choana into nasopharynx, often in children or young adults.", ["nose", "polyps"], "AIIMS"],
  ["ent", "Atrophic rhinitis", "What characterizes atrophic rhinitis?", "Roomy nasal cavities, crusting, foul smell, anosmia, and mucosal atrophy.", ["nose", "rhinitis"], "NEET"],
  ["ent", "Rhinosporidiosis", "What is the typical nasal finding in rhinosporidiosis?", "A friable strawberry-like polypoidal mass with whitish sporangial dots and bleeding tendency.", ["nose", "granuloma"], "AIIMS"],
  ["ent", "Acute sinusitis", "Name common features of acute bacterial rhinosinusitis.", "Purulent nasal discharge, facial pain or pressure, fever, nasal obstruction, and symptoms persisting or worsening after viral URI.", ["sinus", "infection"], "NEET"],
  ["ent", "Maxillary sinus drainage", "Why does maxillary sinus drain poorly?", "Its natural ostium is high on the medial wall, so gravity does not assist drainage well.", ["sinus", "anatomy"], "AIIMS"],
  ["ent", "Orbital cellulitis", "Name orbital complications of sinusitis.", "Preseptal cellulitis, orbital cellulitis, subperiosteal abscess, orbital abscess, and cavernous sinus thrombosis.", ["sinus", "complications"], "NEET"],
  ["ent", "Fungal sinusitis", "Which patients are at risk for invasive fungal sinusitis?", "Diabetes, immunosuppression, neutropenia, transplantation, and steroid exposure increase risk.", ["sinus", "fungal"], "AIIMS"],
  ["ent", "Tonsillitis", "What findings suggest acute tonsillitis?", "Sore throat, fever, odynophagia, tender cervical nodes, tonsillar congestion, enlargement, and exudates.", ["throat", "tonsil"], "NEET"],
  ["ent", "Quinsy", "What is quinsy?", "Peritonsillar abscess causing severe sore throat, trismus, muffled voice, uvular deviation, and drooling.", ["throat", "deep neck infection"], "AIIMS, NEET"],
  ["ent", "Adenoid hypertrophy", "What symptoms suggest adenoid hypertrophy?", "Nasal obstruction, mouth breathing, snoring, hyponasal speech, recurrent otitis media, and adenoid facies.", ["throat", "adenoid"], "NEET"],
  ["ent", "Retropharyngeal abscess", "Why is retropharyngeal abscess commoner in children?", "Retropharyngeal lymph nodes are prominent in young children and may suppurate after upper airway infections.", ["throat", "deep neck infection"], "AIIMS"],
  ["ent", "Ludwig angina", "What is Ludwig angina?", "Rapidly spreading cellulitis of submandibular, sublingual, and submental spaces, often odontogenic, with airway risk.", ["throat", "deep neck infection"], "AIIMS"],
  ["ent", "Diphtheria throat", "What throat finding suggests diphtheria?", "A gray adherent pseudomembrane that bleeds on removal with toxic systemic features suggests diphtheria.", ["throat", "infection"], "NEET"],
  ["ent", "Foreign body airway", "What presentation suggests laryngo-tracheobronchial foreign body?", "Sudden choking, cough, wheeze, stridor, unilateral reduced air entry, or recurrent pneumonia after aspiration.", ["airway", "foreign body"], "NEET"],
  ["ent", "Laryngeal anatomy", "Which recurrent laryngeal nerve injury causes hoarseness?", "Unilateral recurrent laryngeal nerve palsy paralyzes ipsilateral vocal cord and commonly causes hoarseness.", ["larynx", "nerve"], "NEET"],
  ["ent", "Superior laryngeal nerve", "What happens in external superior laryngeal nerve injury?", "Cricothyroid weakness causes impaired pitch control and voice fatigue, important for professional voice users.", ["larynx", "nerve"], "AIIMS"],
  ["ent", "Acute epiglottitis", "Name classic features of acute epiglottitis.", "High fever, toxic appearance, drooling, dysphagia, muffled voice, tripod posture, and rapidly progressive airway obstruction.", ["larynx", "emergency"], "NEET"],
  ["ent", "Croup", "What causes stridor in viral croup?", "Subglottic inflammation and edema narrow the pediatric airway, producing barking cough and inspiratory stridor.", ["pediatric ENT", "stridor"], "NEET"],
  ["ent", "Laryngomalacia", "What is the typical presentation of laryngomalacia?", "Infant inspiratory stridor that worsens with feeding, crying, or supine position and often improves with age.", ["pediatric ENT", "stridor"], "AIIMS"],
  ["ent", "Vocal nodule", "What causes vocal nodules?", "Chronic voice abuse causes bilateral symmetric nodules at the junction of anterior and middle thirds of vocal cords.", ["larynx", "voice"], "NEET"],
  ["ent", "Reinke edema", "What is Reinke edema associated with?", "Smoking and voice abuse cause diffuse polypoid edema of vocal cords with low-pitched hoarse voice.", ["larynx", "voice"], "AIIMS"],
  ["ent", "Laryngeal cancer", "What is the most common presenting symptom of glottic carcinoma?", "Persistent hoarseness is common because vocal cord involvement affects voice early.", ["head and neck", "larynx cancer"], "NEET"],
  ["ent", "Nasopharyngeal carcinoma", "Name common presentations of nasopharyngeal carcinoma.", "Neck node metastasis, nasal obstruction, epistaxis, serous otitis media, cranial nerve palsy, and headache.", ["head and neck", "tumor"], "AIIMS"],
  ["ent", "Juvenile nasopharyngeal angiofibroma", "What is classic for juvenile nasopharyngeal angiofibroma?", "Adolescent male with recurrent profuse epistaxis and nasal obstruction due to a vascular nasopharyngeal tumor.", ["nose", "tumor"], "AIIMS, NEET"],
  ["ent", "Pleomorphic adenoma", "What is the commonest benign salivary gland tumor?", "Pleomorphic adenoma, most often affecting the parotid gland.", ["salivary gland", "tumor"], "NEET"],
  ["ent", "Warthin tumor", "Which salivary tumor is linked to smoking and parotid tail?", "Warthin tumor is classically linked to older male smokers and often arises in the parotid tail.", ["salivary gland", "tumor"], "AIIMS"],
  ["ent", "Parotid malignancy sign", "What sign suggests malignant parotid tumor?", "Facial nerve palsy, pain, fixation, skin involvement, rapid growth, or neck nodes suggest malignancy.", ["salivary gland", "tumor"], "NEET"],
  ["ent", "Neck node levels", "Why are neck node levels important?", "They localize likely primary tumor sites and guide staging, imaging, neck dissection, and radiotherapy planning.", ["head and neck", "nodes"], "AIIMS"],
  ["ent", "Branchial cyst", "Where is a second branchial cleft cyst usually located?", "Along the anterior border of sternocleidomastoid, commonly in the upper lateral neck.", ["neck swelling", "congenital"], "NEET"],
  ["ent", "Thyroglossal cyst", "What movement is typical of thyroglossal duct cyst?", "It moves with swallowing and tongue protrusion because of attachment along the thyroglossal tract.", ["neck swelling", "congenital"], "NEET"],
  ["ent", "Tracheostomy indication", "Name common indications for tracheostomy.", "Upper airway obstruction, prolonged ventilation, airway protection, secretion management, and some head-neck surgeries.", ["airway", "tracheostomy"], "NEET"],
  ["ent", "Tracheostomy complication", "What is an early dangerous complication of tracheostomy?", "Hemorrhage, tube blockage, displacement, surgical emphysema, pneumothorax, and aspiration are early risks.", ["airway", "tracheostomy"], "AIIMS"],
  ["ent", "Danger space", "Why is danger space clinically important?", "Infection can spread from pharynx to posterior mediastinum through the danger space.", ["deep neck spaces", "anatomy"], "AIIMS"],
  ["ent", "ENT emergency priorities", "What is the first priority in ENT emergencies with stridor?", "Assess and secure the airway while minimizing distress and arranging expert airway support.", ["emergency", "airway"], "NEET"],
].map((item, index) => ({
  id: `ent-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/ent",
}));

const entSourceExpansionCards = [
  ["ent", "Pars flaccida retraction", "Why is pars flaccida retraction clinically important?", "It may form an attic retraction pocket that retains keratin and progresses to acquired cholesteatoma.", ["ear", "cholesteatoma"], "AIIMS"],
  ["ent", "Gradenigo syndrome", "What is Gradenigo syndrome?", "Petrous apicitis causing otorrhea, deep facial pain from trigeminal involvement, and abducens palsy.", ["ear", "complications"], "AIIMS"],
  ["ent", "Labyrinthitis", "What symptoms suggest labyrinthitis from middle-ear disease?", "Vertigo with sensorineural hearing loss, nausea, vomiting, and nystagmus in the setting of ear infection.", ["ear", "inner ear"], "NEET"],
  ["ent", "Myringoplasty", "What is the goal of myringoplasty?", "Repair of tympanic membrane perforation to create a dry ear and improve conductive hearing loss.", ["ear", "surgery"], "NEET"],
  ["ent", "Modified radical mastoidectomy", "When is modified radical mastoidectomy used?", "It is used for unsafe chronic otitis media with cholesteatoma while attempting to preserve or reconstruct hearing when feasible.", ["ear", "surgery"], "AIIMS"],
  ["ent", "Ototoxic drugs", "Name important ototoxic drug groups.", "Aminoglycosides, loop diuretics, cisplatin, salicylates, quinine, and some antimalarials may cause ototoxicity.", ["audiology", "ototoxicity"], "NEET"],
  ["ent", "OAE", "What do otoacoustic emissions assess?", "They assess outer hair cell function and are useful in newborn hearing screening.", ["audiology", "screening"], "NEET"],
  ["ent", "BERA", "What is BERA used for?", "Brainstem evoked response audiometry objectively assesses auditory pathway function and estimates hearing threshold in infants or non-cooperative patients.", ["audiology", "BERA"], "AIIMS"],
  ["ent", "Furunculosis ear", "What causes severe pain in a small external auditory canal furuncle?", "The cartilaginous canal skin is tightly adherent, so localized staphylococcal infection causes marked tenderness.", ["ear", "otitis externa"], "NEET"],
  ["ent", "Malignant otitis externa", "Who is at risk for malignant otitis externa?", "Elderly diabetic or immunocompromised patients are at risk, commonly due to invasive Pseudomonas infection.", ["ear", "otitis externa"], "AIIMS"],
  ["ent", "FESS principle", "What is the principle of functional endoscopic sinus surgery?", "Restore ventilation and drainage of diseased sinuses by addressing obstruction at the osteomeatal complex while preserving mucosa.", ["sinus", "FESS"], "NEET"],
  ["ent", "Cavernous sinus thrombosis", "Name features of cavernous sinus thrombosis.", "Fever, toxic state, chemosis, proptosis, ophthalmoplegia, cranial nerve palsies, and severe headache may occur.", ["sinus", "complications"], "AIIMS"],
  ["ent", "Inverted papilloma", "Why is inverted papilloma important?", "It is locally aggressive, tends to recur, and has an association with synchronous or metachronous squamous carcinoma.", ["nose", "tumor"], "AIIMS"],
  ["ent", "CSF rhinorrhea", "What bedside clue suggests CSF rhinorrhea?", "Clear watery unilateral rhinorrhea after trauma or surgery, salty taste, positional worsening, and beta-2 transferrin positivity support CSF leak.", ["nose", "trauma"], "NEET"],
  ["ent", "Angiofibroma biopsy", "Why is biopsy avoided in suspected juvenile nasopharyngeal angiofibroma?", "It is highly vascular and biopsy can cause severe bleeding; diagnosis is usually by imaging and clinical pattern.", ["nose", "tumor"], "AIIMS"],
  ["ent", "Tonsillectomy hemorrhage", "Differentiate reactionary and secondary hemorrhage after tonsillectomy.", "Reactionary hemorrhage occurs within 24 hours; secondary hemorrhage usually occurs days later, often with infection and slough separation.", ["throat", "tonsil surgery"], "NEET"],
  ["ent", "Obstructive sleep apnea ENT", "Name ENT contributors to obstructive sleep apnea.", "Adenotonsillar hypertrophy, nasal obstruction, obesity-related pharyngeal narrowing, retrognathia, and palatal collapse can contribute.", ["throat", "sleep"], "NEET"],
  ["ent", "Plummer-Vinson syndrome", "Why is Plummer-Vinson syndrome important in ENT?", "Iron deficiency dysphagia with post-cricoid web increases risk of upper aerodigestive squamous carcinoma.", ["throat", "dysphagia"], "AIIMS"],
  ["ent", "Zenker diverticulum", "What symptoms suggest pharyngeal pouch?", "Dysphagia, regurgitation of undigested food, halitosis, gurgling neck swelling, cough, and aspiration suggest Zenker diverticulum.", ["throat", "dysphagia"], "NEET"],
  ["ent", "Vocal cord palsy position", "What is the usual cord position in recurrent laryngeal nerve palsy?", "The affected cord commonly lies in paramedian position, causing hoarseness and weak cough.", ["larynx", "vocal cord palsy"], "NEET"],
  ["ent", "Bilateral abductor palsy", "How does bilateral abductor palsy present?", "Both cords lie near midline, causing stridor with relatively preserved voice.", ["larynx", "airway"], "AIIMS"],
  ["ent", "Ryle tube sign", "What is Ryle tube sign in laryngeal trauma?", "Blood-stained regurgitation or bubbling around a nasogastric tube can suggest pharyngoesophageal injury.", ["larynx", "trauma"], "AIIMS"],
  ["ent", "Subglottic stenosis", "What is a common acquired cause of subglottic stenosis?", "Prolonged endotracheal intubation can cause mucosal injury, scarring, and subglottic narrowing.", ["larynx", "stenosis"], "NEET"],
  ["ent", "Neck dissection", "What is radical neck dissection?", "Removal of cervical lymph node levels I-V with sternocleidomastoid, internal jugular vein, and spinal accessory nerve.", ["head and neck", "surgery"], "AIIMS"],
  ["ent", "Unknown primary neck node", "What is the approach to metastatic neck node with unknown primary?", "Detailed head-neck exam, flexible endoscopy, imaging, directed biopsies, tonsil evaluation, and histology-guided treatment planning.", ["head and neck", "nodes"], "NEET"],
].map((item, index) => ({
  id: `ent-source-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/ent",
}));

const medicineExpansionCards = [
  ["medicine", "ACS initial management", "What are immediate priorities in suspected acute coronary syndrome?", "Assess ABCs, obtain ECG and troponin, give antiplatelet therapy if not contraindicated, treat pain and hypoxia, risk stratify, and arrange reperfusion when indicated.", ["cardiology", "ACS"], "NEET"],
  ["medicine", "STEMI reperfusion", "When is reperfusion most important in STEMI?", "Reperfusion is time-critical for eligible STEMI patients, preferably by primary PCI when available or fibrinolysis when PCI delay is unacceptable.", ["cardiology", "STEMI"], "AIIMS, NEET"],
  ["medicine", "NSTEMI marker", "Which biomarker supports myocardial necrosis in NSTEMI?", "Cardiac troponin rise or fall with ischemic symptoms or ECG changes supports myocardial infarction.", ["cardiology", "troponin"], "NEET"],
  ["medicine", "Heart failure reduced EF", "Name core drug classes for chronic HFrEF.", "ARNI or ACE inhibitor/ARB, beta blocker, mineralocorticoid receptor antagonist, and SGLT2 inhibitor form core disease-modifying therapy.", ["cardiology", "heart failure"], "AIIMS"],
  ["medicine", "Pulmonary edema", "What clinical features suggest acute cardiogenic pulmonary edema?", "Severe dyspnea, orthopnea, crackles, hypoxia, pink frothy sputum, hypertension or shock, and elevated JVP may occur.", ["cardiology", "emergency"], "NEET"],
  ["medicine", "Atrial fibrillation priorities", "What are management priorities in atrial fibrillation?", "Assess hemodynamic stability, rate or rhythm control, search triggers, and estimate thromboembolic risk for anticoagulation.", ["cardiology", "arrhythmia"], "NEET"],
  ["medicine", "Narrow complex tachycardia", "What is initial treatment for stable regular narrow-complex tachycardia?", "Vagal maneuvers followed by adenosine if appropriate; synchronized cardioversion is used if unstable.", ["cardiology", "arrhythmia"], "AIIMS"],
  ["medicine", "Complete heart block", "What ECG pattern defines complete heart block?", "Atrioventricular dissociation with independent atrial and ventricular rhythms, often with slow escape rhythm.", ["cardiology", "ECG"], "NEET"],
  ["medicine", "Aortic stenosis triad", "Name classic symptoms of severe aortic stenosis.", "Exertional dyspnea or heart failure, angina, and syncope are classic symptoms.", ["cardiology", "valvular"], "NEET"],
  ["medicine", "Infective endocarditis", "What supports diagnosis of infective endocarditis?", "Positive blood cultures, echocardiographic vegetation, new regurgitation, embolic phenomena, fever, and predisposing cardiac lesions support diagnosis.", ["cardiology", "infection"], "AIIMS"],
  ["medicine", "Hypertensive emergency", "Define hypertensive emergency.", "Severe blood pressure elevation with acute target-organ damage such as encephalopathy, pulmonary edema, ACS, AKI, aortic dissection, or retinal changes.", ["cardiology", "hypertension"], "NEET"],
  ["medicine", "Aortic dissection", "What features suggest aortic dissection?", "Abrupt tearing chest or back pain, pulse or BP differential, neurologic deficit, syncope, and mediastinal widening may suggest dissection.", ["cardiology", "vascular"], "AIIMS"],
  ["medicine", "Asthma diagnosis", "What supports asthma diagnosis?", "Variable respiratory symptoms with reversible airflow obstruction or significant peak-flow variability support asthma.", ["pulmonology", "asthma"], "NEET"],
  ["medicine", "Acute severe asthma", "Name danger signs in acute severe asthma.", "Silent chest, exhaustion, cyanosis, altered sensorium, bradycardia, hypotension, inability to speak, and falling PaCO2 compensation failure are danger signs.", ["pulmonology", "emergency"], "AIIMS"],
  ["medicine", "COPD exacerbation", "What are common triggers of COPD exacerbation?", "Respiratory infection, air pollution, poor adherence, pulmonary embolism, pneumothorax, and heart failure may trigger exacerbation.", ["pulmonology", "COPD"], "NEET"],
  ["medicine", "Pneumonia severity", "What does CURB-65 assess?", "Confusion, urea, respiratory rate, blood pressure, and age 65 or more help estimate pneumonia severity.", ["pulmonology", "pneumonia"], "NEET"],
  ["medicine", "Pleural effusion exudate", "What distinguishes exudative pleural effusion?", "High pleural protein or LDH by Light criteria suggests inflammation, infection, malignancy, or pulmonary embolism.", ["pulmonology", "pleura"], "AIIMS"],
  ["medicine", "Pulmonary embolism", "What features suggest pulmonary embolism?", "Acute dyspnea, pleuritic chest pain, tachycardia, hypoxia, hemoptysis, syncope, DVT signs, or unexplained shock.", ["pulmonology", "embolism"], "NEET"],
  ["medicine", "ARDS", "What is ARDS?", "Acute inflammatory lung injury causing hypoxemia, bilateral opacities, reduced compliance, and respiratory failure not fully explained by cardiac failure.", ["pulmonology", "critical care"], "AIIMS"],
  ["medicine", "TB treatment principle", "Why is multidrug therapy used in tuberculosis?", "Combination therapy rapidly kills bacilli, prevents resistance, sterilizes lesions, and reduces relapse.", ["infectious disease", "TB"], "NEET"],
  ["medicine", "HIV opportunistic infection", "Which infection is common at CD4 count below 200?", "Pneumocystis jirovecii pneumonia is classically associated with CD4 count below 200 cells per microliter.", ["infectious disease", "HIV"], "NEET"],
  ["medicine", "Sepsis", "What is sepsis?", "Life-threatening organ dysfunction caused by a dysregulated host response to infection.", ["infectious disease", "sepsis"], "AIIMS"],
  ["medicine", "Septic shock", "What defines septic shock clinically?", "Sepsis with persistent hypotension requiring vasopressors and elevated lactate despite adequate fluid resuscitation.", ["infectious disease", "shock"], "NEET"],
  ["medicine", "Malaria severe", "Name severe malaria features.", "Impaired consciousness, severe anemia, renal failure, jaundice, acidosis, hypoglycemia, pulmonary edema, shock, bleeding, and high parasitemia.", ["infectious disease", "malaria"], "AIIMS"],
  ["medicine", "Dengue warning signs", "Name dengue warning signs.", "Abdominal pain, persistent vomiting, mucosal bleed, lethargy, hepatomegaly, fluid accumulation, rising hematocrit with falling platelets.", ["infectious disease", "dengue"], "NEET"],
  ["medicine", "Enteric fever", "What complications are feared in enteric fever?", "Intestinal hemorrhage, ileal perforation, encephalopathy, shock, myocarditis, and relapse are important complications.", ["infectious disease", "typhoid"], "NEET"],
  ["medicine", "Meningitis empiric clue", "What CSF pattern suggests bacterial meningitis?", "Neutrophilic pleocytosis, high protein, low glucose, and raised opening pressure suggest bacterial meningitis.", ["neurology", "infection"], "NEET"],
  ["medicine", "Stroke thrombolysis", "What must be excluded before thrombolysis in ischemic stroke?", "Intracranial hemorrhage, major contraindications, and stroke mimics must be excluded before thrombolysis.", ["neurology", "stroke"], "AIIMS"],
  ["medicine", "TIA", "What is transient ischemic attack?", "A transient focal neurological deficit due to ischemia without acute infarction on imaging.", ["neurology", "stroke"], "NEET"],
  ["medicine", "Status epilepticus", "What is first-line treatment for convulsive status epilepticus?", "Immediate stabilization and benzodiazepine therapy are first-line, followed by longer-acting antiseizure medication.", ["neurology", "seizure"], "AIIMS, NEET"],
  ["medicine", "Parkinson disease", "Name cardinal motor features of Parkinson disease.", "Bradykinesia with resting tremor, rigidity, and postural instability are key motor features.", ["neurology", "movement disorder"], "NEET"],
  ["medicine", "GBS", "What presentation suggests Guillain-Barre syndrome?", "Acute ascending weakness, areflexia, mild sensory symptoms, autonomic dysfunction, and albuminocytologic dissociation.", ["neurology", "neuropathy"], "AIIMS"],
  ["medicine", "Myasthenia gravis", "What is typical of myasthenia gravis?", "Fluctuating fatigable weakness, commonly ocular or bulbar, caused by impaired neuromuscular transmission.", ["neurology", "NMJ"], "NEET"],
  ["medicine", "Multiple sclerosis", "What clinical pattern suggests multiple sclerosis?", "Neurologic deficits separated in time and space, optic neuritis, sensory symptoms, weakness, and MRI demyelinating lesions.", ["neurology", "demyelination"], "AIIMS"],
  ["medicine", "AKI definition", "What is acute kidney injury?", "Abrupt decline in kidney function shown by rising creatinine, reduced urine output, or both.", ["nephrology", "AKI"], "NEET"],
  ["medicine", "Prerenal AKI", "Name clues favoring prerenal AKI.", "Volume depletion, hypotension, low urine sodium, high urine osmolality, bland sediment, and rapid improvement with perfusion restoration.", ["nephrology", "AKI"], "NEET"],
  ["medicine", "Nephrotic syndrome", "Define nephrotic syndrome.", "Heavy proteinuria, hypoalbuminemia, edema, hyperlipidemia, and lipiduria characterize nephrotic syndrome.", ["nephrology", "glomerular"], "NEET"],
  ["medicine", "Nephritic syndrome", "Define nephritic syndrome.", "Hematuria with RBC casts, hypertension, oliguria, edema, and variable proteinuria suggests nephritic syndrome.", ["nephrology", "glomerular"], "AIIMS"],
  ["medicine", "Hyperkalemia ECG", "Name ECG changes in hyperkalemia.", "Tall peaked T waves, PR prolongation, QRS widening, loss of P waves, sine-wave pattern, and arrhythmias may occur.", ["nephrology", "electrolytes"], "NEET"],
  ["medicine", "Hyponatremia danger", "Why is rapid correction of chronic hyponatremia dangerous?", "Overcorrection can cause osmotic demyelination syndrome.", ["nephrology", "electrolytes"], "AIIMS"],
  ["medicine", "DKA", "What defines diabetic ketoacidosis?", "Hyperglycemia, ketosis, and high anion-gap metabolic acidosis due to insulin deficiency.", ["endocrinology", "diabetes"], "NEET"],
  ["medicine", "HHS", "How does hyperosmolar hyperglycemic state differ from DKA?", "HHS has severe hyperglycemia and hyperosmolality with minimal ketosis and less acidosis.", ["endocrinology", "diabetes"], "AIIMS"],
  ["medicine", "Hypoglycemia treatment", "What is immediate treatment of severe hypoglycemia?", "Give rapid glucose by oral route if conscious or IV dextrose/glucagon if unable to safely swallow.", ["endocrinology", "emergency"], "NEET"],
  ["medicine", "Thyroid storm", "Name features of thyroid storm.", "Fever, tachyarrhythmia, agitation or delirium, heart failure, diarrhea, vomiting, and precipitating illness.", ["endocrinology", "thyroid"], "AIIMS"],
  ["medicine", "Myxedema coma", "What suggests myxedema coma?", "Hypothermia, altered sensorium, bradycardia, hypoventilation, hyponatremia, hypotension, and severe hypothyroidism.", ["endocrinology", "thyroid"], "NEET"],
  ["medicine", "Adrenal crisis", "What is adrenal crisis?", "Acute cortisol deficiency causing shock, vomiting, abdominal pain, hyponatremia, hyperkalemia, hypoglycemia, and weakness.", ["endocrinology", "adrenal"], "AIIMS"],
  ["medicine", "Cushing syndrome", "Name classic features of Cushing syndrome.", "Central obesity, proximal myopathy, purple striae, hypertension, diabetes, osteoporosis, bruising, and mood changes.", ["endocrinology", "adrenal"], "NEET"],
  ["medicine", "Acromegaly", "What clinical features suggest acromegaly?", "Enlarged hands and feet, coarse facial features, jaw enlargement, sweating, headaches, sleep apnea, diabetes, and hypertension.", ["endocrinology", "pituitary"], "NEET"],
  ["medicine", "Upper GI bleed", "What are priorities in upper GI bleed?", "Resuscitation, risk assessment, blood products if needed, acid suppression when appropriate, endoscopy, and treatment of underlying cause.", ["gastroenterology", "GI bleed"], "NEET"],
  ["medicine", "Cirrhosis decompensation", "Name decompensating events in cirrhosis.", "Ascites, variceal bleeding, hepatic encephalopathy, jaundice, spontaneous bacterial peritonitis, and hepatorenal syndrome.", ["hepatology", "cirrhosis"], "AIIMS"],
  ["medicine", "Ascitic fluid SAAG", "What does high SAAG ascites indicate?", "SAAG of 1.1 g/dL or more suggests portal hypertension as the mechanism.", ["hepatology", "ascites"], "NEET"],
  ["medicine", "Hepatic encephalopathy", "Name precipitating factors for hepatic encephalopathy.", "GI bleed, infection, constipation, dehydration, electrolyte disturbance, sedatives, renal failure, and excess dietary nitrogen may precipitate it.", ["hepatology", "encephalopathy"], "NEET"],
  ["medicine", "Acute pancreatitis", "What findings support acute pancreatitis?", "Typical epigastric pain radiating to back, elevated lipase or amylase, and imaging evidence support diagnosis.", ["gastroenterology", "pancreas"], "NEET"],
  ["medicine", "IBD difference", "How does ulcerative colitis differ from Crohn disease?", "UC is continuous mucosal colitis starting at rectum; Crohn is transmural, skip lesions, and can affect any GI segment.", ["gastroenterology", "IBD"], "AIIMS"],
  ["medicine", "Celiac disease", "What is celiac disease?", "Immune-mediated gluten-sensitive enteropathy causing villous atrophy, malabsorption, anemia, diarrhea, and weight loss.", ["gastroenterology", "malabsorption"], "NEET"],
  ["medicine", "Iron deficiency anemia", "Name classic iron studies in iron deficiency anemia.", "Low ferritin, low serum iron, high TIBC, low transferrin saturation, and microcytic hypochromic anemia.", ["hematology", "anemia"], "NEET"],
  ["medicine", "Megaloblastic anemia", "What causes macro-ovalocytes and hypersegmented neutrophils?", "Impaired DNA synthesis from vitamin B12 or folate deficiency causes megaloblastic anemia.", ["hematology", "anemia"], "NEET"],
  ["medicine", "Hemolysis labs", "Name laboratory features of hemolysis.", "Raised indirect bilirubin, LDH, reticulocytes, low haptoglobin, and hemoglobinuria in intravascular hemolysis.", ["hematology", "hemolysis"], "AIIMS"],
  ["medicine", "DIC", "What is disseminated intravascular coagulation?", "Systemic coagulation activation causing microthrombi, consumption of platelets and factors, bleeding, and organ dysfunction.", ["hematology", "coagulation"], "NEET"],
  ["medicine", "ITP", "What is typical of immune thrombocytopenia?", "Isolated thrombocytopenia with mucocutaneous bleeding and otherwise relatively normal coagulation tests.", ["hematology", "platelets"], "NEET"],
  ["medicine", "Acute leukemia", "What features suggest acute leukemia?", "Anemia, infections, bleeding, bone pain, lymphadenopathy, hepatosplenomegaly, and circulating blasts.", ["hematology", "leukemia"], "AIIMS"],
  ["medicine", "Multiple myeloma", "Name CRAB features of multiple myeloma.", "HyperCalcemia, Renal dysfunction, Anemia, and Bone lesions are classic myeloma-related organ damage.", ["hematology", "myeloma"], "NEET"],
  ["medicine", "SLE", "Name common clinical features of SLE.", "Malar rash, photosensitivity, arthritis, oral ulcers, serositis, nephritis, cytopenias, neurologic disease, and autoantibodies.", ["rheumatology", "SLE"], "NEET"],
  ["medicine", "Rheumatoid arthritis", "What pattern suggests rheumatoid arthritis?", "Symmetric inflammatory polyarthritis of small joints with morning stiffness, erosions, RF or anti-CCP positivity.", ["rheumatology", "arthritis"], "NEET"],
  ["medicine", "Ankylosing spondylitis", "What suggests inflammatory back pain?", "Young onset, insidious back pain, morning stiffness, improvement with exercise, night pain, and sacroiliitis.", ["rheumatology", "spondyloarthritis"], "AIIMS"],
  ["medicine", "Gout", "What is the crystal finding in gout?", "Needle-shaped negatively birefringent monosodium urate crystals are seen in synovial fluid.", ["rheumatology", "crystals"], "NEET"],
  ["medicine", "ANCA vasculitis", "Name examples of ANCA-associated vasculitis.", "Granulomatosis with polyangiitis, microscopic polyangiitis, and eosinophilic granulomatosis with polyangiitis.", ["rheumatology", "vasculitis"], "AIIMS"],
  ["medicine", "Anaphylaxis", "What is first-line treatment for anaphylaxis?", "Immediate intramuscular adrenaline with airway support, oxygen, fluids, bronchodilator, and observation.", ["emergency", "allergy"], "NEET"],
  ["medicine", "Organophosphate poisoning", "Name cholinergic features of organophosphate poisoning.", "Salivation, lacrimation, urination, diarrhea, bronchorrhea, bronchospasm, bradycardia, miosis, fasciculations, and weakness.", ["toxicology", "poisoning"], "NEET"],
  ["medicine", "Acetaminophen poisoning", "What antidote is used for paracetamol poisoning?", "N-acetylcysteine replenishes glutathione and reduces hepatic injury when given appropriately.", ["toxicology", "antidote"], "AIIMS"],
  ["medicine", "Heat stroke", "What defines heat stroke?", "Core hyperthermia with central nervous system dysfunction after heat exposure or exertion.", ["emergency", "environmental"], "NEET"],
  ["medicine", "Shock types", "Name major shock categories.", "Hypovolemic, cardiogenic, distributive, and obstructive shock are major categories.", ["emergency", "shock"], "NEET"],
  ["medicine", "Coma approach", "What reversible causes should be checked quickly in coma?", "Hypoglycemia, hypoxia, opioid toxicity, seizures, electrolyte disorders, infection, trauma, and stroke should be considered rapidly.", ["emergency", "coma"], "AIIMS"],
  ["medicine", "Fever with rash", "Name dangerous causes of fever with rash.", "Meningococcemia, rickettsial disease, dengue, measles, varicella, toxic shock, drug reactions, and viral hemorrhagic fevers.", ["infectious disease", "rash"], "NEET"],
  ["medicine", "Antibiotic stewardship", "What is antibiotic stewardship?", "Selecting the right antibiotic, dose, route, duration, and de-escalation strategy to improve outcomes and reduce resistance.", ["infectious disease", "antibiotics"], "AIIMS"],
  ["medicine", "Geriatric prescribing", "Why are older adults at higher drug adverse-event risk?", "Reduced renal reserve, polypharmacy, altered pharmacokinetics, comorbidity, frailty, and cognitive impairment increase risk.", ["geriatrics", "pharmacology"], "NEET"],
  ["medicine", "Palliative care", "What is the goal of palliative care?", "Improve quality of life by addressing symptoms, psychosocial distress, communication, goals of care, and family support.", ["medicine", "palliative"], "NEET"],
].map((item, index) => ({
  id: `medicine-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/medicine",
}));

const obgExpansionCards = [
  ["obg", "Menstrual cycle hormones", "What hormone pattern triggers ovulation?", "Sustained high estradiol from the dominant follicle produces positive feedback and an LH surge, triggering ovulation.", ["gynecology", "endocrinology"], "NEET"],
  ["obg", "Primary amenorrhea", "Define primary amenorrhea.", "Absence of menarche by expected age, especially by 15 years with secondary sexual characters or by 13 years without them, needs evaluation.", ["gynecology", "amenorrhea"], "NEET"],
  ["obg", "Secondary amenorrhea", "What is the first test in secondary amenorrhea?", "Pregnancy testing is the first step before endocrine or structural evaluation.", ["gynecology", "amenorrhea"], "NEET"],
  ["obg", "PCOS criteria", "Name Rotterdam criteria for PCOS.", "Oligo-anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology; two of three after excluding mimics.", ["gynecology", "PCOS"], "AIIMS, NEET"],
  ["obg", "AUB PALM-COEIN", "What does PALM-COEIN classify?", "It classifies abnormal uterine bleeding into structural causes and nonstructural causes.", ["gynecology", "AUB"], "NEET"],
  ["obg", "Fibroid symptoms", "Name common symptoms of uterine fibroid.", "Heavy menstrual bleeding, dysmenorrhea, pressure symptoms, infertility, recurrent pregnancy loss, and anemia may occur.", ["gynecology", "fibroid"], "NEET"],
  ["obg", "Endometriosis", "What symptoms suggest endometriosis?", "Progressive dysmenorrhea, deep dyspareunia, chronic pelvic pain, infertility, and cyclic bowel or urinary symptoms.", ["gynecology", "endometriosis"], "NEET"],
  ["obg", "Adenomyosis", "What clinical pattern suggests adenomyosis?", "Multiparous woman with heavy painful periods and uniformly enlarged tender uterus.", ["gynecology", "adenomyosis"], "AIIMS"],
  ["obg", "Ectopic pregnancy", "Name classic ectopic pregnancy features.", "Amenorrhea, abdominal pain, vaginal bleeding, adnexal tenderness, positive pregnancy test, and possible shock if ruptured.", ["obstetrics", "ectopic"], "NEET"],
  ["obg", "Molar pregnancy", "What suggests hydatidiform mole?", "Bleeding in early pregnancy, uterus larger than dates, very high beta-hCG, hyperemesis, theca lutein cysts, and snowstorm ultrasound.", ["obstetrics", "GTD"], "AIIMS"],
  ["obg", "Antenatal visit dating", "Which ultrasound is most accurate for dating pregnancy?", "First-trimester crown-rump length is most accurate for pregnancy dating.", ["obstetrics", "antenatal care"], "NEET"],
  ["obg", "Nuchal translucency", "When is nuchal translucency measured?", "It is measured in the first trimester, classically around 11 to 13 weeks plus 6 days.", ["obstetrics", "screening"], "NEET"],
  ["obg", "Preeclampsia", "Define preeclampsia.", "New-onset hypertension after 20 weeks with proteinuria or maternal organ dysfunction or uteroplacental dysfunction.", ["obstetrics", "hypertension"], "NEET"],
  ["obg", "Severe preeclampsia", "Name severe features of preeclampsia.", "Severe hypertension, thrombocytopenia, renal impairment, liver dysfunction, pulmonary edema, cerebral or visual symptoms, and severe fetal growth restriction.", ["obstetrics", "hypertension"], "AIIMS"],
  ["obg", "Eclampsia", "What is first-line anticonvulsant in eclampsia?", "Magnesium sulfate is first-line for prevention and treatment of eclamptic seizures.", ["obstetrics", "emergency"], "NEET"],
  ["obg", "HELLP", "What does HELLP stand for?", "Hemolysis, elevated liver enzymes, and low platelets.", ["obstetrics", "hypertension"], "NEET"],
  ["obg", "GDM screening", "Why screen for gestational diabetes?", "GDM increases risk of macrosomia, shoulder dystocia, neonatal hypoglycemia, preeclampsia, cesarean delivery, and future diabetes.", ["obstetrics", "diabetes"], "NEET"],
  ["obg", "Placenta previa", "What bleeding pattern suggests placenta previa?", "Painless recurrent bright-red bleeding in the second half of pregnancy suggests placenta previa.", ["obstetrics", "antepartum hemorrhage"], "NEET"],
  ["obg", "Abruption", "What bleeding pattern suggests placental abruption?", "Painful bleeding with tender tense uterus, fetal distress, shock, or coagulopathy suggests abruption.", ["obstetrics", "antepartum hemorrhage"], "AIIMS"],
  ["obg", "PPROM", "What is PPROM?", "Preterm prelabor rupture of membranes is rupture before onset of labor and before 37 weeks.", ["obstetrics", "preterm"], "NEET"],
  ["obg", "Preterm labor", "What defines preterm labor?", "Regular uterine contractions causing cervical change before 37 completed weeks.", ["obstetrics", "preterm"], "NEET"],
  ["obg", "Fetal growth restriction", "What Doppler vessel is central in FGR monitoring?", "Umbilical artery Doppler is central for placental resistance and fetal risk assessment.", ["obstetrics", "FGR"], "AIIMS"],
  ["obg", "Partograph", "What is the role of partograph?", "It tracks labor progress, fetal status, maternal condition, and helps detect prolonged or obstructed labor.", ["obstetrics", "labor"], "NEET"],
  ["obg", "Active management third stage", "What is the key drug in active management of third stage of labor?", "Oxytocin is the key uterotonic used to reduce postpartum hemorrhage.", ["obstetrics", "labor"], "NEET"],
  ["obg", "Shoulder dystocia", "What is first maneuver for shoulder dystocia?", "McRoberts maneuver with suprapubic pressure is commonly first-line.", ["obstetrics", "emergency"], "AIIMS"],
  ["obg", "Cord prolapse", "What is immediate priority in cord prolapse?", "Relieve cord compression, position mother, avoid handling cord, and expedite delivery if fetus is viable.", ["obstetrics", "emergency"], "NEET"],
  ["obg", "PPH definition", "What is postpartum hemorrhage?", "Excessive bleeding after delivery causing hemodynamic compromise or meeting volume thresholds after vaginal or cesarean birth.", ["obstetrics", "PPH"], "NEET"],
  ["obg", "PPH causes", "Name the four Ts of postpartum hemorrhage.", "Tone, trauma, tissue, and thrombin.", ["obstetrics", "PPH"], "NEET"],
  ["obg", "Uterine rupture", "Name signs of uterine rupture.", "Sudden pain, fetal distress, loss of station, vaginal bleeding, shock, cessation of contractions, and abnormal uterine contour.", ["obstetrics", "emergency"], "AIIMS"],
  ["obg", "Puerperal sepsis", "What suggests puerperal sepsis?", "Fever after delivery with uterine tenderness, foul lochia, tachycardia, pelvic pain, or systemic toxicity.", ["obstetrics", "puerperium"], "NEET"],
  ["obg", "Lactational amenorrhea", "When is LAM effective?", "It is effective when the mother is amenorrheic, fully or nearly fully breastfeeding, and within 6 months postpartum.", ["contraception", "LAM"], "NEET"],
  ["obg", "IUCD contraindication", "Name important contraindications to IUCD insertion.", "Pregnancy, active pelvic infection, unexplained genital bleeding, uterine cavity distortion, and genital tract malignancy are important contraindications.", ["contraception", "IUCD"], "NEET"],
  ["obg", "Emergency contraception", "What are options for emergency contraception?", "Levonorgestrel, ulipristal where available, and copper IUCD are emergency contraception options.", ["contraception", "emergency"], "AIIMS"],
  ["obg", "Infertility workup", "Name core components of infertility evaluation.", "Ovulation assessment, semen analysis, tubal patency, uterine cavity evaluation, and endocrine testing when indicated.", ["gynecology", "infertility"], "NEET"],
  ["obg", "Cervical cancer screening", "Why is HPV testing useful in cervical screening?", "Persistent high-risk HPV infection is the causal driver of most cervical cancers, so HPV testing identifies high-risk women.", ["gynecology oncology", "cervix"], "NEET"],
  ["obg", "Cervical cancer spread", "What is the main route of cervical cancer spread?", "Local extension and lymphatic spread to pelvic nodes are important; hematogenous spread occurs later.", ["gynecology oncology", "cervix"], "AIIMS"],
  ["obg", "Endometrial cancer risk", "Name risk factors for endometrial carcinoma.", "Unopposed estrogen, obesity, anovulation, nulliparity, diabetes, hypertension, tamoxifen, and Lynch syndrome increase risk.", ["gynecology oncology", "endometrium"], "NEET"],
  ["obg", "Ovarian cancer marker", "Which tumor marker is commonly followed in epithelial ovarian cancer?", "CA-125 is commonly used for monitoring epithelial ovarian cancer, though it is not specific for screening average-risk women.", ["gynecology oncology", "ovary"], "NEET"],
  ["obg", "Germ cell ovarian tumor marker", "Which marker suggests yolk sac tumor?", "Alpha-fetoprotein is characteristically elevated in yolk sac tumor.", ["gynecology oncology", "ovary"], "AIIMS"],
  ["obg", "Pelvic organ prolapse", "Name symptoms of pelvic organ prolapse.", "Vaginal bulge, pelvic pressure, urinary symptoms, bowel symptoms, sexual dysfunction, and ulceration may occur.", ["urogynecology", "prolapse"], "NEET"],
  ["obg", "Stress incontinence", "What causes stress urinary incontinence?", "Urethral hypermobility or intrinsic sphincter deficiency causes leakage with cough, sneeze, or exertion.", ["urogynecology", "incontinence"], "NEET"],
  ["obg", "Menopause", "Define menopause.", "Permanent cessation of menstruation due to loss of ovarian follicular activity, diagnosed retrospectively after 12 months of amenorrhea.", ["gynecology", "menopause"], "NEET"],
  ["obg", "PID", "What features suggest pelvic inflammatory disease?", "Lower abdominal pain, cervical motion tenderness, adnexal tenderness, fever, discharge, and elevated inflammatory markers may occur.", ["gynecology", "infection"], "NEET"],
  ["obg", "Vaginal discharge clue", "What discharge suggests bacterial vaginosis?", "Thin gray-white discharge with fishy odor, clue cells, and elevated vaginal pH suggests bacterial vaginosis.", ["gynecology", "infection"], "AIIMS"],
].map((item, index) => ({
  id: `obg-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/obgyn",
}));

const pediatricsExpansionCards = [
  ["pediatrics", "APGAR", "What does APGAR score assess?", "Appearance, Pulse, Grimace, Activity, and Respiration are assessed at defined times after birth.", ["neonatology", "resuscitation"], "NEET"],
  ["pediatrics", "Neonatal resuscitation first steps", "What are initial steps in neonatal resuscitation?", "Warm, position airway, clear secretions if needed, dry, stimulate, and assess breathing and heart rate.", ["neonatology", "resuscitation"], "NEET"],
  ["pediatrics", "Positive pressure ventilation newborn", "When is PPV started in neonatal resuscitation?", "Start PPV when the baby is apneic or gasping, or heart rate is below 100 per minute after initial steps.", ["neonatology", "resuscitation"], "AIIMS"],
  ["pediatrics", "RDS", "What causes respiratory distress syndrome in preterm neonates?", "Surfactant deficiency causes alveolar collapse, reduced compliance, hypoxemia, and respiratory distress.", ["neonatology", "RDS"], "NEET"],
  ["pediatrics", "Transient tachypnea newborn", "What causes TTN?", "Delayed clearance of fetal lung fluid causes early tachypnea, especially after cesarean delivery or maternal diabetes.", ["neonatology", "respiratory"], "NEET"],
  ["pediatrics", "Neonatal sepsis", "Name risk factors for early-onset neonatal sepsis.", "Maternal fever, chorioamnionitis, prolonged rupture of membranes, prematurity, low birth weight, and maternal colonization increase risk.", ["neonatology", "sepsis"], "NEET"],
  ["pediatrics", "Physiologic jaundice", "When is neonatal jaundice pathologic?", "Jaundice in first 24 hours, rapid rise, very high bilirubin, prolonged jaundice, conjugated bilirubin, or sick baby is pathologic.", ["neonatology", "jaundice"], "AIIMS"],
  ["pediatrics", "Kernicterus", "What is kernicterus?", "Bilirubin-induced neurologic dysfunction from unconjugated bilirubin deposition in basal ganglia and brainstem nuclei.", ["neonatology", "jaundice"], "NEET"],
  ["pediatrics", "Hypoglycemia newborn", "Name risk groups for neonatal hypoglycemia.", "Infants of diabetic mothers, SGA, LGA, preterm, sick neonates, and those with perinatal stress are at risk.", ["neonatology", "metabolic"], "NEET"],
  ["pediatrics", "Kangaroo mother care", "What are benefits of kangaroo mother care?", "Skin-to-skin care improves thermal control, breastfeeding, bonding, weight gain, and outcomes in low-birth-weight infants.", ["neonatology", "LBW"], "NEET"],
  ["pediatrics", "Exclusive breastfeeding", "What is exclusive breastfeeding?", "Only breast milk for 6 months, with no other food or drink except indicated medicines, ORS, vitamins, or minerals.", ["nutrition", "breastfeeding"], "NEET"],
  ["pediatrics", "Complementary feeding", "When should complementary feeding start?", "Start at 6 completed months while continuing breastfeeding.", ["nutrition", "infant feeding"], "NEET"],
  ["pediatrics", "SAM", "Define severe acute malnutrition.", "Very low weight-for-height, visible severe wasting, nutritional edema, or low MUAC according to age criteria indicates SAM.", ["nutrition", "malnutrition"], "NEET"],
  ["pediatrics", "Vitamin D deficiency", "Name pediatric signs of rickets.", "Craniotabes, delayed fontanel closure, rachitic rosary, wrist widening, bow legs, delayed milestones, and hypocalcemic seizures.", ["nutrition", "rickets"], "NEET"],
  ["pediatrics", "Development gross motor", "When does a child usually sit without support?", "Sitting without support commonly develops around 6 to 8 months.", ["development", "milestones"], "NEET"],
  ["pediatrics", "Development language", "When does a child usually speak meaningful words?", "Meaningful single words commonly appear around 12 months.", ["development", "milestones"], "NEET"],
  ["pediatrics", "Red flag development", "Name developmental red flags.", "No social smile by 3 months, no head control by 4 months, not sitting by 9 months, not walking by 18 months, or loss of milestones.", ["development", "delay"], "AIIMS"],
  ["pediatrics", "Febrile seizure", "What is a simple febrile seizure?", "Generalized seizure lasting less than 15 minutes, not recurring within 24 hours, in a neurologically normal child with fever.", ["neurology", "seizure"], "NEET"],
  ["pediatrics", "Status epilepticus child", "What is first-line treatment for pediatric convulsive status epilepticus?", "Airway support, glucose check, and benzodiazepine therapy are first-line.", ["neurology", "emergency"], "AIIMS"],
  ["pediatrics", "Acute watery diarrhea", "What is the cornerstone of diarrhea management?", "Rehydration with ORS or IV fluids by dehydration severity plus continued feeding and zinc where recommended.", ["gastroenterology", "diarrhea"], "NEET"],
  ["pediatrics", "Severe dehydration", "Name signs of severe dehydration.", "Lethargy or unconsciousness, sunken eyes, inability to drink or drinking poorly, and very slow skin pinch.", ["gastroenterology", "dehydration"], "NEET"],
  ["pediatrics", "Pneumonia fast breathing", "Why is respiratory rate important in childhood pneumonia?", "Age-specific fast breathing is a key sign for pneumonia classification in children with cough or difficult breathing.", ["respiratory", "pneumonia"], "NEET"],
  ["pediatrics", "Bronchiolitis", "What presentation suggests bronchiolitis?", "Infant with viral prodrome, cough, tachypnea, wheeze or crackles, feeding difficulty, and respiratory distress.", ["respiratory", "bronchiolitis"], "NEET"],
  ["pediatrics", "Asthma child", "What supports asthma in a child?", "Recurrent wheeze, cough, triggers, atopy, reversibility, night symptoms, and response to bronchodilator support asthma.", ["respiratory", "asthma"], "NEET"],
  ["pediatrics", "Cyanotic spell", "What is initial management of tet spell?", "Knee-chest position, oxygen, morphine, fluids, beta blocker, correction of acidosis, and urgent specialist care.", ["cardiology", "TOF"], "AIIMS"],
  ["pediatrics", "VSD murmur", "What murmur is typical of VSD?", "A harsh pansystolic murmur at the left lower sternal border is typical.", ["cardiology", "CHD"], "NEET"],
  ["pediatrics", "PDA", "What murmur suggests patent ductus arteriosus?", "A continuous machinery murmur below the left clavicle suggests PDA.", ["cardiology", "CHD"], "NEET"],
  ["pediatrics", "Rheumatic fever", "What are Jones criteria used for?", "They guide diagnosis of acute rheumatic fever using major, minor, and evidence of streptococcal infection.", ["cardiology", "rheumatic fever"], "NEET"],
  ["pediatrics", "Nephrotic syndrome child", "What is commonest nephrotic syndrome in children?", "Minimal change disease is the commonest cause of nephrotic syndrome in children.", ["nephrology", "nephrotic"], "NEET"],
  ["pediatrics", "HUS", "What triad defines hemolytic uremic syndrome?", "Microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury.", ["nephrology", "HUS"], "AIIMS"],
  ["pediatrics", "UTI child", "What symptoms may suggest UTI in infants?", "Fever without focus, poor feeding, vomiting, irritability, failure to thrive, or jaundice may suggest UTI.", ["nephrology", "UTI"], "NEET"],
  ["pediatrics", "DKA child", "Name key features of pediatric DKA.", "Hyperglycemia, ketosis, metabolic acidosis, dehydration, abdominal pain, vomiting, Kussmaul breathing, and altered sensorium.", ["endocrinology", "diabetes"], "NEET"],
  ["pediatrics", "Congenital hypothyroidism", "Why screen newborns for congenital hypothyroidism?", "Early detection and thyroxine treatment prevent irreversible intellectual disability and growth failure.", ["endocrinology", "screening"], "NEET"],
  ["pediatrics", "ALL", "What presentation suggests acute lymphoblastic leukemia?", "Fever, pallor, bruising, bone pain, lymphadenopathy, hepatosplenomegaly, and cytopenias suggest ALL.", ["hematology", "leukemia"], "NEET"],
  ["pediatrics", "ITP child", "What is typical of acute ITP in children?", "Sudden petechiae or mucosal bleeding after viral illness with isolated thrombocytopenia and otherwise well child.", ["hematology", "platelets"], "AIIMS"],
  ["pediatrics", "Sickle crisis", "Name common sickle cell crises.", "Vaso-occlusive pain crisis, aplastic crisis, sequestration crisis, hemolytic crisis, and acute chest syndrome.", ["hematology", "sickle cell"], "NEET"],
  ["pediatrics", "Thalassemia major", "What features suggest beta thalassemia major?", "Severe anemia after infancy, transfusion dependence, hepatosplenomegaly, growth failure, and marrow expansion changes.", ["hematology", "thalassemia"], "NEET"],
  ["pediatrics", "Measles", "Name classic measles features.", "Fever, cough, coryza, conjunctivitis, Koplik spots, and descending maculopapular rash.", ["infectious disease", "measles"], "NEET"],
  ["pediatrics", "Kawasaki disease", "Why is Kawasaki disease important?", "It can cause coronary artery aneurysms; prolonged fever with mucocutaneous signs should prompt IVIG treatment.", ["rheumatology", "vasculitis"], "AIIMS"],
  ["pediatrics", "IMNCI danger signs", "Name general danger signs in a sick child.", "Unable to drink or breastfeed, vomits everything, convulsions, lethargic or unconscious are general danger signs.", ["emergency", "IMNCI"], "NEET"],
  ["pediatrics", "Poisoning child", "What is the first priority in childhood poisoning?", "Stabilize airway, breathing, circulation, check glucose, identify toxin, decontaminate when appropriate, and give antidote if indicated.", ["emergency", "poisoning"], "NEET"],
  ["pediatrics", "Vaccine contraindication", "Name true contraindications to vaccination.", "Severe allergic reaction to a vaccine component or previous dose is a true contraindication; live vaccines are avoided in severe immunosuppression.", ["immunization", "contraindication"], "NEET"],
  ["pediatrics", "Failure to thrive", "What is failure to thrive?", "Inadequate growth or weight gain compared with expected standards due to insufficient intake, malabsorption, increased needs, or chronic disease.", ["growth", "FTT"], "NEET"],
  ["pediatrics", "Child abuse clue", "Name red flags for non-accidental injury.", "Inconsistent history, delay in seeking care, patterned injuries, multiple fractures, bruises in non-mobile child, and different injury ages.", ["social pediatrics", "abuse"], "AIIMS"],
].map((item, index) => ({
  id: `pediatrics-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/pediatrics",
}));

const orthopedicsExpansionCards = [
  ["orthopedics", "Fracture healing", "List stages of fracture healing.", "Hematoma, inflammation, soft callus, hard callus, and remodeling.", ["fractures", "healing"], "NEET"],
  ["orthopedics", "Delayed union", "What is delayed union?", "Fracture healing takes longer than expected but still shows potential to unite.", ["fractures", "complications"], "NEET"],
  ["orthopedics", "Nonunion", "What is nonunion?", "A fracture has failed to unite and shows no progressive healing without further intervention.", ["fractures", "complications"], "NEET"],
  ["orthopedics", "Malunion", "What is malunion?", "A fracture unites in an unacceptable position, causing deformity or functional impairment.", ["fractures", "complications"], "NEET"],
  ["orthopedics", "Open fracture", "What is the priority in open fracture management?", "Early antibiotics, tetanus prophylaxis, sterile dressing, neurovascular assessment, debridement, stabilization, and soft-tissue care.", ["fractures", "open fracture"], "AIIMS"],
  ["orthopedics", "Compartment syndrome", "Name features of acute compartment syndrome.", "Severe pain out of proportion, pain on passive stretch, tense compartment, paresthesia, weakness, and late pulselessness.", ["trauma", "emergency"], "NEET"],
  ["orthopedics", "Fat embolism syndrome", "Name classic fat embolism features.", "Respiratory distress, neurologic symptoms, petechial rash, fever, tachycardia, and anemia after long-bone fracture.", ["trauma", "complications"], "AIIMS"],
  ["orthopedics", "Volkmann ischemic contracture", "What causes Volkmann ischemic contracture?", "Untreated forearm compartment syndrome causes ischemic muscle fibrosis and claw-like deformity.", ["upper limb", "compartment"], "NEET"],
  ["orthopedics", "Clavicle fracture", "Which part of clavicle commonly fractures?", "Middle third clavicle fracture is most common.", ["upper limb", "clavicle"], "NEET"],
  ["orthopedics", "Anterior shoulder dislocation", "What nerve is at risk in anterior shoulder dislocation?", "Axillary nerve is at risk, causing deltoid weakness and numbness over regimental badge area.", ["upper limb", "dislocation"], "NEET"],
  ["orthopedics", "Supracondylar humerus fracture", "What complication is feared in supracondylar humerus fracture?", "Brachial artery injury, median or anterior interosseous nerve injury, compartment syndrome, and cubitus varus are important complications.", ["upper limb", "pediatrics"], "AIIMS"],
  ["orthopedics", "Monteggia fracture", "Define Monteggia fracture-dislocation.", "Fracture of proximal ulna with dislocation of radial head.", ["upper limb", "named injuries"], "NEET"],
  ["orthopedics", "Galeazzi fracture", "Define Galeazzi fracture-dislocation.", "Fracture of distal radius with disruption of distal radioulnar joint.", ["upper limb", "named injuries"], "NEET"],
  ["orthopedics", "Colles fracture", "What deformity occurs in Colles fracture?", "Dinner-fork deformity from distal radius fracture with dorsal displacement and angulation.", ["upper limb", "wrist"], "NEET"],
  ["orthopedics", "Scaphoid fracture", "Why is scaphoid fracture important?", "Proximal pole avascular necrosis and nonunion can occur because of retrograde blood supply.", ["upper limb", "wrist"], "AIIMS"],
  ["orthopedics", "Hip dislocation", "What nerve is at risk in posterior hip dislocation?", "Sciatic nerve is at risk, especially the peroneal division.", ["lower limb", "dislocation"], "NEET"],
  ["orthopedics", "Neck femur fracture", "Why can intracapsular neck femur fracture cause AVN?", "Retinacular vessels to femoral head may be disrupted, compromising blood supply.", ["lower limb", "hip"], "AIIMS"],
  ["orthopedics", "Intertrochanteric fracture", "How is intertrochanteric fracture different from neck femur fracture?", "It is extracapsular, has better blood supply, and AVN risk is lower than intracapsular neck fracture.", ["lower limb", "hip"], "NEET"],
  ["orthopedics", "Femoral shaft fracture", "What acute systemic risk follows femoral shaft fracture?", "Major blood loss, shock, and fat embolism are important risks.", ["lower limb", "femur"], "NEET"],
  ["orthopedics", "Tibial shaft fracture", "Why is tibial shaft prone to open fracture?", "The anteromedial tibial surface is subcutaneous with limited soft-tissue cover.", ["lower limb", "tibia"], "NEET"],
  ["orthopedics", "Ankle fracture", "What should be checked in ankle fracture?", "Skin condition, neurovascular status, mortise stability, syndesmosis injury, and proximal fibula tenderness should be checked.", ["lower limb", "ankle"], "NEET"],
  ["orthopedics", "ACL injury", "What test suggests ACL tear?", "Lachman test is sensitive for ACL injury; pivot shift indicates rotational instability.", ["sports", "knee"], "NEET"],
  ["orthopedics", "Meniscus tear", "What symptoms suggest meniscal tear?", "Joint-line pain, locking, clicking, swelling, and positive McMurray or Thessaly test suggest meniscal tear.", ["sports", "knee"], "NEET"],
  ["orthopedics", "Osteomyelitis child", "What organism commonly causes acute hematogenous osteomyelitis in children?", "Staphylococcus aureus is the commonest organism.", ["infection", "osteomyelitis"], "NEET"],
  ["orthopedics", "Septic arthritis", "Why is septic arthritis an emergency?", "Rapid cartilage destruction can occur, so urgent drainage and antibiotics are needed.", ["infection", "septic arthritis"], "AIIMS"],
  ["orthopedics", "TB spine", "What spinal region is commonly affected in Pott disease?", "Thoracolumbar spine is commonly affected.", ["spine", "tuberculosis"], "NEET"],
  ["orthopedics", "Pott paraplegia", "What causes neurologic deficit in spinal TB?", "Abscess, granulation tissue, caseous material, deformity, instability, or ischemia can compress neural structures.", ["spine", "tuberculosis"], "AIIMS"],
  ["orthopedics", "Disc prolapse", "Which nerve root is affected by L4-L5 disc prolapse?", "L5 nerve root is commonly compressed by posterolateral L4-L5 disc prolapse.", ["spine", "disc"], "NEET"],
  ["orthopedics", "Cauda equina", "Name red flags of cauda equina syndrome.", "Saddle anesthesia, bladder or bowel dysfunction, bilateral sciatica, severe neurologic deficit, and reduced anal tone.", ["spine", "emergency"], "NEET"],
  ["orthopedics", "Scoliosis", "What is adolescent idiopathic scoliosis?", "A structural lateral spinal curvature with vertebral rotation occurring in adolescence without identifiable cause.", ["spine", "deformity"], "NEET"],
  ["orthopedics", "DDH", "Name tests for developmental dysplasia of hip in infants.", "Barlow and Ortolani tests screen for hip instability in early infancy.", ["pediatric orthopedics", "DDH"], "NEET"],
  ["orthopedics", "CTEV", "What is clubfoot deformity?", "Congenital talipes equinovarus has cavus, adduction, varus, and equinus components.", ["pediatric orthopedics", "CTEV"], "NEET"],
  ["orthopedics", "Perthes disease", "What is Legg-Calve-Perthes disease?", "Idiopathic avascular necrosis of the femoral head epiphysis in children.", ["pediatric orthopedics", "hip"], "AIIMS"],
  ["orthopedics", "SUFE", "What is slipped upper femoral epiphysis?", "Posteroinferior slip of femoral head epiphysis relative to neck through the growth plate, often in adolescents.", ["pediatric orthopedics", "hip"], "NEET"],
  ["orthopedics", "Rickets X-ray", "Name X-ray changes in rickets.", "Widening, cupping, fraying of metaphyses and osteopenia are classic.", ["metabolic bone", "rickets"], "NEET"],
  ["orthopedics", "Osteoporosis fracture", "Name common osteoporotic fractures.", "Vertebral compression, hip, distal radius, and proximal humerus fractures are common.", ["metabolic bone", "osteoporosis"], "NEET"],
  ["orthopedics", "Osteoarthritis", "Name radiologic features of osteoarthritis.", "Joint-space narrowing, osteophytes, subchondral sclerosis, and subchondral cysts.", ["arthritis", "osteoarthritis"], "NEET"],
  ["orthopedics", "Rheumatoid hand", "Name hand deformities in rheumatoid arthritis.", "Ulnar deviation, swan-neck, boutonniere, Z-thumb, and MCP subluxation may occur.", ["arthritis", "rheumatoid"], "AIIMS"],
  ["orthopedics", "Gout joint", "Which joint is classically involved in gout?", "First metatarsophalangeal joint involvement is called podagra.", ["arthritis", "gout"], "NEET"],
  ["orthopedics", "Osteosarcoma", "What is classic X-ray appearance of osteosarcoma?", "Mixed lytic-sclerotic metaphyseal lesion with sunburst periosteal reaction and Codman triangle.", ["bone tumors", "osteosarcoma"], "AIIMS"],
  ["orthopedics", "Ewing sarcoma", "What is classic X-ray appearance of Ewing sarcoma?", "Diaphyseal permeative lesion with onion-skin periosteal reaction.", ["bone tumors", "Ewing"], "AIIMS"],
  ["orthopedics", "Giant cell tumor", "Where does giant cell tumor commonly occur?", "Epiphyseal region of long bones after skeletal maturity, classically around knee.", ["bone tumors", "GCT"], "NEET"],
  ["orthopedics", "Osteochondroma", "What is osteochondroma?", "A cartilage-capped bony exostosis continuous with cortex and medullary cavity, often metaphyseal.", ["bone tumors", "benign"], "NEET"],
  ["orthopedics", "Bone metastasis", "Which cancers commonly metastasize to bone?", "Breast, prostate, lung, kidney, and thyroid commonly metastasize to bone.", ["bone tumors", "metastasis"], "NEET"],
].map((item, index) => ({
  id: `orthopedics-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/ortho",
}));

const psychiatryExpansionCards = [
  ["psychiatry", "Mental status examination", "What domains are assessed in mental status examination?", "Appearance, behavior, speech, mood, affect, thought, perception, cognition, insight, and judgment are assessed.", ["MSE", "assessment"], "NEET"],
  ["psychiatry", "Delusion", "Define delusion.", "A fixed false belief held with strong conviction despite evidence to the contrary and not explained by cultural context.", ["psychopathology", "thought"], "NEET"],
  ["psychiatry", "Hallucination", "Define hallucination.", "A perception without an external stimulus, experienced as real.", ["psychopathology", "perception"], "NEET"],
  ["psychiatry", "Illusion", "How is illusion different from hallucination?", "Illusion is misinterpretation of a real external stimulus; hallucination occurs without an external stimulus.", ["psychopathology", "perception"], "NEET"],
  ["psychiatry", "Thought insertion", "What is thought insertion?", "The patient believes thoughts have been placed into their mind by an external agency.", ["psychopathology", "schizophrenia"], "AIIMS"],
  ["psychiatry", "Thought broadcasting", "What is thought broadcasting?", "The patient believes their thoughts are being made known to others or broadcast externally.", ["psychopathology", "schizophrenia"], "AIIMS"],
  ["psychiatry", "Neologism", "What is neologism?", "A newly coined word or phrase with idiosyncratic meaning, seen in formal thought disorder.", ["psychopathology", "thought"], "NEET"],
  ["psychiatry", "Flight of ideas", "What is flight of ideas?", "Rapid shifting of ideas with understandable connections, commonly seen in mania.", ["psychopathology", "mania"], "NEET"],
  ["psychiatry", "Schizophrenia symptoms", "Name positive symptoms of schizophrenia.", "Delusions, hallucinations, disorganized speech, disorganized behavior, and catatonic features are positive symptoms.", ["schizophrenia", "symptoms"], "NEET"],
  ["psychiatry", "Negative symptoms", "Name negative symptoms of schizophrenia.", "Affective flattening, alogia, avolition, anhedonia, and social withdrawal are negative symptoms.", ["schizophrenia", "symptoms"], "NEET"],
  ["psychiatry", "Catatonia", "Name clinical features of catatonia.", "Stupor, mutism, negativism, posturing, waxy flexibility, echolalia, echopraxia, agitation, and rigidity may occur.", ["schizophrenia", "catatonia"], "AIIMS"],
  ["psychiatry", "Acute psychosis management", "What are priorities in acute psychosis?", "Ensure safety, assess medical or substance causes, reduce stimulation, use verbal de-escalation, and give antipsychotic or benzodiazepine when indicated.", ["psychosis", "emergency"], "NEET"],
  ["psychiatry", "Antipsychotic EPS", "Name extrapyramidal adverse effects of antipsychotics.", "Acute dystonia, akathisia, drug-induced parkinsonism, and tardive dyskinesia.", ["psychopharmacology", "antipsychotics"], "NEET"],
  ["psychiatry", "Neuroleptic malignant syndrome", "What suggests neuroleptic malignant syndrome?", "Fever, rigidity, altered sensorium, autonomic instability, raised CK, and recent dopamine antagonist exposure.", ["psychopharmacology", "emergency"], "AIIMS"],
  ["psychiatry", "Clozapine adverse effect", "What serious monitoring issue is linked to clozapine?", "Agranulocytosis risk requires regular blood count monitoring; seizures, myocarditis, and metabolic effects are also important.", ["psychopharmacology", "clozapine"], "NEET"],
  ["psychiatry", "Mania", "Name core symptoms of mania.", "Elevated or irritable mood with increased energy, decreased need for sleep, grandiosity, pressured speech, racing thoughts, distractibility, and risky behavior.", ["mood disorders", "mania"], "NEET"],
  ["psychiatry", "Bipolar maintenance", "Name mood stabilizers used in bipolar disorder.", "Lithium, valproate, carbamazepine, lamotrigine, and some atypical antipsychotics are used depending on phase and patient factors.", ["mood disorders", "bipolar"], "NEET"],
  ["psychiatry", "Lithium toxicity", "Name features of lithium toxicity.", "Tremor, vomiting, diarrhea, ataxia, confusion, seizures, renal impairment, and arrhythmias may occur.", ["psychopharmacology", "lithium"], "AIIMS"],
  ["psychiatry", "Major depression", "Name core symptoms of major depressive episode.", "Persistent low mood or loss of interest with symptoms such as sleep, appetite, energy, guilt, concentration, psychomotor, and suicidal changes.", ["mood disorders", "depression"], "NEET"],
  ["psychiatry", "Suicide risk", "Name important suicide risk factors.", "Past attempt, active plan, hopelessness, severe depression, psychosis, substance use, chronic illness, social isolation, and access to lethal means.", ["emergency", "suicide"], "NEET"],
  ["psychiatry", "ECT indication", "Name indications for ECT.", "Severe depression with suicidality, psychotic depression, catatonia, treatment-resistant depression, severe mania, and need for rapid response.", ["treatment", "ECT"], "AIIMS"],
  ["psychiatry", "Panic attack", "What is a panic attack?", "An abrupt surge of intense fear with autonomic and cognitive symptoms such as palpitations, dyspnea, chest discomfort, dizziness, and fear of dying.", ["anxiety", "panic"], "NEET"],
  ["psychiatry", "Agoraphobia", "What is agoraphobia?", "Fear or avoidance of situations where escape may be difficult or help unavailable if panic-like symptoms occur.", ["anxiety", "phobia"], "NEET"],
  ["psychiatry", "OCD", "Define obsession and compulsion.", "Obsessions are intrusive unwanted thoughts or urges; compulsions are repetitive acts or mental rituals performed to reduce anxiety.", ["anxiety", "OCD"], "NEET"],
  ["psychiatry", "PTSD", "Name symptom clusters of PTSD.", "Intrusion, avoidance, negative mood or cognition, and hyperarousal after traumatic exposure.", ["stress disorders", "PTSD"], "AIIMS"],
  ["psychiatry", "Somatic symptom disorder", "What characterizes somatic symptom disorder?", "Distressing somatic symptoms with excessive thoughts, feelings, or behaviors related to the symptoms.", ["somatoform", "diagnosis"], "NEET"],
  ["psychiatry", "Dissociative disorder", "What is dissociation?", "Disruption in integration of consciousness, memory, identity, emotion, perception, body representation, motor control, or behavior.", ["dissociative", "definition"], "AIIMS"],
  ["psychiatry", "Alcohol withdrawal", "Name alcohol withdrawal features.", "Tremor, sweating, anxiety, insomnia, nausea, tachycardia, hypertension, seizures, hallucinosis, and delirium tremens may occur.", ["substance use", "alcohol"], "NEET"],
  ["psychiatry", "Delirium tremens", "What is delirium tremens?", "Severe alcohol withdrawal with delirium, autonomic instability, agitation, hallucinations, tremor, and high mortality risk if untreated.", ["substance use", "alcohol"], "AIIMS"],
  ["psychiatry", "Alcohol dependence drugs", "Name drugs used in alcohol relapse prevention.", "Naltrexone, acamprosate, disulfiram, and baclofen in selected settings may be used with psychosocial treatment.", ["substance use", "alcohol"], "NEET"],
  ["psychiatry", "Opioid withdrawal", "Name opioid withdrawal symptoms.", "Lacrimation, rhinorrhea, yawning, sweating, piloerection, diarrhea, cramps, myalgia, dilated pupils, anxiety, and insomnia.", ["substance use", "opioids"], "NEET"],
  ["psychiatry", "Opioid overdose", "What is the antidote for opioid overdose?", "Naloxone reverses opioid-induced respiratory depression.", ["substance use", "emergency"], "NEET"],
  ["psychiatry", "Cannabis intoxication", "Name features of cannabis intoxication.", "Euphoria, relaxation, impaired attention, altered perception, conjunctival injection, increased appetite, tachycardia, and anxiety or panic.", ["substance use", "cannabis"], "NEET"],
  ["psychiatry", "ADHD", "What are the core symptom domains of ADHD?", "Inattention, hyperactivity, and impulsivity with impairment across settings.", ["child psychiatry", "ADHD"], "NEET"],
  ["psychiatry", "Autism spectrum disorder", "Name core deficits in autism spectrum disorder.", "Persistent social communication deficits and restricted, repetitive patterns of behavior, interests, or activities.", ["child psychiatry", "autism"], "NEET"],
  ["psychiatry", "Intellectual disability", "What defines intellectual disability?", "Deficits in intellectual functioning and adaptive functioning beginning during the developmental period.", ["child psychiatry", "ID"], "NEET"],
  ["psychiatry", "Conduct disorder", "What characterizes conduct disorder?", "Persistent violation of rights of others or age-appropriate norms, including aggression, destruction, deceit, theft, or serious rule violations.", ["child psychiatry", "conduct"], "AIIMS"],
  ["psychiatry", "Delirium", "What is the key clinical feature of delirium?", "Acute fluctuating disturbance in attention and awareness with cognitive change, usually due to medical illness, drugs, or withdrawal.", ["organic psychiatry", "delirium"], "NEET"],
  ["psychiatry", "Dementia", "How does dementia differ from delirium?", "Dementia is usually chronic progressive cognitive decline with clear consciousness early; delirium is acute, fluctuating, and attention is impaired.", ["organic psychiatry", "dementia"], "NEET"],
  ["psychiatry", "Alzheimer disease", "What is the typical early feature of Alzheimer disease?", "Progressive episodic memory impairment is typical early, followed by language, visuospatial, and executive decline.", ["organic psychiatry", "dementia"], "NEET"],
  ["psychiatry", "Lewy body dementia", "Name features of Lewy body dementia.", "Fluctuating cognition, recurrent visual hallucinations, parkinsonism, REM sleep behavior disorder, and neuroleptic sensitivity.", ["organic psychiatry", "dementia"], "AIIMS"],
  ["psychiatry", "Anorexia nervosa", "What characterizes anorexia nervosa?", "Restriction of intake causing significantly low weight, intense fear of weight gain, and body image disturbance.", ["eating disorders", "anorexia"], "NEET"],
  ["psychiatry", "Bulimia nervosa", "What characterizes bulimia nervosa?", "Recurrent binge eating with compensatory behaviors such as vomiting, laxatives, fasting, or excessive exercise.", ["eating disorders", "bulimia"], "NEET"],
  ["psychiatry", "Personality disorder clusters", "Name personality disorder clusters.", "Cluster A is odd-eccentric, cluster B is dramatic-emotional, and cluster C is anxious-fearful.", ["personality", "classification"], "NEET"],
  ["psychiatry", "Borderline personality", "Name features of borderline personality disorder.", "Instability of relationships, self-image, affect, impulsivity, self-harm, fear of abandonment, emptiness, and anger.", ["personality", "cluster B"], "AIIMS"],
  ["psychiatry", "Capacity", "What abilities are needed for decision-making capacity?", "Understand information, appreciate consequences, reason about options, and communicate a choice.", ["forensic psychiatry", "capacity"], "NEET"],
  ["psychiatry", "Confidentiality exception", "When may confidentiality be breached?", "When required by law or when there is serious risk of harm to the patient or others, using minimum necessary disclosure.", ["ethics", "confidentiality"], "AIIMS"],
].map((item, index) => ({
  id: `psychiatry-extra-${index + 1}`,
  subject: item[0],
  title: item[1],
  prompt: item[2],
  answer: item[3],
  tags: item[4],
  exam: item[5],
  diagram: item[6] || null,
  source: "pg-med-sources/psychiatry",
}));

const customCards = JSON.parse(localStorage.getItem("customCards") || "[]");
let cards = [...baseCards, ...anatomyExpansionCards, ...physiologyExpansionCards, ...biochemistryExpansionCards, ...pathologyExpansionCards, ...pharmacologyExpansionCards, ...microbiologyExpansionCards, ...psmExpansionCards, ...ophthalmologyExpansionCards, ...entExpansionCards, ...entSourceExpansionCards, ...medicineExpansionCards, ...obgExpansionCards, ...pediatricsExpansionCards, ...orthopedicsExpansionCards, ...psychiatryExpansionCards, ...customCards];

const state = {
  subject: "all",
  filter: "all",
  query: "",
  index: 0,
  flipped: false,
  view: "study",
  previousResponseId: localStorage.getItem("aiPreviousResponseId") || null,
  studied: new Set(JSON.parse(localStorage.getItem("studiedCards") || "[]")),
  starred: new Set(JSON.parse(localStorage.getItem("starredCards") || "[]")),
};

const els = {
  subjectNav: document.getElementById("subjectNav"),
  searchInput: document.getElementById("searchInput"),
  subjectTitle: document.getElementById("subjectTitle"),
  subjectSummary: document.getElementById("subjectSummary"),
  referenceBooks: document.getElementById("referenceBooks"),
  topicIndex: document.getElementById("topicIndex"),
  cardCount: document.getElementById("cardCount"),
  studiedCount: document.getElementById("studiedCount"),
  dueCount: document.getElementById("dueCount"),
  flashcard: document.getElementById("flashcard"),
  cardGrid: document.getElementById("cardGrid"),
  browserMeta: document.getElementById("browserMeta"),
  prevCard: document.getElementById("prevCard"),
  nextCard: document.getElementById("nextCard"),
  flipCard: document.getElementById("flipCard"),
  markStudied: document.getElementById("markStudied"),
  starCard: document.getElementById("starCard"),
  shuffleCards: document.getElementById("shuffleCards"),
  viewTabs: document.querySelectorAll("[data-view]"),
  studyView: document.getElementById("studyView"),
  askView: document.getElementById("askView"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  modelInput: document.getElementById("modelInput"),
  aiSubjectSelect: document.getElementById("aiSubjectSelect"),
  chatLog: document.getElementById("chatLog"),
  askForm: document.getElementById("askForm"),
  questionInput: document.getElementById("questionInput"),
  askButton: document.getElementById("askButton"),
};

function subjectById(id) {
  return subjects.find((subject) => subject.id === id);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeSubject(id) {
  return subjectById(id) ? id : "medicine";
}

function filteredCards() {
  const query = state.query.trim().toLowerCase();
  return cards.filter((card) => {
    const subject = subjectById(card.subject);
    const inSubject = state.subject === "all" || card.subject === state.subject;
    const inFilter =
      state.filter === "all" ||
      (state.filter === "due" && !state.studied.has(card.id)) ||
      (state.filter === "starred" && state.starred.has(card.id));
    const searchable = [card.title, card.prompt, card.answer, card.exam, subject.name, ...card.tags].join(" ").toLowerCase();
    return inSubject && inFilter && (!query || searchable.includes(query));
  });
}

function saveProgress() {
  localStorage.setItem("studiedCards", JSON.stringify([...state.studied]));
  localStorage.setItem("starredCards", JSON.stringify([...state.starred]));
}

function saveCustomCards() {
  localStorage.setItem("customCards", JSON.stringify(customCards));
}

function renderSubjectNav() {
  const allCount = cards.length;
  const buttons = [
    `<button class="subject-button ${state.subject === "all" ? "active" : ""}" data-subject="all">
      <span class="subject-number">All</span><strong>All subjects</strong><span>${allCount}</span>
    </button>`,
    ...subjects.map((subject, index) => {
      const count = cards.filter((card) => card.subject === subject.id).length;
      return `<button class="subject-button ${state.subject === subject.id ? "active" : ""}" data-subject="${subject.id}">
        <span class="subject-number">${index + 1}</span>
        <span><strong>${escapeHtml(subject.name)}</strong><span>${escapeHtml(subject.group)}</span></span>
        <span>${count}</span>
      </button>`;
    }),
  ];
  els.subjectNav.innerHTML = buttons.join("");
}

function renderHeader(deck) {
  const activeSubject = subjectById(state.subject);
  els.subjectTitle.textContent = activeSubject ? activeSubject.name : "All subjects";
  els.subjectSummary.textContent = activeSubject
    ? activeSubject.summary
    : "Cards follow the standard MBBS subject order used for NEET PG and AIIMS INI-CET preparation.";
  els.referenceBooks.textContent = activeSubject?.referenceBooks?.length
    ? `Reference spine: ${activeSubject.referenceBooks.join(", ")}`
    : "Reference spine: standard Indian MBBS and PG entrance textbooks across all subjects.";
  const topics = activeSubject ? activeSubject.topics : subjects.map((subject) => `${subject.name} (${subject.group})`);
  els.topicIndex.innerHTML = topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
  els.cardCount.textContent = deck.length;
  els.studiedCount.textContent = deck.filter((card) => state.studied.has(card.id)).length;
  els.dueCount.textContent = deck.filter((card) => !state.studied.has(card.id)).length;
  els.browserMeta.textContent = `${deck.length} visible cards`;
}

function diagramMarkup(steps) {
  if (!steps) return "";
  return `<div class="diagram" aria-label="Flowchart">${steps.map((step) => `<span>${escapeHtml(step)}</span>`).join("")}</div>`;
}

function renderCard(deck) {
  if (!deck.length) {
    els.flashcard.innerHTML = `<div class="card-meta"><span class="tag">No cards</span></div><h3>No matching cards</h3><div class="answer">Clear the search or change filters.</div>`;
    return;
  }
  if (state.index >= deck.length) state.index = 0;
  const card = deck[state.index];
  const subject = subjectById(card.subject);
  const studied = state.studied.has(card.id);
  const starred = state.starred.has(card.id);
  els.flipCard.textContent = state.flipped ? "Show prompt" : "Flip card";
  els.markStudied.textContent = studied ? "Studied" : "Mark studied";
  els.starCard.textContent = starred ? "★" : "☆";
  els.flashcard.innerHTML = `
    <div class="card-meta">
      <span class="tag exam">${escapeHtml(card.exam)}</span>
      <span class="tag">${escapeHtml(subject.name)}</span>
      ${card.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      ${studied ? `<span class="tag">Studied</span>` : `<span class="tag">Due</span>`}
    </div>
    <h3>${escapeHtml(card.title)}</h3>
    ${
      state.flipped
        ? `<div class="answer"><p>${escapeHtml(card.answer)}</p>${diagramMarkup(card.diagram)}</div>`
        : `<div class="answer"><p>${escapeHtml(card.prompt)}</p><p>Select Flip card or press Space.</p></div>`
    }
  `;
}

function renderGrid(deck) {
  els.cardGrid.innerHTML = deck
    .map((card, index) => {
      const subject = subjectById(card.subject);
      return `<button class="mini-card" data-card-index="${index}">
        <strong>${escapeHtml(card.title)}</strong>
        <span>${escapeHtml(card.prompt)}</span>
        <span class="mini-row"><span>${escapeHtml(subject.name)}</span><span>${state.studied.has(card.id) ? "Studied" : "Due"}</span></span>
      </button>`;
    })
    .join("");
}

function renderSubjectSelect() {
  els.aiSubjectSelect.innerHTML = [
    `<option value="auto">Auto-detect subject</option>`,
    ...subjects.map((subject) => `<option value="${subject.id}">${escapeHtml(subject.name)}</option>`),
  ].join("");
}

function renderViews() {
  els.viewTabs.forEach((tab) => {
    const active = tab.dataset.view === state.view;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  els.studyView.classList.toggle("active", state.view === "study");
  els.askView.classList.toggle("active", state.view === "ask");
}

function render() {
  const deck = filteredCards();
  renderSubjectNav();
  renderHeader(deck);
  renderCard(deck);
  renderGrid(deck);
  renderViews();
}

function addChatMessage(type, label, text) {
  const message = document.createElement("div");
  message.className = `chat-message ${type}`;
  message.innerHTML = `<strong>${escapeHtml(label)}</strong><p>${escapeHtml(text)}</p>`;
  els.chatLog.appendChild(message);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function extractResponseText(response) {
  if (response.output_text) return response.output_text;
  const message = response.output?.find((item) => item.type === "message");
  const textPart = message?.content?.find((part) => part.type === "output_text");
  return textPart?.text || "";
}

function parseAiPayload(text, question) {
  try {
    return JSON.parse(text);
  } catch {
    return {
      answer: text,
      flashcard: {
        subject: els.aiSubjectSelect.value === "auto" ? "medicine" : els.aiSubjectSelect.value,
        title: "AI-generated card",
        prompt: question,
        answer: text,
        tags: ["ai-generated"],
      },
    };
  }
}

function buildAiInstructions() {
  const subjectList = subjects.map((subject) => `${subject.id}: ${subject.name}`).join("\n");
  return `You are a careful medical exam tutor for AIIMS PG / INI-CET and NEET PG revision.
Answer the user's question for exam preparation. Then create one flashcard from the question and answer.
Choose the most appropriate subject id from this list unless the user selected an explicit subject:
${subjectList}
Return only JSON with this shape:
{"answer":"concise answer","flashcard":{"subject":"subject_id","title":"short title","prompt":"question-style prompt","answer":"flashcard answer","tags":["tag1","tag2"]}}
Keep the answer educational and advise clinical verification when the question is about patient care.`;
}

function addAiCard(flashcard) {
  const subject = normalizeSubject(flashcard.subject);
  const card = {
    id: `custom-${Date.now()}`,
    subject,
    title: flashcard.title || "AI-generated card",
    prompt: flashcard.prompt || els.questionInput.value.trim(),
    answer: flashcard.answer || "Review the AI response in the Ask AI chat.",
    tags: Array.isArray(flashcard.tags) && flashcard.tags.length ? flashcard.tags.slice(0, 5) : ["ai-generated"],
    exam: "AIIMS, NEET",
    diagram: null,
    custom: true,
  };
  customCards.push(card);
  cards = [...baseCards, ...anatomyExpansionCards, ...physiologyExpansionCards, ...biochemistryExpansionCards, ...pathologyExpansionCards, ...pharmacologyExpansionCards, ...microbiologyExpansionCards, ...psmExpansionCards, ...ophthalmologyExpansionCards, ...entExpansionCards, ...entSourceExpansionCards, ...medicineExpansionCards, ...obgExpansionCards, ...pediatricsExpansionCards, ...orthopedicsExpansionCards, ...psychiatryExpansionCards, ...customCards];
  saveCustomCards();
  state.subject = subject;
  state.filter = "all";
  state.query = "";
  state.index = filteredCards().findIndex((item) => item.id === card.id);
  state.flipped = false;
  render();
  return card;
}

async function askAi(question) {
  const apiKey = els.apiKeyInput.value.trim();
  const model = els.modelInput.value.trim() || "gpt-4.1-mini";
  const selectedSubject = els.aiSubjectSelect.value;
  if (!apiKey) throw new Error("Add an OpenAI API key first.");

  localStorage.setItem("openaiApiKey", apiKey);
  localStorage.setItem("openaiModel", model);

  const explicitSubject = selectedSubject === "auto" ? "" : `\nThe user selected this subject: ${selectedSubject}. Use it for the flashcard subject.`;
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      instructions: buildAiInstructions() + explicitSubject,
      previous_response_id: state.previousResponseId || undefined,
      input: question,
      text: {
        format: {
          type: "json_schema",
          name: "medical_flashcard_answer",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              answer: { type: "string" },
              flashcard: {
                type: "object",
                additionalProperties: false,
                properties: {
                  subject: { type: "string", enum: subjects.map((subject) => subject.id) },
                  title: { type: "string" },
                  prompt: { type: "string" },
                  answer: { type: "string" },
                  tags: { type: "array", items: { type: "string" }, maxItems: 5 },
                },
                required: ["subject", "title", "prompt", "answer", "tags"],
              },
            },
            required: ["answer", "flashcard"],
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || `OpenAI request failed with HTTP ${response.status}`);
  }

  const data = await response.json();
  state.previousResponseId = data.id || null;
  if (state.previousResponseId) localStorage.setItem("aiPreviousResponseId", state.previousResponseId);
  const text = extractResponseText(data);
  return parseAiPayload(text, question);
}

function move(delta) {
  const deck = filteredCards();
  if (!deck.length) return;
  state.index = (state.index + delta + deck.length) % deck.length;
  state.flipped = false;
  render();
}

els.subjectNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-subject]");
  if (!button) return;
  state.subject = button.dataset.subject;
  state.index = 0;
  state.flipped = false;
  render();
});

document.querySelector(".filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
  state.index = 0;
  state.flipped = false;
  render();
});

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.index = 0;
  state.flipped = false;
  render();
});

els.flipCard.addEventListener("click", () => {
  state.flipped = !state.flipped;
  render();
});

els.prevCard.addEventListener("click", () => move(-1));
els.nextCard.addEventListener("click", () => move(1));

els.shuffleCards.addEventListener("click", () => {
  const deck = filteredCards();
  if (!deck.length) return;
  state.index = Math.floor(Math.random() * deck.length);
  state.flipped = false;
  render();
});

els.markStudied.addEventListener("click", () => {
  const card = filteredCards()[state.index];
  if (!card) return;
  if (state.studied.has(card.id)) state.studied.delete(card.id);
  else state.studied.add(card.id);
  saveProgress();
  render();
});

els.starCard.addEventListener("click", () => {
  const card = filteredCards()[state.index];
  if (!card) return;
  if (state.starred.has(card.id)) state.starred.delete(card.id);
  else state.starred.add(card.id);
  saveProgress();
  render();
});

els.cardGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-card-index]");
  if (!button) return;
  state.index = Number(button.dataset.cardIndex);
  state.flipped = false;
  render();
  els.flashcard.scrollIntoView({ behavior: "smooth", block: "center" });
});

els.viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    render();
  });
});

els.askForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = els.questionInput.value.trim();
  if (!question) return;

  addChatMessage("user", "You", question);
  els.questionInput.value = "";
  els.askButton.disabled = true;
  els.askButton.textContent = "Asking...";

  try {
    const payload = await askAi(question);
    const card = addAiCard(payload.flashcard || {});
    addChatMessage("ai", "AI", `${payload.answer}\n\nAdded to ${subjectById(card.subject).name}: ${card.title}`);
  } catch (error) {
    addChatMessage("error", "Error", error.message);
  } finally {
    els.askButton.disabled = false;
    els.askButton.textContent = "Ask and add flashcard";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea, select")) return;
  if (event.key === " ") {
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
  }
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
});

renderSubjectSelect();
els.apiKeyInput.value = localStorage.getItem("openaiApiKey") || "";
els.modelInput.value = localStorage.getItem("openaiModel") || els.modelInput.value;
addChatMessage("system", "Ask AI", "Ask a question and I will add the answer as a flashcard under the best matching subject.");
render();
