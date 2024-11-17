import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// 导入数据
const countryGoldsData = [
    {
      "id": 1,
      "country": "中国(China)",
      "gold": 38,
      "silver": 32,
      "bronze": 18,
      "desc": "Oriental power",
      "color": "#F40002"
    },
    {
      "id": 2,
      "country": "美国(United States)",
      "gold": 46,
      "silver": 37,
      "bronze": 36,
      "desc": "Sports power",
      "color": "#87d068"
    },
    {
      "id": 3,
      "country": "俄罗斯(Russia)",
      "gold": 20,
      "silver": 28,
      "bronze": 23,
      "desc": "Traditional sports power",
      "color": "#f50"
    },
    {
      "id": 4,
      "country": "英国(United Kingdom)",
      "gold": 22,
      "silver": 21,
      "bronze": 22,
      "desc": "A sports nation with a long history",
      "color": "#108ee9"
    },
    {
      "id": 5,
      "country": "德国(Germany)",
      "gold": 17,
      "silver": 10,
      "bronze": 15,
      "desc": "Sports powers in Europe",
      "color": "#7265e6"
    },
    {
      "id": 6,
      "country": "法国(France)",
      "gold": 10,
      "silver": 12,
      "bronze": 11,
      "desc": "The sports style of a romantic country",
      "color": "#ffbf00"
    },
    {
      "id": 7,
      "country": "日本(Japan)",
      "gold": 27,
      "silver": 14,
      "bronze": 17,
      "desc": "东洋之光",
      "color": "#00a2ae"
    },
    {
      "id": 8,
      "country": "澳大利亚(Australia)",
      "gold": 17,
      "silver": 7,
      "bronze": 22,
      "desc": "Oceania sports power",
      "color": "#f56a00"
    },
    {
      "id": 9,
      "country": "韩国(South Korea)",
      "gold": 9,
      "silver": 5,
      "bronze": 9,
      "desc": "Asian sports powers",
      "color": "#7265e6"
    },
    {
      "id": 10,
      "country": "意大利(Italy)",
      "gold": 10,
      "silver": 10,
      "bronze": 20,
      "desc": "The sports charm of the Mediterranean",
      "color": "#ffbf00"
    },
    {
      "id": 11,
      "country": "荷兰(Netherlands)",
      "gold": 10,
      "silver": 12,
      "bronze": 14,
      "desc": "欧洲低地之国",
      "color": "#00a2ae"
    },
    {
      "id": 12,
      "country": "西班牙(Spain)",
      "gold": 8,
      "silver": 11,
      "bronze": 13,
      "desc": "斗牛士之国",
      "color": "#f5222d"
    },
    {
      "id": 13,
      "country": "加拿大(Canada)",
      "gold": 7,
      "silver": 14,
      "bronze": 11,
      "desc": "北美枫叶之国",
      "color": "#fa541c"
    },
    {
      "id": 14,
      "country": "瑞典(Sweden)",
      "gold": 6,
      "silver": 8,
      "bronze": 9,
      "desc": "北欧福利国家",
      "color": "#fa8c16"
    },
    {
      "id": 15,
      "country": "波兰(Poland)",
      "gold": 5,
      "silver": 7,
      "bronze": 10,
      "desc": "东欧重要国家",
      "color": "#a0d911"
    },
    {
      "id": 16,
      "country": "巴西(Brazil)",
      "gold": 7,
      "silver": 6,
      "bronze": 8,
      "desc": "南美足球王国",
      "color": "#eb2f96"
    },
    {
      "id": 17,
      "country": "新西兰(New Zealand)",
      "gold": 7,
      "silver": 6,
      "bronze": 7,
      "desc": "南太平洋岛国",
      "color": "#722ed1"
    },
    {
      "id": 18,
      "country": "丹麦(Denmark)",
      "gold": 6,
      "silver": 7,
      "bronze": 5,
      "desc": "北欧童话王国",
      "color": "#13c2c2"
    },
    {
      "id": 19,
      "country": "瑞士(Switzerland)",
      "gold": 4,
      "silver": 8,
      "bronze": 6,
      "desc": "欧洲中立国",
      "color": "#1890ff"
    },
    {
      "id": 20,
      "country": "比利时(Belgium)",
      "gold": 3,
      "silver": 5,
      "bronze": 7,
      "desc": "欧洲巧克力之国",
      "color": "#faad14"
    }
  ]

const projectsData = [
  {
    "id": 1,
    "countryId": 1,
    "projects": [
      {
        "projectName": "Table tennis",
        "gold": 4,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "badminton",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "dive",
        "gold": 3,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Shoot",
        "gold": 5,
        "silver": 4,
        "bronze": 2
      },
      {
        "projectName": "gymnastics",
        "gold": 3,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "weightlifting",
        "gold": 5,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "Track and field",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "fencing",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "basketball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "volleyball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "soccer",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 2,
    "countryId": 2,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 10,
        "silver": 10,
        "bronze": 10
      },
      {
        "projectName": "Swimming",
        "gold": 12,
        "silver": 9,
        "bronze": 8
      },
      {
        "projectName": "basketball",
        "gold": 2,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "soccer",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "gymnastics",
        "gold": 5,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "wrestling",
        "gold": 3,
        "silver": 3,
        "bronze": 3
      },
      {
        "projectName": "Shoot",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "volleyball",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 3,
    "countryId": 3,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 3,
        "silver": 4,
        "bronze": 5
      },
      {
        "projectName": "wrestling",
        "gold": 4,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "gymnastics",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Rhythmic gymnastics",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Shoot",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "fencing",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Figure skating",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "Ice hockey",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      }
    ]
  },
  {
    "id": 4,
    "countryId": 4,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 4,
        "silver": 3,
        "bronze": 3
      },
      {
        "projectName": "bicycle",
        "gold": 6,
        "silver": 4,
        "bronze": 3
      },
      {
        "projectName": "Swimming",
        "gold": 3,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "rowing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "boxing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "sailboat",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "dive",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 5,
    "countryId": 5,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "rowing",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Shoot",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "equestrianism",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "canoe",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Modern pentathlon",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "soccer",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 6,
    "countryId": 6,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "fencing",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "bicycle",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "judo",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "sailboat",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "handball",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 7,
    "countryId": 7,
    "projects": [
      {
        "projectName": "judo",
        "gold": 5,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "wrestling",
        "gold": 3,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "gymnastics",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "badminton",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "Table tennis",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "baseball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "soccer",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 8,
    "countryId": 8,
    "projects": [
      {
        "projectName": "Swimming",
        "gold": 6,
        "silver": 2,
        "bronze": 5
      },
      {
        "projectName": "Track and field",
        "gold": 2,
        "silver": 1,
        "bronze": 3
      },
      {
        "projectName": "bicycle",
        "gold": 2,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "sailboat",
        "gold": 2,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "basketball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "Hockey ball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      },
      {
        "projectName": "rowing",
        "gold": 1,
        "silver": 0,
        "bronze": 2
      },
      {
        "projectName": "triathlon",
        "gold": 1,
        "silver": 0,
        "bronze": 1
      }
    ]
  },
  {
    "id": 9,
    "countryId": 9,
    "projects": [
      {
        "projectName": "archery",
        "gold": 4,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "taekwondo",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "badminton",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "judo",
        "gold": 1,
        "silver": 0,
        "bronze": 1
      },
      {
        "projectName": "Table tennis",
        "gold": 0,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 10,
    "countryId": 10,
    "projects": [
      {
        "projectName": "Track and field",
        "gold": 2,
        "silver": 2,
        "bronze": 4
      },
      {
        "projectName": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "fencing",
        "gold": 2,
        "silver": 2,
        "bronze": 4
      },
      {
        "projectName": "bicycle",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "sailboat",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "judo",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "volleyball",
        "gold": 1,
        "silver": 0,
        "bronze": 0
      }
    ]
  },
  {
    "id": 11,
    "countryId": 11,
    "projects": [
      {
        "projectName": "自行车",
        "gold": 4,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "游泳",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "帆船",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "曲棍球",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "赛艇",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "速滑",
        "gold": 1,
        "silver": 2,
        "bronze": 4
      }
    ]
  },
  {
    "id": 12,
    "countryId": 12,
    "projects": [
      {
        "projectName": "网球",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "篮球",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "手球",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "帆船",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "自行车",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "足球",
        "gold": 1,
        "silver": 2,
        "bronze": 3
      }
    ]
  },
  {
    "id": 13,
    "countryId": 13,
    "projects": [
      {
        "projectName": "冰球",
        "gold": 2,
        "silver": 3,
        "bronze": 1
      },
      {
        "projectName": "游泳",
        "gold": 2,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "划艇",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "田径",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "自由式滑雪",
        "gold": 1,
        "silver": 4,
        "bronze": 4
      }
    ]
  },
  {
    "id": 14,
    "countryId": 14,
    "projects": [
      {
        "projectName": "越野滑雪",
        "gold": 2,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "冰球",
        "gold": 1,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "摔跤",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "游泳",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "帆船",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      }
    ]
  },
  {
    "id": 15,
    "countryId": 15,
    "projects": [
      {
        "projectName": "田径",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "举重",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "排球",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "击剑",
        "gold": 1,
        "silver": 2,
        "bronze": 3
      }
    ]
  },
  {
    "id": 16,
    "countryId": 16,
    "projects": [
      {
        "projectName": "足球",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "排球",
        "gold": 2,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "帆船",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "柔道",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      },
      {
        "projectName": "田径",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 17,
    "countryId": 17,
    "projects": [
      {
        "projectName": "赛艇",
        "gold": 3,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "帆船",
        "gold": 2,
        "silver": 1,
        "bronze": 1
      },
      {
        "projectName": "田径",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "橄榄球",
        "gold": 1,
        "silver": 1,
        "bronze": 2
      }
    ]
  },
  {
    "id": 18,
    "countryId": 18,
    "projects": [
      {
        "projectName": "手球",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "自行车",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "帆船",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "羽毛球",
        "gold": 1,
        "silver": 1,
        "bronze": 1
      }
    ]
  },
  {
    "id": 19,
    "countryId": 19,
    "projects": [
      {
        "projectName": "网球",
        "gold": 2,
        "silver": 2,
        "bronze": 1
      },
      {
        "projectName": "自行车",
        "gold": 1,
        "silver": 3,
        "bronze": 2
      },
      {
        "projectName": "划船",
        "gold": 1,
        "silver": 3,
        "bronze": 3
      }
    ]
  },
  {
    "id": 20,
    "countryId": 20,
    "projects": [
      {
        "projectName": "自行车",
        "gold": 2,
        "silver": 2,
        "bronze": 3
      },
      {
        "projectName": "曲棍球",
        "gold": 1,
        "silver": 2,
        "bronze": 2
      },
      {
        "projectName": "田径",
        "gold": 0,
        "silver": 1,
        "bronze": 2
      }
    ]
  }
]

export default {
  async getPage(perPage: number, page: number) {
    const start = (page - 1) * perPage
    const end = start + perPage
    return {
      data: countryGoldsData.slice(start, end)
    }
  },

  async getTotal() {
    return {
      data: countryGoldsData
    }
  },

  async getDetail(id: number) {
    const country = countryGoldsData.find(item => item.id === id)
    return {
      data: country
    }
  },

  async getProjects(countryId: number, perPage: number, page: number) {
    const start = (page - 1) * perPage
    const countryProjects = projectsData.find(item => item.countryId === countryId)?.projects || []

    const paginatedProjects = countryProjects.slice(start, start + perPage)

    return {
      data: paginatedProjects,
      total: countryProjects.length
    }
  }
}
