$(function(){
    $('table.project_list tr[class]')
        .each(function(){
            var git_link = $(this).find('a.list:eq(0)');
            var name = git_link.text();
            var path = '/var/git/' + name;
            git_link
                .before(
                    $('<a>', {
                        text: '[clone]',
                        css: {
                            marginRight: '15px',
                            color: '#AFAFAF',
                            cursor: 'pointer'
                            }
                    }).click(
                        function(){
                            alert('git clone koopa.u-dox.com:' + path);
                        }
                    )
                )
        });
});
