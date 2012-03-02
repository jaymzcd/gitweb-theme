$(function(){
    $('table.project_list tr[class]')
        .each(function(){
            var git_link = $(this).find('a.list:eq(0)');
            var name = git_link.text();
            var path = '/var/git/' + name;
            var command = 'git clone koopa.u-dox.com:' + path;
            git_link
                .before(
                    $('<a>', {
                        text: '[clone]',
                        css: {
                            marginRight: '15px',
                            color: '#AFAFAF',
                            cursor: 'pointer'
                        }
                    }
                    ).click(
                        function(){
                            $('<div>', {
                                'class': "copybox"
                            })
                            .text('copy this clone command')
                            .append(
                                $('<input>')
                                    .attr('type', 'text')
                                    .val(command)
                            ).append(
                                $('<a>', {
                                    'class': 'close-copybox',
                                    'text': 'close'
                                })
                            )
                                .insertAfter(this)
                                .show('fast')
                                .find('input')
                                .select();
                        }
                    )
                );

        });

    $('.close-copybox')
        .live('click', function(){
            $(this)
                .parent()
                .hide('fast', function(){
                    $(this).remove();
                });
        });
});


