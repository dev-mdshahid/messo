// Concern type
import skin from "@/public/media/img/icons/skin.png";
import hair from "@/public/media/img/icons/hair.png";

// type of skin
import faceSkin from "@/public/media/img/icons/face_skin.png";
import bodySkin from "@/public/media/img/icons/body_skin.png";

//Skin type
import normalSkin from "@/public/media/img/icons/normal_skin.png";
import oilySkin from "@/public/media/img/icons/oily_skin.png";
import drySkin from "@/public/media/img/icons/dry_skin.png";
import combinationalSkin from "@/public/media/img/icons/combinational_skin.png";
import sensitiveSkin from "@/public/media/img/icons/sensitive_skin.png";

// Skin concern
import rashSkin from "@/public/media/img/icons/rash_skin.png";
import acneSkin from "@/public/media/img/icons/acne_skin.png";
import brightSkin from "@/public/media/img/icons/bright_skin.png";
import antiAgingSkin from "@/public/media/img/icons/anti_aging_skin.png";
import blemishSkin from "@/public/media/img/icons/blemish_skin.png";

//Scalp type
import dryHair from "@/public/media/img/icons/dry_hair.png";
import sensitiveHair from "@/public/media/img/icons/sensitive_hair.png";

//Hair concern
import hairFall from "@/public/media/img/icons/hairFall_hair.png";
import hairGrowth from "@/public/media/img/icons/hairGrowth_hair.png";
import rebonded from "@/public/media/img/icons/rebonded_hair.png";
import colored from "@/public/media/img/icons/colored_hair.png";
import dandruff from "@/public/media/img/icons/dandruff_hair.png";

//body type
import normalBody from "@/public/media/img/icons/normal_body.png";
import dryBody from "@/public/media/img/icons/dry_body.png";
import sensitiveBody from "@/public/media/img/icons/sensitive_body.png";

// Skin concern
import rashBody from "@/public/media/img/icons/rash_body.png";
import acneBody from "@/public/media/img/icons/acne_body.png";
import brightBody from "@/public/media/img/icons/bright_body.png";

export const beautyQuestions = [
  // hair or skin
  {
    type: "select-single-card-default",
    question: "What are you facing problem with?",
    description: "Whether it is your hair or your skin, we've got you covered!",
    id: "problemSource",
    options: [
      {
        value: "skin",
        icon: skin,
        text: "Skin care",
        description: "Concerned about your skin",
        jump: 3,
      },
      {
        value: "hair",
        icon: hair,
        text: "Hair care",
        description: "Concerned about your hair",
        jump: 1,
      },
    ],
  },

  // scalp type
  {
    type: "select-single-list-default",
    question: "What is your scalp type?",
    description:
      "Your scalp type tells us the nature of the skin of your scalp/head.",
    id: "scalpType",
    options: [
      {
        value: "sensitive",
        icon: sensitiveHair,
        text: "Sensitive",
        description: "Stinging, burning, pain sensations",
        jump: 1,
      },
      {
        value: "oily",
        icon: oilySkin,
        text: "Oily",
        description: "Produced excess oil",
        jump: 1,
      },
      {
        value: "dry",
        icon: dryHair,
        text: "Dry",
        description: "Lacking enough water & oil",
        jump: 1,
      },
    ],
  },

  // hair concern
  {
    type: "select-single-card-default",
    question: "What is your hair concern?",
    description: "Choose one from below, be specific!",
    id: "hairConcern",
    options: [
      {
        value: "hairFall",
        icon: hairFall,
        text: "Hair fall",
        description: "Stop unstoppable hair fall",
        jump: 6,
      },
      {
        value: "hairGrowth",
        icon: hairGrowth,
        text: "Hair growth",
        description: "Grow your hair",
        jump: 6,
      },
      {
        value: "rebondedHair",
        icon: rebonded,
        text: "Rebonded hair",
        description: "Straghten your curly hair",
        jump: 6,
      },
      {
        value: "coloredHair",
        icon: colored,
        text: "Colored hair",
        description: "Make your hair colorful",
        jump: 6,
      },
      {
        value: "dandruff",
        icon: dandruff,
        text: "Dandruff",
        description: "Prevent hair from dandruff",
        jump: 6,
      },
    ],
  },

  // body/face
  {
    type: "select-single-card-default",
    question: "Which portion of your skin?",
    description: "Is it your body or your face?",
    id: "skinPart",
    options: [
      {
        value: "body",
        icon: bodySkin,
        text: "Body",
        description: "Treat your body skin",
        jump: 1,
      },
      {
        value: "face",
        icon: faceSkin,
        text: "Face",
        description: "Treat your facial skin",
        jump: 3,
      },
    ],
  },

  // body skin type
  {
    type: "select-single-list-default",
    question: "What is your body skin type?",
    description: "Your body type tells us the nature of the skin of your body.",
    id: "bodyType",
    options: [
      {
        value: "normal",
        icon: normalBody,
        text: "Normal",
        description: "No specific trait!",
        jump: 1,
      },
      {
        value: "oily",
        icon: oilySkin,
        text: "Oily",
        description: "Produced excess oil",
        jump: 1,
      },
      {
        value: "dry",
        icon: dryBody,
        text: "Dry",
        description: "Lacking enough water & oil",
        jump: 1,
      },
      {
        value: "sensitive",
        icon: sensitiveBody,
        text: "Sensitive",
        description: "Stinging, burning, pain sensations",
        jump: 1,
      },
    ],
  },

  // body skin concern
  {
    type: "select-single-card-default",
    question: "What are you worried about?",
    description: "Identify the main problem and tell us what that is.",
    id: "bodyConcern",
    options: [
      {
        value: "rashness",
        icon: rashBody,
        text: "Rashness",
        description: "Fix embarassing skin rash",
        jump: 3,
      },
      {
        value: "acneIssue",
        icon: acneBody,
        text: "Acne issue",
        description: "Decrease the annoying acne",
        jump: 3,
      },
      {
        value: "brightening",
        icon: brightBody,
        text: "Brightening",
        description: "Make your skin glow",
        jump: 3,
      },
      {
        value: "antiAging",
        icon: antiAgingSkin,
        text: "Anti aging",
        description: "Prevent aging to stay evergreen",
        jump: 3,
      },
    ],
  },

  // face skin type
  {
    type: "select-single-list-default",
    question: "What is your face skin type?",
    description:
      "Your face skin type tells us the nature of the skin of your face.",
    id: "faceType",
    options: [
      {
        value: "normal",
        icon: normalSkin,
        text: "Normal",
        description: "No specific trait!",
        jump: 1,
      },
      {
        value: "oily",
        icon: oilySkin,
        text: "Oily",
        description: "Produced excess oil",
        jump: 1,
      },
      {
        value: "dry",
        icon: drySkin,
        text: "Dry",
        description: "Lacking enough water & oil",
        jump: 1,
      },
      {
        value: "combinational",
        icon: combinationalSkin,
        text: "Combinational",
        description: "Oily only on nose and forehead",
        jump: 1,
      },

      {
        value: "sensitive",
        icon: sensitiveSkin,
        text: "Sensitive",
        description: "Stinging, burning, pain sensations",
        jump: 1,
      },
    ],
  },

  // face skin concern
  {
    type: "select-single-card-default",
    question: "What are you worried about?",
    description: "Identify the main problem and tell us what that is.",
    id: "faceConcern",
    options: [
      {
        value: "rashness",
        icon: rashSkin,
        text: "Rashness",
        description: "Fix embarassing skin rash",
        jump: 1,
      },
      {
        value: "acneIssue",
        icon: acneSkin,
        text: "Acne issue",
        description: "Decrease the annoying acne",
        jump: 1,
      },
      {
        value: "brightening",
        icon: brightSkin,
        text: "Brightening",
        description: "Make your skin glow",
        jump: 1,
      },
      {
        value: "antiAging",
        icon: antiAgingSkin,
        text: "Anti aging",
        description: "Prevent aging to stay evergreen",
        jump: 1,
      },
      {
        value: "dehydration",
        icon: blemishSkin,
        text: "Dehydration",
        description: "Fix dehydration of your skin",
        jump: 1,
      },
    ],
  },
];
