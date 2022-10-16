import type { GetIndexStatisticalData } from '~/api/models/GetIndexStatisticalData'
import type { HomeEvent } from '~/api/models/HomeEvent'
import type { HomeNews } from '~/api/models/HomeNews'
import type { Task } from '~/api/models/Task'
import { TaskStatus } from '~/api/models/Task'
import type { GetSgnStatisticalData } from '~/api/models/GetSgnStatisticalData'

export class API {
  async getHomeStatisticalData(): Promise<GetIndexStatisticalData> {
    return {
      member: 8200,
      token: 12340000,
      nftmint: 0.05,
      project: 15,
    }
  }

  async getHomeEventItems(): Promise<{ events: HomeEvent[] }> {
    return {
      events: [
        {
          time: 1665670283456,
          subject: 'something big',
          content: 'something something, something',
          link: 'https://blahblah.com',
        },
        {
          time: 1665670283456,
          subject: 'something big',
          content: 'something something, something',
          link: 'https://blahblah.com',
        },
      ],
    }
  }

  async getHomeNewsItems(): Promise<{ news: HomeNews[] }> {
    return {
      news: [
        {
          time: 1665670283456,
          subject: 'something big',
          content: 'something something, something',
          link: 'https://blahblah.com',
        },
        {
          time: 1665670283456,
          subject: 'something big',
          content: 'something something, something',
          link: 'https://blahblah.com',
        },
      ],
    }
  }

  async getTask(): Promise<{ tasks: Task[] }> {
    return {
      tasks: [
        {
          subject: 'something big',
          content: 'something something, something',
          workload: 'something something, something', // 工作量
          poster: 'fatfingererr#0697',
          reward: 'xxx U xxx $SCORE',
          link: 'https://blahblah.com',
          status: TaskStatus.Todo,
        },
        {
          subject: 'something big',
          content: 'something something, something',
          workload: 'something something, something', // 工作量
          poster: 'fatfingererr#0697',
          reward: 'xxx U xxx $SCORE',
          link: 'https://blahblah.com',
          status: TaskStatus.Todo,
        },
        {
          subject: 'something big',
          content: 'something something, something',
          workload: 'something something, something', // 工作量
          poster: 'fatfingererr#0697',
          reward: 'xxx U xxx $SCORE',
          link: 'https://blahblah.com',
          status: TaskStatus.Todo,
        },
        {
          subject: 'something big',
          workload: 'something something, something',
          tasks: '',
          poster: 'fatfingererr#0697',
          reward: 'xxx U xxx $SCORE',
          link: 'https://blahblah.com',
          status: TaskStatus.OnProgress,
        },
      ],
    }
  }

  async getSgnStatisticalData(): Promise<GetSgnStatisticalData> {
    return {
      totals: 480,
      holder: 412,
      floor_price: 0.198,
      trade_volume: 42.19,
    }
  }
}
