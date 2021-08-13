const data = [
  {
    selector: 'body',
    suggest: [
      'head 標籤可以多一些描述，例如 fb icon 等等，詳情可瀏覽 HTML 與 CSS 課程的第十章 head 細節',
      'xxx 可以改成 xxx，階層越多會導致網頁渲染速度變慢,請盡量不要超過四層',
      '一個網頁一定都會有一個 h1，不會都沒有',
      '一個網頁只會有一個 h1，請將多餘的 h1 改用其他標題標籤呈現',
      '最外層建議加上 .wrap 並設定一個寬度及水平置中，以提升使用者體驗',
      '選擇器請不要直接指定 HTML 標籤，例如 input,header,nav 的部分，原因是一個網站上會有多頁內容，有可能在每頁的內容都不一樣，若是寫死每個 HTML 標籤樣式，之後在覆蓋樣式會相當麻煩',
    ]
  },
  {
    selector: '.social',
    suggest: [
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 不要寫死高度，目的在於說日後裡面內容變多時，也可自適應延伸',
      '.xxx 內容靠右不建議以 flex-direction:row-reverse 的方式呈現，可以改以 justify-content: flex-end 設定，結構較符合邏輯',
      'xxx 裡面的 a 請改用 ul 靠右 li 靠左的方式來設定，結構較符合邏輯',
    ]
  },
  {
    selector: '.social ul',
    suggest: [
      'xxx 可以寫到裡面的 ul 上，減少 div 的使用可以讓網頁更簡潔',
    ]
  },
  {
    selector: '.social li',
    suggest: [
      'ul 的第一層一定是 li，"|" 請改至 li 裡面',
      'xxx 的 img 屬性 `alt`，可以嘗試填入替代文字。原因是當網路讀取較慢時，可以出現相對應文字告知使用者。',
      '請盡量減少方向性、編號式的命名方式，改用語意的方式來取代，例如 .social1 改成 .facebook',
    ]
  },
  {
    selector: '.header',
    suggest: [
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 不要寫死高度，目的在於說日後裡面內容變多時，也可自適應延伸',
    ]
  },
  {
    selector: '.header h1',
    suggest: [
      'xxx 請改用圖片取代文字的方式呈現',
      '.xxx 裡面的 a 請加上 display: block 增加讀取範圍',
    ]
  },
  {
    selector: '.nav a',
    suggest: [
      '.xxx 裡面的 a 請加上 display: block 增加讀取範圍',
      'xxx 請設計 hover 樣式，提升使用者回饋',
    ]
  },
  {
    selector: '.banner',
    suggest: [
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 裡面的文字請改用標題標籤呈現，以提升搜尋排名',
    ]
  },
  {
    selector: '.banner h2',
    suggest: [
      '.xxx 的定位建議不要用 margin 來推，可以在父元素使用 flex 調整定位，或設定相對於父元素的位置做絕對定位',
      '.xxx 可以寫到 .xxxx 裡面，結構較符合邏輯',
      '.xxx 半透明背景的部分不建議透過 opacity 來設定，造成文字可讀性下降。可以透過 background: rgba(0,0,0,0.5) 的方式設定',
      'xxx 不需要寫到兩個 h2，可以用 br 來斷行',
      '.xxx 裡面的文字請改用標題標籤呈現，以提升搜尋排名',
    ]
  },
  {
    selector: '.course',
    suggest: [
      'xxx 可以寫到裡面的 ul 上，減少 div 的使用可以讓網頁更簡潔',
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 不要寫死高度，目的在於說日後裡面內容變多時，也可自適應延伸',
    ]
  },
  {
    selector: '.courseItem',
    suggest: [
      '請盡量減少方向性、編號式的命名方式，改用語意的方式來取代，例如 .content1 改成 .html-content',
    ]
  },
  {
    selector: '.courseImg',
    suggest: [
      'xxx 的 img 屬性 `alt`，可以嘗試填入替代文字。原因是當網路讀取較慢時，可以出現相對應文字告知使用者。',
      '請盡量減少方向性、編號式的命名方式，改用語意的方式來取代，例如 .img1 改成 .html-img',
    ]
  },
  {
    selector: '.courseItem ol',
    suggest: [
      '.xxx li 中 "jQuery實戰教學" 裡的列表請改用 ul li 來呈現',
      'ul li 通常是使用在相同結構的列表上，.xxx ul 中 "本課程有以下特色" 請改至 ul 外面',
      'xxx 裡面的圓點建議可以改用 list-style:disc 來呈現',
      '列表元素像 ul，不能是 p 的子元素，建議將 </p> 移至 ul 標籤前',
      '.courseItem li 受到 CSS 第 109 行選擇器 ".course li" 的影響，建議將 ".course li" 改為 ".course > li"',
    ]
  },
  {
    selector: '.compare th',
    suggest: [
      'xxx 中的 td 為表頭單元格，請使用 th 呈現',
    ]
  },
  {
    selector: '.highlight',
    suggest: [
      'xxx 的樣式不建議以 style 屬性直接寫在標籤上，可以設定一個 class 統一管理',
    ]
  },
  {
    selector: '.contact-content',
    suggest: [
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 不要寫死高度，目的在於說日後裡面內容變多時，也可自適應延伸',
      'xxx 內邊間距的部分請改以自身的 padding 來統一管理',
      'ul li 通常是使用在相同結構的列表上，.xxx 不建議使用 ul li 來排版',
    ]
  },
  {
    selector: '.contact-content h2',
    suggest: [
      'xxx 不需要寫到兩個 h2，可以用 br 來斷行',
    ]
  },
  {
    selector: '.contact textarea',
    suggest: [
      'textarea 請和 input 寫在同一個 form 表單內，日後與後端銜接時，方便將所需資料一次送出',
      'textarea 建議可以改以 width 來設定寬度，因為 cols 在不同瀏覽器會有不同的寬度，容易有跑板問題',
      'xxx 已經設有寬度，可將 HTML 的屬性 cols 刪除',
    ]
  },
  {
    selector: '.contactInfo label',
    suggest: [
      'xxx 中的 label 沒有連結到相對應的 input',
      'form 中的文字建議可以使用 label 對應 id 的方式呈現',
    ]
  },
  {
    selector: '.contactInfo input',
    suggest: [
      'form 的部分不需要用到 <br> 標籤來斷行，可以在 input 設定 display: block 的屬性向下排列',
      'xxx 的樣式不建議以 style 屬性直接寫在標籤上，可以設定一個 class 統一管理',
      '可以將 .contact input 中 type 的屬性 "text"，改為電話 "tel" 或是信箱 "email"',
      'input 的 type 沒有屬性 "phone"，建議改為 "tel"',
      'input 的 type 沒有屬性 "mail"，建議改為 "email"',
    ]
  },
  {
    selector: '.contactInfo .btn',
    suggest: [
      'xxx 請設計 hover 樣式，提升使用者回饋，可以加上 cursor: pointer，讓滑鼠滑過去時會有手出現',
      'xxx 的樣式不建議以 style 屬性直接寫在標籤上，可以設定一個 class 統一管理',
      '.btn 定位不建議透過 margin 來設定，靠右可使用 align-self',
      '.btn 定位不建議透過 margin 來設定，靠右可設定一個父元素使用 flex 來控制定位',
      '.btn 不建議將定位寫死，靠右可設定一個父元素使用 flex 來控制定位',
      '.xxx 尚未清除浮動，正確清除浮動應於 float 結束的地方加上 clear:both 的元素，例如: 在 .btn 後面加上清除浮動元素',
    ]
  },
  {
    selector: '.footer',
    suggest: [
      '.xxx 不需要設定 width ，因為 div 是區塊元素會自適應父元素寬度',
      '.xxx 不要寫死高度，目的在於說日後裡面內容變多時，也可自適應延伸',
    ]
  },
  {
    selector: '.footer ul',
    suggest: [
      'xxx 的內容，請用 ul li 結構，那裡是主題式列表',
      '信箱與電話可使用 emmet 語法 a:mail、a:tel 做設定以增加使用者體驗，當使用者透過手機點擊該區塊時，就會自動開啟相對功能。',
    ]
  },
]
const entityMap = {
  escape: {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  },
  unescape: {
    '&amp;': "&",
    '&apos;': "'",
    '&gt;': ">",
    '&lt;': "<",
    '&quot;': '"',
  }
};
const entityReg = {
  escape: RegExp('[' + Object.keys(entityMap.escape).join('') + ']', 'g'),
  unescape: RegExp('(' + Object.keys(entityMap.unescape).join('|') + ')', 'g')
}
// Method
function escape(html) {
  if (typeof html !== 'string') return ''
  return html.replace(entityReg.escape, function(match) {
      return entityMap.escape[match]
  })
}
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// Create
$(function() {
  $( '*' ).mouseout(function(event) {
    event.stopPropagation();
    $(this).removeClass('hover-event');
    $('#selector').text('').css('display', 'none')
  });

  function suggest(item) {
    $('#suggest').addClass('active');
    $('.suggest-head h2').text( item.selector );
    let listStr = ''
    item.suggest.forEach((txt, idx) => {
      listStr += `
        <li id="item-${idx}">
          <p class="copy-item" data-clipboard-target="#foo">${escape(txt)}</p>
        </li>
      `;
    })
    $('.suggest-body').html( listStr );
  }

  data.forEach((item, index) => {
    $( item.selector ).mouseover(function (event) {
      event.stopPropagation();
      $(this).addClass('hover-event');
      $('#selector').text(item.selector).css('display', 'block')
    });
    $( item.selector ).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $( '*' ).removeClass('click-event');
      $(this).addClass('click-event');
      suggest(item)
    })
  });

  $( '#suggest .close' ).click(function(event) {
    event.stopPropagation();
    $('#suggest').removeClass('active');
  })

  $( '.suggest-body' ).on('click', 'li', function(event) {
    event.stopPropagation();
    copyToClipboard( $(this).children('p').text() );
  })
});