# AI Red Team Skill Tree

**From Cybersecurity Foundations to Advanced AI Red Teaming**  
Version: 1.0  
Prepared: 2026-10-30  
Language: Arabic explanations with standard English technical terms  
Purpose: A structured source document for converting this skill tree into an interactive mind map / skill-tree website.

---

## 0. How to read this tree

This tree is a practical competency map, not a vendor certification syllabus. It combines AI application security, LLM red teaming, adversarial machine learning, agent security, AI safety evaluation, and professional red-team operations.

### Two different rating systems

**Importance rating** answers: how important is this skill for an AI Red Teamer?

| Grade | Meaning |
|---|---|
| A | Core / critical: required for a broadly capable AI Red Teamer |
| B | High value: needed in many real engagements |
| C | Useful specialization: important for selected systems or roles |
| D | Niche specialization |
| E | Highly specialized / research-heavy |
| F | Rare optional specialization |

**Effort rating** answers: how difficult / time-consuming is it to learn or master?

| Grade | Learning hours (initial understanding + guided practice) | Additional mastery hours (independent practice and unfamiliar scenarios) |
|---|---:|---:|
| A | Up to 40h | Up to 60h |
| B | 41–70h | 61–100h |
| C | 71–100h | 101–160h |
| D | 101–140h | 161–240h |
| E | 141–200h | 241–350h |
| F | More than 200h | More than 350h |

For each effort grade below, use the grade corresponding to the upper end of the stated range. The estimated hours below are focused hours, not elapsed calendar time. Learning hours and mastery hours are different: learning introduces the topic and guided labs; mastery means independently designing tests, interpreting results, reproducing findings, and handling cases that were not copied from a walkthrough.

**Important:** the hours for different skills overlap. One realistic RAG/agent lab can train Python, API security, threat modeling, prompt injection, evaluation, logging, and reporting at the same time. Do not add every row as if every skill were isolated.

### Scope distinction

AI Red Teaming may include three overlapping tracks:

1. **AI Application Security Red Teaming:** tests LLM-powered products, APIs, RAG systems, tools, agents, permissions, and deployment infrastructure.
2. **Model / Adversarial ML Red Teaming:** tests models and their data lifecycle through evasion, poisoning, privacy attacks, extraction, backdoors, and robustness testing.
3. **AI Safety / Behavioural Red Teaming:** tests harmful or unwanted model behaviour, policy failures, misuse, bias, reliability, and unsafe emergent behaviour.

A capable generalist should understand all three tracks. Deep research-level mastery in every track is not a realistic requirement; specialists go deeper in selected branches.

---

# 1. What an AI Red Teamer does in real engagements

An AI Red Teamer tests whether an AI system can be manipulated into violating its intended constraints, exposing information, taking unauthorized actions, producing unsafe behaviour, or failing under adversarial conditions.

The target is not necessarily just the model. It may include:

- User interface and application logic.
- Model endpoint and inference configuration.
- System prompts, developer instructions, and context assembly.
- Data sources, training data, fine-tuning data, and evaluation datasets.
- Retrieval-Augmented Generation (RAG), embeddings, and vector databases.
- AI agents, memory, tool calling, plugins, and MCP servers.
- APIs, identity, permissions, secrets, and tenant boundaries.
- Model hosting, cloud infrastructure, containers, orchestration, and CI/CD.
- Logging, monitoring, safety filters, and incident response.

## 1.1 Operational lifecycle

1. **Mission Planning & Scope Definition** — identify the asset, business goal, permitted test types, safety limits, test data, contacts, stop conditions, and success criteria.
2. **AI System Reconnaissance** — understand model, application, data, APIs, integrations, tools, identities, and deployment architecture.
3. **Attack Surface Mapping** — map all user-controlled inputs, external content, trust boundaries, model outputs, tool calls, data stores, and privileged actions.
4. **Threat Modeling & Test Hypotheses** — turn architecture and business context into testable attacker goals and risk hypotheses.
5. **Adversarial Testing** — test prompt injection, jailbreaks, data leakage, unsafe output handling, RAG weaknesses, agent misuse, model attacks, and relevant safety risks.
6. **Impact Validation** — verify what the issue actually enables, using synthetic or approved test data and avoiding unnecessary data access or impact.
7. **Persistence / Cross-Session Testing** — test whether poisoned context, memory, retrieved content, or configuration changes can influence later sessions, when in scope.
8. **Detection & Defensive Assessment** — determine what logs, alerts, policy controls, and response workflows observed or blocked the test.
9. **Evidence, Reporting & Debrief** — document exact conditions, reproducibility, impact, severity, affected components, and remediation.
10. **Remediation Validation & Continuous Evaluation** — retest fixes and add repeatable regression cases.

This is a practical synthesis. OWASP's GenAI Red Teaming Manual v1.0 (published 2026-10-20) describes an eight-phase methodology covering planning, reconnaissance, attack-surface mapping, exploitation, persistence, impact assessment, reporting, and remediation.

## 1.2 Main operation families

| Operation family | What is assessed | Importance |
|---|---|---|
| Prompt Injection Testing | Direct and indirect manipulation of model instructions and context | A |
| Jailbreak / Safety Bypass Testing | Whether behaviour constraints can be bypassed | A |
| System Prompt / Configuration Disclosure | Exposure of hidden instructions or configuration | A |
| Sensitive Information Disclosure | Leakage of private, confidential, or cross-user information | A |
| RAG Security Testing | Retrieval manipulation, poisoned sources, access-control failures, data isolation | A |
| AI Agent / Tool Security | Goal hijacking, unauthorized tool use, excessive agency, approval bypass | A |
| API and Application Security | Authentication, authorization, input/output handling, rate limits, tenant isolation | A |
| Model Robustness Testing | Evasion, adversarial inputs, unexpected generalization failures | B |
| Data Poisoning / Backdoor Testing | Integrity of training, fine-tuning, and evaluation data | B |
| Model Privacy Testing | Membership inference, inversion, memorization, private data exposure | B |
| Model Extraction / IP Testing | Model theft, extraction, imitation, and unauthorized access | B |
| AI Supply Chain Testing | Model files, datasets, adapters, libraries, packages, registries, pipelines | B |
| Multimodal Security Testing | Text, image, audio, video, OCR, and cross-modal input attacks | B |
| AI Safety / Behavioural Evaluation | Harmful outputs, bias, manipulation, misinformation, policy failures | B |
| Resource Abuse / Availability Testing | Unbounded consumption, cost abuse, denial of service, quota exhaustion | B |
| Detection and Response Assessment | Whether security telemetry and controls detect and respond to AI attacks | A |
| Multi-Agent Attack-Chain Testing | Whether compromise or manipulation propagates across agents | C |

---

# 2. Core Skills Tree

## CORE 01 — Traditional Cybersecurity Foundations

- **Importance:** A
- **Learning:** 40–60 hours — Effort B
- **Additional mastery:** 80–120 hours — Effort C
- **Total focused estimate:** 120–180 hours
- **Why it matters:** AI products are still software systems. Their APIs, identities, networks, databases, cloud workloads, and operating systems remain part of the attack surface.

### Subskills

- Networking fundamentals — A
- TCP/IP, DNS, HTTP/HTTPS, TLS — A
- REST APIs and API authentication — A
- Authentication vs. authorization — A
- OAuth 2.0, OIDC, SAML concepts — B
- Web application security fundamentals — A
- SQL and database fundamentals — A
- Linux fundamentals — B
- Windows fundamentals — B
- Containers and virtualization — B
- Cloud fundamentals (AWS/Azure/GCP concepts) — B
- IAM, roles, permissions, and least privilege — A
- Secrets management — A
- Secure architecture and trust boundaries — A
- Logging and basic incident-response concepts — B

## CORE 02 — Mathematics, Probability & Statistics for AI Security

- **Importance:** B
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 120–180 hours — Effort D
- **Total focused estimate:** 180–270 hours
- **Why it matters:** Enables meaningful interpretation of model behaviour, evaluation results, uncertainty, false positives, and adversarial experiments. Advanced mathematics is required for research-heavy AML work, not every application-level assessment.

### Subskills

- Algebra and functions — B
- Vectors and matrices — B
- Linear algebra concepts — B
- Derivatives and gradients — C
- Probability fundamentals — A
- Conditional probability and Bayes' rule — B
- Descriptive statistics — A
- Distributions and sampling — B
- Hypothesis testing — C
- Confidence intervals — C
- Correlation vs. causation — B
- Experimental design and control groups — A
- Statistical significance vs. practical significance — B
- Class imbalance and base-rate effects — B
- Precision, recall, F1, ROC-AUC, PR-AUC — A
- Variance, reproducibility, and uncertainty — B

## CORE 03 — Artificial Intelligence & Machine Learning Fundamentals

- **Importance:** A
- **Learning:** 70–100 hours — Effort C
- **Additional mastery:** 140–220 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** The practitioner must understand what a model learns, what its inputs and outputs mean, how training differs from inference, and why failures can arise.

### Subskills

- AI vs. ML vs. Deep Learning — A
- Supervised learning — A
- Unsupervised learning — B
- Self-supervised learning — B
- Reinforcement learning concepts — B
- Training, validation, and test splits — A
- Features, labels, and targets — A
- Classification and regression — A
- Clustering — C
- Overfitting and underfitting — A
- Generalization — A
- Bias-variance trade-off — B
- Loss functions and optimization concepts — B
- Gradient descent — B
- Embeddings and representation learning — A
- Model evaluation and benchmarking — A
- Fine-tuning concepts — B
- Transfer learning — B
- Inference and model serving — A
- Model limitations and uncertainty — A

## CORE 04 — Deep Learning & LLM Architecture

- **Importance:** A
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** Understanding model architecture helps explain prompt injection, context behaviour, output variability, memorization, model constraints, and why simple prompt-only defenses are insufficient.

### Subskills

- Neural network fundamentals — A
- Layers, weights, biases, and activations — B
- Forward and backward propagation concepts — C
- Tokenization and token IDs — A
- Vocabulary and token limits — A
- Embeddings — A
- Attention mechanism — A
- Self-attention and multi-head attention — B
- Transformer architecture — A
- Positional encoding — B
- Context windows — A
- Pretraining vs. instruction tuning — A
- Supervised fine-tuning (SFT) — B
- RLHF and preference optimization concepts — B
- Inference parameters (temperature, top-p, sampling) — A
- System/developer/user message roles — A
- Tool/function calling architecture — A
- Model families and open-weight vs. hosted models — B
- Quantization and adapters (LoRA/PEFT concepts) — C
- Model behaviour, stochasticity, and non-determinism — A

## CORE 05 — Python, Software Engineering & Automation

- **Importance:** A
- **Learning:** 80–110 hours — Effort D
- **Additional mastery:** 160–250 hours — Effort D–E
- **Total focused estimate:** 240–360 hours
- **Why it matters:** AI Red Teamers build test harnesses, connect to model endpoints, transform inputs, automate scenarios, score outputs, and analyze results.

### Subskills

- Python syntax and programming logic — A
- Data types, functions, modules, and classes — A
- Lists, dictionaries, sets, and data structures — A
- File handling and serialization — A
- JSON, YAML, CSV, and XML — A
- HTTP clients and API requests — A
- Authentication headers and API keys — A
- Error handling and retries — B
- Async programming and concurrency — B
- Regular expressions — B
- Data processing with pandas — B
- NumPy fundamentals — B
- Jupyter notebooks — B
- Logging and debugging — A
- Unit testing and test fixtures — A
- Git and version control — A
- Virtual environments and dependency management — B
- CLI tool development — B
- Basic SQL integration — B
- Reproducible scripts and configuration management — A

## CORE 06 — AI Application Architecture & System Integration

- **Importance:** A
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 130–200 hours — Effort D
- **Total focused estimate:** 190–290 hours
- **Why it matters:** Many critical AI vulnerabilities occur in the surrounding application and integrations, not solely inside model weights.

### Subskills

- LLM application architecture — A
- Frontend/backend request flow — A
- Model API integration — A
- Prompt construction and context assembly — A
- API gateway and middleware concepts — B
- Session and conversation state — A
- User identity propagation — A
- Authorization enforcement outside the model — A
- Tool and function calling flow — A
- Database and cache integration — B
- File upload and document processing — B
- Background jobs and queues — C
- Rate limiting and quotas — A
- Multi-tenant architecture — A
- Data-flow diagrams — A
- Trust boundaries and security boundaries — A
- Human approval workflows — A
- Failure handling and fallback paths — B

## CORE 07 — Prompt, Context & Instruction Engineering

- **Importance:** A
- **Learning:** 35–55 hours — Effort B
- **Additional mastery:** 80–130 hours — Effort C
- **Total focused estimate:** 115–185 hours
- **Why it matters:** A red teamer must understand how instructions and untrusted content are assembled and interpreted to test whether they can be confused or overridden.

### Subskills

- Prompt anatomy and role hierarchy — A
- System, developer, and user instructions — A
- Context construction — A
- Context-window constraints — A
- Few-shot prompting — B
- Structured outputs and JSON mode — B
- Output schemas and constrained generation — B
- Prompt templates and variables — A
- Conversation history and truncation — B
- Instruction conflicts — A
- Untrusted-content boundaries — A
- Prompt injection concepts — A
- Direct vs. indirect prompt injection — A
- Multi-turn interaction design — A
- Tool descriptions and instruction exposure — A
- Prompt versioning and regression testing — B

## CORE 08 — AI Security Threat Modeling & Red-Team Methodology

- **Importance:** A
- **Learning:** 40–60 hours — Effort B
- **Additional mastery:** 100–150 hours — Effort C
- **Total focused estimate:** 140–210 hours
- **Why it matters:** Converts vague attempts into structured, scoped, measurable security tests.

### Subskills

- Asset identification — A
- System and data-flow mapping — A
- Threat modeling fundamentals — A
- Attacker goals, capabilities, and assumptions — A
- Trust boundaries — A
- Abuse cases and misuse cases — A
- Attack trees — B
- STRIDE concepts and applicability — B
- AI-specific threat modeling — A
- Business impact analysis — A
- Risk likelihood and impact — A
- Scope and rules of engagement — A
- Safe test-data design — A
- Test hypotheses and expected outcomes — A
- Test prioritization — A
- OWASP GenAI risk taxonomy — A
- MITRE ATLAS familiarity — B
- NIST AI RMF / AI risk terminology — B
- Reproducibility and evidence standards — A

## CORE 09 — LLM Security Attacks & Adversarial Testing

- **Importance:** A
- **Learning:** 80–120 hours — Effort D
- **Additional mastery:** 180–280 hours — Effort D–E
- **Total focused estimate:** 260–400 hours
- **Why it matters:** This is the central practical attack skill set for LLM application red teaming.

### Subskills

- Direct prompt injection — A
- Indirect prompt injection — A
- Jailbreak testing — A
- Multi-turn jailbreak assessment — B
- Refusal robustness testing — A
- System prompt disclosure testing — A
- Sensitive data disclosure testing — A
- Conversation and session data isolation — A
- Insecure output handling — A
- Unsafe downstream interpretation of model output — A
- Hallucination and reliability abuse cases — B
- Misinformation and manipulation testing — B
- Insecure plugin / tool instruction handling — A
- Excessive agency assessment — A
- Model denial-of-service and unbounded consumption — B
- Rate-limit and quota abuse assessment — B
- Model behaviour consistency testing — B
- Encoded / obfuscated input robustness — B
- Cross-language and multilingual attack testing — B
- Multi-modal prompt injection awareness — B
- Multi-turn attack-chain design — A
- Human review of automated findings — A

## CORE 10 — RAG, Retrieval & Knowledge-Base Security

- **Importance:** A
- **Learning:** 50–75 hours — Effort C
- **Additional mastery:** 120–180 hours — Effort C–D
- **Total focused estimate:** 170–255 hours
- **Why it matters:** RAG systems introduce external content, retrieval logic, embeddings, and data-access boundaries into model context.

### Subskills

- RAG architecture — A
- Document ingestion pipelines — A
- Text extraction and chunking — B
- Embedding models — A
- Vector databases — A
- Similarity search and retrieval ranking — B
- Metadata filtering — A
- Tenant and user-level data isolation — A
- Access-control-aware retrieval — A
- Source attribution and citations — B
- Retrieval relevance and grounding — A
- Indirect prompt injection through documents — A
- Knowledge-base poisoning assessment — A
- Data integrity and provenance — A
- Embedding-space weaknesses — B
- Cross-document information leakage — A
- Retrieval cache and stale-data risks — C
- RAG evaluation and regression testing — A

## CORE 11 — AI Agents, Tool Calling & MCP Security

- **Importance:** A
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** Agents combine model behaviour with tools, identities, memory, and the ability to take actions. A model failure can therefore become a real application or business action.

### Subskills

- Agent architecture and execution loop — A
- Planning and task decomposition — B
- Tool / function calling — A
- Tool schemas and descriptions — A
- Tool authentication and authorization — A
- Least agency and least privilege — A
- Human-in-the-loop approvals — A
- Agent memory and state — A
- Short-term vs. long-term memory — B
- Memory poisoning assessment — B
- Goal hijacking — A
- Tool misuse and tool output manipulation — A
- Identity and privilege abuse — A
- Unexpected code execution risk assessment — A
- Agent-to-agent communication — B
- Multi-agent attack chains — B
- MCP architecture and security model — A
- MCP servers, tools, resources, and prompts — B
- MCP authentication and permission boundaries — A
- Untrusted tool results and external content — A
- Sandboxing and execution isolation — A
- Agent observability and audit trails — A
- Action confirmation and transaction safety — A

## CORE 12 — Adversarial Machine Learning (AML)

- **Importance:** B
- **Learning:** 100–150 hours — Effort E
- **Additional mastery:** 250–400 hours — Effort E–F
- **Total focused estimate:** 350–550 hours
- **Why it matters:** This branch covers attacks against ML learning, inference, and model behaviour beyond ordinary prompt manipulation. Deep expertise is research-heavy.

### Subskills

- AML threat models — A
- White-box, gray-box, and black-box assumptions — B
- Evasion attacks — A
- Adversarial examples — A
- Test-time perturbations — B
- Data poisoning — A
- Label flipping — B
- Backdoor and Trojan attacks — B
- Training-time attacks — B
- Fine-tuning data manipulation — B
- Robustness evaluation — A
- Distribution shift — B
- Model-specific vs. transfer attacks — C
- Adversarial training concepts — C
- Fuzzing for ML systems — C
- Robustness metrics — B
- Attack success rate and constraints — A
- Multimodal adversarial inputs — C
- Reinforcement-learning security concepts — D
- Federated-learning attack concepts — D

## CORE 13 — Model Privacy, Memorization & Intellectual Property

- **Importance:** B
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 160–250 hours — Effort D–E
- **Total focused estimate:** 220–340 hours
- **Why it matters:** AI systems may reveal information about training data, fine-tuning data, prompts, user sessions, or proprietary model behaviour.

### Subskills

- Data privacy fundamentals — A
- PII and sensitive-data classification — A
- Training-data memorization — B
- Membership inference — C
- Model inversion — C
- Model extraction / stealing concepts — B
- Model fingerprinting — C
- Sensitive prompt and context disclosure — A
- Cross-session data leakage — A
- Cross-tenant leakage — A
- Secret and credential exposure — A
- Privacy attack assumptions and limitations — B
- Differential privacy concepts — C
- Data minimization and retention — B
- IP and model-use policy awareness — B
- Evidence handling for sensitive findings — A

## CORE 14 — AI Supply Chain, MLOps & Model Infrastructure Security

- **Importance:** B
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** Model files, datasets, third-party packages, training pipelines, adapters, registries, and deployment infrastructure can introduce security risks before inference begins.

### Subskills

- ML lifecycle and MLOps architecture — A
- Dataset provenance — A
- Data versioning — B
- Model provenance and artifact integrity — A
- Model registries — B
- Model files and serialization risks — B
- Third-party model assessment — A
- Hugging Face ecosystem concepts — B
- Dependency and package security — A
- Software bill of materials (SBOM) concepts — B
- Container security — A
- Kubernetes fundamentals — B
- CI/CD pipeline security — A
- Secrets in training and deployment pipelines — A
- GPU / inference infrastructure concepts — C
- Model access controls — A
- Fine-tuning pipeline security — B
- Artifact signing and verification — B
- Runtime isolation — A
- Supply-chain threat modeling — A

## CORE 15 — Multimodal AI Security

- **Importance:** B
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** Modern AI systems may consume images, audio, video, documents, and combinations of modalities. Hidden or transformed inputs can affect model behaviour.

### Subskills

- Multimodal model architecture concepts — B
- Vision-language models (VLMs) — A
- Image input processing — A
- OCR and document understanding — B
- Hidden / non-obvious image instructions — B
- Image metadata and file handling — C
- Audio input and transcription pipelines — B
- Speech-to-text and text-to-speech concepts — B
- Audio prompt injection concepts — B
- Video frame and temporal processing — C
- Cross-modal context manipulation — B
- Multimodal data leakage — B
- Content provenance and authenticity — C
- Synthetic media and deepfake risk assessment — C
- Multimodal evaluation datasets — B

## CORE 16 — AI Evaluation Science & Automated Red-Team Engineering

- **Importance:** A
- **Learning:** 70–100 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 220–330 hours
- **Why it matters:** A professional AI Red Teamer must convert individual prompts into repeatable, measurable test campaigns. A single successful prompt is not enough to establish system-wide risk.

### Subskills

- Evaluation design — A
- Test objectives and success criteria — A
- Benchmark and dataset selection — A
- Test-case generation — A
- Seed prompts and attack datasets — B
- Single-turn and multi-turn testing — A
- Automated attack orchestration — A
- Prompt transformations and converters — B
- Scoring methods — A
- Rule-based and model-based scoring — B
- Human evaluation and adjudication — A
- False positives and false negatives — A
- Attack success rate — A
- Severity and impact scoring — A
- Reproducibility and random seeds — B
- Statistical confidence and sample size — B
- Regression testing — A
- CI/CD integration concepts — B
- Results analytics and visualization — B
- Test coverage and limitations — A
- Benchmark contamination awareness — C

## CORE 17 — AI Safety, Alignment & Human-Factor Testing

- **Importance:** B
- **Learning:** 50–75 hours — Effort C
- **Additional mastery:** 120–180 hours — Effort C–D
- **Total focused estimate:** 170–255 hours
- **Why it matters:** Some AI Red Team engagements explicitly test harmful outputs, misuse, manipulation, bias, and failures of safety controls. This is related to—but not identical with—technical cybersecurity testing.

### Subskills

- AI safety vs. AI security distinction — A
- Policy and intended-use analysis — A
- Harm taxonomy and risk categories — A
- Refusal behaviour and refusal consistency — A
- Harmful-content evaluation — B
- Bias and fairness testing — B
- Stereotype and discrimination testing — B
- Misinformation and persuasion risks — B
- High-stakes decision limitations — A
- Overreliance and automation bias — B
- Human factors and social manipulation — B
- Responsible test-data design — A
- Safety benchmark interpretation — B
- Escalation and responsible disclosure — A
- Context-specific harm analysis — A

## CORE 18 — AI Defense, Detection, Monitoring & Remediation Validation

- **Importance:** A
- **Learning:** 60–90 hours — Effort C
- **Additional mastery:** 150–230 hours — Effort D
- **Total focused estimate:** 210–320 hours
- **Why it matters:** A red teamer must understand how the system is defended and whether attack attempts are visible, blocked, or missed. The goal is to produce actionable security improvements, not merely demonstrate failure.

### Subskills

- AI security logging architecture — A
- Prompt and response telemetry — A
- Tool-call and agent-action logging — A
- Identity and authorization event logging — A
- Data access audit trails — A
- Rate-limit and cost monitoring — B
- Anomaly detection concepts — B
- Prompt injection detection concepts — B
- Content and policy filters — B
- DLP and sensitive-data detection — A
- Model/API abuse monitoring — B
- Alert triage — B
- Incident response for AI systems — B
- Model and prompt version tracking — A
- Safety and security regression testing — A
- Control effectiveness validation — A
- Root-cause analysis — A
- Remediation design review — B

## CORE 19 — Reporting, Research, Governance & Professional Operations

- **Importance:** A
- **Learning:** 30–50 hours — Effort B
- **Additional mastery:** 90–140 hours — Effort C
- **Total focused estimate:** 120–190 hours
- **Why it matters:** A technically interesting result has little professional value if the organization cannot reproduce it, understand its impact, or fix it.

### Subskills

- Rules of engagement — A
- Scope and authorization management — A
- Test planning — A
- Technical note-taking — A
- Evidence collection — A
- Safe handling of test data — A
- Reproduction steps — A
- Attack-chain documentation — A
- Root-cause explanation — A
- Severity and business impact — A
- Executive summaries — A
- Technical report writing — A
- Remediation recommendations — A
- Retest reports — A
- Clear diagrams and data-flow maps — B
- Client and stakeholder communication — A
- Presentation and debrief skills — B
- Responsible disclosure — A
- Research reading and source validation — A
- Keeping attack knowledge current — A

---

# 3. Additional Specializations

These are not mandatory for every AI Red Teamer. Choose based on target systems, employer, and desired depth.

| Specialization | Example subskills | Importance |
|---|---|---|
| Advanced Adversarial ML Research | Gradient-based attacks, robust optimization, adaptive attacks | C |
| Model Interpretability & Mechanistic Analysis | Interpretability, activation analysis, representation analysis | D |
| Secure Model Training Research | Robust training, data curation, training pipeline assurance | C |
| Reinforcement Learning Security | Policy manipulation, reward hacking, environment attacks | D |
| Federated Learning Security | Poisoning, inference, aggregation attacks | D |
| Hardware / GPU Security | GPU isolation, accelerator memory, hardware threat models | E |
| Robotics & Embodied AI Security | Sensors, actuators, planning, physical-world safety | D |
| Autonomous Vehicle AI Security | Perception, sensor fusion, adversarial physical inputs | D |
| AI for Cybersecurity Tooling | Security copilots, autonomous SOC agents, code agents | C |
| AI Coding Agent Security | Repository context, shell tools, code execution, CI permissions | B |
| AI Browser Agent Security | Browser context, web prompt injection, authenticated actions | B |
| AI Governance & Assurance | AI risk assessment, audit, regulatory mapping | C |
| Frontier Model Evaluation | Capability elicitation, dangerous capability evaluation, scalable oversight | D |
| AI Incident Forensics | Trace reconstruction, model/API logs, agent execution history | C |

---

# 4. Learning and Mastery Roadmap

The following order is recommended for a cybersecurity practitioner who already understands basic networking and operating systems. Existing cybersecurity skills can reduce the time required in CORE 01, but they do not replace AI/ML foundations.

## Phase 0 — Cybersecurity Bridge

**Estimated duration:** 2–4 weeks if the fundamentals are already familiar.

- Refresh API security, HTTP, authentication, authorization, and IAM.
- Refresh Python, Git, Linux, and basic cloud concepts.
- Build a small Python client that calls an authorized model API.
- Trace one user request through frontend, backend, model, and response.

**Exit criteria:** Can explain the security boundaries of a simple AI-backed web application.

## Phase 1 — AI & ML Foundations

**Estimated duration:** 6–9 weeks.

- CORE 02: Math and statistics foundations.
- CORE 03: AI and ML fundamentals.
- CORE 04: Deep learning and transformer / LLM architecture.

**Exit criteria:** Can explain training vs. inference, tokens, embeddings, attention, context windows, fine-tuning, and basic evaluation metrics.

## Phase 2 — Build and Understand AI Applications

**Estimated duration:** 6–9 weeks.

- CORE 05: Python and software engineering.
- CORE 06: AI application architecture.
- CORE 07: Prompt and context engineering.

**Exit criteria:** Can build and inspect a small LLM application with an API, prompt templates, session state, and structured output.

## Phase 3 — Core LLM Red Teaming

**Estimated duration:** 8–12 weeks.

- CORE 08: Threat modeling and methodology.
- CORE 09: Prompt injection, jailbreak, disclosure, output handling, and misuse testing.
- CORE 16: Evaluation science and automated test harnesses.
- CORE 19: Evidence and reporting fundamentals.

**Exit criteria:** Can plan, run, score, reproduce, and report an authorized LLM security assessment.

## Phase 4 — RAG and Agentic AI Security

**Estimated duration:** 8–12 weeks.

- CORE 10: RAG and knowledge-base security.
- CORE 11: Agent, tool, and MCP security.
- CORE 18: Detection and remediation validation.

**Exit criteria:** Can assess an authorized RAG application and an agent with tools, memory, and identity permissions; can prove impact safely and describe defensive controls.

## Phase 5 — Model-Level and Advanced AI Security

**Estimated duration:** 12–20 weeks or longer, depending on depth.

- CORE 12: Adversarial ML.
- CORE 13: Model privacy and intellectual property.
- CORE 14: Supply chain and MLOps.
- CORE 15: Multimodal security.
- CORE 17: AI safety and human-factor testing.

**Exit criteria:** Can select appropriate model-level, data-level, and multimodal tests and explain assumptions and limitations.

## Phase 6 — Professional Campaign & Specialization

**Estimated duration:** 8–12 weeks for a capstone; specialist development continues.

- Design a full, authorized AI Red Team engagement.
- Include model, application, data, RAG, agent, and infrastructure scope where available.
- Use an evaluation harness and human review.
- Document attack paths and measurable outcomes.
- Map findings to relevant AI security taxonomies.
- Present technical and executive reports.
- Retest fixes and create regression cases.
- Select one specialization for deeper research.

**Exit criteria:** Can independently lead a bounded AI Red Team assessment in a lab or explicitly authorized environment and defend the evidence and conclusions.

---

# 5. Estimated Time to Competency

The calendar estimates below assume consistent focused practice. They are planning ranges, not guarantees.

| Target level | What the person can do | Approximate focused effort |
|---|---|---:|
| AI Security Learner | Understands ML/LLM fundamentals and basic AI application architecture | 200–350h |
| Junior AI Red Team Practitioner | Runs scoped tests against a simple LLM application with supervision | 450–700h |
| Independent AI Application Red Teamer | Plans and performs assessments of LLM apps, APIs, RAG, and basic agents; reports reproducible findings | 900–1,400h |
| Advanced AI Red Teamer | Handles complex agents, evaluation automation, model/data security, detection assessment, and multi-component attack paths | 1,500–2,500h |
| AI Red Team Specialist / Researcher | Develops novel methods in selected areas such as adversarial ML, model privacy, multimodal attacks, or frontier model evaluations | 2,500h+ plus ongoing research |

At 15 focused hours per week, 900–1,400 hours is roughly 14–22 months. At 20 focused hours per week, it is roughly 11–16 months. Existing cybersecurity competence can shorten the foundation phase; lack of ML, Python, or statistics experience can extend it.

Do not interpret "mastery" as knowing every possible attack. Professional mastery means selecting sound tests, understanding the target, measuring results, handling uncertainty, proving real impact safely, and recognizing the limits of the assessment.

---

# 6. Tooling Map

Tools help execute and measure tests. They do not replace understanding of the system or manual validation.

| Tool / Framework | Primary purpose | Skill areas |
|---|---|---|
| Microsoft PyRIT | Automated and human-led GenAI red-team workflows, datasets, scenarios, attack strategies, converters, targets, scorers | CORE 09, 16 |
| NVIDIA garak | LLM vulnerability scanner using probes and detectors for unwanted model behaviour | CORE 09, 16 |
| UK AI Security Institute Inspect | Evaluation framework with tasks, datasets, solvers, scorers, agents, and tools | CORE 16, 17 |
| OWASP GenAI resources | Risk taxonomies, AI red-team methodology, practical guidance | CORE 08, 09, 10, 11 |
| MITRE ATLAS | Knowledge base for adversarial tactics and techniques against AI-enabled systems | CORE 08, 12, 14 |
| NIST AML Taxonomy | Terminology and taxonomy for adversarial ML threats and mitigations | CORE 02, 03, 12, 13 |

Suggested official starting points:

- PyRIT: https://microsoft.github.io/PyRIT/latest/
- garak: https://garak.ai/ and https://docs.garak.ai/
- Inspect: https://inspect.aisi.org.uk/
- OWASP GenAI Red Teaming Initiative: https://genai.owasp.org/initiatives/ai-red-teaming/
- OWASP GenAI Red Teaming Manual v1.0: https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/
- OWASP Top 10 for LLM and GenAI: https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/
- Microsoft AI Red Team: https://learn.microsoft.com/en-us/security/ai-red-team/
- NIST Adversarial ML Taxonomy: https://csrc.nist.gov/pubs/ai/100/2/e2025/final
- Inspect documentation: https://inspect.aisi.org.uk/

---

# 7. Capstone Project — Full AI Red Team Engagement

Build a lab that contains:

- An LLM-backed web application.
- A model endpoint (local or authorized hosted endpoint).
- A small synthetic knowledge base and RAG pipeline.
- A vector database.
- A simple agent with low-risk test tools.
- A mock user identity and role system.
- Logging and test-result storage.

Perform the following assessment:

1. Write scope, assumptions, safety limits, and success criteria.
2. Draw architecture and data-flow diagrams.
3. Identify trust boundaries, sensitive assets, and tool permissions.
4. Create a threat model and prioritized test plan.
5. Test direct and indirect prompt injection.
6. Test disclosure and cross-user data isolation using synthetic canary records.
7. Test RAG source integrity, retrieval filtering, and citation behaviour.
8. Test agent goal boundaries, tool permissions, approvals, and memory isolation.
9. Run automated scenarios and manually verify positive findings.
10. Review logs and identify detection gaps.
11. Write technical and executive reports.
12. Fix selected issues and run regression tests.

A capstone is complete only when it includes reproducible evidence, clear impact, limitations, remediation, and retest results.

---

# 8. AI Red Teamer Competency Checklist

A person should mark a skill complete only when they can demonstrate it in an unfamiliar but authorized test scenario.

- [ ] I can explain the architecture and lifecycle of an ML model and an LLM.
- [ ] I can trace a request through an AI application, model endpoint, data source, and tool integration.
- [ ] I can threat-model an AI system and define a safe test plan.
- [ ] I can test direct and indirect prompt injection and explain the observed impact.
- [ ] I can evaluate jailbreak and safety-control robustness without relying only on a copied prompt list.
- [ ] I can assess sensitive-data disclosure and user/tenant isolation.
- [ ] I can test a RAG system, including retrieval permissions and untrusted documents.
- [ ] I can assess an agent's tool permissions, memory, approvals, and action boundaries.
- [ ] I can use Python to automate test cases and analyze results.
- [ ] I can use an evaluation framework and understand its scoring limitations.
- [ ] I understand adversarial ML concepts and can perform selected controlled tests.
- [ ] I can assess relevant model, dataset, dependency, and deployment supply-chain risks.
- [ ] I can assess multimodal inputs when they are in scope.
- [ ] I can inspect logs and evaluate whether defensive controls detected the activity.
- [ ] I can reproduce findings, explain root cause, prioritize impact, and recommend mitigations.
- [ ] I can conduct a retest and turn a finding into a regression test.
- [ ] I can independently lead a bounded engagement in an explicitly authorized environment.

---

# 9. Professional boundary

All active testing must be limited to systems, models, datasets, accounts, and infrastructure that the tester owns or is expressly authorized to assess. Use synthetic data, isolated labs, rate limits, and clear stop conditions. Do not test real third-party AI endpoints, attempt to extract private user data, or trigger real-world agent actions without written authorization and an agreed test plan.

An AI Red Teamer may identify weaknesses and recommend mitigations. The product owner, ML engineer, application team, security team, and governance owners may implement different parts of the remediation. The red teamer's responsibility is to provide sound evidence and validate the effectiveness of fixes within the agreed scope.

---

# 10. Reference Frameworks and Reading

1. **NIST — Artificial Intelligence Red Teaming glossary:** https://csrc.nist.gov/glossary/term/artificial_intelligence_red_teaming
2. **NIST AI 100-2 E2025 — Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations:** https://csrc.nist.gov/pubs/ai/100/2/e2025/final
3. **OWASP — GenAI Red Teaming Manual v1.0 (2026-10-20):** https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/
4. **OWASP — GenAI Red Teaming Guide:** https://genai.owasp.org/resource/genai-red-teaming-guide/
5. **OWASP — Top 10 for LLM and GenAI:** https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/
6. **Microsoft — AI Red Team:** https://learn.microsoft.com/en-us/security/ai-red-team/
7. **Microsoft — PyRIT documentation:** https://microsoft.github.io/PyRIT/latest/
8. **NVIDIA — garak:** https://garak.ai/
9. **UK AI Security Institute — Inspect:** https://inspect.aisi.org.uk/
10. **Canadian Centre for Cyber Security — Careful adoption of agentic AI:** https://www.cyber.gc.ca/en/guidance/careful-adoption-agentic-ai

---

## Notes for converting this Markdown into an interactive website

- Treat each `CORE XX` heading as a parent node.
- Treat each `### Subskills` list item as a child node.
- Preserve the importance grade of every skill.
- Add separate fields for `learning_hours`, `mastery_hours`, `learning_effort_grade`, and `mastery_effort_grade` using the core-skill estimates.
- Do not confuse importance grade with effort grade.
- Add progress states: `Not Started`, `Learning`, `Practicing`, `Mastered`.
- Support notes, evidence links, lab references, and last-reviewed dates per skill.
- Display specialization branches separately from mandatory core skills.
- Avoid calculating a single total by summing all hours because skills overlap across projects and labs.
