export const BAARA_AI_CONFIG = {
  referralLink:
    process.env.NEXT_PUBLIC_MERCOR_REFERRAL_LINK || "https://t.mercor.com/S0VZG",
  referralCode:
    process.env.NEXT_PUBLIC_MERCOR_REFERRAL_CODE || "S0VZG",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "19173992172",
  supportedCountriesUrl:
    "https://talent.docs.mercor.com/policies/supported-countries",
} as const;

export function getWhatsAppUrl(
  number: string = BAARA_AI_CONFIG.whatsappNumber,
  text: string = "Bonjour, je souhaite des informations sur les opportunités Mercor via Baara AI"
): string {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
