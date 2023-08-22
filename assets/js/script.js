console.log($('#modalPreview .modal-body'))

$('.carousel-item > img').click(function(){
    var url_img = $(this).attr('src')
    $('#modalPreview .modal-body').empty()
    $('#modalPreview .modal-body').append(`<img src="${url_img}" alt="Pagina do preview" class="img-fluid">`)
    $('#modalPreview').modal('show')
})

