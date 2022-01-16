import Covid19CityList from '../config/covid19-city-list'

interface ICovid19Manager {
  data: {
    areaTree: any[]
    chinaDayList: any[]
    chinaTotal: any[]
    lastUpdateTime: string
    overseaLastUpdateTime: string
  }
  cityList: any[]
  lastTime: number
  updateData: (data: any) => void
  shouldUpdateData: () => boolean
  getData: () => ICovid19Manager['data']
}

const Covid19Manager: ICovid19Manager = {
  data: {
    areaTree: [],
    chinaDayList: [],
    chinaTotal: [],
    lastUpdateTime: '',
    overseaLastUpdateTime: '',
  },
  cityList: Covid19CityList,
  lastTime: 0,
  shouldUpdateData() {
    const oneHour = 1000 * 60 * 60
    if (Date.now() - this.lastTime >= oneHour) {
      return true
    }
    return false
  },
  updateData(data: any) {
    if (this.shouldUpdateData()) {
      this.data = data
    }
  },
  getData() {
    return this.data
  },
}

export default Covid19Manager
