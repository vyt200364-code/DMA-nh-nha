const questions = [

{
    question: "Which data access point is typically just a URL and works like the way your browser makes a call?",
    multi: false,
    options: [
        { text: "Facilitated Download", correct: false },
        { text: "API", correct: true },
        { text: "Webscraping", correct: false },
        { text: "None of them", correct: false }
    ]
},

{
    question: "There are two ways to calculate ROI. Which metric is NOT included in those two methods?",
    multi: false,
    options: [
        { text: "Marketing cost", correct: false },
        { text: "Total sales growth", correct: false },
        { text: "Customer lifetime value (LTV)", correct: false },
        { text: "Number of clicks on the marketing campaign", correct: true }
    ]
},

{
    question: "Zombie sites are oftentimes built based on digital signals from bots.",
    multi: false,
    options: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
},

{
    question: "What is a primary reason that consumer value measurements are important and helpful to companies?",
    multi: false,
    options: [
        { text: "They can predict likely changes in customers' income.", correct: false },
        { text: "They can help them increase the value of most customers.", correct: false },
        { text: "They help identify customers who provide more revenue, allowing companies to build differentiated marketing strategies.", correct: true },
        { text: "They aid in brand perception measurements by giving data on customers' perceived value.", correct: false }
    ]
},

{
    question: "Brand safety is a risk because of which dark side technology?",
    multi: false,
    options: [
        { text: "Trade Issues", correct: false },
        { text: "Brand Name", correct: false },
        { text: "Fake News", correct: true },
        { text: "Brand disclosure", correct: false }
    ]
},

{
    question: "Consumers' interest in data privacy has increased due to data hacks and breaches on which platforms?",
    multi: false,
    options: [
        { text: "Facebook", correct: false },
        { text: "Twitter", correct: false },
        { text: "YouTube", correct: false },
        { text: "All of them", correct: true }
    ]
},

{
    question: "Which statement regarding data density of analytic tools is most accurate?",
    multi: false,
    options: [
        { text: "Enterprise platforms handle the least data.", correct: false },
        { text: "Analysis gadgets handle a great amount of data.", correct: false },
        { text: "Point solutions handle the greatest amount of data.", correct: false },
        { text: "Analysis gadgets < Point solutions < Enterprise platforms", correct: true }
    ]
},

{
    question: "Revenue growth and reduction of costs are benefits of digital marketing maturity. They are examples of:",
    multi: false,
    options: [
        { text: "Effectiveness", correct: false },
        { text: "Organizational Collaboration", correct: false },
        { text: "Efficiency", correct: false },
        { text: "Both Effectiveness and Efficiency", correct: true }
    ]
},

{
    question: "In Google Analytics Explorations, which template visualizes the steps users take toward a conversion?",
    multi: false,
    options: [
        { text: "Segment overlap", correct: false },
        { text: "Cohort exploration", correct: false },
        { text: "Funnel exploration", correct: true },
        { text: "Free form", correct: false }
    ]
},

{
    question: "Most large brands are using reactive strategies to identify and manage digital ad fraud.",
    multi: false,
    options: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
},

{
    question: "Which one of the following is becoming the costliest risk to the free internet platforms we use today?",
    multi: false,
    options: [
        { text: "Digital Ad Fraud", correct: true },
        { text: "Website Cost", correct: false },
        { text: "System Management", correct: false },
        { text: "Ad Cost", correct: false }
    ]
},

{
    question: "What is the second step of a successful data analysis plan?",
    multi: false,
    options: [
        { text: "Hypothesis", correct: false },
        { text: "Analyze", correct: false },
        { text: "Collect", correct: true },
        { text: "Report", correct: false }
    ]
},

{
    question: "Bubble, Distribution, and Candlestick are types of graphs that display:",
    multi: false,
    options: [
        { text: "Change", correct: false },
        { text: "Correlation", correct: false },
        { text: "Relativity", correct: false },
        { text: "Clustering", correct: true }
    ]
},

{
    question: "In what ways can a company see benefits from digital marketing maturity?",
    multi: false,
    options: [
        { text: "Effectiveness", correct: false },
        { text: "Efficiency", correct: false },
        { text: "Neither effectiveness nor efficiency", correct: false },
        { text: "Both effectiveness and efficiency", correct: true }
    ]
},

{
    question: "Which is NOT a reasonable way that a CPG can measure customer outcomes?",
    multi: false,
    options: [
        { text: "Customer surveys", correct: false },
        { text: "Intrapersonal level", correct: true },
        { text: "Household surveys", correct: false },
        { text: "Geographic level", correct: false }
    ]
},

{
    question: "According to Kaushik's 10/90 rule, 90% of the analytics budget should be spent on:",
    multi: false,
    options: [
        { text: "Content Marketing Executive", correct: false },
        { text: "Marketing Tools", correct: false },
        { text: "Analytic Tools", correct: false },
        { text: "The analysts", correct: true }
    ]
},

{
    question: "API stands for:",
    multi: false,
    options: [
        { text: "Application Program Interface", correct: true },
        { text: "Application Program Information", correct: false },
        { text: "Anti Program Interface", correct: false },
        { text: "Application Product Information", correct: false }
    ]
},

{
    question: "During the Report step of analysis, the analyst should:",
    multi: false,
    options: [
        { text: "Produce tidy datasets", correct: false },
        { text: "Ensure recommendations are clear and concise", correct: true },
        { text: "Limit bias in the data", correct: false },
        { text: "Identify analysis type", correct: false }
    ]
},

{
    question: "What is Return on Investment (ROI)?",
    multi: false,
    options: [
        { text: "A measure of total units sold", correct: false },
        { text: "A measure of sales growth", correct: false },
        { text: "Revenue lost by customers", correct: false },
        { text: "A measure of the profit generated from a marketing campaign", correct: true }
    ]
},

{
    question: "What is Return on Ad Spend (ROAS)?",
    multi: false,
    options: [
        { text: "Revenue generated divided by advertising spend", correct: true },
        { text: "Ratio of net income to advertising investment", correct: false },
        { text: "Average revenue generated by customers", correct: false },
        { text: "Target amount spent on campaigns", correct: false }
    ]
},

{
    question: "Which one is the CORRECT statement?",
    multi: false,
    options: [
        { text: "Getting to a Big Idea is simple and only requires collecting data.", correct: false },
        { text: "Analysts should only use data that fits their original plan.", correct: false },
        { text: "Having a goal or objective makes for an easier analytics process.", correct: true },
        { text: "The four steps are Plan, Hypothesis, Analyze and Report in that exact wording.", correct: false }
    ]
},

{
    question: "Getting to a Big Idea is simple and only requires the analyst to collect and organize data.",
    multi: false,
    options: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
},

{
    question: "When planning an analysis, analysts should develop a hypothesis related to their marketing objective.",
    multi: false,
    options: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
},

{
    question: "Which marketing objective does NOT belong to the Customer Decision Journey?",
    multi: false,
    options: [
        { text: "Build Awareness", correct: false },
        { text: "Stimulating Demand", correct: true },
        { text: "Increase Loyalty", correct: false },
        { text: "Influence Consideration", correct: false }
    ]
},

{
    question: "During the Report step, the analyst should include all relevant data and ensure the visual reflects the data in complexity.",
    multi: false,
    options: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
},

{
    question: "Stimulating demand is generally NOT relevant for most companies.",
    multi: false,
    options: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
},

{
    question: "If 80% buy item A generating 30% revenue and 50% buy item B generating 60% revenue, what can be inferred?",
    multi: false,
    options: [
        { text: "People buying item A tend to be high value.", correct: false },
        { text: "Nothing can be inferred.", correct: false },
        { text: "People buying item B tend to be high value.", correct: true },
        { text: "Only buyers of both A and B are high value.", correct: false }
    ]
},

{
    question: "Which analytics tool category performs one or two functions very effectively while handling a medium amount of data?",
    multi: false,
    options: [
        { text: "Analysis Gadgets", correct: false },
        { text: "Point Solutions", correct: true },
        { text: "Data Density", correct: false },
        { text: "Enterprise Platforms", correct: false }
    ]
},

{
    question: "Which are benefits of exporting data from Google Ads and Google Analytics?",
    multi: true,
    options: [
        { text: "Compare data with other campaigns", correct: true },
        { text: "Discover historical trends", correct: true },
        { text: "Preserve data for future analysis", correct: true },
        { text: "Create entirely new data", correct: false }
    ]
},

{
    question: "Which is NOT a benefit of exporting data from Google Ads and Google Analytics?",
    multi: false,
    options: [
        { text: "Discover historical trends", correct: false },
        { text: "Create entirely new data", correct: true },
        { text: "Compare campaigns", correct: false },
        { text: "Preserve data", correct: false }
    ]
},

{
    question: "Which organization is in a distant 3rd place in Cloud Computing market share?",
    multi: false,
    options: [
        { text: "Yahoo", correct: false },
        { text: "Google", correct: true },
        { text: "Microsoft", correct: false },
        { text: "Amazon", correct: false }
    ]
},

{
    question: "Which is the most appropriate goal/objective for an analytics plan?",
    multi: false,
    options: [
        { text: "Increase brand loyalty by increasing website conversions.", correct: false },
        { text: "What are the factors affecting Oreo sales?", correct: true },
        { text: "What criteria increase Oreo conversion?", correct: false },
        { text: "Endorse Blackpink to increase awareness.", correct: false }
    ]
},

{
    question: "If stakeholder influence and interest are both low, what should you do?",
    multi: false,
    options: [
        { text: "Manage most thoroughly", correct: false },
        { text: "Keep completely informed", correct: false },
        { text: "Anticipate and meet needs", correct: false },
        { text: "None of them", correct: true }
    ]
},

{
    question: "Which visualization connects data points with a continuous line and fills the area below it?",
    multi: false,
    options: [
        { text: "Bubble chart", correct: false },
        { text: "Gauge chart", correct: false },
        { text: "Bullet chart", correct: false },
        { text: "Area chart", correct: true }
    ]
},

{
    question: "Which are important when working with stakeholders?",
    multi: false,
    options: [
        { text: "Stakeholder needs", correct: false },
        { text: "When to inform stakeholders", correct: false },
        { text: "How to communicate", correct: false },
        { text: "All of them", correct: true }
    ]
},

{
    question: "Which is NOT a category of digital data measurement?",
    multi: false,
    options: [
        { text: "Brand Impact", correct: false },
        { text: "Consumer Outcomes", correct: false },
        { text: "Customer Value", correct: false },
        { text: "Profit", correct: true }
    ]
},

{
    question: "Regarding Multivariate Testing, which statement is TRUE?",
    multi: false,
    options: [
        { text: "Tracks site flow only", correct: false },
        { text: "Tests many creative executions and monitors responses", correct: true },
        { text: "Collects business intelligence", correct: false },
        { text: "Determines attribution across all channels", correct: false }
    ]
},

{
    question: "Which measurement category differentiates individual customers based on buying patterns?",
    multi: false,
    options: [
        { text: "Consumer Value", correct: true },
        { text: "Customer Outcomes", correct: false },
        { text: "Attribution", correct: false },
        { text: "Brand Impact", correct: false }
    ]
},

{
    question: "Which is NOT a benefit of measurement?",
    multi: false,
    options: [
        { text: "Measurement is always a source of objective truth", correct: true },
        { text: "Measurement can lead to insights", correct: false },
        { text: "Measurement helps judge policy effectiveness", correct: false },
        { text: "Measurement reveals effects of actions", correct: false }
    ]
},

{
    question: "If a dataset is visualized based on story and information, it becomes:",
    multi: false,
    options: [
        { text: "Outline", correct: false },
        { text: "Rough sketch", correct: false },
        { text: "Pure data visualization", correct: true },
        { text: "Wireframe", correct: false }
    ]
}
