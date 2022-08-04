export interface DonationResponse {
  campaigner: string;
  campaigner_badge: string;
  campaigner_is_verified: boolean;
  campaigner_type: string;
  category_name: string;
  days_remaining: number;
  donation_percentage: number;
  donation_received: number;
  donation_target: number;
  image: string;
  order: number;
  title: string;
}

interface Donation {
  campaigner: string;
  badge: string;
  verified: boolean;
  type: string;
  category: string;
  remaining: number;
  percentage: number;
  received: number;
  target: number;
  image: string;
  order: number;
  title: string;
}

let donations: Array<DonationResponse>;

export function setDonations(data: Array<DonationResponse>) {
  donations = data;
}

export function getDonations() {
  let donationsArray: Donation[] = [];
  donations.map((key) => {
    const donation: Donation = {
      title: key.title,
      campaigner: key.campaigner,
      verified: key.campaigner_is_verified,
      badge: key.campaigner_badge,
      image: key.image,
      type: key.campaigner_type,
      category: key.category_name,
      remaining: key.days_remaining,
      percentage: key.donation_percentage * 100,
      received: key.donation_received,
      target: key.donation_target,
      order: key.order,
    };

    donationsArray.push(donation)
  });

  return donationsArray;
}
