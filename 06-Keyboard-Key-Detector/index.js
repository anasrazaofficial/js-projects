document.querySelector('body').addEventListener('keyup', (e) => {
  console.log(e);
  document.querySelector('div').innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
  <td>${e.key == ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
})