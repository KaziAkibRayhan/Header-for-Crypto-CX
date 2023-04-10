window.onload = () => {
  // change dark and light theme
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  toggleSwitch.addEventListener("change", switchTheme, false);

  // bookmark change
  const bookmarkColorToggle = document.querySelector(
    ".itc_chart_separate_over_item"
  );
  bookmarkColorToggle.addEventListener("click", () => {
    bookmarkColorToggle.style.color = "#ffcf00";
  });

  // Indicator Data

  const itc_chart_item = document.querySelectorAll(".itc_chart_item");
  const itc_chart_container = document.getElementById("itc_chart_container");

  let indicatorItems = [];

  for (let i = 0; i < itc_chart_item.length; i++) {
    itc_chart_item[i].addEventListener("click", function () {
      const item = this.getAttribute("data-key");
      if (!indicatorItems.includes(item)) {
        indicatorItems.push(item);
        const div = document.createElement("div");
        div.classList.add("itc_chart_indicator");
        div.innerHTML = `<li><div>${item}</div>
      <div>
      <span>
        <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" height="24px" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g id="Guide"/><g id="Notification"/><g id="New_Notification"/><g id="Statistic"/><g id="Favorite"/><g id="Checkbox"/><g id="Writing"/><g id="Italic"/><g id="Underline"/><g id="Setting"><g><circle cx="16" cy="16.6" fill="none" r="2.8" stroke="#1D1D1B" stroke-miterlimit="10"/><path d="M26.1,17.9v-2.5l-3.1-0.9c-0.1-0.4-0.3-0.8-0.5-1.2l1.6-2.9      l-1.8-1.8l-2.9,1.6C19,10,18.6,9.9,18.2,9.7l-0.9-3.1h-2.5l-0.9,3.1c-0.4,0.1-0.8,0.3-1.2,0.5L9.8,8.6L8,10.4l1.6,2.9      c-0.2,0.4-0.4,0.8-0.5,1.2L6,15.4v2.5l3.1,0.9c0.1,0.4,0.3,0.8,0.5,1.2L8,22.8l1.8,1.8l2.8-1.6c0.4,0.2,0.8,0.4,1.2,0.5l0.9,3.1      h2.5l0.9-3.1c0.4-0.1,0.8-0.3,1.2-0.5l2.8,1.6l1.8-1.8L22.4,20c0.2-0.4,0.4-0.8,0.5-1.2L26.1,17.9z" fill="white" stroke="#1D1D1B" stroke-miterlimit="10"/></g></g><g id="Power"/></g></svg>
        </span>
        <span>
        <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="24px" id="Layer_1" fill='white' style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z"/><g><path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z"/></g></g></svg>
        </span>
        <span class="itc_chart_delete_icon"><?xml version="1.0" ?><svg viewBox="0 0 512 512" height="24px" width="24px" fill='white' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z"/><path d="M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z"/><path d="M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z"/><path d="M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z"/><path d="M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z"/><path d="M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z"/></g></svg></span>
      </div></li>`;
        itc_chart_container.appendChild(div);
        const deleteIcon = div.querySelector(".itc_chart_delete_icon");
        deleteIcon.addEventListener("click", function () {
          const index = indicatorItems.indexOf(item);
          if (index > -1) {
            indicatorItems.splice(index, 1);
          }
          div.remove();
        });
      }
    });
  }
};

// const itc_chart_item = document.querySelectorAll(".itc_chart_item");
//   const itc_chart_container = document.getElementById("itc_chart_container");

//   let indicatorItems = [];

//   for (let i = 0; i < itc_chart_item.length; i++) {
//     itc_chart_item[i].addEventListener("click", function () {
//       const item = this.getAttribute("data-key");
//       if (!indicatorItems.includes(item)) {
//         indicatorItems.push(item);
//         const div = document.createElement("div");
//         div.classList.add("itc_chart_indicator");
//         div.innerHTML = `<li><div>${item}</div>
//         <div>
//         <span>
//         <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" height="24px" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g id="Guide"/><g id="Notification"/><g id="New_Notification"/><g id="Statistic"/><g id="Favorite"/><g id="Checkbox"/><g id="Writing"/><g id="Italic"/><g id="Underline"/><g id="Setting"><g><circle cx="16" cy="16.6" fill="none" r="2.8" stroke="#1D1D1B" stroke-miterlimit="10"/><path d="M26.1,17.9v-2.5l-3.1-0.9c-0.1-0.4-0.3-0.8-0.5-1.2l1.6-2.9      l-1.8-1.8l-2.9,1.6C19,10,18.6,9.9,18.2,9.7l-0.9-3.1h-2.5l-0.9,3.1c-0.4,0.1-0.8,0.3-1.2,0.5L9.8,8.6L8,10.4l1.6,2.9      c-0.2,0.4-0.4,0.8-0.5,1.2L6,15.4v2.5l3.1,0.9c0.1,0.4,0.3,0.8,0.5,1.2L8,22.8l1.8,1.8l2.8-1.6c0.4,0.2,0.8,0.4,1.2,0.5l0.9,3.1      h2.5l0.9-3.1c0.4-0.1,0.8-0.3,1.2-0.5l2.8,1.6l1.8-1.8L22.4,20c0.2-0.4,0.4-0.8,0.5-1.2L26.1,17.9z" fill="white" stroke="#1D1D1B" stroke-miterlimit="10"/></g></g><g id="Power"/></g></svg>
//         </span>
//         <span>
//         <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="24px" id="Layer_1" fill='white' style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z"/><g><path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z"/></g></g></svg>
//         </span>
//         <span class="itc_chart_delete_icon"><?xml version="1.0" ?><svg viewBox="0 0 512 512" height="24px" width="24px" fill='white' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z"/><path d="M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z"/><path d="M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z"/><path d="M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z"/><path d="M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z"/><path d="M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z"/></g></svg></span>
//         <span>
//         </div>
//         </li>`;

//         const deleteIcon = div.querySelector(".itc_chart_delete_icon");
//         deleteIcon.addEventListener("click", function () {
//           const listItem = this.parentNode;
//           listItem.parentNode.removeChild(listItem);
//           const item = listItem.textContent.trim();
//           const index = indicatorItems.indexOf(item);
//           if (index !== -1) {
//             indicatorItems.splice(index, 1);
//           }
//         });

//         itc_chart_container.appendChild(div);
//       }
//     });
//   }
