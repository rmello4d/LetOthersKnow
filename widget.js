WAF.define('LetOthersKnow', function() {

	var widget = WAF.require('waf-core/widget')

	//Creating Widget
    var LetOthersKnow = widget.create('LetOthersKnow');


    LetOthersKnow.prototype.init = function () {
        
        var thisWidget = this;
        
        $(this.node).empty();
        
        var field  = document.createElement('input');
        
        $(this.node).append(field);
        
        //capturing the keypress event     
 		$(field).keypress(function(e) {

			//fire event if enter is pressed
		    if(e.charCode == 13) {	    		
			 		//firing the MellowYellow Event;
			    	thisWidget.fire('checkCompletion', { value: $(field).val() });
		    }		 		
 		
 		}.bind(this));

			
    };
    
    return LetOthersKnow;

   
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
