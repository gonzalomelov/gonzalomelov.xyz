# Gonzalo Melo

*Technical Product Manager / Product Lead · AI, Marketplaces, Payments & Developer Platforms*

**Location:** Uruguay (UTC/GMT -3)
**Email:** [gonzalomelov@gmail.com](mailto:gonzalomelov@gmail.com) · **Telegram:** [t.me/gonzalomelov](https://t.me/gonzalomelov)
**Website:** [gonzalomelov.com](https://gonzalomelov.com) · **GitHub:** [github.com/gonzalomelov](https://github.com/gonzalomelov) · **LinkedIn:** [linkedin.com/in/gonzalomelov](https://linkedin.com/in/gonzalomelov)
**Languages:** Spanish (native), English (full professional)

## Summary

Technical Product Manager and product-minded engineer with experience owning marketplace, AI, and fintech products from 0→1 and at scale. Owned product roadmaps at The Sandbox (5M-user gaming marketplace, 8-person cross-functional team) and at Technisys/Cyberbank (core-banking microservices platform for global financial institutions). Previously co-built an AI banking startup from inception to acquisition (KONA). Currently building an AI-agent-driven product studio focused on rapid validation, instrumentation, and launch systems.

## Experience

### Independent Engineer & Product · AI agent factory

**Sep 2025 - Present** · Building a product layer over AI coding and product agents, with guardrails to prevent drift on either side

- Built **[OutcomeRails](https://outcomerails.bygmv.com)** (beta), a product-strategy agent that runs the full product loop above coding agents: infers a product's objective from its repo, encodes strategy as measurable goals on 7-day cycles, originates and prioritizes the work, gates it with evidence checks, and closes each cycle with a continue/pivot/kill verdict that feeds the next one.
- Runs that loop as autonomously as possible through a factory of four registered loops (coding, product, distribution, company), with guardrails on top of Claude Code via specialized sub-agents (planner, harsh reviewer, fix triager, visual verifier, builder, AI-integration, ICPs) covering plan → implement → review → merge.
- Built **birthdayinvites.app** as a live experiment, end-to-end through the factory loop. The system itself surfaced the opportunity by monitoring AI news (a new image model made cheap personalized invites viable), then specced and shipped it. Public live (checkout integrated, SEO indexed); mid-build, swapped Paddle for Lemon Squeezy in one cycle after Paddle rejected the domain as "Generative AI".

### Technical Lead (project-based) · [Moose](https://moose.uy)

**Jun 2024 - Present** · Uruguayan eLearning software company; concurrent with independent product work

- Technical leadership of educational-platform projects, including LMS platforms: design and implementation of backend and frontend solutions, integrations via REST APIs, deployment of scalable web solutions, and cloud architecture.

### Co-founder · [Fuzz AI](https://fuzz-ai.gitbook.io/fuzz-ai-docs)

**Jan 2025 - Aug 2025** · Security-research platform for AI agents

- **Led product direction and agent-orchestration engineering**: built a security-research platform that runs autonomous AI agents in attack-and-defense simulations, generating empirical data on agent behavior under adversarial conditions.

### Independent Engineer & Product · AI agent products

**Apr - Dec 2024** · Cycled through hackathons in the AI-agent space to test what could stick; **Target Onchain** was the standout, reaching real users and shipping to the Shopify App Store.

- **Target Onchain** *(Jun - Jul 2024 · [Base Onchain Summer Buildathon](https://devfolio.co/projects/target-onchain-47c7) · [Shopify App Store](https://apps.shopify.com/target-onchain))*. [Farcaster](https://farcaster.xyz) (an X-like social network) users carry identity signals that ecommerce platforms don't use. Built a recommendation engine surfacing Shopify/Slice products based on each user's history and identity signals: indexed **600k+ records** and served sub-1s personalized recommendations to a few thousand active users across **40+ Slice stores** ([GitHub](https://github.com/gonzalomelov/targetonchain)).
- **[AI Agent for Coinbase Wallet](https://realtimesmartwallet.vercel.app)** *(Oct - Nov 2024 · [Based LatAm](https://devfolio.co/projects/builtin-ai-agent-for-coinbase-wallet-6734))*. Onboarding UX is brutal for first-time users, and English-only tools shut LatAm out. Built a voice-controlled AI agent that operates a Coinbase Smart Wallet via natural-language commands. Solved the OnchainKit + OpenAI Realtime API integration with custom data-routing handlers. [Demo video](https://www.youtube.com/watch?v=TYVzOyeb1Wg) · [GitHub](https://github.com/gonzalomelov/openai-realtime-console-onchainkit).

### Full Stack Engineer · [Web3Pro](https://www.prnewswire.com/news-releases/web3-pro-closes-new-funding-round-in-further-sign-of-digital-ads-upheaval-301968499.html)

**Nov 2023 - Apr 2024** · Digital-collectibles marketplace SaaS for major brands (Ducati, Lamborghini)

- Migrated **Lamborghini's "The Epic Road Trip" digital-collectibles activation** to the newly developed Web3 Pro Hub platform; moved digital collectibles, community features, and reward systems while preserving brand customization.
- Diagnosed a roughly 33% drop-off in the cross-chain collectibles migration flow (holders burned on one chain but never completed the separate claim on the other) and redesigned it to authenticate the destination address before the burn in one continuous session, cutting drop-off to roughly 16%.
- Extended the whitelabel marketplace: added additional platform integrations, shipped E2E features for a rewards marketing surface.

### Technical Product Manager · [The Sandbox Marketplace](https://www.sandbox.game/en/shop)

**Oct 2022 - Sep 2023** · Gaming platform with a marketplace for user-created digital assets

- Owned the marketplace product for a platform reaching 5M users; led an 8-person cross-functional team (engineering, QA, UX).
- Ran **payments vendor evaluation** for a planned card-to-digital-asset onramp: multi-vendor calls with Wert, Ramp, and Alchemy across geographic coverage, KYC handling, integration complexity, and partnership terms. Program-level decision was to defer fiat onramp; marketplace stayed on the incumbent provider.
- Led the marketplace's first **recommendation system**, shipped to a specific avatar collection as a contained launch. Hypothesis from purchase-history analysis: users buying assets from one brand IP frequently purchased avatars from adjacent IPs. Switching the "See More" module to same-collection recommendations lifted its click-through rate roughly 50%; post-launch purchase attribution was confounded by the broader bear-market cycle dominating marketplace volume, so revenue impact was reported as a learning launch rather than a claim.
- Shaped AI-based image moderation for user-generated content (with the ML team and end-users): defined detection criteria, quality thresholds, and rollout sequencing.
- Drove a platform migration that cut minting and purchase fees, enabling minting of 9k digital collectibles with [CATALYST](https://opensea.io/collection/the-sandbox-s-catalysts) and lifting marketplace liquidity roughly 35% and sales roughly 18%.

### Product Owner · [Technisys / Cyberbank](https://www.technisys.com) *(acq. by Galileo)*

**Mar 2021 - Feb 2022** · Microservices core-banking platform for global financial institutions

- Owned the end-to-end product lifecycle and market fit of the [Cyberbank](https://www.technisys.com/cyberbank) microservices platform; defined API specs and roadmap for 10 engineers across Authentication, Authorization, Transactions, and Event Handling.
- Defined cross-functional success criteria spanning data management, scalability, and fault tolerance; led the Scrum team to internal OKRs, operating as the link between platform engineers, partner banks, and downstream product teams.

### [KONA](https://www.linkedin.com/company/konaai) *(acq. by Technisys)* · Conversational AI for banking

**Mar 2015 - Mar 2021** · Joined as a partner right after the founders; grew with the company through three roles to acquisition, eventually a Technical Business Partner

**Engineering Manager** · Mar 2019 - Mar 2021

- Led delivery and client engagement for Scotiabank Canada ([chatbot](https://www.scotiabank.com/ca/en/personal/bank-your-way/digital-banking-guide/banking-basics/chatbot.html)) and Banco Santander Uruguay ([first BFSI chatbot in Uruguay](https://www.elobservador.com.uy/nota/itau-brou-santander-como-funcionan-los-whatsapp-de-los-bancos-20226205055)), setting product direction for [KONECTA](https://www.technisys.com/cyberbank/cyberbank-konecta) and running presales and product presentations inside both banks, in Spanish and English.
- Moved a paid phone/IVR bank request onto the WhatsApp chatbot, cutting the bank's cost for that flow roughly 80%; ML clustering of conversation logs then surfaced a manual processing backlog that an RPA reduced to nearly zero.

**Technical Project Manager** · Sep 2016 - Mar 2019

- Scoped and shipped bank products end-to-end for Scotiabank Canada ([used cars marketplace](https://autos.sbcrbienesalaventa.com), [Scotia Home Show](https://casas.sbcrbienesalaventa.com), ScotiabankGo QR payments), Banco Santander Uruguay (RPA, [loan simulator](https://www.ambito.com/negocios/santander/y-mercado-libre-lanzaron-un-sistema-financiamiento-online-la-compra-autos-n5163514)), Banco Agrícola, and GlobalBank Panamá.
- **Drove ML workflow for chatbot quality**: clustered Santander conversation logs to surface user intents; defined goals, quality thresholds, and client-facing eval criteria for a document/image-recognition model (Uruguayan ID detection); built KYC identity verification into the Scotiabank onboarding flow (VuSecurity facial recognition, custom on-prem OCR).

**Full Stack Engineer & Software Architect** · Mar 2015 - Sep 2016

- Led software projects end-to-end as the projects' ultimate responsible and the clients' main focal point.

## Skills

- **Product leadership:** roadmap ownership, 0→1 product discovery, OKRs/KRs, marketplace strategy, experimentation, stakeholder management, cross-functional delivery.
- **Technical product:** API design, AI/LLM workflows, payments/onramps, marketplace systems, data pipelines, moderation systems, observability, integration design.
- **Technical fluency:** TypeScript, Python, SQL, Next.js, Node.js, NestJS, PostgreSQL, GraphQL, Docker, AWS, Vercel, PostHog, Sentry.

## Education

- **Postgraduate Specialist Diploma in Technology Management**, [Universidad de la República](https://www.fing.edu.uy), Uruguay · Aug 2019 - Jun 2021
- **B.S. in Computer Science**, [Universidad de la República](https://www.fing.edu.uy), Uruguay · 2008 - 2019.
- **Certified Scrum Product Owner (CSPO)**, Scrum Alliance
