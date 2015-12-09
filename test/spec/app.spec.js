describe("MailModel", function() {
  
  it("init should work properly", function(){
    MailModel.init();
      
    expect(MailModel.rules).toEqual(rules);
    expect(MailModel.messages).toEqual(msgs);  
  });
 
  it("filter should work properly", function(){
    MailModel.init();
    var list = MailModel.filter();
      
    expect(list).toEqual(["carlo@gmail.com", "trentose2@googlegroups.com"]);
     
  });
    
});
