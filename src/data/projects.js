
export const projects = [
  {
    id: 'workforceiq',
    title: 'WorkforceIQ',
    subtitle: 'Employee Attrition Prediction & Analytics',
    category: 'Machine Learning',
    status: 'Deployed',
    featured: true,

    description:
      'An end-to-end machine learning application that predicts employee attrition and provides analytics to understand workforce patterns.',

    highlights: [
      'Built an end-to-end ML pipeline with preprocessing and model evaluation.',
      'Optimized classification threshold using out-of-fold predictions.',
      'Implemented model explainability using SHAP and permutation importance.',
      'Developed a FastAPI prediction backend and Streamlit dashboard.',
      'Containerized the application and deployed it on Render.',
    ],

    technologies: [
      'Python',
      'Scikit-learn',
      'FastAPI',
      'Streamlit',
      'Docker',
      'SHAP',
    ],

    github: 'https://github.com/varunvsSrivastava/WorkforceIQ',
    demo: 'https://workforceiq-frontend.onrender.com',
  },

  {
    id: 'researchpilot',
    title: 'ResearchPilot',
    subtitle: 'Evidence-Driven AI Research Assistant',
    category: 'AI / LLM Engineering',
    status: 'In Progress',
    featured: true,

    description:
      'An AI research assistant designed to support research planning, academic discovery, evidence retrieval, and structured research reporting.',

    highlights: [
      'Designed modular LLM client architecture.',
      'Implemented structured research planning and outputs.',
      'Integrated academic search capabilities.',
      'Developing retrieval and evidence-grounded research workflows.',
    ],

    technologies: [
      'Python',
      'LLMs',
      'RAG',
      'LangChain',
      'Academic Search',
    ],

    github: 'https://github.com/varunvsSrivastava/ResearchPilot.git',
    demo: null,
  },

  {
    id: 'random-forest',
    title: 'Random Forest Classifier',
    subtitle: 'Machine Learning Classification Pipeline',
    category: 'Machine Learning',
    status: 'Completed',
    featured: false,

    description:
      'A machine learning classification project featuring model evaluation, cross-validation, and hyperparameter optimization.',

    highlights: [
      'Implemented a Random Forest classification pipeline.',
      'Evaluated performance using classification metrics.',
      'Performed cross-validation and GridSearchCV.',
      'Achieved 95.61% test accuracy on the selected dataset.',
    ],

    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Joblib',
    ],

    github:
      'https://github.com/varunvsSrivastava/random-forest-classifier',
    demo: null,
  },

  {
    id: 'planhub',
    title: 'PlanHub',
    subtitle: 'MERN Stack Application',
    category: 'Full Stack Development',
    status: 'Completed',
    featured: false,

    description:
      'A full-stack application developed using the MERN stack, combining a React frontend with a Node.js and Express backend.',

    highlights: [
      'Developed the application using MongoDB, Express, React, and Node.js.',
      'Integrated frontend and backend application components.',
    ],

    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
    ],

    github: 'https://github.com/varunvsSrivastava/PLANHUB.git',
    demo: null,
  },
]
