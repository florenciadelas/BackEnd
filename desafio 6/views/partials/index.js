function render(data){
    const html = data.map(elem => `<div>
    <span>${elem.email}</span>
    <span>${elem.date}</span>
    <p>${elem.msg}</p>
    </div>`).join(' ');
    document.getElementById('mensajes-chat').innerHTML = html;
}

function renderProductos(data){
  const html = data.map(elem => `
  <tr>
  <th >${elem.id}</th>
  <td>${elem.title}</td>
  <td>$${elem.price}</td>
  <td><img rel="icon" src="${elem.foto}"></td>
  </tr>`).join(' ');
  document.getElementById('lista-productos').innerHTML = html;
}

const socket = io.connect()
socket.on('new-message', (data) => {render(data)})
socket.on('new-product', (data) => {
  console.log(data)
  renderProductos(data)})

function chatFunc(event){
  const fecha = new Date().toLocaleDateString()+ ' ' +new Date().toTimeString()
  const fyh = fecha.split(' ');
  let mensaje = {
      email:document.getElementById('email').value,
      msg:document.getElementById('chatMsg').value,
      date:fyh[0]+' '+fyh[1]
  }
  socket.emit('new-message',mensaje);
  document.getElementById('chatMsg').value = '';
  return false;
}

function prodFunc(event){
  const producto = {
      title:document.getElementById('InputFName').value,
      price:document.getElementById('precio').value,
      foto:document.getElementById('InputPic').value
  }
  socket.emit('new-product',producto);
  document.getElementById('InputFName').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('InputPic').value = '';
  return false;
}