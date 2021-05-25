import Rails from '@rails/ujs'

function getSaveBtn(inputValue) {
  const saveBtn = document.querySelector('#btn-save');
  if (saveBtn){
    saveBtn.addEventListener('click', () => {
      let newTitle = inputValue;
      let username = document.querySelector('#username').textContent
      let html = ace.edit("editor--html")
      let css = ace.edit("editor--css")
      let js = ace.edit("editor--js")
      let htmlValue = html.session.getValue()
      let cssValue = css.session.getValue()
      let jsValue = js.session.getValue()
      let paramsFromNewPen = () => {
        return `user[username]=${username}&pen[title]=${newTitle}&pen[html]=${htmlValue}&pen[css]=${cssValue}&pen[js]=${jsValue}`
      }
      Rails.ajax({
        url: '/api/v1/pens',
        type: 'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        dataType: 'json',
        data: paramsFromNewPen()
      })
    })
  }
}
export default getSaveBtn;