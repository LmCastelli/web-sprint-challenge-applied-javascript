const Header = (title, date, temp) => {

  // Initialize 

  const header = document.createElement('div')
  const articleDate = document.createElement('span')
  const articleTitle = document.createElement('h1')
  const todayTemp = document.createElement('span')

  // Add classes

  header.classList.add('header');
  articleDate.classList.add('date');
  todayTemp.classList.add('temp');

  // Add Text Content

  articleDate.textContent = date
  articleTitle.textContent = title
  todayTemp.textContent = temp

  // Structuring

  header.appendChild(articleDate)
  header.appendChild(articleTitle)
  header.appendChild(todayTemp)
  
  // console.log(header);
  return header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const newHeader = Header("Zebra on Moon!", "October 31st", "100 F");
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }
