function autoRefresh_div()
		{
		try{

			var html = document.documentElement;
			var lang = html.getAttribute('lang').replace('-', '_');
			if (lang == 'pt_PT'){
                $("#refresh").load("/tempos #refresh");
			}
			if (lang != 'pt_PT'){
                $("#refresh").load("/en_US/tempos #refresh");
			}

		
		}
		catch(e){
		}
		}

		setInterval('autoRefresh_div()', 2000); // refresh div after 1 secs