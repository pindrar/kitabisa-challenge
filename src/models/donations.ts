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

export interface Donation {
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

function getPercentage(value: number) {
  const percentage = value * 100;
  return percentage >= 100 ? 100 : Math.ceil(percentage);
}

function compareRemainingDay(a: Donation, b: Donation) {
  if (a.remaining < b.remaining) {
    return 1;
  }
  if (a.remaining > b.remaining) {
    return -1;
  }
  return 0;
}

function compareGoals(a: Donation, b: Donation) {
  if (a.percentage < b.percentage) {
    return 1;
  }
  if (a.percentage > b.percentage) {
    return -1;
  }
  return 0;
}

export function getDonations(sort: string | "newest" | "goals") {
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
      percentage: getPercentage(key.donation_percentage),
      received: key.donation_received,
      target: key.donation_target,
      order: key.order,
    };

    donationsArray.push(donation);
  });

  const donationsSort = [...donationsArray];

  if (sort === "newest") donationsSort.sort(compareRemainingDay);
  if (sort === "goals") donationsSort.sort(compareGoals);

  return donationsSort;
}
