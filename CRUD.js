const { data } = require("jquery");
const { json } = require("mocha/lib/reporters");

function create(data){
    return $.ajax({
        dataType: "json",
        contentType: 'application/json',
        URL: 'https://crudcrud.com/api/3e7a0eac160f40cb981f1d5a1ed46201',
        data: data,
       type: 'POST'
    });
    
}


function read(id) {
    return $.get('https://crudcrud.com/api/3e7a0eac160f40cb981f1d5a1ed46201/' + id);
}

function update(data) {
    return $.ajax ({
        contentType: 'application/json',
        URL:'https://crudcrud.com/api/3e7a0eac160f40cb981f1d5a1ed46201/' + data.id,
        data: data,
        type: 'PUT'
    });
}

function remove(data) {
    return $.ajax({
    URL:'https://crudcrud.com/api/3e7a0eac160f40cb981f1d5a1ed46201' + data.id,
    type: 'DELETE'
    });
}
class VinylRecords {
    constructor(recordAlbum){
        this.name = recordAlbum.name;
        this.artist = recordAlbum.artist;
        this.trackList = recordAlbum.trackList;
        this.publicationYear = recordAlbum.publicationYear;
        this.recordLabel = recordAlbum.recordLabel;
        this.favorite = recordAlbum.favorite;
    }
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

// $(document).ready(function(){
//     var counter = 0;

//     $("#addrow").on("click", function(){
//         var newRow = $("<tr>");
//         var cols = "";

//         cols += '<td><input type = "text" class = "form-control" name="Album Name' + counter + '"/></td>';
//         cols += '<td><input type = "text" class= "form-control" name="Artist' + counter + '"/></td>';
//         cols += '<td><input type = "text" class= "form-control" name= "Track List' + counter + '"/></td>';
//         cols += '<td><input type = "text" class= "form-control" name= "Record Label' + counter + '"/></td>';
//         cols += '<td><input type = "text" class= "form-control" name= "Year' + counter + '"/></td>';
//         cols += '<td><input type = "text" class= "form-control" name= "Favorite' + counter + '" /></td>';

//         cols += '<td><input type="button" class= ibtnDel btn-md btn-danger" value="Delete"></td>';
//         newRow.append(cols);
//         $("table.order-list").append(newRow);
//         counter++;
//     });

//     $("table.order-list").on("click","ibnDel", function(){
//         $(this).closest("tr").remove();
//         counter-= 1;
//     });

});