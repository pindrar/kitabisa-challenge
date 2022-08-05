import * as axios from "axios";
import { getDomain, getDonationsResponse } from "../src/api/api"

const data = [
  {
    id: 94597,
    order: 1,
    parent_project_id: 0,
    title: "#BisaBangkit Bersama Kitabisa",
    expired: 2147483647,
    image:
      "https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg",
    days_remaining: 0,
    donation_received: 178613497,
    campaigner: "Kitabisa.com",
    campaigner_type: "PERSONAL",
    campaigner_badge:
      "https://assets.kitabisa.com/images/icon__verified-user.svg",
    campaigner_is_verified: true,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 500000000,
    donation_percentage: 0.357227,
    short_url: "bisabangkit",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 29755,
    order: 2,
    parent_project_id: 0,
    title: "ponpes al-muawanah tasikmalaya kebakaran",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/29755/31__1489611820_67821505206_f.jpg",
    days_remaining: 0,
    donation_received: 600711,
    campaigner: "Saepul Aziz",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 300000000,
    donation_percentage: 0.00200237,
    short_url: "bantuankebakaran",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 78942,
    order: 3,
    parent_project_id: 0,
    title: "Bantu Korban Gempa dan Tsunami Palu-Donggala",
    expired: 1609433999,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/78942/31_78942_1545049253_878259_f.jpg",
    days_remaining: 85,
    donation_received: 17024031016,
    campaigner: "Dany",
    campaigner_type: "PERSONAL",
    campaigner_badge:
      "https://assets.kitabisa.com/images/icon__verified-user.svg",
    campaigner_is_verified: true,
    category_name: "Bencana Alam",
    is_forever_running: false,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 30000000000,
    donation_percentage: 0.567468,
    short_url: "peduligempadonggala",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 95686,
    order: 4,
    parent_project_id: 0,
    title: "URGENT! Peduli Korban Tsunami Banten dan Lampung",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95686/31_95686_1545889945_205911_f.jpg",
    days_remaining: 0,
    donation_received: 5744489104,
    campaigner: "Ahmad Lagi",
    campaigner_type: "PERSONAL",
    campaigner_badge:
      "https://assets.kitabisa.com/images/icon__verified-user.svg",
    campaigner_is_verified: true,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: true,
    request_userdata: false,
    donation_target: 2500000000000,
    donation_percentage: 0.0022978,
    short_url: "tsunamibanten",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 45695,
    order: 5,
    parent_project_id: 0,
    title: "BANTU KELUARGA KORBAN KEBAKARAN",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/45695/31__1511333547_84686577928_f.jpg",
    days_remaining: 0,
    donation_received: 742792,
    campaigner: "Bukos Bogor",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 100000000,
    donation_percentage: 0.00742792,
    short_url: "banturumahkebakaran",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 42043,
    order: 6,
    parent_project_id: 0,
    title: "Bantu sekolah dan rumah diterjang banjir",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/42043/31_42043_1507197617_794756_f.png",
    days_remaining: 0,
    donation_received: 856491,
    campaigner: "Ipmkabbogor",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 300000000,
    donation_percentage: 0.00285497,
    short_url: "banjirbogor",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 35196,
    order: 7,
    parent_project_id: 0,
    title: "Bantu Korban Kebakaran Palembang",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/35196/31__1497021712_77171538167_f.jpg",
    days_remaining: 0,
    donation_received: 60826,
    campaigner: "Reza Saputra",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 1000000000,
    donation_percentage: 0.000060826,
    short_url: "kebakaranpalembang",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 95887,
    order: 8,
    parent_project_id: 95686,
    title: "Rachel Untuk Tsunami Banten dan Lampung",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95887/31_95887_1545573085_140965_f.jpg",
    days_remaining: 0,
    donation_received: 522089246,
    campaigner: "Rachel Vennya",
    campaigner_type: "PERSONAL",
    campaigner_badge:
      "https://assets.kitabisa.com/images/icon__verified-user.svg",
    campaigner_is_verified: true,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 500000000,
    donation_percentage: 1.0441785,
    short_url: "racheluntukbanten",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 41584,
    order: 9,
    parent_project_id: 0,
    title: "Peduli Erupsi Gunung Agung, Karangasem-Bali",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/41584/31_41584_1506369549_748730_f.jpg",
    days_remaining: 0,
    donation_received: 4166416,
    campaigner: "Yayasan Sosial Gerbang Matahari Terbit Karangasem Bali",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 1000000000,
    donation_percentage: 0.004166416,
    short_url: "yayasansosialgmt",
    is_featured: 0,
    custom_fb_pixel: "",
  },
  {
    id: 97347,
    order: 10,
    parent_project_id: 95686,
    title: "Tribute to Seventeen dan Korban Tsunami Banten ",
    expired: 2147483647,
    image:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/97347/31_97347_1545999748_841841_f.png",
    days_remaining: 0,
    donation_received: 50000,
    campaigner: "Tribute to Seventeen",
    campaigner_type: "PERSONAL",
    campaigner_badge: "",
    campaigner_is_verified: false,
    category_name: "Bencana Alam",
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 500000000,
    donation_percentage: 0.0001,
    short_url: "untukseventeen",
    is_featured: 0,
    custom_fb_pixel: "",
  },
];

jest.mock("axios");

describe("Api", () => {
  it("getDomain http", () => {
    const contex = {
      req: {
        headers: {
          "x-forwarded-proto": false,
          "host": "localhost"
        }
      }
    }
    expect(getDomain(contex)).toEqual('http://localhost')
  });

  it("getDomain https", () => {
    const contex = {
      req: {
        headers: {
          "x-forwarded-proto": true,
          "host": "localhost"
        }
      }
    }
    expect(getDomain(contex)).toEqual('https://localhost')
  });

  it("getDonationsResponse success", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: {data} }));
    expect(await getDonationsResponse("https://localhost")).toEqual(data)
  });

  it("getDonationsResponse error", async () => {
    axios.get.mockImplementation(() => Promise.reject({ error: "error" }));
    expect(await getDonationsResponse("https://localhost")).toEqual({ error: "error" })
  });
});
