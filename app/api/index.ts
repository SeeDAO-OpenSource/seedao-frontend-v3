import type { GetIndexStatisticalData } from '~/api/models/GetIndexStatisticalData'
import type { HomeEvent } from '~/api/models/HomeEvent'
import type { HomeNews } from '~/api/models/HomeNews'
import type { Task } from '~/api/models/Task'
import type { GetSgnStatisticalData } from '~/api/models/GetSgnStatisticalData'
import type { AxiosInstance } from 'axios'
import axios from 'axios'

export class API {
  private readonly axiosInstance: AxiosInstance

  constructor(
    baseURL: string,
    options?: {
      prefix: string
    }
  ) {
    const prefix = options?.prefix || '/api/v1'
    this.axiosInstance = axios.create({
      baseURL: baseURL + prefix,
    })
  }

  async getHomeStatisticalData(): Promise<GetIndexStatisticalData> {
    return this.axiosInstance.post(`/info/basic`).then((res) => res.data.data)
  }

  async getHomeEventItems(): Promise<{ events: HomeEvent[] }> {
    return this.axiosInstance.post(`/events/all`).then((res) => res.data.data)
  }

  async getHomeNewsItems(): Promise<{ news: HomeNews[] }> {
    return this.axiosInstance.post(`/news/all`).then((res) => res.data.data)
  }

  async getTask(): Promise<{ tasks: Task[] }> {
    return this.axiosInstance.post(`/tasks/all`).then((res) => res.data.data)
  }

  async getSgnStatisticalData(): Promise<GetSgnStatisticalData> {
    return this.axiosInstance.post(`/info/sgn`).then((res) => res.data.data)
  }
}
