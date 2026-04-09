import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

/* ── Animated SVG: client / server gRPC exchange ── */
function NetworkVisualization() {
    return (
        <svg viewBox="0 0 760 300" className={styles.netSvg}>
            <defs>
                <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#00d4ff"
                        strokeWidth="0.3"
                        opacity="0.12"
                    />
                </pattern>
                <filter id="node-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient
                    id="link-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.5" />
                    <stop
                        offset="100%"
                        stopColor="#00d4ff"
                        stopOpacity="0.9"
                    />
                </linearGradient>
            </defs>

            <rect width="760" height="300" fill="url(#grid)" opacity="0.5" />

            {/* Connection lines between client and the three servers */}
            <line
                x1="140"
                y1="150"
                x2="600"
                y2="80"
                stroke="url(#link-grad)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.55"
            />
            <line
                x1="140"
                y1="150"
                x2="600"
                y2="150"
                stroke="url(#link-grad)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.55"
            />
            <line
                x1="140"
                y1="150"
                x2="600"
                y2="220"
                stroke="url(#link-grad)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.55"
            />

            {/* Client node */}
            <circle
                cx="140"
                cy="150"
                r="9"
                fill="#00d4ff"
                filter="url(#node-glow)"
                className={styles.netNode}
            />
            <text
                x="140"
                y="186"
                fill="#8fa4b8"
                fontSize="10"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
                letterSpacing="0.08em"
            >
                CLIENT
            </text>
            <text
                x="140"
                y="200"
                fill="#5a7089"
                fontSize="8"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
            >
                framework
            </text>

            {/* Server nodes */}
            {[
                { y: 80, label: "AERO", sub: "explicit" },
                { y: 150, label: "STRUCT", sub: "implicit" },
                { y: 220, label: "PROP", sub: "explicit" },
            ].map((s, i) => (
                <g key={i}>
                    <circle
                        cx="600"
                        cy={s.y}
                        r="8"
                        fill="#ff6b35"
                        filter="url(#node-glow)"
                        className={styles.netNode}
                        style={{ animationDelay: `${i * 0.3}s` }}
                    />
                    <text
                        x="620"
                        y={s.y + 4}
                        fill="#8fa4b8"
                        fontSize="10"
                        fontFamily="var(--font-mono)"
                        letterSpacing="0.08em"
                    >
                        {s.label}
                    </text>
                    <text
                        x="620"
                        y={s.y + 16}
                        fill="#5a7089"
                        fontSize="7"
                        fontFamily="var(--font-mono)"
                    >
                        {s.sub}
                    </text>
                </g>
            ))}

            {/* Packets traveling along the wires */}
            <circle
                r="3"
                fill="#00d4ff"
                className={styles.netPacket}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 80')",
                    animationDelay: "0s",
                }}
            />
            <circle
                r="3"
                fill="#ff6b35"
                className={styles.netPacketReverse}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 80')",
                    animationDelay: "1.7s",
                }}
            />
            <circle
                r="3"
                fill="#00d4ff"
                className={styles.netPacket}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 150')",
                    animationDelay: "0.6s",
                }}
            />
            <circle
                r="3"
                fill="#ff6b35"
                className={styles.netPacketReverse}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 150')",
                    animationDelay: "2.3s",
                }}
            />
            <circle
                r="3"
                fill="#00d4ff"
                className={styles.netPacket}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 220')",
                    animationDelay: "1.2s",
                }}
            />
            <circle
                r="3"
                fill="#ff6b35"
                className={styles.netPacketReverse}
                style={{
                    offsetPath:
                        "path('M 140 150 L 600 220')",
                    animationDelay: "2.9s",
                }}
            />

            {/* Footer label */}
            <text
                x="380"
                y="278"
                fill="#5a7089"
                fontSize="9"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
                letterSpacing="0.12em"
            >
                gRPC // PHILOTE-MDO
            </text>
        </svg>
    );
}

/* ── Feature card ── */
type FeatureItem = {
    label: string;
    title: string;
    description: string;
};

const features: FeatureItem[] = [
    {
        label: "STANDARD",
        title: "Protocol Definition",
        description:
            "Language-agnostic data and communication standard for MDO, defined with Protocol Buffers and gRPC.",
    },
    {
        label: "DISCIPLINES",
        title: "Explicit & Implicit",
        description:
            "First-class support for both explicit function evaluations and residual-based implicit discipline formulations with analytic derivatives.",
    },
    {
        label: "POLYGLOT",
        title: "Any Language",
        description:
            "Disciplines can be implemented in any language with gRPC support -- Python, C++, Rust, Go, Java, Kotlin, and more.",
    },
    {
        label: "DISTRIBUTED",
        title: "Network Native",
        description:
            "Decouples discipline and framework development. Run analyses on dedicated servers and call them from any compatible MDO framework.",
    },
];

function FeatureCard({ label, title, description }: FeatureItem) {
    return (
        <div className={styles.featureCard}>
            <span className={styles.featureLabel}>{label}</span>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDesc}>{description}</p>
        </div>
    );
}

/* ── Code preview ── */
function CodePreview() {
    const code = `service ExplicitService {
    // Calls the discipline Compute function
    rpc ComputeFunction(stream Array)
        returns (stream Array) {}

    // Calls the discipline ComputePartials function
    rpc ComputeGradient(stream Array)
        returns (stream Array) {}
}`;

    return (
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
                <span className={styles.codeDotOrange} />
                <span className={styles.codeDotCyan} />
                <span className={styles.codeFilename}>disciplines.proto</span>
            </div>
            <pre className={styles.codePre}>{code}</pre>
        </div>
    );
}

/* ── Stat ── */
function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className={styles.stat}>
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
}

/* ── Hero ── */
function Hero() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.hero}>
            <div className={styles.heroGlow} />
            <div className={styles.heroInner}>
                <div className={styles.heroSuper}>
                    Open MDO Standard
                </div>
                <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
                <p className={styles.heroTagline}>
                    An open standard for language-agnostic, distributed
                    multidisciplinary design optimization built on gRPC and
                    Protocol Buffers
                </p>
                <div className={styles.heroCtas}>
                    <Link
                        to="/docs/getting-started/intro"
                        className={styles.ctaPrimary}
                    >
                        Read the Docs
                    </Link>
                    <Link
                        to="https://github.com/MDO-Standards/Philote-MDO"
                        className={styles.ctaSecondary}
                    >
                        View on GitHub
                    </Link>
                </div>
                <div className={styles.netWrap}>
                    <NetworkVisualization />
                </div>
            </div>
        </header>
    );
}

/* ── Page ── */
export default function Home(): ReactNode {
    return (
        <Layout description="An open standard for distributed multidisciplinary design optimization built on gRPC and Protocol Buffers">
            <Hero />

            <section className={styles.statsBar}>
                <div className={styles.statsInner}>
                    <Stat value="gRPC" label="Transport" />
                    <Stat value="Protobuf" label="Serialization" />
                    <Stat value="12+" label="Languages" />
                    <Stat value="Apache-2" label="License" />
                </div>
            </section>

            <main className={styles.featuresSection}>
                <div className={styles.featuresInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            Capabilities
                        </span>
                        <h2 className={styles.sectionTitle}>
                            Built for Multidisciplinary Workflows
                        </h2>
                    </div>

                    <div className={styles.featuresGrid}>
                        {features.map((f, i) => (
                            <FeatureCard key={i} {...f} />
                        ))}
                    </div>

                    <div className={styles.codeSection}>
                        <span className={styles.sectionLabelSmall}>
                            Define a Service
                        </span>
                        <CodePreview />
                    </div>
                </div>
            </main>
        </Layout>
    );
}
