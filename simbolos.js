(function() {
    tinymce.PluginManager.add('gavickpro_tc_button', function( editor, url ) {
        editor.addButton( 'gavickpro_tc_button', {
            title: 'My test button',
            icon: 'icon gavickpro-own-icon',
			
			
      onclick: function() {
editor.windowManager.open( {
                            title: 'Simbolos',	
inline : 1,							
                            body: [
							 {
							  type: 'button',
            icon: 'icon gavickpro-own-icon',
            onclick: function() {
                editor.insertContent('<img src=http://www.moonmentum.com/blog/wp-includes/images/Simbolos_Astrologicos/1.png width=16 height=16 alt=Trigono title=Trigono>');
                    }
                },
				{
							  type: 'button',
            icon: 'icon gavickpro-own-icon',
            onclick: function() {
                editor.insertContent('<img src=http://www.moonmentum.com/blog/wp-includes/images/Simbolos_Astrologicos/2.png width=16 height=16 alt=Trigono title=Trigono>');
                    }
                },
				{
							  type: 'button',
            icon: 'icon gavickpro-own-icon',
            onclick: function() {
                editor.insertContent('<img src=http://www.moonmentum.com/blog/wp-includes/images/Simbolos_Astrologicos/3.png width=16 height=16 alt=Trigono title=Trigono>');
                    }
                }
],
            }
	
	
	
	);
	}				
		});			
        });
})();