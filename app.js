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

const cards = [
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

const state = {
  subject: "all",
  filter: "all",
  query: "",
  index: 0,
  flipped: false,
  studied: new Set(JSON.parse(localStorage.getItem("studiedCards") || "[]")),
  starred: new Set(JSON.parse(localStorage.getItem("starredCards") || "[]")),
};

const els = {
  subjectNav: document.getElementById("subjectNav"),
  searchInput: document.getElementById("searchInput"),
  subjectTitle: document.getElementById("subjectTitle"),
  subjectSummary: document.getElementById("subjectSummary"),
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
};

function subjectById(id) {
  return subjects.find((subject) => subject.id === id);
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
        <span><strong>${subject.name}</strong><span>${subject.group}</span></span>
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
  const topics = activeSubject ? activeSubject.topics : subjects.map((subject) => `${subject.name} (${subject.group})`);
  els.topicIndex.innerHTML = topics.map((topic) => `<li>${topic}</li>`).join("");
  els.cardCount.textContent = deck.length;
  els.studiedCount.textContent = deck.filter((card) => state.studied.has(card.id)).length;
  els.dueCount.textContent = deck.filter((card) => !state.studied.has(card.id)).length;
  els.browserMeta.textContent = `${deck.length} visible cards`;
}

function diagramMarkup(steps) {
  if (!steps) return "";
  return `<div class="diagram" aria-label="Flowchart">${steps.map((step) => `<span>${step}</span>`).join("")}</div>`;
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
      <span class="tag exam">${card.exam}</span>
      <span class="tag">${subject.name}</span>
      ${card.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      ${studied ? `<span class="tag">Studied</span>` : `<span class="tag">Due</span>`}
    </div>
    <h3>${card.title}</h3>
    ${
      state.flipped
        ? `<div class="answer"><p>${card.answer}</p>${diagramMarkup(card.diagram)}</div>`
        : `<div class="answer"><p>${card.prompt}</p><p>Select Flip card or press Space.</p></div>`
    }
  `;
}

function renderGrid(deck) {
  els.cardGrid.innerHTML = deck
    .map((card, index) => {
      const subject = subjectById(card.subject);
      return `<button class="mini-card" data-card-index="${index}">
        <strong>${card.title}</strong>
        <span>${card.prompt}</span>
        <span class="mini-row"><span>${subject.name}</span><span>${state.studied.has(card.id) ? "Studied" : "Due"}</span></span>
      </button>`;
    })
    .join("");
}

function render() {
  const deck = filteredCards();
  renderSubjectNav();
  renderHeader(deck);
  renderCard(deck);
  renderGrid(deck);
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

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input")) return;
  if (event.key === " ") {
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
  }
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
});

render();
