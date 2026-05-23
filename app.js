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

const customCards = JSON.parse(localStorage.getItem("customCards") || "[]");
let cards = [...baseCards, ...anatomyExpansionCards, ...physiologyExpansionCards, ...customCards];

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
  cards = [...baseCards, ...anatomyExpansionCards, ...physiologyExpansionCards, ...customCards];
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
