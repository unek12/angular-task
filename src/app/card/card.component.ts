// @ts-ignore
// @ts-ignore

import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
// @ts-ignore
import json from './data.json'

interface card {
  _id: string,
  amount: number | string,
  type: "income" | "outcome" | "loan" | "investment",
  name: {
    first: string,
    last: string
  },
  company: string,
  phone: string,
  address: string
}

interface  request {
  total?: number,
  data: card[]
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}
  types = ['income', 'investment', 'outcome', 'loan']
  cards: card[] = []
  tab = -1
  data: request = { total: 0, data: [] }

  ngOnInit() {
    this.getData()
    this.routeHandler()
  }

  requestDataChanger(type: number = -1): card[] {
    return this.data.data.filter(item => {
      return item['type'] === this.types[type]
    })
  }

  async routeHandler() {
    await this.route.queryParams.subscribe(param => this.tab = +param['tab'])
    this.cards = this.requestDataChanger(this.tab)
  }

  async getData() {
    this.data = await json
    this.data.data.map(item => item['amount'] = (Math.random() * 4000).toFixed(0))
  }
}
