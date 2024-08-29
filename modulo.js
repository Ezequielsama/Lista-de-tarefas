var lista_ta = [];

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const Tarefa = $('#addInput').val().trim();
        const novoItem = $('#addLista');

        if (lista_ta.includes(Tarefa)) {
            var AlertMsg = `${Tarefa} já existe nas Tarefas. Verifique novamente.`;
            alert(AlertMsg);
        } else {
            lista_ta.push(Tarefa);
            $(`<li>${Tarefa}</li>`).appendTo(novoItem);

            $(novoItem).fadeIn('slow');
            $('#addInput').val(''); 
        }
    });

    $('#delete').click(function() {
        $('#addLista').empty(); 
        lista_ta = [];
    });
});
