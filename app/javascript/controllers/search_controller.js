import { Controller } from "stimulus"
import Turbolinks from "turbolinks"

export default class extends Controller {
  static targets = ['searchInput','clearSearch', 'sortBySelected']

  connect() {
    if (window.location.href.includes('sort_order')) {
      document.querySelector('.sortOrderASC').classList.add('order-active')
    } else {
      document.querySelector('.sortOrderDESC').classList.add('order-active')
    }
    if (this.searchInputTarget.value) {
      this.clearSearchTarget.classList.remove('hidden')
    }
  }

  submitSearch(e) {
    e.preventDefault()
    const searchInput = this.searchInputTarget.value
    const url = new URL(window.location.href)
    const params = url.searchParams

    params.set('search_term', searchInput)
    params.delete('page')

    if (url.includes('sort_order')) {
      document.querySelector('.sortOrderASC').classList.add('order-active')
      document.querySelector('.sortOrderDESC').classList.remove('order-active')
    }
    if (searchInput) {
      Turbolinks.visit(url)
    }
  }

  submitSelected() {
    const sortBySelected = this.sortBySelectedTarget
    const url = new URL(window.location.href)
    const params = url.searchParams

    params.set('sort_by', sortBySelected.value)

    Turbolinks.visit(url)
  }
}