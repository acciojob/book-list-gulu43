//your JS code here. If required.
let title_var = document.getElementById('title');
let author_var = document.getElementById('author');
let isbn_var = document.getElementById('isbn');
let submit_var = document.getElementById('submit');

submit_var.addEventListener('click', function (event) {

    let tb_body_var = document.getElementById('book-list');
    let row_var = document.createElement('tr');
    let col_title_var = document.createElement('td');
    col_title_var.textContent = title_var.value;
    let col_author_var = document.createElement('td');
    col_author_var.textContent = author_var.value;
    let col_isbn_var = document.createElement('td');
    col_isbn_var.textContent = isbn_var.value;

    let col_delete_var = document.createElement('td');
    let delete_btn = document.createElement('button');
	delete_btn.className = 'delete';
    delete_btn.textContent = 'X';
    delete_btn.style.color = 'red';
    col_delete_var.append(delete_btn);

    delete_btn.addEventListener('click', function () {
        tb_body_var.removeChild(row_var);
    });
    col_delete_var.appendChild(delete_btn);

    row_var.append(col_title_var, col_author_var, col_isbn_var, col_delete_var);
    tb_body_var.append(row_var);
});




