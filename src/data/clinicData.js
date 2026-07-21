export const CLINIC_INFO = {
  name: "MotionCare",
  fullName: "MotionCare Physiotherapy & Advanced Rehabilitation Clinic",
  tagline: "Movement is Medicine — Live Pain Free & Recover Faster",
  phone: "+91 76005 83156",
  whatsapp: "917600583156",
  email: "care@motioncarerehab.com",
  address: "742 Kinetic Blvd, Suite 400, Health Park District, NY 10016",
  workingHours: {
    weekdays: "Monday - Friday: 7:00 AM - 8:00 PM",
    saturday: "Saturday: 8:00 AM - 5:00 PM",
    sunday: "Sunday: Emergency Rehab Appointments Only"
  },
  socials: {
    facebook: "https://facebook.com/motioncare",
    instagram: "https://instagram.com/motioncare_rehab",
    youtube: "https://youtube.com/motioncare",
    linkedin: "https://linkedin.com/company/motioncare"
  }
};

export const CONDITIONS_DATA = [
  {
    id: "back-pain",
    title: "Back Pain & Lumbar Strain",
    category: "Spine & Core",
    icon: "Activity",
    shortDesc: "Targeted decompression, spinal re-alignment, and core muscle stabilization for acute & chronic lumbar pain.",
    symptoms: ["Lower back tightness", "Sharp shooting pain when bending", "Stiffness after sitting", "Radiating leg discomfort"],
    treatmentApproach: "3D Motion Analysis + Manual Spinal Mobilization + Lumbar Decompression Therapy.",
    recoveryTime: "3 - 6 Weeks",
    popular: true
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Cervical Spondylosis",
    category: "Spine & Core",
    icon: "ShieldAlert",
    shortDesc: "Ergonomic correction and cervical traction to relieve disc pressure and tech-neck tension.",
    symptoms: ["Stiff neck mobility", "Upper trap tightness", "Headaches radiating from occiput", "Shoulder blade aching"],
    treatmentApproach: "Dry Needling + Cervical Traction + Scapular Stabilization Exercises.",
    recoveryTime: "2 - 4 Weeks",
    popular: true
  },
  {
    id: "sports-injury",
    title: "Sports Injury & Ligament Tears",
    category: "Sports Performance",
    icon: "Zap",
    shortDesc: "High-performance rehabilitation for ACL, MCL, hamstring strains, and athletic trauma.",
    symptoms: ["Joint instability", "Sudden swelling during sport", "Inability to bear weight", "Loss of explosive power"],
    treatmentApproach: "Laser Therapy + Dynamic Plyometric Training + Biomechanical Gait Correction.",
    recoveryTime: "6 - 12 Weeks",
    popular: true
  },
  {
    id: "frozen-shoulder",
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    category: "Upper Limb",
    icon: "RotateCcw",
    shortDesc: "Restoring 360° glenohumeral mobility through targeted joint capsule release and ultrasound thermal therapy.",
    symptoms: ["Severe restriction moving arm overhead", "Night pain sleeping on shoulder", "Sharp catching pain"],
    treatmentApproach: "Capsular Stretch Protocols + High Energy Shockwave + Active Hydro-dilation Rehab.",
    recoveryTime: "4 - 8 Weeks",
    popular: true
  },
  {
    id: "slip-disc",
    title: "Slip Disc & Herniated Lumbar",
    category: "Spine & Core",
    icon: "Layers",
    shortDesc: "Non-surgical disc retraction utilizing computerized spinal decompression and nerve flossing.",
    symptoms: ["Numbness in toes/feet", "Sciatic nerve pain down leg", "Weakness lifting foot", "Sharp tingling"],
    treatmentApproach: "Non-surgical Decompression + McKenzie Extension Method + Deep Core Bracing.",
    recoveryTime: "4 - 10 Weeks",
    popular: true
  },
  {
    id: "arthritis",
    title: "Knee & Joint Arthritis (Osteoarthritis)",
    category: "Joint Health",
    icon: "HeartPulse",
    shortDesc: "Cartilage-sparing physical therapy, intra-articular shockwave, and quad strengthening.",
    symptoms: ["Joint crepitus/grinding", "Morning stiffness > 30 mins", "Swelling after walking", "Deep knee ache"],
    treatmentApproach: "Pulsed Electro-Therapy + Low-Impact Resistance + Load Redistribution Bracing.",
    recoveryTime: "Ongoing / 6 Wk Phase 1",
    popular: true
  },
  {
    id: "stroke-rehab",
    title: "Stroke & Neurological Recovery",
    category: "Neurology",
    icon: "Brain",
    shortDesc: "Neuro-plasticity retraining, balance platform work, and gait re-education post-stroke or TBI.",
    symptoms: ["Hemiparesis/one-sided weakness", "Balance loss", "Spasticity in hands/legs", "Fine motor deficit"],
    treatmentApproach: "Bobath Technique + Mirror Therapy + Computerized Neuromuscular Electrical Stimulation.",
    recoveryTime: "12 - 24 Weeks",
    popular: false
  },
  {
    id: "post-surgery",
    title: "Post-Surgical Joint Rehabilitation",
    category: "Post-Op",
    icon: "Crosshair",
    shortDesc: "Protocol-guided rehab following ACL reconstruction, total knee/hip replacement, or rotator cuff repair.",
    symptoms: ["Post-op stiffness", "Surgical scar tissue restriction", "Atrophied muscle mass", "Edema"],
    treatmentApproach: "Manual Lymphatic Drainage + Progressive Resistance Rehab + Hydrotherapy Protocols.",
    recoveryTime: "8 - 16 Weeks",
    popular: true
  },
  {
    id: "sciatica",
    title: "Sciatica & Piriformis Syndrome",
    category: "Nerve Pain",
    icon: "Flame",
    shortDesc: "Rapid sciatic nerve release through piriformis release, pelvic alignment, and neural glides.",
    symptoms: ["Burning pain down buttocks", "Electric sensation down calf", "Pain exacerbated by prolonged sitting"],
    treatmentApproach: "Myofascial Release + Pelvic Re-alignment + Neural Gliding Exercises.",
    recoveryTime: "2 - 5 Weeks",
    popular: true
  },
  {
    id: "joint-pain",
    title: "Chronic Joint Pain & Tendonitis",
    category: "Joint Health",
    icon: "Activity",
    shortDesc: "Regenerative acoustic shockwave therapy for Achilles, patellar, and elbow tendon degeneration.",
    symptoms: ["Localized tendon tenderness", "Pain with tendon load", "Thickened tendon tissue"],
    treatmentApproach: "Extracorporeal Shockwave + Eccentric Tendon Loading Protocols.",
    recoveryTime: "3 - 6 Weeks",
    popular: false
  },
  {
    id: "balance-disorders",
    title: "Balance Disorders & Vestibular Rehab",
    category: "Neurology",
    icon: "Compass",
    shortDesc: "Vestibular re-training, inner ear crystal repositioning, and dynamic balance board balance re-education.",
    symptoms: ["Vertigo or room spinning", "Unsteadiness walking", "Gaze instability during motion"],
    treatmentApproach: "Epley Maneuver + Habituation Exercises + Force-plate Balance Training.",
    recoveryTime: "2 - 4 Weeks",
    popular: false
  },
  {
    id: "posture-correction",
    title: "Posture Correction & Scoliosis Management",
    category: "Spine & Core",
    icon: "UserCheck",
    shortDesc: "3D Postural analysis, muscle balancing, and custom orthotic prescription for desk workers & teens.",
    symptoms: ["Forward head syndrome", "Rounded shoulders", "Asymmetric pelvic tilt", "Mid-back fatigue"],
    treatmentApproach: "Schroth Method + Postural Biofeedback + Core Musculature Balancing.",
    recoveryTime: "4 - 8 Weeks",
    popular: true
  }
];

export const SERVICES_DATA = [
  {
    id: "manual-therapy",
    title: "Manual Physical Therapy",
    tagline: "Hands-on joint mobilization & soft tissue manipulation",
    icon: "Hand",
    desc: "Targeted hands-on technique focusing on joint mobilization, soft tissue release, myofascial trigger point therapy, and spinal manipulation to eliminate biomechanical restrictions.",
    benefits: ["Instant pain reduction", "Restoration of natural joint glide", "Decreased muscle hypertonicity"],
    duration: "45-60 Mins",
    badge: "Core Service"
  },
  {
    id: "sports-physiotherapy",
    title: "Sports Physiotherapy & Athletic Rehab",
    tagline: "Peak athletic recovery, gait analysis & return-to-sport protocols",
    icon: "Trophy",
    desc: "Advanced sports rehab engineered for elite athletes and active individuals. Combines video motion analysis, force plate tracking, and sport-specific plyometrics.",
    benefits: ["Accelerated tissue healing", "Prevention of re-injury", "Biomechanical performance boost"],
    duration: "60 Mins",
    badge: "Popular"
  },
  {
    id: "neurological-rehab",
    title: "Neurological Rehabilitation",
    tagline: "Rewiring neuromuscular pathways post stroke or injury",
    icon: "Brain",
    desc: "Specialized rehabilitation aimed at restoring motor function, coordination, and functional independence for patients with Stroke, Parkinson's, Multiple Sclerosis, or TBI.",
    benefits: ["Improved gait symmetry", "Decreased limb spasticity", "Enhanced balance & motor confidence"],
    duration: "60 Mins",
    badge: "Specialized"
  },
  {
    id: "orthopedic-rehab",
    title: "Orthopedic & Post-Surgical Rehab",
    tagline: "Comprehensive recovery following joint replacement & repairs",
    icon: "Bone",
    desc: "Physician-coordinated post-op recovery programs for knee replacements, ACL reconstructions, spinal fusions, and tendon repairs with objective range-of-motion benchmarking.",
    benefits: ["Controlled scar tissue formation", "Rapid muscle re-education", "Safe return to daily activities"],
    duration: "45-60 Mins",
    badge: "Medical Grade"
  },
  {
    id: "electrotherapy",
    title: "Advanced Electrotherapy & TENS/EMS",
    tagline: "Targeted micro-current pain gating & muscle re-activation",
    icon: "Zap",
    desc: "Utilizing state-of-the-art multi-channel electrical stimulation (IFT, TENS, NMES) to block pain signals, reduce deep swelling, and prevent muscle atrophy.",
    benefits: ["Drug-free pain relief", "Enhanced muscular contraction strength", "Reduced tissue edema"],
    duration: "30-45 Mins",
    badge: "High Tech"
  },
  {
    id: "dry-needling",
    title: "Dry Needling & Myofascial Release",
    tagline: "Intramuscular therapy targeting deep muscle knots",
    icon: "Pin",
    desc: "Thin acupuncture-grade filiform needles inserted directly into stubborn myofascial trigger points to reset muscle spindle activity and flush out pain-causing biochemicals.",
    benefits: ["Release of deep-seated knots", "Immediate muscle lengthening", "Enhanced blood circulation"],
    duration: "30-45 Mins",
    badge: "High Demand"
  },
  {
    id: "cupping-therapy",
    title: "Myofascial Cupping Therapy",
    tagline: "Decompression therapy to boost fascial circulation",
    icon: "Maximize",
    desc: "Negative pressure suction cups applied along fascial planes to separate tight muscle tissue layers, draw fresh oxygenated blood, and speed micro-tear recovery.",
    benefits: ["Fascial layer separation", "Detoxification & micro-circulation", "Improved elasticity"],
    duration: "30 Mins",
    badge: "Recovery"
  },
  {
    id: "exercise-therapy",
    title: "Custom Exercise & Kinesiotherapy",
    tagline: "Targeted movement prescriptions for long-term resilience",
    icon: "Dumbbell",
    desc: "Personalized neuromuscular conditioning, eccentric loading, and posture re-education tailored to your specific biomechanical profile.",
    benefits: ["Strengthened stabilizing muscles", "Long-term pain recurrence prevention", "Improved joint resilience"],
    duration: "45 Mins",
    badge: "Essential"
  },
  {
    id: "post-surgical-rehab",
    title: "Post Surgical Accelerated Recovery",
    tagline: "Fast-track recovery after orthopedic surgeries",
    icon: "CheckCircle2",
    desc: "Dedicated clinical protocols working directly with orthopedic surgeons to manage inflammation, prevent scar contraction, and regain joint mobility.",
    benefits: ["Minimized post-op stiffness", "Optimal scar tissue alignment", "Surgeon-approved progression"],
    duration: "60 Mins",
    badge: "Clinical"
  },
  {
    id: "pediatric-physio",
    title: "Pediatric Physiotherapy",
    tagline: "Gentle motor development & posture correction for children",
    icon: "Smile",
    desc: "Friendly, play-based rehabilitation for pediatric posture issues, developmental delays, sports injuries, and congenital motor conditions.",
    benefits: ["Engaging play-based exercises", "Proper spinal alignment in growth years", "Enhanced balance"],
    duration: "45 Mins",
    badge: "Gentle Care"
  },
  {
    id: "geriatric-physio",
    title: "Geriatric Mobility & Fall Prevention",
    tagline: "Maintaining independence, bone density & joint agility",
    icon: "Shield",
    desc: "Specialized gentle mobility programs engineered for seniors to preserve balance, alleviate arthritic stiffness, strengthen core gait stability, and prevent dangerous falls.",
    benefits: ["Enhanced confidence walking independently", "Fall risk reduction by 75%", "Reduced joint stiffness"],
    duration: "45 Mins",
    badge: "Senior Care"
  },
  {
    id: "womens-health",
    title: "Women's Health & Pelvic Floor Rehab",
    tagline: "Pre/Postnatal recovery & core pelvic alignment",
    icon: "Heart",
    desc: "Discreet and specialized therapy addressing pelvic floor dysfunction, diastasis recti, pregnancy back pain, and pelvic girdle alignment.",
    benefits: ["Pelvic floor re-strengthening", "Resolution of diastasis recti", "Pre/Post-natal pain relief"],
    duration: "45-60 Mins",
    badge: "Specialized"
  }
];

export const BODY_MAP_DATA = {
  neck: {
    title: "Neck & Cervical Spine",
    commonConditions: ["Tech-Neck Strain", "Cervical Radiculopathy", "Whiplash Injury", "Occipital Neuralgia"],
    symptoms: "Stiffness rotating head, sharp upper trap pain, tension headaches radiating to forehead.",
    treatmentStrategy: "Deep tissue cervical release + manual traction + scapular nerve glides.",
    avgRecovery: "2 to 4 Weeks",
    recommendedExercises: ["Chin Tucks", "Upper Trap Stretch", "Scapular Retraction Rings"]
  },
  shoulder: {
    title: "Shoulder & Rotator Cuff",
    commonConditions: ["Rotator Cuff Tendonitis", "Subacromial Impingement", "Frozen Shoulder", "Biceps Tendon Tear"],
    symptoms: "Inability to reach overhead, night pain sleeping on shoulder side, painful arc between 60°-120°.",
    treatmentStrategy: "Acoustic shockwave therapy + glenohumeral joint mobilization + rotator cuff isometric loading.",
    avgRecovery: "4 to 8 Weeks",
    recommendedExercises: ["Pendant Swings", "Doorway Chest Stretch", "Band External Rotations"]
  },
  elbow: {
    title: "Elbow & Forearm",
    commonConditions: ["Tennis Elbow (Lateral Epicondylitis)", "Golfer's Elbow (Medial)", "Ulnar Nerve Entrapment"],
    symptoms: "Pain grippingObjects, burning sensation at outer elbow bone, forearm weakness.",
    treatmentStrategy: "Dry needling into extensor carpi muscle + eccentric Tyler Twist bar therapy.",
    avgRecovery: "3 to 5 Weeks",
    recommendedExercises: ["Wrist Extensor Stretch", "Eccentric Wrist Curls", "Pronator Stretch"]
  },
  back: {
    title: "Thoracic & Lumbar Spine",
    commonConditions: ["Herniated Disc L4-L5/L5-S1", "Lumbar Spondylolisthesis", "Postural Kyphosis", "SI Joint Dysfunction"],
    symptoms: "Deep dull lower back ache, sharp electric pain shooting to buttock, inability to sit > 20 mins.",
    treatmentStrategy: "Computerized spinal decompression + McKenzie extension exercises + core pelvic realignment.",
    avgRecovery: "4 to 10 Weeks",
    recommendedExercises: ["Bird-Dog Core Hold", "Cat-Cow Spine Flow", "Cobra Extension Press"]
  },
  hip: {
    title: "Hip & Pelvis",
    commonConditions: ["Hip Labral Tear", "Trochanteric Bursitis", "Piriformis Syndrome", "Hip Impingement (FAI)"],
    symptoms: "Deep groin aching, sharp pain standing up from low chair, side hip tenderness.",
    treatmentStrategy: "Gluteus medius isometric activation + piriformis myofascial release + joint capsule distraction.",
    avgRecovery: "4 to 7 Weeks",
    recommendedExercises: ["Clamshell with Band", "Pigeon Stretch", "Glute Bridge Hold"]
  },
  knee: {
    title: "Knee Joint & Patella",
    commonConditions: ["ACL/MCL Ligament Sprain", "Patellofemoral Pain Syndrome", "Meniscus Tear", "Knee Osteoarthritis"],
    symptoms: "Swelling after walking/running, knee catching/locking, grinding sensation walking downstairs.",
    treatmentStrategy: "High-intensity pulsed laser + VMO quad strengthening + bio-mechanical gait re-education.",
    avgRecovery: "5 to 12 Weeks",
    recommendedExercises: ["Straight Leg Raises", "Terminal Knee Extensions", "Wall Isometric Squat"]
  },
  foot: {
    title: "Ankle & Foot",
    commonConditions: ["Plantar Fasciitis", "Achilles Tendinopathy", "Ankle Sprain (ATFL)", "Shin Splints"],
    symptoms: "Severe stabbing heel pain on first morning steps, ankle instability on uneven ground.",
    treatmentStrategy: "Extracorporeal shockwave + calf/plantar fascia stretching + customized dynamic orthotics.",
    avgRecovery: "3 to 6 Weeks",
    recommendedExercises: ["Towel Foot Scrunches", "Calf Eccentric Heel Drops", "Ankle Alphabet Swirls"]
  }
};

export const EXERCISES_DATA = [
  {
    id: "ex-1",
    title: "Deep Lumbar Extension (McKenzie Press)",
    category: "Back",
    type: "Mobility",
    difficulty: "Beginner",
    targetMuscle: "Lumbar Spine & Erector Spinae",
    reps: "10 Reps (Hold 5s)",
    description: "Prone spine press up designed to centralize disc herniations and relieve sciatic nerve pinch.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-stretches-on-a-mat-41562-large.mp4"
  },
  {
    id: "ex-2",
    title: "Scapular Wall Slides & Retraction",
    category: "Shoulder",
    type: "Stretching",
    difficulty: "Beginner",
    targetMuscle: "Rhomboids & Lower Trapezius",
    reps: "12 Reps (3 Sets)",
    description: "Activates lower traps and corrects rounded shoulder posture while decompressing rotator cuff space.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    videoPreview: ""
  },
  {
    id: "ex-3",
    title: "Resisted Band Clamshells",
    category: "Hip",
    type: "Strength",
    difficulty: "Intermediate",
    targetMuscle: "Gluteus Medius & Pelvic Stabilizers",
    reps: "15 Reps / Side",
    description: "Crucial hip abductor exercise to stabilize pelvis during walking and prevent knee valgus collapse.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    videoPreview: ""
  },
  {
    id: "ex-4",
    title: "Terminal Knee Extension (TKE)",
    category: "Knee",
    type: "Strength",
    difficulty: "Beginner",
    targetMuscle: "Vastus Medialis Oblique (VMO)",
    reps: "15 Reps (3 Sets)",
    description: "Isolates inner quadriceps to ensure proper patellar tracking and protect knee joint post ACL/meniscus tear.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
    videoPreview: ""
  },
  {
    id: "ex-5",
    title: "Cervical Chin Tuck & Retraction",
    category: "Neck",
    type: "Mobility",
    difficulty: "Beginner",
    targetMuscle: "Deep Cervical Flexors",
    reps: "10 Reps (Hold 3s)",
    description: "Reverses forward neck strain and restores normal cervical lordosis curve.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    videoPreview: ""
  },
  {
    id: "ex-6",
    title: "Single Leg Bosu Balance Stance",
    category: "Balance",
    type: "Balance",
    difficulty: "Advanced",
    targetMuscle: "Proprioceptors & Ankle Complex",
    reps: "45 Seconds / Leg",
    description: "Enhances neuromuscular proprioception and balance response to protect against recurrent sprains.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    videoPreview: ""
  }
];

export const EQUIPMENT_DATA = [
  {
    name: "Extracorporeal Shockwave Therapy (ESWT)",
    category: "Regenerative Acoustic",
    purpose: "Breaks down stubborn calcification & stimulates collagen regeneration in chronic tendon injuries.",
    specs: "High-energy acoustic pulses up to 4.0 Bar pressure.",
    icon: "Radio"
  },
  {
    name: "Class IV High Intensity Laser Therapy",
    category: "Photobiomodulation",
    purpose: "Penetrates 10cm deep into tissue to accelerate cellular ATP production and rapidly drop inflammation.",
    specs: "15W 1064nm Dual Wavelength Light Spectrum.",
    icon: "Sun"
  },
  {
    name: "Computerized Spinal Decompression System",
    category: "Traction & Decompression",
    purpose: "Targeted negative intra-discal pressure encouraging disc herniation retraction and hydration.",
    specs: "Precision angle positioning with tension sensor feedback.",
    icon: "Sliders"
  },
  {
    name: "Robotic Gait & Balance Analyzer",
    category: "Neuro-Rehabilitation",
    purpose: "Real-time force plate mapping to re-educate gait symmetry and prevent senior fall risks.",
    specs: "3D Motion sensor grid with visual biofeedback screen.",
    icon: "Cpu"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "dr-elena-vance",
    name: "Dr. Elena Vance, DPT, OCS",
    title: "Chief Physical Therapist & Founder",
    specialty: "Spine Rehabilitation & Manual Therapy",
    exp: "16+ Years Experience",
    edu: "Doctor of Physical Therapy (Columbia University), Board Certified Orthopedic Specialist",
    image: "https://images.unsplash.com/photo-1594824813566-78a94628f804?auto=format&fit=crop&q=80&w=600",
    quote: "Our goal is not just temporary pain relief — it is restoring your body's innate kinetic freedom so you can move without boundaries."
  },
  {
    id: "dr-marcus-chen",
    name: "Dr. Marcus Chen, DPT, SCS",
    title: "Director of Sports Rehabilitation",
    specialty: "Sports Injuries & ACL Protocol Expert",
    exp: "12+ Years Experience",
    edu: "DPT (USC), Sports Certified Specialist, Former Consultant for Olympic Track Team",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    quote: "Every athlete deserves precision biomechanical tuning. We bridge the gap between injury recovery and elite athletic peak performance."
  },
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins, PT, NCS",
    title: "Lead Neurological Specialist",
    specialty: "Stroke Recovery & Vestibular Rehab",
    exp: "14+ Years Experience",
    edu: "Neuro-Certified Specialist (Johns Hopkins), Bobath & PNF Advanced Practitioner",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    quote: "The brain's neuroplasticity is extraordinary. With structured neuromuscular training, lost movement pathways can be rebuilt step by step."
  },
  {
    id: "dr-david-rossi",
    name: "Dr. David Rossi, DPT, CSCS",
    title: "Senior Orthopedic Physiotherapist",
    specialty: "Dry Needling & Post-Surgical Rehab",
    exp: "10+ Years Experience",
    edu: "DPT (NYU), Certified Strength & Conditioning Specialist, Dry Needling Level 3",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    quote: "Combining precision hands-on manual technique with targeted resistance training delivers the fastest, most durable recovery outcomes."
  }
];

export const TESTIMONIALS = [
  {
    name: "Robert Sterling",
    role: "Marathon Runner",
    condition: "Severe Achilles Tendinopathy",
    metric: "Back to Running in 5 Weeks",
    quote: "I was told by two doctors that my running career was paused for at least 8 months. MotionCare's shockwave therapy and eccentric protocol had me pain-free and running 10K in just 5 weeks!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sophia Martinez",
    role: "Software Architect",
    condition: "Chronic L4-L5 Slip Disc",
    metric: "Pain Score Dropped from 9/10 to 0/10",
    quote: "Sitting for more than 15 minutes was torture due to sciatica down my left leg. The spinal decompression and core retraining at MotionCare changed my life. I'm completely pain-free!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "James Thornton",
    role: "Retired Executive",
    condition: "Post Total Knee Replacement",
    metric: "135° Range of Flexion Achieved",
    quote: "The personalized care and robotic balance re-education gave me full control of my knee. I walked 4 miles on my vacation without a single limp!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQS_DATA = [
  {
    q: "Do I need a doctor's referral to book a physical therapy appointment?",
    a: "No! Under Direct Access laws, you can book an initial evaluation and start physical therapy treatment directly with our licensed therapists without waiting for a doctor's referral."
  },
  {
    q: "What should I expect during my first consultation visit?",
    a: "Your initial 60-minute visit includes a 3D posture evaluation, digital range-of-motion testing, muscle strength indexing, neurological screening, and your first targeted treatment session with a custom recovery roadmap."
  },
  {
    q: "How many physical therapy sessions will I need?",
    a: "The number of sessions depends on your specific condition. Acute sprains or post-op protocols typically require 4 to 8 sessions, while chronic spinal issues or stroke rehabilitation may span 8 to 16 sessions."
  },
  {
    q: "Is physical therapy covered by health insurance?",
    a: "Yes! MotionCare accepts most major health insurance plans including Medicare, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. We verify your benefits prior to your first appointment."
  },
  {
    q: "What is Dry Needling and how does it differ from Acupuncture?",
    a: "Dry Needling is a Western medical technique utilizing acupuncture-type needles specifically placed into neuromuscular trigger points (knots) to release muscle tightness, whereas traditional acupuncture focuses on Eastern meridian energy channels."
  },
  {
    q: "Can physical therapy help me avoid spinal or joint surgery?",
    a: "In many cases, yes! Clinical studies show that non-surgical spinal decompression, manual physical therapy, and targeted muscle retraining can effectively resolve herniated discs and joint pain, preventing the need for invasive surgery."
  }
];

export const BLOG_POSTS = [
  {
    id: "ergonomics-desk-workers-back-pain",
    title: "5 Ergonomic Adjustments to Instantly Stop Lower Back Pain at Your Desk",
    category: "Ergonomics",
    date: "July 18, 2026",
    readTime: "5 Min Read",
    author: "Dr. Elena Vance, DPT",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    excerpt: "Sitting for 8+ hours puts 40% more pressure on your lumbar discs than standing. Learn how screen height, lumbar supports, and micro-movement breaks eliminate stiffness."
  },
  {
    id: "acl-recovery-timeline-guide",
    title: "The Ultimate ACL Rehabilitation Timeline: From Surgery to Full Sprinting",
    category: "Sports Injuries",
    date: "July 10, 2026",
    readTime: "8 Min Read",
    author: "Dr. Marcus Chen, DPT",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    excerpt: "A phase-by-phase physical therapy blueprint detailing graft healing, quadriceps reactivation, plyometric testing, and return-to-sport criteria."
  },
  {
    id: "dry-needling-vs-cupping",
    title: "Dry Needling vs. Cupping Therapy: Which Myofascial Treatment Do You Need?",
    category: "Rehabilitation",
    date: "June 28, 2026",
    readTime: "6 Min Read",
    author: "Dr. David Rossi, DPT",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Break down the physiological mechanisms of intramuscular dry needling vs negative pressure cupping to target deep myofascial knots effectively."
  }
];
