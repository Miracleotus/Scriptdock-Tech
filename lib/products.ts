export type Product = {
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  sku: string;
  category: string;
};

export const products: Product[] = [
  {
    name: "Custom Corporate Website",
    shortDescription: "Professional 5-page business website.",
    fullDescription: "A fully responsive, SEO-optimized 5-page website tailored to your brand. Includes custom UI/UX design, contact forms, CMS setup, and up to 3 rounds of revisions.",
    price: 1500.00,
    sku: "SDT-WEB-01",
    category: "Web Development"
  },
  {
    name: "E-Commerce Starter Store",
    shortDescription: "WooCommerce setup with up to 50 products.",
    fullDescription: "Launch your online store quickly. Includes secure payment gateway integration, responsive design, up to 50 uploaded products, and inventory management training.",
    price: 2800.00,
    sku: "SDT-ECO-01",
    category: "E-Commerce"
  },
  {
    name: "Advanced E-Commerce Architecture",
    shortDescription: "High-performance custom store for scaling businesses.",
    fullDescription: "High-performance custom store architecture. Includes advanced product filtering, custom cart/checkout experiences, CRM integration, and abandoned cart systems.",
    price: 6500.00,
    sku: "SDT-ECO-02",
    category: "E-Commerce"
  },
  {
    name: "Custom Web Application",
    shortDescription: "Bespoke web app built to your specifications.",
    fullDescription: "End-to-end development of custom web software (e.g., portals, SaaS dashboards). Built using modern stacks (React/Node.js). Includes database architecture and QA.",
    price: 9500.00,
    sku: "SDT-APP-01",
    category: "Software Dev"
  },
  {
    name: "Minimum Viable Product (MVP) Dev",
    shortDescription: "Rapid prototyping and development for startups.",
    fullDescription: "Get your startup idea to market fast. We build a functional, scalable MVP of your software within 6-8 weeks to help you secure funding and user feedback.",
    price: 12000.00,
    sku: "SDT-MVP-01",
    category: "Software Dev"
  },
  {
    name: "API Integration Service",
    shortDescription: "Seamlessly connect third-party tools to your systems.",
    fullDescription: "We will integrate third-party APIs (payment gateways, CRMs, marketing tools, mapping systems) into your existing website or application securely and efficiently.",
    price: 850.00,
    sku: "SDT-API-01",
    category: "Integration"
  },
  {
    name: "Monthly Tech Retainer (Tier 1)",
    shortDescription: "10 hours of ongoing development and updates.",
    fullDescription: "Dedicated monthly hours for feature additions, code refactoring, system updates, and priority bug fixing. Unused hours roll over to the next month (up to 30 days).",
    price: 800.00,
    sku: "SDT-RET-01",
    category: "Maintenance"
  },
  {
    name: "Website Performance Optimization",
    shortDescription: "Boost your website's loading speed for better UX.",
    fullDescription: "We optimize images, minify CSS/JS, leverage browser caching, and fine-tune your server to ensure your website loads in under 3 seconds and passes Core Web Vitals.",
    price: 450.00,
    sku: "SDT-OPT-01",
    category: "Web Development"
  },
  {
    name: "Technical SEO Audit",
    shortDescription: "Deep dive into your site's technical architecture.",
    fullDescription: "A comprehensive audit of your website's code, schema markup, mobile-friendliness, and crawlability. Includes an actionable PDF report for your dev team.",
    price: 600.00,
    sku: "SDT-SEO-01",
    category: "Digital Marketing"
  },
  {
    name: "Premium Cloud Hosting & Setup (1 Yr)",
    shortDescription: "High-speed, secure cloud hosting with SSL.",
    fullDescription: "Managed cloud hosting tailored for web applications. Includes free SSL certificate setup, domain connection, daily automated backups, and caching optimization.",
    price: 350.00,
    sku: "SDT-HST-01",
    category: "Infrastructure"
  },
  {
    name: "Website Migration Service",
    shortDescription: "Move your website to a new host with zero downtime.",
    fullDescription: "Securely transfer your files, databases, and emails to a new hosting provider without losing data, breaking links, or impacting your site's availability.",
    price: 500.00,
    sku: "SDT-MIG-01",
    category: "Infrastructure"
  },
  {
    name: "System Architecture Consultation",
    shortDescription: "Talk to a senior software architect.",
    fullDescription: "A focused, 90-minute strategy call to discuss system architecture, technology stacks, project feasibility, or to troubleshoot complex technical roadblocks.",
    price: 250.00,
    sku: "SDT-CON-01",
    category: "Consulting"
  },
  {
    name: "UI/UX Wireframing Package",
    shortDescription: "Visual blueprints for your digital product.",
    fullDescription: "High-fidelity interactive prototypes. Includes user research, user journey mapping, wireframing, and final UI screens ready for handoff to our developers.",
    price: 2200.00,
    sku: "SDT-DES-01",
    category: "UI/UX Design"
  },
  {
    name: "WordPress Security Hardening",
    shortDescription: "Protect your site from malware and brute-force attacks.",
    fullDescription: "Implementation of web application firewalls, login rate limiting, database prefix changes, and a complete malware sweep of your current WordPress installation.",
    price: 400.00,
    sku: "SDT-SEC-01",
    category: "Security"
  },
  {
    name: "Database Migration & Optimization",
    shortDescription: "Restructure and speed up your database queries.",
    fullDescription: "We analyze slow databases, write optimized SQL queries, set up proper indexing, and migrate legacy data to modern, scalable database solutions (SQL or NoSQL).",
    price: 1800.00,
    sku: "SDT-DAT-01",
    category: "Software Dev"
  }
];