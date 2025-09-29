export interface SiteConfig {
  businessName: string;
  abn?: string;
  phone: string;
  email: string;
  address: { line1: string; suburb: string; state: "VIC"; postcode: string };
  serviceAreas: string[];
  social?: { facebook?: string; instagram?: string };
  theme?: {
    primary?: string;
    radiusMd?: string;
    dataTheme?: "landscaping" | "cleaning" | "handyman";
  };
}

export const siteConfig: SiteConfig = {
  businessName: "Acme Landscaping",
  phone: "03 5550 1234",
  email: "hello@acmelawns.com.au",
  address: {
    line1: "1 High St",
    suburb: "Geelong",
    state: "VIC",
    postcode: "3220",
  },
  serviceAreas: ["Geelong", "Bellarine", "Surf Coast"],
  theme: { dataTheme: "landscaping", primary: "16 185 129" }, // teal-500-ish
};
