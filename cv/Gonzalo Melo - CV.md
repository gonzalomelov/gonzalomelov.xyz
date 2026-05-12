# Gonzalo Melo

*Technical Product Manager / Product Lead · AI, Marketplaces, Web3, Payments & Developer Platforms*

**Location:** Uruguay (UTC/GMT -3)
**Email:** [gonzalomelov@gmail.com](mailto:gonzalomelov@gmail.com) · **Telegram:** [t.me/gonzalomelov](https://t.me/gonzalomelov)
**Website:** [gonzalomelov.com](https://gonzalomelov.com) · **GitHub:** [github.com/gonzalomelov](https://github.com/gonzalomelov) · **LinkedIn:** [linkedin.com/in/gonzalomelov](https://linkedin.com/in/gonzalomelov)
**Languages:** Spanish (native), English (full professional)

## Summary

Technical Product Manager and product-minded engineer with experience owning marketplace, AI, fintech, and Web3 products from 0→1 and at scale. Owned product roadmaps at The Sandbox (5M-user metaverse marketplace, 8-person cross-functional team) and at Technisys/Cyberbank (core-banking microservices platform for global financial institutions). Previously co-built an AI banking startup from inception to acquisition (KONA). Currently building an AI-agent-driven product studio focused on rapid validation, instrumentation, and launch systems.

## Experience

### Independent Engineer & Product · AI agent factory

**Sep 2025 - Present** · Building a product layer over AI coding and product agents, with guardrails to prevent drift on either side

- Built a planning + measurement system on top of GitHub Projects: Objectives → KRs → work issues on 7-day cycles, with scoring that separates shipping progress from market evidence so "did we ship" never gets confused with "what the market said." **9 cycles run to date.**
- Built guardrails on top of Claude Code with eight specialized sub-agents (planner, harsh reviewer, fix triager, visual verifier, builder, AI-integration, ICPs) covering plan → implement → review → merge for prioritized work.
- Built **birthdayinvites.app** as a live experiment, end-to-end through the factory loop. The system itself surfaced the opportunity by monitoring AI news (a new image model made cheap personalized invites viable), then specced and shipped it. Public live (checkout integrated, SEO indexed); mid-build, swapped Paddle for Lemon Squeezy in one cycle after Paddle rejected the domain as "Generative AI". Demonstrates the pipeline: market signal → niche selection → live experiment.

### Co-founder · [Fuzz AI](https://fuzz-ai.gitbook.io/fuzz-ai-docs)

**Jan 2025 - Aug 2025** · Security-research platform for AI agents (plus side product `agentize.art`)

- **Led product direction and agent-orchestration engineering**: built a security-research platform that runs autonomous AI agents in attack-and-defense simulations, generating empirical data on agent behavior under adversarial conditions. Built on the Virtuals Protocol (tokenization + co-ownership of AI agents). Funded through [Virtuals Protocol's AgentStarter](https://x.com/fuzzai_agent/status/1894041447663390879); [presented at ETHDenver 2025](https://youtu.be/8cweSDGrvq8?t=1950) (Virtuals / AgentStarter event).
- Built **`agentize.art`**: NFT-discovery platform built on an ElizaOS fork. Each user spun up their own "art agent" trained on their X profile and onchain footprint to recommend NFTs.

### Independent Engineer & Product · Onchain AI agent products

**Apr - Dec 2024** · Cycled through hackathons in the Web3/AI agent space to test what could stick; **Target Onchain** was the standout, reaching real users and shipping to the Shopify App Store.

- **[Target Onchain](https://targetonchain.xyz)** *(Jun - Jul 2024 · [Base Onchain Summer Buildathon](https://devfolio.co/projects/target-onchain-47c7) · [Shopify App Store](https://apps.shopify.com/target-onchain))*. [Farcaster](https://farcaster.xyz) (X-like decentralized social network) users carry onchain identity (POAPs, attestations, transactions) that ecommerce platforms don't use. Built a recommendation engine surfacing Shopify/Slice products based on each user's onchain transaction history and identity signals. Indexed **600k+ Farcaster wallets** and processed **500k+ EAS attestations** for the identity-scoring pipeline; served sub-1s personalized recommendations to a few thousand active users across **40+ Slice stores** via the Warpcast Composer Action. [GitHub](https://github.com/gonzalomelov/targetonchain) · [Figma](https://www.figma.com/design/Oky1Qoj6Z1en1UYTmdPzOe/Gonzalo-Melo?node-id=2022-198&t=x5DekbZsu4RrfhIo-4).
- **[AI Agent for Coinbase Wallet](https://realtimesmartwallet.vercel.app)** *(Oct - Nov 2024 · [Based LatAm](https://devfolio.co/projects/builtin-ai-agent-for-coinbase-wallet-6734))*. Blockchain UX is brutal for first-time users, and English-only tools shut LatAm out. Built a voice-controlled AI agent that operates a Coinbase Smart Wallet via natural-language commands. Solved the integration between OnchainKit and the OpenAI Realtime API with custom data-routing handlers. [Demo video](https://www.youtube.com/watch?v=TYVzOyeb1Wg) · [GitHub](https://github.com/gonzalomelov/openai-realtime-console-onchainkit).

### Full Stack Engineer · [Web3Pro](https://www.prnewswire.com/news-releases/web3-pro-closes-new-funding-round-in-further-sign-of-digital-ads-upheaval-301968499.html)

**Nov 2023 - Apr 2024** · Digital-collectibles marketplace SaaS for major brands (Ducati, Lamborghini)

- Migrated **Lamborghini's "The Epic Road Trip" NFT activation** to the newly developed Web3 Pro Hub platform; moved digital collectibles, community features, and reward systems while preserving brand customization.
- Extended the whitelabel marketplace: integrated Polygon and XRPL chain support, shipped E2E features for an NFT-rewards marketing surface.

### Technical Product Manager · [The Sandbox Marketplace](https://www.sandbox.game/en/shop)

**Oct 2022 - Sep 2023** · Voxel-gaming metaverse with a marketplace for user-created digital assets

- Owned the marketplace product for a platform reaching 5M users; led an 8-person cross-functional team (engineering, QA, UX).
- Ran **payments vendor evaluation** for a planned credit-card-to-NFT onramp: multi-vendor calls with Wert, Ramp, and Alchemy across geographic coverage, KYC handling, integration complexity, and partnership terms. Program-level decision was to defer fiat onramp; marketplace stayed on the incumbent (Venly) crypto-only flow.
- Led the marketplace's first **recommendation system**, shipped to a specific avatar collection as a contained launch. Hypothesis from purchase-history analysis: users buying assets from one brand IP frequently purchased avatars from adjacent IPs. Partnered with the ML team on modeling and offline eval; post-launch attribution was confounded by the broader bear-market cycle dominating marketplace volume, so it ran as a scoped learning launch rather than a revenue claim.
- Shaped AI-based image moderation for user-generated NFT content (with the ML team and end-users): defined detection criteria, quality thresholds, and rollout sequencing.
- Drove the Polygon migration enabling minting of 9k NFTs with [CATALYST](https://opensea.io/collection/the-sandbox-s-catalysts).
- Sequenced delivery against game-side dependencies, balancing platform stability with new capabilities.

### Product Owner · [Technisys / Cyberbank](https://www.technisys.com) *(acq. by Galileo)*

**Mar 2021 - Feb 2022** · Microservices core-banking platform for global financial institutions

- Owned the end-to-end product lifecycle and market fit of the [Cyberbank](https://www.technisys.com/cyberbank) microservices platform; defined API specs and roadmap for 10 engineers across Authentication, Authorization, Transactions, and Event Handling.
- Defined cross-functional success criteria spanning data management, scalability, and fault tolerance; led the Scrum team to internal OKRs.
- Operated as the connective layer between platform engineers, partner banks, and downstream Cyberbank product teams.

### Partner & Engineering Lead · [KONA](https://www.linkedin.com/company/konaai) *(acq. by Technisys)*

**Mar 2015 - Mar 2021** · Conversational AI for banking, zero to acquisition

- Co-built and grew the AI/Conversational platform ([KONECTA](https://www.technisys.com/cyberbank/cyberbank-konecta)) from inception to acquisition; one of the earliest hires after the co-founders, eventually a Technical Business Partner.
- Led delivery for Scotiabank Canada ([chatbot](https://www.scotiabank.com/ca/en/personal/bank-your-way/digital-banking-guide/banking-basics/chatbot.html), [used cars marketplace](https://autos.sbcrbienesalaventa.com), [Scotia Home Show](https://casas.sbcrbienesalaventa.com)) and Banco Santander Uruguay ([first BFSI chatbot in Uruguay](https://www.elobservador.com.uy/nota/itau-brou-santander-como-funcionan-los-whatsapp-de-los-bancos-20226205055), RPA, [loan simulator](https://www.ambito.com/negocios/santander/y-mercado-libre-lanzaron-un-sistema-financiamiento-online-la-compra-autos-n5163514)).
- Progressed from Full Stack Engineer to Engineering Manager, running cross-functional BFSI teams.
- **Drove ML workflow for chatbot quality**: clustered Santander conversation logs to surface user intents; defined goals, quality thresholds, and client-facing eval criteria for a document/image-recognition model (Uruguayan ID detection); iterated against real conversation data across BFSI rollouts.
- Aligned client vision with delivery; led backend and cloud-deployment workstreams (Node.js, Python, Docker, Kubernetes, AWS, Cloudflare).

## Skills

- **Product leadership:** roadmap ownership, 0→1 product discovery, OKRs/KRs, marketplace strategy, experimentation, stakeholder management, cross-functional delivery, vendor evaluation, post-launch measurement.
- **Technical product:** API design, AI/LLM workflows, payments/onramps, marketplace systems, data pipelines, moderation systems, observability, integration design.
- **Domains:** AI agents, fintech/core banking, Web3/NFT marketplaces, ecommerce personalization, developer tooling.
- **Technical fluency:** TypeScript, Python, SQL, Next.js, Node.js, NestJS, PostgreSQL, GraphQL, Docker, AWS, Vercel, PostHog, Sentry.

## Education

- **Postgraduate Specialist Diploma in Technology Management**, [Universidad de la República](https://www.fing.edu.uy), Uruguay · Aug 2019 - Jun 2021
- **B.S. in Computer Science**, [Universidad de la República](https://www.fing.edu.uy), Uruguay · 2008 - 2019. Final project: BI platform analyzing Montevideo air-quality data from AGESIC + Intendencia de Montevideo open datasets: ETL pipelines, OLAP cubes, geospatial queries (Pentaho, PostgreSQL/PostGIS).
- **Certified Scrum Product Owner (CSPO)**, Scrum Alliance
