
import { Product, Order, WishlistItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Solitaire Hera Band',
    collection: 'Jain Heritage',
    price: 4850,
    description: '18k White Gold & 2ct Diamond. A timeless masterpiece of elegance.',
    material: '18k White Gold',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgLCjgOPDYmQL0u0B0tmk983CDJ8tGvop95OJfhoSg9MYA--kY6M7T2dDizLZ0WH11oRRQLw2GTBVTjyIOtsJKt9geePF8YI56U-Txih5GPQQuNvktGrSnDhwDI2bLYdy6f04Ap9oSXABNXk5hq17G5R3d88204Tzc3yuVNr--egql03lNWNN6CzTaSFuiAORrHofAbX4Bsas9y9ztRyqx4DF32hg30dKSayDe6U38lD-sp3oJrOR7y95LZNiDviCDV4tfl48i-0Kp',
    altImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrMpk3v_sZqEH-2mnLJDmTkJ3Up3UyNb4Cbd3F4SBAiF2rq9z2-NU-qbj5-5yyPZhbaw_LgswG478MRxx7sC4opIA7wTY5u8HmlNDn5aLdK3vmvTCOjSN97gHz2RVPQCKnAODxA-mh-_FNiJJpcbmnpwzYCSUPOpshY1AazVu5xbz7gom4sAc6CH1GcTGX-eNlqw4BiOrOtX3IC9WITupI_goh3yFHN57uxAnUQwKhTxLb5x0-NWDSnhhxbj8MN4xanXbfgAyONy8Q',
    category: 'Rings',
    rating: 5,
    reviewsCount: 48
  },
  {
    id: '2',
    name: 'Ethereal Drop Pendant',
    collection: 'Celestial Aura',
    price: 12400,
    description: 'Platinum & Emerald Cut Diamond. Suspended brilliance.',
    material: 'Platinum',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuXz_lGy0qLFft8Xw0xytJkbxSv9_wYEciB047982pStL_yLFNTFv2xyKlv6IEdOwGmF7Jut5QI8YrlZeGLhy38V60Wolvk1VBIoHbj7G51qFFy_Y3QZuMACIDaNu4r3EEvsEuFMAyMBDqEBs4aBMU7ILnMoFlYFUr7B-9stHYC-ektPsPMeZcf9akmM3CpUyFczGTh7CSfWajXcPnx1hQ3rF4hEI5OI5eIOOO4pliKDzQhaqTVFIEY34xhP8_O36gX0Y6r5SIR4JJ',
    category: 'Necklaces',
    isNew: true
  },
  {
    id: '7',
    name: 'Antique Silver Kada',
    collection: 'Jain Heritage',
    price: 2200,
    description: 'Solid sterling silver Kada with intricate tribal engravings. A symbol of strength and tradition.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE3FZagW4IE4pADujcyf33s4YfRfc9-Vd80kWnph6Q94CkWr2taz2IIdUIoDWNT0IjiS8-oxna1r3HoN1KostGYp1B-c4L5Jb5Y2kaBukkAfsQ2d9oiwmj9gOm7MxJn-n6BoM9ev9lhNJM_lCed3pRo5NbQF2Tto_ZzIsN7QsuQxLkR4niTx96PBUwet-IdIeWWAi0UXPrrhBYYPz3eJ7rkeXhPyL6irNdzD40_ZsRlqR1gQhCLbQI2NvkZFeLI0KxKQddPmfdF-cu',
    category: 'Kada'
  },
  {
    id: '8',
    name: 'Ghunghroo Payal',
    collection: 'Vedic Rhythm',
    price: 1500,
    description: 'Delicate silver anklets featuring musical ghunghroos that chime with every step.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1W-cnzAKMB_5O0Ne8zIRG9JQtIb09poADv6AXsh6OXYvVDeOUCECH47RQYzdN6VO2IsvqaoQTZ84XO3t1XqEWvxaSamILuWOU9mtddQBF6MZFeonBKWy50gFlpmr3T5tjZoRaAHL3gsfSqApJrCZ8Hg8q99PAazClTuNRrmfTRutK7WXaxDN4zY9j7G06yBteYYat02KncgvKpXzn-8e4xc7lHY4PlIr7KNbmkmE8n8UBUeP-KQNOHXjfP1SO1hRgqsxgXNwE6dL-',
    category: 'Payal'
  },
  {
    id: '9',
    name: 'Imperial Box Chain',
    collection: 'Minimalist Series',
    price: 3400,
    description: 'A robust yet refined silver box chain, perfect for layering or wearing solo.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxNvaYHm87TP8hnF0hw-rj6IKKaVLAWAxHdkfaDocJCgxs3ruo4rXUktxewB1TbcJwtz6Bfowh-NIyplXV_OiHOdf_r5gemQHr5J2Dp2S4LGxoVFVEmCCvHfcO7vU54jbIukxS1CSwQ2r_MPGYWyGeFZb_hyyS_Rbe0EhBs3Yp9Z7iWIzXNJY407c8Z_lZrwYqcNNCk-o2NjJBK0cSNFwUcKzyViypAwwc7ELWo1AV3_eYRQmKx_2f3F9K5NyRCIJU_tBaFYEwrdHV',
    category: 'Chains'
  },
  {
    id: '10',
    name: 'Filigree Silver Bangles',
    collection: 'Artisan Soul',
    price: 1850,
    description: 'Set of two sterling silver bangles with exquisite filigree work, handcrafted by master artisans.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy9Wx8eYpxP3bJWh4-KB5UIXtALgtz3k1VG7DdRiCkuLNGd__PtJj-nBTLrRx4XhQiif9rmVsp2AAI6KZkWF0CMTHFZIb0gmdPfzVu7ZQd0wO3HGcIZ6lMPmWspGLf4bOeId3DifDOgLsDfSqSS44I1zFpAhllDB-zxUzXC3qu2-ta18O6UM5qEe_qpVHkBfzPbm-4EZzTghw5iI2Tj6QEoz1CU6Epn1J41c7PhWIimgWfnxkvoipweRK--QY4HnIJnME7LXpyh-Mb',
    category: 'Bangles'
  },
  {
    id: '3',
    name: 'Cronos Silver Chronograph',
    collection: 'Jain Heritage',
    price: 8900,
    description: 'Platinum Case. Precision meets luxury heritage.',
    material: 'Platinum',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkh2mc4LqmBomoJ4NQzHhd-uZKhbxD57o58SgtSGxvkbauhhZ8gmN1Xg_tMs8b_WWwIW_ShWICLPtG4gw-owF32JL2mE3xGjg9HqUZBueOqdzDlkN_QS1QtiVtgSc4FMEsxaGEJ9eV2PzcUqo7eyztDPCVIPU4QXjiTgqeqTBuCp77p7qARLubwtofmrlH0Hpg8PxG_hCkGYZYj5tjXFLsUpRsTEpBCi5boR8FAdKE0GFLvTQnMI2zAhHqdnv1WXDDNgFayWygBe-N',
    category: 'Watches'
  },
  {
    id: '4',
    name: 'Signature Silver Cufflinks',
    collection: 'Dynasty Line',
    price: 1200,
    description: 'Solid Sterling Silver. For the modern connoisseur.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy9Wx8eYpxP3bJWh4-KB5UIXtALgtz3k1VG7DdRiCkuLNGd__PtJj-nBTLrRx4XhQiif9rmVsp2AAI6KZkWF0CMTHFZIb0gmdPfzVu7ZQd0wO3HGcIZ6lMPmWspGLf4bOeId3DifDOgLsDfSqSS44I1zFpAhllDB-zxUzXC3qu2-ta18O6UM5qEe_qpVHkBfzPbm-4EZzTghw5iI2Tj6QEoz1CU6Epn1J41c7PhWIimgWfnxkvoipweRK--QY4HnIJnME7LXpyh-Mb',
    category: 'Bracelets'
  },
  {
    id: '5',
    name: 'Lumina Diamond Studs',
    collection: 'Celestial Aura',
    price: 1550,
    description: '1ct TW Lab-Grown Diamonds. Minimalist and radiant.',
    material: 'Diamonds',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmSx3csp4Lx_2eyNjbjQQmUQ5H-rPjeZeMxmdR1E_tSX6sube5mFpKKOtGl22XAChC9K7a_1V3DvoKF92bH3bhevWvf3YwZJzbGX7F9y2QJypZC5RtflvMSCIFiLtEgMkWQ79LKybCa8qo8iu263Wmll93bDFAaVXg3hlkobDTk9IleyjgFg5PpPLdEdbi1kPK99On5PPdRO2Xd06uMmb9L32UDeyC0ZddtmJ_uORfn9iQUzTCGicacN7FuEb_QLmZz0-Rqt1s2rbw',
    category: 'Earrings'
  },
  {
    id: '6',
    name: 'Infinity Silver Chain',
    collection: 'Minimalist Series',
    price: 3100,
    description: 'Sterling Silver. Delicate and divine.',
    material: 'Sterling Silver',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxNvaYHm87TP8hnF0hw-rj6IKKaVLAWAxHdkfaDocJCgxs3ruo4rXUktxewB1TbcJwtz6Bfowh-NIyplXV_OiHOdf_r5gemQHr5J2Dp2S4LGxoVFVEmCCvHfcO7vU54jbIukxS1CSwQ2r_MPGYWyGeFZb_hyyS_Rbe0EhBs3Yp9Z7iWIzXNJY407c8Z_lZrwYqcNNCk-o2NjJBK0cSNFwUcKzyViypAwwc7ELWo1AV3_eYRQmKx_2f3F9K5NyRCIJU_tBaFYEwrdHV',
    category: 'Necklaces'
  },
  {
    id: '11',
    name: 'Heritage Jewelry Box',
    collection: 'Atelier Accessories',
    price: 450,
    description: 'Handcrafted velvet-lined wooden box to preserve your precious heirlooms.',
    material: 'Walnut Wood & Velvet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4r0yDwz4RhvjXIclmY6_ETttcFyHmnBni7a8oOSb4ZWH3OV3VZGlvR-Gp3RO4zVSBTKkL9-5DoA-_2e3neOm07x6KUBHXoyjsBznRjth2HmOlWJW0ih6bwIh9Wykrarf5vQDs4r72PXH9eU6EAXOESWak7Pzyv4N5lcPar06W1BjjnE4pI5gHEbuNnkK6qvW0SSA45idAoWyt8g4Hhp2SGffl0SbHszTlreIOegx5OX7g5I5SavRpf6FwLTBi6zfIJzpWQgghC9Gv',
    category: 'Other'
  }
];

export const HOME_PAGE_DATA = {
  hero: {
    heading: 'The Silver Heritage.',
    subheading: 'Experience the pinnacle of high-end craftsmanship with our latest collection of rare silver and gemstones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-uRF8SzvyuA135Kv4_Mioi8rPeu3jLJWtLcU4czpBTUsuGTfJwtZLsuLEPaWmL_88C-xwmWncznZt0tvuTaptYeD9-yMrlRLo8WCQtEytspkgb7k_IsV4QtL7pqdfNXybRDf5FcolmIFshHaA9b4cPzZ-G5rgUFK-K3YzwAdTGUdX2EGzNcufxBFWTApTHn9GQWhXZc8nvb2s4f_MQ28pmyVdsgm7uWKK8hjOJUvFie0AWw6EjzsDwKA0umiR-vh6ss2H_YUfRan'
  },
  featuredCollections: [
    { category: 'Rings', title: 'Heritage Rings', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4lItycmv-P8KTnRMmj0trUfRiYcu6t1qutkpbraWBVgqK0o8lIpdfURG6MDdyv0UlobxOONtCyjURojVtN_zSJ5OqcGWAC0iriQ8o0sQpKAriLQ8sp1yMSo5KG7Ty3nB17LetShaBJOhRrL83FlvE0nLzwPQz-Nj3QZ1aqVVzJgncnkAQkNuoobWM4auz50kzMnjAWBTIFv7QIqs3b6zr2XSEyOUXdMjqbRETWES8cOBBiwVWx481x0anjOcMIpisAot9wucd5QI' },
    { category: 'Necklaces', title: 'Bespoke Necklaces', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjchMfb5EF8YbAYUfNlQP1wepMEIZfaVMR5ddN8jSMM8lUmkXgCmv1UzL_1gKwVQyD_8hWXDyn-3jPbqK2xJiYvUBT81Z2NOtYBi8bCMt0W6zENIEJ3yAyolhUmm1KPzXLzDWU7mv0MmsW590HBLSDoymWPh_2GrOQKCtOpkHWA8jF-I1hvMjEkapJ8D7fs9u7LKe0_EcMAURZxMxmcurKaYXISQ_MY9GC9odg6RU_KI9-O51o0ve6NC1wpfnmuQYqQXjOrmmUw0jp' }
  ],
  signatureListIds: ['1', '7', '2', '4']
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'JJ-98234',
    date: 'October 12, 2023',
    status: 'Delivered',
    total: 2450.00,
    items: [
      {
        productId: '6',
        name: 'Diamond Solitaire Necklace, Platinum',
        quantity: 1,
        price: 2450.00,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpxI14k371Jy_QXWQoW7VTci-Vq1nNZdwpJGiLF8OvhQfFa1lvJmcNSwKiP_lgLP0pKGw6kuHsr6oHuHGLxN7XOUA_4F9bcB2Ule414cTf2YSdgkvAxn4k3cbHuvnlUXomSQeoK4jOiOy52DB9qF2aUeGGRGI-eWS-63AVK-_vWXDkQ6lpPNcEiiz_5vzRRdWI5Rt8PTEIczuQfghOfDsEQktqgH0_Qb-UccAXGGNrbWUx7WkNHfcbj1KR7dcxmZMMWrPaT1KlHKOG'
      }
    ]
  }
];

export const MOCK_WISHLIST: WishlistItem[] = [
  {
    id: 'w1',
    productId: '5',
    name: 'Sapphire Cascade Earrings',
    price: 4800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1W-cnzAKMB_5O0Ne8zIRG9JQtIb09poADv6AXsh6OXYvVDeOUCECH47RQYzdN6VO2IsvqaoQTZ84XO3t1XqEWvxaSamILuWOU9mtddQBF6MZFeonBKWy50gFlpmr3T5tjZoRaAHL3gsfSqApJrCZ8Hg8q99PAazClTuNRrmfTRutK7WXaxDN4zY9j7G06yBteYYat02KncgvKpXzn-8e4xc7lHY4PlIr7KNbmkmE8n8UBUeP-KQNOHXjfP1SO1hRgqsxgXNwE6dL-'
  }
];
