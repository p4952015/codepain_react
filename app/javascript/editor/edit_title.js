import axios from 'axios'
import getSavePrivateBtn from './save_as_private_button.js';
import getSaveBtn from './save_button.js'
import savedNotice from './popup_notice.js'

document.addEventListener('turbolinks:load', () => {
  const editTitleBtn = document.querySelector('#btn-edit-title');
  const input = document.querySelector('#input-title');
  const title = document.querySelector('#edit-title');
  let randomURL = location.href.split('/pen/')[1];
  let LastTwoURL = location.href.split('/').slice(-2)
  let inputValue = '';
  let ax = axios.create();
  let token = document.querySelector('meta[name=csrf-token]').content;
  ax.defaults.headers.common['X-CSRF-Token'] = token;

  // edit 編輯和存取
  if (editTitleBtn){
    editTitleBtn.addEventListener('click', () => {
      title.style.display="none";
      input.style.display="inline";
      editTitleBtn.style.display="none";
      input.focus();
      // 舊 pen 文字 Untitled 預設字，按下為空
      if(input.value === "Untitled"){
        input.value = "";
      }
    })
    let allEvent = 0; // allEvent 兩件事件指觸發一件
    input.addEventListener('keyup', (e) => {
      allEvent =  allEvent + 1;
      if(e.keyCode === 13){
        eventContent(e);
      }else{
        allEvent = 0;
      }
    })
    input.addEventListener('blur', (e) => {
      allEvent = allEvent + 2;
      if(allEvent !== 3){
        eventContent(e);
      }else{
        allEvent = 0;
      }
    })
    // 事件後執行內容
    let eventContent = (e) => {
      title.style.display="inline";
      input.style.display="none";
      editTitleBtn.style.display="inline";
      inputValue = e.target.value;
      // 判斷 預設空：Untitled ; 其他: 輸入值
      if (input.value === ""){
        title.textContent= "Untitled";
      }else{
        title.textContent= inputValue;
      }
      // 舊 pen 可執行 Patch api
      if(LastTwoURL .join('/') === `pen/${randomURL}`){
        dataPatch();
      }
    }
    // SaveBtn 入口處
    getSaveBtn();
    getSavePrivateBtn();
    // Patch api - 成功黃色提示框
    let dataPatch = function() {
      let newTitle = document.querySelector('#edit-title').textContent;
      ax.patch(`/api/v1/pens/${randomURL}`,{ pen: { title: newTitle }})
      .then(res =>{
        if(res.data.status === 'update succeeded'){
          savedNotice()
        }
      })
    }
  }
})