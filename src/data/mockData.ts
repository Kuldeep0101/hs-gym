export const services = [
    {
        title: "Modern Strength",
        description: "Olympic platforms and prime strength machines for serious results.",
        icon: "Dumbbell",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Elite Coaching",
        description: "Transformation experts dedicated to your personal success journey.",
        icon: "UserCheck",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "The Arena",
        description: "High-octane group sessions designed to torch calories and build grit.",
        icon: "Activity",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Fuel Lab",
        description: "Data-driven nutrition strategies to optimize your performance.",
        icon: "Utensils",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
    }
];

export const classes = [
    { id: 1, name: "Morning Power Hour", day: "Monday", time: "06:00 AM", trainer: "Rahul Sharma", type: "Strength", duration: "60 min", availableSpots: 5 },
    { id: 2, name: "HIIT Cardio Blast", day: "Monday", time: "08:00 AM", trainer: "Priya Singh", type: "Cardio", duration: "45 min", availableSpots: 2 },
    { id: 3, name: "Weightlifting Pro", day: "Monday", time: "05:00 PM", trainer: "Amit Kumar", type: "Weights", duration: "90 min", availableSpots: 8 },
    { id: 4, name: "Yoga & Flow", day: "Tuesday", time: "06:30 AM", trainer: "Sonia Verma", type: "Recovery", duration: "60 min", availableSpots: 12 },
    { id: 5, name: "Boxing Drills", day: "Tuesday", time: "05:30 PM", trainer: "Vikram Sharma", type: "Cardio", duration: "60 min", availableSpots: 6 },
    { id: 6, name: "Leg Day Special", day: "Wednesday", time: "06:00 AM", trainer: "Rahul Sharma", type: "Strength", duration: "75 min", availableSpots: 4 },
    { id: 7, name: "Zumba Party", day: "Wednesday", time: "07:00 PM", trainer: "Anjali M.", type: "Cardio", duration: "60 min", availableSpots: 15 },
    { id: 8, name: "Core & Abs", day: "Thursday", time: "06:00 AM", trainer: "Priya Singh", type: "Strength", duration: "45 min", availableSpots: 10 },
    { id: 9, name: "Mobility Workshop", day: "Thursday", time: "06:00 PM", trainer: "Sonia Verma", type: "Recovery", duration: "60 min", availableSpots: 20 },
    { id: 10, name: "Full Body Burn", day: "Friday", time: "07:00 AM", trainer: "Amit Kumar", type: "Strength", duration: "60 min", availableSpots: 8 },
    { id: 11, name: "Crossfit Intro", day: "Friday", time: "05:00 PM", trainer: "Rahul Sharma", type: "Strength", duration: "90 min", availableSpots: 5 },
    { id: 12, name: "Weekend Warrior", day: "Saturday", time: "08:00 AM", trainer: "Team Fitness", type: "Mixed", duration: "120 min", availableSpots: 25 },
];

export const testimonials = [
    {
        name: "Abhishek Verma",
        role: "Member",
        content: "Best gym in Aligarh for both men and women. The environment is very professional and inclusive. Highly recommended!",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=abhishek"
    },
    {
        name: "Sanya Khan",
        role: "Member",
        content: "Love the atmosphere here. The trainers are very supportive and the equipment is top-notch. Great place for female fitness.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sanya"
    },
    {
        name: "Rahul Chaudhary",
        role: "Fitness Enthusiast",
        content: "Outstanding facilities and very clean. He and She Gym is definitely the best choice in Gulzar Nagar area.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=rahul"
    }
];

export const trainers = [
    {
        id: 1,
        name: "Trainer Name",
        role: "Head Trainer",
        specialties: ["Bodybuilding", "Strength Training"],
        certifications: ["Certified Professional"],
        bio: "Expert trainer dedicated to helping you achieve your fitness goals at He and She Gym.",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
        social: { instagram: "#", youtube: "#" }
    },
    {
        id: 2,
        name: "Female Trainer",
        role: "Fitness Coach",
        specialties: ["Yoga", "Female Fitness", "Weight Loss"],
        certifications: ["Certified Fitness Expert"],
        bio: "Specializes in female fitness and holistic wellness. Join her sessions for a balanced lifestyle.",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
        social: { instagram: "#", youtube: "#" }
    }
];

export const membershipPlans = [
    {
        name: "Trial Pass",
        price: "0",
        duration: "1 Day",
        features: [
            "Full facility access",
            "Gym tour & assessment",
            "Valid for 24 hours",
            "Expert consultation"
        ],
        cta: "Book Free Trial",
        highlight: false
    },
    {
        name: "Pro Monthly",
        price: "1,500",
        duration: "Per Month",
        features: [
            "Unlimited gym access",
            "All beginner classes",
            "Locker & shower",
            "Initial diet plan"
        ],
        cta: "Join Now",
        highlight: false
    },
    {
        name: "Elite Quarterly",
        price: "4,000",
        duration: "3 Months",
        features: [
            "Most popular choice",
            "Priority class booking",
            "Custom workout plan",
            "Monthly body scans"
        ],
        cta: "Join Now",
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Ultimate Yearly",
        price: "12,000",
        duration: "1 Year",
        features: [
            "Best value plan",
            "1 Free PT session",
            "VIP lounge access",
            "He & She apparel"
        ],
        cta: "Join Now",
        highlight: false
    }
];

export const galleryImages = [
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", tag: "Gym View" },
    { url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", tag: "Equipment" },
    { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop", tag: "Training" },
    { url: "https://images.unsplash.com/photo-1518611012118-296156a2f447?q=80&w=2070&auto=format&fit=crop", tag: "Cardio" },
    { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", tag: "Interior" },
    { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", tag: "Weights" },
];
