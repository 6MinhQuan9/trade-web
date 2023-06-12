"use strict";

function addProduct() {
  // Lấy giá trị từ các trường input
  var title = $("#validationCustom01").val();
  var category = $("#productCategory").val();
  var price = parseFloat($("#validationCustom02").val());
  var images = $("#singleFileUpload").val();
  var description = $("#editor1").val();

  const endpoint = 'http://localhost:8000/graphql';
  const query = `
    mutation ($title: String!, $price: Float!, $description: String!) {
      createProduct(title: $title, price: $price, description: $description) {
        id
        title
        price
        description
      }
    }
  `;

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        title,
        price,
        description: 'sss'
      }
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('chay dc roi ma', data);
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }
      return data.data.addProduct;
    })
    .catch((error) => {
      console.error('Thêm sản phẩm thất bại:', error);
      throw error;
    });

  alert("Sản phẩm đã được thêm thành công!");
}