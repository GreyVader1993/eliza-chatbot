export const elizaPatterns = [
  // Family patterns
  {
    pattern: /(.*)mother(.*)/i,
    responses: [
      "Tell me more about your mother.",
      "What was your relationship with your mother like?",
      "How do you feel about your mother?",
      "Does your mother influence your thoughts?"
    ]
  },
  {
    pattern: /(.*)father(.*)/i,
    responses: [
      "Tell me about your father.",
      "How did your father make you feel?",
      "What role does your father play in your thoughts?",
      "Does your relationship with your father affect you?"
    ]
  },
  {
    pattern: /(.*)family(.*)/i,
    responses: [
      "Tell me more about your family.",
      "How does your family make you feel?",
      "What is your family like?"
    ]
  },
  
  // Feeling patterns
  {
    pattern: /(.*)sad|depressed|unhappy(.*)/i,
    responses: [
      "What makes you feel sad?",
      "When did you first feel this way?",
      "Do you often feel sad?",
      "What do you think causes your sadness?"
    ]
  },
  {
    pattern: /(.*)happy|glad|good(.*)/i,
    responses: [
      "What makes you happy?",
      "Tell me more about these good feelings.",
      "How long have you felt this way?",
      "What brings you joy?"
    ]
  },
  {
    pattern: /(.*)angry|mad|frustrated(.*)/i,
    responses: [
      "What makes you angry?",
      "How do you deal with anger?",
      "Tell me about your frustration.",
      "When do you feel most angry?"
    ]
  },
  
  // Self-reference patterns
  {
    pattern: /I am (.*)/i,
    responses: [
      "How long have you been $1?",
      "Do you believe it is normal to be $1?",
      "Do you enjoy being $1?",
      "What does being $1 mean to you?"
    ]
  },
  {
    pattern: /I feel (.*)/i,
    responses: [
      "Tell me more about feeling $1.",
      "Do you often feel $1?",
      "What makes you feel $1?",
      "How long have you felt $1?"
    ]
  },
  {
    pattern: /I think (.*)/i,
    responses: [
      "Why do you think $1?",
      "What makes you think $1?",
      "Do you doubt that $1?",
      "Tell me more about thinking $1."
    ]
  },
  {
    pattern: /I want (.*)/i,
    responses: [
      "What would it mean to you if you got $1?",
      "Why do you want $1?",
      "What would happen if you got $1?",
      "How badly do you want $1?"
    ]
  },
  {
    pattern: /I need (.*)/i,
    responses: [
      "Why do you need $1?",
      "What would happen if you didn't get $1?",
      "How long have you needed $1?",
      "Tell me about this need for $1."
    ]
  },
  
  // Dream patterns
  {
    pattern: /(.*)dream(.*)/i,
    responses: [
      "What does that dream suggest to you?",
      "Do you dream often?",
      "What persons appear in your dreams?",
      "Don't you believe that dreams have meaning?"
    ]
  },
  
  // Relationship patterns
  {
    pattern: /(.*)friend(.*)/i,
    responses: [
      "Tell me about your friends.",
      "What is important in friendship to you?",
      "How do your friends make you feel?",
      "Do you have many friends?"
    ]
  },
  
  // Yes/No responses
  {
    pattern: /^yes$/i,
    responses: [
      "You seem quite positive.",
      "Why do you think so?",
      "Can you elaborate on that?",
      "I see."
    ]
  },
  {
    pattern: /^no$/i,
    responses: [
      "Why not?",
      "You seem quite negative.",
      "Can you tell me more?",
      "Are you sure?"
    ]
  },
  
  // Questions about ELIZA
  {
    pattern: /(.*)(you|eliza)(.*)/i,
    responses: [
      "We're not talking about me, we're talking about you.",
      "Why are you interested in whether I $3?",
      "What makes you think about me?",
      "Let's discuss you, not me."
    ]
  },
  
  // Default responses
  {
    pattern: /(.*)/,
    responses: [
      "Please tell me more.",
      "Can you elaborate on that?",
      "How does that make you feel?",
      "What do you think about that?",
      "I see. Go on.",
      "That's interesting. Tell me more.",
      "How long have you felt this way?",
      "What does that suggest to you?",
      "Do you feel strongly about discussing such things?"
    ]
  }
];