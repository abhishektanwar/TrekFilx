import {v4 as uuid} from 'uuid';

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

// export const videos = [
//   {
//     _id: "Wo5dMEP_BbI",
//     title: "Awesome Video about Coding",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
//     creator: "Soham Shah",
//   },
//   {
//     _id: "F_Riqjdh2oM",
//     title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
//     creator: "Sentdex",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
//   },
// ]; hiking and trekking, skiing and snowboarding, rockclimbin and mountaineering, snorkeling and ndiving

export const videos = [
  {
    _id: "KRwi5dBjXuQ",
    title: "Creating a Cinematic Hiking Video | BTS Demonstration + 5 Tips",
    channelName: "Thomas Alex Norman",
    youtubeID: "KRwi5dBjXuQ",
    videoLength: "13:30",
    category: "trekking",
    likes: "4.4K",
    views: "107K",
    subscribers: "284K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/KRwi5dBjXuQ/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/q6UXzenrtqGQQ9BO4q4Od-0R0WueoHPsykBmjIMzh_0-E3CzHRLKXBoeyP56_mJgxxQGN5JhOls=s88-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCeu0J9A1p87aVUqZkMYF-_g",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "F-0i2l3sqno",
    title: "Why do I hike | Award Winning Documentary 2020 (ENGLISH with Chinese, Greek and Czech subs)",
    channelName: "Nikola Horvat - Tesla",
    youtubeID: "F-0i2l3sqno",
    videoLength: "23:13",
    category: "trekking",
    likes: "25K",
    views: "1.1M",
    subscribers: "12.3K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/F-0i2l3sqno/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLRNlCdEoeaNiL1Rd_8_35u_PNAY-w92Tk9DVnFAT40=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCMr_sxDfcx0W-VYNw2Ef5Xg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "41UGUr5cv64",
    title: "What You Really Need for Camping & Backpacking | Essential Gear Guide",
    channelName: "Alexander Ayling",
    youtubeID: "41UGUr5cv64",
    videoLength: "29:37",
    category: "trekking",
    likes: "17K",
    views: "651K",
    subscribers: "79.9K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/41UGUr5cv64/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/FonV3q2EKvOaAB2TbXFOGY7p4E-xM40zMVCuxkd2euQpf6nLb4HAOdtwqWgCXGE1PgG1OdfMWA=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UC_uIW_MvxONcZsAkaMq1ujA",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "-ClNrBe-fr4",
    title: "Awesome Snowboarding and Skiing In Stunning 4K Resolution | Freestyle | Slow Motion Edit",
    channelName: "Vanderz",
    youtubeID: "-ClNrBe-fr4",
    videoLength: "4:21",
    category: "skiing",
    likes: "776",
    views: "75K",
    subscribers: "975",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/-ClNrBe-fr4/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLSjQa4Qre9Jl8EnKaO8Y-vVGflxWoQwfdaJdGA_XA=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCewCfJf6lPaDNQLA9cLMu4A",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "_yfFGDuJ2g0",
    title: "HOW TO SKI | 10 BEGINNER SKILLS FOR THE FIRST DAY SKIING",
    channelName: "Stomp It Tutorials",
    youtubeID: "_yfFGDuJ2g0",
    videoLength: "17:33",
    category: "skiing",
    likes: "61K",
    views: "4.5M",
    subscribers: "306K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/_yfFGDuJ2g0/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLRd2S2xE5W62a5JI46Qu5m9w-XQ23zJet4b3CvKz1c=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UC1Ho5YvHCtyReazatbhBowA",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "OsbpD8BN10k",
    title: "Live Coaching: Beginner Snowboard Lesson Pt. 1",
    channelName: "Snowboard Addiction",
    youtubeID: "OsbpD8BN10k",
    videoLength: "20:09",
    category: "skiing",
    likes: "12K",
    views: "1.1M",
    subscribers: "277K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/OsbpD8BN10k/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLT9uaD4NqlxidGZf1YB05xqsczu12juMB5TJU4qYg=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCX9chJwW7gL93LIcC3xP2uQ",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "OGxbw40ny5M",
    title: "Rock Climbing Basics: How to Tie Yourself In & Belaying Basics",
    channelName: "Art of Manliness",
    youtubeID: "OGxbw40ny5M",
    videoLength: "6:48",
    category: "rockclimbing",
    likes: "4K",
    views: "678M",
    subscribers: "1.28M",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/OGxbw40ny5M/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLStKk0oUL3Q8cfclGcK7XwHoftbIANPw6BWmewNWl8=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCkRMqL3hLrIYhxNCac4vR3w",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "CFIz4cBFVro",
    title: "Rock Climbing: How to Belay",
    channelName: "REI",
    youtubeID: "CFIz4cBFVro",
    videoLength: "4:51",
    category: "rockclimbing",
    likes: "5.2K",
    views: "624K",
    subscribers: "351K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/CFIz4cBFVro/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLRbJKEB3FmK7DCH8kaTMwBE16m-RSNBue-_90oFcQ=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCwZcNfPpV9CXSVbpH1ckVmw",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "9GljSvw7r3g",
    title: "How to Snorkel - Snorkeling for Beginners",
    channelName: "Joe Oceanside",
    youtubeID: "9GljSvw7r3g",
    videoLength: "13:08",
    category: "snorkeling",
    likes: "18K",
    views: "836K",
    subscribers: "38.1K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/9GljSvw7r3g/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/8Uyg40NRlmpzAiSq4tvtqmmCHE1kQSovDhLs4-Wd8AFQzxbvsgytyg-psD4mwp0dG2nOdI_Uxg=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCpb2jrX2Qlqv0zTMQg13ZVg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    _id: "HHwLAlQTCCA",
    title: "5 FREEDIVING TECHNIQUES for Beginners | How To Freedive ",
    channelName: "Gert Leroy",
    youtubeID: "HHwLAlQTCCA",
    videoLength: "13:23",
    category: "snorkeling",
    likes: "6.1K",
    views: "210K",
    subscribers: "19K",
    featured: true,
    videoThumbnail: "https://i.ytimg.com/vi/HHwLAlQTCCA/hqdefault.jpg",
    channelThumbnail:
      "https://yt3.ggpht.com/dIbCF2qhPI4ApziEPKxv1_gkTKTot-54cftkiV3IyA8q36ogHoEbiecvjzs9g7OIDfQiuENIgQ=s48-c-k-c0x00ffffff-no-rj",
    channelLink: "https://www.youtube.com/channel/UCC2cJ6KWTTEuX2Cl1XC0Oyg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  }

]

