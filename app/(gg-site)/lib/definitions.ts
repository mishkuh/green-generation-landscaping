export type IconId = "Sprout" | "Scissors" | "Mountain" | "Droplets" | "TreePine" | "Flower";

export type ServiceDetails = {
    id: string;
    route: string;
    created_at: string;
    icon: IconId;
    title: string;
    subtitle: string;
    description: string;
    detailed_description: string;
    process_list: { step: string; description: string }[];
    benefit_list: string[];
    pricing: string;
    timeline: string;
    feature_list: string[];
    banner_image: string;
    image_gallery: string[];
};

export type PortfolioProject = {
    id: string;
    route: string;
    created_at: string;
    title: string;
    subtitle: string;
    tags: string[];
    location: string;
    date: string;
    client: string;
    description: string;
    detailed_description: string;
    challenge: string;
    solution: string;
    feature_list: string[];
    image_gallery: string[];
    banner_image: string;
};