const endpoint = 'http://localhost:8000/graphql';;
async function getProduct() {
    const query = `
        query {
            products {
                items {
                    id
                    title
                    type
                    description
                    price
                    images {
                        image_id
                        id
                        alt
                        src
                    }
                    quantity
                }
            }
        }
    `;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const data = await response.json();

    if (data && data.data.products.items) {
        return data.data.products.items;
    } else {
        return [];
    }
}

function cancelEdit() {
    // Xử lý logic khi hủy chỉnh sửa
    // Ví dụ: Đặt trạng thái về chế độ xem (view mode) và làm mới dữ liệu
    $("#basicScenario").jsGrid("cancelEdit");
    $("#basicScenario").jsGrid("loadData");
  }

function loadDataGrid() {
    $("#basicScenario").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pActionSize: 15,
        pActionButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [
            { name: "id", title: "Id", type: "string", width: 30},
            {
                name: "images",
                title: "Product",
                itemTemplate: function(val, item) {
                    if (val && val.length > 0) {
                        return `<img src="../assets/images/${val[0].src}" alt="Product Image" style="width: 50px; height: 50px;">`;
                    }
                },
                insertTemplate: function() {
                    var insertControl = this.insertControl = $("<input>").prop("type", "file");
                    return insertControl;
                },
                insertValue: function() {
                    return this.insertControl[0].files[0];
                },
                align: "center",
                width: 50
            },
            { name: 'title', title: "Product Title", type: "text", width: 100,
                editTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "text")
                        .attr("id", "editTitle")
                        .val(item.title);
                    return $editControl;
                },
                insertTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "text")
                        .attr("id", "insertTitle")
                    return $editControl;
                }
            },
            { name: 'type', title: "Entry Type", type: "text", width: 50,
                editTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "text")
                        .attr("id", "editType")
                        .val(item.type);
                    return $editControl;
                },
                insertTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "text")
                        .attr("id", "insertType")
                    return $editControl;
                }
            },
            { name: "quantity", title: "Quantity", type: "number", width: 50,
                editTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "number")
                        .attr("id", "editQuantity")
                        .val(item.quantity);
                    return $editControl;
                },
                insertTemplate: function(value, item) {
                    var $editControl = $("<input>")
                        .attr("type", "number")
                        .attr("id", "insertQuantity")
                    return $editControl;
                }
            },
            {
                type: "control",
                width: 100,
                updateOnBlur: true,
                editButton: false, 
                itemTemplate: function(_, item) {
                  // Tạo template cho cột điều khiển
                  const $deleteButton = $("<button>")
                    .addClass("jsgrid-button jsgrid-delete-button")
                    .on("click", function() {
                        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
                            // Xử lý xóa sản phẩm
                            deleteProduct(item.id, {
                                title: item.title
                            })
                        }
                        cancelEdit();
                    });
          
                  const $editButton = $("<button>")
                    // .addClass("editButton")
                    .addClass("jsgrid-button jsgrid-edit-button")
          
                  const $controlContainer = $("<div>")
                    .append($editButton)
                    .append($deleteButton);     
          
                  return $controlContainer;
                },
                editTemplate: function(value, item) {
                    const $updateButton = $("<button>")
                      .addClass("jsgrid-button jsgrid-update-button")
                      .on("click", function() {
                        if (confirm("Bạn có chắc chắn muốn cập nhật dữ liệu?")) {
                            updateProduct({
                                id: item.id,
                                title: $("#editTitle").val(),
                                type: $("#editType").val(),
                                quantity: $("#editQuantity").val() || 0,
                            });
                        }
                      });

                    const $cancelButton = $("<button>")
                      .addClass("jsgrid-button jsgrid-cancel-button")
                      .on("click", function() {
                        cancelEdit();
                      });
                
                    const $controlContainer = $("<div>")
                      .append($updateButton)
                      .append($cancelButton);
                
                    return $controlContainer;
                },
                insertTemplate: function() {
                    const $insertButton = $("<button>")
                      .addClass("jsgrid-button jsgrid-insert-button")
                      .on("click", function() {
                        if (confirm("Bạn có chắc chắn muốn cập nhật dữ liệu?")) {
                            const newProduct = {
                            title: $("#editTitle").val(),
                            type: $("#editType").val(),
                            quantity: $("#editQuantity").val() || 0,
                            };
                            console.log('$("#insertTitle").val()', $("#editTitle").val());
                            addProduct({
                                title: $("#insertTitle").val() || "",
                                type: $("#insertType").val() || "",
                                quantity: $("#insertQuantity").val() || '0',
                            });
                        }
                    });
                  
                    const $controlContainer = $("<div>")
                      .append($insertButton)
                  
                    return $controlContainer;
                }
            }
        ]
    });
}



(async function($) {
    "use strict";

    db.clients = await getProduct();
    loadDataGrid();
})(jQuery);

function deleteProduct(id) {

    const deleteProductMutation = `
        mutation($id: String!) {
            deleteProduct(id: $id) {
                success
            }
        }
    `;

    fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            query: deleteProductMutation,
            variables: { id }
        })
    })
    .then(response => response.json())
    .then(async data => {
        if(data?.data?.deleteProduct?.success) {
            db.clients = await getProduct();
            loadDataGrid();
        }
    })
    .catch(error => {
        console.error('Không thể xóa sản phẩm:', error);
    })
}

function updateProduct(product) {

    const updateProductMutation = `
    mutation UpdateProduct($id: String!, $title: String!, $type: String!, $quantity: String!) {
        updateProduct(id: $id, title: $title, type: $type, quantity: $quantity) {
            success
        }
      }
    `;

    fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            query: updateProductMutation,
            variables: { ...product }
        })
    })
    .then(response => response.json())
    .then(async data => {
        if(data?.data?.updateProduct?.success) {
            db.clients = await getProduct();
            loadDataGrid();
        }
    })
    .catch(error => {
        console.error('Không thể update sản phẩm:', error);
    })
}

function addProduct(product) {
    console.log('product', product);
  
    const query = `
      mutation ($title: String!, $type: String!, $quantity: String!) {
        createProduct(title: $title, type: $type, quantity: $quantity) {
          id
          title
          type
          quantity
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
        variables: { ...product }
      })
    })
    .then((response) => response.json())
    .then(async (data) => {
        console.log('data', data);
        if(data?.data?.createProduct) {
            db.clients = await getProduct();
            loadDataGrid();
        }
    })
    .catch((error) => {
    console.error('Thêm sản phẩm thất bại:', error);
    throw error;
    });
}


