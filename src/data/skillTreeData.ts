export type ImportanceGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type EffortGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'C–D' | 'D–E' | 'E–F' | string;
export type ProgressState = 'not_started' | 'learning' | 'practicing' | 'mastered';

export interface Subskill {
  id: string;
  nameEn: string;
  nameAr: string;
  importance: ImportanceGrade;
}

export interface CoreSkill {
  id: string;
  code: string; // e.g. "CORE 01"
  number: number;
  titleEn: string;
  titleAr: string;
  clusterEn: string;
  clusterAr: string;
  importance: ImportanceGrade;
  learningHours: string;
  learningEffort: EffortGrade;
  masteryHours: string;
  masteryEffort: EffortGrade;
  totalFocusedHours: string;
  whyItMattersEn: string;
  whyItMattersAr: string;
  subskills: Subskill[];
  tools: string[];
  roadmapPhase: number;
  tags: string[];
}

export interface Specialization {
  id: string;
  titleEn: string;
  titleAr: string;
  subskillsEn: string;
  subskillsAr: string;
  importance: ImportanceGrade;
}

export interface LifecyclePhase {
  number: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface OperationFamily {
  id: string;
  nameEn: string;
  nameAr: string;
  assessedEn: string;
  assessedAr: string;
  importance: ImportanceGrade;
}

export interface RoadmapPhase {
  phase: number;
  nameEn: string;
  nameAr: string;
  duration: string;
  skills: string[];
  tasksEn: string[];
  tasksAr: string[];
  exitCriteriaEn: string;
  exitCriteriaAr: string;
}

export interface CompetencyLevel {
  levelEn: string;
  levelAr: string;
  capabilitiesEn: string;
  capabilitiesAr: string;
  effortHours: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  purposeEn: string;
  purposeAr: string;
  skillAreas: string;
  url: string;
}

export interface ChecklistItem {
  id: string;
  textEn: string;
  textAr: string;
  category: string;
}

export interface ReferenceItem {
  number: number;
  title: string;
  url: string;
  descriptionEn: string;
  descriptionAr: string;
}

export const IMPORTANCE_DEFINITIONS: Record<ImportanceGrade, { labelEn: string; labelAr: string; descEn: string; descAr: string; color: string; badgeBg: string }> = {
  A: {
    labelEn: 'Core / Critical',
    labelAr: 'أساسي / حرج',
    descEn: 'Required for a broadly capable AI Red Teamer',
    descAr: 'مطلوب وإلزامي لأي مختبر اختراق ذكاء اصطناعي شامل ومؤهل',
    color: 'text-rose-400',
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  },
  B: {
    labelEn: 'High Value',
    labelAr: 'قيمة عالية',
    descEn: 'Needed in many real-world engagements',
    descAr: 'مطلوب وذو فائدة كبرى في أغلب المهام والعمليات الواقعية',
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  },
  C: {
    labelEn: 'Useful Specialization',
    labelAr: 'تخصص مفيد',
    descEn: 'Important for selected systems or specialized roles',
    descAr: 'مهم لأنظمة محددة أو أدوار تخصصية معينة',
    color: 'text-sky-400',
    badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
  },
  D: {
    labelEn: 'Niche Specialization',
    labelAr: 'تخصص دقيق',
    descEn: 'Narrow scope specialized domain',
    descAr: 'مجال تخصصي محدد النطاق',
    color: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
  },
  E: {
    labelEn: 'Highly Specialized / Research',
    labelAr: 'تخصص بحثي دقيق',
    descEn: 'Heavy research or deep academic focus',
    descAr: 'تخصص بحثي مكثف أو خلفية أكاديمية عميقة',
    color: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  F: {
    labelEn: 'Rare Optional',
    labelAr: 'اختياري نادر',
    descEn: 'Rare edge specialization',
    descAr: 'تخصص نادر اختياري لحالات استثنائية',
    color: 'text-slate-400',
    badgeBg: 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
};

export const EFFORT_DEFINITIONS: Record<EffortGrade, { labelEn: string; labelAr: string; learningHours: string; masteryHours: string }> = {
  A: { labelEn: 'Up to 40h', labelAr: 'حتى 40 ساعة', learningHours: 'Up to 40h', masteryHours: 'Up to 60h' },
  B: { labelEn: '41–70h', labelAr: '41 إلى 70 ساعة', learningHours: '41–70h', masteryHours: '61–100h' },
  C: { labelEn: '71–100h', labelAr: '71 إلى 100 ساعة', learningHours: '71–100h', masteryHours: '101–160h' },
  D: { labelEn: '101–140h', labelAr: '101 إلى 140 ساعة', learningHours: '101–140h', masteryHours: '161–240h' },
  E: { labelEn: '141–200h', labelAr: '141 إلى 200 ساعة', learningHours: '141–200h', masteryHours: '241–350h' },
  F: { labelEn: 'More than 200h', labelAr: 'أكثر من 200 ساعة', learningHours: '> 200h', masteryHours: '> 350h' }
};

export const SCOPE_TRACKS = [
  {
    id: 'app_sec',
    titleEn: 'AI Application Security Red Teaming',
    titleAr: 'أمن تطبيقات الذكاء الاصطناعي (AppSec)',
    descEn: 'Tests LLM-powered products, APIs, RAG systems, tools, agents, permissions, and deployment infrastructure.',
    descAr: 'اختبار المنتجات المدعومة بنماذج LLM وواجهات برمجة التطبيقات (APIs) وأنظمة RAG والأدوات والوكلاء وإدارة الصلاحيات والبنية التحتية.'
  },
  {
    id: 'aml',
    titleEn: 'Model / Adversarial ML Red Teaming',
    titleAr: 'الأمان العدائي للنماذج وتعلم الآلة (Adversarial ML)',
    descEn: 'Tests models and their data lifecycle through evasion, poisoning, privacy attacks, extraction, backdoors, and robustness testing.',
    descAr: 'اختبار النماذج ودورة حياة بياناتها من خلال هجمات التهرب (Evasion)، والتسميم (Poisoning)، والخصوصية، والاستخراج، والأبواب الخلفية، والصلابة.'
  },
  {
    id: 'safety',
    titleEn: 'AI Safety / Behavioural Red Teaming',
    titleAr: 'سلامة وسلوك الذكاء الاصطناعي (AI Safety & Behaviour)',
    descEn: 'Tests harmful or unwanted model behaviour, policy failures, misuse, bias, reliability, and unsafe emergent behaviour.',
    descAr: 'اختبار السلوكيات الضارة أو غير المرغوبة، وانتهاكات السياسات، وإساءة الاستخدام، والتحيز، والموثوقية، والسلوكيات الطارئة غير الآمنة.'
  }
];

export const CORE_SKILLS: CoreSkill[] = [
  {
    id: 'core-01',
    code: 'CORE 01',
    number: 1,
    titleEn: 'Traditional Cybersecurity Foundations',
    titleAr: 'أسس الأمن السيبراني التقليدي',
    clusterEn: 'Foundations & Infrastructure',
    clusterAr: 'الأساسيات والبنية التحتية',
    importance: 'A',
    learningHours: '40–60 hours',
    learningEffort: 'B',
    masteryHours: '80–120 hours',
    masteryEffort: 'C',
    totalFocusedHours: '120–180 hours',
    whyItMattersEn: 'AI products are still software systems. Their APIs, identities, networks, databases, cloud workloads, and operating systems remain part of the attack surface.',
    whyItMattersAr: 'منتجات وتطبيقات الذكاء الاصطناعي هي في النهاية أنظمة برمجية؛ فواجهات APIs والهويات والشبكات وقواعد البيانات والسحابة وأنظمة التشغيل تظل جزءاً أصيلاً لا يتجزأ من مساحة الهجوم.',
    tools: ['Wireshark', 'Burp Suite', 'Postman', 'Docker', 'AWS CLI'],
    roadmapPhase: 0,
    tags: ['Networking', 'APIs', 'IAM', 'Cloud', 'Web Security'],
    subskills: [
      { id: 'c01-1', nameEn: 'Networking fundamentals', nameAr: 'أساسيات الشبكات', importance: 'A' },
      { id: 'c01-2', nameEn: 'TCP/IP, DNS, HTTP/HTTPS, TLS', nameAr: 'بروتوكولات TCP/IP و DNS و HTTP/HTTPS و TLS', importance: 'A' },
      { id: 'c01-3', nameEn: 'REST APIs and API authentication', nameAr: 'واجهات REST والمصادقة للـ APIs', importance: 'A' },
      { id: 'c01-4', nameEn: 'Authentication vs. authorization', nameAr: 'التحقق من الهوية مقابل إدارة الصلاحيات', importance: 'A' },
      { id: 'c01-5', nameEn: 'OAuth 2.0, OIDC, SAML concepts', nameAr: 'مفاهيم OAuth 2.0 و OIDC و SAML', importance: 'B' },
      { id: 'c01-6', nameEn: 'Web application security fundamentals', nameAr: 'أساسيات أمن تطبيقات الويب (Web AppSec)', importance: 'A' },
      { id: 'c01-7', nameEn: 'SQL and database fundamentals', nameAr: 'أساسيات لغة SQL وقواعد البيانات', importance: 'A' },
      { id: 'c01-8', nameEn: 'Linux fundamentals', nameAr: 'أساسيات نظام التشغيل لينكس (Linux)', importance: 'B' },
      { id: 'c01-9', nameEn: 'Windows fundamentals', nameAr: 'أساسيات نظام التشغيل ويندوز (Windows)', importance: 'B' },
      { id: 'c01-10', nameEn: 'Containers and virtualization', nameAr: 'الحاويات (Containers) والبيئات الافتراضية', importance: 'B' },
      { id: 'c01-11', nameEn: 'Cloud fundamentals (AWS/Azure/GCP concepts)', nameAr: 'أساسيات السحابة (مفاهيم AWS / Azure / GCP)', importance: 'B' },
      { id: 'c01-12', nameEn: 'IAM, roles, permissions, and least privilege', nameAr: 'إدارة الهويات والأدوار والصلاحيات ومبدأ الحد الأدنى', importance: 'A' },
      { id: 'c01-13', nameEn: 'Secrets management', nameAr: 'إدارة المفاتيح والأسرار البرمجية (Secrets)', importance: 'A' },
      { id: 'c01-14', nameEn: 'Secure architecture and trust boundaries', nameAr: 'المعمارية الآمنة وحدود الثقة (Trust Boundaries)', importance: 'A' },
      { id: 'c01-15', nameEn: 'Logging and basic incident-response concepts', nameAr: 'مفاهيم التسجيل (Logging) والاستجابة للحوادث', importance: 'B' }
    ]
  },
  {
    id: 'core-02',
    code: 'CORE 02',
    number: 2,
    titleEn: 'Mathematics, Probability & Statistics for AI Security',
    titleAr: 'الرياضيات والاحتمالات والإحصاء لأمن الذكاء الاصطناعي',
    clusterEn: 'Data Science & Math',
    clusterAr: 'علم البيانات والرياضيات',
    importance: 'B',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '120–180 hours',
    masteryEffort: 'D',
    totalFocusedHours: '180–270 hours',
    whyItMattersEn: 'Enables meaningful interpretation of model behaviour, evaluation results, uncertainty, false positives, and adversarial experiments. Advanced mathematics is required for research-heavy AML work, not every application-level assessment.',
    whyItMattersAr: 'تتيح التفسير السليم علمياً لسلوك النماذج ونتائج التقييم والشك الإحصائي والإيجابيات الخاطئة والتجارب العدائية؛ الرياضيات المتقدمة مطلوبة للأبحاث العميقة في AML.',
    tools: ['NumPy', 'SciPy', 'Jupyter', 'Pandas'],
    roadmapPhase: 1,
    tags: ['Linear Algebra', 'Probability', 'Statistics', 'Metrics'],
    subskills: [
      { id: 'c02-1', nameEn: 'Algebra and functions', nameAr: 'الجبر والدوال الرياضية', importance: 'B' },
      { id: 'c02-2', nameEn: 'Vectors and matrices', nameAr: 'المتجهات والمصفوفات', importance: 'B' },
      { id: 'c02-3', nameEn: 'Linear algebra concepts', nameAr: 'مفاهيم الجبر الخطي', importance: 'B' },
      { id: 'c02-4', nameEn: 'Derivatives and gradients', nameAr: 'المشتقات والتدرجات (Gradients)', importance: 'C' },
      { id: 'c02-5', nameEn: 'Probability fundamentals', nameAr: 'أسس نظرية الاحتمالات', importance: 'A' },
      { id: 'c02-6', nameEn: 'Conditional probability and Bayes\' rule', nameAr: 'الاحتمال الشرطي وقاعدة بايز (Bayes\' Rule)', importance: 'B' },
      { id: 'c02-7', nameEn: 'Descriptive statistics', nameAr: 'الإحصاء الوصفي', importance: 'A' },
      { id: 'c02-8', nameEn: 'Distributions and sampling', nameAr: 'التوزيعات الاحتمالية والمعاينة', importance: 'B' },
      { id: 'c02-9', nameEn: 'Hypothesis testing', nameAr: 'اختبار الفرضيات الإحصائية', importance: 'C' },
      { id: 'c02-10', nameEn: 'Confidence intervals', nameAr: 'فترات الثقة (Confidence Intervals)', importance: 'C' },
      { id: 'c02-11', nameEn: 'Correlation vs. causation', nameAr: 'الارتباط مقابل السببية', importance: 'B' },
      { id: 'c02-12', nameEn: 'Experimental design and control groups', nameAr: 'التصميم التجريبي والمجموعات الضابطة', importance: 'A' },
      { id: 'c02-13', nameEn: 'Statistical significance vs. practical significance', nameAr: 'الدلالة الإحصائية مقابل الأهمية العملية', importance: 'B' },
      { id: 'c02-14', nameEn: 'Class imbalance and base-rate effects', nameAr: 'عدم توازن الفئات وتأثيرات المعدل الأساسي', importance: 'B' },
      { id: 'c02-15', nameEn: 'Precision, recall, F1, ROC-AUC, PR-AUC', nameAr: 'مقاييس الدقة والاستدعاء و F1 و ROC-AUC و PR-AUC', importance: 'A' },
      { id: 'c02-16', nameEn: 'Variance, reproducibility, and uncertainty', nameAr: 'التباين وقابلية التكرار وعدم اليقين', importance: 'B' }
    ]
  },
  {
    id: 'core-03',
    code: 'CORE 03',
    number: 3,
    titleEn: 'Artificial Intelligence & Machine Learning Fundamentals',
    titleAr: 'أساسيات الذكاء الاصطناعي وتعلم الآلة',
    clusterEn: 'AI & ML Core',
    clusterAr: 'أسس الذكاء الاصطناعي',
    importance: 'A',
    learningHours: '70–100 hours',
    learningEffort: 'C',
    masteryHours: '140–220 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'The practitioner must understand what a model learns, what its inputs and outputs mean, how training differs from inference, and why failures can arise.',
    whyItMattersAr: 'يجب على المختبر فهم ما يتعلمه النموذج، ودلالة مدخلاته ومخرجاته، وفارق التدريب عن الاستدلال (Inference)، ولماذا تنشأ الإخفاقات.',
    tools: ['Scikit-Learn', 'PyTorch', 'TensorFlow', 'Hugging Face'],
    roadmapPhase: 1,
    tags: ['Supervised', 'Unsupervised', 'Overfitting', 'Embeddings', 'Inference'],
    subskills: [
      { id: 'c03-1', nameEn: 'AI vs. ML vs. Deep Learning', nameAr: 'الفرق بين الذكاء الاصطناعي وتعلم الآلة والتعلم العميق', importance: 'A' },
      { id: 'c03-2', nameEn: 'Supervised learning', nameAr: 'التعلم الخاضع للإشراف (Supervised Learning)', importance: 'A' },
      { id: 'c03-3', nameEn: 'Unsupervised learning', nameAr: 'التعلم غير الخاضع للإشراف (Unsupervised Learning)', importance: 'B' },
      { id: 'c03-4', nameEn: 'Self-supervised learning', nameAr: 'التعلم الذاتي الإشراف (Self-Supervised)', importance: 'B' },
      { id: 'c03-5', nameEn: 'Reinforcement learning concepts', nameAr: 'مفاهيم التعلم المعزز (Reinforcement Learning)', importance: 'B' },
      { id: 'c03-6', nameEn: 'Training, validation, and test splits', nameAr: 'تقسيم بيانات التدريب والتحقق والاختبار', importance: 'A' },
      { id: 'c03-7', nameEn: 'Features, labels, and targets', nameAr: 'السمات والتسميات والأهداف المتوقعة', importance: 'A' },
      { id: 'c03-8', nameEn: 'Classification and regression', nameAr: 'مهام التصنيف والانحدار التنبؤي', importance: 'A' },
      { id: 'c03-9', nameEn: 'Clustering', nameAr: 'التجميع العنقودي (Clustering)', importance: 'C' },
      { id: 'c03-10', nameEn: 'Overfitting and underfitting', nameAr: 'فرط المطابقة ونقص المطابقة (Over/Underfitting)', importance: 'A' },
      { id: 'c03-11', nameEn: 'Generalization', nameAr: 'التعميم على بيانات جديدة (Generalization)', importance: 'A' },
      { id: 'c03-12', nameEn: 'Bias-variance trade-off', nameAr: 'الموازنة بين الانحياز والتباين (Bias-Variance)', importance: 'B' },
      { id: 'c03-13', nameEn: 'Loss functions and optimization concepts', nameAr: 'دوال الخسارة وخوارزميات التحسين', importance: 'B' },
      { id: 'c03-14', nameEn: 'Gradient descent', nameAr: 'الانحدار التدريجي (Gradient Descent)', importance: 'B' },
      { id: 'c03-15', nameEn: 'Embeddings and representation learning', nameAr: 'التضمينات (Embeddings) والتمثيل الدلالي', importance: 'A' },
      { id: 'c03-16', nameEn: 'Model evaluation and benchmarking', nameAr: 'تقييم النماذج والاختبارات المرجعية', importance: 'A' },
      { id: 'c03-17', nameEn: 'Fine-tuning concepts', nameAr: 'مفاهيم الضبط الدقيق (Fine-Tuning)', importance: 'B' },
      { id: 'c03-18', nameEn: 'Transfer learning', nameAr: 'التعلم بالنقل (Transfer Learning)', importance: 'B' },
      { id: 'c03-19', nameEn: 'Inference and model serving', nameAr: 'الاستدلال وتشغيل وخدمة النماذج (Model Serving)', importance: 'A' },
      { id: 'c03-20', nameEn: 'Model limitations and uncertainty', nameAr: 'محدودية النماذج وعدم اليقين', importance: 'A' }
    ]
  },
  {
    id: 'core-04',
    code: 'CORE 04',
    number: 4,
    titleEn: 'Deep Learning & LLM Architecture',
    titleAr: 'التعلم العميق ومعمارية النماذج اللغوية الكبيرة',
    clusterEn: 'AI & ML Core',
    clusterAr: 'أسس الذكاء الاصطناعي',
    importance: 'A',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'Understanding model architecture helps explain prompt injection, context behaviour, output variability, memorization, model constraints, and why simple prompt-only defenses are insufficient.',
    whyItMattersAr: 'فهم معمارية النماذج يكشف أسباب حقن التعليمات، وسلوك سياق المحادثة، وتذبذب المخرجات، والحفظ والتسريب، ولماذا تفشل الدفاعات المقتصرة على توجيهات النصوص وحدها.',
    tools: ['Transformers', 'PyTorch', 'vLLM', 'Ollama', 'llama.cpp'],
    roadmapPhase: 1,
    tags: ['Transformers', 'Attention', 'Tokens', 'Context Window', 'RLHF', 'LoRA'],
    subskills: [
      { id: 'c04-1', nameEn: 'Neural network fundamentals', nameAr: 'أساسيات الشبكات العصبية الاصطناعية', importance: 'A' },
      { id: 'c04-2', nameEn: 'Layers, weights, biases, and activations', nameAr: 'الطبقات والأوزان والانحيازات ودوال التنشيط', importance: 'B' },
      { id: 'c04-3', nameEn: 'Forward and backward propagation concepts', nameAr: 'مفاهيم الانتشار الأمامي والخلفي', importance: 'C' },
      { id: 'c04-4', nameEn: 'Tokenization and token IDs', nameAr: 'تقطيع النصوص للرموز (Tokenization) ومعرفاتها', importance: 'A' },
      { id: 'c04-5', nameEn: 'Vocabulary and token limits', nameAr: 'قاموس المفردات وحدود عدد الرموز', importance: 'A' },
      { id: 'c04-6', nameEn: 'Embeddings', nameAr: 'المتجهات التضمينية للكلمات والنصوص', importance: 'A' },
      { id: 'c04-7', nameEn: 'Attention mechanism', nameAr: 'آلية الانتباه (Attention Mechanism)', importance: 'A' },
      { id: 'c04-8', nameEn: 'Self-attention and multi-head attention', nameAr: 'الانتباه الذاتي ومتعدد الرؤوس', importance: 'B' },
      { id: 'c04-9', nameEn: 'Transformer architecture', nameAr: 'معمارية المحولات (Transformer Architecture)', importance: 'A' },
      { id: 'c04-10', nameEn: 'Positional encoding', nameAr: 'الترميز الموضعي لمواقع الكلمات', importance: 'B' },
      { id: 'c04-11', nameEn: 'Context windows', nameAr: 'نوافذ السياق (Context Windows)', importance: 'A' },
      { id: 'c04-12', nameEn: 'Pretraining vs. instruction tuning', nameAr: 'التدريب المسبق مقابل ضبط التعليمات', importance: 'A' },
      { id: 'c04-13', nameEn: 'Supervised fine-tuning (SFT)', nameAr: 'الضبط الدقيق الخاضع للإشراف (SFT)', importance: 'B' },
      { id: 'c04-14', nameEn: 'RLHF and preference optimization concepts', nameAr: 'التعلم المعزز بالتغذية الراجعة البشرية (RLHF)', importance: 'B' },
      { id: 'c04-15', nameEn: 'Inference parameters (temperature, top-p, sampling)', nameAr: 'معاملات الاستدلال (درجة الحرارة، top-p، المعاينة)', importance: 'A' },
      { id: 'c04-16', nameEn: 'System/developer/user message roles', nameAr: 'أدوار الرسائل: النظام والمطور والمستخدم', importance: 'A' },
      { id: 'c04-17', nameEn: 'Tool/function calling architecture', nameAr: 'معمارية استدعاء الأدوات والدوال', importance: 'A' },
      { id: 'c04-18', nameEn: 'Model families and open-weight vs. hosted models', nameAr: 'عائلات النماذج مفتوحة الأوزان مقابل المستضافة سحابياً', importance: 'B' },
      { id: 'c04-19', nameEn: 'Quantization and adapters (LoRA/PEFT concepts)', nameAr: 'التكميم (Quantization) ومحولات LoRA/PEFT', importance: 'C' },
      { id: 'c04-20', nameEn: 'Model behaviour, stochasticity, and non-determinism', nameAr: 'سلوك النموذج والعشوائية الإحصائية وعدم الحتمية', importance: 'A' }
    ]
  },
  {
    id: 'core-05',
    code: 'CORE 05',
    number: 5,
    titleEn: 'Python, Software Engineering & Automation',
    titleAr: 'بايثون وهندسة البرمجيات والأتمتة',
    clusterEn: 'Engineering & Automation',
    clusterAr: 'الهندسة والأتمتة',
    importance: 'A',
    learningHours: '80–110 hours',
    learningEffort: 'D',
    masteryHours: '160–250 hours',
    masteryEffort: 'D–E',
    totalFocusedHours: '240–360 hours',
    whyItMattersEn: 'AI Red Teamers build test harnesses, connect to model endpoints, transform inputs, automate scenarios, score outputs, and analyze results.',
    whyItMattersAr: 'يبني مختبر الاختراق منصات اختبار برمجية، ويتصل بنقاط استدعاء النماذج، ويحول المدخلات، ويؤتمت السيناريوهات، ويقيم النتائج بدقة.',
    tools: ['Python', 'pytest', 'requests', 'httpx', 'Git', 'pandas', 'asyncio'],
    roadmapPhase: 2,
    tags: ['Python', 'Automation', 'Async', 'Testing', 'CLI', 'Git'],
    subskills: [
      { id: 'c05-1', nameEn: 'Python syntax and programming logic', nameAr: 'صياغة بايثون والمنطق البرمجي', importance: 'A' },
      { id: 'c05-2', nameEn: 'Data types, functions, modules, and classes', nameAr: 'أنواع البيانات والدوال والوحدات والفئات', importance: 'A' },
      { id: 'c05-3', nameEn: 'Lists, dictionaries, sets, and data structures', nameAr: 'القوائم والقواميس والمجموعات وهياكل البيانات', importance: 'A' },
      { id: 'c05-4', nameEn: 'File handling and serialization', nameAr: 'التعامل مع الملفات والترميز والتسلسل', importance: 'A' },
      { id: 'c05-5', nameEn: 'JSON, YAML, CSV, and XML', nameAr: 'معالجة صيغ JSON و YAML و CSV و XML', importance: 'A' },
      { id: 'c05-6', nameEn: 'HTTP clients and API requests', nameAr: 'عملاء بروتوكول HTTP وطلبات الـ API', importance: 'A' },
      { id: 'c05-7', nameEn: 'Authentication headers and API keys', nameAr: 'ترويسات المصادقة ومفاتيح الـ API', importance: 'A' },
      { id: 'c05-8', nameEn: 'Error handling and retries', nameAr: 'معالجة الأخطاء وإعادة المحاولة الذكية', importance: 'B' },
      { id: 'c05-9', nameEn: 'Async programming and concurrency', nameAr: 'البرمجة غير المتزامنة (Async) والتزامن', importance: 'B' },
      { id: 'c05-10', nameEn: 'Regular expressions', nameAr: 'التعبيرات النمطية المنتظمة (Regex)', importance: 'B' },
      { id: 'c05-11', nameEn: 'Data processing with pandas', nameAr: 'معالجة البيانات وتحليلها باستخدام Pandas', importance: 'B' },
      { id: 'c05-12', nameEn: 'NumPy fundamentals', nameAr: 'أساسيات مكتبة المصفوفات NumPy', importance: 'B' },
      { id: 'c05-13', nameEn: 'Jupyter notebooks', nameAr: 'بيئات العمل التفاعلية Jupyter Notebooks', importance: 'B' },
      { id: 'c05-14', nameEn: 'Logging and debugging', nameAr: 'التسجيل وتتبع الأخطاء البرمجية (Debugging)', importance: 'A' },
      { id: 'c05-15', nameEn: 'Unit testing and test fixtures', nameAr: 'اختبارات الوحدات ومنصات الاختبار (Fixtures)', importance: 'A' },
      { id: 'c05-16', nameEn: 'Git and version control', nameAr: 'إدارة الإصدارات البرمجية باستخدام Git', importance: 'A' },
      { id: 'c05-17', nameEn: 'Virtual environments and dependency management', nameAr: 'البيئات الافتراضية وإدارة التبعيات البرمجية', importance: 'B' },
      { id: 'c05-18', nameEn: 'CLI tool development', nameAr: 'تطوير أدوات سطر الأوامر (CLI Tools)', importance: 'B' },
      { id: 'c05-19', nameEn: 'Basic SQL integration', nameAr: 'الربط البرمجي مع قواعد بيانات SQL', importance: 'B' },
      { id: 'c05-20', nameEn: 'Reproducible scripts and configuration management', nameAr: 'السكربتات القابلة للتكرار وإدارة الإعدادات', importance: 'A' }
    ]
  },
  {
    id: 'core-06',
    code: 'CORE 06',
    number: 6,
    titleEn: 'AI Application Architecture & System Integration',
    titleAr: 'معمارية تطبيقات الذكاء الاصطناعي والتكامل البرمجي',
    clusterEn: 'Application & Architecture',
    clusterAr: 'معمارية التطبيقات والتكامل',
    importance: 'A',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '130–200 hours',
    masteryEffort: 'D',
    totalFocusedHours: '190–290 hours',
    whyItMattersEn: 'Many critical AI vulnerabilities occur in the surrounding application and integrations, not solely inside model weights.',
    whyItMattersAr: 'تحدث الغالبية الساحقة من الثغرات الحرجة في التطبيق المحيط بالتكاملات والواجهات البرمجية، وليس فقط داخل أوزان النموذج.',
    tools: ['FastAPI', 'LangChain', 'LlamaIndex', 'Redis', 'PostgreSQL'],
    roadmapPhase: 2,
    tags: ['Architecture', 'Gateways', 'Multi-tenant', 'Data Flow', 'Human In Loop'],
    subskills: [
      { id: 'c06-1', nameEn: 'LLM application architecture', nameAr: 'معمارية الأنظمة المدعومة بنماذج LLM', importance: 'A' },
      { id: 'c06-2', nameEn: 'Frontend/backend request flow', nameAr: 'تدفق الطلبات بين الواجهة الأمامية والخلفية', importance: 'A' },
      { id: 'c06-3', nameEn: 'Model API integration', nameAr: 'التكامل البرمجي مع واجهات النموذج', importance: 'A' },
      { id: 'c06-4', nameEn: 'Prompt construction and context assembly', nameAr: 'بناء التوجيهات وتجميع سياق الاستعلام', importance: 'A' },
      { id: 'c06-5', nameEn: 'API gateway and middleware concepts', nameAr: 'بوابات الـ API والبرمجيات الوسيطة (Middleware)', importance: 'B' },
      { id: 'c06-6', nameEn: 'Session and conversation state', nameAr: 'إدارة حالة الجلسات والمحادثات المستمرة', importance: 'A' },
      { id: 'c06-7', nameEn: 'User identity propagation', nameAr: 'تمرير هوية المستخدم عبر الطبقات البرمجية', importance: 'A' },
      { id: 'c06-8', nameEn: 'Authorization enforcement outside the model', nameAr: 'إنفاذ الصلاحيات برمجياً خارج النموذج', importance: 'A' },
      { id: 'c06-9', nameEn: 'Tool and function calling flow', nameAr: 'تدفق استدعاء الأدوات والدوال البرمجية', importance: 'A' },
      { id: 'c06-10', nameEn: 'Database and cache integration', nameAr: 'التكامل مع قواعد البيانات والذاكرة المؤقتة', importance: 'B' },
      { id: 'c06-11', nameEn: 'File upload and document processing', nameAr: 'رفع الملفات ومعالجة واستخراج المستندات', importance: 'B' },
      { id: 'c06-12', nameEn: 'Background jobs and queues', nameAr: 'المهام الخلفية وطوابير المعالجة (Queues)', importance: 'C' },
      { id: 'c06-13', nameEn: 'Rate limiting and quotas', nameAr: 'تحديد معدل الطلبات والحصص الاستهلاكية', importance: 'A' },
      { id: 'c06-14', nameEn: 'Multi-tenant architecture', nameAr: 'المعمارية متعددة المستأجرين (Multi-Tenancy)', importance: 'A' },
      { id: 'c06-15', nameEn: 'Data-flow diagrams', nameAr: 'مخططات تدفق البيانات (DFDs)', importance: 'A' },
      { id: 'c06-16', nameEn: 'Trust boundaries and security boundaries', nameAr: 'حدود الثقة والحدود الأمنية الصارمة', importance: 'A' },
      { id: 'c06-17', nameEn: 'Human approval workflows', nameAr: 'مسارات الموافقة والاعتماد البشري', importance: 'A' },
      { id: 'c06-18', nameEn: 'Failure handling and fallback paths', nameAr: 'التعامل مع الإخفاقات ومسارات الطوارئ البديلة', importance: 'B' }
    ]
  },
  {
    id: 'core-07',
    code: 'CORE 07',
    number: 7,
    titleEn: 'Prompt, Context & Instruction Engineering',
    titleAr: 'هندسة التوجيهات والسياق والتعليمات',
    clusterEn: 'Prompt & Context',
    clusterAr: 'التوجيه والسياق',
    importance: 'A',
    learningHours: '35–55 hours',
    learningEffort: 'B',
    masteryHours: '80–130 hours',
    masteryEffort: 'C',
    totalFocusedHours: '115–185 hours',
    whyItMattersEn: 'A red teamer must understand how instructions and untrusted content are assembled and interpreted to test whether they can be confused or overridden.',
    whyItMattersAr: 'يجب على المختبر فهم كيفية تركيب التعليمات والمحتوى غير الموثوق وتفسيرهما لاختبار ما إذا كان بالإمكان إرباك النموذج أو تجاوزه.',
    tools: ['OpenAI Playground', 'Anthropic Console', 'Google AI Studio'],
    roadmapPhase: 2,
    tags: ['Prompts', 'System Prompt', 'Injection', 'JSON Mode', 'Multi-turn'],
    subskills: [
      { id: 'c07-1', nameEn: 'Prompt anatomy and role hierarchy', nameAr: 'تشريح التوجيهات وهرمية الأدوار الإلزامية', importance: 'A' },
      { id: 'c07-2', nameEn: 'System, developer, and user instructions', nameAr: 'تعليمات النظام والمطور والمستخدم', importance: 'A' },
      { id: 'c07-3', nameEn: 'Context construction', nameAr: 'بناء وتجميع سياق التوجيه', importance: 'A' },
      { id: 'c07-4', nameEn: 'Context-window constraints', nameAr: 'قيود وحدود نافذة السياق', importance: 'A' },
      { id: 'c07-5', nameEn: 'Few-shot prompting', nameAr: 'التوجيه بالأمثلة التوضيحية (Few-shot)', importance: 'B' },
      { id: 'c07-6', nameEn: 'Structured outputs and JSON mode', nameAr: 'المخرجات المنظمة ونمط JSON الإلزامي', importance: 'B' },
      { id: 'c07-7', nameEn: 'Output schemas and constrained generation', nameAr: 'مخططات المخرجات والتوليد المقيد برمجياً', importance: 'B' },
      { id: 'c07-8', nameEn: 'Prompt templates and variables', nameAr: 'قوالب التوجيهات وحقن المتغيرات', importance: 'A' },
      { id: 'c07-9', nameEn: 'Conversation history and truncation', nameAr: 'تاريخ المحادثات واقتطاع السياق القديم', importance: 'B' },
      { id: 'c07-10', nameEn: 'Instruction conflicts', nameAr: 'تنازع وتصادم التعليمات والأوامر', importance: 'A' },
      { id: 'c07-11', nameEn: 'Untrusted-content boundaries', nameAr: 'عزل حدود المحتوى غير الموثوق', importance: 'A' },
      { id: 'c07-12', nameEn: 'Prompt injection concepts', nameAr: 'مفاهيم حقن التوجيهات (Prompt Injection)', importance: 'A' },
      { id: 'c07-13', nameEn: 'Direct vs. indirect prompt injection', nameAr: 'الحقن المباشر مقابل الحقن غير المباشر', importance: 'A' },
      { id: 'c07-14', nameEn: 'Multi-turn interaction design', nameAr: 'تصميم التفاعلات متعددة الجولات الحوارية', importance: 'A' },
      { id: 'c07-15', nameEn: 'Tool descriptions and instruction exposure', nameAr: 'أوصاف الأدوات وخطر انكشاف التعليمات', importance: 'A' },
      { id: 'c07-16', nameEn: 'Prompt versioning and regression testing', nameAr: 'إصدارات التوجيهات واختبارات الانتكاس (Regression)', importance: 'B' }
    ]
  },
  {
    id: 'core-08',
    code: 'CORE 08',
    number: 8,
    titleEn: 'AI Security Threat Modeling & Red-Team Methodology',
    titleAr: 'نمذجة تهديدات أمن الذكاء الاصطناعي ومنهجية الفريق الأحمر',
    clusterEn: 'Methodology & Operations',
    clusterAr: 'المنهجية والعمليات',
    importance: 'A',
    learningHours: '40–60 hours',
    learningEffort: 'B',
    masteryHours: '100–150 hours',
    masteryEffort: 'C',
    totalFocusedHours: '140–210 hours',
    whyItMattersEn: 'Converts vague attempts into structured, scoped, measurable security tests.',
    whyItMattersAr: 'يحول المحاولات العشوائية إلى اختبارات أمنية مقننة ومنهجية وقابلة للقياس والإثبات وفق نطاق عمل محدد.',
    tools: ['OWASP GenAI Manual', 'MITRE ATLAS', 'NIST AI RMF', 'STRIDE'],
    roadmapPhase: 3,
    tags: ['Threat Modeling', 'Rules of Engagement', 'ATLAS', 'OWASP Top 10', 'Risk'],
    subskills: [
      { id: 'c08-1', nameEn: 'Asset identification', nameAr: 'تحديد وتصنيف الأصول الحساسة للذكاء الاصطناعي', importance: 'A' },
      { id: 'c08-2', nameEn: 'System and data-flow mapping', nameAr: 'رسم خرائط النظام وتدفق البيانات', importance: 'A' },
      { id: 'c08-3', nameEn: 'Threat modeling fundamentals', nameAr: 'أساسيات نمذجة التهديدات الأمنية', importance: 'A' },
      { id: 'c08-4', nameEn: 'Attacker goals, capabilities, and assumptions', nameAr: 'أهداف المهاجم وقدراته وفرضيات الهجوم', importance: 'A' },
      { id: 'c08-5', nameEn: 'Trust boundaries', nameAr: 'تحديد نقاط العبور وحدود الثقة', importance: 'A' },
      { id: 'c08-6', nameEn: 'Abuse cases and misuse cases', nameAr: 'حالات سوء الاستخدام وحالات الاستغلال العكسي', importance: 'A' },
      { id: 'c08-7', nameEn: 'Attack trees', nameAr: 'أشجار الهجوم المنهجية (Attack Trees)', importance: 'B' },
      { id: 'c08-8', nameEn: 'STRIDE concepts and applicability', nameAr: 'مفاهيم نموذج STRIDE وتطبيقه على الذكاء الاصطناعي', importance: 'B' },
      { id: 'c08-9', nameEn: 'AI-specific threat modeling', nameAr: 'نمذجة التهديدات المخصصة للذكاء الاصطناعي', importance: 'A' },
      { id: 'c08-10', nameEn: 'Business impact analysis', nameAr: 'تحليل الأثر المباشر على الأعمال والمؤسسة', importance: 'A' },
      { id: 'c08-11', nameEn: 'Risk likelihood and impact', nameAr: 'احتمالية الخطر وشدة الأثر الواقعي', importance: 'A' },
      { id: 'c08-12', nameEn: 'Scope and rules of engagement', nameAr: 'تحديد النطاق وقواعد الاشتباك (Rules of Engagement)', importance: 'A' },
      { id: 'c08-13', nameEn: 'Safe test-data design', nameAr: 'تصميم بيانات اختبار آمنة واصطناعية (Canary)', importance: 'A' },
      { id: 'c08-14', nameEn: 'Test hypotheses and expected outcomes', nameAr: 'فرضيات الاختبار والنتائج المتوقعة', importance: 'A' },
      { id: 'c08-15', nameEn: 'Test prioritization', nameAr: 'ترتيب أولويات الاختبار بناءً على الخطورة', importance: 'A' },
      { id: 'c08-16', nameEn: 'OWASP GenAI risk taxonomy', nameAr: 'تصنيف مخاطر الذكاء الاصطناعي التوليدي من OWASP', importance: 'A' },
      { id: 'c08-17', nameEn: 'MITRE ATLAS familiarity', nameAr: 'الإلمام بمصفوفة تكتيكات وتقنيات MITRE ATLAS', importance: 'B' },
      { id: 'c08-18', nameEn: 'NIST AI RMF / AI risk terminology', nameAr: 'إطار إدارة مخاطر الذكاء الاصطناعي NIST AI RMF', importance: 'B' },
      { id: 'c08-19', nameEn: 'Reproducibility and evidence standards', nameAr: 'معايير قابلية إعادة الإنتاج وتوثيق الأدلة', importance: 'A' }
    ]
  },
  {
    id: 'core-09',
    code: 'CORE 09',
    number: 9,
    titleEn: 'LLM Security Attacks & Adversarial Testing',
    titleAr: 'هجمات واختبارات اختراق النماذج اللغوية الكبيرة',
    clusterEn: 'Attacks & Exploits',
    clusterAr: 'الهجمات والاختراق العملي',
    importance: 'A',
    learningHours: '80–120 hours',
    learningEffort: 'D',
    masteryHours: '180–280 hours',
    masteryEffort: 'D–E',
    totalFocusedHours: '260–400 hours',
    whyItMattersEn: 'This is the central practical attack skill set for LLM application red teaming.',
    whyItMattersAr: 'هذه هي المجموعة المركزية لمهارات الهجوم العملي واختبار الاختراق لتطبيقات النماذج اللغوية الكبيرة.',
    tools: ['PyRIT', 'garak', 'Custom Attack Harnesses', 'Burp Suite'],
    roadmapPhase: 3,
    tags: ['Prompt Injection', 'Jailbreak', 'Data Leakage', 'Excessive Agency', 'DoS'],
    subskills: [
      { id: 'c09-1', nameEn: 'Direct prompt injection', nameAr: 'حقن التوجيه المباشر (Direct Prompt Injection)', importance: 'A' },
      { id: 'c09-2', nameEn: 'Indirect prompt injection', nameAr: 'حقن التوجيه غير المباشر (عبر وثائق أو مصادر خارجية)', importance: 'A' },
      { id: 'c09-3', nameEn: 'Jailbreak testing', nameAr: 'اختبار كسر الحماية وتجاوز القيود (Jailbreaks)', importance: 'A' },
      { id: 'c09-4', nameEn: 'Multi-turn jailbreak assessment', nameAr: 'كسر الحماية متعدد الجولات (Multi-turn Jailbreak)', importance: 'B' },
      { id: 'c09-5', nameEn: 'Refusal robustness testing', nameAr: 'اختبار صلابة آليات الرفض (Refusal Robustness)', importance: 'A' },
      { id: 'c09-6', nameEn: 'System prompt disclosure testing', nameAr: 'اختبار كشف واستخراج توجيهات النظام السرية', importance: 'A' },
      { id: 'c09-7', nameEn: 'Sensitive data disclosure testing', nameAr: 'اختبار تسريب البيانات الحساسة للمستخدمين', importance: 'A' },
      { id: 'c09-8', nameEn: 'Conversation and session data isolation', nameAr: 'اختبار عزل بيانات الجلسات والمحادثات', importance: 'A' },
      { id: 'c09-9', nameEn: 'Insecure output handling', nameAr: 'معالجة المخرجات غير الآمنة (XSS، حقن أوامر)', importance: 'A' },
      { id: 'c09-10', nameEn: 'Unsafe downstream interpretation of model output', nameAr: 'التفسير غير الآمن لمخرجات النموذج في الأنظمة التالية', importance: 'A' },
      { id: 'c09-11', nameEn: 'Hallucination and reliability abuse cases', nameAr: 'استغلال الهلوسة وضعف موثوقية النموذج', importance: 'B' },
      { id: 'c09-12', nameEn: 'Misinformation and manipulation testing', nameAr: 'اختبار التضليل والتلاعب بسلوك النموذج', importance: 'B' },
      { id: 'c09-13', nameEn: 'Insecure plugin / tool instruction handling', nameAr: 'التعامل غير الآمن مع تعليمات الأدوات والإضافات', importance: 'A' },
      { id: 'c09-14', nameEn: 'Excessive agency assessment', nameAr: 'تقييم الصلاحيات الزائدة والوكالة المفرطة للنموذج', importance: 'A' },
      { id: 'c09-15', nameEn: 'Model denial-of-service and unbounded consumption', nameAr: 'هجمات حجب الخدمة واستهلاك الموارد غير المقيد', importance: 'B' },
      { id: 'c09-16', nameEn: 'Rate-limit and quota abuse assessment', nameAr: 'تقييم تجاوز معدل الطلبات واستنزاف الحصص', importance: 'B' },
      { id: 'c09-17', nameEn: 'Model behaviour consistency testing', nameAr: 'اختبار اتساق واستقرار سلوك النموذج', importance: 'B' },
      { id: 'c09-18', nameEn: 'Encoded / obfuscated input robustness', nameAr: 'صلابة النموذج أمام المدخلات المشفرة والمموهة', importance: 'B' },
      { id: 'c09-19', nameEn: 'Cross-language and multilingual attack testing', nameAr: 'هجمات الترجمة واللغات المتعددة لتجاوز الفلاتر', importance: 'B' },
      { id: 'c09-20', nameEn: 'Multi-modal prompt injection awareness', nameAr: 'الوعي بحقن التوجيهات عبر الوسائط المتعددة', importance: 'B' },
      { id: 'c09-21', nameEn: 'Multi-turn attack-chain design', nameAr: 'تصميم سلاسل الهجمات متعددة الجولات', importance: 'A' },
      { id: 'c09-22', nameEn: 'Human review of automated findings', nameAr: 'المراجعة والتحقق البشري من النتائج المؤتمتة', importance: 'A' }
    ]
  },
  {
    id: 'core-10',
    code: 'CORE 10',
    number: 10,
    titleEn: 'RAG, Retrieval & Knowledge-Base Security',
    titleAr: 'أمن أنظمة التوليد المعزز بالاسترجاع (RAG) وقواعد المعرفة',
    clusterEn: 'RAG & Knowledge Bases',
    clusterAr: 'أنظمة RAG وقواعد المعرفة',
    importance: 'A',
    learningHours: '50–75 hours',
    learningEffort: 'C',
    masteryHours: '120–180 hours',
    masteryEffort: 'C–D',
    totalFocusedHours: '170–255 hours',
    whyItMattersEn: 'RAG systems introduce external content, retrieval logic, embeddings, and data-access boundaries into model context.',
    whyItMattersAr: 'تُدخل أنظمة RAG محتوى خارجياً ومنطق استرجاع ونماذج تضمين وحدود صلاحيات وصول إلى سياق النموذج، مما يوسع نطاق الهجوم.',
    tools: ['ChromaDB', 'Pinecone', 'Qdrant', 'Weaviate', 'FAISS', 'LangChain'],
    roadmapPhase: 4,
    tags: ['RAG', 'Vector DB', 'Poisoning', 'Access Control', 'Indirect Injection'],
    subskills: [
      { id: 'c10-1', nameEn: 'RAG architecture', nameAr: 'معمارية أنظمة الاسترجاع المعزز (RAG)', importance: 'A' },
      { id: 'c10-2', nameEn: 'Document ingestion pipelines', nameAr: 'مسارات استيعاب وفهرسة المستندات', importance: 'A' },
      { id: 'c10-3', nameEn: 'Text extraction and chunking', nameAr: 'استخراج النصوص وتقطيعها إلى كتل (Chunking)', importance: 'B' },
      { id: 'c10-4', nameEn: 'Embedding models', nameAr: 'نماذج التضمين الدلالي للمستندات', importance: 'A' },
      { id: 'c10-5', nameEn: 'Vector databases', nameAr: 'قواعد البيانات المتجهية (Vector Databases)', importance: 'A' },
      { id: 'c10-6', nameEn: 'Similarity search and retrieval ranking', nameAr: 'البحث عن التشابه وترتيب نتائج الاسترجاع', importance: 'B' },
      { id: 'c10-7', nameEn: 'Metadata filtering', nameAr: 'تصفية البيانات الوصفية (Metadata Filtering)', importance: 'A' },
      { id: 'c10-8', nameEn: 'Tenant and user-level data isolation', nameAr: 'عزل البيانات على مستوى المستأجرين والمستخدمين', importance: 'A' },
      { id: 'c10-9', nameEn: 'Access-control-aware retrieval', nameAr: 'الاسترجاع المراعي لصلاحيات الوصول (ACL-aware)', importance: 'A' },
      { id: 'c10-10', nameEn: 'Source attribution and citations', nameAr: 'إسناد المصادر والاقتباسات بدقة', importance: 'B' },
      { id: 'c10-11', nameEn: 'Retrieval relevance and grounding', nameAr: 'صلة الاسترجاع وتأصيل الإجابات (Grounding)', importance: 'A' },
      { id: 'c10-12', nameEn: 'Indirect prompt injection through documents', nameAr: 'حقن التوجيهات غير المباشر عبر مستندات RAG', importance: 'A' },
      { id: 'c10-13', nameEn: 'Knowledge-base poisoning assessment', nameAr: 'تقييم تسميم قاعدة المعرفة والمستندات', importance: 'A' },
      { id: 'c10-14', nameEn: 'Data integrity and provenance', nameAr: 'سلامة البيانات وأصل مصدرها وتتبعها', importance: 'A' },
      { id: 'c10-15', nameEn: 'Embedding-space weaknesses', nameAr: 'نقاط الضعف في فضاء التضمينات المتجهية', importance: 'B' },
      { id: 'c10-16', nameEn: 'Cross-document information leakage', nameAr: 'تسريب المعلومات الحساسة عبر الوثائق المتعددة', importance: 'A' },
      { id: 'c10-17', nameEn: 'Retrieval cache and stale-data risks', nameAr: 'مخاطر الذاكرة المؤقتة للاسترجاع والبيانات القديمة', importance: 'C' },
      { id: 'c10-18', nameEn: 'RAG evaluation and regression testing', nameAr: 'تقييم أداء وأمان RAG واختبارات الانتكاس', importance: 'A' }
    ]
  },
  {
    id: 'core-11',
    code: 'CORE 11',
    number: 11,
    titleEn: 'AI Agents, Tool Calling & MCP Security',
    titleAr: 'أمن وكلاء الذكاء الاصطناعي واستدعاء الأدوات وبروتوكول MCP',
    clusterEn: 'Agents & Action Security',
    clusterAr: 'الوكلاء والأفعال التلقائية',
    importance: 'A',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'Agents combine model behaviour with tools, identities, memory, and the ability to take actions. A model failure can therefore become a real application or business action.',
    whyItMattersAr: 'يدمج الوكلاء سلوك النموذج مع الأدوات والهويات والذاكرة والقدرة على تنفيذ أفعال؛ لذا فإن فشل النموذج قد يتحول فوراً إلى إجراء تخريبي في العالم الحقيقي.',
    tools: ['Model Context Protocol (MCP)', 'LangGraph', 'AutoGPT', 'CrewAI', 'Docker Sandbox'],
    roadmapPhase: 4,
    tags: ['Agents', 'MCP', 'Tool Calling', 'Goal Hijacking', 'Sandboxing', 'Least Agency'],
    subskills: [
      { id: 'c11-1', nameEn: 'Agent architecture and execution loop', nameAr: 'معمارية الوكيل ودورة التنفيذ المستمرة', importance: 'A' },
      { id: 'c11-2', nameEn: 'Planning and task decomposition', nameAr: 'التخطيط وتفكيك المهام المركبة', importance: 'B' },
      { id: 'c11-3', nameEn: 'Tool / function calling', nameAr: 'استدعاء الأدوات والدوال البرمجية', importance: 'A' },
      { id: 'c11-4', nameEn: 'Tool schemas and descriptions', nameAr: 'مخططات الأدوات وتوصيفاتها الدقيقة', importance: 'A' },
      { id: 'c11-5', nameEn: 'Tool authentication and authorization', nameAr: 'مصادقة وصلاحيات الأدوات والخدمات', importance: 'A' },
      { id: 'c11-6', nameEn: 'Least agency and least privilege', nameAr: 'مبدأ الحد الأدنى من الوكالة وأقل صلاحية', importance: 'A' },
      { id: 'c11-7', nameEn: 'Human-in-the-loop approvals', nameAr: 'آليات الاعتماد والموافقة البشرية قبل التنفيذ', importance: 'A' },
      { id: 'c11-8', nameEn: 'Agent memory and state', nameAr: 'ذاكرة الوكيل وإدارة الحالة المستمرة', importance: 'A' },
      { id: 'c11-9', nameEn: 'Short-term vs. long-term memory', nameAr: 'الذاكرة قصيرة المدى مقابل طويلة المدى', importance: 'B' },
      { id: 'c11-10', nameEn: 'Memory poisoning assessment', nameAr: 'تقييم تسميم ذاكرة الوكيل عبر المحادثات', importance: 'B' },
      { id: 'c11-11', nameEn: 'Goal hijacking', nameAr: 'اختطاف أهداف الوكيل (Goal Hijacking)', importance: 'A' },
      { id: 'c11-12', nameEn: 'Tool misuse and tool output manipulation', nameAr: 'إساءة استخدام الأدوات والتلاعب بمخرجاتها', importance: 'A' },
      { id: 'c11-13', nameEn: 'Identity and privilege abuse', nameAr: 'استغلال هوية الوكيل وصلاحياته الممنوحة', importance: 'A' },
      { id: 'c11-14', nameEn: 'Unexpected code execution risk assessment', nameAr: 'تقييم مخاطر تنفيذ الأوامر البرمجية غير المتوقعة', importance: 'A' },
      { id: 'c11-15', nameEn: 'Agent-to-agent communication', nameAr: 'التواصل والاتصال بين عدة وكلاء', importance: 'B' },
      { id: 'c11-16', nameEn: 'Multi-agent attack chains', nameAr: 'سلاسل الهجوم الممتدة عبر وكلاء متعددين', importance: 'B' },
      { id: 'c11-17', nameEn: 'MCP architecture and security model', nameAr: 'معمارية بروتوكول MCP ونموذجه الأمني', importance: 'A' },
      { id: 'c11-18', nameEn: 'MCP servers, tools, resources, and prompts', nameAr: 'خوادم MCP وأدواتها ومواردها وقوالبها', importance: 'B' },
      { id: 'c11-19', nameEn: 'MCP authentication and permission boundaries', nameAr: 'مصادقة وحدود صلاحيات بروتوكول MCP', importance: 'A' },
      { id: 'c11-20', nameEn: 'Untrusted tool results and external content', nameAr: 'التعامل مع نتائج الأدوات والمحتوى الخارجي غير الموثوق', importance: 'A' },
      { id: 'c11-21', nameEn: 'Sandboxing and execution isolation', nameAr: 'العزل البرمجي في بيئات معزولة (Sandboxing)', importance: 'A' },
      { id: 'c11-22', nameEn: 'Agent observability and audit trails', nameAr: 'قابلية المراقبة وسجلات تدقيق إجراءات الوكلاء', importance: 'A' },
      { id: 'c11-23', nameEn: 'Action confirmation and transaction safety', nameAr: 'تأكيد الإجراءات وأمان العمليات الحساسة', importance: 'A' }
    ]
  },
  {
    id: 'core-12',
    code: 'CORE 12',
    number: 12,
    titleEn: 'Adversarial Machine Learning (AML)',
    titleAr: 'التعلم الآلي العدائي (Adversarial ML)',
    clusterEn: 'Adversarial ML & Robustness',
    clusterAr: 'التعلم العدائي والصلابة',
    importance: 'B',
    learningHours: '100–150 hours',
    learningEffort: 'E',
    masteryHours: '250–400 hours',
    masteryEffort: 'E–F',
    totalFocusedHours: '350–550 hours',
    whyItMattersEn: 'This branch covers attacks against ML learning, inference, and model behaviour beyond ordinary prompt manipulation. Deep expertise is research-heavy.',
    whyItMattersAr: 'يغطي هذا الفرع الهجمات الموجهة ضد عملية التعلم والاستدلال وسلوك النموذج بما يتجاوز التلاعب بالنصوص؛ الخبرة العميقة فيه ذات طابع بحثي متقدم.',
    tools: ['Adversarial Robustness Toolbox (ART)', 'CleverHans', 'Foolbox', 'TextAttack'],
    roadmapPhase: 5,
    tags: ['AML', 'Evasion', 'Poisoning', 'Backdoor', 'Adversarial Examples', 'Fuzzing'],
    subskills: [
      { id: 'c12-1', nameEn: 'AML threat models', nameAr: 'نماذج التهديد في التعلم الآلي العدائي', importance: 'A' },
      { id: 'c12-2', nameEn: 'White-box, gray-box, and black-box assumptions', nameAr: 'فرضيات الصندوق الأبيض والرمادي والأسود', importance: 'B' },
      { id: 'c12-3', nameEn: 'Evasion attacks', nameAr: 'هجمات التهرب والتضليل (Evasion Attacks)', importance: 'A' },
      { id: 'c12-4', nameEn: 'Adversarial examples', nameAr: 'الأمثلة والمدخلات العدائية (Adversarial Examples)', importance: 'A' },
      { id: 'c12-5', nameEn: 'Test-time perturbations', nameAr: 'الاضطرابات والتشويش في وقت الاختبار', importance: 'B' },
      { id: 'c12-6', nameEn: 'Data poisoning', nameAr: 'هجمات تسميم البيانات (Data Poisoning)', importance: 'A' },
      { id: 'c12-7', nameEn: 'Label flipping', nameAr: 'هجمات قلب وتغيير التصنيفات (Label Flipping)', importance: 'B' },
      { id: 'c12-8', nameEn: 'Backdoor and Trojan attacks', nameAr: 'هجمات الأبواب الخلفية وأحصنة طروادة (Trojans)', importance: 'B' },
      { id: 'c12-9', nameEn: 'Training-time attacks', nameAr: 'الهجمات أثناء مرحلة التدريب الأولي', importance: 'B' },
      { id: 'c12-10', nameEn: 'Fine-tuning data manipulation', nameAr: 'التلاعب ببيانات الضبط الدقيق (Fine-tuning)', importance: 'B' },
      { id: 'c12-11', nameEn: 'Robustness evaluation', nameAr: 'تقييم صلابة ومتانة النموذج', importance: 'A' },
      { id: 'c12-12', nameEn: 'Distribution shift', nameAr: 'انزياح توزيع البيانات (Distribution Shift)', importance: 'B' },
      { id: 'c12-13', nameEn: 'Model-specific vs. transfer attacks', nameAr: 'الهجمات الخاصة بالنموذج مقابل الهجمات القابلة للنقل', importance: 'C' },
      { id: 'c12-14', nameEn: 'Adversarial training concepts', nameAr: 'مفاهيم التدريب العدائي الوقائي', importance: 'C' },
      { id: 'c12-15', nameEn: 'Fuzzing for ML systems', nameAr: 'الفحص العشوائي (Fuzzing) لأنظمة تعلم الآلة', importance: 'C' },
      { id: 'c12-16', nameEn: 'Robustness metrics', nameAr: 'مقاييس ومعايير قياس المتانة', importance: 'B' },
      { id: 'c12-17', nameEn: 'Attack success rate and constraints', nameAr: 'معدل نجاح الهجوم والقيود التشغيلية', importance: 'A' },
      { id: 'c12-18', nameEn: 'Multimodal adversarial inputs', nameAr: 'المدخلات العدائية متعددة الوسائط', importance: 'C' },
      { id: 'c12-19', nameEn: 'Reinforcement-learning security concepts', nameAr: 'مفاهيم أمن التعلم المعزز', importance: 'D' },
      { id: 'c12-20', nameEn: 'Federated-learning attack concepts', nameAr: 'مفاهيم الهجوم على التعلم الفيدرالي', importance: 'D' }
    ]
  },
  {
    id: 'core-13',
    code: 'CORE 13',
    number: 13,
    titleEn: 'Model Privacy, Memorization & Intellectual Property',
    titleAr: 'خصوصية النماذج والحفظ العرضي والملكية الفكرية',
    clusterEn: 'Privacy & Intellectual Property',
    clusterAr: 'الخصوصية والملكية الفكرية',
    importance: 'B',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '160–250 hours',
    masteryEffort: 'D–E',
    totalFocusedHours: '220–340 hours',
    whyItMattersEn: 'AI systems may reveal information about training data, fine-tuning data, prompts, user sessions, or proprietary model behaviour.',
    whyItMattersAr: 'قد تكشف أنظمة الذكاء الاصطناعي معلومات عن بيانات التدريب، أو بيانات الضبط، أو التوجيهات السرية، أو جلسات المستخدمين، أو الملكية الفكرية للنموذج.',
    tools: ['Privacy Meter', 'TensorFlow Privacy', 'Custom Canary Probes'],
    roadmapPhase: 5,
    tags: ['Privacy', 'Memorization', 'Membership Inference', 'Model Stealing', 'PII'],
    subskills: [
      { id: 'c13-1', nameEn: 'Data privacy fundamentals', nameAr: 'أساسيات خصوصية البيانات واللوائح التنظيمية', importance: 'A' },
      { id: 'c13-2', nameEn: 'PII and sensitive-data classification', nameAr: 'تصنيف البيانات الشخصية والمعلومات الحساسة', importance: 'A' },
      { id: 'c13-3', nameEn: 'Training-data memorization', nameAr: 'حفظ واسترجاع بيانات التدريب داخل النموذج', importance: 'B' },
      { id: 'c13-4', nameEn: 'Membership inference', nameAr: 'هجمات الاستدلال على العضوية (Membership Inference)', importance: 'C' },
      { id: 'c13-5', nameEn: 'Model inversion', nameAr: 'هجمات استعادة البيانات وعكس النموذج (Inversion)', importance: 'C' },
      { id: 'c13-6', nameEn: 'Model extraction / stealing concepts', nameAr: 'مفاهيم سرقة واستخراج النماذج (Model Stealing)', importance: 'B' },
      { id: 'c13-7', nameEn: 'Model fingerprinting', nameAr: 'البصمة المميزة للنموذج وإثبات الملكية', importance: 'C' },
      { id: 'c13-8', nameEn: 'Sensitive prompt and context disclosure', nameAr: 'انكشاف التوجيهات الحساسة وسياق النظام', importance: 'A' },
      { id: 'c13-9', nameEn: 'Cross-session data leakage', nameAr: 'تسريب البيانات عبر جلسات المستخدمين المختلفة', importance: 'A' },
      { id: 'c13-10', nameEn: 'Cross-tenant leakage', nameAr: 'تسريب البيانات عبر المستأجرين (Cross-Tenant)', importance: 'A' },
      { id: 'c13-11', nameEn: 'Secret and credential exposure', nameAr: 'كشف المفاتيح البرمجية والبيانات السرية المخزنة', importance: 'A' },
      { id: 'c13-12', nameEn: 'Privacy attack assumptions and limitations', nameAr: 'فرضيات هجمات الخصوصية وحدود تطبيقها', importance: 'B' },
      { id: 'c13-13', nameEn: 'Differential privacy concepts', nameAr: 'مفاهيم الخصوصية التفاضلية (Differential Privacy)', importance: 'C' },
      { id: 'c13-14', nameEn: 'Data minimization and retention', nameAr: 'مبدأ تقليل البيانات وسياسات الاحتفاظ بها', importance: 'B' },
      { id: 'c13-15', nameEn: 'IP and model-use policy awareness', nameAr: 'الوعي بسياسات الملكية الفكرية واستخدام النماذج', importance: 'B' },
      { id: 'c13-16', nameEn: 'Evidence handling for sensitive findings', nameAr: 'التعامل الآمن مع الأدلة عند اكتشاف بيانات حساسة', importance: 'A' }
    ]
  },
  {
    id: 'core-14',
    code: 'CORE 14',
    number: 14,
    titleEn: 'AI Supply Chain, MLOps & Model Infrastructure Security',
    titleAr: 'أمن سلاسل إمداد الذكاء الاصطناعي و MLOps والبنية التحتية',
    clusterEn: 'Supply Chain & Infrastructure',
    clusterAr: 'سلاسل الإمداد والبنية التحتية',
    importance: 'B',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'Model files, datasets, third-party packages, training pipelines, adapters, registries, and deployment infrastructure can introduce security risks before inference begins.',
    whyItMattersAr: 'ملفات النماذج والبيانات وحزم الطرف الثالث وخطوط التدريب ومستودعات النماذج والبنية التحتية قد تزرع ثغرات خطيرة قبل بدء تشغيل النموذج.',
    tools: ['Hugging Face Hub', 'PickleScan', 'Trivy', 'Syft', 'Sigstore', 'Kubernetes'],
    roadmapPhase: 5,
    tags: ['Supply Chain', 'MLOps', 'Pickle', 'Containers', 'SBOM', 'CI/CD'],
    subskills: [
      { id: 'c14-1', nameEn: 'ML lifecycle and MLOps architecture', nameAr: 'دورة حياة تعلم الآلة ومعمارية MLOps', importance: 'A' },
      { id: 'c14-2', nameEn: 'Dataset provenance', nameAr: 'مصدر وأصالة وسلسلة توريد مجموعات البيانات', importance: 'A' },
      { id: 'c14-3', nameEn: 'Data versioning', nameAr: 'إدارة وتتبع إصدارات البيانات (DVC)', importance: 'B' },
      { id: 'c14-4', nameEn: 'Model provenance and artifact integrity', nameAr: 'أصالة النماذج وسلامة الملفات والمخرجات', importance: 'A' },
      { id: 'c14-5', nameEn: 'Model registries', nameAr: 'مستودعات وسجلات حفظ النماذج (Model Registries)', importance: 'B' },
      { id: 'c14-6', nameEn: 'Model files and serialization risks', nameAr: 'مخاطر ملفات النماذج والتسلسل (كـ Pickle Code Exec)', importance: 'B' },
      { id: 'c14-7', nameEn: 'Third-party model assessment', nameAr: 'تقييم وفحص نماذج الطرف الثالث قبل اعتمادها', importance: 'A' },
      { id: 'c14-8', nameEn: 'Hugging Face ecosystem concepts', nameAr: 'مفاهيم منظومة ومستودعات Hugging Face', importance: 'B' },
      { id: 'c14-9', nameEn: 'Dependency and package security', nameAr: 'أمن التبعيات البرمجية والحزم الخارجية', importance: 'A' },
      { id: 'c14-10', nameEn: 'Software bill of materials (SBOM) concepts', nameAr: 'قائمة المواد البرمجية (SBOM) لنظم الذكاء الاصطناعي', importance: 'B' },
      { id: 'c14-11', nameEn: 'Container security', nameAr: 'أمن الحاويات وتأمين صور الدوكر (Docker)', importance: 'A' },
      { id: 'c14-12', nameEn: 'Kubernetes fundamentals', nameAr: 'أساسيات وتأمين كوبرنيتيس (Kubernetes)', importance: 'B' },
      { id: 'c14-13', nameEn: 'CI/CD pipeline security', nameAr: 'أمن مسارات البناء والتوزيع المستمر (CI/CD)', importance: 'A' },
      { id: 'c14-14', nameEn: 'Secrets in training and deployment pipelines', nameAr: 'حماية الأسرار في مسارات التدريب والنشر', importance: 'A' },
      { id: 'c14-15', nameEn: 'GPU / inference infrastructure concepts', nameAr: 'مفاهيم البنية التحتية لمعالجات الرسومات (GPUs)', importance: 'C' },
      { id: 'c14-16', nameEn: 'Model access controls', nameAr: 'ضوابط الوصول وصلاحيات استخدام النماذج', importance: 'A' },
      { id: 'c14-17', nameEn: 'Fine-tuning pipeline security', nameAr: 'أمن مسارات التدريب والضبط الدقيق', importance: 'B' },
      { id: 'c14-18', nameEn: 'Artifact signing and verification', nameAr: 'توقيع الملفات والتحقق من التوقيع الرقمي', importance: 'B' },
      { id: 'c14-19', nameEn: 'Runtime isolation', nameAr: 'العزل الأمني الصارم في بيئة التشغيل', importance: 'A' },
      { id: 'c14-20', nameEn: 'Supply-chain threat modeling', nameAr: 'نمذجة تهديدات سلاسل الإمداد للذكاء الاصطناعي', importance: 'A' }
    ]
  },
  {
    id: 'core-15',
    code: 'CORE 15',
    number: 15,
    titleEn: 'Multimodal AI Security',
    titleAr: 'أمن نماذج الذكاء الاصطناعي متعددة الوسائط',
    clusterEn: 'Multimodal & Cross-Modal',
    clusterAr: 'الوسائط المتعددة',
    importance: 'B',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'Modern AI systems may consume images, audio, video, documents, and combinations of modalities. Hidden or transformed inputs can affect model behaviour.',
    whyItMattersAr: 'تتعامل النماذج الحديثة مع الصور والصوت والفيديو والمستندات؛ والمدخلات المخفية أو المحولة بصرياً وصوتياً قادرة على التلاعب بسلوك النموذج.',
    tools: ['Whisper', 'CLIP', 'OpenCV', 'Pillow', 'VLM Testbenches'],
    roadmapPhase: 5,
    tags: ['Multimodal', 'VLM', 'OCR Injection', 'Audio Injection', 'Deepfakes'],
    subskills: [
      { id: 'c15-1', nameEn: 'Multimodal model architecture concepts', nameAr: 'معمارية النماذج متعددة الوسائط', importance: 'B' },
      { id: 'c15-2', nameEn: 'Vision-language models (VLMs)', nameAr: 'نماذج الرؤية واللغة المدمجة (VLMs)', importance: 'A' },
      { id: 'c15-3', nameEn: 'Image input processing', nameAr: 'معالجة مدخلات الصور واستخراج السمات', importance: 'A' },
      { id: 'c15-4', nameEn: 'OCR and document understanding', nameAr: 'التعرف الضوئي على الحروف وفهم المستندات', importance: 'B' },
      { id: 'c15-5', nameEn: 'Hidden / non-obvious image instructions', nameAr: 'التعليمات المخفية وغير المرئية داخل الصور', importance: 'B' },
      { id: 'c15-6', nameEn: 'Image metadata and file handling', nameAr: 'البيانات الوصفية للصور والتعامل مع الملفات', importance: 'C' },
      { id: 'c15-7', nameEn: 'Audio input and transcription pipelines', nameAr: 'مسارات معالجة وتفريغ الصوتيات', importance: 'B' },
      { id: 'c15-8', nameEn: 'Speech-to-text and text-to-speech concepts', nameAr: 'مفاهيم تحويل الكلام إلى نص والعكس', importance: 'B' },
      { id: 'c15-9', nameEn: 'Audio prompt injection concepts', nameAr: 'مفاهيم حقن التوجيهات عبر الإشارات الصوتية', importance: 'B' },
      { id: 'c15-10', nameEn: 'Video frame and temporal processing', nameAr: 'معالجة إطارات الفيديو والتسلسل الزمني', importance: 'C' },
      { id: 'c15-11', nameEn: 'Cross-modal context manipulation', nameAr: 'التلاعب بالسياق عبر وسائط متعددة متزامنة', importance: 'B' },
      { id: 'c15-12', nameEn: 'Multimodal data leakage', nameAr: 'تسريب البيانات عبر المخرجات البصرية والصوتية', importance: 'B' },
      { id: 'c15-13', nameEn: 'Content provenance and authenticity', nameAr: 'أصالة المحتوى وإثبات المصدر الرقمي', importance: 'C' },
      { id: 'c15-14', nameEn: 'Synthetic media and deepfake risk assessment', nameAr: 'تقييم مخاطر الوسائط المولدة والتزييف العميق', importance: 'C' },
      { id: 'c15-15', nameEn: 'Multimodal evaluation datasets', nameAr: 'مجموعات بيانات التقييم متعددة الوسائط', importance: 'B' }
    ]
  },
  {
    id: 'core-16',
    code: 'CORE 16',
    number: 16,
    titleEn: 'AI Evaluation Science & Automated Red-Team Engineering',
    titleAr: 'علم تقييم الذكاء الاصطناعي وهندسة الاختبار المؤتمت',
    clusterEn: 'Evaluation & Benchmarks',
    clusterAr: 'التقييم والاختبارات المرجعية',
    importance: 'A',
    learningHours: '70–100 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '220–330 hours',
    whyItMattersEn: 'A professional AI Red Teamer must convert individual prompts into repeatable, measurable test campaigns. A single successful prompt is not enough to establish system-wide risk.',
    whyItMattersAr: 'يجب على المختبر المحترف تحويل التوجيهات الفردية إلى حملات اختبار متكررة وقابلة للقياس إحصائياً؛ فتوجيه واحد ناجح لا يكفي لإثبات خطر على كامل النظام.',
    tools: ['Inspect (UK AISI)', 'PyRIT', 'garak', 'DeepEval', 'Promptfoo'],
    roadmapPhase: 3,
    tags: ['Evaluation', 'Benchmarking', 'Scoring', 'ASR', 'Regression Testing', 'Automated Orchestration'],
    subskills: [
      { id: 'c16-1', nameEn: 'Evaluation design', nameAr: 'تصميم أطر ومنهجيات التقييم الشامل', importance: 'A' },
      { id: 'c16-2', nameEn: 'Test objectives and success criteria', nameAr: 'أهداف الاختبار ومعايير النجاح الدقيقة', importance: 'A' },
      { id: 'c16-3', nameEn: 'Benchmark and dataset selection', nameAr: 'اختيار الاختبارات المرجعية ومجموعات البيانات المناسبة', importance: 'A' },
      { id: 'c16-4', nameEn: 'Test-case generation', nameAr: 'توليد حالات الاختبار الهجومية المتنوعة', importance: 'A' },
      { id: 'c16-5', nameEn: 'Seed prompts and attack datasets', nameAr: 'بذور التوجيهات ومجموعات بيانات الهجوم الأساسية', importance: 'B' },
      { id: 'c16-6', nameEn: 'Single-turn and multi-turn testing', nameAr: 'الاختبارات أحادية الجولة ومتعددة الجولات', importance: 'A' },
      { id: 'c16-7', nameEn: 'Automated attack orchestration', nameAr: 'أتمتة وتنسيق حملات الهجوم الشاملة', importance: 'A' },
      { id: 'c16-8', nameEn: 'Prompt transformations and converters', nameAr: 'تحويلات التوجيهات والمحولات (Converters)', importance: 'B' },
      { id: 'c16-9', nameEn: 'Scoring methods', nameAr: 'منهجيات ومعايير تسجيل النقاط والنتائج', importance: 'A' },
      { id: 'c16-10', nameEn: 'Rule-based and model-based scoring', nameAr: 'التسجيل القائم على القواعد مقابل النماذج المحكمة', importance: 'B' },
      { id: 'c16-11', nameEn: 'Human evaluation and adjudication', nameAr: 'التقييم البشري والتحكيم النهائي في النتائج', importance: 'A' },
      { id: 'c16-12', nameEn: 'False positives and false negatives', nameAr: 'معالجة الإيجابيات الكاذبة والسلبيات الكاذبة', importance: 'A' },
      { id: 'c16-13', nameEn: 'Attack success rate', nameAr: 'حساب معدل نجاح الهجوم (Attack Success Rate - ASR)', importance: 'A' },
      { id: 'c16-14', nameEn: 'Severity and impact scoring', nameAr: 'تسجيل وتقييم درجة الخطورة والأثر', importance: 'A' },
      { id: 'c16-15', nameEn: 'Reproducibility and random seeds', nameAr: 'قابلية التكرار وضبط البذور العشوائية (Seeds)', importance: 'B' },
      { id: 'c16-16', nameEn: 'Statistical confidence and sample size', nameAr: 'الثقة الإحصائية وتحديد حجم العينة الكافية', importance: 'B' },
      { id: 'c16-17', nameEn: 'Regression testing', nameAr: 'اختبارات الانتكاس الدوري للتأكد من صمود الحلول', importance: 'A' },
      { id: 'c16-18', nameEn: 'CI/CD integration concepts', nameAr: 'دمج تقييمات الأمان داخل مسارات CI/CD', importance: 'B' },
      { id: 'c16-19', nameEn: 'Results analytics and visualization', nameAr: 'تحليل النتائج وتصورها بيانياً للمستفيدين', importance: 'B' },
      { id: 'c16-20', nameEn: 'Test coverage and limitations', nameAr: 'تحديد التغطية الاختبارية وتوضيح القيود', importance: 'A' },
      { id: 'c16-21', nameEn: 'Benchmark contamination awareness', nameAr: 'الوعي بتلوث الاختبارات المرجعية في بيانات التدريب', importance: 'C' }
    ]
  },
  {
    id: 'core-17',
    code: 'CORE 17',
    number: 17,
    titleEn: 'AI Safety, Alignment & Human-Factor Testing',
    titleAr: 'سلامة ومحاذاة الذكاء الاصطناعي واختبار العوامل البشرية',
    clusterEn: 'Safety & Alignment',
    clusterAr: 'السلامة والمحاذاة',
    importance: 'B',
    learningHours: '50–75 hours',
    learningEffort: 'C',
    masteryHours: '120–180 hours',
    masteryEffort: 'C–D',
    totalFocusedHours: '170–255 hours',
    whyItMattersEn: 'Some AI Red Team engagements explicitly test harmful outputs, misuse, manipulation, bias, and failures of safety controls. This is related to—but not identical with—technical cybersecurity testing.',
    whyItMattersAr: 'تختبر بعض مهام الفريق الأحمر صراحةً المخرجات الضارة، وإساءة الاستخدام، والتلاعب، والتحيز، وإخفاقات ضوابط السلامة، وهو مكمل للاختراق السيبراني التقني.',
    tools: ['Inspect', 'Llama-Guard', 'NeMo Guardrails', 'Toxicity Classifiers'],
    roadmapPhase: 5,
    tags: ['Safety', 'Alignment', 'Bias', 'Misinformation', 'Harm Taxonomy', 'Refusal'],
    subskills: [
      { id: 'c17-1', nameEn: 'AI safety vs. AI security distinction', nameAr: 'التمييز الدقيق بين سلامة الذكاء الاصطناعي وأمنه السيبراني', importance: 'A' },
      { id: 'c17-2', nameEn: 'Policy and intended-use analysis', nameAr: 'تحليل السياسات والاستخدام المقصود للنظام', importance: 'A' },
      { id: 'c17-3', nameEn: 'Harm taxonomy and risk categories', nameAr: 'تصنيف الأضرار وفئات المخاطر السلوكية', importance: 'A' },
      { id: 'c17-4', nameEn: 'Refusal behaviour and refusal consistency', nameAr: 'سلوك الرفض واتساقه عبر مختلف السياقات', importance: 'A' },
      { id: 'c17-5', nameEn: 'Harmful-content evaluation', nameAr: 'تقييم المحتوى الضار وتحديد عتبات الخطورة', importance: 'B' },
      { id: 'c17-6', nameEn: 'Bias and fairness testing', nameAr: 'اختبارات التحيز والعدالة في القرارات والمخرجات', importance: 'B' },
      { id: 'c17-7', nameEn: 'Stereotype and discrimination testing', nameAr: 'اختبار الصور النمطية والتمييز الفئوي', importance: 'B' },
      { id: 'c17-8', nameEn: 'Misinformation and persuasion risks', nameAr: 'مخاطر نشر المعلومات المضللة والإقناع الخبيث', importance: 'B' },
      { id: 'c17-9', nameEn: 'High-stakes decision limitations', nameAr: 'حدود النموذج في القرارات الحساسة والمصيرية', importance: 'A' },
      { id: 'c17-10', nameEn: 'Overreliance and automation bias', nameAr: 'مخاطر الاعتماد المفرط وانحياز الأتمتة البشري', importance: 'B' },
      { id: 'c17-11', nameEn: 'Human factors and social manipulation', nameAr: 'العوامل البشرية والتلاعب الاجتماعي عبر الذكاء الاصطناعي', importance: 'B' },
      { id: 'c17-12', nameEn: 'Responsible test-data design', nameAr: 'التصميم المسؤول لبيانات الاختبار دون الإضرار بالبيئة', importance: 'A' },
      { id: 'c17-13', nameEn: 'Safety benchmark interpretation', nameAr: 'تفسير نتائج الاختبارات المرجعية للسلامة', importance: 'B' },
      { id: 'c17-14', nameEn: 'Escalation and responsible disclosure', nameAr: 'إجراءات التصعيد والإفصاح المسؤول عن الأضرار الحرجة', importance: 'A' },
      { id: 'c17-15', nameEn: 'Context-specific harm analysis', nameAr: 'تحليل الضرر بحسب سياق الاستخدام المحدد للمنتج', importance: 'A' }
    ]
  },
  {
    id: 'core-18',
    code: 'CORE 18',
    number: 18,
    titleEn: 'AI Defense, Detection, Monitoring & Remediation Validation',
    titleAr: 'الدفاع والكشف والمراقبة والتحقق من المعالجة',
    clusterEn: 'Defense & Monitoring',
    clusterAr: 'الدفاع والكشف والمراقبة',
    importance: 'A',
    learningHours: '60–90 hours',
    learningEffort: 'C',
    masteryHours: '150–230 hours',
    masteryEffort: 'D',
    totalFocusedHours: '210–320 hours',
    whyItMattersEn: 'A red teamer must understand how the system is defended and whether attack attempts are visible, blocked, or missed. The goal is to produce actionable security improvements, not merely demonstrate failure.',
    whyItMattersAr: 'يجب على المختبر فهم كيفية تحصين النظام وما إذا كانت الهجمات مرصودة أو محجوبة أو غائبة عن الرادارات، والهدف تحسين الأمان وليس مجرد استعراض الثغرات.',
    tools: ['Llama-Guard', 'NeMo Guardrails', 'Azure AI Content Safety', 'OpenTelemetry', 'SIEM'],
    roadmapPhase: 4,
    tags: ['Defense', 'Guardrails', 'Telemetry', 'Incident Response', 'Remediation', 'Root Cause'],
    subskills: [
      { id: 'c18-1', nameEn: 'AI security logging architecture', nameAr: 'معمارية تسجيل أحداث أمان الذكاء الاصطناعي', importance: 'A' },
      { id: 'c18-2', nameEn: 'Prompt and response telemetry', nameAr: 'القياس عن بُعد لتوجيهات واستجابات النماذج', importance: 'A' },
      { id: 'c18-3', nameEn: 'Tool-call and agent-action logging', nameAr: 'تسجيل استدعاءات الأدوات وإجراءات الوكلاء', importance: 'A' },
      { id: 'c18-4', nameEn: 'Identity and authorization event logging', nameAr: 'تسجيل أحداث الهوية وتفويض الصلاحيات', importance: 'A' },
      { id: 'c18-5', nameEn: 'Data access audit trails', nameAr: 'سجلات تدقيق الوصول إلى البيانات الحساسة', importance: 'A' },
      { id: 'c18-6', nameEn: 'Rate-limit and cost monitoring', nameAr: 'مراقبة معدل الطلبات والتكاليف المالية للاستهلاك', importance: 'B' },
      { id: 'c18-7', nameEn: 'Anomaly detection concepts', nameAr: 'مفاهيم كشف السلوكيات الشاذة في الاستخدام', importance: 'B' },
      { id: 'c18-8', nameEn: 'Prompt injection detection concepts', nameAr: 'مفاهيم فلاتر كشف حقن التوجيهات', importance: 'B' },
      { id: 'c18-9', nameEn: 'Content and policy filters', nameAr: 'فلاتر المحتوى وسياسات المنع الآلية', importance: 'B' },
      { id: 'c18-10', nameEn: 'DLP and sensitive-data detection', nameAr: 'منع تسريب البيانات (DLP) وكشف المعلومات الحساسة', importance: 'A' },
      { id: 'c18-11', nameEn: 'Model/API abuse monitoring', nameAr: 'مراقبة إساءة استخدام النماذج والـ APIs', importance: 'B' },
      { id: 'c18-12', nameEn: 'Alert triage', nameAr: 'تصنيف وتقييم تنبيهات الأمان بفعالية', importance: 'B' },
      { id: 'c18-13', nameEn: 'Incident response for AI systems', nameAr: 'الاستجابة لحوادث أمن أنظمة الذكاء الاصطناعي', importance: 'B' },
      { id: 'c18-14', nameEn: 'Model and prompt version tracking', nameAr: 'تتبع وتدقيق إصدارات النماذج والتوجيهات', importance: 'A' },
      { id: 'c18-15', nameEn: 'Safety and security regression testing', nameAr: 'اختبارات الانتكاس المستمرة للأمان والسلامة', importance: 'A' },
      { id: 'c18-16', nameEn: 'Control effectiveness validation', nameAr: 'التحقق من الفعالية الواقعية للضوابط الأمنية', importance: 'A' },
      { id: 'c18-17', nameEn: 'Root-cause analysis', nameAr: 'تحليل الأسباب الجذرية للثغرات المكتشفة', importance: 'A' },
      { id: 'c18-18', nameEn: 'Remediation design review', nameAr: 'مراجعة وتقييم التصاميم المقترحة للحلول والمعالجة', importance: 'B' }
    ]
  },
  {
    id: 'core-19',
    code: 'CORE 19',
    number: 19,
    titleEn: 'Reporting, Research, Governance & Professional Operations',
    titleAr: 'التقارير والأبحاث والحوكمة والعمليات الاحترافية',
    clusterEn: 'Methodology & Operations',
    clusterAr: 'المنهجية والعمليات',
    importance: 'A',
    learningHours: '30–50 hours',
    learningEffort: 'B',
    masteryHours: '90–140 hours',
    masteryEffort: 'C',
    totalFocusedHours: '120–190 hours',
    whyItMattersEn: 'A technically interesting result has little professional value if the organization cannot reproduce it, understand its impact, or fix it.',
    whyItMattersAr: 'النتيجة التقنية الممتعة تفتقر للقيمة المهنية إذا عجزت المؤسسة عن إعادة إنتاجها وفهم أثرها الواقعي وإصلاحها عملياً.',
    tools: ['Markdown', 'Jupyter', 'Excalidraw', 'Executive Dashboards'],
    roadmapPhase: 3,
    tags: ['Reporting', 'Executive Summary', 'Reproduction', 'Disclosure', 'Governance'],
    subskills: [
      { id: 'c19-1', nameEn: 'Rules of engagement', nameAr: 'قواعد الاشتباك والحدود القانونية الملزمة', importance: 'A' },
      { id: 'c19-2', nameEn: 'Scope and authorization management', nameAr: 'إدارة التفويض الرسمي ونطاق العمل المصرح به', importance: 'A' },
      { id: 'c19-3', nameEn: 'Test planning', nameAr: 'إعداد وتوثيق خطط الاختبار التفصيلية', importance: 'A' },
      { id: 'c19-4', nameEn: 'Technical note-taking', nameAr: 'تدوين الملاحظات التقنية بدقة أثناء الاختبار', importance: 'A' },
      { id: 'c19-5', nameEn: 'Evidence collection', nameAr: 'جمع وتأمين الأدلة والبراهين القاطعة', importance: 'A' },
      { id: 'c19-6', nameEn: 'Safe handling of test data', nameAr: 'التعامل الآمن مع بيانات الاختبار وتجنب تسريبها', importance: 'A' },
      { id: 'c19-7', nameEn: 'Reproduction steps', nameAr: 'صياغة خطوات إعادة إنتاج واضحة وموثوقة', importance: 'A' },
      { id: 'c19-8', nameEn: 'Attack-chain documentation', nameAr: 'توثيق سلاسل الهجوم الكاملة من البداية للأثر', importance: 'A' },
      { id: 'c19-9', nameEn: 'Root-cause explanation', nameAr: 'شرح وتفسير السبب الجذري للخلل بوضوح', importance: 'A' },
      { id: 'c19-10', nameEn: 'Severity and business impact', nameAr: 'تقييم مستوى الخطورة والأثر المالي والتشغيلي', importance: 'A' },
      { id: 'c19-11', nameEn: 'Executive summaries', nameAr: 'كتابة الملخصات التنفيذية لصناع القرار', importance: 'A' },
      { id: 'c19-12', nameEn: 'Technical report writing', nameAr: 'صياغة التقارير الفنية العميقة للمطورين', importance: 'A' },
      { id: 'c19-13', nameEn: 'Remediation recommendations', nameAr: 'تقديم توصيات معالجة قابلة للتطبيق العملي', importance: 'A' },
      { id: 'c19-14', nameEn: 'Retest reports', nameAr: 'تقارير إعادة الفحص بعد تطبيق التعديلات', importance: 'A' },
      { id: 'c19-15', nameEn: 'Clear diagrams and data-flow maps', nameAr: 'رسم مخططات معمارية وتدفق بيانات واضحة', importance: 'B' },
      { id: 'c19-16', nameEn: 'Client and stakeholder communication', nameAr: 'التواصل الفعال مع العملاء وأصحاب المصلحة', importance: 'A' },
      { id: 'c19-17', nameEn: 'Presentation and debrief skills', nameAr: 'مهارات العرض ومناقشة النتائج (Debriefing)', importance: 'B' },
      { id: 'c19-18', nameEn: 'Responsible disclosure', nameAr: 'إجراءات الإفصاح المسؤول عن الثغرات الأمنية', importance: 'A' },
      { id: 'c19-19', nameEn: 'Research reading and source validation', nameAr: 'قراءة الأوراق البحثية والتحقق من المصادر العلمية', importance: 'A' },
      { id: 'c19-20', nameEn: 'Keeping attack knowledge current', nameAr: 'المتابعة المستمرة لأحدث تقنيات الهجوم العالمية', importance: 'A' }
    ]
  }
];

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: 'spec-01',
    titleEn: 'Advanced Adversarial ML Research',
    titleAr: 'أبحاث التعلم الآلي العدائي المتقدمة',
    subskillsEn: 'Gradient-based attacks, robust optimization, adaptive attacks',
    subskillsAr: 'الهجمات القائمة على التدرج، التحسين المتين، الهجمات التكيفية التفاعلية',
    importance: 'C'
  },
  {
    id: 'spec-02',
    titleEn: 'Model Interpretability & Mechanistic Analysis',
    titleAr: 'قابلية تفسير النماذج والتحليل الميكانيكي الداخلي',
    subskillsEn: 'Interpretability, activation analysis, representation analysis',
    subskillsAr: 'قابلية التفسير، تحليل التنشيطات الداخلية للطبقات، تحليل التمثيلات',
    importance: 'D'
  },
  {
    id: 'spec-03',
    titleEn: 'Secure Model Training Research',
    titleAr: 'أبحاث التدريب الآمن للنماذج',
    subskillsEn: 'Robust training, data curation, training pipeline assurance',
    subskillsAr: 'التدريب المتين، تنقية وانتقاء البيانات، توكيد مسارات التدريب',
    importance: 'C'
  },
  {
    id: 'spec-04',
    titleEn: 'Reinforcement Learning Security',
    titleAr: 'أمن أنظمة التعلم المعزز (RL Security)',
    subskillsEn: 'Policy manipulation, reward hacking, environment attacks',
    subskillsAr: 'التلاعب بالسياسات، اختراق واختطاف المكافآت، هجمات بيئة التدريب',
    importance: 'D'
  },
  {
    id: 'spec-05',
    titleEn: 'Federated Learning Security',
    titleAr: 'أمن التعلم الفيدرالي الموزع',
    subskillsEn: 'Poisoning, inference, aggregation attacks',
    subskillsAr: 'التسميم الموزع، استدلال الخصوصية، هجمات التجميع المركزي',
    importance: 'D'
  },
  {
    id: 'spec-06',
    titleEn: 'Hardware / GPU Security',
    titleAr: 'أمن معالجات الرسومات والعتاد الصلب (Hardware / GPU)',
    subskillsEn: 'GPU isolation, accelerator memory, hardware threat models',
    subskillsAr: 'عزل المعالجات، ذاكرة المسرعات، نماذج تهديد العتاد والشرائح',
    importance: 'E'
  },
  {
    id: 'spec-07',
    titleEn: 'Robotics & Embodied AI Security',
    titleAr: 'أمن الروبوتات والذكاء الاصطناعي المجسد (Embodied AI)',
    subskillsEn: 'Sensors, actuators, planning, physical-world safety',
    subskillsAr: 'المستشعرات، المشغلات الميكانيكية، التخطيط، سلامة العالم الحقيقي',
    importance: 'D'
  },
  {
    id: 'spec-08',
    titleEn: 'Autonomous Vehicle AI Security',
    titleAr: 'أمن ذكاء المركبات ذاتية القيادة',
    subskillsEn: 'Perception, sensor fusion, adversarial physical inputs',
    subskillsAr: 'الإدراك البصري، دمج بيانات الحساسات، المدخلات العدائية الفيزيائية الواقعية',
    importance: 'D'
  },
  {
    id: 'spec-09',
    titleEn: 'AI for Cybersecurity Tooling',
    titleAr: 'الذكاء الاصطناعي لأدوات الأمن السيبراني ومساعدي SOC',
    subskillsEn: 'Security copilots, autonomous SOC agents, code agents',
    subskillsAr: 'مساعدو الأمان الذكيون، وكلاء مراكز العمليات (SOC)، وكلاء فحص الأكواد',
    importance: 'C'
  },
  {
    id: 'spec-10',
    titleEn: 'AI Coding Agent Security',
    titleAr: 'أمن وكلاء كتابة وتعديل الأكواد البرمجية',
    subskillsEn: 'Repository context, shell tools, code execution, CI permissions',
    subskillsAr: 'سياق المستودعات، أدوات الشل الطرفية، تنفيذ الأكواد، صلاحيات CI/CD',
    importance: 'B'
  },
  {
    id: 'spec-11',
    titleEn: 'AI Browser Agent Security',
    titleAr: 'أمن وكلاء تصفح الويب التلقائي',
    subskillsEn: 'Browser context, web prompt injection, authenticated actions',
    subskillsAr: 'سياق المتصفح، حقن التعليمات عبر صفحات الويب، العمليات بعد تسجيل الدخول',
    importance: 'B'
  },
  {
    id: 'spec-12',
    titleEn: 'AI Governance & Assurance',
    titleAr: 'حوكمة وتوكيد أمان الذكاء الاصطناعي',
    subskillsEn: 'AI risk assessment, audit, regulatory mapping',
    subskillsAr: 'تقييم مخاطر الذكاء الاصطناعي، التدقيق الشامل، المواءمة مع التشريعات الدولية',
    importance: 'C'
  },
  {
    id: 'spec-13',
    titleEn: 'Frontier Model Evaluation',
    titleAr: 'تقييم النماذج الطليعية الرائدة (Frontier Models)',
    subskillsEn: 'Capability elicitation, dangerous capability evaluation, scalable oversight',
    subskillsAr: 'استخلاص القدرات القصوى، تقييم القدرات الخطرة بيولوجياً وسيبرانياً، الرقابة القابلة للتوسع',
    importance: 'D'
  },
  {
    id: 'spec-14',
    titleEn: 'AI Incident Forensics',
    titleAr: 'التحقيق الجنائي الرقمي لحوادث الذكاء الاصطناعي',
    subskillsEn: 'Trace reconstruction, model/API logs, agent execution history',
    subskillsAr: 'إعادة بناء مسار الهجوم، سجلات النماذج والـ APIs، تاريخ تنفيذ قرارات الوكلاء',
    importance: 'C'
  }
];

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    number: 1,
    titleEn: 'Mission Planning & Scope Definition',
    titleAr: 'تخطيط المهمة وتحديد النطاق وقواعد الاشتباك',
    descriptionEn: 'Identify the asset, business goal, permitted test types, safety limits, test data, contacts, stop conditions, and success criteria.',
    descriptionAr: 'تحديد الأصول المستهدفة، الهدف المؤسسي، أنواع الاختبارات المصرح بها، حدود الأمان، بيانات الفحص الآمنة، نقاط الاتصال، شروط الإيقاف الفوري، ومعايير النجاح.'
  },
  {
    number: 2,
    titleEn: 'AI System Reconnaissance',
    titleAr: 'الاستطلاع وفهم معمارية نظام الذكاء الاصطناعي',
    descriptionEn: 'Understand model, application, data, APIs, integrations, tools, identities, and deployment architecture.',
    descriptionAr: 'فهم النموذج المستخدم، بنية التطبيق، مسارات البيانات، واجهات APIs، التكاملات، الأدوات، الهويات والصلاحيات، ومعمارية النشر السحابية.'
  },
  {
    number: 3,
    titleEn: 'Attack Surface Mapping',
    titleAr: 'رسم خريطة مساحة الهجوم وحدود الثقة',
    descriptionEn: 'Map all user-controlled inputs, external content, trust boundaries, model outputs, tool calls, data stores, and privileged actions.',
    descriptionAr: 'حصر جميع المدخلات التي يتحكم بها المستخدم، المحتوى الخارجي، حدود الثقة، مخرجات النموذج، استدعاءات الأدوات، مخازن البيانات، والإجراءات ذات الصلاحيات العالية.'
  },
  {
    number: 4,
    titleEn: 'Threat Modeling & Test Hypotheses',
    titleAr: 'نمذجة التهديدات وصياغة فرضيات الهجوم',
    descriptionEn: 'Turn architecture and business context into testable attacker goals and risk hypotheses.',
    descriptionAr: 'تحويل المعمارية وسياق العمل إلى أهداف هجومية قابلة للاختبار التجريبي وصياغة فرضيات المخاطر الواقعية.'
  },
  {
    number: 5,
    titleEn: 'Adversarial Testing',
    titleAr: 'الاختبار العدائي المباشر وغير المباشر',
    descriptionEn: 'Test prompt injection, jailbreaks, data leakage, unsafe output handling, RAG weaknesses, agent misuse, model attacks, and relevant safety risks.',
    descriptionAr: 'اختبار حقن التوجيه، وتجاوز القيود (Jailbreaks)، وتسريب البيانات، والتعامل غير الآمن مع المخرجات، وثغرات RAG، وإساءة استخدام الوكلاء، ومخاطر السلامة.'
  },
  {
    number: 6,
    titleEn: 'Impact Validation',
    titleAr: 'التحقق من الأثر الواقعي بأمان',
    descriptionEn: 'Verify what the issue actually enables, using synthetic or approved test data and avoiding unnecessary data access or impact.',
    descriptionAr: 'إثبات ما تتيحه الثغرة فعلياً على أرض الواقع باستخدام بيانات اختبار اصطناعية أو مصرح بها وتجنب الوصول غير المبرر لبيانات حقيقية.'
  },
  {
    number: 7,
    titleEn: 'Persistence / Cross-Session Testing',
    titleAr: 'اختبار البقاء والتأثير عبر الجلسات',
    descriptionEn: 'Test whether poisoned context, memory, retrieved content, or configuration changes can influence later sessions, when in scope.',
    descriptionAr: 'اختبار ما إذا كان السياق المسمم أو الذاكرة الملوثة أو المحتوى المسترجع قادرين على التأثير على جلسات المستخدمين اللاحقة.'
  },
  {
    number: 8,
    titleEn: 'Detection & Defensive Assessment',
    titleAr: 'تقييم أنظمة الكشف والدفاع والمراقبة',
    descriptionEn: 'Determine what logs, alerts, policy controls, and response workflows observed or blocked the test.',
    descriptionAr: 'تحديد وتدقيق ما إذا كانت السجلات والتنبيهات وضوابط السياسات وآليات الاستجابة قد رصدت الهجوم أو قامت بحجبه أم مرت دون اكتشاف.'
  },
  {
    number: 9,
    titleEn: 'Evidence, Reporting & Debrief',
    titleAr: 'جمع الأدلة وصياغة التقارير وجلسة المناقشة',
    descriptionEn: 'Document exact conditions, reproducibility, impact, severity, affected components, and remediation.',
    descriptionAr: 'توثيق الشروط الدقيقة لإعادة الإنتاج، والأثر، ودرجة الخطورة، والمكونات المتأثرة، وتقديم التوصيات والحلول ومناقشتها مع المسؤولين.'
  },
  {
    number: 10,
    titleEn: 'Remediation Validation & Continuous Evaluation',
    titleAr: 'التحقق من الإصلاحات والتقييم المستمر',
    descriptionEn: 'Retest fixes and add repeatable regression cases.',
    descriptionAr: 'إعادة فحص واختبار الحلول المطبقة وإضافتها كاختبارات انتكاس متكررة (Regression Tests) لضمان عدم عودة الثغرة.'
  }
];

export const OPERATION_FAMILIES: OperationFamily[] = [
  { id: 'op-01', nameEn: 'Prompt Injection Testing', nameAr: 'اختبار حقن التوجيهات (Prompt Injection)', assessedEn: 'Direct and indirect manipulation of model instructions and context', assessedAr: 'التلاعب المباشر وغير المباشر بتعليمات النموذج وسياقه', importance: 'A' },
  { id: 'op-02', nameEn: 'Jailbreak / Safety Bypass Testing', nameAr: 'اختبار كسر الحماية وتجاوز ضوابط الأمان', assessedEn: 'Whether behaviour constraints can be bypassed', assessedAr: 'اختبار ما إذا كان بالإمكان تجاوز قيود السلوك والسياسات', importance: 'A' },
  { id: 'op-03', nameEn: 'System Prompt / Configuration Disclosure', nameAr: 'كشف تعليمات النظام والإعدادات المخفية', assessedEn: 'Exposure of hidden instructions or configuration', assessedAr: 'استخراج التوجيهات المخفية أو تفاصيل الإعدادات الداخلية', importance: 'A' },
  { id: 'op-04', nameEn: 'Sensitive Information Disclosure', nameAr: 'كشف وتسريب المعلومات الحساسة', assessedEn: 'Leakage of private, confidential, or cross-user information', assessedAr: 'تسريب البيانات السرية والخاصة أو بيانات المستخدمين الآخرين', importance: 'A' },
  { id: 'op-05', nameEn: 'RAG Security Testing', nameAr: 'اختبار أمن أنظمة التوليد المعزز بالاسترجاع (RAG)', assessedEn: 'Retrieval manipulation, poisoned sources, access-control failures, data isolation', assessedAr: 'التلاعب بالاسترجاع، المصادر المسمومة، فشل ضوابط الوصول، وعزل البيانات', importance: 'A' },
  { id: 'op-06', nameEn: 'AI Agent / Tool Security', nameAr: 'أمن وكلاء الذكاء الاصطناعي واستدعاء الأدوات', assessedEn: 'Goal hijacking, unauthorized tool use, excessive agency, approval bypass', assessedAr: 'اختطاف الأهداف، الاستخدام غير المصرح به للأدوات، الوكالة الزائدة، وتجاوز الموافقات', importance: 'A' },
  { id: 'op-07', nameEn: 'API and Application Security', nameAr: 'أمن واجهات التطبيقات (APIs) والتطبيق المحيط', assessedEn: 'Authentication, authorization, input/output handling, rate limits, tenant isolation', assessedAr: 'المصادقة، الصلاحيات، معالجة المدخلات/المخرجات، تحديد المعدل، وعزل المستأجرين', importance: 'A' },
  { id: 'op-08', nameEn: 'Model Robustness Testing', nameAr: 'اختبار صلابة ومتانة النموذج', assessedEn: 'Evasion, adversarial inputs, unexpected generalization failures', assessedAr: 'التهرب، المدخلات العدائية، وإخفاقات التعميم غير المتوقعة', importance: 'B' },
  { id: 'op-09', nameEn: 'Data Poisoning / Backdoor Testing', nameAr: 'اختبار تسميم البيانات والأبواب الخلفية', assessedEn: 'Integrity of training, fine-tuning, and evaluation data', assessedAr: 'سلامة بيانات التدريب، الضبط الدقيق، وبيانات التقييم', importance: 'B' },
  { id: 'op-10', nameEn: 'Model Privacy Testing', nameAr: 'اختبار خصوصية النماذج والبيانات', assessedEn: 'Membership inference, inversion, memorization, private data exposure', assessedAr: 'استدلال العضوية، عكس النموذج، الحفظ التلقائي، وكشف البيانات الخاصة', importance: 'B' },
  { id: 'op-11', nameEn: 'Model Extraction / IP Testing', nameAr: 'اختبار سرقة النماذج والملكية الفكرية', assessedEn: 'Model theft, extraction, imitation, and unauthorized access', assessedAr: 'سرقة النموذج، الاستخراج، التقليد غير المشروع، والوصول غير المصرح به', importance: 'B' },
  { id: 'op-12', nameEn: 'AI Supply Chain Testing', nameAr: 'اختبار سلاسل إمداد الذكاء الاصطناعي', assessedEn: 'Model files, datasets, adapters, libraries, packages, registries, pipelines', assessedAr: 'ملفات النماذج، الحزم البرمجية، المحولات، المستودعات، ومسارات البناء', importance: 'B' },
  { id: 'op-13', nameEn: 'Multimodal Security Testing', nameAr: 'اختبار أمن النماذج متعددة الوسائط', assessedEn: 'Text, image, audio, video, OCR, and cross-modal input attacks', assessedAr: 'هجمات النصوص والصور والصوت والفيديو والـ OCR والهجمات متعددة الوسائط', importance: 'B' },
  { id: 'op-14', nameEn: 'AI Safety / Behavioural Evaluation', nameAr: 'تقييم سلامة وسلوك النموذج', assessedEn: 'Harmful outputs, bias, manipulation, misinformation, policy failures', assessedAr: 'المخرجات الضارة، التحيز، التلاعب، التضليل، وفشل السياسات الأخلاقية', importance: 'B' },
  { id: 'op-15', nameEn: 'Resource Abuse / Availability Testing', nameAr: 'اختبار استنزاف الموارد والجاهزية (DoS)', assessedEn: 'Unbounded consumption, cost abuse, denial of service, quota exhaustion', assessedAr: 'الاستهلاك غير المقيد، استنزاف التكلفة، حجب الخدمة، ونفاد الحصص', importance: 'B' },
  { id: 'op-16', nameEn: 'Detection and Response Assessment', nameAr: 'تقييم قدرات الرصد والاستجابة للدفاعات', assessedEn: 'Whether security telemetry and controls detect and respond to AI attacks', assessedAr: 'مدى قدرة القياس الأمني والضوابط على كشف الهجمات والاستجابة لها', importance: 'A' },
  { id: 'op-17', nameEn: 'Multi-Agent Attack-Chain Testing', nameAr: 'اختبار سلاسل الهجوم الممتدة عبر وكلاء متعددين', assessedEn: 'Whether compromise or manipulation propagates across agents', assessedAr: 'مدى انتشار وتفشي الاختراق أو التلاعب بين عدة وكلاء متفاعلين', importance: 'C' }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 0,
    nameEn: 'Phase 0 — Cybersecurity Bridge',
    nameAr: 'المرحلة 0 — جسر الأمن السيبراني الأساسي',
    duration: '2–4 weeks',
    skills: ['CORE 01'],
    tasksEn: [
      'Refresh API security, HTTP, authentication, authorization, and IAM.',
      'Refresh Python, Git, Linux, and basic cloud concepts.',
      'Build a small Python client that calls an authorized model API.',
      'Trace one user request through frontend, backend, model, and response.'
    ],
    tasksAr: [
      'تحديث معارف أمن واجهات برمجة التطبيقات، بروتوكول HTTP، المصادقة، الصلاحيات، وإدارة الهويات IAM.',
      'تحديث مهارات لغة بايثون، نظام Git، نظام لينكس، ومفاهيم الحوسبة السحابية الأساسية.',
      'بناء عميل برمجي بسيط بلغة بايثون يتصل بنقطة استدعاء نموذج مصرح بها عبر API.',
      'تتبع مسار طلب واحد من المستخدم عبر الواجهة الأمامية والخلفية ونموذج الذكاء الاصطناعي وحتى الاستجابة.'
    ],
    exitCriteriaEn: 'Can explain the security boundaries of a simple AI-backed web application.',
    exitCriteriaAr: 'القدرة على شرح الحدود الأمنية ونقاط العبور لتطبيق ويب بسيط مدعوم بالذكاء الاصطناعي بوضوح.'
  },
  {
    phase: 1,
    nameEn: 'Phase 1 — AI & ML Foundations',
    nameAr: 'المرحلة 1 — أسس الذكاء الاصطناعي وتعلم الآلة',
    duration: '6–9 weeks',
    skills: ['CORE 02', 'CORE 03', 'CORE 04'],
    tasksEn: [
      'CORE 02: Math and statistics foundations.',
      'CORE 03: AI and ML fundamentals.',
      'CORE 04: Deep learning and transformer / LLM architecture.'
    ],
    tasksAr: [
      'CORE 02: إتقان أسس الرياضيات والإحصاء والاحتمالات ومقاييس تقييم النماذج.',
      'CORE 03: استيعاب مفاهيم تعلم الآلة والتعلم العميق والفارق بين التدريب والاستدلال.',
      'CORE 04: دراسة معمارية المحولات (Transformers) وآليات الانتباه (Attention) ونوافذ السياق وتقطيع النصوص.'
    ],
    exitCriteriaEn: 'Can explain training vs. inference, tokens, embeddings, attention, context windows, fine-tuning, and basic evaluation metrics.',
    exitCriteriaAr: 'القدرة على شرح الفارق بين التدريب والاستدلال، والرموز، والتضمينات، والانتباه، ونوافذ السياق، والضبط الدقيق، ومقاييس التقييم الأساسية.'
  },
  {
    phase: 2,
    nameEn: 'Phase 2 — Build and Understand AI Applications',
    nameAr: 'المرحلة 2 — بناء وفهم تطبيقات الذكاء الاصطناعي',
    duration: '6–9 weeks',
    skills: ['CORE 05', 'CORE 06', 'CORE 07'],
    tasksEn: [
      'CORE 05: Python and software engineering.',
      'CORE 06: AI application architecture.',
      'CORE 07: Prompt and context engineering.'
    ],
    tasksAr: [
      'CORE 05: كتابة برمجيات قوية ببايثون، والتعامل مع المكتبات، والطلبات غير المتزامنة، وأتمتة المهام.',
      'CORE 06: فهم معمارية تطبيقات LLM، وتدفق الطلبات، وإدارة الجلسات، وعزل المستأجرين، وإنفاذ الصلاحيات خارج النموذج.',
      'CORE 07: احتراف هندسة التوجيهات، وهرمية الأدوار، وبناء السياق، وتوليد مخرجات JSON منظمة.'
    ],
    exitCriteriaEn: 'Can build and inspect a small LLM application with an API, prompt templates, session state, and structured output.',
    exitCriteriaAr: 'القدرة على بناء وفحص تطبيق LLM مصغر متكامل مع API، وقوالب توجيه، وحالة جلسة، ومخرجات منظمة.'
  },
  {
    phase: 3,
    nameEn: 'Phase 3 — Core LLM Red Teaming',
    nameAr: 'المرحلة 3 — جوهر الفريق الأحمر واختراق النماذج اللغوية',
    duration: '8–12 weeks',
    skills: ['CORE 08', 'CORE 09', 'CORE 16', 'CORE 19'],
    tasksEn: [
      'CORE 08: Threat modeling and methodology.',
      'CORE 09: Prompt injection, jailbreak, disclosure, output handling, and misuse testing.',
      'CORE 16: Evaluation science and automated test harnesses.',
      'CORE 19: Evidence and reporting fundamentals.'
    ],
    tasksAr: [
      'CORE 08: إعداد نمذجة تهديدات متخصصة وفق أطر OWASP و MITRE ATLAS وقواعد اشتباك محكمة.',
      'CORE 09: تنفيذ هجمات الحقن المباشر وغير المباشر، وكسر الحماية (Jailbreaks)، وكشف البيانات، وسوء الاستخدام.',
      'CORE 16: بناء منصات تقييم واختبار مؤتمتة وحساب معدل نجاح الهجوم (ASR) بدقة إحصائية.',
      'CORE 19: توثيق الأدلة، وكتابة تقارير تقنية وتنفيذية رصينة مع خطوات إعادة الإنتاج وتوصيات الحلول.'
    ],
    exitCriteriaEn: 'Can plan, run, score, reproduce, and report an authorized LLM security assessment.',
    exitCriteriaAr: 'القدرة على تخطيط وتنفيذ وقياس وإعادة إنتاج وكتابة تقرير شامل لتقييم أمني مصرح به لتطبيق LLM.'
  },
  {
    phase: 4,
    nameEn: 'Phase 4 — RAG and Agentic AI Security',
    nameAr: 'المرحلة 4 — أمن أنظمة RAG والوكلاء الذاتيين وبروتوكول MCP',
    duration: '8–12 weeks',
    skills: ['CORE 10', 'CORE 11', 'CORE 18'],
    tasksEn: [
      'CORE 10: RAG and knowledge-base security.',
      'CORE 11: Agent, tool, and MCP security.',
      'CORE 18: Detection and remediation validation.'
    ],
    tasksAr: [
      'CORE 10: اختبار سلامة قواعد البيانات المتجهية، والتسميم، والحقن غير المباشر عبر الوثائق، وتجاوز صلاحيات الاسترجاع.',
      'CORE 11: اختبار اختطاف أهداف الوكلاء، واستغلال الأدوات، وتجاوز الموافقات، وأمن بروتوكول MCP والعزل.',
      'CORE 18: تقييم رصد الدفاعات وسجلات التتبع وفعالية حواجز الحماية (Guardrails) والتحقق من الإصلاحات.'
    ],
    exitCriteriaEn: 'Can assess an authorized RAG application and an agent with tools, memory, and identity permissions; can prove impact safely and describe defensive controls.',
    exitCriteriaAr: 'القدرة على تقييم تطبيق RAG مصرح به ووكيل مزود بأدوات وذاكرة وصلاحيات هوية؛ وإثبات الأثر بأمان وتوصيف الضوابط الدفاعية.'
  },
  {
    phase: 5,
    nameEn: 'Phase 5 — Model-Level and Advanced AI Security',
    nameAr: 'المرحلة 5 — أمن النماذج المتقدم وسلاسل الإمداد والوسائط المتعددة',
    duration: '12–20 weeks or longer',
    skills: ['CORE 12', 'CORE 13', 'CORE 14', 'CORE 15', 'CORE 17'],
    tasksEn: [
      'CORE 12: Adversarial ML.',
      'CORE 13: Model privacy and intellectual property.',
      'CORE 14: Supply chain and MLOps.',
      'CORE 15: Multimodal security.',
      'CORE 17: AI safety and human-factor testing.'
    ],
    tasksAr: [
      'CORE 12: دراسة هجمات التهرب والتسميم التنافسي والأمثلة العدائية.',
      'CORE 13: فحص تسريب بيانات التدريب، وهجمات استدلال العضوية وعكس النماذج وسرقة الملكية الفكرية.',
      'CORE 14: تأمين سلاسل إمداد النماذج والمستودعات والملفات غير الآمنة ومسارات MLOps والحاويات.',
      'CORE 15: اختبار أمن النماذج متعددة الوسائط (الصور، الصوت، الفيديو، OCR).',
      'CORE 17: تقييم مخرجات السلامة، والتحيز، وإخفاقات السياسات السلوكية.'
    ],
    exitCriteriaEn: 'Can select appropriate model-level, data-level, and multimodal tests and explain assumptions and limitations.',
    exitCriteriaAr: 'القدرة على اختيار الاختبارات المناسبة على مستوى النموذج والبيانات والوسائط المتعددة وشرح الفرضيات والحدود بدقة.'
  },
  {
    phase: 6,
    nameEn: 'Phase 6 — Professional Campaign & Specialization',
    nameAr: 'المرحلة 6 — الحملات الاحترافية الشاملة والتخصص المتقدم',
    duration: '8–12 weeks + Ongoing',
    skills: ['Capstone Engagement', 'Specializations'],
    tasksEn: [
      'Design a full, authorized AI Red Team engagement.',
      'Include model, application, data, RAG, agent, and infrastructure scope where available.',
      'Use an evaluation harness and human review.',
      'Document attack paths and measurable outcomes.',
      'Map findings to relevant AI security taxonomies.',
      'Present technical and executive reports.',
      'Retest fixes and create regression cases.',
      'Select one specialization for deeper research.'
    ],
    tasksAr: [
      'تصميم وتنفيذ حملة فريق أحمر كاملة مصرح بها لأنظمة ذكاء اصطناعي مؤسسية.',
      'شمول نطاق النموذج، التطبيق، البيانات، نظام RAG، الوكيل، والبنية التحتية.',
      'استخدام منصة تقييم مؤتمتة مدعومة بالتحكيم والمراجعة البشرية الدقيقة.',
      'توثيق مسارات الهجوم وخرائط الأثر المقاسة بدقة علمية.',
      'مطابقة المكتشفات مع تصنيفات OWASP و MITRE ATLAS و NIST.',
      'تقديم التقارير الفنية للمطورين والملخصات التنفيذية للقيادة العليا.',
      'إعادة الفحص وإضافة حالات انتكاس دائمة في خطوط الإنتاج.',
      'اختيار أحد التخصصات الدقيقة والتعمق في أبحاثه المتقدمة.'
    ],
    exitCriteriaEn: 'Can independently lead a bounded AI Red Team assessment in a lab or explicitly authorized environment and defend the evidence and conclusions.',
    exitCriteriaAr: 'القدرة على قيادة تقييم أمني متكامل للذكاء الاصطناعي بشكل مستقل في بيئة مصرح بها والدفاع عن الأدلة والاستنتاجات باحترافية.'
  }
];

export const COMPETENCY_LEVELS: CompetencyLevel[] = [
  {
    levelEn: 'AI Security Learner',
    levelAr: 'متعلم أمن الذكاء الاصطناعي',
    capabilitiesEn: 'Understands ML/LLM fundamentals and basic AI application architecture',
    capabilitiesAr: 'يفهم أساسيات تعلم الآلة ونماذج LLM ومعمارية التطبيقات الأساسية',
    effortHours: '200–350h'
  },
  {
    levelEn: 'Junior AI Red Team Practitioner',
    levelAr: 'ممارس مبتدئ في الفريق الأحمر للذكاء الاصطناعي',
    capabilitiesEn: 'Runs scoped tests against a simple LLM application with supervision',
    capabilitiesAr: 'ينفذ اختبارات محددة النطاق على تطبيقات LLM البسيطة تحت إشراف',
    effortHours: '450–700h'
  },
  {
    levelEn: 'Independent AI Application Red Teamer',
    levelAr: 'مختبر اختراق مستقل لتطبيقات الذكاء الاصطناعي',
    capabilitiesEn: 'Plans and performs assessments of LLM apps, APIs, RAG, and basic agents; reports reproducible findings',
    capabilitiesAr: 'يخطط وينفذ تقييمات تطبيقات LLM وواجهات APIs وأنظمة RAG والوكلاء البسيطين، ويوثق أدلة قابلة للتكرار',
    effortHours: '900–1,400h'
  },
  {
    levelEn: 'Advanced AI Red Teamer',
    levelAr: 'مختبر اختراق متقدم للذكاء الاصطناعي',
    capabilitiesEn: 'Handles complex agents, evaluation automation, model/data security, detection assessment, and multi-component attack paths',
    capabilitiesAr: 'يتعامل مع الوكلاء المعقدين، وأتمتة التقييم، وأمن النماذج والبيانات، وتقييم الكشف، وسلاسل الهجوم متعددة المكونات',
    effortHours: '1,500–2,500h'
  },
  {
    levelEn: 'AI Red Team Specialist / Researcher',
    levelAr: 'أخصائي وباحث أول في الفريق الأحمر للذكاء الاصطناعي',
    capabilitiesEn: 'Develops novel methods in selected areas such as adversarial ML, model privacy, multimodal attacks, or frontier model evaluations',
    capabilitiesAr: 'يطور أساليب هجومية ودفاعية مبتكرة في مجالات دقيقة مثل Adversarial ML وخصوصية النماذج والوسائط المتعددة والتقييمات الطليعية',
    effortHours: '2,500h+ plus ongoing research'
  }
];

export const TOOLS_MAP: ToolItem[] = [
  {
    id: 'tool-pyrit',
    name: 'Microsoft PyRIT',
    category: 'Attack Automation & Frameworks',
    purposeEn: 'Automated and human-led GenAI red-team workflows, datasets, scenarios, attack strategies, converters, targets, scorers',
    purposeAr: 'أتمتة مسارات عمل الفريق الأحمر للذكاء الاصطناعي التوليدي، مجموعات البيانات، استراتيجيات الهجوم، المحولات، الأهداف، وأدوات تسجيل النقاط',
    skillAreas: 'CORE 09, 16',
    url: 'https://microsoft.github.io/PyRIT/latest/'
  },
  {
    id: 'tool-garak',
    name: 'NVIDIA garak',
    category: 'Vulnerability Scanners',
    purposeEn: 'LLM vulnerability scanner using probes and detectors for unwanted model behaviour',
    purposeAr: 'ماسح ثغرات النماذج اللغوية الكبيرة عبر مسبارات ومستشعرات للكشف عن السلوكيات والهلوسات غير المرغوبة',
    skillAreas: 'CORE 09, 16',
    url: 'https://garak.ai/'
  },
  {
    id: 'tool-inspect',
    name: 'UK AI Security Institute Inspect',
    category: 'Evaluation Frameworks',
    purposeEn: 'Evaluation framework with tasks, datasets, solvers, scorers, agents, and tools',
    purposeAr: 'إطار التقييم المعياري الرسمي من معهد سلامة الذكاء الاصطناعي البريطاني، يضم مهام ومجموعات بيانات ومحللات ومحكمين ووكلاء',
    skillAreas: 'CORE 16, 17',
    url: 'https://inspect.aisi.org.uk/'
  },
  {
    id: 'tool-owasp',
    name: 'OWASP GenAI Red Teaming Manual',
    category: 'Methodologies & Taxonomies',
    purposeEn: 'Risk taxonomies, AI red-team methodology, practical guidance (Published 2026-10-20)',
    purposeAr: 'الدليل المنهجي الرسمي الصادر من منظمة OWASP لتصنيف المخاطر ومنهجيات اختبار اختراق الذكاء الاصطناعي التوليدي',
    skillAreas: 'CORE 08, 09, 10, 11',
    url: 'https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/'
  },
  {
    id: 'tool-atlas',
    name: 'MITRE ATLAS',
    category: 'Threat Taxonomies',
    purposeEn: 'Knowledge base for adversarial tactics and techniques against AI-enabled systems',
    purposeAr: 'قاعدة المعرفة القياسية العالمية لتكتيكات وتقنيات الهجمات العدائية على الأنظمة المدعومة بالذكاء الاصطناعي',
    skillAreas: 'CORE 08, 12, 14',
    url: 'https://atlas.mitre.org/'
  },
  {
    id: 'tool-nist-aml',
    name: 'NIST AML Taxonomy (AI 100-2 E2025)',
    category: 'Standards & Taxonomies',
    purposeEn: 'Terminology and taxonomy for adversarial ML threats and mitigations',
    purposeAr: 'المعيار الرسمي من المعهد القومي الأمريكي للمعايير والتقنية (NIST) لمصطلحات وتصنيفات تهديدات التعلم الآلي العدائي وحلولها',
    skillAreas: 'CORE 02, 03, 12, 13',
    url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final'
  }
];

export const CAPSTONE_STEPS = [
  { step: 1, titleEn: 'Scope, Assumptions & Safety Limits', titleAr: 'تحديد النطاق والفرضيات وحدود الأمان وشروط الإيقاف' },
  { step: 2, titleEn: 'Architecture & Data-Flow Diagrams', titleAr: 'رسم معمارية النظام ومخططات تدفق البيانات DFDs' },
  { step: 3, titleEn: 'Trust Boundaries, Sensitive Assets & Tool Permissions', titleAr: 'تحديد حدود الثقة والأصول الحساسة وصلاحيات الأدوات' },
  { step: 4, titleEn: 'Threat Model & Prioritized Test Plan', titleAr: 'بناء نموذج التهديدات وخطة الاختبارات ذات الأولوية' },
  { step: 5, titleEn: 'Direct & Indirect Prompt Injection Testing', titleAr: 'اختبار حقن التوجيهات المباشرة وغير المباشرة' },
  { step: 6, titleEn: 'Disclosure & Cross-User Data Isolation (Canary Records)', titleAr: 'اختبار كشف البيانات وعزل المستخدمين بسجلات اصطناعية (Canary)' },
  { step: 7, titleEn: 'RAG Source Integrity, Retrieval Filtering & Citations', titleAr: 'اختبار سلامة مصادر RAG، وفلاتر الاسترجاع، وسلوك الاقتباس' },
  { step: 8, titleEn: 'Agent Goal Boundaries, Tool Permissions, Approvals & Memory', titleAr: 'اختبار حدود أهداف الوكيل، وصلاحيات الأدوات، والموافقات، والذاكرة' },
  { step: 9, titleEn: 'Automated Scenarios Execution & Manual Verification', titleAr: 'تشغيل السيناريوهات المؤتمتة والتحقق البشري من النتائج الإيجابية' },
  { step: 10, titleEn: 'Log Review & Detection Gap Identification', titleAr: 'مراجعة السجلات والقياس الأمني وتحديد فجوات الكشف' },
  { step: 11, titleEn: 'Technical & Executive Reports', titleAr: 'كتابة التقارير الفنية المعمقة والملخصات التنفيذية لصناع القرار' },
  { step: 12, titleEn: 'Fix Selected Issues & Run Regression Tests', titleAr: 'إصلاح المشكلات المحددة وإجراء اختبارات الانتكاس الدورية' }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'chk-1', textEn: 'I can explain the architecture and lifecycle of an ML model and an LLM.', textAr: 'أستطيع شرح معمارية ودورة حياة نموذج تعلم الآلة والنموذج اللغوي الكبير LLM.', category: 'Foundations' },
  { id: 'chk-2', textEn: 'I can trace a request through an AI application, model endpoint, data source, and tool integration.', textAr: 'أستطيع تتبع مسار الطلب عبر تطبيق الذكاء الاصطناعي ونقطة استدعاء النموذج ومصدر البيانات وتكاملات الأدوات.', category: 'Architecture' },
  { id: 'chk-3', textEn: 'I can threat-model an AI system and define a safe test plan.', textAr: 'أستطيع نمذجة تهديدات نظام الذكاء الاصطناعي وبناء خطة اختبارات أمنية آمنة ومحكمة.', category: 'Methodology' },
  { id: 'chk-4', textEn: 'I can test direct and indirect prompt injection and explain the observed impact.', textAr: 'أستطيع اختبار حقن التوجيه المباشر وغير المباشر وشرح وتوثيق الأثر الملاحظ علمياً.', category: 'Attacks' },
  { id: 'chk-5', textEn: 'I can evaluate jailbreak and safety-control robustness without relying only on a copied prompt list.', textAr: 'أستطيع تقييم كسر الحماية وصلابة ضوابط الأمان دون الاعتماد فقط على قوائم نصوص جاهزة منسوخة.', category: 'Attacks' },
  { id: 'chk-6', textEn: 'I can assess sensitive-data disclosure and user/tenant isolation.', textAr: 'أستطيع تقييم تسريب البيانات الحساسة ومستوى العزل الصارم بين المستخدمين والمستأجرين.', category: 'Privacy' },
  { id: 'chk-7', textEn: 'I can test a RAG system, including retrieval permissions and untrusted documents.', textAr: 'أستطيع اختبار نظام RAG، بما في ذلك صلاحيات الاسترجاع والمستندات غير الموثوقة.', category: 'RAG' },
  { id: 'chk-8', textEn: 'I can assess an agent\'s tool permissions, memory, approvals, and action boundaries.', textAr: 'أستطيع تقييم صلاحيات أدوات الوكيل الذاتي، وذاكرته، ومسارات الموافقات، وحدود أفعاله.', category: 'Agents' },
  { id: 'chk-9', textEn: 'I can use Python to automate test cases and analyze results.', textAr: 'أستطيع استخدام لغة بايثون لأتمتة حالات الاختبار وتحليل النتائج إحصائياً.', category: 'Engineering' },
  { id: 'chk-10', textEn: 'I can use an evaluation framework and understand its scoring limitations.', textAr: 'أستطيع استخدام إطار تقييم معياري وفهم قيود وحسابات نقاط التحكيم والتسجيل.', category: 'Evaluation' },
  { id: 'chk-11', textEn: 'I understand adversarial ML concepts and can perform selected controlled tests.', textAr: 'أفهم مفاهيم التعلم الآلي العدائي (AML) وأستطيع تنفيذ اختبارات مدروسة ومنضبطة.', category: 'AML' },
  { id: 'chk-12', textEn: 'I can assess relevant model, dataset, dependency, and deployment supply-chain risks.', textAr: 'أستطيع تقييم مخاطر سلاسل إمداد النماذج ومجموعات البيانات والتبعيات البرمجية والبنية التحتية.', category: 'Supply Chain' },
  { id: 'chk-13', textEn: 'I can assess multimodal inputs when they are in scope.', textAr: 'أستطيع تقييم المدخلات متعددة الوسائط (الصور والصوت والـ OCR) عندما تكون ضمن النطاق.', category: 'Multimodal' },
  { id: 'chk-14', textEn: 'I can inspect logs and evaluate whether defensive controls detected the activity.', textAr: 'أستطيع فحص السجلات والقياس الأمني وتقييم ما إذا كانت الدفاعات قد رصدت الأنشطة العدائية.', category: 'Defense' },
  { id: 'chk-15', textEn: 'I can reproduce findings, explain root cause, prioritize impact, and recommend mitigations.', textAr: 'أستطيع إعادة إنتاج النتائج، وشرح الأسباب الجذرية، وترتيب الأثر بحسب الأولوية، واقتراح حلول عملية.', category: 'Operations' },
  { id: 'chk-16', textEn: 'I can conduct a retest and turn a finding into a regression test.', textAr: 'أستطيع إجراء فحص لاحق (Retest) وتحويل المكتشفات إلى اختبارات انتكاس دورية لمنع تكرارها.', category: 'Operations' },
  { id: 'chk-17', textEn: 'I can independently lead a bounded engagement in an explicitly authorized environment.', textAr: 'أستطيع قيادة مهمة تقييم أمني محددة النطاق بشكل مستقل في بيئة مصرح بها كتابياً والدفاع عنها.', category: 'Operations' }
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    number: 1,
    title: 'NIST — Artificial Intelligence Red Teaming glossary',
    url: 'https://csrc.nist.gov/glossary/term/artificial_intelligence_red_teaming',
    descriptionEn: 'Official definitions of AI Red Teaming and related security concepts.',
    descriptionAr: 'المصطلحات الرسمية لمفهوم الفريق الأحمر للذكاء الاصطناعي والمفاهيم الأمنية المرتبطة به.'
  },
  {
    number: 2,
    title: 'NIST AI 100-2 E2025 — Adversarial Machine Learning Taxonomy',
    url: 'https://csrc.nist.gov/pubs/ai/100/2/e2025/final',
    descriptionEn: 'Comprehensive taxonomy and terminology of attacks and mitigations in machine learning systems.',
    descriptionAr: 'التصنيف الشامل والمصطلحات المعتمدة لهجمات تعلم الآلة العدائي وإجراءات الحماية والتخفيف.'
  },
  {
    number: 3,
    title: 'OWASP — GenAI Red Teaming Manual v1.0 (2026-10-20)',
    url: 'https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/',
    descriptionEn: 'The authoritative practical manual covering the 8-phase red teaming methodology for generative AI.',
    descriptionAr: 'الدليل العملي المرجعي الذي يغطي منهجية المراحل الثماني لاختبار اختراق الذكاء الاصطناعي التوليدي.'
  },
  {
    number: 4,
    title: 'OWASP — GenAI Red Teaming Guide',
    url: 'https://genai.owasp.org/resource/genai-red-teaming-guide/',
    descriptionEn: 'Strategic and architectural guidance for organizations establishing GenAI red teaming capabilities.',
    descriptionAr: 'الإرشادات الاستراتيجية والمعمارية للمؤسسات لبناء وتفعيل قدرات الفريق الأحمر للذكاء الاصطناعي.'
  },
  {
    number: 5,
    title: 'OWASP — Top 10 for LLM and GenAI',
    url: 'https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/',
    descriptionEn: 'The widely adopted industry standard catalog of critical risks in LLM applications.',
    descriptionAr: 'المعيار الصناعي المعتمد عالمياً لأبرز 10 مخاطر حرجة تهدد تطبيقات النماذج اللغوية الكبيرة.'
  },
  {
    number: 6,
    title: 'Microsoft — AI Red Team',
    url: 'https://learn.microsoft.com/en-us/security/ai-red-team/',
    descriptionEn: 'Practices, lessons, and methodology from Microsoft\'s specialized AI Red Team.',
    descriptionAr: 'الممارسات الميدانية والدروس المستفادة ومنهجيات العمل لفريق مايكروسوفت لأمن الذكاء الاصطناعي.'
  },
  {
    number: 7,
    title: 'Microsoft — PyRIT documentation',
    url: 'https://microsoft.github.io/PyRIT/latest/',
    descriptionEn: 'Python Risk Identification Tool for generative AI systems.',
    descriptionAr: 'التوثيق الرسمي لأداة PyRIT مفتوحة المصدر لتحديد المخاطر والأتمتة في الذكاء الاصطناعي التوليدي.'
  },
  {
    number: 8,
    title: 'NVIDIA — garak',
    url: 'https://garak.ai/',
    descriptionEn: 'The LLM vulnerability scanner with probes and detectors for model failures.',
    descriptionAr: 'الماسح البرمجي الشهير من إنفيديا لفحص ثغرات وسلوكيات النماذج اللغوية الكبيرة.'
  },
  {
    number: 9,
    title: 'UK AI Security Institute — Inspect',
    url: 'https://inspect.aisi.org.uk/',
    descriptionEn: 'State-of-the-art framework for evaluating model capabilities, safety, and risks.',
    descriptionAr: 'إطار العمل المتقدم المعتمد من معهد سلامة الذكاء الاصطناعي البريطاني لتقييم القدرات والمخاطر.'
  },
  {
    number: 10,
    title: 'Canadian Centre for Cyber Security — Careful adoption of agentic AI',
    url: 'https://www.cyber.gc.ca/en/guidance/careful-adoption-agentic-ai',
    descriptionEn: 'Government cybersecurity guidance on risks, safeguards, and governance for autonomous AI agents.',
    descriptionAr: 'الإرشادات الحكومية الكندية حول المخاطر والضوابط الأمنية وحوكمة تبني الوكلاء الذاتيين (Agentic AI).'
  }
];

export const PROFESSIONAL_BOUNDARY_TEXT = {
  en: 'All active testing must be limited to systems, models, datasets, accounts, and infrastructure that the tester owns or is expressly authorized to assess. Use synthetic data, isolated labs, rate limits, and clear stop conditions. Do not test real third-party AI endpoints, attempt to extract private user data, or trigger real-world agent actions without written authorization and an agreed test plan.',
  ar: 'يجب حصر جميع الاختبارات النشطة بدقة في الأنظمة والنماذج ومجموعات البيانات والحسابات والبنى التحتية التي يمتلكها المختبر أو المخول رسمياً بفحصها بموجب تفويض كتابي صريح. استخدم دائماً بيانات اصطناعية، ومختبرات معزولة، ومعدلات طلبات مضبوطة، وشروط إيقاف فورية واضحة. يُحظر تماماً اختبار نقاط استدعاء خارجية لأطراف ثالثة، أو محاولة استخراج بيانات مستخدمين حقيقيين، أو إطلاق أفعال تلقائية للوكلاء في العالم الحقيقي دون إذن كتابي موثق وخطة عمل متفق عليها.'
};
