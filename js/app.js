/* your code should go here */

var tmpl = '<li>MAIL</li>';

// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
        var lista = [];
        for(var i=0; i<this.messages.length;i++){
        var flag = false;
           for(var j=0; j<this.rules.length;j++){
               if(this.messages[i].indexOf(this.rules[j])!=-1){
                   flag = true;
               }
           }
            if(flag == false){
                lista[lista.length] = this.messages[i];
            }
        }      
        return lista;
    }

  
};

var controller = {
    init: function(){
        MailModel.init();
        view.renderAllMail();
        view.clickFilter();
    },
    
    getMsgslength: function(){
        return MailModel.messages.length;
    },
    
    getMsg: function(index){
        return MailModel.messages[index];
    },
    
    filter: function(){
       var filtered = [];
       filtered = MailModel.filter();
       view.renderFilteredMail(filtered);
    }
};

var view = {
    
    renderAllMail: function(){
        for(var i=0; i<controller.getMsgslength(); i++){
            var tmpl2 = tmpl.replace("MAIL", controller.getMsg(i));
            $(".allmails").append(tmpl2);
        }
    },
    
    clickFilter: function(){
        $(".btn-filter").click(function(){
           controller.filter(); 
        });
    },
    
    renderFilteredMail: function(list){
        $(".allmails").hide();
        for(var i = 0; i< list.length ;i++){
            var tmpl2 = tmpl.replace("MAIL", list[i]);
            $(".result").append(tmpl2);
        }
        
    }
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.



$(document).ready(function(){
    controller.init();
});