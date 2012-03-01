$(function(){
    $('table.project_list tr[class]')
        .each(function(){
            var git_link = $(this).find('a.list:eq(0)');
            var name = git_link.text();
            git_link
                .after(
                    $('<a>', {
                        text: '[clone]',
                        css: {marginLeft: '10px'}
                    }).click(
                        function(){
                            alert('git clone koopa.u-dox.com:/var/git/' + name);
                        }
                    )
                )
        });
});
