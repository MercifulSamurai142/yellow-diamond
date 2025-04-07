
export interface LessonContent {
  title: string;
  description: string;
  applicationArea: string;
  relevance: string;
  content: string[];
}

type LessonContentMap = {
  [key in 'fundamentals' | 'sales-finance' | 'sales-technology']: {
    [key: number]: LessonContent;
  };
};

const lessonContentData: LessonContentMap = {
  fundamentals: {
    1: {
      title: "Retailer Segmentation & Targeting",
      description: "Identify and prioritize retail outlets for maximum reach and ROI in snacks distribution",
      applicationArea: "Snacks Distribution",
      relevance: "Critical for Yellow Diamond's penetration strategy across diverse retail formats in India",
      content: [
        "In the fragmented Indian retail landscape, effective retailer segmentation is crucial for snacks brands like Yellow Diamond. This lesson covers how to categorize retailers based on sales potential, visibility, and shopper traffic. You'll learn to identify Diamond and Gold outlets that drive 80% of your business, and develop tailored service models for each segment.",
        
        "Yellow Diamond's vast product range requires strategic placement across different outlet types. For example, larger packs and premium variants perform better in Modern Trade and A-class outlets, while smaller SKUs drive volumes in neighborhood kiranas. You'll learn to map Yellow Diamond's portfolio to the right channel mix for optimal market penetration.",
        
        "The lesson also covers how to create a 'must-stock' list for each outlet type, focusing on fast-moving SKUs like 'Chulbule' and 'Rings' that ensure quick stock rotation for retailers while maintaining Yellow Diamond's share of shelf."
      ]
    },
    2: {
      title: "Route to Market Optimization",
      description: "Design efficient distribution channels for Green Wave's diverse product portfolio",
      applicationArea: "Sales & Distribution",
      relevance: "Foundational for Yellow Diamond's market coverage and penetration goals",
      content: [
        "This lesson focuses on designing optimal route-to-market (RTM) models for Yellow Diamond's snack portfolio. You'll learn how to balance reach, cost, and control across different channel options including direct distribution, distributors, sub-distributors, and wholesalers.",
        
        "We'll analyze the unique characteristics of the Indian snacks market, with its multi-layered distribution system and millions of fragmented retail outlets. The lesson covers how to map different RTM models to geographical and demographic segments, from dense urban areas to remote rural locations.",
        
        "You'll learn how to optimize your distribution partners' beats and routes for maximum outlet coverage while maintaining cost-efficiency. The lesson also addresses van operations, delivery frequency, and order servicing cycles that balance service levels with operational costs.",
        
        "Finally, we'll cover inventory management at different nodes of the distribution chain, ensuring stock freshness for Yellow Diamond's products while minimizing unsold returns."
      ]
    },
    3: {
      title: "Winning at the Point of Sale",
      description: "Create compelling visibility and merchandising strategies for snack brands",
      applicationArea: "In-Store Execution",
      relevance: "Critical for Yellow Diamond's impulse purchase conversion and brand building",
      content: [
        "This lesson focuses on mastering in-store execution for Yellow Diamond's snack portfolio. You'll learn how to maximize visibility at the point of purchase, where 76% of snack buying decisions are made in India.",
        
        "We'll cover Yellow Diamond's IMPACT system (Impulse Merchandising, Placement, Availability, Communication, and Tracking) for different retail formats. You'll learn how to optimize product placement in high-traffic areas and near complementary categories to drive impulse purchases.",
        
        "The lesson covers both traditional trade execution (display units, counter-top dispensers, and window displays) and modern trade visibility (end-caps, gondolas, and promotional islands). You'll learn how to negotiate for and maintain premium placement despite competitive pressures.",
        
        "You'll also learn how to develop a calendar of in-store promotions and POP materials that align with Yellow Diamond's marketing campaigns, ensuring consistent brand messaging across all consumer touchpoints."
      ]
    },
    4: {
      title: "Distributor Management Excellence",
      description: "Build and nurture a high-performing distributor network for Green Wave",
      applicationArea: "Channel Management",
      relevance: "Essential for Yellow Diamond's market coverage and channel relationships",
      content: [
        "This lesson explores how to select, develop, and manage distributors effectively in the competitive Indian snacks market. You'll learn Yellow Diamond's distributor evaluation framework covering financial capability, market knowledge, infrastructure, and execution skills.",
        
        "We'll cover how to set balanced KPIs for distributors beyond just sales volumes, including outlet coverage, range selling, merchandising compliance, and market share. You'll learn how to implement a distributor scorecard system for regular performance reviews.",
        
        "The lesson addresses common distributor management challenges including exclusivity negotiations, handling competing brands, and motivating distributors to focus on growth SKUs rather than just bestsellers. You'll learn strategies for building distributor loyalty in a competitive market where poaching is common.",
        
        "Finally, you'll learn how to develop distributor capabilities through structured training programs, shared resources, and collaborative business planning to drive mutual growth."
      ]
    },
    5: {
      title: "Rural Market Penetration",
      description: "Strategies to capture the vast potential of India's rural snack market",
      applicationArea: "Rural Marketing",
      relevance: "Huge opportunity for Yellow Diamond to expand beyond urban markets to India's massive rural population",
      content: [
        "India's rural markets represent a massive growth opportunity for Yellow Diamond, with 65% of India's population residing in villages. This lesson explores strategies to effectively penetrate rural markets with unique characteristics.",
        
        "You'll learn about adapting Yellow Diamond's product strategy for rural markets, including portfolio simplification, focus on 'hero' SKUs, smaller pack sizes (₹5 and ₹10), and longer shelf-life formulations. The module covers rural-specific distribution models including the super-stockist approach, van operations, and leveraging rural 'haats' (periodic markets) and melas.",
        
        "The lesson addresses rural marketing approaches, including the effective use of local language communications, wall paintings, mobile van activations, and engagement at rural gatherings. You'll explore the economics of rural distribution, including cost-effective approaches to managing vast geographies with dispersed populations.",
        
        "Finally, you'll learn about building rural sales teams, including the selection and training of rural sales staff, often recruited locally, and how to structure incentives and targets for the unique challenges of rural sales in the snacks category."
      ]
    }
  },
  
  'sales-finance': {
    1: {
      title: "Trade Schemes Optimization",
      description: "Design effective trade schemes that drive sales without eroding margins",
      applicationArea: "Trade Marketing",
      relevance: "Critical for Yellow Diamond to balance volume growth with profitability",
      content: [
        "This lesson focuses on designing and implementing effective trade schemes for Yellow Diamond's snack portfolio. You'll learn how to structure schemes that drive business objectives while ensuring ROI and minimizing financial leakage.",
        
        "We'll cover the different types of trade schemes relevant for snack brands, including sell-in schemes (quantity discounts, display schemes) and sell-out schemes (consumer offers, retailer incentives). You'll learn how to select the appropriate scheme type based on business objectives and market conditions.",
        
        "The lesson addresses scheme budgeting and allocation across channels, SKUs, and geographies based on potential and strategic priorities. You'll learn how to calculate scheme ROI through volume lift analysis, incremental contribution, and payback period assessment.",
        
        "Finally, you'll learn about scheme implementation best practices, including clear communication, proper documentation, and robust tracking systems to prevent misuse and ensure intended benefits reach the right stakeholders."
      ]
    },
    2: {
      title: "ROI-Driven Marketing Investments",
      description: "Optimize Green Wave's marketing spend for maximum impact and returns",
      applicationArea: "Marketing Finance",
      relevance: "Essential for Yellow Diamond to maximize impact from limited marketing resources",
      content: [
        "This lesson focuses on making data-driven marketing investment decisions to maximize ROI for Yellow Diamond. You'll learn systematic approaches to allocate marketing budgets across activities, channels, and campaigns.",
        
        "We'll cover marketing mix modeling techniques to quantify the impact of different marketing levers on Yellow Diamond's sales, and how to use these insights for budget optimization. You'll learn how to calculate and compare ROI across different marketing activities from ATL advertising to BTL activations.",
        
        "The lesson addresses short-term vs. long-term marketing investments, balancing immediate sales lift with brand building activities that yield returns over time. You'll learn marketing budgeting methodologies including zero-based budgeting and objective-based allocation.",
        
        "Finally, you'll learn how to establish marketing performance measurement frameworks with clear KPIs, regular tracking, and optimization feedback loops to continuously improve Yellow Diamond's marketing ROI."
      ]
    },
    3: {
      title: "Channel Profitability Analysis",
      description: "Analyze and optimize profitability across different sales channels",
      applicationArea: "Sales Finance",
      relevance: "Critical for Yellow Diamond to prioritize channel investments and maximize returns",
      content: [
        "This lesson explores how to conduct detailed channel profitability analysis for Yellow Diamond's diverse distribution network. You'll learn to create P&L statements for each channel to understand true contribution.",
        
        "We'll cover proper cost allocation methodologies, including direct costs (margins, schemes, logistics) and indirect costs (sales force, merchandising, overheads). You'll learn how to calculate important profitability metrics including gross margin, contribution margin, and net channel profit.",
        
        "The lesson addresses common channel profitability challenges in the snacks category including high distribution costs for low-value products, frequent schemes and discounts, and product returns. You'll learn strategies to diagnose and address profitability issues in underperforming channels.",
        
        "Finally, you'll learn how to use channel profitability insights for strategic decision-making, including channel prioritization, resource allocation, and changes to route-to-market models to optimize overall profitability."
      ]
    },
    4: {
      title: "Sales Team Incentive Design",
      description: "Create effective incentive systems that drive the right sales behaviors",
      applicationArea: "Sales Force Effectiveness",
      relevance: "Critical for motivating Yellow Diamond's field force to achieve business objectives",
      content: [
        "This lesson focuses on designing effective incentive systems for Yellow Diamond's sales teams. You'll learn how to create incentive structures that drive desired behaviors and outcomes while remaining financially sustainable.",
        
        "We'll cover incentive plan components including target setting, performance measurement, payout structure, and implementation. You'll learn how to balance fixed and variable compensation based on role, market conditions, and strategic priorities.",
        
        "The lesson addresses incentive metrics beyond just sales volume, including outlet coverage, range selling, new product introduction, and display compliance. You'll learn how to weight different metrics and set progressive thresholds to stretch performance.",
        
        "Finally, you'll learn best practices for incentive plan implementation including clear communication, transparent tracking, timely payments, and regular review to ensure the system drives intended behaviors without unintended consequences."
      ]
    }
  },
  
  'sales-technology': {
    1: {
      title: "Sales Force Automation Tools",
      description: "Transform field force effectiveness with digital tools and automation",
      applicationArea: "Field Force Management",
      relevance: "Critical for Yellow Diamond to enhance field productivity and market visibility",
      content: [
        "This lesson explores how sales force automation (SFA) tools can transform Yellow Diamond's field operations. You'll learn how SFA systems can streamline activities, enhance productivity, and provide real-time market intelligence.",
        
        "We'll cover key SFA functionalities including beat planning, outlet data management, order capture, merchandising compliance, competitor tracking, and performance dashboards. You'll learn how to select the right SFA solution based on business needs, field capability, and infrastructure constraints.",
        
        "The lesson addresses implementation challenges including user adoption, field training, and integration with existing systems. You'll learn change management approaches to overcome resistance and ensure successful adoption.",
        
        "Finally, you'll learn how to leverage SFA data for strategic decision-making, including retail execution optimization, market-specific interventions, and sales force productivity enhancement."
      ]
    },
    2: {
      title: "Distributor Management Systems",
      description: "Digitize and optimize distributor operations and relationships",
      applicationArea: "Channel Management",
      relevance: "Essential for Yellow Diamond to strengthen distributor partnerships and improve supply chain efficiency",
      content: [
        "This lesson focuses on implementing distributor management systems (DMS) to enhance Yellow Diamond's secondary sales operations. You'll learn how DMS can improve inventory management, order fulfillment, and financial transactions with distribution partners.",
        
        "We'll cover key DMS functionalities including inventory tracking, order management, scheme administration, claims processing, and financial reconciliation. You'll learn how to select the right DMS solution that balances sophistication with ease of use for distributors of varying capabilities.",
        
        "The lesson addresses implementation approaches including phased rollouts, distributor onboarding, and providing ongoing support. You'll learn how to drive adoption through demonstrating clear benefits to distributors beyond just compliance requirements.",
        
        "Finally, you'll learn how to leverage DMS data for business insights, including secondary sales analysis, outlet penetration, stock availability, and distributor financial health monitoring to strengthen the distribution network."
      ]
    },
    3: {
      title: "Data-Driven Decision Making",
      description: "Leverage sales data analytics for strategic and operational decisions",
      applicationArea: "Sales Analytics",
      relevance: "Critical for Yellow Diamond to make informed decisions based on market insights",
      content: [
        "This lesson explores how to leverage data analytics for enhanced decision-making in Yellow Diamond's sales operations. You'll learn how to translate raw sales data into actionable insights that drive results.",
        
        "We'll cover sales analytics frameworks including descriptive analytics (what happened), diagnostic analytics (why it happened), predictive analytics (what will happen), and prescriptive analytics (what should we do). You'll learn how to apply each type to common sales challenges.",
        
        "The lesson addresses key sales analytics applications including territory potential estimation, outlet segmentation, range optimization, promotional effectiveness, and sales force productivity. You'll learn how to design dashboards and reports that focus on key actionable metrics rather than data overload.",
        
        "Finally, you'll learn how to build a data-driven culture in the sales organization, with regular data reviews, insight-based decision making, and continuous performance optimization based on analytical findings."
      ]
    },
    4: {
      title: "E-commerce & Omnichannel Strategy",
      description: "Develop effective strategies for online sales and omnichannel integration",
      applicationArea: "Digital Commerce",
      relevance: "Growing opportunity for Yellow Diamond to expand beyond traditional retail channels",
      content: [
        "This lesson focuses on developing effective e-commerce and omnichannel strategies for Yellow Diamond's snack portfolio. You'll learn how to establish and grow presence across digital commerce platforms while maintaining brand consistency and profitability.",
        
        "We'll cover India's e-commerce landscape for snack brands, including marketplaces (Amazon, Flipkart), quick commerce platforms (Swiggy Instamart, Zepto), specialist grocers (BigBasket, Grofers), and direct-to-consumer options. You'll learn how to develop platform-specific strategies based on shopper behavior and platform economics.",
        
        "The lesson addresses key e-commerce success factors including digital shelf optimization, content quality, ratings and reviews management, search optimization, and promotional strategies. You'll learn how to structure e-commerce P&Ls accounting for platform fees, fulfillment costs, and digital marketing investments.",
        
        "Finally, you'll learn about omnichannel integration, creating seamless brand experiences across offline and online touchpoints, leveraging online data for offline insights, and developing unified trade marketing approaches across channels."
      ]
    },
    5: {
      title: "Modern Trade Excellence",
      description: "Master the unique requirements of selling through modern retail formats",
      applicationArea: "Key Account Management",
      relevance: "Growing channel for Yellow Diamond with unique operational requirements",
      content: [
        "This lesson explores how to excel in modern trade retail channels with Yellow Diamond's snack portfolio. You'll learn the unique aspects of modern trade operations and how to build mutually beneficial partnerships with organized retailers.",
        
        "We'll cover the modern trade landscape in India, including national chains, regional players, cash & carry formats, and emerging minimarket chains. You'll learn the key operational differences between traditional trade and modern trade, and how these impact your go-to-market approach.",
        
        "The lesson addresses key account management fundamentals including joint business planning, range optimization, promotional planning, and performance review processes. You'll learn category management approaches to grow the overall snack category while building Yellow Diamond's share.",
        
        "Finally, you'll learn about execution excellence in modern trade, including planogram compliance, promotion execution, in-store visibility, and managing stock availability through efficient supply chain coordination."
      ]
    }
  }
};

export const getLessonContent = (
  module: 'fundamentals' | 'sales-finance' | 'sales-technology',
  id: number
): LessonContent | null => {
  return lessonContentData[module][id] || null;
};
