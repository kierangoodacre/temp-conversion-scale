describe ('Temp conversion', function(){

  describe ('Deslisle to...', function(){

    it('Kelvin', function(){
      expect(convertTemp(-30, "De", "K")).toEqual(393);
    });

  });

});
