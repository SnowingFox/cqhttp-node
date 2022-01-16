import Covid19AreaList from '../config/covid19-area-list'

interface ICovid19Manager {
  total: {
    areaTree: any[]
    chinaDayList: any[]
    chinaTotal: any
    lastUpdateTime: string
    overseaLastUpdateTime: string
  }
  area: any[]
  areaList: any[]
  lastTime: number
  updateTotal: (data: any) => void
  shouldUpdate: () => boolean
  getTotal: () => ICovid19Manager['total']
}

const Covid19Manager: ICovid19Manager = {
  total: {
    areaTree: [],
    chinaDayList: [],
    chinaTotal: {},
    lastUpdateTime: '',
    overseaLastUpdateTime: '',
  },
  area: [],
  areaList: Covid19AreaList,
  lastTime: 0,
  shouldUpdate() {
    const oneHour = 1000 * 60 * 60
    if (Date.now() - this.lastTime >= oneHour) {
      return true
    }
    return false
  },
  updateTotal(data: any) {
    if (this.shouldUpdate()) {
      this.lastTime = Date.now()
      this.total = data
    }
  },
  getTotal() {
    return this.total
  },
}

export default Covid19Manager
