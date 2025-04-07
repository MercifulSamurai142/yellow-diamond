
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

type QuizQuestionMap = {
  [key in 'fundamentals' | 'sales-finance' | 'sales-technology']: QuizQuestion[];
};

const quizData: QuizQuestionMap = {
  fundamentals: [
    {
      question: "Which retailer segmentation approach is most effective for snack brands in India?",
      options: [
        "Segmenting solely based on retailer size",
        "Segmenting based on sales potential, visibility, and shopper traffic",
        "Applying the same service model to all retailers",
        "Focusing only on modern trade outlets"
      ],
      correctAnswer: "Segmenting based on sales potential, visibility, and shopper traffic"
    },
    {
      question: "What is the most effective approach to optimize route-to-market for a snack brand?",
      options: [
        "Always using direct distribution for better control",
        "Relying entirely on distributors to reduce costs",
        "Balancing reach, cost and control based on market conditions",
        "Using the same distribution model across all regions"
      ],
      correctAnswer: "Balancing reach, cost and control based on market conditions"
    },
    {
      question: "What percentage of snack buying decisions are made at the point of purchase in India?",
      options: [
        "About 25%",
        "About 50%",
        "About 76%",
        "About 90%"
      ],
      correctAnswer: "About 76%"
    },
    {
      question: "Which factor is most important when evaluating potential distributors for a snack brand?",
      options: [
        "Size of the distributor's warehouse",
        "Number of other brands carried",
        "Combination of financial capability, market knowledge, and execution skills",
        "Willingness to offer the lowest margins"
      ],
      correctAnswer: "Combination of financial capability, market knowledge, and execution skills"
    },
    {
      question: "What is the most effective strategy for rural market penetration for snack brands in India?",
      options: [
        "Using the same urban product portfolio and pack sizes",
        "Focusing only on premium products in rural areas",
        "Adapting product strategy with portfolio simplification and smaller pack sizes",
        "Avoiding rural markets due to distribution challenges"
      ],
      correctAnswer: "Adapting product strategy with portfolio simplification and smaller pack sizes"
    }
  ],
  'sales-finance': [
    {
      question: "What is the most comprehensive approach to channel profitability analysis?",
      options: [
        "Looking only at sales volume by channel",
        "Analyzing only gross margins",
        "Full P&L analysis allocating both direct and indirect costs to each channel",
        "Only measuring return on advertising spend"
      ],
      correctAnswer: "Full P&L analysis allocating both direct and indirect costs to each channel"
    },
    {
      question: "Which approach to trade scheme design is most effective for snack brands?",
      options: [
        "Running the same schemes across all products and channels",
        "Designing schemes based on business objectives with clear ROI measurement",
        "Offering the highest discounts possible to maximize sales",
        "Avoiding trade schemes entirely to protect margins"
      ],
      correctAnswer: "Designing schemes based on business objectives with clear ROI measurement"
    },
    {
      question: "What is the best approach to marketing investment decisions for a snack brand?",
      options: [
        "Spending equally across all marketing channels",
        "Investing primarily in TV advertising",
        "Data-driven allocation based on ROI measurement across channels",
        "Minimizing marketing spend to maximize short-term profits"
      ],
      correctAnswer: "Data-driven allocation based on ROI measurement across channels"
    },
    {
      question: "Which sales team incentive structure is most effective?",
      options: [
        "Fixed salary with no variable component",
        "100% variable compensation based solely on sales volume",
        "Balanced incentives tied to multiple KPIs including volume, coverage, and execution metrics",
        "Equal bonus for all team members regardless of performance"
      ],
      correctAnswer: "Balanced incentives tied to multiple KPIs including volume, coverage, and execution metrics"
    },
    {
      question: "How should marketing budgets be allocated between short-term and long-term objectives?",
      options: [
        "Focus entirely on short-term sales activation",
        "Focus entirely on long-term brand building",
        "Balance between immediate sales lift and brand building based on category needs",
        "Change allocation entirely based on quarterly sales performance"
      ],
      correctAnswer: "Balance between immediate sales lift and brand building based on category needs"
    }
  ],
  'sales-technology': [
    {
      question: "What is the most important consideration when implementing a Sales Force Automation (SFA) system?",
      options: [
        "Choosing the most advanced technology available",
        "Minimizing implementation costs",
        "Balancing functionality with user adoption and field capability",
        "Requiring all features to be used from day one"
      ],
      correctAnswer: "Balancing functionality with user adoption and field capability"
    },
    {
      question: "Which approach is most effective for successful Distributor Management System implementation?",
      options: [
        "Mandating immediate adoption by all distributors",
        "Implementing only basic features to avoid complexity",
        "Phased rollout with proper onboarding and demonstrating clear benefits",
        "Letting each distributor choose their own system"
      ],
      correctAnswer: "Phased rollout with proper onboarding and demonstrating clear benefits"
    },
    {
      question: "What is the most valuable application of data analytics in sales operations?",
      options: [
        "Producing large quantities of data reports",
        "Translating data into actionable insights for decision-making",
        "Comparing performance only to historical benchmarks",
        "Using analytics only for senior management reporting"
      ],
      correctAnswer: "Translating data into actionable insights for decision-making"
    },
    {
      question: "What is the most effective e-commerce strategy for snack brands in India?",
      options: [
        "Focusing only on Amazon and Flipkart",
        "Applying the same approach across all e-commerce platforms",
        "Developing platform-specific strategies based on shopper behavior",
        "Avoiding e-commerce due to profitability concerns"
      ],
      correctAnswer: "Developing platform-specific strategies based on shopper behavior"
    },
    {
      question: "What is the key to Modern Trade excellence for snack brands?",
      options: [
        "Focusing solely on price promotions",
        "Building partnerships with joint business planning and category growth focus",
        "Minimizing engagement with retail buyers",
        "Using the same strategies as in Traditional Trade"
      ],
      correctAnswer: "Building partnerships with joint business planning and category growth focus"
    }
  ]
};

export const getQuizQuestions = (module: 'fundamentals' | 'sales-finance' | 'sales-technology'): QuizQuestion[] => {
  return quizData[module] || [];
};
